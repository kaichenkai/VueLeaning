import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Index.vue'),
        redirect: {name: "access-stats"},
        children: [
            //接入统计
            {
                path: '/access/stats',
                name: 'access-stats',
                component: () => import("../components/access/accessNav.vue"),
                redirect: {name: "access-graph"},
                children: [
                    {
                        path: '/access/stats/graph',
                        name: 'access-graph',
                        // component: () => import("../components/access/statistics/statsGraph.vue")
                        component: () => import("../components/access/statisticsCommon/statsGraph.vue")
                    },
                    {
                        path: '/access/stats/table',
                        name: 'access-table',
                        // component: () => import("../components/access/statistics/statsTable.vue")
                        component: () => import("../components/access/statisticsCommon/statsTable.vue")
                    },

                    //接入日志
                    {
                        path: '/access/log',
                        name: 'access-log',
                        // component: () => import("../components/access/statistics/accessLog.vue")
                        component: () => import("../components/access/statisticsCommon/accessLog.vue")
                    }
                ]
            },

            //接入过滤规则
            {
                path: '/access/filter/rule',
                name: 'access-filter-rule',
                component: () => import("../components/access/filterRules/accessFilterRuleNav.vue"),
                redirect: {name: "rule-list"},
                children: [
                    {
                        path: '/filter/rule/list',
                        name: 'rule-list',
                        component: () => import("../components/access/filterRules/accessFilterRuleList.vue")
                    },
                    {
                        path: '/filter/rule/add',
                        name: 'rule-add',
                        component: () => import("../components/access/filterRules/accessFilterRuleList.vue")
                    }
                ]
            },

            //发布统计
            {
                path: '/publish/stats',
                name: 'publish-stats',
                component: () => import("../components/publish/publishNav.vue"),
                redirect: {name: "publish-graph"},
                children: [
                    {
                        path: '/publish/stats/graph',
                        name: 'publish-graph',
                        component: () => import("../components/publish/publishGraph.vue")
                    },
                    {
                        path: '/publish/stats/table',
                        name: 'publish-table',
                        component: () => import("../components/publish/publishTable.vue")
                    },
                    {
                        path: '/publish/log',
                        name: 'publish-log',
                        component: () => import("../components/publish/publishLog.vue")
                    }
                ]
            },

            //发布规则
        ]
    }
];

const router = new VueRouter({
    // 全局设置激活 router-link 的类名
    linkExactActiveClass: "active",
    routes
});

export default router
