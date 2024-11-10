import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageIn = () => {
  const content = document.getElementById('page-content');
  
  if (content) {
    gsap.to(content, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const content = document.getElementById('page-content');
  
  if (content) {
    gsap.to(content, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        router.push(href);
      }
    });
  }
};
