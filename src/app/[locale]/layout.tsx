import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { cn } from '@/lib/utils';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { locales } from '@/lib/intl/config';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const fontSerif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: `${t('title')} - ${t('tagline')}`,
    description: t('description'),
    keywords: t('keywords').split(', '),
    metadataBase: new URL('https://paris-architectureconsultant.vercel.app/'),
    icons: [
      {
        url: '/favicon.ico',
        rel: 'icon',
      },
    ],
    openGraph: {
      type: 'website',
      siteName: 'Paris Architecture',
      images: [
        {
          url: '/images/logo.svg',
          width: 1200,
          height: 630,
          alt: 'Paris Architecture',
        },
      ],
    },
  };
}

export default async function RootLayout({
  params: { locale },
  children,
}: Props) {
  const messages = await getMessages({ locale });

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} className="h-screen">
      <body
        className={cn(
          `h-full bg-gray-50 flex flex-col font-sans antialiased`,
          fontSerif.variable,
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="mt-0">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
