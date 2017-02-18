<template lang="html">
    <div class="sidebar is-primary" :class="classObj">
        <aside class="menu">
            <p class="menu-label">
                General
            </p>
            <ul class="menu-list">
                <li>
                    <a>
                        Admin
                    </a>
                </li>
                <li>
                    <a>
                        Accounts
                    </a>
                </li>
                <li>
                    <a>
                        Settings
                    </a>
                </li>
                <li><a>Customers</a></li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    computed: {
        classObj() {
            return {
                'is-collapse': this.isCollapse,
                'is-expand': ! this.isCollapse
            }
        },
        isCollapse() {
            return this.$store.getters["common/getters/isSidebarCollapse"];
        }
    }
}
</script>

<style lang="css">

</style>
