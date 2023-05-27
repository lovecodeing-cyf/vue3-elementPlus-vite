import request from './request.js'

export const login (data) => {
    return request({
        url: '/login',
        menthod: 'POST',
        data
    })
}
