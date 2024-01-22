import React from "react";
import {Button, Col, Form, Input, Modal, Row} from "antd";
import Title from "antd/es/skeleton/Title";
import {useForm} from "antd/es/form/Form";
import axios from "axios";
import {Router, useHref} from "react-router-dom";


const Login = () => {
    let [loginForm] = Form.useForm();
    const login = (values) => {
        axios.post("/login", {
                userName: values.userName,
                passWord: values.passWord
            }
        ).then((res) => {
                console.log(res.data);
                if (res.data.code === 200) {
                    console.log("登陆成功")
                    Modal.success({
                        title: "登陆成功",
                        content: "欢迎回来",
                        onOk: () => {
                            //跳转到主页
                            window.location.href = "/home";
                        }
                    })
                } else {
                    console.log("登陆失败")
                    Modal.error({
                        title: "登陆失败",
                        content: "用户名或密码错误"
                    })
                    loginForm.resetFields();
                }
            }
        ).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <div>
                <Form onFinish={login} form={loginForm}>
                    <Row gutter={24}>
                        <Col style={{margin: "auto"}} span={3}>
                            <h1>Login</h1>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col style={{margin: "auto"}} span={6}>
                            <Form.Item label={"用户名"} labelAlign={"right"} name={"userName"}>
                                <Input placeholder="Enter your username"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col style={{margin: "auto"}} span={6}>
                            <Form.Item label={"密码"} labelAlign={"right"} name={"passWord"}>
                                <Input placeholder="Enter your passWord"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col style={{margin: "auto"}}>
                            <Button type={"primary"} htmlType={"submit"}>登陆</Button>
                        </Col>
                    </Row>
                </Form>

            </div>
        </>
    );

}
export default Login;
