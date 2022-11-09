import React from "react";
import { UserForm } from "components/organisms/UserForm";
import { useGetUser } from "hooks/useGetUser";
import { useUpdateUserAttribute } from "hooks/useUpdateUserAttribute";
import { message } from "antd";

export const User = () => {
  const { user, isLoading } = useGetUser();
  const mutation = useUpdateUserAttribute();
  return (
    <UserForm
      type="update"
      loading={isLoading}
      onSubmit={(values) => {
        const { userAttributes } = values;
        mutation.mutate(
          { UserAttributes: userAttributes },
          {
            onSuccess() {
              message.success("User has been successfully updated!");
            },
            onError() {
              message.error("Failed to update user.");
            },
          },
        );
      }}
      initialValues={{
        username: user?.Username,
        userAttributes: user?.UserAttributes,
      }}
    />
  );
};
