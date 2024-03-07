import React, {useEffect, useState} from 'react';
import {LaptopOutlined, MoonFilled, MoonOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, Space, Switch, theme} from 'antd';
import Title from "antd/es/skeleton/Title";

const {Header, Content, Sider} = Layout;

const Home = () => {
    // const [themeStyle, setThemeStyle] = useState(["","", ""]);
    const [themeStyle, setThemeStyle] = useState({
        Sider : "",
        Header : "",
        Content : ""
    });
    const [isLightMode, setIsLightMode] = useState(true)
    let lightStyle = {
        Sider : "skyBlue",
        Header : "white",
        Content : "green"
    }
    let darkStyle = {
        Sider : "darkBlue",
        Header : "black",
        Content : "darkGreen"
    }
    
    useEffect(() => {
        console.log("home")
        let date = new Date();
        console.log(date.getHours());
        if (date.getHours() > 6 && date.getHours() < 18) {
            setThemeStyle(
                lightStyle
                )
            setIsLightMode(true)
        }else {
            setThemeStyle(darkStyle)
            setIsLightMode(false)
        }
    }, []);
    useEffect(() => {
        if (isLightMode) {
            setThemeStyle(lightStyle)
        }
        else {
            setThemeStyle(darkStyle)
        }
    },[isLightMode])
    return (
       <> <Layout style={{ minHeight: '100vh' }}>
           <Sider collapsed={true} trigger={null} collapsible style={{backgroundColor : themeStyle.Sider}} >
               <div className="logo" />
               <Menu style={{backgroundColor : themeStyle.Sider}} mode="inline" defaultSelectedKeys={['1']}>
                   <Menu.Item key="1">
                       个人中心
                   </Menu.Item>
                   <Menu.Item key="2">
                       书籍管理
                   </Menu.Item>
                   <Menu.Item key="3">
                       导航三
                   </Menu.Item>
               </Menu>
           </Sider>

           <Layout className="site-layout">
               <Header  className="site-layout-background" style={{ padding: 0 ,backgroundColor : themeStyle.Header}}>
                   <div style={{float : 'right'}}>

                       <Space>{isLightMode ? <span>亮色模式</span> : <span style={{color : '#FFFFFF' }}>深色模式</span>}<Switch onChange={()=> {
                           setIsLightMode(!isLightMode)
                       }} defaultChecked={isLightMode}></Switch></Space>
                   </div>
               </Header>

               <Content style={{ margin: '24px 16px 0', overflow: 'initial' , backgroundColor : themeStyle.Content}}>
                   <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                       {/*特别感谢：测试者SFW*/}
                   </div>
               </Content>
           </Layout>
       </Layout></>
    )
};
export default Home;