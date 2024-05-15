import { Flex, Menu } from "antd";
import React from "react";
import { FastBackwardFilled, WalletFilled, HeartFilled } from "@ant-design/icons";

function Sidebar() {
    return (
        <div>
            <Flex align="center" justify="center">
                <div className="logo">
                    <FastBackwardFilled />
                </div>
            </Flex>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                className="menu-bar"
                items={[
                    {
                        key: '1',
                        icon: <HeartFilled />,
                        label: 'Posts'
                    },
                    {
                        key: '2',
                        icon: <WalletFilled />,
                        label: 'Wallet'
                    },
                ]}
            />
        </div>
    );
};

export default Sidebar;
