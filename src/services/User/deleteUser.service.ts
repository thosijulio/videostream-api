import { NotFoundError } from '../../helpers/CustomizedResponseStatus';
import prisma from '../../model';
import Messages from '../../types/Messages';

const deleteUser = async (email: string, messages: Messages) => {
  const {
    users: {
      deleteUser: { USER_DOESNT_EXIST },
    },
  } = messages;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new NotFoundError(USER_DOESNT_EXIST);

  const result = await prisma.user.delete({ where: { email } });

  return result;
};

export default deleteUser;
