'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import constructionSvg from '@/assets/images/services/construction.svg';
import construction2Svg from '@/assets/images/services/construction-2.svg';
import paintSvg from '@/assets/images/services/paint.svg';
import drillingSvg from '@/assets/images/services/drilling.svg';
import { useTranslations } from 'next-intl';
import { fadeIn } from '@/lib/animations/fadeIn';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      gsap.fromTo(
        card,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <Card
      ref={cardRef}
      className="p-8 bg-white hover:bg-bg transition-all duration-300 rounded-lg flex flex-col items-center text-center group"
    >
      <div className="w-24 h-24 mb-6 relative group-hover:scale-110 transition-transform duration-300">
        <Image 
          src={icon} 
          alt={title} 
          className="object-contain" 
        />
      </div>
      <h3 className="text-2xl mb-4 font-serif font-bold text-primary group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-secondary leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

const OurServicesPage: React.FC = () => {
  const t = useTranslations('OurServices');

  const services: ServiceCardProps[] = [
    {
      icon: constructionSvg,
      title: t('ForJobSeekers.title'),
      description: t('ForJobSeekers.description'),
    },
    {
      icon: paintSvg,
      title: t('ForEmployers.title'),
      description: t('ForEmployers.description'),
    },
    {
      icon: construction2Svg,
      title: t('AsMediator.title'),
      description: t('AsMediator.description'),
    },
    {
      icon: drillingSvg,
      title: t('AsAdvertisementPlatform.title'),
      description: t('AsAdvertisementPlatform.description'),
    },
  ];

  useEffect(() => {
    import('@/lib/animations/fadeIn').then(({ fadeIn }) => {
      fadeIn();
    });
  }, []);

  return (
    <section 
      id="our-services" 
      className="py-20 relative overflow-hidden  bg-gradient-to-bg from-primary via-slate-900"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-center mb-6 bg-primary from-yellow-200 via-yellow-100 to-blue-200 text-transparent bg-clip-text fade-in">
            {t('title')}
          </h2>
          <p className="text-center text-secondary text-lg max-w-2xl mx-auto fade-in">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesPage;