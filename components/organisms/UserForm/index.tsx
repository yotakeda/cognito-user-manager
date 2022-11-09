import { AttributeType } from "@aws-sdk/client-cognito-identity-provider";
import { Button, Card, Col, Form, Input, Row, Select, Space } from "antd";
import clsx from "clsx";
import { useCustomAttributeKeys } from "hooks/admin/useCustomAttributeKeys";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    md: { span: 18 },
  },
};

export const passwordRules = [
  {
    min: 8,
    message: "Password must contain at least 8 characters",
  },
  {
    pattern: /(?=.*[a-z])/,
    message: " Password must contain a lower case letter",
  },
  {
    pattern: /(?=.*[A-Z])/,
    message: "Password must contain an upper case letter",
  },
  {
    pattern: /(?=.*[0-9])/,
    message: "Password must contain a number",
  },
  {
    pattern: /(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&/,><\’:;|_~`])/,
    message: "Password must contain a special character",
  },
];

const _findUserAttribute = (
  attributeName: string,
  userAttributes: AttributeType[] | undefined,
) => {
  return userAttributes?.find((attr) => attr.Name === attributeName)?.Value;
};

export const UserForm = ({
  type,
  loading = false,
  onSubmit,
  initialValues,
}: {
  type: "create" | "update";
  loading?: boolean;
  onSubmit: (arg: {
    username: string;
    password?: string;
    userAttributes: AttributeType[];
  }) => void;
  initialValues?: {
    username: string | undefined;
    userAttributes: AttributeType[] | undefined;
  };
}) => {
  const [form] = Form.useForm();
  const { isLoading, data: dataKeys } = useCustomAttributeKeys();
  return (
    <Space direction="vertical" size="large" className={clsx(styles.space)}>
      <Row justify="space-between">
        <Col>
          <Button type="link">
            <Link href={"/"}>Back to users page</Link>
          </Button>
        </Col>
        {type === "update" && (
          <Col>
            <Button type="primary" danger>
              <Link href={"/"}>Delete this user</Link>
            </Button>
          </Col>
        )}
      </Row>
      <Card
        title={type === "create" ? "Create User" : "User Information"}
        loading={isLoading || loading}
      >
        <Form
          form={form}
          {...formItemLayout}
          scrollToFirstError
          onFinish={(values) => {
            const { username, password, ...rest } = values;
            const userAttributes = Object.keys(rest)
              .map((key) => ({
                Name: key,
                Value: rest[key],
              }))
              .filter((item) => item.Value != null);
            onSubmit({ username, password, userAttributes });
          }}
          colon={false}
        >
          <Form.Item
            name="username"
            label="username"
            initialValue={initialValues?.username}
          >
            <Input disabled={type === "update"} />
          </Form.Item>
          <Form.Item
            name="name"
            label="name"
            initialValue={_findUserAttribute(
              "name",
              initialValues?.userAttributes,
            )}
          >
            <Input />
          </Form.Item>
          {type === "create" && (
            <Form.Item
              name="password"
              label="password"
              rules={passwordRules}
              hasFeedback
            >
              <Input.Password autoComplete="new-password" />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            label="email"
            initialValue={_findUserAttribute(
              "email",
              initialValues?.userAttributes,
            )}
          >
            <Input />
          </Form.Item>
          {dataKeys.map((dataKey) => {
            const customAttributeKey = `custom:${dataKey.customAttributeKey}`;
            return (
              <Form.Item
                name={customAttributeKey}
                label={customAttributeKey}
                initialValue={_findUserAttribute(
                  customAttributeKey,
                  initialValues?.userAttributes,
                )}
                key={dataKey.customAttributeKey}
              >
                <Select
                  options={dataKey.customAttributeValues?.items.map((item) => ({
                    label: item?.customAttributeValue,
                    value: item?.customAttributeValue,
                  }))}
                  allowClear
                />
              </Form.Item>
            );
          })}
          <Row justify="center">
            <Col>
              <Button type="primary" htmlType="submit">
                {type === "create" ? "Create" : "Update"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Space>
  );
};
