import { User } from '@prisma/client';
import { BadRequestError } from '../../helpers/CustomizedResponseStatus';
import Messages from '../../types/Messages';
import validateEmail from './verifyEmail';

const verifyBodyDataEditUser = (
  data: {
    id?: number;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    document?: string;
    birthDate?: string;
    roleId?: number;
  },
  {
    users: {
      general: { ERROR_EMPTY_BODY, ERROR_KEY_MUST_BE_NUMBER, ERROR_KEY_MUST_BE_STRING, INVALID_EMAIL },
      createUser: { INVALID_DOCUMENT, KEY_MUST_BE_PROVIDER },
    },
  }: Messages
) => {
  const { email, password, firstName, lastName, username, document, birthDate, roleId } = data;
  if (!email && !password && !firstName && !lastName && !username && !document && !birthDate && !roleId) {
    throw new BadRequestError(ERROR_EMPTY_BODY);
  }
  const NECESSARY_KEYS: ['email', 'username', 'document'] = ['email', 'username', 'document'];

  for (let index = 0; index < NECESSARY_KEYS.length; index += 1) {
    if (!data[NECESSARY_KEYS[index]]) {
      throw new BadRequestError(`${NECESSARY_KEYS[index]} ${KEY_MUST_BE_PROVIDER}`);
    }
  }

  const dataKeys = Object.keys(data) as Array<keyof User>;

  for (let index = 0; index < dataKeys.length; index += 1) {
    if (dataKeys[index] === 'roleId' && typeof data.roleId !== 'number') {
      throw new BadRequestError(`${dataKeys[index]} ${ERROR_KEY_MUST_BE_NUMBER}`);
    } else if (typeof data[dataKeys[index]] !== 'string') {
      throw new BadRequestError(`${dataKeys[index]} ${ERROR_KEY_MUST_BE_STRING}`);
    } else if (data.document && data.document.length < 11) {
      throw new BadRequestError(INVALID_DOCUMENT);
    } else if (data.email && !validateEmail(data.email)) {
      throw new BadRequestError(INVALID_EMAIL);
    }
  }
};

export default verifyBodyDataEditUser;
