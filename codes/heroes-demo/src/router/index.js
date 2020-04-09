import Vue from 'vue'
import VueRouter from 'vue-router'
import foo from "../components/foo/foo";
import bar from "../components/bar/bar";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: {name: "Heroes"}
    },
    {
        path: '/heroes',
        name: 'Heroes',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Heroes.vue')
    },
    {
        path: '/foo',
        component: foo
        // component: {
        //   template: `<div>foo 组件啊</div>`
        // }
    },
    {
        path: '/bar',
        component: bar
    },
]

const router = new VueRouter({
    routes
})

export default router
