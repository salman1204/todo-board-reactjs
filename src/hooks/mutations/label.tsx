import { addLabel } from "@/apis/label";
import { useMutation } from "@tanstack/react-query";

export const useLabel = () => {
  return useMutation((data: { title: string }) => {
    return addLabel(data);
  });
};
