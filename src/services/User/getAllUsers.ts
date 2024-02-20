import prisma from '../../model';

const getAllUsers = async (limit: number = 20, page: number = 1) => {
  const results = await prisma.user.findMany({ skip: page * limit - limit, take: limit });
  const total = await prisma.user.count();

  return { results, total, next: page * limit < total ? true : false };
};

export default getAllUsers;
