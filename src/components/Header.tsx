import { MessageOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Breadcrumb, Button, ConfigProvider, Space } from "antd";
import Search from "antd/es/input/Search";
import { TinyColor } from '@ctrl/tinycolor';
import WalletModal from "./WalletModal";

const colors1 = ['#536485', '#04BEFE'];

const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());
const CustomHeader = () => {
    return (
        <Flex align="center" justify="space-between">
            <Breadcrumb
                items={[
                    {
                        title: <a href="">Dashboard</a>,
                    }
                ]}
            />
            <Flex align="center" gap="3rem">
                <Search placeholder="Search for Setup" allowClear />
                <Flex align="center" gap="1.5rem">
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
                        <WalletModal />
                    </ConfigProvider>
                    <MessageOutlined className="header-icon" />
                    <NotificationOutlined className="header-icon" />
                    <Avatar icon={<UserOutlined />} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default CustomHeader;