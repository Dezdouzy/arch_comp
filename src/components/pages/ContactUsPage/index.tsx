'use client';

import React from 'react';
import CompanyContactCard from './CompanyContactCard';
import ContactForm from './ContactForm';

function ContactUsPage() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-gradient-to-bg from-primary via-slate-900"
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

    <div className="w-full">
      
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-6">
        <CompanyContactCard />
        <ContactForm />
      </div>
    </div>
    </section>
  );
}

export default ContactUsPage;
