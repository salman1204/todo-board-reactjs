import { LoginFormTypes, SignupFormTypes } from "@/types/authentication";
import { BASE_API_URL } from "@/utils/envVeriables";
import axios from "axios";

export const signupUser = async (data: SignupFormTypes) => {
  return axios({
    method: "post",
    url: `${BASE_API_URL}/user/signup/`,
    data: data,
  });
};

export const loginUser = async (data: LoginFormTypes) => {
  return axios({
    method: "post",
    url: `${BASE_API_URL}/auth/jwt/create`,
    data: data,
  });
};
