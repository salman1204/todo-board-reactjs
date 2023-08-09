import { loginUser, signupUser } from "@/apis/auth";
import { LoginFormTypes, SignupFormTypes } from "@/types/authentication";
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
