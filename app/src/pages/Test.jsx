import React, {useState} from "react";
import {Button, Drawer, Tooltip} from "antd";
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
                {/*<Button onClick={() => test()}>test</Button>*/}
              <CrvViewMotorVehicleInvoice>

              </CrvViewMotorVehicleInvoice>
            </div>

        </>
    );

}
export default Test;
