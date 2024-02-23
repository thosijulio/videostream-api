import { BadRequestError } from '../../helpers/CustomizedResponseStatus';
import Messages from '../../types/Messages';

const verifyBodyDataEditUser = (
  data: {
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
      editUser: { ERROR_EMPTY_BODY, ERROR_KEY_MUST_BE_NUMBER, ERROR_KEY_MUST_BE_STRING },
    },
  }: Messages
) => {
  const { email, password, firstName, lastName, username, document, birthDate, roleId } = data;
  if (!email && !password && !firstName && !lastName && !username && !document && !birthDate && !roleId) {
    throw new BadRequestError(ERROR_EMPTY_BODY);
  }

  const dataKeys = Object.keys(data) as [
    'email',
    'password',
    'firstName',
    'lastName',
    'username',
    'document',
    'birthDate',
    'roleId',
  ];

  for (let index = 0; index < dataKeys.length; index += 1) {
    if (dataKeys[index] === 'roleId' && typeof data[dataKeys[index]] !== 'number')
      throw new BadRequestError(`${dataKeys[index]} ${ERROR_KEY_MUST_BE_NUMBER}`);
    if (typeof data[dataKeys[index]] !== 'string')
      throw new BadRequestError(`${dataKeys[index]} ${ERROR_KEY_MUST_BE_STRING}`);
  }
};

export default verifyBodyDataEditUser;
