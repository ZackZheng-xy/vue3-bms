import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '欢迎页'
        },
        component: () => import('../views/Welcome.vue')
      }
    ]
  },
  {
    name: 'system',
    path: '/system',
    meta: {
      title: '系统管理'
    },
    component: Home,
    children: [
      {
        name: '/system/user',
        path: 'user',
        meta: {
          title: '用户管理'
        },
        component: () => import('../views/User.vue')
      },
      {
        name: '/system/menu',
        path: 'menu',
        meta: {
          title: '菜单管理'
        },
        component: () => import('../views/Menu.vue')
      },
      {
        name: '/system/role',
        path: 'role',
        meta: {
          title: '角色管理'
        },
        component: () => import('../views/Role.vue')
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登陆'
    },
    component: () => import('../views/Login.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
