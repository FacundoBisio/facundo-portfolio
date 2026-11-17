import { notFound } from 'next/navigation'

// Any URL no other route matches gets the localized not-found page of its segment.
export default function CatchAll() {
  notFound()
}
