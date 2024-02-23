import editUser from './editUser.controller';
import findAllUsers from './findAll.controller';

const userController = {
  findAll: findAllUsers,
  edit: editUser,
};

export default userController;
