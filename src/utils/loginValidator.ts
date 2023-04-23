import { ref } from 'vue'

interface User {
    email: String,
    password: String
}

export const loginUser = ref<User>({
    email: '',
    password: ''
});
interface Rules {
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
        min?: undefined;
        max?: undefined;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
    })[];
}
export const rules = ref<Rules>({
    email: [{ type: 'email', message: '请输入正确的邮箱', required: true, trigger: 'blur'}],
    password: [{ required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, max: 30, message: '密码输入长度必须在6-30位之间', trigger: 'blur'}]
});