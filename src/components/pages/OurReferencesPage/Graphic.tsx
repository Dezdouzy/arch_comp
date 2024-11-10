import React from 'react';

type Props = {
  className?: string;
};

const Graphic = ({ className }: Props) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <svg width="200" height="100" viewBox="0 0 200 100" style={{ transform: 'rotate(180deg)' }}>
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#eab308', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
          </linearGradient>
          <linearGradient id="rectGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 0.8 }} />
          </linearGradient>
        </defs>
        <circle cx="150" cy="50" r="40" fill="url(#circleGradient)" className="mix-blend-luminosity" />
        <rect x="100" y="20" width="80" height="60" fill="url(#rectGradient)" className="mix-blend-luminosity" />
        <polygon points="20,10 10,50 20,90 30,50" fill="url(#circleGradient)" className="mix-blend-luminosity" />
      </svg>
    </div>
  );
};

export default Graphic;