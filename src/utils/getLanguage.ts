const getLanguage = (language: string | string[] | undefined) => {
  if (language === 'ptBR' || language == 'enUS') return language;
  return undefined;
}

export default getLanguage;
