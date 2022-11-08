import { Button, Card, Col, Form, Input, Row, Select, Space } from "antd";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

export const UserForm = ({
  type,
  initialValues,
}: {
  type: "create" | "update";
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
            <Link href={"/"}>
              <a>Back to users page</a>
            </Link>
          </Button>
        </Col>
        {type === "update" && (
          <Col>
            <Button type="primary" danger>
              <Link href={"/"}>
                <a>Delete this user</a>
              </Link>
            </Button>
          </Col>
        )}
      </Row>
      <Card title="User Information">
        <Form form={form} scrollToFirstError>
          <Form.Item
            name="username"
            label="username"
            initialValue={initialValues?.username}
          >
            <Input disabled={type === "update"} />
          </Form.Item>
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
