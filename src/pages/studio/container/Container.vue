<template>
    <div class="">
        <transition name="fade">
            <slot></slot>
        </transition>
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

</style>
