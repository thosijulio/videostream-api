import enUS from './enUS';
import ptBR from './ptBR';

const MESSAGES = { ptBR, enUS };

const getMessages = (language: 'ptBR' | 'enUS' = 'ptBR') => ({
  general: {
    errors: {
      UNKNOWN_ERROR: MESSAGES[language].general.errors.UNKNOWN_ERROR,
      ROUTE_NOT_FOUND: MESSAGES[language].general.errors.ROUTE_NOT_FOUND,
      TOKEN_MUST_BE_PROVIDER: MESSAGES[language].general.errors.TOKEN_MUST_BE_PROVIDER,
      INVALID_TOKEN: MESSAGES[language].general.errors.INVALID_TOKEN,
      UNAUTHORIZED_RESOURCE: MESSAGES[language].general.errors.UNAUTHORIZED_RESOURCE,
      EXPIRED_TOKEN: MESSAGES[language].general.errors.EXPIRED_TOKEN,
    },
    success: {
      OK: MESSAGES[language].general.success.OK,
    },
  },
  users: {
    general: {
      ERROR_KEY_MUST_BE_STRING: MESSAGES[language].users.general.ERROR_KEY_MUST_BE_STRING,
      ERROR_EMPTY_BODY: MESSAGES[language].users.general.ERROR_EMPTY_BODY,
      ERROR_KEY_MUST_BE_NUMBER: MESSAGES[language].users.general.ERROR_KEY_MUST_BE_NUMBER,
    },
    findAll: {
      NO_USERS_FOUND: MESSAGES[language].users.findAll.NO_USERS_FOUND,
      PAGE_PARAM_MUST_BE_NUMBER: MESSAGES[language].users.findAll.PAGE_PARAM_MUST_BE_NUMBER,
      PAGE_PARAM_MUST_BE_GT_0: MESSAGES[language].users.findAll.PAGE_PARAM_MUST_BE_GT_0,
      LIMIT_PARAM_MUST_BE_NUMBER: MESSAGES[language].users.findAll.LIMIT_PARAM_MUST_BE_NUMBER,
      LIMIT_PARAM_MUST_BE_LTE_50: MESSAGES[language].users.findAll.LIMIT_PARAM_MUST_BE_LTE_50,
      LIMIT_PARAM_MUST_BE_GT_0: MESSAGES[language].users.findAll.LIMIT_PARAM_MUST_BE_GT_0,
    },
    editUser: {
      USER_DOESNT_EXISTS: MESSAGES[language].users.editUser.USER_DOESNT_EXISTS,
      USER_EDITED: MESSAGES[language].users.editUser.USER_EDITED,
    },
    createUser: {
      USER_CREATED: MESSAGES[language].users.createUser.USER_CREATED,
      INVALID_EMAIL: MESSAGES[language].users.createUser.INVALID_EMAIL,
      INVALID_DOCUMENT: MESSAGES[language].users.createUser.INVALID_DOCUMENT,
      KEY_MUST_BE_PROVIDER: MESSAGES[language].users.createUser.KEY_MUST_BE_PROVIDER,
      DOCUMENT_ALREADY_EXISTS: MESSAGES[language].users.createUser.DOCUMENT_ALREADY_EXISTS,
      EMAIL_ALREADY_EXISTS: MESSAGES[language].users.createUser.EMAIL_ALREADY_EXISTS,
      USERNAME_ALREADY_EXISTS: MESSAGES[language].users.createUser.USERNAME_ALREADY_EXISTS,
    },
  },
  auth: {
    login: {
      UNKNOWN_ERROR_ON_LOGIN: MESSAGES[language].auth.login.UNKNOWN_ERROR_ON_LOGIN,
      INVALID_USER_OR_PASSWORD: MESSAGES[language].auth.login.INVALID_USER_OR_PASSWORD,
      NECESSARY_USER_AND_PASSWORD: MESSAGES[language].auth.login.NECESSARY_USER_AND_PASSWORD,
    },
  },
});

export default getMessages;
