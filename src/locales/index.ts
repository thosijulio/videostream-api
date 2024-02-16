import enUS from './enUS';
import ptBR from './ptBR';

const MESSAGES = { ptBR, enUS };

const getMessages = (language: 'ptBR' | 'enUS' = 'ptBR') => ({
  errors: {
    unknownError: MESSAGES[language].errors.unknownError,
    routeNotFound: MESSAGES[language].errors.routeNotFound,
  },
  users: {
    getAllEmpty: MESSAGES[language].users.getAllEmpty,
  },
});

export default getMessages;
