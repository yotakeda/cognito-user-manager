import { Button, Modal, Space, Table } from "antd";
import { useCustomAttributeKeys } from "hooks/admin/useCustomAttributeKeys";
import { useDeleteCustomAttributeKey } from "hooks/admin/useDeleteCustomAttributeKey";
import React from "react";

export const KeyList = () => {
  const { isLoading, data } = useCustomAttributeKeys();
  const { deleteMutate } = useDeleteCustomAttributeKey();
  return (
    <>
      <Table
        columns={[
          {
            title: "Attribute Key",
            dataIndex: "customAttributeKey",
          },
          {
            title: "Description",
            dataIndex: "description",
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
                      title: `${record?.customAttributeKey}`,
                      content: `Delete ${record?.customAttributeKey} ?`,
                      onOk: () => {
                        deleteMutate({
                          customAttributeKey: record.customAttributeKey,
                        });
                      },
                      onCancel: () => {
                        // do nothing
                      },
                    });
                  }}
                >
                  Delete Key
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
