const types = {
    SET_ERRORS: 'error/mutations/SET_ERRORS',
    REMOVE_ERRORS: 'error/mutations/REMOVE_ERRORS'
}

export {types};

import VuexError from "errors/VuexError";

export default {
    [types.SET_ERRORS]: (state, payload = {}) => {
        let errors = payload.errors;

        if (! errors) {
            throw new VuexError("No Errors to Set.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Set To.");
        }

        state.repo.errors = errors;
    },
    [types.REMOVE_ERRORS]: (state, payload = {}) => {
        let errors = payload.errors;

        if (! errors) {
            throw new VuexError("No Errors to Remove.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Remove From.");
        }

        state.repo.errors = state.repo.errors.filter((err) => {
            return ! errors.includes(err);
        });
    }
}
