// 1.引入pinia以及pinia持久化工具
// import { createPinia } from 'pinia'
// import piniaPluginPersist from 'pinia-plugin-persist'

import { createStore } from 'vuex';
import { InjectionKey } from 'vue';
import todos, { TodoState } from './modules/todos';

// // 2.使用pinia以及对pinia进行持久化
// const store = createPinia();
// store.use(piniaPluginPersist);
// // 3.导出store
// export default store;

// 1.创建一个injectionKey
export const key: InjectionKey<Store<State>> = Symbol();
export type State = {
    counter: number,
    todo?: TodoState
}

export default createStore({
    state: {
        counter: 1
    },
    mutations: {
        add(state) {
            state.counter++
        }
    },
    modules: {
        todos
    }
})
