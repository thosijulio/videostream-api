import { BadRequestError } from '../../helpers/CustomizedResponseStatus';
import * as jwt from 'jsonwebtoken';
import prisma from '../../model';
import Messages from '../../types/Messages';

const login = async (user: string, password: string, messages: Messages) => {
  const {
    auth: {
      login: { NECESSARY_USER_AND_PASSWORD },
    },
  } = messages;

  if (!user || !password) throw new BadRequestError(NECESSARY_USER_AND_PASSWORD);

  const UserClient = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: user,
        },
        {
          document: user,
        },
        {
          username: user,
        },
      ],
      AND: [{ password }],
    },
    select: {
      email: true,
      role: {
        select: {
          name: true,
        },
      },
    },
  });

  if (UserClient) {
    const PRIVATE_KEY = process.env.JWT_SECRET || 'secret_key';
    const token = jwt.sign({ user: UserClient }, PRIVATE_KEY, { expiresIn: '30d' });
    return token;
  } else {
    return false;
  }
};

export default login;
