import { ref } from 'vue'

interface RegisterUser {
    name: string;
    email: string;
    password: string;
    password2: string;
    role: string;
}

export const registerUser = ref<RegisterUser>({
    name: '',
    email: '',
    password: '',
    password2: '',
    role: ''
  });
  interface RegisterRules {
    name: ({
        message: string;
        required: boolean;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
    password: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    password2: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        validator: (rule: RegisterRules, value: any, callback: any) => void;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
  };

  const validatePass2 = (rule:RegisterRules, value:any, callback:any) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== registerUser.value.password) {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  }
  export const registerRules = ref<RegisterRules>({
    name: [{ message: '请输入用户名', required: true, trigger: 'blur'},
    {min: 2, max: 30, message: '用户名必须在2-30位之间', trigger: 'blur'}],
    email: [{ type: 'email', message: '请输入正确的邮箱', required: true, trigger: 'blur'}],
    password: [{ required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, max: 30, message: '密码输入长度必须在6-30位之间', trigger: 'blur'}],
    password2: [{ required: true, message: '请输入密码', trigger: 'blur'},
    { validator: validatePass2, trigger: 'blur' },
    {min: 6, max: 30, message: '密码输入长度必须在6-30位之间', trigger: 'blur'}]
  });