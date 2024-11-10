'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Star } from 'lucide-react';

import aboutUsImage from '@/assets/images/about-us.jpeg';
import TransitionLink from '@/components/common/TransitionLink';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutUsSection: React.FC = () => {
  const t = useTranslations('Home.AboutUsSection');
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from(contentRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto max-w-7xl px-8">
        <h2 className="text-center font-bold text-primary text-4xl md:text-5xl font-serif mb-16 text-gray-800">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="absolute inset-0 bg-primary opacity-20 rounded-lg transform -rotate-3"></div>
            <Image
              src={aboutUsImage}
              alt={t('imageAlt')}
              width={600}
              height={800}
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>

          <div ref={contentRef}>
            <h3 className="text-3xl font-bold font-serif mb-8 text-primary">
              {t('subtitle')}
            </h3>
            <p className="text-gray-700 mb-6">{t('description1')}</p>
            <p className="text-gray-700 mb-8">{t('description2')}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <FeatureCard
                icon={<Target className="w-8 h-8 text-primary" />}
                title={t('featureTitle1')}
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-primary" />}
                title={t('featureTitle2')}
              />
              <FeatureCard
                icon={<Star className="w-8 h-8 text-primary" />}
                title={t('featureTitle3')}
              />
            </div>

            <TransitionLink href={t('LearnMoreCTA.link')}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white"
              >
                {t('LearnMoreCTA.text')} <ArrowRight className="ml-2" />
              </Button>
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
    {icon}
    <p className="font-semibold text-gray-800">{title}</p>
  </div>
);

export default AboutUsSection;
