import React, {useEffect, useState} from 'react';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import Title from "antd/es/skeleton/Title";

const {Header, Content, Sider} = Layout;

const Home = () => {
    const [themeStyle, setThemeStyle] = useState(["","", ""]);
    useEffect(() => {
        console.log("home")
        let date = new Date();
        console.log(date.getHours());
        if (date.getHours() > 6 && date.getHours() < 18) {
            setThemeStyle(["skyBlue", "white", "green"])
        }else {
            setThemeStyle(["darkBlue", "black", "darkGreen"])
        }
    }, []);
    return (
       <> <Layout style={{ minHeight: '100vh' }}>
           <Sider trigger={null} collapsible style={{backgroundColor : themeStyle[0]}} >
               <div className="logo" />
               <Menu style={{backgroundColor : themeStyle[0]}} mode="inline" defaultSelectedKeys={['1']}>
                   <Menu.Item key="1">
                       导航一
                   </Menu.Item>
                   <Menu.Item key="2">
                       导航二
                   </Menu.Item>
                   <Menu.Item key="3">
                       导航三
                   </Menu.Item>
               </Menu>
           </Sider>

           <Layout className="site-layout">
               <Header  className="site-layout-background" style={{ padding: 0 ,backgroundColor : themeStyle[1]}}>
                   <div>
                       <Title>123</Title>
                   </div>
               </Header>

               <Content style={{ margin: '24px 16px 0', overflow: 'initial' , backgroundColor : themeStyle[2] }}>
                   <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                       {/*特别感谢：测试者SFW*/}
                   </div>
               </Content>
           </Layout>
       </Layout></>
    )
};
export default Home;