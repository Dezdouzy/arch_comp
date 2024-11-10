import { locales } from '../intl/config';

export const removeLocaleFromPathname = (pathname: string): string => {
  const supportedLocales: typeof locales = locales;
  let result = pathname;

  supportedLocales.forEach(
    (locale: 'en' | 'es' | 'fr'): string =>
      (result = result.replace(`/${locale}`, ''))
  );

  return result || '/';
};
