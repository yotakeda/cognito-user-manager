import { AdminCreateUserRequest } from "@aws-sdk/client-cognito-identity-provider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {message} from "antd";
import { fetcher } from "lib/fetcher";

const createUser = async (
  params: Omit<AdminCreateUserRequest, "UserPoolId">,
) => {
  const { data } = await fetcher(`/api/users`, {
    method: "POST",
    body: JSON.stringify(params),
  });
  return data;
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data: Omit<AdminCreateUserRequest, "UserPoolId">) => {
      return createUser(data);
    },
    {
      onSuccess: () => {
        message.success("User successfully created!");
        queryClient.invalidateQueries(["users"]);
      },
      onError() {
        message.error("Failed to create user.");
      },
    },
  );
  return mutation;
};
