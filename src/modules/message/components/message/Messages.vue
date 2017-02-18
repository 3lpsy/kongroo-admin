<template lang="html">
    <div class="messages">
        <message v-for="message in messages" :message="message"></message>
    </div>
</template>

<script>

import Message from "message/components/message/Message";

export default {
    props: {
        messages: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    components: {
        Message
    }
}
</script>

<style lang="css">
</style>
