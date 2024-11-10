'use client';

import React from 'react';
import { Mail, MapPin, PhoneIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

function CompanyContactCard() {
  const t = useTranslations('Contact');

  return (
    <div className="w-full lg:w-2/3 overflow-hidden relative birder-0 p-8">
      <div className="flex flex-col items-start justify-center h-full space-y-6">
        <h1 className="text-4xl font-extrabold text-primary text-center font-serif">
          {t("title")}
        </h1>

        <p className="font-light text-secondary text-left font-serif">
          {t("description")}
        </p>

        <div className="flex items-center space-x-4">
          <PhoneIcon size={32} className="text-secondary" />
          <a
            href="tel:+33 123 456 789"
            className="text-secondary hover:text-gray-600"
          >
           {t('phone')}
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Mail size={32} className="text-secondary" />
          <a
            href="mailto:contact@techcompany.com"
            className="text-secondary hover:text-gray-600"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://mail.google.com/mail/?view=cm&fs=1&to=contact@techcompany.com',
                '_blank'
              );
            }}
          >
           {t('email')}
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <MapPin size={32} className="text-secondary" />
          <p className="text-secondary hover:text-gray-600">
            {t('address')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyContactCard;
