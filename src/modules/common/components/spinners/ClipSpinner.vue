<template>
<div class="v-spinner" v-show="loading">
    <div class="v-clip" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
export default {

    name: 'ClipLoader',

    props: {
        loading: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: '#5dc596'
        },
        size: {
            type: String,
            default: '35px'
        },
        radius: {
            type: String,
            default: '100%'
        }
    },
    computed: {
        spinnerStyle () {
            return {
                height: this.size,
                width: this.size,
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: this.color + ' ' + this.color + ' transparent',
                borderRadius: this.radius,
                background: 'transparent !important'
            }
        }
    }
}
</script>

<style>

</style>
