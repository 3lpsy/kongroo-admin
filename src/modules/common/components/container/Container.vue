<template>
    <div :class="appClassObj">
        <app-navbar v-if="footer"></app-navbar>
        <div class="flex-container">
            <app-sidebar v-if="sidebar"></app-sidebar>
            <app-content>
                <slot></slot>
                <app-footer v-if="footer"></app-footer>
            <app-content>
        </div>
    </div>


</template>

<script>

import AppNavbar from 'common/components/navbar/Navbar'
import AppSidebar from 'common/components/sidebar/Sidebar'
import AppContent from 'common/components/content/Content'

import AppFooter from 'common/components/footer/Footer'

export default {
    props: {
        footer: {
            default: false
        },
        sidebar: {
            default: false
        }
    },
    computed: {
        appClassObj() {
            return 'App--base'
        }
    },
    components: {
        AppNavbar,
        AppSidebar,
        AppFooter,
        AppContent
    }
};
</script>

<style type="text/css">

</style>
