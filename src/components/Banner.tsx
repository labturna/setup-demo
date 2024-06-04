import { Button, Card, ConfigProvider, Flex, Typography } from "antd";
import React from "react";
import ShareModal from "./ShareModal";
import ConnectButton from "./ConnectButton";
import { TinyColor } from '@ctrl/tinycolor';
const colors1 = ['#536485', '#04BEFE'];

const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());
function Banner() {
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
                    <Button size="large">Top Earners</Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Banner;