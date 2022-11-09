import { GraphQLResult } from "@aws-amplify/api";
import { useQuery } from "@tanstack/react-query";
import { API } from "aws-amplify";
import { ListCustomAttributeValuesQuery } from "../../src/API";
import { listCustomAttributeValues } from "../../src/graphql/queries";

export const useCustomAttributeValues = () => {
  const {
    isLoading,
    data: rawData,
    error,
  } = useQuery(["listCustomAttributeValues"], () =>
    (
      API.graphql({
        query: listCustomAttributeValues,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<ListCustomAttributeValuesQuery>>
    ).then((res) => res?.data?.listCustomAttributeValues),
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
