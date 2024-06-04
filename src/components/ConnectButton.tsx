import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { connectWallet } from '../utils/metamask';

const ConnectButton: React.FC = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [connected, setConnected] = useState<boolean>(false);

    useEffect(() => {
        const storedAccount = localStorage.getItem('account');
        if (storedAccount) {
            setAccount(storedAccount);
            setConnected(true);
        }
    }, []);

    const handleConnect = async () => {
        const newAccount = await connectWallet();
        if (newAccount) {
            localStorage.setItem('account', newAccount);
            setAccount(newAccount);
            setConnected(true);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('account');
        setAccount(null);
        setConnected(false);
    };

    const displayText = connected ? (account ? `${account.slice(0, 5)}...` : 'Wallet cannot find') : 'Connect Wallet';
    const icon = connected ? <LogoutOutlined /> : <UserOutlined />;
    const handleClick = connected ? handleLogout : handleConnect;

    return (
        <Button
            type="primary"
            size="large"
            icon={icon}
            onClick={handleClick}
            style={{ background: 'linear-gradient(135deg, #536485, #04BEFE)', border: 'none' }}
        >
            {displayText}
        </Button>
    );
};

export default ConnectButton;
