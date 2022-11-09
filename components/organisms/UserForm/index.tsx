import { Button, Card, Col, Form, Input, Row, Select, Space } from "antd";
import clsx from "clsx";
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

export const UserForm = ({
  type,
  onSubmit,
  initialValues,
}: {
  type: "create" | "update";
  onSubmit: () => void;
  initialValues?: {
    username: string | undefined;
    email: string | undefined;
  };
}) => {
  const [form] = Form.useForm();
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
      <Card title={type === "create" ? "Create User" : "User Information"}>
        <Form
          form={form}
          {...formItemLayout}
          scrollToFirstError
          onFinish={onSubmit}
        >
          <Form.Item
            name="username"
            label="username"
            initialValue={initialValues?.username}
          >
            <Input disabled={type === "update"} />
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
            initialValue={initialValues?.email}
          >
            <Input />
          </Form.Item>
          {/* FIXME fetch from API */}
          <Form.Item name="customAttribute1" label="customAttribute1">
            <Select options={[{ value: "test", label: "test" }]} allowClear />
          </Form.Item>
          <Row justify="center">
            <Col>
              <Space size="large">
                <Button
                  onClick={() => {
                    form.resetFields();
                  }}
                >
                  Reset
                </Button>
                <Button type="primary" htmlType="submit">
                  {type === "create" ? "Create" : "Update"}
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Card>
    </Space>
  );
};
