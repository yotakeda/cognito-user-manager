import { AttributeType } from "@aws-sdk/client-cognito-identity-provider";

export const addEmailVerified = (userAttributes: AttributeType[] = []) => {
  const hasEmail = userAttributes.some(
    (attributes) => attributes.Name === "email",
  );
  const hasEmailVerified = userAttributes.some(
    (attributes) => attributes.Name === "email_verified",
  );

  return hasEmail && !hasEmailVerified
    ? [...userAttributes, { Name: "email_verified", Value: "true" }]
    : userAttributes;
};
