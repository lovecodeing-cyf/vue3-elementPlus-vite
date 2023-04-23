import { createStore } from 'vuex';
import { InjectionKey } from 'vue';
import todos, { TodoState } from './modules/todos';
// 1。创建一个injectionKey
export const key: InjectionKey<Store<State>> = Symbol();
export type State = {
    counter: number,
    todo?:TodoState
}

export default createStore({
    state: {
        counter: 1
    },
    mutations: {
        add (state) {
            state.counter ++
        }
    },
    modules: {
        todos
    }
})
