import { MessageOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Breadcrumb, ConfigProvider } from "antd";
import Search from "antd/es/input/Search";
import { TinyColor } from '@ctrl/tinycolor';
import WalletModal from "./WalletModal";
import ConnectButton from "./ConnectButton";

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
                    
                    <MessageOutlined className="header-icon" />
                    <NotificationOutlined className="header-icon" />
                    <ConnectButton />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default CustomHeader;