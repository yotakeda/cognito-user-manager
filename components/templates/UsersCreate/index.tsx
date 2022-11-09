import React from "react";
import { UserForm } from "components/organisms/UserForm";
import { useCreateUser } from "hooks/useCreateUser";

export const UsersCreate = () => {
  const mutation = useCreateUser();
  return (
    <UserForm
      type="create"
      onSubmit={(values) => {
        const { username, password, userAttributes } = values;
        mutation.mutate({
          Username: username,
          TemporaryPassword: password,
          UserAttributes: userAttributes,
        });
      }}
    />
  );
};
