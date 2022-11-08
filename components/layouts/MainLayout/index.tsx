import { Layout } from "antd";
import React, { ReactElement } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { CommonHeader } from "components/organisms/CommonHeader";

const { Content, Header } = Layout;

export const MainLayout = (page: ReactElement) => {
  return (
    <Layout>
      <Header>
        <CommonHeader />
      </Header>
      <Content className={clsx(styles.main)}>{page}</Content>
    </Layout>
  );
};
