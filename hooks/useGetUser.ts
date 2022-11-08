import { GetUserCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { fetcher } from "lib/fetcher";
import { HttpResponse } from "lib/api/type";
import { useQueryParams } from "./useQueryParams";

export const useGetUser = () => {
  const router = useRouter();
  const { username } = useQueryParams();
  const { isFetching, isLoading, data, error } = useQuery<
    HttpResponse<GetUserCommandOutput>
  >(
    ["users", username],
    async () => {
      const { data } = await fetcher(`/api/users/${username}`);
      return data;
    },
    {
      enabled: router.isReady,
      // 裏で再fetchしないように設定
      // 基本は更新時にrefetchするようにした方が良さそう
      // mount時にもrefetchが走ってしまう
      staleTime: 3600000,
    },
  );
  return {
    isLoading,
    isFetching,
    data,
    error,
  };
};
