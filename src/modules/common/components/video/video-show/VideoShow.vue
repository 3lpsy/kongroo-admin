<template>
    <div class="" v-if="video && video.sources">
        <vue-videojs :data-video="video"></vue-videojs>
    </div>

</template>

<script>
    import VueVideojs from 'common/components/videojs/VueVideojs';

    export default {
        data(){
            return {
                video: false
            }
        },
        props: {
            dataVideo: {
                required: true
            }
        },
        mounted() {
            this.video = this.dataVideo;
        },
        components: {
            VueVideojs
        }
    }

</script>

<style>

</style>
