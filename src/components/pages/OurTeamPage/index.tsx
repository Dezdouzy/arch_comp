'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import MemberGrid from './MemberGrid';
import TestimonialSection from './TestimonialSection';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

const OurTeamPage = () => {
  const t = useTranslations('OurTeamPage');

  useEffect(() => {
    import('@/lib/animations/fadeIn').then(({ fadeIn }) => {
      fadeIn();
    });
  }, []);

  return (
    <section
    className="py-20 px-28 relative overflow-hidden bg-gradient-to-bg from-primary via-slate-900"
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
      <div className="mb-10">
        <h1 className="text-5xl font-serif text-center font-bold text-primary mb-4 fade-in">
          {t('title')}
        </h1>
        <p className="text-md fade-in text-center text-secondary" style={{ color: '#666' }}>
          {t('description')}
        </p>
      </div>
      <div>
        <MemberGrid />
        <TestimonialSection />
      </div>
    </section>
  );
};

export default OurTeamPage;
