import prisma from '../../model';

const getAllUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

export default getAllUsers;
