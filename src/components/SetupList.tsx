import React from 'react';
import { HeartTwoTone, MoneyCollectOutlined } from '@ant-design/icons';
import { Avatar, Card, Space } from 'antd';

const { Meta } = Card;
const imageSources = [
    "https://t3.ftcdn.net/jpg/05/55/57/62/360_F_555576290_dcxxy35LdAUb8OqGGxsDzHDcqGpun1KT.jpg",
    "https://t3.ftcdn.net/jpg/05/55/57/62/360_F_555576290_dcxxy35LdAUb8OqGGxsDzHDcqGpun1KT.jpg",
    "https://i.ytimg.com/vi/GeP31f9jtpk/maxresdefault.jpg",
    "https://i.ytimg.com/vi/vhq9VhN4x8Y/maxresdefault.jpg",
    "https://image.benq.com/is/image/benqco/laptop-desk-setup-1?$ResponsivePreset$",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5hIyOmwAlukdLceb4qLiupSPeYmL91znazi1lXbx6A&s",
    "https://i.ytimg.com/vi/LQBWyANzhfs/maxresdefault.jpg"
];
const getRandomImageSource = () => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
};
const CardGallery: React.FC = () => (
    <Space size={[25, 16]} wrap>
        {new Array(20).fill(null).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card
                hoverable
                style={{ width: 260 }}
                cover={
                    <img
                        alt="example"
                        src={getRandomImageSource()}
                        style={{ objectFit: 'cover', width: '100%', height: 200 }}
                    />
                }
                actions={[
                    <HeartTwoTone twoToneColor="#eb2f96" key="Like" />,
                    <MoneyCollectOutlined twoToneColor="#eb2f96" key="Donate" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="user4901"
                    description="0x8082**412"
                />
            </Card>
        ))}

    </Space>
);

export default CardGallery;