# Facundo Bisio — Full-Stack Product Developer

Portfolio personal: [facundo-portfolio-two.vercel.app](https://facundo-portfolio-two.vercel.app). Inglés en `/`, español en `/es`.

Desarrollador full-stack orientado a producto, con 2+ años construyendo productos web de punta a punta (modelo de datos, APIs, interfaz, deploy e iteración) para clientes de Argentina y España. Hoy construyo y opero dos plataformas por suscripción para clientes que pagan, que salen a producción en diciembre de 2026. Córdoba, Argentina · UTC-3 · disponible para trabajo remoto.

## Stack del sitio

Next.js 15 (App Router) · React 19 · TypeScript estricto · Tailwind CSS v4 · shadcn/ui (Base UI) · next-intl · Motion.

- Copy: `src/i18n/messages/{en,es}.ts`. Proyectos y casos de estudio: `src/content/projects.ts`. Stack: `src/content/stack.ts`. Datos de contacto y CV: `src/content/site.ts`.
- Diseño: `DESIGN.md` (tokens en `src/app/globals.css`). Producto y audiencia: `PRODUCT.md`.
- CV por idioma en `public/cv/`.

## Media

Los videos, capturas y diagramas de cada case study viven en `public/media/<slug>/` y se declaran en `src/content/projects.ts`. Mientras un slide no tiene `src`, el carrusel muestra un placeholder con el tipo de slide y su caption.

**Requisito:** ffmpeg en el `PATH` (`winget install Gyan.FFmpeg` en Windows, `brew install ffmpeg` en macOS, `sudo apt install ffmpeg` en Linux). El script corta con un mensaje claro si no lo encuentra.

**Grabar:** clips de 15 a 40 segundos del producto en uso, sin audio (se reproducen en silencio), a 1280 px de ancho o más. Las capturas, a la resolución de pantalla normal.

**Procesar:**

```bash
node scripts/optimize-media.mjs <slug> <archivo> [archivo…]
# ejemplo
node scripts/optimize-media.mjs ffmates ~/Desktop/checkout.mov ~/Desktop/cart.png
```

- Video (`.mov`, `.mp4`, `.m4v`, `.mkv`) → `<nombre>.mp4` (H.264), `<nombre>.webm` (VP9) y `<nombre>.webp` (poster, frame del segundo 1). 1280 px de ancho, sin pista de audio. Avisa si un clip pasa de 4 MB: recortalo o subí el `-crf` en el script.
- Imagen (`.png`, `.jpg`, `.jpeg`, `.webp`, `.tif`) → `<nombre>.webp` y `<nombre>.avif`, como máximo 1280 px de ancho.
- Los diagramas se pueden dejar en `.svg` directamente en `public/media/<slug>/`.

**Cargar:** en el slide correspondiente de `projects.ts`, completá `src` (el `.mp4` o la imagen), y para video también `webm` y `poster`, con rutas `/media/<slug>/<nombre>.<ext>`. Después borrá el `// TODO: record` de ese slide.

El video se reproduce solo cuando su slide está visible y se pausa al salir. Con `prefers-reduced-motion` no hay autoplay: se ve el poster con un botón de play.

---

## Correr localmente

```bash
git clone https://github.com/FacundoBisio/facundo-portfolio.git
cd facundo-portfolio
npm install
npm run dev
```
