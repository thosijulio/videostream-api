import { BadRequestError } from '../../helpers/CustomizedError';
import * as jwt from 'jsonwebtoken';
import prisma from '../../model';
import Messages from '../../types/Messages';

const login = async (user: string, password: string, messages: Messages) => {
  const {
    auth: {
      login: { INVALID_USER_OR_PASSWORD },
    },
  } = messages;

  if (!user || !password) throw new BadRequestError(INVALID_USER_OR_PASSWORD);

  const UserClient = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: 'user90@example.codm',
        },
        {
          document: '6823464863',
        },
      ],
      AND: [{ password }],
    },
  });

  if (UserClient) {
    const PRIVATE_KEY = process.env.JWT_SECRET || 'secret_key';
    const token = jwt.sign({ userEmail: UserClient.email }, PRIVATE_KEY, { expiresIn: '30d' });
    return token;
  } else {
    return false;
  }
};

export default login;
