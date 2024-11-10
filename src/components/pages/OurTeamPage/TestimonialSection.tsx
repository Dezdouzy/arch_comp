import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import drAmeliaChenImg from '@/assets/images/testimonials/dr_amelia_chen.jpg';
import jamesRodriguezImg from '@/assets/images/testimonials/james_rodriguez.jpg';
import jeffreyReedImg from '@/assets/images/testimonials/jeffrey_reed.jpg';
import { useTranslations } from 'next-intl';

type Testimonial = {
  id: number;
  text: string;
  [key: string]: any;
};

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => (
  <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 h-full relative z-10 transition-transform duration-300 hover:shadow-xl">
    <div className="flex items-center mb-4">
      <Image
        src={testimonial.image}
        alt={testimonial.author}
        className="w-24 h-24 rounded-full mr-4 object-cover"
        width={96}
        height={96}
      />
      <div>
        <p className="text-xl font-serif text-primary">{testimonial.author}</p>
        <p className="text-sm text-gray-600 text-secondary">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-base text-gray-700 italic">{testimonial.text}</p>
  </div>
);

const TestimonialSection = () => {
  const t = useTranslations('OurTeamPage.TestimonialSection');

  const testimonials = [
    {
      id: 1,
      author: 'Dr. Amelia Chen',
      image: drAmeliaChenImg,
      role: t('member1.role'),
      text: t('member1.testimonial'),
    },
    {
      id: 2,
      author: 'James Rodriguez',
      image: jamesRodriguezImg,
      role: t('member2.role'),
      text: t('member2.testimonial'),
    },
    {
      id: 3,
      author: 'Jeffrey Reed',
      image: jeffreyReedImg,
      role: t('member3.role'),
      text: t('member3.testimonial'),
    },
  ];

  return (
    <div className="bg-[#ded0c1b4] rounded-lg p-12 mt-16 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-primary font-serif text-center mb-8">
        {t('title')}
      </h2>
      <Carousel className="w-full max-w-lg mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Decorative SVG elements */}
      <svg
        className="absolute top-0 left-0 w-32 h-32 text-[#2a9d90] opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M47.5,-57.5C59.2,-45.7,65.1,-28.9,67.3,-11.7C69.4,5.5,67.8,23.1,59.1,36.3C50.4,49.5,34.6,58.3,17.8,62.7C1,67.1,-16.8,67.1,-32.4,61C-47.9,55,-61.2,42.9,-67.1,28.1C-73,13.3,-71.5,-4.2,-65.2,-19.5C-58.9,-34.8,-47.8,-47.9,-35,-57.7C-22.2,-67.5,-7.7,-74,5.9,-80.8C19.4,-87.6,38.9,-94.8,47.5,-57.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-40 h-40 text-[#2a9d90] opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M39.9,-51.3C50.9,-46.7,58.9,-34.6,62.7,-21.1C66.5,-7.7,66,7,61.1,19.7C56.2,32.4,46.8,43,35.4,51.3C24,59.7,10.6,65.7,-3.2,69.6C-17,73.4,-34.1,75,-45.9,67.9C-57.8,60.8,-64.5,45,-69.7,29C-74.9,13,-78.6,-3.2,-74.8,-17.3C-71,-31.3,-59.6,-43.2,-46.4,-47.4C-33.3,-51.6,-18.3,-48.1,-3.2,-44.1C11.9,-40.1,23.8,-35.6,39.9,-51.3Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default TestimonialSection;
