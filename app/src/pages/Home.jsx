import React from 'react';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, theme} from 'antd';

const {Header, Content, Sider} = Layout;

const headerItems = [
    {
        key: '1',
        label: 'nav 1',
    },
    {
        key: '2',
        label: 'nav 2',
    },
    {
        key: '3',
        label: 'nav 3',
    }
];
const menuItems = [
    {
        key: '1',
        icon: React.createElement(UserOutlined),
        label: 'option 1',
        children: [
            {
                key: '1',
                label: 'option 1'
            },
            {
                key: '2',
                label: 'option 2'
            },
            {
                key: '3',
                label: 'option 3'
            },
            {
                key: '4',
                label: 'option 4'
            }
        ]
    },
    {
        key: '2',
        icon: React.createElement(UserOutlined),
        label: 'option 1',
        children: [
            {
                key: '1',
                label: 'option 1'
            },
            {
                key: '2',
                label: 'option 2'
            },
            {
                key: '3',
                label: 'option 3'
            },
            {
                key: '4',
                label: 'option 4'
            }
        ]
    }
]
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
const Home = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={headerItems}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={menuItems}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Home;