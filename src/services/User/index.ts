import createUser from './createUser.service';
import deleteUser from './deleteUser.service';
import editUser from './editUser.service';
import findAllUsers from './findAll.service';

const userService = {
  findAll: findAllUsers,
  edit: editUser,
  delete: deleteUser,
  create: createUser,
};

export default userService;
