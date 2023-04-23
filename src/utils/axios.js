// axios 封装
import { getToken } from '@/utils/auth'
import axios from 'axios'
import qs from 'qs'; // 数据处理插件 比如将｛id: 'zhangsan', name: '张三'｝转换成id=zhangsan&name=zhangsan

// 全局配置
const myAxios = axios.create({
    baseURL: process.env.BASE_API, // 网络请求地址
    timeout: 5000 // 请求超时时间
  });
  // 携带token
  myAxios.defaults.headers.common['Authorization'] = getToken();
  

  // 响应接收前的拦截
  myAxios.interceptors.response.use(function (response) {
    // 将后台的参数结果设置到response（数据封装）
    let {data} = response;
    response.data = data.data;
    response.status = data.status;
    response.statusText = data.message;
    // 统一处理异常
    if (data.status !== 200) {
        return Promise.reject(data.message)
    }
    return response;
  }, function(error) {
    return Promise.reject(error)
  })

// 方法封装

/**
 * get方式请求
 */
export function get(url,params) {
    return myAxios({
        method: 'get',
        url,
        params, // get请求时携带参数 id=zhangsan&name=zhangsan
        timeout: 5000 * 2,
        headers: {
            'X-requested-With': 'XMLHttpRequest'
        }
    })
}
/**
 * 提交post请求，发送的数据为查询字符串，key=key&val=val
 */
export function post(url, data) {
    return myAxios({
        method: 'post',
        url,
        data: qs.stringify(data),
        timeout: 5000 * 2,
        headers: {
            'X-requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

/**
 * 提交post请求，查询字符串，对象中嵌套数组的格式
 * ｛
 *      id: 1,
 *      arr: []
 *  ｝
 */
export function post_obj_arr (url, data) {
    return myAxios({
        method: 'post',
        url,
        data: qs.stringify(data, {allowDots: true}),
        timeout: 5000 * 2,
        headers: {
            'X-requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

/**
 * 提交post请求，发送的数据为查询字符串，当参数wie数组的时候适用该方法
 * ｛ids: [1, 2]｝
 * ids=1&ids=2
 */
export function post_array (url, data) {
    return myAxios({
        method: 'post',
        url,
        data: qs.stringify(data, {arrayFormat: 'repeat'}),
        timeout: 5000 * 2,
        headers: {
            'X-requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

/**
 * 提交post请求，发送的数据为json字符串
 */
export function post_json (url, data) {
    return myAxios({
        method: 'post',
        url,
        data,
        timeout: 5000 * 2
    })
}
