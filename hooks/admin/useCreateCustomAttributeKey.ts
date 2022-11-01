import { GraphQLResult } from "@aws-amplify/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { API } from "aws-amplify";
import {
  CreateCustomAttributeKeyInput,
  CreateCustomAttributeKeyMutation,
} from "../../src/API";
import { createCustomAttributeKey } from "../../src/graphql/mutations";

export const useCreateCustomAttributeKey = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (values: CreateCustomAttributeKeyInput) =>
      (
        API.graphql({
          query: createCustomAttributeKey,
          variables: { input: values },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        }) as Promise<GraphQLResult<CreateCustomAttributeKeyMutation>>
      ).then((res) => res.data?.createCustomAttributeKey),
    {
      onSuccess: () => {
        message.success(`Create CustomAttributeKey success!`);
        queryClient.invalidateQueries(["listCustomAttributeKeys"]);
      },
      onError: (error: GraphQLResult) => {
        const errors = error?.errors?.map((e: any) => e.errorType);
        message.error(
          `Failed to create CustomAttributeKey (${errors?.join()})`,
        );
      },
    },
  );

  return {
    create: mutation.mutate,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
