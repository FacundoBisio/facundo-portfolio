import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Skip API routes, Next internals, extensionless metadata routes and anything with a file extension.
  // The OG image is left alone so the English `/en/opengraph-image…` URL answers without a redirect.
  matcher: ['/((?!api|_next|_vercel|apple-icon|.*opengraph-image|.*\\..*).*)'],
}
