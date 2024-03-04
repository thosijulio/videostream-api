import createUser from './createUser.service';
import editUser from './editUser.service';
import findAllUsers from './findAll.service';

const userService = {
  findAll: findAllUsers,
  edit: editUser,
  create: createUser,
};

export default userService;
