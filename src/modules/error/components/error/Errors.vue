<template lang="html">
    <div class="notification is-danger" v-if="errors">
        <button class="delete" @click="removeErrors">
        </button>
        <ul>
            <error-message v-for="err in errors" :err="err">
            </error-message>
        </ul>
    </div>
</template>

<script>

import ErrorMessage from "error/components/error/Error.vue";

export default {
    props: {
        errors: {
            type: Array
        }
    },
    methods: {
        removeErrors() {
            this.$store.dispatch('error/actions/removeErrors', {errors: this.errors})
        }
    },
    components: {
        ErrorMessage
    }
}
</script>

<style lang="css">
</style>
