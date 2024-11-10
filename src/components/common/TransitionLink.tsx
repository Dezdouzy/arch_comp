'use client';

import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/lib/animations/animationPageInOut';
import Link from 'next/link';
import { removeLocaleFromPathname } from '@/lib/helpers/removeLocaleFromPathname';

type Props = {
  href: string;
  children: React.ReactNode | string | number;
  component?: React.ElementType;
  [key: string]: any;
};

const TransitionLink = ({
  href,
  children,
  component: Component = Link,
  ...otherProps
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: any) => {
    e.preventDefault();

    const pathnameWithoutLocale = removeLocaleFromPathname(pathname);

    if (pathnameWithoutLocale !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <Component href={href} onClick={handleClick} {...otherProps}>
      {children}
    </Component>
  );
};

export default TransitionLink;
