import { GraphQLResult } from "@aws-amplify/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { API } from "aws-amplify";
import {
  DeleteCustomAttributeKeyInput,
  DeleteCustomAttributeKeyMutation,
} from "../../src/API";
import { deleteCustomAttributeKey } from "../../src/graphql/mutations";

export const useDeleteCustomAttributeKey = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (values: DeleteCustomAttributeKeyInput) =>
      (
        API.graphql({
          query: deleteCustomAttributeKey,
          variables: { input: values },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        }) as Promise<GraphQLResult<DeleteCustomAttributeKeyMutation>>
      ).then((res) => res.data?.deleteCustomAttributeKey),
    {
      onSuccess: () => {
        message.success(`Delete CustomAttributeKey success!`);
        queryClient.invalidateQueries(["listCustomAttributeKeys"]);
      },
      onError: (error: GraphQLResult) => {
        const errors = error?.errors?.map((e: any) => e.errorType);
        message.error(
          `Failed to delete CustomAttributeKey (${errors?.join()})`,
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
