<template lang="html">
        <vb-columns>
            <vb-column class="is-8">
                <vb-section>
                    <p>Create A New Article</p>
                    <p class="control">
                        <input class="input" type="text" placeholder="Title">
                    </p>
                    <p class="control">
                        <input class="input" type="text" placeholder="Sub Title">
                    </p>
                    <p class="control">
                        <input class="input" type="text" placeholder="Slug">
                    </p>
                </vb-section>
            </vb-column>
            <vb-column class="is-4">
                <vb-section>
                    <p>Series, Tags and Categories</p>
                    <seriesable :selected="seriesIds" @update="updateSeries">
                    </seriesable>
                    <taggable :selected="tagIds" @update="updateTags">
                    </taggable>
                    <categorical :selected="categoryIds" @update="updateCategories">
                    </categorical>
                </vb-section>
            </vb-column>
        </vb-columns>
</template>

<script>
import Taggable from 'tag/components/forms/Taggable';
import Seriesable from 'series/components/forms/Seriesable';
import Categorical from 'category/components/forms/Categorical';
export default {
    data() {
        return {
            booted: false,
        };
    },
    computed: {
        article() {
            return this.$store.getters['article/getters/create/article'];
        },
        tagIds() {
            if (! this.article) {
                return [];
            }
            return this.article.tagIds;
        },
        seriesIds() {
            if (! this.article) {
                return [];
            }
            return this.article.seriesIds;
        },
        categoryIds() {
            if (! this.article) {
                return [];
            }
            return this.article.categoryIds;
        }

    },
    methods: {
        updateTags(tags) {
            let tagIds = tags.map((tag) => {
                return tag.id;
            });

            if (! tagIds) {
                return;
            }
            this.$store.commit('article/mutations/create/SET_TAG_IDS', {tagIds});
        },
        updateSeries(series) {
            let seriesIds = series.map((series) => {
                return series.id;
            });

            if (! seriesIds) {
                return;
            }
            this.$store.commit('article/mutations/create/SET_SERIES_IDS', {seriesIds});
        },
        updateCategories(categories) {
            let categoryIds = categories.map((category) => {
                return category.id;
            });

            if (! categoryIds) {
                return;
            }
            this.$store.commit('article/mutations/create/SET_CATEGORY_IDS', {categoryIds});
        },
    },
    components: {
        Taggable,
        Seriesable,
        Categorical
    }
}
</script>

<style lang="css">
</style>
