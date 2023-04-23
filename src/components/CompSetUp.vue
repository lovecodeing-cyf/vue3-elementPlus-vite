<template>
    <!-- 标题 -->
    <h1 :style="{ backgroundColor: titleInfo.color }">{{titleInfo.value}}</h1>
    <div @click="$store.commit('add')">{{counter}}</div>
    <div>{{doubleCounter}}</div>
    <!-- 新增代办 -->
    <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))">
    <div v-for="item in todos" :key="item.id">{{item.title}}</div>
</template>

<script lang="ts" setup>
    import { computed, defineProps } from "vue"
    import type { PropType } from 'vue'
    import { useStore } from 'vuex';
    import { key } from "../store";
    
    // 属性声明
    defineProps({
        titleInfo: {
            type: Object as PropType<TitleInfo>,
            required: true
        }
    })
    const store = useStore(key);
    const counter = computed(() => store.state.counter);
    const doubleCounter = computed(() => counter.value * 2);
    const todos = computed(() => store.state.todos?.todos);
        type TitleInfo = {
            value: string;
            color: string;
        }
    
</script>

<style>

</style>