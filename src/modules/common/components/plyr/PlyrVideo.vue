<template lang="html">
    <div>
        <pre>{{$data.errors}}</pre>
        <video v-bind:ref="'video-' + video.id" ></video>
    </div>
</template>

<script>
import plyr from "plyr";

export default {
    data() {
        return {
            players: [],
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
        sourceable() {
            return {
                type: 'video',
                title: this.plyrTitle,
                poster: this.plyrPoster,
                sources: this.plyrSources
            };
        },
        plyrSources() {
            if (! this.video || ! this.video.sources) {
                return [];
            }

            return this.video.sources.map((source) => {
                return {
                    src: source.src,
                    type: source.mime
                }
            })
        },

        plyrPoster() {
            if (! this.video || ! this.video.poster) {
                return "";
            }
            return this.video.poster.src;
        },
        plyrTitle() {
            if (! this.video) {
                return "";
            }
            return this.video.title;
        }
    },
    methods: {
        setup() {
            console.log('setup', this.$refs["video-" + this.video.id]);
            this.plyrs = plyr.setup(this.$refs["video-" + this.video.id], {debug: true}).map((plyr, key) => {
                this.players.push(this.createPlayer(plyr, key));
            });
        },
        isSourced() {
            return !! this.hasBeenSourced;
        },
        createPlayer(plyr, key) {

            let name = 'container-' + this.video.id + '-player-' + key;

            plyr.on('setup', (event) => {
                this.onSetup(event, name);
            });

            plyr.on('ready', (event) => {
                this.onReady(event, name);
            });

            plyr.on('error', (event) => {
                this.onError(event, name);
            });

            return {
                name,
                instance: plyr
            };
        },

        player(name) {
            return this.players.find((player) => {
                return player.name === name;
            });
        },

        instance(name) {
            return this.player(name).instance
        },

        onSetup(event, name)  {
            console.log("setup", name);
        },

        onReady(event, name) {
            if (! this.isSourced()) {
                this.hasBeenSourced = true;
                this.instance(name).source(this.sourceable);
            }
            // console.log('ready', name);
        },

        onError(event, name) {
            console.log(event);
            this.errors.push(event);
            if (this.errors.length > 100) {
                this.instance(name).destroy();
            }
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
</style>
