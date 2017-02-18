<template lang="html">
        <vue-multiselect
            @input="update"
            :value="value"
            :options="series"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :hide-selected="true"
            placeholder="Series"
            label="title"
            track-by="id">
        </vue-multiselect>

</template>

<script>
import VueMultiselect from 'vue-multiselect';

export default {
    data() {
        return {
            boot: false,
        }
    },
    props: {
        selected: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    computed: {
        value() {
            return this.series.filter((series) => {
                return this.selected.includes(series.id);
            })
        },
        series() {
            let series = this.$store.getters['series/getters/series'];

            if (! series) {
                return [];
            }
            return series;
        }
    },
    methods: {
        update(series) {
            this.$emit('update', series);
        }
    },
    mounted() {
        this.$store.dispatch('series/actions/fetchSeries').then(() => {
            this.boot = true;
        }).catch(() => {
            this.boot = true;
        });
    },
    components: {
        VueMultiselect
    }
}
</script>

<style lang="scss">


</style>
