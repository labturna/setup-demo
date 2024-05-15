import { Flex, Typography } from "antd";
import React from "react";

function RecentActivities() {
    return (

        <Flex vertical gap="small" style={{width: 350}}>
            <Flex align="center" justify="space-between" gap="large">
            <Typography.Title level={3}>
                    Recent Activies
                </Typography.Title>

            </Flex>
        </Flex>
    );
};

export default RecentActivities;