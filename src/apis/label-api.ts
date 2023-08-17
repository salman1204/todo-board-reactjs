import { HttpResponse } from "@/types/http-types";
import { LabelDataTypes } from "@/types/label-types";
import { instance } from "@/utils/axiosIntercepter";
import { BASE_API_URL } from "@/utils/envVeriables";

export const addLabel = async (data: { title: string }) => {
  const { data: response } = await instance({
    method: "post",
    data: data,
    url: `${BASE_API_URL}/label/`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response as HttpResponse<LabelDataTypes>;
};

export const getLabels = async () => {
  const url = `${BASE_API_URL}/label/`;
  const { data } = await instance.get(url);
  return data as HttpResponse<LabelDataTypes[]>;
};

export const updateLabelDetails = async (
  label_guid: string,
  data: { title: string }
) => {
  const { data: response } = await instance({
    method: "put",
    data: data,
    url: `${BASE_API_URL}/label/${label_guid}/`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response as HttpResponse<LabelDataTypes>;
};
export const deleteLabel = async (data: { label_guid: string }) => {
  const { data: response } = await instance.delete(
    `${BASE_API_URL}/label/${data.label_guid}/`
  );
  return response;
};
