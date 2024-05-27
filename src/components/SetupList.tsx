import React, { useState } from 'react';
import { HeartTwoTone, MoneyCollectOutlined } from '@ant-design/icons';
import { Avatar, Card, Space, Image, Flex, Typography, Button, Pagination, Modal, InputNumber, Input, Divider } from 'antd';

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
const info = () => {
    Modal.info({
      title: 'Donate 😃',
      content: (
        <div>
          <InputNumber placeholder="Cost" />
          <Divider />
          <Input placeholder="From" className='margin-bottom'/>
          <Input placeholder="To" />
        </div>
      ),
      onOk() {},
    });
  };
const pageSize = 8;
const CardGallery: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;

    return (
        <>
            <Flex align='center' justify='space-between'>
                <Typography.Title level={4} className='primary--color'>
                    Latest Setups
                </Typography.Title>
                <Button type="link" className="gray--color">View All</Button>
            </Flex>
            <Flex align='flex-start' justify='space-between' gap="large">
                <Space size={[32, 15]} wrap>
                    {new Array(20).fill(null).slice(startIdx, endIdx).map((_, index) => (
                        <Card
                            key={index}
                            hoverable
                            style={{ width: 290 }}
                            cover={<Image alt="example"
                                src={getRandomImageSource()}
                                style={{ objectFit: 'cover', width: '100%', height: 200 }}>

                            </Image>}
                            actions={[
                                <HeartTwoTone twoToneColor="#eb2f96" key="Like" />,
                                <MoneyCollectOutlined onClick={info} twoToneColor="#eb2f96" key="Donate" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                title="user4901"
                                description="0x8082**412" />
                        </Card>
                    ))}
                </Space>
            </Flex>
            <Pagination
                style={{ marginTop: '20px', textAlign: 'center' }}
                defaultCurrent={1}
                pageSize={pageSize}
                total={20}
                onChange={handlePageChange}
            />
        </>
    );
};

export default CardGallery;
