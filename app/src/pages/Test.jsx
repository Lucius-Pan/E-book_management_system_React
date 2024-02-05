import React from "react";
import {Button, Tooltip} from "antd";
import {request} from "../untils/request";

const Test = () => {
    const test = () => {
        const res = request({
            url: "/getMsg",
            method: "GET",
            params: {
                userTel: 1
            }
        }).then((res) => {
            console.log(res)
        })
        console.log(res)
    }
    return (
        <>
            <div>
                <Button onClick={() => test()}>test</Button>
            </div>

        </>
    );

}
export default Test;
