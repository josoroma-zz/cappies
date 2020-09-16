import { EmailValidatorProps, PasswordValidatorProps } from "./@types";

export const emailValidator = (email: EmailValidatorProps) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "Email cannot be empty.";
  if (!re.test(email)) return "Ooops! We need a valid email address.";
  // No error case.
  return "";
};

export const passwordValidator = (password: PasswordValidatorProps) => {
  if (!password || password.length <= 0) return "Password cannot be empty.";
  // No error case.
  return "";
};
