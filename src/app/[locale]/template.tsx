'use client';

import { useEffect } from 'react';
import { animatePageIn } from '@/lib/animations/animationPageInOut';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className="page-wrapper">
      <div id="page-content" className="opacity-0">
        {children}
      </div>
    </div>
  );
}
