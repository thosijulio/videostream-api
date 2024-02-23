import editUser from './editUser.service';
import findAllUsers from './findAll.service';

const userService = {
  findAll: findAllUsers,
  edit: editUser,
};

export default userService;
