import React from "react";
import { UserForm } from "components/organisms/UserForm";
import { useCreateUser } from "hooks/useCreateUser";
import { message } from "antd";

export const UsersCreate = () => {
  const mutation = useCreateUser();
  return (
    <UserForm
      type="create"
      onSubmit={(values) => {
        const { username, password, userAttributes } = values;
        mutation.mutate(
          {
            Username: username,
            TemporaryPassword: password,
            UserAttributes: userAttributes,
          },
          {
            onSuccess() {
              message.success("User successfully created!");
            },
            onError() {
              message.error("Failed to create user.");
            },
          },
        );
      }}
    />
  );
};
