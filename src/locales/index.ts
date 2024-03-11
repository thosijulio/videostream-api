import Locale from '../types/Locale';
import enUS from './enUS';
import ptBR from './ptBR';

const MESSAGES = { ptBR, enUS };

const getMessages = (language: Locale = 'ptBR') => ({
  auth: {
    login: {
      UNKNOWN_ERROR_ON_LOGIN: MESSAGES[language].auth.login.UNKNOWN_ERROR_ON_LOGIN,
      INVALID_USER_OR_PASSWORD: MESSAGES[language].auth.login.INVALID_USER_OR_PASSWORD,
      NECESSARY_USER_AND_PASSWORD: MESSAGES[language].auth.login.NECESSARY_USER_AND_PASSWORD,
    },
  },
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
  movie: {
    findAll: {
      NO_MOVIE_FOUND: MESSAGES[language].movie.findAll.NO_MOVIE_FOUND,
      PAGE_PARAM_MUST_BE_NUMBER: MESSAGES[language].movie.findAll.PAGE_PARAM_MUST_BE_NUMBER,
      PAGE_PARAM_MUST_BE_GT_0: MESSAGES[language].movie.findAll.PAGE_PARAM_MUST_BE_GT_0,
      LIMIT_PARAM_MUST_BE_NUMBER: MESSAGES[language].movie.findAll.LIMIT_PARAM_MUST_BE_NUMBER,
      LIMIT_PARAM_MUST_BE_LTE_50: MESSAGES[language].movie.findAll.LIMIT_PARAM_MUST_BE_LTE_50,
      LIMIT_PARAM_MUST_BE_GT_0: MESSAGES[language].movie.findAll.LIMIT_PARAM_MUST_BE_GT_0,
    },
  },
  user: {
    general: {
      ERROR_KEY_MUST_BE_STRING: MESSAGES[language].user.general.ERROR_KEY_MUST_BE_STRING,
      ERROR_EMPTY_BODY: MESSAGES[language].user.general.ERROR_EMPTY_BODY,
      ERROR_KEY_MUST_BE_NUMBER: MESSAGES[language].user.general.ERROR_KEY_MUST_BE_NUMBER,
      INVALID_EMAIL: MESSAGES[language].user.general.INVALID_EMAIL,
    },
    findAll: {
      NO_USERS_FOUND: MESSAGES[language].user.findAll.NO_USERS_FOUND,
      PAGE_PARAM_MUST_BE_NUMBER: MESSAGES[language].user.findAll.PAGE_PARAM_MUST_BE_NUMBER,
      PAGE_PARAM_MUST_BE_GT_0: MESSAGES[language].user.findAll.PAGE_PARAM_MUST_BE_GT_0,
      LIMIT_PARAM_MUST_BE_NUMBER: MESSAGES[language].user.findAll.LIMIT_PARAM_MUST_BE_NUMBER,
      LIMIT_PARAM_MUST_BE_LTE_50: MESSAGES[language].user.findAll.LIMIT_PARAM_MUST_BE_LTE_50,
      LIMIT_PARAM_MUST_BE_GT_0: MESSAGES[language].user.findAll.LIMIT_PARAM_MUST_BE_GT_0,
    },
    editUser: {
      USER_DOESNT_EXISTS: MESSAGES[language].user.editUser.USER_DOESNT_EXISTS,
      USER_EDITED: MESSAGES[language].user.editUser.USER_EDITED,
    },
    createUser: {
      USER_CREATED: MESSAGES[language].user.createUser.USER_CREATED,
      INVALID_DOCUMENT: MESSAGES[language].user.createUser.INVALID_DOCUMENT,
      KEY_MUST_BE_PROVIDER: MESSAGES[language].user.createUser.KEY_MUST_BE_PROVIDER,
      DOCUMENT_ALREADY_EXISTS: MESSAGES[language].user.createUser.DOCUMENT_ALREADY_EXISTS,
      EMAIL_ALREADY_EXISTS: MESSAGES[language].user.createUser.EMAIL_ALREADY_EXISTS,
      USERNAME_ALREADY_EXISTS: MESSAGES[language].user.createUser.USERNAME_ALREADY_EXISTS,
    },
    deleteUser: {
      USER_DOESNT_EXIST: MESSAGES[language].user.deleteUser.USER_DOESNT_EXIST,
      USER_DELETED: MESSAGES[language].user.deleteUser.USER_DELETED,
    },
  },
});

export default getMessages;
