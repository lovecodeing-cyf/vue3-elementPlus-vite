<template>
  <el-form
        label-width="120px"
        class="container"
    >
        <el-form-item label="密码">
            <el-input
                v-model="password"
                placeholder="请输入密码"
                type="password"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="submit-btn" @click="handleReset">重置密码</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
    name: 'resetPassword',
    props: {
        loginUser:{
            type: Object,
            required: true
        },
        rules: {
            type: Object,
            required: true
        }
    },
    setup() {
        // @ts-ignore
        const { ctx } = getCurrentInstance();
        const router = useRouter();
        const route = useRoute();
        const password = ref<String>('');
        const handleReset = async () => {
            if (password.value) {
                const res = await ctx.$axios.put(
                    '/api/v1/auth/resetpassword' + route.params.id,
                    {password: password.value}
                )
                if (res.data.success) {
                    router.push('/');
                }
                // router.push('/');
            };
        }
        return { handleReset, password };
    }
}
</script>

<style>
.container {
  width: 50%;
  margin: 200px auto;
}

.submit-btn {
  width: 100%;
}
</style>