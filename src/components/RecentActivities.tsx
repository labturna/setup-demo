import { Avatar, Button, Flex, List, Typography } from "antd";
import React from "react";

const data = [
    {
        name: 'Emma Turner',
        sendTime: 1,
    },
    {
        name: 'Emma Turner',
        sendTime: 2,
    },
    {
        name: 'Emma Turner',
        sendTime: 3,
    },
    {
        name: 'Emma Turner',
        sendTime: 1,
    },
    {
        name: 'Emma Turner',
        sendTime: 1,
    },
]
function RecentActivities() {
    return (
        <Flex vertical gap="small">
            <Flex align="center" justify="space-between">
                <Typography.Title level={4} className="primary--color">
                    Recent Activities
                </Typography.Title>
                <Button type="link" className="gray--color">
                    View All
                </Button>
            </Flex>
            <List dataSource={data} renderItem={(user, index) => (
                <List.Item>
                    <List.Item.Meta 
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />} 
                    title={<a href="#">{user.name}</a>}
                    description="Sent a gift">
                    </List.Item.Meta>
                    <span className="gray--color">
                        {user.sendTime} {user.sendTime == 1 ? 'day ago' : 'days ago'}
                    </span>
                </List.Item>
            )} />
        </Flex>
    );
};

export default RecentActivities;
