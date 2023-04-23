<template>
  <el-form
        label-width="120px"
        class="container"
    >
        <el-form-item label="邮箱">
            <el-input
                type="email"
                v-model="email"
                placeholder="请输入邮箱"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="submit-btn" @click="forgotPassword">找回密码</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: 'forgotPassword',
    setup() {
        // @ts-ignore
        const { ctx } = getCurrentInstance();
        const router = useRouter();
        const email = ref<String>('');
        const forgotPassword = async () => {
            if (email.value) {
                const res = await ctx.$axios.post(
                    '/api/v1/auth/forgotpassword',
                    {email: email.value}
                )
                if (res.data.success) {
                    router.push('/resetPassword');
                }
                // router.push('/resetPassword');
            }
        }
        return { forgotPassword, email };
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