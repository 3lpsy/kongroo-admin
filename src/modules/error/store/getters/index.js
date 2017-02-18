const types = {
    repo: 'error/getters/repo',
    errors: 'error/getters/errors',

}

export {types};

export default {
    [types.repo]: (state, getters) => {
        return state.repo;
    },
    [types.errors]: (state, getters) => {
        let repo = getters[types.repo];

        if (! repo) {
            return [];
        }

        return repo.errors;
    }
}
