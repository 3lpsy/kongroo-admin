<template lang="html">
        <vue-multiselect
            @input="update"
            :value="value"
            :options="categories"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :hide-selected="true"
            placeholder="Categories"
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
            return this.categories.filter((category) => {
                return this.selected.includes(category.id);
            })
        },
        categories() {
            let categories = this.$store.getters['category/getters/categories'];

            if (! categories) {
                return [];
            }
            return categories;
        }
    },
    methods: {
        update(categories) {
            this.$emit('update', categories);
        }
    },
    mounted() {
        this.$store.dispatch('category/actions/fetchCategories').then(() => {
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
