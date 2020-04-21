import Vue from 'vue'
import VueRouter from 'vue-router'
import foo from "../components/foo/foo";
import bar from "../components/bar/bar";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: {name: "list"}
    },
    {
        path: '/heroes',
        name: 'Heroes',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Heroes.vue'),
        children : [
            {
                path: '/heroes/list',
                name: 'list',
                component: () => import("../components/list/list.vue")
            },
            {
                path: '/heroes/add',
                name: 'add',
                component: () => import("../components/list/add.vue")
            },
            {
                path: '/heroes/foo',
                name: 'foo',
                component: () => import("../components/foo/foo.vue")
            },
            {
                path: '/heroes/bar',
                name: 'bar',
                component: () => import("../components/bar/bar.vue")
            }
        ]
    }
];

const router = new VueRouter({
    // 全局设置激活 router-link 的类名
    linkExactActiveClass: "active",
    routes
});

export default router
