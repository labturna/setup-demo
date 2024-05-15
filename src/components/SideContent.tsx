import { BilibiliOutlined } from "@ant-design/icons";
import { Flex, Card, Typography, Image } from "antd";
import React from "react";

function SideContent() {
    return (
        <Flex vertical gap="2.3rem" style={{width: 350}}>
            <Card className="card">
                <Flex vertical style={{width: 350}}>
                    <Typography.Title level={4}>
                        Today <br /> 10 transactions
                    </Typography.Title>
                    <Typography.Title level={4}>
                        This month <br /> 150 transactions
                    </Typography.Title>
                </Flex>
                <BilibiliOutlined style={{position: "absolute", bottom: 30, alignItems: "center" }} />
            </Card>
            
        </Flex>
    );
};

export default SideContent;