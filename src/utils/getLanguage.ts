import { Request } from 'express';

const getLanguage = (req: Request) => {
  const language: string | string[] | undefined = req.headers.language;

  if (language === 'ptBR' || language === 'enUS') return language;
  return undefined;
};

export default getLanguage;
