import React from 'react';
import Image from 'next/image';
import TransitionLink from '../TransitionLink';

const Logo: React.FC = () => {
  const data = {
    logo: '/images/logo.png',
    name: 'Paris Architecture',
  };

  return (
    <TransitionLink href="/" className="flex items-center space-x-2">
      <Image src={data.logo} alt={data.name} width={120} height={120} />
    </TransitionLink>
  );
};

export default Logo;
