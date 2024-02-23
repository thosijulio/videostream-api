import { User } from '@prisma/client';
import { BadRequestError, NotModifiedRedirection } from '../../helpers/CustomizedResponseStatus';
import prisma from '../../model';
import Messages from '../../types/Messages';

type EditUser = {
  id?: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  document?: string;
  birthDate?: string;
  password?: string;
  roleId?: number;
};

const editUser = async (payload: EditUser, userEmail: string, messages: Messages) => {
  const userToEdit = await prisma.user.findUnique({ where: { email: userEmail } });
  const {
    users: {
      editUser: { NOTHING_TO_CHANGE, USER_DOESNT_EXISTS },
    },
  } = messages;

  if (userToEdit) {
    const userKeys = Object.keys(userToEdit) as (keyof User)[];
    let nothingToChange = true;

    // Loop p/ verificar se é necessário editar algo no banco
    for (let index = 0; index < userKeys.length; index += 1) {
      if (payload[userKeys[index]] && userToEdit[userKeys[index]] !== payload[userKeys[index]]) {
        nothingToChange = false;
      }
    }

    if (nothingToChange) throw new NotModifiedRedirection(NOTHING_TO_CHANGE);

    const result = await prisma.user.update({
      data: payload,
      where: {
        id: userToEdit.id,
      },
    });

    return result;
  } else {
    throw new BadRequestError(USER_DOESNT_EXISTS);
  }
};

export default editUser;
