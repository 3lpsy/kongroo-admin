import IndexPage from 'pages/dashboard/index/Index.vue';

export const index = {
    path: "/dashboard",
    name: "dashboard.index",
    component: IndexPage,
    meta: {
        label: "Overview"
    },
    beforeEnter: (route, redirect, next) => {
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        next();
    }
}
