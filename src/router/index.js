import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

import * as dashboard from "./dashboard";
import * as studio from "./studio";
import * as analytics from "./analytics";


let routes = [
    dashboard.index,
    studio.index,
    studio.article.edit,
    analytics.index,
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
