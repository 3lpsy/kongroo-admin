<template>
    <div :class="classes">
        <app-navbar></app-navbar>
        <div class="app-body">
            <app-sidebar></app-sidebar>
            <main class="main">
                <app-breadcrumbs :list="crumbs">
                </app-breadcrumbs>
                <app-content>
                    <router-view>
                    </router-view>
                </app-content>
            </main>
        </div>
        <app-footer ></app-footer>
    </div>
</template>

<script>

import AppNavbar from 'common/components/navbar/Navbar'
import AppSidebar from 'common/components/sidebar/Sidebar'
import AppContent from 'common/components/content/Content'
import AppBreadcrumbs from 'common/components/breadcrumbs/Breadcrumbs'
import AppFooter from 'common/components/footer/Footer'

export default {
    name: 'container',
    props: {
        footer: {
            default: false
        },
        sidebar: {
            default: false
        }
    },
    methods: {
    },
    computed: {
        name () {
            return this.$route.name;
        },
        classes() {
            return {
                "app": true,
                "header-fixed": true,
                "sidebar-fixed": true,
                "sidebar-hidden": ! this.isSidebarExpanded,
                "sidebar-mobile-show": this.isSidebarExpanded
            }
        },
        isSidebarExpanded() {
            return ! this.$store.getters["common/getters/isSidebarCollapse"];
        },
        crumbs () {
            return this.$route.matched
        }
    },
    components: {
        AppNavbar,
        AppSidebar,
        AppBreadcrumbs,
        AppContent,
        AppFooter,
    }
};
</script>

<style type="text/css">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
