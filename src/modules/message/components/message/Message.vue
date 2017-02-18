<template lang="html">
    <div class="messages">
        <vue-bulma-message
            type="success"
            direction="Down"
            :title="message.title"
            :message="message.message"
            :duration="5000"
            :showCloseButton="true"
            @close="close">
        </vue-bulma-message>
    </div>
</template>

<script>
import VueBulmaMessage from 'vue-bulma-message'

export default {
    props: {
        message: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    methods: {
        close() {
            console.log("Caught close");
        }
    },
    components: {
        VueBulmaMessage
    }
}
</script>

<style lang="css">
</style>
