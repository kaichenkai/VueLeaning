import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: {name: "access"},
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('../views/Index.vue'),
        redirect: {name: "access-stats"},
        children: [
            {
                path: '/access/stats',
                name: 'access-stats',
                component: () => import("../components/access/accessStats.vue")
            },
                        {
                path: '/publish/stats',
                name: 'publish-stats',
                component: () => import("../components/publish/publishStats.vue")
            },
                        {
                path: '/log',
                name: 'log',
                component: () => import("../components/log/log.vue")
            }

            // {
            //     path: '/heroes/add',
            //     name: 'add',
            //     component: () => import("../components/list/add.vue")
            // },
            // {
            //     path: '/heroes/foo',
            //     name: 'foo',
            //     component: () => import("../components/foo/foo.vue")
            // },
            // {
            //     path: '/heroes/bar',
            //     name: 'bar',
            //     component: () => import("../components/bar/bar.vue")
            // }
        ]
    }

];

const router = new VueRouter({
    // 全局设置激活 router-link 的类名
    linkExactActiveClass: "active",
    routes
});

export default router
