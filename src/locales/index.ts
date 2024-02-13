import enUS from './enUS/errors.json';
import ptBR from './ptBR/errors.json';

const MESSAGES = { errors: { enUS, ptBR } };

const getMessages = (language: 'ptBR' | 'enUS' = 'ptBR') => ({
  errors: {
    unknownError: MESSAGES.errors[language].unknownError,
  },
});

export default getMessages;
