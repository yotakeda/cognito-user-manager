import { GraphQLResult } from "@aws-amplify/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { API } from "aws-amplify";
import {
  UpdateCustomAttributeValueInput,
  UpdateCustomAttributeValueMutation,
} from "../../src/API";
import { updateCustomAttributeValue } from "../../src/graphql/mutations";

export const useUpdateCustomAttributeValue = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (values: UpdateCustomAttributeValueInput) =>
      (
        API.graphql({
          query: updateCustomAttributeValue,
          variables: { input: values },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        }) as Promise<GraphQLResult<UpdateCustomAttributeValueMutation>>
      ).then((res) => res.data?.updateCustomAttributeValue),
    {
      onSuccess: () => {
        message.success(`Update CustomAttributeValue success!`);
        queryClient.invalidateQueries(["listCustomAttributeValues"]);
      },
      onError: (error: GraphQLResult) => {
        const errors = error?.errors?.map((e: any) => e.errorType);
        message.error(
          `Failed to update CustomAttributeValue (${errors?.join()})`,
        );
      },
    },
  );

  return {
    updateMutate: mutation.mutate,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
