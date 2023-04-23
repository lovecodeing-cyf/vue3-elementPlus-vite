import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export type AppRouteRecordRaw = RouteRecordRaw & {
    hiddden?: boolean
}
const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/forgotPassword',
        name: 'ForgotPassword',
        hidden: true,
        component: () => import('../views/forgotPassword.vue')
    },
    {
        path: '/resetPassword/:id',
        name: 'ResetPassword',
        hidden: true,
        component: () => import('../views/resetPassword.vue')
    },
    {
        path: '/Home',
        name: 'Home',
        redirect: '/HomePage',
        component: () => import('../views/home/index.vue'),
        children: [
            {
                path: '/:catchAll(.*)',
                name: '/404',
                hidden: true,
                component: () => import('../views/404.vue')
            },
            {
                path: '/HomePage',
                hidden: true,
                component: () => import('../views/home/home-page.vue')
            },
            {
                path: '/user-manage',
                hidden: true,
                component: () => import('../views/user-manage/index.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     to.fullPath
// })

export default router