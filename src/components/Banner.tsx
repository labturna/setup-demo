import { Button, Card, Flex, Typography } from "antd";
import React from "react";

function Banner () {
    return (
        <Card style={{ height: 260, padding: '20px' }}>
            <Flex vertical gap="30px">
                <Flex vertical align="flex-start">
                    <Typography.Title level={2}>Share and Earn</Typography.Title>
                    <Typography.Text type="secondary" strong>
                        Lorem ipsum sit amet
                    </Typography.Text>
                </Flex>
                <Flex gap="small">
                    <Button type="primary" size="large">Share Now</Button>
                    <Button size="large">Top Sellers</Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Banner;