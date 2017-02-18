<template>
    <app-container :footer="true" :sidebar="true">
            <slot name="page-nav"></slot>
            <slot></slot>
    </app-container>
</template>

<script>

import AppContainer from 'common/components/container/Container.vue';

export default {
    methods: {
    },

    mounted() {
    },
    components: {
        AppContainer
    }
};
</script>

<style type="text/css">

</style>
