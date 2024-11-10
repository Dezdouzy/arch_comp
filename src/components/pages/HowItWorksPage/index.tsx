'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';

// Types
interface StepProps {
  number: number;
  title: string;
  description: string;
}

interface BackgroundSVGProps {
  className?: string;
}

// Components
const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-full">
    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mb-4 flex-shrink-0">
      {number}
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
      {title}
    </h3>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
      {description}
    </p>
  </div>
);

const CurvedArrow: React.FC = () => (
  <div className="w-full md:w-24 h-24 relative">
    <svg
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 md:rotate-0"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 50C10 30 30 10 50 10C70 10 90 30 90 50"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        className="text-primary"
      />
      <path
        d="M80 50L90 60L100 50"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
    </svg>
  </div>
);

const BackgroundSVG: React.FC<BackgroundSVGProps> = ({ className }) => (
  <svg
    className={className}
    width="400"
    height="400"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="80" stroke="#E2E8F0" strokeWidth="2" />
    <path
      d="M60 100C60 77.9086 77.9086 60 100 60V60C122.091 60 140 77.9086 140 100V100C140 122.091 122.091 140 100 140V140C77.9086 140 60 122.091 60 100V100Z"
      stroke="#E2E8F0"
      strokeWidth="2"
    />
    <path
      d="M80 100C80 88.9543 88.9543 80 100 80V80C111.046 80 120 88.9543 120 100V100C120 111.046 111.046 120 100 120V120C88.9543 120 80 111.046 80 100V100Z"
      stroke="#E2E8F0"
      strokeWidth="2"
    />
  </svg>
);

const HowItWorksPage: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const arrowsRef = useRef<(HTMLDivElement | null)[]>([]);

  const t=useTranslations('HowItWorks')
  useEffect(() => {
    // Animate steps and arrows
    const elements = stepsRef.current
      .flatMap((step, index) => [step, arrowsRef.current[index]])
      .filter(Boolean);

    gsap.set(elements, {
      opacity: 0,
      y: 50,
    });

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.5,
    });
  }, []);

  const steps: StepProps[] = [
    {
      number: 1,
      title: t('Steps.One.title'),
      description:
        t('Steps.One.description'),
    },
    {
      number: 2,
      title: t('Steps.Two.title'),
      description:
        t('Steps.Two.description'),
    },
    {
      number: 3,
      title: t('Steps.Three.title'),
      description:
        t('Steps.Three.description'),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-20 relative overflow-hidden"
    >
      <BackgroundSVG className="absolute top-0 left-0 opacity-20 transform -translate-x-1/4 -translate-y-1/4" />
      <BackgroundSVG className="absolute bottom-0 right-0 opacity-20 transform translate-x-1/4 translate-y-1/4" />
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-center font-serif mb-10 md:mb-16 text-gray-800"
        >
          {t('title')}
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
          {steps.map((step, index: number) => (
            <React.Fragment key={step.number}>
              <div
                ref={(el: any) => (stepsRef.current[index] = el)}
                className="w-full md:w-1/4 flex flex-col"
              >
                <Step {...step} />
              </div>
              {index < steps.length - 1 && (
                <div
                  ref={(el: any) => (arrowsRef.current[index] = el)}
                  className="w-full md:w-auto"
                >
                  <CurvedArrow />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
