import { Table } from "antd";
import Link from "next/link";

export const Users = () => {
  return (
    <Table
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
                {value}
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
        },
        {
          title: "Last Modified Date",
          dataIndex: "UserLastModifiedDate",
        },
      ]}
      dataSource={[
        {
          key: "sample",
          Username: "sample",
          Name: "Sample User",
          email: "test@forcia.com",
          UserCreateDate: "2022-11-01",
          UserLastModifiedDate: "2022-11-01",
        },
      ]}
    />
  );
};
