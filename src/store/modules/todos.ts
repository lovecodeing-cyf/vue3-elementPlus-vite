import { Module } from "vuex"
import { State } from "..";
import service from "../../api/request";
import { Todo } from '../../todos';

const initialState = {
    todos: [] as Todo[]
}

export type TodoState = typeof initialState;

export default {
    namespaced: true,
    state: initialState,
    mutations: {
        initTodo(state, payload: Todo[]) {
            state.todos = payload
        },
        addTodo(state, payload: Todo) {
            state.todos.push(payload);
        }
    },
    actions: {
        initTodo({ commit }) {
            service.get<Todo>('http://jsonplaceholder.typicode.com/todos/1')
                .then(resp => {
                    commit('addTodo', [resp.data]);
                })
            // setTimeout(() => {
            //     commit('initTodo',[
            //         {
            //             id: 1,
            //             name: 'vue3+ts',
            //             completed: false
            //         }
            //     ])
            // }, 500);
        },
        addTodo({ commit, state }, payload: String) {
            commit("addTodo", {
                id: state.todos.length + 1,
                name: payload,
                completed: false
            })
        }
    }
} as Module<TodoState, State>
