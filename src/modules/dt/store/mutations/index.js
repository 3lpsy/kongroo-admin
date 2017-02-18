const types = {
    SET_ARTICLES: 'dt/mutations/article/SET_ARTICLES',
    APPEND_PAGINATION: 'dt/mutations/article/APPEND_PAGINATION',
}

export {types};

import VuexError from "errors/VuexError";

export default {
    [types.SET_ARTICLES]: (state, payload = {}) => {
        let sets = payload.articles;

        if (! sets) {
            throw new VuexError("No Articles to SET.");
        }

        if (! state.article) {
            throw new VuexError("No Article Repo to SET To.");
        }

        if (! state.article.articles) {
            throw new VuexError("No Articles to SET To.");
        }
        state.article.articles = sets;
    },
    [types.APPEND_PAGINATION]: (state, payload = {}) => {
        let append = payload.pagination;

        if (! append) {
            throw new VuexError("No Pagination to Append.");
        }

        if (! state.article || ! state.article.articles) {
            throw new VuexError("No Repo to Append To.");
        }

        if (! state.article.meta) {
            throw new VuexError("No Repo Meta to Append To.");
        }

        if (! state.article.meta.paginations) {
            throw new VuexError("No Repo Meta Paginations to Append To.");
        }

        state.article.meta.paginations.push(append);
    }
}
