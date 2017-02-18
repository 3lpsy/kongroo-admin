const types = {
    article: 'dt/getters/article/repo',
    articles: 'dt/getters/article/articles',
    paginations: 'dt/getters/article/paginations',
    pagination: 'dt/getters/article/pagination'
}

export {types};

export default {
    [types.article]: (state, getters) => {
        return state.article;
    },
    [types.articles]: (state, getters) => {
        let article = getters[types.article];

        if (! article) {
            return [];
        }

        return article.articles;
    },
    [types.meta]: (state, getters) => {
        let article = getters[types.article];

        if (! article) {
            return [];
        }
        return article.meta;
    },
    [types.paginations]: (state, getters) => {
        let meta = getters[types.meta];

        if (! meta) {
            return [];
        }
        return meta.paginations;
    },
    [types.pagination]: (state, getters) => {
        let paginations = getters[types.paginations];

        if (! paginations || paginations.length < 1) {
            return {};
        }

        return paginations[paginations.length - 1];
    },
}
