import createUser from './createUser.controller';
import deleteUser from './deleteUser.controller';
import editUser from './editUser.controller';
import findAllUsers from './findAll.controller';

const userController = {
  findAll: findAllUsers,
  edit: editUser,
  create: createUser,
  delete: deleteUser,
};

export default userController;
