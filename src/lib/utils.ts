import { createCn } from 'cn/config'

// The type-scale utilities in globals.css are font sizes; without this they would
// be merged away as text colours (e.g. `text-label text-muted-foreground`).
export const cn = createCn({
  extend: { classGroups: { 'font-size': [{ text: ['display', 'headline', 'title', 'body', 'label'] }] } },
})
