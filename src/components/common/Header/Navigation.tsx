'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useTranslations } from 'next-intl';
import TransitionLink from '../TransitionLink';
import { removeLocaleFromPathname } from '@/lib/helpers/removeLocaleFromPathname';

type NavItem = {
  href: string;
  label: keyof (typeof import('@/locales/en.json'))['Navigation'];
};

const Navigation: React.FC = () => {
  const t = useTranslations();
  const pathname = usePathname();

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
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isActive ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        {children}
      </TransitionLink>
    );
  };

  const navItems: NavItem[] = [
    { href: '/', label: 'home' },
    { href: '/our-services', label: 'services' },
    // { href: '/how-it-works', label: 'howItWorks' },
    { href: '/our-references', label: 'references' },
    { href: '/our-team', label: 'our-team' },
    // { href: '/about', label: 'about' },
    { href: '/contact-us', label: 'contact-us' },
  ];

  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="flex space-x-6">
        {navItems.map((item: NavItem) => (
          <NavigationMenuItem key={item.href}>
            <NavLink href={item.href}>{t(`Navigation.${item.label}`)}</NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
