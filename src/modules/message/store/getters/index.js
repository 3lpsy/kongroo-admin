const types = {
    repo: 'message/getters/repo',
    messages: 'message/getters/messages',

}

export {types};

export default {
    [types.repo]: (state, getters) => {
        return state.repo;
    },
    [types.messages]: (state, getters) => {
        
        let repo = getters[types.repo];

        if (! repo) {
            return [];
        }

        return repo.messages;
    }
}
