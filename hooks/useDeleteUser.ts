import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "lib/fetcher";
import { useQueryParams } from "./useQueryParams";

export const useDeleteUser = () => {
  const { username } = useQueryParams();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async () => {
      const { data } = await fetcher(`/api/users/${username}`, {
        method: "DELETE",
      });
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    },
  );
  return mutation;
};
