import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

import * as dashboard from "./dashboard";
import * as studio from "./studio";
import * as analytics from "./analytics";
import Container from 'common/components/container/Container.vue';


let routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'dashboard.container',
        meta: {
            label: 'Dashboard'
        },
        component: Container,
        children: [
            dashboard.index,
            studio.index,

            analytics.index,
        ]
    },
    {
        path: "/",
        redirect: "/dashboard"
    }
];

export default new Router({
    linkActiveClass: 'active',
    routes,
    mode: "hash"
});
