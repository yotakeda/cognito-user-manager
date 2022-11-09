import React from "react";
import { UserForm } from "components/organisms/UserForm";
import { useGetUser } from "hooks/useGetUser";
import { useUpdateUserAttribute } from "hooks/useUpdateUserAttribute";

export const User = () => {
  const { user, isLoading } = useGetUser();
  const mutation = useUpdateUserAttribute();
  return (
    <UserForm
      type="update"
      loading={isLoading}
      onSubmit={(values) => {
        const { userAttributes } = values;
        mutation.mutate({ UserAttributes: userAttributes });
      }}
      initialValues={{
        username: user?.Username,
        userAttributes: user?.UserAttributes,
      }}
    />
  );
};
