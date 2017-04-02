import StudioArticleEditPage from 'pages/studio/article/edit/Edit.vue';
import StudioArticleCreatePage from 'pages/studio/article/create/Create.vue';

export const all = {
    path: "/studio/all",
    name: "studio.index",
    component: IndexPage,
    meta: {
        label: 'Articles'
    },
    beforeEnter: (route, redirect, next) => {
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        next();
    }
}

export const create = {
    path: "/studio/article/create",
    name: "studio.article.create",
    component: StudioArticleCreatePage,
    meta: {
        label: 'Create'
    },
    beforeEnter: (route, redirect, next) => {
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        next();
    }
}

export const edit = {
    path: ":articleId/edit",
    name: "studio.article.edit",
    meta: {
        label: 'Studio'
    },
    component: StudioArticleEditPage,
    beforeEnter: (route, redirect, next) => {
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        next();
    }
}

import IndexPage from 'pages/studio/index/Index.vue';

export const index = {
    path: '/studio',
    redirect: '/studio/all',
    name: 'studio.redirect',
    meta: {
        label: 'Studio'
    },
    children: [
        all, create, edit
    ],
    beforeEnter: (route, redirect, next) => {
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        next();
    }
}
