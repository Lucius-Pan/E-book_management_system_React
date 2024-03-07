import React from "react";
import {Col, Drawer, Modal, Row} from "antd";
import {doubleUnderline} from "../css/css.css"

const CrvViewMotorVehicleInvoice = (props) => {

    const InvoiceTittle = () => {
        return (
            <>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        fontFamily: "楷体",
                        fontSize: 34,
                        width: "100%",
                        flexDirection: "row",
                        color: '#916857'
                    }}
                >
                    <span className="doubleUnderline">机</span>
                    <span className="doubleUnderline">动</span>
                    <span className="doubleUnderline">车</span>
                    <span className="doubleUnderline">销</span>
                    <span className="doubleUnderline">售</span>
                    <span className="doubleUnderline">统</span>
                    <span className="doubleUnderline">一</span>
                    <span className="doubleUnderline">发</span>
                    <span className="doubleUnderline">票</span>
                </div>
            </>
        );
    }
    return (
        <>
            <div>
                <Row>
                    <span>发票预览</span>
                </Row>
                <Row>
                    <Col span={8}>

                    </Col>
                    <Col span={5}>
                        <Row>
                            <Col span={7} offset={5}>

                            </Col>
                            <Col offset={5} span={4}>
                                <InvoiceTittle></InvoiceTittle>
                            </Col>

                        </Row>
                    </Col>

                    <Col span={5} offset={6} style={{marginTop:'40px'}}>
                        <Row>
                            <span>发票代码: {"122012221706"}</span>
                        </Row>
                        <Row>
                            <span>发票号码: {"00000775"}</span>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );

}
export default CrvViewMotorVehicleInvoice;
