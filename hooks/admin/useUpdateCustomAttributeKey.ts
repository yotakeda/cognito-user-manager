import { GraphQLResult } from "@aws-amplify/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { API } from "aws-amplify";
import {
  UpdateCustomAttributeKeyInput,
  UpdateCustomAttributeKeyMutation,
} from "../../src/API";
import { updateCustomAttributeKey } from "../../src/graphql/mutations";

export const useUpdateCustomAttributeKey = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (values: UpdateCustomAttributeKeyInput) =>
      (
        API.graphql({
          query: updateCustomAttributeKey,
          variables: { input: values },
          // globalに設定できないのか。。
          authMode: "AMAZON_COGNITO_USER_POOLS",
        }) as Promise<GraphQLResult<UpdateCustomAttributeKeyMutation>>
      ).then((res) => res.data?.updateCustomAttributeKey),
    {
      onSuccess: () => {
        message.success(`Update CustomAttributeKey success!`);
        queryClient.invalidateQueries(["listCustomAttributeKeys"]);
      },
      onError: (error: GraphQLResult) => {
        const errors = error?.errors?.map((e: any) => e.errorType);
        message.error(
          `Failed to update CustomAttributeKey (${errors?.join()})`,
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
