import { GraphQLResult } from "@aws-amplify/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { API } from "aws-amplify";
import {
  CreateCustomAttributeValueInput,
  CreateCustomAttributeValueMutation,
} from "../../src/API";
import { createCustomAttributeValue } from "../../src/graphql/mutations";

export const useCreateCustomAttributeValue = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (values: CreateCustomAttributeValueInput) =>
      (
        API.graphql({
          query: createCustomAttributeValue,
          variables: { input: values },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        }) as Promise<GraphQLResult<CreateCustomAttributeValueMutation>>
      ).then((res) => res.data?.createCustomAttributeValue),
    {
      onSuccess: () => {
        message.success(`Create CustomAttributeValue success!`);
        queryClient.invalidateQueries(["listCustomAttributeValues"]);
      },
      onError: (error: GraphQLResult) => {
        const errors = error?.errors?.map((e: any) => e.errorType);
        message.error(
          `Failed to create CustomAttributeValue (${errors?.join()})`,
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
