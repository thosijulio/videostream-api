import enUS from './enUS';
import ptBR from './ptBR';

const MESSAGES = { ptBR, enUS };

const getMessages = (language: 'ptBR' | 'enUS' = 'ptBR') => ({
  general: {
    errors: {
      unknownError: MESSAGES[language].general.errors.unknownError,
      routeNotFound: MESSAGES[language].general.errors.routeNotFound,
    },
    success: {
      ok: MESSAGES[language].general.success.ok,
    },
  },
  users: {
    getAll: {
      noUsersFound: MESSAGES[language].users.getAll.noUsersFound,
      pageParamMustBeNumber: MESSAGES[language].users.getAll.pageParamMustBeNumber,
      pageParamMustBeGreaterThan0: MESSAGES[language].users.getAll.pageParamMustBeGreaterThan0,
      limitParamMustBeNumber: MESSAGES[language].users.getAll.limitParamMustBeNumber,
      limitParamMustBeLowerThan50: MESSAGES[language].users.getAll.limitParamMustBeLowerThan50,
      limitParamMustBeGreaterThan0: MESSAGES[language].users.getAll.limitParamMustBeGreaterThan0,
    },
  },
});

export default getMessages;
