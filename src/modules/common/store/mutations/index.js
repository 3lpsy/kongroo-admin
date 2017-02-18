const types = {
    TOGGLE_SIDEBAR: 'common/mutations/TOGGLE_SIDEBAR',
    TOGGLE_NAV_USER_MENU: 'common/mutations/TOGGLE_NAV_USER_MENU'

}

export default {
    [types.TOGGLE_SIDEBAR]: (state, payload = {}) => {
        state.sidebar.layout.isCollapse = ! state.sidebar.layout.isCollapse;
    },
    [types.TOGGLE_NAV_USER_MENU]: (state, payload = {}) => {
        state.navbar.layout.isUserMenuOpen = ! state.navbar.layout.isUserMenuOpen;
    }
}
