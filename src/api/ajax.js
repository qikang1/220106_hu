/* 
    封装ajax模块
*/
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        //执行异步ajax请求
        let promise
        if (type === 'GET') {
            let dataStr = ''  //定义拼接的字符串

            Object.keys(data).forEach(function (key) {
                dataStr += key + '=' + data[key] + '&'
            })

            if (dataStr != '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url += url + '?' + dataStr
            }
            //发送get请求
            promise = axios.get(url)
        }else{
            //发送post请求
            promise = axios.post(url, data)
        }
        promise.then(response =>{
            //成功了调用
            resolve(response.data)
        }).catch(error=>{
            //失败了调用
            reject(error)
        })
    });
}