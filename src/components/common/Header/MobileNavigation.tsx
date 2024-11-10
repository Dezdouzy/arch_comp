// components/MobileNavigation.tsx
'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import TransitionLink from '../TransitionLink';
import { removeLocaleFromPathname } from '@/lib/helpers/removeLocaleFromPathname';

type NavItem = {
  href: string;
  label: keyof (typeof import('@/locales/en.json'))['Navigation'];
};

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { href: '/', label: 'home' },
    { href: '/our-services', label: 'services' },
    // { href: '/how-it-works', label: 'howItWorks' },
    { href: '/our-references', label: 'references' },
    { href: '/our-team', label: 'our-team' },
    { href: '/contact', label: 'contact-us' },
  ];

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const pathnameWithoutLocale = removeLocaleFromPathname(pathname);
    const isActive = pathnameWithoutLocale === href;

    return (
      <TransitionLink
        href={href}
        className={`block py-2 text-lg ${
          isActive ? 'text-primary' : 'text-muted-foreground'
        }`}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </TransitionLink>
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {t(`Navigation.${item.label}`)}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
