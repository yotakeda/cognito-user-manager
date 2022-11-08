import { Button, Card, Col, Form, Input, Row, Select, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const User = () => {
  const router = useRouter();
  const username = router.query.username as string;
  const [form] = Form.useForm();
  return (
    <>
      <Button type="link">
        <Link href={"/"}>
          <a>Back to users page</a>
        </Link>
      </Button>
      <Card title="User Information">
        <Form form={form} scrollToFirstError>
          <Form.Item name="username" label="username" initialValue={username}>
            <Input disabled />
          </Form.Item>
          <Form.Item name="email" label="email">
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
                  Update
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};
