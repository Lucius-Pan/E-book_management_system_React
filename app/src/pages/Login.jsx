import React from "react";
import {Button, Col, Form, Input, Modal, Row} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import Title from "antd/es/skeleton/Title";
import {useForm} from "antd/es/form/Form";
import {Router, useHref} from "react-router-dom";
import axios from "axios";
import {axiosRequest, request} from "../untils/request";


const Login = () => {
    let [loginForm] = Form.useForm();

    const login = (values) => {
        request({
            url: "/login", method: "POST", data: {
                userTel: values.userTel,
                password: values.password
            }
        }).then((res) => {
            console.log(res);
            if (res.code === 200) {
                console.log(res.data.data)
                Modal.success({
                    title: "登陆成功",
                    content: "欢迎回来",
                    onOk: () => {
                        //跳转到主页
                        window.location.href = "/home";
                    }
                })
            } else if (res.code === 400) {
                console.log("登陆失败")
                Modal.error({
                    title: "登陆失败",
                    content: "用户名或密码错误"
                })
                loginForm.resetFields();
            } else {
                console.log("异常")
                Modal.error({
                    title: "服务器异常",
                    content: "请联系系统管理员"
                })
            }
        })
        // axios.post("/login", {
        //     userTel: values.userTel,
        //     password: values.password
        // }).then((res) => {
        //     console.log(res?.data);
        //     if (res.data.code === 200) {
        //         console.log(res.data.data)
        //         Modal.success({
        //             title: "登陆成功",
        //             content: "欢迎回来",
        //             onOk: () => {
        //                 //跳转到主页
        //                 window.location.href = "/home";
        //             }
        //         })
        //     } else if (res.data.code === 400) {
        //         console.log("登陆失败")
        //         Modal.error({
        //             title: "登陆失败",
        //             content: "用户名或密码错误"
        //         })
        //         loginForm.resetFields();
        //     } else {
        //         console.log("异常")
        //         Modal.error({
        //             title: "服务器异常",
        //             content: "请联系系统管理员"
        //         })
        //     }
        // })
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
                            <Form.Item label={"手机号"} labelAlign={"right"} name={"userTel"}>
                                <Input placeholder="Enter your username"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col style={{margin: "auto"}} span={6}>
                            <Form.Item label={"密码"} labelAlign={"right"} name={"password"}>
                                <Input.Password
                                    placeholder="input password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col style={{margin: "auto"}}>
                            <Button type={"primary"} htmlType={"submit"}>登陆</Button>
                            <Button style={{marginLeft: "10px"}} type={"primary"}
                                    onClick={() => {
                                        window.location.href = "/register";
                                    }}
                            >注册</Button>
                        </Col>

                    </Row>
                </Form>

            </div>
        </>
    );

}
export default Login;
