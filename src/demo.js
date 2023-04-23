// vue3响应式本质理解
// let obj = {name: 'zs', age: 18};

// let state = new Proxy(obj, {
//     get (obj, key) { // 对昂 属性
//         console.log(obj, key); // {name: 'zs', age: 18} name
//         return obj[key];
//     },
//     set (obj, key, value) { // 对象 属性 新值
//         console.log(obj, key, value); // {name: 'zs', age: 18} name lisi
//         obj[key] = value; // 将新值赋值给属性
//         console.log('更新UI');
//         return true; // 告诉set方法此次更新成功，可以接着走下面的
//     }
// })
// state.name = 'lisi';

// let arr = [1, 3, 5];
// let state = new Proxy(arr, {
//     get (obj, key) { // 对象 属性
//         console.log(obj, key); // [1, 3, 5] 1
//         return obj[key];
//     },
//     set (obj, key, value) { // 对象 属性 新值
//         // [1, 3, 5] 3 7
//         // [1, 3, 5, 7] length 4
//         console.log(obj, key, value); //[1, 3, 5] 1 4  [1, 3, 5, 7] length 4
//         obj[key] = value; // 将新值赋值给属性
//         console.log('更新UI');
//         return true; // 告诉set方法此次更新成功，可以接着走下面的
//     }
// })
// // state[1] = '4';
// state.push(7);
