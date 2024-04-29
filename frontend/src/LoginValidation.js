function validation(values) {
  let errors = {};
  // Email validation (using a more robust regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email format";
  }

  // Password validation (enforcing complexity and minimum length)
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  if (!passwordRegex.test(values.password)) {
    errors.password = "Password must be at least 8 characters and include a lowercase letter, uppercase letter, and a number";
  }

  return errors;
}
export default validation;