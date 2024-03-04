function validateEmail(email: string) {
  // Expressão regular para validar o formato de e-mail
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export default validateEmail;
