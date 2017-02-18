const types = {
    isSidebarCollapse: 'common/getters/isSidebarCollapse',
    isUserNavMenuOpen: 'common/getters/isUserNavMenuOpen'

}

export {types};

export default {

    [types.isSidebarCollapse]: (state) => {
        return state.sidebar.layout.isCollapse;
    },
    [types.isUserNavMenuOpen]: (state) => {
        return state.navbar.layout.isUserMenuOpen;
    }

}
