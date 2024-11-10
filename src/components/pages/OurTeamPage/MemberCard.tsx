import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { useEffect,useRef } from 'react';
import { Card } from '@/components/ui/card';
type Props = {
  name: string;
  title: string;
  company: string;
  image: StaticImageData;
  description: string;
};

const MemberCard = ({ name, title, company, image, description }: Props) => {

  return (
    <Card
    className="p-8 bg-white hover:bg-bg transition-all duration-300 rounded-lg flex flex-col items-center text-center group"
  >
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold font-serif text-primary mb-2">
          {name}
        </h3>
        <p className="text-sm text-secondary mb-4">
          {title} at {company}
        </p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </Card>
  );
};

export default MemberCard;
