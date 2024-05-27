import { Button, Card, ConfigProvider, Flex, Typography } from "antd";
import React from "react";
import ShareModal from "./ShareModal";
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
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >
                        <ShareModal />
                    </ConfigProvider>
                    <Button size="large">Top Earners</Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Banner;