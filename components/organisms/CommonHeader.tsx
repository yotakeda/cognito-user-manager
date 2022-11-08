import { useAuthenticator } from "@aws-amplify/ui-react";
import { Button, Col, Row, Space } from "antd";
import React from "react";

export const CommonHeader = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const userName = user?.username;
  return (
    <Row justify="space-between">
      <Col>
        <div>Logo</div>
      </Col>
      <Col>
        <Space>
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
