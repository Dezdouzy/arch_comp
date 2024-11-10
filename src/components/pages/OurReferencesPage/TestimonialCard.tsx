import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { useRef,useEffect } from 'react';
import gsap from 'gsap';

type Props = {
  name: string;
  company?: string;
  position?: string;
  image?: StaticImageData;
  logo?: StaticImageData;
  testimonial: string;
  type: string;
};

const TestimonialCard = ({
  name,
  company,
  position,
  image,
  logo,
  testimonial,
  type,
}: Props) => {
  const t = useTranslations('OurReferences');
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
      <div className="flex items-center mb-4">
        {type === 'company' && logo ? (
          <Image
            src={logo}
            alt={name}
            width={80}
            height={80}
            className="rounded-full aspect-square object-cover border-4 border-gray-300"
          />
        ) : image ? (
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="rounded-full aspect-square object-cover border-4 border-gray-300"
          />
        ) : null}
        <div className="ml-4">
          <h3 className="text-2xl font-serif font-semibold text-primary">
            {name}
          </h3>
          <p className="text-base text-secondary">
            {company}
            {position && `, ${position}`}
          </p>
        </div>
      </div>
      <p className="text-gray-700 italic text-center mt-4 mb-4 px-4">&ldquo;{testimonial}&rdquo;</p>
    </Card>
  );
};

export default TestimonialCard;
