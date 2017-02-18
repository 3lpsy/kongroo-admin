const types = {
    INSERT_SERIES: 'series/mutations/INSERT_SERIES',
}

export {types};

import VuexError from "errors/VuexError";

export default {
    [types.INSERT_SERIES]: (state, payload = {}) => {
        let inserts = payload.series;

        if (! inserts) {
            throw new VuexError("No Series to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.series) {
            throw new VuexError("No Repo Series to Insert To.");
        }

        if (! Array.isArray(inserts)) {
            inserts = [inserts];
        }

        inserts.map((insert) => {
            let exists = state.repo.series.indexOf((series) => {
                return series.id === insert.id;
            }) !== -1;

            if (exists) {
                state.repo.series = state.repo.series.map((series) => {
                    if (series.id === insert.id) {
                        return insert;
                    }
                    return series;
                });
            } else {
                state.repo.series.push(insert);
            }
        })

    }
}
