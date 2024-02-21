import Locale from '../types/Locale';

const getLocale = (locale: string | string[] | undefined): Locale => {
  if (locale === 'ptBR' || locale === 'enUS') return locale;
  return undefined;
};

export default getLocale;
