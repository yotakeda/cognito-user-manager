import { Button, Col, Form, Input, InputNumber, Row, Space } from "antd";
import { useCreateCustomAttributeKey } from "hooks/admin/useCreateCustomAttributeKey";
import React from "react";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    md: { span: 14 },
  },
};

export type KeyFormType = {
  customAttributeKey: string;
  description: string;
  displayOrder?: number | null;
};

const KeyFormPresentation = ({
  onSubmit,
}: {
  onSubmit: (arg: KeyFormType) => void;
}) => {
  const [form] = Form.useForm();
  return (
    <>
      <Form<KeyFormType>
        form={form}
        {...formItemLayout}
        scrollToFirstError
        onFinish={(values) => {
          onSubmit(values);
          form.resetFields();
        }}
      >
        <Form.Item name="customAttributeKey" label="Custom Attribute Key">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input />
        </Form.Item>
        <Form.Item name="displayOrder" label="Display Order">
          <InputNumber min={0} />
        </Form.Item>
        <Row justify="center">
          <Col>
            <Space size="large">
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                  Create
                </Button>
              </Form.Item>
            </Space>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export const KeyForm = () => {
  const { create } = useCreateCustomAttributeKey();
  return (
    <KeyFormPresentation
      onSubmit={(values) => {
        create(values);
      }}
    />
  );
};
