import { LoginFormTypes, SignupFormTypes } from "@/types/authentication-types";
import { HttpResponse } from "@/types/http-types";
import { BASE_API_URL } from "@/utils/envVeriables";
import axios from "axios";

export const signupUser = async (data: SignupFormTypes) => {
  const response = await axios.post<HttpResponse<SignupFormTypes>>(
    `${BASE_API_URL}/user/signup/`,
    data
  );
  return response.data;
};

export const loginUser = async (data: LoginFormTypes) => {
  return axios({
    method: "post",
    url: `${BASE_API_URL}/auth/jwt/create`,
    data: data,
  });
};
