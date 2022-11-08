import React from "react";
import { UserForm } from "components/organisms/UserForm";
import { useRouter } from "next/router";

export const User = () => {
  const router = useRouter();
  const username = router.query.username as string;
  return (
    <UserForm type="update" initialValues={{ username, email: undefined }} />
  );
};
