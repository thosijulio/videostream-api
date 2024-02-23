import prisma from '../../model';

const findAllUsers = async (limit: number = 20, page: number = 1) => {
  const results = await prisma.user.findMany({
    skip: page * limit - limit,
    take: limit,
    select: {
      birthDate: true,
      document: true,
      email: true,
      firstName: true,
      lastName: true,
      password: true,
      role: true,
      username: true,
      id: false,
      roleId: false,
    }, // Exibindo tudo, exceto id's
  });
  const total = await prisma.user.count();

  return {
    results: results.map((user) => ({ ...user, role: user.role.name })),
    total,
    next: page * limit < total ? true : false,
  };
};

export default findAllUsers;
