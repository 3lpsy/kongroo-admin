<template>
    <section class="hero is-primary is-fullwidth">
        <div class="hero-head">
            <div class="container is-fluid">
                <nav class="nav">
                    <div class="nav-left">
                        <span class="hamburger is-toggle" @click="toggleSidebar">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                        <a class="title nav-item is-brand is-active" href="/">
                            Sun
                        </a>
                    </div>
                    <div class="nav-right is-hidden-mobile">
                        <div class="nav-item dropdown" :class="isActiveClass">
                            <div class="dropdown-toggle">
                                <span class="is-toggle" @click="toggleUserMenu">
                                    <span class="icon">
                                        <i class="fa fa-user-circle-o"></i>
                                     </span>
                                </span>
                            </div>

                            <div class="dropdown-content">
                                <nav class="panel">
                                    <p class="panel-heading">
                                        User
                                    </p>
                                    <a class="panel-block">
                                        <span class="panel-icon">
                                            <i class="fa fa-user-circle"></i>
                                        </span>
                                        Profile
                                    </a>
                                    <a class="panel-block">
                                        <span class="panel-icon">
                                            <i class="fa fa-star"></i>
                                        </span>
                                        View Site
                                    </a>
                                    <a class="panel-block">
                                        <span class="panel-icon">
                                            <i class="fa fa-arrows-alt"></i>
                                        </span>
                                        Toggle FullScreen
                                    </a>
                                    <a class="panel-block">
                                        <span class="panel-icon">
                                            <i class="fa fa-sign-out"></i>
                                        </span>
                                        Sign Out
                                    </a>
                                </nav>
                        </div>
                        </div>
                    </div>
                    <div class="nav-item is-hidden-tablet">
                        <span class="is-toggle" @click="toggleUserMenu">
                            <span class="icon">
                                <i class="fa fa-user-circle-o"></i>
                            </span>
                        </span>
                    </div>
                    <div class="nav-right nav-menu is-hidden-tablet" :class="isActiveClass">
                        <a class="nav-item">
                          Profile
                        </a>
                        <a class="nav-item">
                          View Site
                        </a>
                        <a class="nav-item">
                          Sign Out
                        </a>
                    </div>
                    <!-- <div class="nav-right nav-menu is-hidden-mobile">
                        <div class="dropdown" :class="isOpenClass">
                            <div class="box dropdown-content">
                                <div class="">
                                  I iz a dropdown.
                                </div>
                            </div>
                        </div>
                      </div> -->
                </nav>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        methods: {
            toggleSidebar() {
                this.$store.commit('common/mutations/TOGGLE_SIDEBAR');
            },
            toggleUserMenu() {
                this.$store.commit('common/mutations/TOGGLE_NAV_USER_MENU');
            }
        },
        computed: {
            isActiveClass() {
                return {
                    'is-active': this.isUserMenuOpen
                }
            },
            isUserMenuOpen() {
                return this.$store.getters["common/getters/isUserNavMenuOpen"];
            }
        }
    };
</script>

<style type="text/css">

</style>
