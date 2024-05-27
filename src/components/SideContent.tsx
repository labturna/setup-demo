import { BilibiliOutlined } from "@ant-design/icons";
import { Flex, Card, Typography, Image } from "antd";
import React from "react";
import RecentActivities from "./RecentActivities";

function SideContent() {
    return (
        <Flex vertical gap="2.3rem" style={{width: 350}}>
            <Card className="card" style={{height: 260}}>
                <Flex vertical>
                    <Typography.Title level={4}>
                        Today <br /> 10 transactions
                    </Typography.Title>
                    <Typography.Title level={4}>
                        This month <br /> 150 transactions
                    </Typography.Title>
                </Flex>
            </Card>
        </Flex>
    );
};

export default SideContent;