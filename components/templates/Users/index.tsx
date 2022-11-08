import { Button, Space, Table } from "antd";
import { useUsers } from "hooks/users/useUsers";
import Link from "next/link";
import React from "react";

export const Users = () => {
  const { isFetching, users } = useUsers({});

  const renderLocaleTimeStamp = React.useCallback((dateTime: string) => {
    const date = new Date(dateTime);
    return <>{`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</>;
  }, []);

  return (
    <Space direction="vertical" size="large">
      <Button type="primary">
        <Link href={"/users/create"}>Create User</Link>
      </Button>
      <Table
        loading={isFetching}
        columns={[
          {
            title: "UserName",
            dataIndex: "Username",
            render: (value) => {
              return (
                <Link
                  href={{
                    pathname: "users/[username]",
                    query: { username: value },
                  }}
                >
                  <a>{value}</a>
                </Link>
              );
            },
          },
          {
            title: "Name",
            dataIndex: "Name",
          },
          {
            title: "email",
            dataIndex: "email",
          },
          {
            title: "SampleCustomAttribute",
            dataIndex: "custom:sample",
          },
          {
            title: "Created Date",
            dataIndex: "UserCreateDate",
            render: renderLocaleTimeStamp,
          },
          {
            title: "Last Modified Date",
            dataIndex: "UserLastModifiedDate",
            render: renderLocaleTimeStamp,
          },
        ]}
        dataSource={users}
      />
    </Space>
  );
};
