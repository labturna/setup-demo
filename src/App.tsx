import { Button, Divider, Layout } from "antd";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import "./App.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import MainContent from "./components/MainContent";
import RightSideContent from "./components/RightSideContent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from "./components/Register";

const { Sider, Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <Layout>
            <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className="sider">
              <Sidebar />
              <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className="trigger-btn" />
            </Sider>
            <Layout>
              <Header className="header">
                <CustomHeader />
              </Header>
              <Content className="content">
                <div style={{ display: 'flex', gap: 'large', justifyContent: 'space-between' }}>
                  <MainContent />
                  <RightSideContent />
                </div>
                <Divider />
              </Content>
            </Layout>
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
