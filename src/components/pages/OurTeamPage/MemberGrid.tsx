'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TalentCard from './MemberCard';

import emilyZhaoImg from '@/assets/images/talents/emily_zhao.jpg';
import alexRiveraImg from '@/assets/images/talents/alex_rivera.jpg';
import sophiaNguyenImg from '@/assets/images/talents/sophia_nguyen.jpg';
import marcusJohnsonImg from '@/assets/images/talents/marcus_johnson.jpg';
import oliviaChenImg from '@/assets/images/talents/olivia_chen.jpg';
import jamalThompsonImg from '@/assets/images/talents/jamal_thompson.jpg';
import { StaticImageData } from 'next/image';

gsap.registerPlugin(ScrollTrigger);

type Talent = {
  id: number;
  name: string;
  title: string;
  company: string;
  image: StaticImageData;
  description: string;
};

const MemberGrid: React.FC = () => {
  const t = useTranslations('OurTeamPage.MemberGridSection');
  const gridRef = useRef<HTMLDivElement>(null);

  const talents: Talent[] = [
    {
      id: 1,
      name: 'Dr. Emily Zhao',
      title: t('emilyZhao.title'),
      company: 'AI Innovations Ltd.',
      image: emilyZhaoImg,
      description: t('emilyZhao.description'),
    },
    {
      id: 2,
      name: 'Alex Rivera',
      title: t('alexRivera.title'),
      company: 'TechSolutions Inc.',
      image: alexRiveraImg,
      description: t('alexRivera.description'),
    },
    {
      id: 3,
      name: 'Sophia Nguyen',
      title: t('sophiaNguyen.title'),
      company: 'InnovateTech Startup',
      image: sophiaNguyenImg,
      description: t('sophiaNguyen.description'),
    },
    {
      id: 4,
      name: 'Marcus Johnson',
      title: t('marcusJohnson.title'),
      company: 'SecureNet Defenses',
      image: marcusJohnsonImg,
      description: t('marcusJohnson.description'),
    },
    {
      id: 5,
      name: 'Olivia Chen',
      title: t('oliviaChen.title'),
      company: 'DesignWorks Agency',
      image: oliviaChenImg,
      description: t('oliviaChen.description'),
    },
    {
      id: 6,
      name: 'Jamal Thompson',
      title: t('jamalThompson.title'),
      company: 'CryptoFuture Technologies',
      image: jamalThompsonImg,
      description: t('jamalThompson.description'),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // @ts-ignore
      gsap.from(gridRef.current?.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8"
    >
      {talents.map((talent) => (
        <TalentCard key={talent.id} {...talent} />
      ))}
    </div>
  );
};

export default MemberGrid;
