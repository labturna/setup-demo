import { Flex } from "antd";
import React from "react";
import Banner from "./Banner";
import CardGallery from "./SetupList";

function MainContent () {
    return (
            <div style={{ flex: 1 }}>
                <Flex vertical gap="2.3rem">
                    <Banner />
                    <CardGallery />
                </Flex>
            </div>
    );
};

export default MainContent;