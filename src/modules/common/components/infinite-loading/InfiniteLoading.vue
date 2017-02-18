<template>
    <div>
        <div class="Infinite__container">
            <div v-if="isLoading || ! isFirstLoaded">
                <div class="Spinner">
                    <spinner color="#fd6769"></spinner>
                </div>
            </div>
            <div class="Infinite__prompt" v-if="!isLoading && isFirstLoaded && isEmpty">
                <slot name="no-results">no results</slot>
            </div>
            <div class="Infinite__prompt" v-if="!isLoading && isComplete && !isFirstLoaded">
                <slot name="no-more">no more data</slot>
            </div>
        </div>
    </div>
</template>

<script>
    import loader from "../../../utils/loader";

    let getComputedStyle = document.defaultView.getComputedStyle;

    const spinnerMapping = {
        bubbles: 'loading-bubbles',
        circles: 'loading-circles',
        default: 'loading-default',
        spiral: 'loading-spiral',
        waveDots: 'loading-wave-dots',
    };
    /**
     * get the first scroll parent of an element
     * @param  {DOM} elm    the element which find scorll parent
     * @return {DOM}        the first scroll parent
     */
    function getScrollParent(elm) {
        if (elm.tagName === 'BODY') {
            return window;
        } else if (['scroll', 'auto'].indexOf(getComputedStyle(elm).overflowY) > -1) {
            return elm;
        }
        return getScrollParent(elm.parentNode);
    }

    /**
     * get current distance from footer
     * @param  {DOM} elm    scroll element
     * @return {Number}     distance
     */
    function getCurrentDistance(elm) {
        const innerHeight = elm === window
                          ? window.innerHeight
                          : parseInt(getComputedStyle(elm).height, 10);

        const scrollHeight = elm === window
                           ? document.body.scrollHeight
                           : elm.scrollHeight;

        const scrollTop = isNaN(elm.scrollTop) ? elm.pageYOffset : elm.scrollTop;

        return scrollHeight - innerHeight - scrollTop;
    }

    export default {

        props: {
            vDistance: {
                type: Number | String,
                default: 100
            },
            vSpinner: {
                type: String,
                default: spinnerMapping["default"]
            },
            onInfinite: {
                type: Function,
                required: true
            },
            vIsLoading: {
                type: Boolean | undefined,
                required: true
            },
            vIsComplete: {
                type: Boolean | undefined,
                required: true
            },
            vIsFirstLoaded: {
                type: Boolean | undefined,
                required: true
            },
            vIsEmpty: {
                type: Boolean | undefined,
                required: true
            }
        },

        data() {
            return {
                distance: this.vDistance,
                scrollParent: null,
                scrollHandler: null
            };
        },

        computed: {
            isLoading() {
                return this.vIsLoading;
            },
            isComplete() {
                return this.vIsComplete;
            },
            isFirstLoaded() {
                return this.vIsFirstLoaded;
            },
            isEmpty() {
                return this.vIsEmpty;
            },
            spinnerType() {
                return "loading-default";
            },

        },

        beforeCreated(){

        },

        created() {

        },

        beforeMount() {

        },

        mounted() {
            if (this.distance === undefined) {
                this.distance = 500;
            }

            this.scrollParent = getScrollParent(this.$el);

            this.scrollHandler = function scrollHandlerOriginal() {
                const currentDistance = getCurrentDistance(this.scrollParent);
                if (! this.isLoading && currentDistance <= this.distance) {
                    if (this.onInfinite && ! this.isComplete) {
                        this.onInfinite.call();
                    }
                }
            }.bind(this);

            setTimeout(this.scrollHandler, 500);
            this.scrollParent.addEventListener('scroll', this.scrollHandler);
        },

        destroyed() {
            if (! this.isComplete) {
                this.scrollParent.removeEventListener('scroll', this.scrollHandler);
            }
        },

        components: {
            Spinner: loader.spinner("clip")
        }

    };
</script>

<style>
.Infinite__container {
    min-height: 40px;
}
.no-results {
    font-size: 12px;
}

</style>
