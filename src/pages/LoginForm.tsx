import React from "react";
import { Button, Checkbox, Form, Grid, Input, Typography, Divider } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function LoginForm() {
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
          <Title style={styles.title}>Sign in</Title>
          <Text style={styles.text}>
            Welcome back to ShareME! Please enter your details below to
            sign in.
          </Text>
        </div>
        <Divider />
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
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
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0" }}>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Don't have an account?</Text>{" "}
              <Link href="">Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
