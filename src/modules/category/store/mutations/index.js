const types = {
    INSERT_CATEGORY: 'category/mutations/INSERT_CATEGORY',
    INSERT_CATEGORIES: 'category/mutations/INSERT_CATEGORIES',

}

export {types};

import VuexError from "errors/VuexError";

export default {
    [types.INSERT_CATEGORY]: (state, payload = {}) => {
        let insert = payload.category;

        if (! insert) {
            throw new VuexError("No Category to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.categories) {
            throw new VuexError("No Repo Categories to Insert To.");
        }

        let exists = state.repo.categories.indexOf((category) => {
            return category.id === insert.id;
        }) !== -1;

        if (exists) {
            state.repo.categories = state.repo.categories.map((category) => {
                if (category.id === insert.id) {
                    return insert;
                }
                return category;
            });
        } else {
            state.repo.categories.push(insert);
        }

    },
    [types.INSERT_CATEGORIES]: (state, payload = {}) => {
        let inserts = payload.categories;

        if (! inserts) {
            throw new VuexError("No Categories to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.categories) {
            throw new VuexError("No Repo Categories to Insert To.");
        }

        inserts.map((insert) => {
            let exists = state.repo.categories.indexOf((category) => {
                return category.id === insert.id;
            }) !== -1;

            if (exists) {
                state.repo.categories = state.repo.categories.map((category) => {
                    if (category.id === insert.id) {
                        return insert;
                    }
                    return category;
                });
            } else {
                state.repo.categories.push(insert);
            }
        })

    }
}
