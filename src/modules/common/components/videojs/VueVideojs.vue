<template lang="html">
    <div class="vjs-container">
        <div class="vjs-wrapper">
            <video
                class="video-js vjs-default-skin vjs-16-9 vjs-big-play-centered"
                width="640" height="264"
                v-bind:ref="'video-' + video.id"
                controls preload poster >
            </video>
        </div>
    </div>
</template>

<script>
import videojs from "video.js";

export default {
    data() {
        return {
            player: [],
            errors: [],
            hasBeenSourced: false
        }
    },
    props: {
        dataVideo: {
            required: true
        }
    },
    computed: {
        videojsSources() {
            if (! this.video ) {
                return [];
            }
            return this.video.sources.map((source) => {
                return {
                    type: source.mime,
                    src: source.src
                }
            })
        }
    },
    methods: {
        setup() {
            this.player = videojs(this.$refs["video-" + this.video.id], {
                fluid: true
            }, this.onReady);
        },

        onReady() {
            this.player.posterImage.setSrc(this.video.poster.src);
            this.player.src(this.videojsSources);
            console.log(this.player.options.sources);
        }
    },
    beforeMount() {
        this.video = this.dataVideo;
    },
    mounted() {
        this.setup();
    }
}
</script>

<style lang="css">
.vjs-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.vjs-wrapper {
    display: block;
    max-width: 640px;
    height: 100%;
    width: 100%;
}
</style>
