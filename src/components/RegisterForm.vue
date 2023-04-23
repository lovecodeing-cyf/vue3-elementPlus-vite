<template>
  <el-form
        ref="registerFormRef"
        :model="registerUser"
        :rules="rules"
        label-width="120px"
        class="registerForm sign-up-form"
    >
        <el-form-item label="用户名" prop="name">
            <el-input
                v-model="registerUser.name"
                placeholder="请输入用户名"
            ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input
                v-model="registerUser.email"
                placeholder="请输入邮箱"
            ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input
                v-model="registerUser.password"
                placeholder="请输入密码"
                type="password"
            ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
            <el-input
                v-model="registerUser.password2"
                placeholder="请再次输入密码"
                type="password"
            ></el-input>
        </el-form-item>
        <el-form-item label="选择身份">
            <el-select v-model="registerUser.role" placeholder="请选择身份">
            <el-option label="管理员" value="admin"></el-option>
            <el-option label="用户" value="user"></el-option>
            <el-option label="游客" value="visitor"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="submit-btn" @click="handleRegister">注册</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: 'RegisterForm',
    props: {
        registerUser:{
            type: Object,
            required: true
        },
        rules: {
            type: Object,
            required: true
        }
    },
    setup (props: any) {
        // @ts-ignore
        const { ctx } = getCurrentInstance();
        const router = useRouter();
        const handleRegister = () => {
          ctx.$refs.registerFormRef.validate((valid: boolean) => {
                if (valid) {
                    // router.push("/")
                    ctx.$axios.post(
                        "/api/v1/auth/refister",
                        props.registerUser
                    ).then((res:any) => {
                        // 注册成功
                        ctx.$message({
                            message: '注册成功',
                            type: 'success'
                        })
                        // 路由跳转
                        router.push("/")
                    })
                 } else {
                console.log('error submit!!')
                return false
                }
            })
        }
        return { handleRegister };
    }
}
</script>

<style>

</style>