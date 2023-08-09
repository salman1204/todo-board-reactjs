import { SignupFormTypes } from "@/types/authentication";
import { BASE_API_URL } from "@/utils/envVeriables";
import axios from "axios";

export const signupUser = async (data: SignupFormTypes) => {
  return axios({
    method: "post",
    url: `${BASE_API_URL}/user/signup/`,
    data: data,
  });
};
