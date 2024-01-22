import React from "react";
import {Button, Col, Form, Input, Row} from "antd";
import Title from "antd/es/skeleton/Title";
import {useForm} from "antd/es/form/Form";



const Login = () => {
    let [loginForm] = Form.useForm();
    const login = (values) => {
        console.log(values);
    }
    return (
        <>
            <div>
               <Form onFinish={login} form={loginForm}>
                   <Row gutter={24}>
                       <Col style={{margin : "auto"}} span={3}>
                           <h1>Login</h1>
                       </Col>
                   </Row>
                   <Row gutter={24}>
                       <Col style={{margin : "auto"}} span={6}>
                           <Form.Item  label={"用户名"} labelAlign={"right"} name={"userName"}>
                               <Input placeholder="Enter your username"/>
                           </Form.Item>
                       </Col>
                   </Row>
                   <Row gutter={24}>
                       <Col style={{margin : "auto"}} span={6}>
                           <Form.Item label={"密码"} labelAlign={"right"} name={"passWord"}>
                               <Input placeholder="Enter your passWord"/>
                           </Form.Item>
                       </Col>
                   </Row>
                   <Row gutter={24}>
                       <Col style={{margin :"auto"}}>
                           <Button type={"primary"} htmlType={"submit"}>登陆</Button>
                       </Col>
                   </Row>
               </Form>

            </div>
        </>
    );

}
export default Login;
