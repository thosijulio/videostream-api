const getLocale = (locale: string | string[] | undefined) => {
  if (locale === 'ptBR' || locale === 'enUS') return locale;
  return undefined;
};

export default getLocale;
