import { HttpResponse } from "@/types/http";
import { LabelDataTypes } from "@/types/label";
import { instance } from "@/utils/axiosIntercepter";
import { BASE_API_URL } from "@/utils/envVeriables";

export const getLabels = async () => {
  const url = `${BASE_API_URL}/label/`;
  const { data } = await instance.get(url);
  return data as HttpResponse<LabelDataTypes[]>;
};

