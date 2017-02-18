const types = {
    INSERT_TAG: 'tag/mutations/INSERT_TAG',
    INSERT_TAGS: 'tag/mutations/INSERT_TAGS',

}

export {types};

import VuexError from "errors/VuexError";

export default {
    [types.INSERT_TAG]: (state, payload = {}) => {
        let insert = payload.tag;

        if (! insert) {
            throw new VuexError("No Tag to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.tags) {
            throw new VuexError("No Repo Tags to Insert To.");
        }

        let exists = state.repo.tags.indexOf((tag) => {
            return tag.id === insert.id;
        }) !== -1;

        if (exists) {
            state.repo.tags = state.repo.tags.map((tag) => {
                if (tag.id === insert.id) {
                    return insert;
                }
                return tag;
            });
        } else {
            state.repo.tags.push(insert);
        }

    },
    [types.INSERT_TAGS]: (state, payload = {}) => {
        let inserts = payload.tags;

        if (! inserts) {
            throw new VuexError("No Tags to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.tags) {
            throw new VuexError("No Repo Tags to Insert To.");
        }

        inserts.map((insert) => {
            let exists = state.repo.tags.indexOf((tag) => {
                return tag.id === insert.id;
            }) !== -1;

            if (exists) {
                state.repo.tags = state.repo.tags.map((tag) => {
                    if (tag.id === insert.id) {
                        return insert;
                    }
                    return tag;
                });
            } else {
                state.repo.tags.push(insert);
            }
        })

    }
}
