import IndexPage from 'pages/studio/index/Index.vue';

export const index = {
    path: "/studio",
    name: "studio.index",
    component: IndexPage,
    beforeEnter: (route, redirect, next) => {
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        next();
    }
}

import StudioArticleEditPage from 'pages/studio/article/edit/Edit.vue';

export const article = {
    edit: {
        path: "/studio/article/:articleId/edit",
        name: "studio.article.edit",
        component: StudioArticleEditPage,
        beforeEnter: (route, redirect, next) => {
            next();
        },
        beforeRouteLeave: (route, redirect, next) => {
            next();
        }
    }
}
