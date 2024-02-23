import { BadRequestError } from '../../helpers/CustomizedError';
import prisma from '../../model';

type EditUser = {
  firstName?: string;
  lastLame?: string;
  email?: string;
  document?: string;
  birthDate?: string;
  password?: string;
  roleId?: number;
};

const editUser = async (payload: EditUser, userEmail: string) => {
  const userToEdit = await prisma.user.findUnique({ where: { email: userEmail } });

  if (userToEdit) {
    const result = await prisma.user.update({
      data: payload,
      where: {
        id: userToEdit.id,
      },
    });

    if (result) return true;
  } else {
    throw new BadRequestError('User doesnt exists');
  }
};

export default editUser;
