import { getLabels } from "@/apis/label";
import { labelQueryKeys } from '@/constants/queryKeys';
import { useQuery } from "@tanstack/react-query";

export const useGetLabels = () => {
  return useQuery({
    queryKey: labelQueryKeys.lists(),
    queryFn: () => getLabels(),
    retry: false,
  });
};
