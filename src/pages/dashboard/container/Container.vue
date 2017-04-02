<template>
    <div class="">
        <slot></slot>
    </div>
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
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0
    }
</style>
