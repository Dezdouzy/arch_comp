import React from 'react';

type Props = {
  step: number;
  title: string;
  description: string;
};

const EachStep = ({ step, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-3xl font-bold text-white">{step}</span>
      </div>
      <h3 className="text-3xl font-bold font-serif">{title}</h3>
      <p className="text-gray-800 text-lg">{description}</p>
    </div>
  );
};

export default EachStep;
