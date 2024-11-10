'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialCard from './TestimonialCard';
import { Sparkles } from 'lucide-react';


import sarahSmithImg from '@/assets/images/our_references/sarah_smith.jpg';
import johnConnorImg from '@/assets/images/our_references/john_connor.jpg';
import globalCorpLogo from '@/assets/images/our_references/global_corp.png';
import techInnovatorsIncLogo from '@/assets/images/our_references/tech_innovators_inc.png';

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  id: number;
  name: string;
  company?: string;
  position?: string;
  image?: StaticImageData;
  logo?: StaticImageData;
  testimonial: string;
  type: string;
};

const ReferencesPage: React.FC = () => {
  const t = useTranslations('OurReferences');
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Tech Innovators Inc.',
      logo: techInnovatorsIncLogo,
      testimonial: t('Client1.testimonial'),
      type: 'company',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      company: 'StartUp Solutions',
      position: t('Client2.position'),
      image: sarahSmithImg,
      testimonial: t('Client2.testimonial'),
      type: 'user',
    },
    {
      id: 3,
      name: 'Global Corp',
      logo: globalCorpLogo,
      testimonial: t('Client3.testimonial'),
      type: 'company',
    },
    {
      id: 4,
      name: 'John Connor',
      position: t('Client4.position'),
      image: johnConnorImg,
      company: 'Vertex Dynamics',
      testimonial: t('Client4.testimonial'),
      type: 'user',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-in', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // @ts-ignore
      gsap.from(cardsRef.current?.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      });

      gsap.to('.sparkle', {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-bg from-primary via-slate-900"
    >
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAgIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-[0.03]" />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-3xl -top-[400px] -right-[200px]" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -bottom-[300px] -left-[150px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 bg-primary text-transparent bg-clip-text fade-in">
            {t('title')}
          </h1>
          <p className="text-secondary text-center text-lg max-w-2xl mx-auto fade-in ">
            {t('description')}
          </p>
          <Sparkles className="absolute top-0 left-1/4 text-yellow-400/50 w-8 h-8 sparkle" />
          <Sparkles className="absolute -bottom-8 right-1/4 text-blue-400/50 w-6 h-6 sparkle" />
        </div>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={testimonial.id}
              className={`w-full ${
                index >= 3 && testimonials.length % 3 !== 0
                  ? 'lg:col-span-3 lg:max-w-md'
                  : ''
              }`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesPage;