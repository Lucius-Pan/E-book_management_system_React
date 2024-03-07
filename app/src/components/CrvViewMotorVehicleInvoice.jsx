import React from "react";
import {Col, Drawer, Modal, Row} from "antd";


const CrvViewMotorVehicleInvoice = (props) => {
    return (
        <>
            <div>
                <Row>
                    <span>发票预览</span>
                </Row>
                <Row >
                    <Col span={9}>

                    </Col>
                    <Row>
                        <Col span={7} offset={5}>

                        </Col>
                        <Col span={4}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    fontFamily: "楷体",
                                    fontSize: 34,
                                    width: "100%",
                                    flexDirection: "row",
                                }}
                            >
                                <span>机</span>
                                <span>动</span>
                                <span>车</span>
                                <span>销</span>
                                <span>售</span>
                                <span>统</span>
                                <span>一</span>
                                <span>发</span>
                                <span>票</span>
                            </div>

                        </Col>
                        <Col span={7} offset={1}>

                        </Col>
                    </Row>

                    <Col>

                    </Col>
                </Row>
            </div>
        </>
    );

}
export default CrvViewMotorVehicleInvoice;
