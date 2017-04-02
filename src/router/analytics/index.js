import IndexPage from 'pages/analytics/index/Index.vue';

export const index = {
    path: "/analytics",
    name: "analytics.index",
    component: IndexPage,
    meta: {
        label: 'Analytics'
    },
    beforeEnter: (route, redirect, next) => {
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        next();
    }
}
