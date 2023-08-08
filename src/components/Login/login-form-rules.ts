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
];
