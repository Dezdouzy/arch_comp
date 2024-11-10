'use client';

import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import TransitionLink from './TransitionLink';

const Footer = () => {
  const t = useTranslations('Footer');
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <footer className="mt-auto bg-secondary py-8">
      <div className="grid container mx-auto max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-4 space-y-4">
        <div className="flex flex-col items-start gap-2">
          <Image src="/images/logo.png" alt="Paris Architecture" width={100} height={100} />
          <p className="text-center text-white text-md">
            {t('companyName')}
          </p>
          <p className="text-center text-white text-xs">
            &copy; {new Date().getFullYear()} Paris Architecture
          </p>
          <p className="text-center text-white text-xs flex gap-4 items-center justify-center">
            <span
              className="cursor-pointer"
              onClick={() => changeLanguage('en')}
            >
              English
            </span>
            <span
              className="cursor-pointer"
              onClick={() => changeLanguage('fr')}
            >
              Français
            </span>
            <span
              className="cursor-pointer"
              onClick={() => changeLanguage('es')}
            >
              Español
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-center text-white text-sm font-semibold mb-1">
            {t('Navigation.title')}
          </h3>
          <ul className="flex flex-col items-start text-sm">
            <li>
              <TransitionLink href="/" className="text-white">
                {t('Navigation.home')}
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/our-services" className="text-white">
                {t('Navigation.services')}
              </TransitionLink>
            </li>
            {/* <li>
              <TransitionLink href="/how-it-works" className="text-white">
                {t('Navigation.howItWorks')}
              </TransitionLink>
            </li> */}
            <li>
              <TransitionLink href="/our-references" className="text-white">
                {t('Navigation.references')}
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/our-talents" className="text-white">
                {t('Navigation.talents')}
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/contact" className="text-white">
                {t('Navigation.contact-us')}
              </TransitionLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-center text-white text-sm font-semibold mb-1">
            {t('Contact.title')}
          </h3>
          <ul className="flex flex-col items-start">
            <li>
              <Link
                href={`mailto:${t('Contact.email')}`}
                className="text-white text-sm"
              >
                {t('Contact.email')}
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${t('Contact.phone')}`}
                className="text-white text-sm"
              >
                ${t('Contact.phone')}
              </Link>
            </li>
            <li>
              <Link
                href="https://goo.gl/maps/3Jj5h1kL5j1zZ4Vd9"
                className="text-white text-sm"
              >
                {t('Contact.address')}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-center text-white text-sm font-semibold mb-1">
            {t('findUsOn')}
          </h3>
          <ul className="flex items-center gap-4 justify-center">
            <li>
              <a href="https://www.linkedin.com" target="_blank">
                <LinkedinIcon size={24} color="gray" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <FacebookIcon size={24} color="gray" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <TwitterIcon size={24} color="gray" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
