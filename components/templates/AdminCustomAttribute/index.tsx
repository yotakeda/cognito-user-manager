import { Button, Card, Col, Modal, Row, Space, Table, Tabs } from "antd";
import clsx from "clsx";
import { KeyForm } from "components/organisms/customAttribute/KeyForm";
import { KeyList } from "components/organisms/customAttribute/KeyList";
import { ValueForm } from "components/organisms/customAttribute/ValueForm";
import { ValueList } from "components/organisms/customAttribute/ValueList";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

export const AdminCustomAttribute = () => {
  const [isAddKeyModalOpen, setIsAddKeyModalOpen] = React.useState(false);
  const [isAddValueModalOpen, setIsAddValueModalOpen] = React.useState(false);
  return (
    <Space direction="vertical">
      <Button type="link">
        <Link href={"/"}>Back to users page</Link>
      </Button>
      <Card title="Custom Attribute Settings">
        <Space direction="vertical" size="large" className={clsx(styles.space)}>
          <Row justify="end">
            <Col>
              <Space size="large">
                <Button
                  type="primary"
                  onClick={() => {
                    setIsAddKeyModalOpen(true);
                  }}
                >
                  Add key
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    setIsAddValueModalOpen(true);
                  }}
                >
                  Add value
                </Button>
              </Space>
            </Col>
          </Row>
          <Tabs type="card">
            <Tabs.TabPane tab="Keys" key="customKey">
              <KeyList />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Values" key="customValue">
              <ValueList />
            </Tabs.TabPane>
          </Tabs>
        </Space>
      </Card>
      <Modal
        centered
        visible={isAddKeyModalOpen}
        onCancel={() => {
          setIsAddKeyModalOpen(false);
        }}
        width={640}
        footer={null}
        destroyOnClose
      >
        <KeyForm />
      </Modal>
      <Modal
        centered
        visible={isAddValueModalOpen}
        onCancel={() => {
          setIsAddValueModalOpen(false);
        }}
        width={640}
        footer={null}
        destroyOnClose
      >
        <ValueForm />
      </Modal>
    </Space>
  );
};
