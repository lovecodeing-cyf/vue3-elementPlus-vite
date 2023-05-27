import axios from "axios";
// 1.创建axios对象
const service = axios.create({
    baseURL: import.meta.env.VITE_BAE_URL,
    timeout: 5000
});
// 2.请求拦截器
service.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error);
})
// 3.响应拦截器
service.interceptors.request.use(Response => {
    // 判断状态码
    return Response.data;
}, error => {
    return Promise.reject(error);
})

export default service;
