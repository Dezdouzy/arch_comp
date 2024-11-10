// components/Header.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../Logo';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const tl = gsap.timeline({
        scrollTrigger: {
          start: 'top top',
          end: '+=100',
          toggleActions: 'play none none reverse',
          onUpdate: (self) => {
            setIsScrolled(self.progress > 0);
          },
        },
      });

      tl.to(header, {
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed h-20 top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-transparent dark:bg-gray-900/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
