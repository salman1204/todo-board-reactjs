import { loginUser, signupUser } from "@/apis/auth-api";
import { LoginFormTypes, SignupFormTypes } from "@/types/authentication-types";
import { useMutation } from "@tanstack/react-query";

export const useSignupUser = () => {
  return useMutation((data: SignupFormTypes) => {
    return signupUser(data);
  });
};

export const useLogin = () => {
  return useMutation((data: LoginFormTypes) => {
    return loginUser(data);
  });
};
