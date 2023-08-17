import { addLabel, deleteLabel, updateLabelDetails } from "@/apis/label-api";
import { useMutation } from "@tanstack/react-query";

export const useCreateLabel = () => {
  return useMutation((data: { title: string }) => {
    return addLabel(data);
  });
};

export const useUpdateLabel = () => {
  return useMutation(
    (data: { label_guid: string; data: { title: string } }) => {
      return updateLabelDetails(data.label_guid, data.data);
    }
  );
};

export const useDeleteLabel = () => {
  return useMutation((data: { label_guid: string }) => {
    return deleteLabel(data);
  });
};
