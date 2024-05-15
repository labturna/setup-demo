import { Button, Divider, Flex, Layout } from "antd";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar"
import CustomHeader from "./components/Header"
import "./App.css"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

const { Sider, Header, Content } = Layout
const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  return <Layout>
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className="sider">
      <Sidebar/>
      <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      className="trigger-btn"/>
    </Sider>
    <Layout>
      <Header className="header">
        <CustomHeader />
      </Header>
      <Content className="content">
        <Flex gap="large" className="space-between">
          <MainContent />
          <SideContent />
        </Flex>
        <Divider />
      </Content>
    </Layout>
  </Layout>
};

export default App;