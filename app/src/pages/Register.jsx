import React, {useState} from "react";
import {Button, Col, Form, Input, Modal, Row, Select} from "antd";
import axios from "axios";
import {request} from "../untils/request";
import {md5} from "js-md5";

const {Option} = Select;


const Register = () => {
    let [useForm] = Form.useForm();
    const [msgBtnState, setMsgBtnState] = useState(false)
    const getMsg = () => {
        if (useForm.getFieldValue("prefix") !== "86") {
            Modal.error({
                title: "获取失败",
                content: "目前仅支持中国大陆地区手机号注册"
            })
            return;
        }
        let userTel = useForm.getFieldValue("userTel");
        //如果手机号不符合正则规则/^1[3|4|5|7|8][0-9]\d{8}$/，则提示错误
        if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(userTel)) {
            Modal.error({
                title: "获取失败",
                content: "请输入正确的手机号"
            })
            return;
        }
        //如果手机号符合正则规则，则发送请求
        request({url: "getMsg", method: "GET", params:{userTel : userTel}}).then((res) => {
            console.log(res);
            if (res.code === 200) {
                Modal.success({
                    title: "获取成功",
                    content: "验证码已发送至您的手机，请注意查收"
                })
                setMsgBtnState(true);
                setTimeout(() => {
                    setMsgBtnState(false);
                }, 60000)
            } else if (res.code === 400){
                Modal.error({
                    title: "获取失败",
                    content: "手机号已存在，请直接登录"
                })
            } else{
                Modal.error({
                    title: "获取失败",
                    content: "请检查手机号是否正确"
                })
            }
        }).catch((err) => {
            console.log(err);
        })
        console.log(userTel)
    }
    const prefixSelector = (
        <Form.Item name="prefix" noStyle
        initialValue={"86"}
        >
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="44">+44</Option>
            </Select>
        </Form.Item>
    );
    const register = (values) => {
        console.log(values);
        if (values.prefix !== "86") {
            Modal.error({
                title: "注册失败",
                content: "目前仅支持中国大陆地区手机号注册"
            })
            // useForm.resetFields();
            return;
        }
        if (values.password !== values.comfirmPassword) {
            Modal.error({
                title: "注册失败",
                content: "两次输入的密码不一致"
            })
            // useForm.resetFields();
            return;
        }
        values.password = md5(values.password);
        console.log(values.password);
        request({
            url: "/register",
            method: "POST",
            data: values
        }).then((res) => {
            console.log(res.code);
            if (res.code === 200) {
                Modal.success({
                    title: "注册成功",
                    content: "请重新登录",
                    onOk: () => {
                        //跳转到主页
                        window.location.href = "/";
                    }
                })
            } else if (res.code === 400) {
                Modal.error({
                    title: "注册失败",
                    content: "验证码错误"
                })
            } else if (res.code === 422) {
                Modal.error({
                    title: "注册失败",
                    content: "短信验证码已过期，请重新获取"
                })
            }
        })

    }
    return (
        <>
            <div><Form
                onFinish={register} form={useForm}
            >
                <Row gutter={24}>
                    <Col style={{margin: "auto"}} span={3}>
                        <h1>Register</h1>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col style={{margin: "auto"}} span={6}>
                        <Form.Item required={true} label={"手机号"} labelAlign={"right"} name={"userTel"}
                                   rules={[
                                       {
                                           required: true,
                                           pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                                           message: "请输入正确的手机号"
                                       }
                                   ]}
                        >
                            <Input addonBefore={prefixSelector} placeholder="Enter your telephone number"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col style={{margin: "auto"}} span={6}>
                        <Form.Item required={true} label={"短信验证码"} labelAlign={"right"} name={"megCode"}
                                   rules={[
                                       {
                                           required: true,
                                           message: "请输入6位短信验证码",
                                           pattern: /^\d{6}$/
                                       }
                                   ]}
                        >
                            <Input addonBefore={<Button type={"text"} disabled={msgBtnState}
                                                        onClick={() => getMsg()}>获取验证码</Button>}
                                   placeholder="Enter your telephone number"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col style={{margin: "auto"}} span={6}>
                        <Form.Item required={true} label={"用户名"} labelAlign={"right"} name={"userName"}
                                   rules={[
                                       {
                                           required: true,
                                           message: "请输入用户名"
                                       }
                                   ]}
                        >
                            <Input placeholder="Enter your username"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col style={{margin: "auto"}} span={6}>
                        <Form.Item required={true} label={"电子邮箱"} labelAlign={"right"} name={"email"}
                                   rules={[
                                       {
                                           required: true,
                                           pattern: /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,
                                           message: "请输入正确的邮箱"
                                       }
                                   ]}
                        >
                            <Input placeholder="Enter your email"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col style={{margin: "auto"}} span={6}>
                        <Form.Item required={true} label={"密码"} labelAlign={"right"} name={"password"}
                                   rules={[
                                       {
                                           required: true,
                                           pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
                                           message: "密码必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-16之间"
                                       }
                                   ]}
                        >
                            <Input placeholder="Enter your passWord"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col style={{margin: "auto"}} span={6}>
                        <Form.Item required={true} label={"确认密码"} labelAlign={"right"} name={"comfirmPassword"}
                                   rules={[
                                       {
                                           required: true,
                                           message: "请确认密码"
                                       }
                                   ]}
                        >
                            <Input placeholder="Enter your passWord"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col style={{margin: "auto"}}>
                        <Button type={"primary"} htmlType={"submit"}>保存</Button>
                        <Button style={{marginLeft: "10px"}} type={"primary"}
                                onClick={() => {
                                    window.location.href = "/";
                                }}
                        >返回</Button>
                    </Col>

                </Row>
            </Form></div>
        </>
    );

}
export default Register;
