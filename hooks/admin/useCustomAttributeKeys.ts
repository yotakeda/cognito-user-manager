import { GraphQLResult } from "@aws-amplify/api";
import { useQuery } from "@tanstack/react-query";
import { API } from "aws-amplify";
import { ListCustomAttributeKeysQuery } from "../../src/API";
import { listCustomAttributeKeys } from "../../src/graphql/queries";

export const useCustomAttributeKeys = () => {
  const {
    isLoading,
    data: rawData,
    error,
  } = useQuery(["listCustomAttributeKeys"], () =>
    (
      API.graphql({
        query: listCustomAttributeKeys,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        //
      }) as Promise<GraphQLResult<ListCustomAttributeKeysQuery>>
    ).then((res) => res?.data?.listCustomAttributeKeys),
  );

  const data =
    rawData?.items
      .sort((a, b) => (a?.displayOrder ?? 0) - (b?.displayOrder ?? 0))
      .filter(
        (item): item is Exclude<typeof item, null | undefined> => item != null,
      ) || [];

  return {
    isLoading,
    data,
    error,
  };
};
