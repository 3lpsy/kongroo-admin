const types = {
    SET_MESSAGES: 'message/mutations/SET_MESSAGES',
    REMOVE_MESSAGES: 'message/mutations/REMOVE_MESSAGES'
}

export {types};

import VuexError from "errors/VuexError";

export default {
    [types.SET_MESSAGES]: (state, payload = {}) => {
        let messages = payload.messages;

        if (! messages) {
            throw new VuexError("No Messages to Set.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Set To.");
        }

        state.repo.messages = messages;
    },
    [types.REMOVE_MESSAGES]: (state, payload = {}) => {
        let messages = payload.messages;

        if (! messages) {
            throw new VuexError("No Messages to Remove.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Remove From.");
        }

        state.repo.messages = state.repo.messages.filter((err) => {
            return ! messages.includes(err);
        });
    }
}
