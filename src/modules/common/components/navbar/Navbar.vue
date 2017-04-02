<template>
    <header class="app-header navbar">
        <button
            type="button"
            class="navbar-toggler mobile-sidebar-toggler hidden-lg-up" @click="toggleSidebar">
            ☰
        </button>
        <a href="#" class="navbar-brand">

        </a>
        <ul class="nav navbar-nav hidden-md-down">
            <li class="nav-item">
                <a href="#" class="nav-link navbar-toggler sidebar-toggler" @click="toggleSidebar">
                    ☰
                </a>
            </li>
            <li class="nav-item px-1">
                <router-link :to="{name: 'dashboard.index'}" class="nav-link">
                    Dashboard
                </router-link>
            </li>
            <li class="nav-item px-1">
                <router-link :to="{name: 'studio.index'}" class="nav-link">
                    Studio
                </router-link>
            </li>
            <li class="nav-item px-1">
                <router-link :to="{name: 'analytics.index'}" class="nav-link">
                    Analytics
                </router-link>
            </li>
        </ul>
        <ul class="nav navbar-nav ml-auto" style="margin-right: 10px">
            <li class="nav-item dropdown hidden-md-down" :class="isAlertsDropdownOpenClass">
                <a class="nav-link nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" @click="toggleAlertsDropdown">
                    <i class="icon-bell"></i>
                    <span class="badge badge-pill badge-danger">5</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                    <div class="dropdown-header text-center">
                        <strong>You have 5 notifications</strong>
                    </div>

                    <a href="#" class="dropdown-item">
                        <i class="icon-user-follow text-success"></i> New user registered
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="icon-user-unfollow text-danger"></i> User deleted
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="icon-chart text-info"></i> Sales report is ready
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="icon-basket-loaded text-primary"></i> New client
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="icon-speedometer text-warning"></i> Server overloaded
                    </a>
                </div>
            </li>
            <li class="nav-item dropdown" :class="isAdminDropdownOpenClass">
                <a role="button" class="dropdown-toggle" @click="toggleAdminDropdown">
                    <span>
                        <img src="static/img/avatars/6.jpg" alt="admin@bootstrapmaster.com" class="img-avatar">
                        <span class="hidden-md-down">
                            admin
                        </span>
                    </span>
                    <span class="caret">
                    </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-header text-center">
                        <strong>Account</strong>
                    </div>
                    <a href="#" class="dropdown-item">
                        <i class="fa fa-bell-o">
                        </i>
                        Updates
                        <span class="badge badge-info">
                            42
                        </span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="fa fa-envelope-o">
                        </i>
                        Messages
                        <span class="badge badge-success">
                            42
                        </span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="fa fa-tasks">
                        </i>
                        Tasks
                        <span class="badge badge-danger">42</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="fa fa-comments"></i>
                        Comments
                        <span class="badge badge-warning">42</span>
                    </a>
                </div>
            </li>

        </ul>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                isAdminDropdownOpen: false,
                isAlertsDropdownOpen: false
            }
        },
        methods: {
            toggleSidebar() {
                this.$store.commit('common/mutations/TOGGLE_SIDEBAR')
            },
            toggleAdminDropdown() {
                this.isAlertsDropdownOpen = false;
                this.isAdminDropdownOpen = ! this.isAdminDropdownOpen;
            },
            toggleAlertsDropdown() {
                this.isAdminDropdownOpen = false;

                this.isAlertsDropdownOpen = ! this.isAlertsDropdownOpen;
            }
        },
        computed: {
            isAdminDropdownOpenClass() {
                return {
                    'open': this.isAdminDropdownOpen
                }
            },
            isAlertsDropdownOpenClass() {
                return {
                    'open': this.isAlertsDropdownOpen
                }
            }
        }
    };
</script>

<style lang="scss">

</style>
