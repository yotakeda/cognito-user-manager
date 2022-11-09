import { Button, Modal, Space, Table } from "antd";
import { useCustomAttributeValues } from "hooks/admin/useCustomAttributeValues";
import { useDeleteCustomAttributeValue } from "hooks/admin/useDeleteCustomAttributeValue";
import React from "react";

export const ValueList = () => {
  const { isLoading, data } = useCustomAttributeValues();
  const { deleteMutate } = useDeleteCustomAttributeValue();
  return (
    <>
      <Table
        columns={[
          {
            title: "Attribute Value",
            dataIndex: "customAttributeValue",
          },
          {
            title: "Attribute Key",
            dataIndex: "customAttributeKeyCustomAttributeValuesId",
          },
          {
            title: "Display Order",
            dataIndex: "displayOrder",
            sorter: (a, b) => (a?.displayOrder ?? 0) - (b?.displayOrder ?? 0),
          },
          {
            title: "Action",
            render: (_value, record) => (
              <Space>
                <Button
                  danger
                  type="primary"
                  onClick={() => {
                    Modal.confirm({
                      title: `${record?.customAttributeValue}`,
                      content: `Delete ${record?.customAttributeValue} ?`,
                      onOk: () => {
                        deleteMutate({
                          id: record.id,
                        });
                      },
                      onCancel: () => {
                        // do nothing
                      },
                    });
                  }}
                >
                  Delete Value
                </Button>
              </Space>
            ),
          },
        ]}
        loading={isLoading}
        dataSource={data}
      />
    </>
  );
};
