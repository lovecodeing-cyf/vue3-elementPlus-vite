import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';

let loading: any;
// 开始加载动画
const startLoading = () => {

    interface Options {
        lock: boolean;
        text: string;
        background: string;
    }

    const options:Options = {
        lock: true,
        text: '加载中...',
        background: 'rgba(0,0,0,0.7)'
    }
    loading = ElLoading.service(options);
}
// 结束加载动画
const endLoading = () => {
    loading.close();
}
// 请求拦截
axios.interceptors.request.use(config => {
    startLoading();
    return config;
})

// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
    endLoading();
    return response;
}, error => {
    endLoading();
    // 错误提醒
    return Promise.reject(error);
})

export default axios;