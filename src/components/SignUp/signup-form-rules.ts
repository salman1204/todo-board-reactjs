import type { Rule } from "rc-field-form/lib/interface";

export const userEmailRules: Rule[] = [
  {
    required: true,
    type: "email",
    message: "The input is not valid E-mail!",
  },
];

export const passwordRules: Rule[] = [
  { required: true, message: "Please input your password!" },
  {
    min: 6,
    message: "Password should be minimum 6 characters long.",
  },
  {
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[a-zA-Z0-9]/,
    message: "Password need to contain at least one:",
  },
  {
    pattern: /[A-Z]/,
    message: "*** Uppercase Letter ",
  },
  {
    pattern: /[a-z]/,
    message: "*** Lowercase Letter ",
  },
  {
    pattern: /[0-9]/,
    message: "*** Digit",
  },
];

export const confirmPasswordRules: Rule[] = [
  { required: true, message: "Please input your password!" },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("The confirm password doesn't match!"));
    },
  }),
];
