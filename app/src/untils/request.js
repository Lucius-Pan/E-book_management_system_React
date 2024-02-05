import {baseURL} from "../config";
import axios from "axios";
import CryptoJS from 'crypto-js';
import {message, Modal} from "antd";


// const axiosRequest = (options, consoleStyle) => {
//     let {method, url, data, timeout} = options;
//     data = data || {};
//     const _baseURL = baseURL;
//     // console.log('%c url:', consoleStyle, _baseURL + url);
//     // console.log('%c params:', consoleStyle, data);
//     const instance = axios.create({
//         baseURL: _baseURL,
//         timeout: timeout == undefined ? 300 * 1000 : timeout,
//         paramsSerializer(params) {
//         },
//     }
//     );
// };

export const request = (options) => {
    let {method, url, data,params} = options;
    data = data || {};
    params = params || {};
    console.log('url:', baseURL + url);
    switch (method) {
        case 'GET':
            return axios.get(baseURL + url , { params:  params }).then(res => {
                    return res.data;
                }
            ).catch(err => {
                message.error('请求失败');
            });
        case 'POST':
            return axios.post(baseURL + url, data ,  { params:  params }).then(res => {
                    return res.data;
                }
            ).catch(err => {
                message.error('请求失败');
            });
    }
}




