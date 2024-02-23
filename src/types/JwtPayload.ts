type JWTPayload = {
  user: {
    email: string;
    role: {
      name: 'admin' | 'user';
    };
  };
  iat: 1708697770;
  exp: 1711289770;
};

export default JWTPayload;
