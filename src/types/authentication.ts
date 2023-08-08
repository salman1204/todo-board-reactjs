export interface LoginFormTypes {
  username?: string;
  password?: string;
}

export interface SignupFormTypes extends LoginFormTypes {
  confirmPassword?: string;
}
