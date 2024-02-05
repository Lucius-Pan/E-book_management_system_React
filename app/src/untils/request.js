import {baseURL} from "../config";
import axios from "axios";
import {message, Modal} from "antd";
import querystring from 'querystring';


export const request = (options) => {
    let {method, url, data, params} = options;
    data = data || {};
    params = params || {};
    console.log('url:', baseURL + url);
    const instance = axios.create({
        headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` },
        baseURL: baseURL,
        timeout: 300 * 1000,
        paramsSerializer(params) {
            return querystring.stringify(params);
        },
    });
    switch (method) {
        case 'GET':
            return instance.get(baseURL + url, {params: params}).then(res => {
                return res.data;
            }).catch(err => {
                Modal.error({
                    title: '请求失败',
                    content: '请联系管理员或检查网络后重试'
                });
            });
        case 'POST':
            return instance.post(baseURL + url, data, {params: params}).then(res => {
                return res.data;
            }).catch(err => {
                Modal.error({
                    title: '请求失败',
                    content: '请联系管理员或检查网络后重试'
                });
            });
        case 'PUT':
            return instance.put(baseURL + url, data, {params: params}).then(res => {
                return res.data;
            }).catch(err => {
                Modal.error({
                    title: '请求失败',
                    content: '请联系管理员或检查网络后重试'
                });
            });
        case 'DELETE':
            return instance.delete(baseURL + url, {params: params}).then(res => {
                return res.data;
            }).catch(err => {
                Modal.error({
                    title: '请求失败',
                    content: '请联系管理员或检查网络后重试'
                });
            });
    }
}




