/*
 * @Author: bz2021
 * @Date: 2023-12-15 18:06:36
 * @Description:  
 */
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/account/LoginView.vue'
import RegisterView from '../views/account/RegisterView.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: LoginView,
        meta: {
            reqAuth: true
        }
    },
    {
        path: "/game",
        name: "game",
        meta: {
            reqAuth: true
        }
    },
    {
        path: "/chat",
        name: "chat",
        meta: {
            reqAuth: true
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
        meta: {
            reqAuth: false
        }
    },
    {
        path: "/register",
        name: "register",
        component: RegisterView,
        meta: {
            reqAuth: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router