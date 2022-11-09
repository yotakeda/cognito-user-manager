import { useAuthenticator } from "@aws-amplify/ui-react";
import { Button, Col, Row, Space } from "antd";
import Link from "next/link";
import React from "react";

export const CommonHeader = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const userName = user?.username;
  const userGroups: string[] =
    user?.getSignInUserSession()?.getAccessToken()?.payload["cognito:groups"] ??
    [];
  return (
    <Row justify="space-between">
      <Col>
        <div>Sample Logo</div>
      </Col>
      <Col>
        <Space size="large">
          {userGroups.includes("admin") && (
            <Button type="link">
              <Link href="/admin/custom-attribute">
                Custom Attribute Setting
              </Link>
            </Button>
          )}
          {userName && <div>User: {userName}</div>}
          {userName && signOut && (
            <Button type="default" onClick={signOut}>
              logout
            </Button>
          )}
        </Space>
      </Col>
    </Row>
  );
};
