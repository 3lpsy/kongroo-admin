<template lang="html">
    <div class="app-content" :class="classObj">
        <slot></slot>
    </div>
</template>

<script>
export default {
    computed: {
        classObj() {
            return {
                'is-expand': this.isCollapse
            }
        },
        isCollapse() {
            return this.$store.getters["common/getters/isSidebarCollapse"];
        }
    }
}
</script>

<style lang="css">
.app-content {
    flex: 1;
    width: 100%;
    height: 100%;
}
</style>
