import { GraphQLResult } from "@aws-amplify/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { API } from "aws-amplify";
import {
  DeleteCustomAttributeValueInput,
  DeleteCustomAttributeValueMutation,
} from "../../src/API";
import { deleteCustomAttributeValue } from "../../src/graphql/mutations";

export const useDeleteCustomAttributeValue = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (values: DeleteCustomAttributeValueInput) =>
      (
        API.graphql({
          query: deleteCustomAttributeValue,
          variables: { input: values },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        }) as Promise<GraphQLResult<DeleteCustomAttributeValueMutation>>
      ).then((res) => res.data?.deleteCustomAttributeValue),
    {
      onSuccess: () => {
        message.success(`Delete CustomAttributeValue success!`);
        queryClient.invalidateQueries(["listCustomAttributeValues"]);
      },
      onError: (error: GraphQLResult) => {
        const errors = error?.errors?.map((e: any) => e.errorType);
        message.error(
          `Failed to delete CustomAttributeValue (${errors?.join()})`,
        );
      },
    },
  );

  return {
    deleteMutate: mutation.mutate,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
