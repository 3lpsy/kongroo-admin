const types = {
    repo: 'category/getters/repo',
    categories: 'category/getters/categories'
}

export {types};

export default {
    [types.repo]: (state, getters) => {
        return state.repo;
    },
    [types.categories]: (state, getters) => {
        let repo = getters[types.repo];

        if (! repo) {
            return [];
        }

        return repo.categories;
    }
}
