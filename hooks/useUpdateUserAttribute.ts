import { AdminUpdateUserAttributesRequest } from "@aws-sdk/client-cognito-identity-provider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "lib/fetcher";
import { useQueryParams } from "./useQueryParams";

export const useUpdateUserAttribute = () => {
  const { username } = useQueryParams();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (
      variables: Omit<
        AdminUpdateUserAttributesRequest,
        "UserPoolId" | "Username"
      >,
    ) => {
      const { data } = await fetcher(`/api/users/${username}`, {
        method: "PUT",
        body: JSON.stringify(variables),
      });
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        queryClient.invalidateQueries(["users", username]);
      },
    },
  );
  return mutation;
};
