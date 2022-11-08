import {
  ListUsersCommandOutput,
  UserType,
} from "@aws-sdk/client-cognito-identity-provider";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "lib/fetcher";
import { HttpResponse } from "lib/api/type";
import { SearchCondition } from "types";

export const useUsers = (condition: SearchCondition) => {
  const { isFetching, data, error } = useQuery<
    HttpResponse<ListUsersCommandOutput>
  >(["users"], async () => {
    const { data } = await fetcher(`/api/users`);
    return data;
  });

  const users = getFilteredUsers(data?.data?.Users, condition);
  return {
    isFetching: isFetching,
    users,
    error,
  };
};

const getFilteredUsers = (
  users: UserType[] | undefined,
  condition: SearchCondition,
) => {
  return users
    ?.map((user) => ({
      ...user,
      Name: getAttribute(user, "name"),
      email: getAttribute(user, "email"),
    }))
    .filter(
      (user) =>
        includes(user.Username, condition.Username) &&
        includes(user.Name, condition.Name),
    );
};

const includes = (item: string | undefined, condition: string | undefined) => {
  return !condition || (item && item.includes(condition));
};

const getAttribute = (user: UserType, key: string) => {
  return user.Attributes?.find((attr) => attr.Name == key)?.Value;
};
