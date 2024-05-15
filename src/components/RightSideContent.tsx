import { Flex } from "antd";
import SideContent from "./SideContent";
import RecentActivities from "./RecentActivities";
function RightSideContent () {
    return (
                <Flex vertical gap="2.3rem">
                    <SideContent />
                    <RecentActivities />
                </Flex>
    );
};

export default RightSideContent;