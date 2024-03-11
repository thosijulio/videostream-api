import { ConflictError } from '../../helpers/CustomizedResponseStatus';
import prisma from '../../model';
import Messages from '../../types/Messages';

type CreateUser = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  document: string;
  birthDate: string;
  password: string;
  roleId: number;
};

const createUser = async (payload: CreateUser, messages: Messages) => {
  const {
    user: {
      createUser: { DOCUMENT_ALREADY_EXISTS, EMAIL_ALREADY_EXISTS, USERNAME_ALREADY_EXISTS },
    },
  } = messages;

  const userAlreadyExist = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: payload.email,
          document: payload.document,
          username: payload.username,
        },
      ],
    },
  });

  if (userAlreadyExist) {
    if (userAlreadyExist.email === payload.email) throw new ConflictError(EMAIL_ALREADY_EXISTS);
    if (userAlreadyExist.document === payload.document) throw new ConflictError(DOCUMENT_ALREADY_EXISTS);
    if (userAlreadyExist.username === payload.username) throw new ConflictError(USERNAME_ALREADY_EXISTS);
  }

  const user = await prisma.user.create({ data: payload });

  if (user) {
    return user;
  } else {
    throw new Error();
  }
};

export default createUser;
