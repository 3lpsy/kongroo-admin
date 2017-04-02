<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
            <ul class="nav">
                <li class="nav-item">
                    <router-link :to="'/dashboard'" class="nav-link">
                        <i class="icon-speedometer"></i>
                        Dashboard
                        <span class="badge badge-info">
                            NEW
                        </span>
                    </router-link>
                </li>
                <li class="nav-title">
                    Content
                </li>
                <router-link tag="li" class="nav-item nav-dropdown" :to="'/dashboard'" disabled>
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick">
                        <i class="icon-puzzle"></i>
                        Articles
                    </div>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle"></i>
                                All Articles
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle"></i>
                                Add New
                            </router-link>
                        </li>
                    </ul>
                </router-link>
                <router-link tag="li" class="nav-item nav-dropdown" :to="'/dashboard'" disabled>
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick">
                        <i class="icon-puzzle"></i>
                        Series
                    </div>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle"></i>
                                All Series
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle"></i>
                                Add Series
                            </router-link>
                        </li>
                    </ul>
                </router-link>
                <router-link tag="li" class="nav-item nav-dropdown" :to="'/dashboard'" disabled>
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick">
                        <i class="icon-puzzle"></i>
                        Categories
                    </div>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle"></i>
                                All Categories
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle"></i>
                                Add Category
                            </router-link>
                        </li>
                    </ul>
                </router-link>
                <router-link tag="li" class="nav-item nav-dropdown" :to="'/dashboard'" disabled>
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick">
                        <i class="icon-puzzle"></i>
                        Tags
                    </div>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle"></i>
                                All Tags
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle"></i>
                                Add Tag
                            </router-link>
                        </li>
                    </ul>
                </router-link>
                <li class="divider"></li>
                <li class="nav-title">
                    Admin
                </li>
                <li class="nav-item nav-dropdown">
                    <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick">
                        <i class="icon-star"></i>
                        Team
                    </a>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact><i class="icon-puzzle"></i> Users</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact><i class="icon-puzzle"></i> Groups</router-link>
                        </li>

                    </ul>
                </li>
                <li class="nav-item nav-dropdown">
                    <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick">
                        <i class="icon-star"></i>
                        ACL
                    </a>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact><i class="icon-puzzle"></i> Roles</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact><i class="icon-puzzle"></i> Permissions</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item nav-dropdown">
                    <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick">
                        <i class="icon-star"></i>
                        Logs
                    </a>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle">
                                </i>
                                Logins
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link" exact>
                                <i class="icon-puzzle"></i>
                                Errors
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    methods: {
        handleClick (e) {
            e.preventDefault()
            e.target.parentElement.classList.toggle('open')
        }
    }
}
</script>

<style lang="scss">

.nav-link {
    cursor:pointer;
}
</style>
