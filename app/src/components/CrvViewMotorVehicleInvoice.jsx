import React from "react";
import {Col, Drawer, Modal, Row} from "antd";


const CrvViewMotorVehicleInvoice = (props) => {
    return (
        <>
            <Drawer
            width={props.width || "100%"}
            height={props.height || "100%"}
            visible={props.visible}
            title={props.title }
            onClose={props.onCancel}
            footer={props.footer }
            >
                <div>
                    <Row>
                        <span>发票预览123</span>
                    </Row>
                    <Row gutter={8}>
                        <Col span={6}>

                        </Col>
                        <Col span={6}>
                            <span color={"#916447"}>机动车销售统一发票</span>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </div>
            </Drawer>
        </>
    );

}
export default CrvViewMotorVehicleInvoice;
