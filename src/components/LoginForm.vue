<template>
  <el-form ref="loginFormRef" :model="loginUser" :rules="rules" label-width="120px" class="loginForm sign-in-form">
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="loginUser.email" placeholder="请输入邮箱" autocomplete="false"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginUser.password" placeholder="请输入密码" type="password" autocomplete="false"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="submit-btn" @click="handleLogin">登录</el-button>
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a @click.prevent="handleForgot">立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "LoginForm",
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    // 触发方法
    const handleLogin = () => {
      ctx.$refs.loginFormRef.validate((valid: boolean) => {
        if (valid) {
          router.push("/Home");
          // ctx.$axios.post(
          //     "/api/v1/auth/login",
          //     props.loginUser
          // ).then((res:any) => {
          //     // 注册成功
          //     ctx.$message({
          //         message: '登录成功',
          //         type: 'success'
          //     })
          //     // 登录成功，存储token到localStorage
          //     const { token } = res.data;
          //     localStorage.setItem('token', token);
          //     // 路由跳转
          //     router.push("/")
          // });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    const handleForgot = () => {
      router.push("/forgotPassword");
    };
    return { handleLogin, handleForgot };
  },
};
</script>

<style>
/* 控制login显示 */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}

.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}

.tiparea p a {
  color: #409eff;
}
</style>
