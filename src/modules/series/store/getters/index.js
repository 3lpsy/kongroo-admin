const types = {
    repo: 'series/getters/repo',
    series: 'series/getters/series'
}

export {types};

export default {
    [types.repo]: (state, getters) => {
        return state.repo;
    },
    [types.series]: (state, getters) => {
        let repo = getters[types.repo];

        if (! repo) {
            return [];
        }

        return repo.series;
    }
}
