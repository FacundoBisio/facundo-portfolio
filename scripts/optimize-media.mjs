#!/usr/bin/env node
// Converts raw recordings and screenshots for a case study into web formats.
//
//   node scripts/optimize-media.mjs <slug> <file> [file…]
//
// Videos (.mov .mp4 .m4v .mkv) → <name>.mp4 (H.264) + <name>.webm (VP9) + <name>.webp poster,
//   1280 px wide, no audio track (slides play muted).
// Images (.png .jpg .jpeg .webp .tif .tiff) → <name>.webp + <name>.avif, at most 1280 px wide.
// Output goes to public/media/<slug>/. Requires ffmpeg on PATH (built with libx264, libvpx-vp9,
// libwebp and libaom-av1, as the common full builds are).

import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, statSync } from 'node:fs'
import { basename, extname, join, resolve } from 'node:path'

const VIDEO = new Set(['.mov', '.mp4', '.m4v', '.mkv'])
const IMAGE = new Set(['.png', '.jpg', '.jpeg', '.webp', '.tif', '.tiff'])
const WIDTH = 1280
const MAX_CLIP_MB = 4

function fail(message) {
  console.error(`optimize-media: ${message}`)
  process.exit(1)
}

const [slug, ...inputs] = process.argv.slice(2)
if (!slug || inputs.length === 0) {
  fail('usage: node scripts/optimize-media.mjs <slug> <file> [file…]\n  e.g. node scripts/optimize-media.mjs ffmates ~/Desktop/checkout.mov')
}
if (!/^[a-z0-9-]+$/.test(slug)) fail(`slug "${slug}" must be lowercase letters, digits and dashes, like the project slugs in src/content/projects.ts`)

const probe = spawnSync('ffmpeg', ['-hide_banner', '-version'], { encoding: 'utf8' })
if (probe.error || probe.status !== 0) {
  fail(
    'ffmpeg was not found on PATH.\n' +
      '  Windows: winget install Gyan.FFmpeg   (then open a new terminal)\n' +
      '  macOS:   brew install ffmpeg\n' +
      '  Linux:   sudo apt install ffmpeg',
  )
}

const outDir = resolve('public', 'media', slug)
mkdirSync(outDir, { recursive: true })

function ffmpeg(args, output) {
  const run = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args, output], { stdio: 'inherit' })
  if (run.status !== 0) fail(`ffmpeg failed while writing ${output}`)
  const mb = statSync(output).size / 1024 / 1024
  console.log(`  ${basename(output).padEnd(32)} ${mb.toFixed(2)} MB`)
  return mb
}

// Even height keeps H.264 and VP9 encoders happy; never upscale a smaller source.
const scale = `scale='min(${WIDTH},iw)':-2`

for (const input of inputs) {
  if (!existsSync(input)) fail(`file not found: ${input}`)
  const ext = extname(input).toLowerCase()
  const name = basename(input, extname(input)).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const out = (suffix) => join(outDir, `${name}.${suffix}`)
  console.log(`${input}`)

  if (VIDEO.has(ext)) {
    const mp4 = ffmpeg(
      ['-i', input, '-an', '-vf', scale, '-c:v', 'libx264', '-preset', 'slow', '-crf', '26', '-pix_fmt', 'yuv420p', '-movflags', '+faststart'],
      out('mp4'),
    )
    const webm = ffmpeg(
      ['-i', input, '-an', '-vf', scale, '-c:v', 'libvpx-vp9', '-crf', '36', '-b:v', '0', '-row-mt', '1'],
      out('webm'),
    )
    // Poster from one second in, past fade-ins and blank first frames.
    ffmpeg(['-ss', '1', '-i', input, '-frames:v', '1', '-vf', scale, '-c:v', 'libwebp', '-quality', '82'], out('webp'))
    if (Math.max(mp4, webm) > MAX_CLIP_MB) {
      console.warn(`  warning: over ${MAX_CLIP_MB} MB. Trim the clip (15–40 s) or raise -crf in this script.`)
    }
  } else if (IMAGE.has(ext)) {
    ffmpeg(['-i', input, '-vf', scale, '-c:v', 'libwebp', '-quality', '85'], out('webp'))
    ffmpeg(['-i', input, '-vf', scale, '-c:v', 'libaom-av1', '-still-picture', '1', '-crf', '30', '-cpu-used', '6'], out('avif'))
  } else {
    fail(`unsupported file type "${ext}" (${input}). Videos: ${[...VIDEO].join(' ')}; images: ${[...IMAGE].join(' ')}`)
  }
}

console.log(`\nDone. Files are in ${outDir}. Set src / webm / poster in src/content/projects.ts as /media/${slug}/<name>.<ext>.`)
