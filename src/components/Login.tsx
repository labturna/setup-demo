// src/components/Login.js
import React from 'react';
import { Button, Card, Checkbox, Divider, Flex, Form, Input, Space } from 'antd';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-container">
            <Card className="login-card" style={{ width: 360 }}>
                <h2 className="login-header">Login</h2>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <div className="login-footer">
                                <Link to="/register">Register</Link>
                            </div>
                        </Space>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form.Item>

                    <Divider>Or</Divider>

                    <Form.Item>
                        <Button type="default" htmlType="button" block>
                            Connect with Wallet
                        </Button>
                    </Form.Item>

                </Form>
            </Card>
        </div>
    );
};

export default Login;
