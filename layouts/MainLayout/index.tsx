import { Layout } from "antd";
import React, { ReactElement } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const { Content } = Layout;

export const MainLayout = (page: ReactElement) => {
  return (
    <Layout>
      <Content className={clsx(styles.main)}>{page}</Content>
    </Layout>
  );
};
