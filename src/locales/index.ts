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
    findAll: {
      noUsersFound: MESSAGES[language].users.findAll.noUsersFound,
      pageParamMustBeNumber: MESSAGES[language].users.findAll.pageParamMustBeNumber,
      pageParamMustBeGreaterThan0: MESSAGES[language].users.findAll.pageParamMustBeGreaterThan0,
      limitParamMustBeNumber: MESSAGES[language].users.findAll.limitParamMustBeNumber,
      limitParamMustBeLowerThan50: MESSAGES[language].users.findAll.limitParamMustBeLowerThan50,
      limitParamMustBeGreaterThan0: MESSAGES[language].users.findAll.limitParamMustBeGreaterThan0,
    },
  },
});

export default getMessages;
