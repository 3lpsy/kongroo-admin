const types = {
    INSERT_ARTICLE: 'article/mutations/INSERT_ARTICLE',
    INSERT_ARTICLES: 'article/mutations/INSERT_ARTICLES',
    APPEND_PAGINATION: 'article/mutations/APPEND_PAGINATION',
    SET_CREATE_TAG_IDS: 'article/mutations/create/SET_TAG_IDS',
    SET_CREATE_SERIES_IDS: 'article/mutations/create/SET_SERIES_IDS',
    SET_CREATE_CATEGORY_IDS: 'article/mutations/create/SET_CATEGORY_IDS',

}

export {types};

import VuexError from "errors/VuexError";

export default {
    [types.INSERT_ARTICLE]: (state, payload = {}) => {
        let insert = payload.article;

        if (! insert) {
            throw new VuexError("No Article to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.articles) {
            throw new VuexError("No Repo Articles to Insert To.");
        }

        let exists = state.repo.articles.indexOf((article) => {
            return article.id === insert.id;
        }) !== -1;

        if (exists) {
            state.repo.articles = state.repo.articles.map((article) => {
                if (article.id === insert.id) {
                    return insert;
                }
                return article;
            });
        } else {
            state.repo.articles.push(insert);
        }

    },
    [types.INSERT_ARTICLES]: (state, payload = {}) => {
        let inserts = payload.articles;

        if (! inserts) {
            throw new VuexError("No Articles to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.articles) {
            throw new VuexError("No Repo Articles to Insert To.");
        }

        inserts.map((insert) => {
            let exists = state.repo.articles.indexOf((article) => {
                return article.id === insert.id;
            }) !== -1;

            if (exists) {
                state.repo.articles = state.repo.articles.map((article) => {
                    if (article.id === insert.id) {
                        return insert;
                    }
                    return article;
                });
            } else {
                state.repo.articles.push(insert);
            }
        })
    },
    [types.APPEND_PAGINATION]: (state, payload = {}) => {
        let append = payload.pagination;

        if (! append) {
            throw new VuexError("No Pagination to Append.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Append To.");
        }

        if (! state.repo.meta) {
            throw new VuexError("No Repo Meta to Append To.");
        }

        if (! state.repo.meta.paginations) {
            throw new VuexError("No Repo Meta Paginations to Append To.");
        }

        state.repo.meta.paginations.push(append);
    },
    [types.SET_CREATE_TAG_IDS]: (state, payload = {}) => {

        let tagIds = payload.tagIds;

        if (! tagIds) {
            throw new VuexError("No TagIds to Set.");
        }

        state.create.article.tagIds = tagIds;
    },
    [types.SET_CREATE_SERIES_IDS]: (state, payload = {}) => {

        let seriesIds = payload.seriesIds;

        if (! seriesIds) {
            throw new VuexError("No SeriesIds to Set.");
        }

        state.create.article.seriesIds = seriesIds;
    },
    [types.SET_CREATE_CATEGORY_IDS]: (state, payload = {}) => {

        let categoryIds = payload.categoryIds;

        if (! categoryIds) {
            throw new VuexError("No CategoryIds to Set.");
        }

        state.create.article.categoryIds = categoryIds;
    },
}
