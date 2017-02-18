<template lang="html">
    <messages :messages="messages" v-if="messages && messages.length > 0">
    </messages>
</template>

<script>

import Messages from "message/components/message/Messages";

export default {
    computed: {
        messages() {
            return this.$store.getters["message/getters/messages"]
        }
    },
    components: {
        Messages
    }
}
</script>

<style lang="css">
</style>
