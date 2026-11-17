'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { MenuIcon } from 'lucide-react'

import { Link } from '@/i18n/navigation'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { CvLink } from './CvLink'
import { LanguageToggle } from './LanguageToggle'

/** Section anchors shown in the navigation, in page order (PLAN.md § 4.5). */
export const NAV_SECTIONS = ['work', 'process', 'experience', 'stack', 'contact'] as const

/** Below 768px: a sheet from the right. Esc closes it and Base UI returns focus to the trigger. */
export function MobileNav({ className }: { className?: string }) {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" size="icon" aria-label={t('openMenu')} className={className} />}>
        <MenuIcon aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" closeLabel={t('closeMenu')} className="gap-0">
        <SheetHeader className="h-16 justify-center border-b border-border py-0">
          <SheetTitle>{t('menuTitle')}</SheetTitle>
        </SheetHeader>
        <nav className="px-5 py-4">
          <ul className="flex flex-col">
            {NAV_SECTIONS.map((id) => (
              <li key={id} className="border-b border-border">
                <Link
                  href={{ pathname: '/', hash: id }}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center text-title transition-colors duration-(--dur-fast) ease-(--ease-out) hover:text-muted-foreground"
                >
                  {t(id)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="flex-row items-center justify-between gap-3 border-t border-border">
          <LanguageToggle />
          <CvLink className={buttonVariants({ variant: 'default' })} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
