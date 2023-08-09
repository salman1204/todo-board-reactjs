import { signupUser } from "@/apis/auth";
import { SignupFormTypes } from "@/types/authentication";
import { useMutation } from "@tanstack/react-query";

export const useSignupUser = () => {
  return useMutation((data: SignupFormTypes) => {
    return signupUser(data);
  });
};
