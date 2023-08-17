import { addLabel, deleteLabel } from "@/apis/label-api";
import { useMutation } from "@tanstack/react-query";

export const useLabel = () => {
  return useMutation((data: { title: string }) => {
    return addLabel(data);
  });
};

export const useDeleteLabel = () => {
  return useMutation((data: { label_guid: string }) => {
    return deleteLabel(data);
  });
};