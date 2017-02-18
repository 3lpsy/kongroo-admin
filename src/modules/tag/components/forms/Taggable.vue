<template lang="html">
        <vue-multiselect
            @input="update"
            :value="value"
            :options="tags"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :hide-selected="true"
            placeholder="Tags"
            label="name"
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
            return this.tags.filter((tag) => {
                return this.selected.includes(tag.id);
            })
        },
        tags() {
            let tags = this.$store.getters['tag/getters/tags'];

            if (! tags) {
                return [];
            }
            return tags;
        }
    },
    methods: {
        update(tags) {
            this.$emit('update', tags);
        }
    },
    mounted() {
        this.$store.dispatch('tag/actions/fetchTags').then(() => {
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
