// AlternatingText.client.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

type Props = {
  text1: string;
  text2: string;
};

const AlternatingText: React.FC<Props> = ({ text1, text2 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text1Element = text1Ref.current;
    const text2Element = text2Ref.current;

    if (!container || !text1Element || !text2Element) return;

    // Initial fade-in animation
    const fadeInTl = gsap.timeline();
    fadeInTl.from(container, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        // Start the alternating animation after fade-in
        startAlternatingAnimation();
      },
    });

    function startAlternatingAnimation() {
      const tl = gsap.timeline({ repeat: -1 });

      gsap.set(text2Element, { yPercent: 100, opacity: 0 });

      tl.to(text1Element, {
        duration: 0.5,
        yPercent: -100,
        opacity: 0,
        ease: 'power2.inOut',
      })
        .to(
          text2Element,
          {
            duration: 0.5,
            yPercent: 0,
            opacity: 1,
            ease: 'power2.inOut',
          },
          '-=0.25'
        )
        .to({}, { duration: 2 }) // Pause for 2 seconds
        .to(text2Element, {
          duration: 0.5,
          yPercent: -100,
          opacity: 0,
          ease: 'power2.inOut',
        })
        .to(
          text1Element,
          {
            duration: 0.5,
            yPercent: 0,
            opacity: 1,
            ease: 'power2.inOut',
          },
          '-=0.25'
        )
        .to({}, { duration: 2 }); // Pause for 2 seconds
    }

    return () => {
      gsap.killTweensOf([container, text1Element, text2Element]);
    };
  }, [text1, text2]);

  return (
    <div
      ref={containerRef}
      className="h-16 relative overflow-hidden opacity-0" // Set initial opacity to 0
    >
      <div
        ref={text1Ref}
        className="absolute inset-0 flex items-center justify-start"
      >
        <span className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
          {text1}
        </span>
      </div>
      <div
        ref={text2Ref}
        className="absolute inset-0 flex items-center justify-start"
      >
        <span className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
          {text2}
        </span>
      </div>
    </div>
  );
};

export default AlternatingText;
