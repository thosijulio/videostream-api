import createUser from './createUser.controller';
import editUser from './editUser.controller';
import findAllUsers from './findAll.controller';

const userController = {
  findAll: findAllUsers,
  edit: editUser,
  create: createUser,
};

export default userController;
