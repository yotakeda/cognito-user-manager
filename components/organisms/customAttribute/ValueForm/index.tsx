import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useCreateCustomAttributeValue } from "hooks/admin/useCreateCustomAttributeValue";
import { useCustomAttributeKeys } from "hooks/admin/useCustomAttributeKeys";
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

export type ValueFormType = {
  customAttributeKeyCustomAttributeValuesId: string;
  customAttributeValue: string;
  displayOrder?: number | null;
};

const ValueFormPresentation = ({
  customAttributeKeys,
  onSubmit,
}: {
  customAttributeKeys: string[];
  onSubmit: (arg: ValueFormType) => void;
}) => {
  const [form] = Form.useForm();
  return (
    <>
      <Form<ValueFormType>
        form={form}
        {...formItemLayout}
        scrollToFirstError
        onFinish={(values) => {
          onSubmit(values);
        }}
      >
        <Form.Item
          name="customAttributeKeyCustomAttributeValuesId"
          label="Custom Attribute Key"
        >
          <Select
            options={customAttributeKeys?.map((key) => ({
              label: key,
              value: key,
            }))}
          />
        </Form.Item>
        <Form.Item name="customAttributeValue" label="Custom Attribute Value">
          <Input />
        </Form.Item>
        <Form.Item name="displayOrder" label="Display Order">
          <InputNumber min={0} />
        </Form.Item>
        <Row justify="center">
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Create
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export const ValueForm = () => {
  const { create } = useCreateCustomAttributeValue();
  const { data, isLoading } = useCustomAttributeKeys();
  return isLoading ? null : (
    <ValueFormPresentation
      customAttributeKeys={data.map((datum) => datum.customAttributeKey)}
      onSubmit={(values) => {
        create(values);
      }}
    />
  );
};
