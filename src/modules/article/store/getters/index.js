const types = {
    repo: 'article/getters/repo',
    articles: 'article/getters/articles',
    create: 'article/getters/create',
    createArticle: 'article/getters/create/article',
}

export {types};

export default {
    [types.repo]: (state, getters) => {
        return state.repo;
    },
    [types.articles]: (state, getters) => {
        let repo = getters[types.repo];

        if (! repo) {
            return [];
        }

        return repo.articles;
    },
    [types.create]: (state, getters) => {
        return state.create;
    },
    [types.createArticle]: (state, getters) => {
        let create = getters[types.create];

        if (! create) {
            return {};
        }

        return create.article;
    }
}
