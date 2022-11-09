import { AdminUpdateUserAttributesRequest } from "@aws-sdk/client-cognito-identity-provider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
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
        message.success("User has been successfully updated!");
        queryClient.invalidateQueries(["users"]);
        queryClient.invalidateQueries(["users", username]);
      },
      onError() {
        message.error("Failed to update user.");
      },
    },
  );
  return mutation;
};
