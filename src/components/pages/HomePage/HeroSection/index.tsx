'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import TransitionLink from '@/components/common/TransitionLink';
import Image from 'next/image'; 
import HeroImage from '@/assets/images/hero_image.png'

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const t = useTranslations('Home.Hero');
  const sectionRef = useRef(null);
  
  const refs = {
    title: useRef(null),
    brandName: useRef(null),
    description: useRef(null),
    cta: useRef(null),
    scrollIndicator: useRef(null),
    heroImage: useRef(null)
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(refs.heroImage.current, {
        opacity: 0,
        scale: 1.1,
        duration: 1.2
      })
      .from(refs.title.current, { 
        opacity: 0, 
        y: 100, 
        duration: 1 
      }, '-=0.8')
      .from(refs.brandName.current, { 
        opacity: 0, 
        y: 50, 
        duration: 1 
      }, '-=0.7')
      .from(refs.description.current, { 
        opacity: 0, 
        y: 30, 
        duration: 0.8 
      }, '-=0.5')
      .from(refs.cta.current, { 
        opacity: 0, 
        y: 20, 
        duration: 0.8 
      }, '-=0.3');

      gsap.to(refs.scrollIndicator.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-slate-50"
    >
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAgIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-[0.05]" />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-yellow-500/20 rounded-full blur-3xl -top-[400px] -right-[200px]" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -bottom-[300px] -left-[150px]" />
      </div>

      {/* Construction Image */}
      <div 
        ref={refs.heroImage}
        className="absolute top-40 right-32"
      >
        <Image
          src={HeroImage}
          alt="Construction Visual"
          objectFit="cover"
          height={500}
          className="opacity-90 mix-blend-multiply"
        />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-8 py-2 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl">
          <span
            ref={refs.brandName}
            className="block leading-tight text-4xl md:text-6xl mb-6 font-bold font-serif bg-gradient-to-r from-secondary via-primary to-indigo-800 text-transparent bg-clip-text"
          >
            {t('title')}
          </span>

          <p
            ref={refs.description}
            className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
          >
          {t('description')}
          </p>

          <div ref={refs.cta} className="flex flex-col sm:flex-row gap-4">
            <TransitionLink href={t('Cta.GetStarted.link')}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-bg to-indigo-600 hover:from-bg hover:to-primary text-white text-lg px-8 py-6 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 font-medium"
              >
              {t('Cta.GetStarted.text')}
                <ArrowRight className="ml-2" />
              </Button>
            </TransitionLink>

            <TransitionLink href={t('Cta.LearnMore.link')}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border text-primary text-lg px-8 py-6 rounded-md "
              >{t('Cta.LearnMore.text')}
                
              </Button>
            </TransitionLink>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={refs.scrollIndicator}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;