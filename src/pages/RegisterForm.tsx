import React from "react";
import { Button, Form, Grid, Input, Typography, Divider } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;
const { Text, Title } = Typography;

export default function RegisterForm() {
    const screens = useBreakpoint();

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
    };

    const styles = {
        container: {
            margin: "0 auto",
            padding: screens.md ? "24px" : "32px 16px",
            width: "380px"
        },
        footer: {
            marginTop: "24px",
            width: "100%"
        },
        header: {
            marginBottom: "24px"
        },
        section: {
            alignItems: "center",
            backgroundColor: "#f0f2f5",
            display: "flex",
            height: screens.sm ? "100vh" : "auto",
            padding: screens.md ? "48px 0" : "0"
        },
        text: {
            color: "#8c8c8c"
        },
        title: {
            fontSize: screens.md ? "24px" : "20px"
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <Title style={styles.title}>Sign up</Title>
                    <Text style={styles.text}>
                        Create your account to start sharing!
                    </Text>
                </div>
                <Divider />
                <Form
                    name="normal_register"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    layout="vertical"
                    requiredMark="optional"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                required: true,
                                message: "Please input your Email!",
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Register
                        </Button>
                        <div style={styles.footer}>
                            <Text style={styles.text}>Already have an account?</Text>{" "}
                            <Link to="/">Sign in</Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
}
