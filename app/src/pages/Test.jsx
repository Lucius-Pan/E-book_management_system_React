import React, {useState} from "react";
import {Button, Tooltip} from "antd";
import {request} from "../untils/request";
import CrvViewMotorVehicleInvoice from "../components/CrvViewMotorVehicleInvoice";

const Test = () => {
    const [visio, setVisio] = useState(false)
    const test = () => {
        setVisio(true)
    }
    return (
        <>
            <div>
                <Button onClick={() => test()}>test</Button>
                <CrvViewMotorVehicleInvoice
                    visible={visio}
                    // title={"test"}
                    onOk={() => setVisio(false)}
                    onCancel={() => setVisio(false)}
                ></CrvViewMotorVehicleInvoice>
            </div>

        </>
    );

}
export default Test;
