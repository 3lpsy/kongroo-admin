<template>
    <page-container>
        <div slot="page-nav" class="tabs is-fullwidth">
            <ul>
              <li>
                  <router-link :to="{name: 'dashboard.index'}">
                      Dashboard
                  </router-link>
              </li>
              <li>
                  <router-link class="is-active" :to="{name: 'studio.article.edit', params: {articleId: 1}}">
                      Studio
                  </router-link>
              </li>
              <li>
                  <router-link :to="{name: 'analytics.index'}">
                      Analytics
                  </router-link>
              </li>
            </ul>
        </div>
        <div class="page-content">
            <vb-container>
                <vb-content class="is-overflow-visible">
                    <vb-columns>
                        <vb-column class="is-8">
                            <vb-section>
                                Editor
                            </vb-section>
                        </vb-column>
                        <vb-column class="is-4">
                            <vb-section>
                                <p>Publish</p>
                                <p class="control">
                                  <label class="radio">
                                    <input type="radio" name="question">
                                    Yes
                                  </label>
                                  <label class="radio">
                                    <input type="radio" name="question">
                                    No
                                  </label>
                                </p>
                                <p>Date</p>
                                <vue-datepicker :config="{ wrap: true }" readonly>
                                    <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
                                    <a class="button" data-clear><i class="fa fa-close"></i></a>
                                </vue-datepicker>
                            </vb-section>
                            <vb-section>
                                <p>Create A New Article</p>
                                <p class="control">
                                    <input class="input" type="text" placeholder="Title">
                                </p>
                                <p class="control">
                                    <input class="input" type="text" placeholder="Sub Title">
                                </p>
                                <p class="control">
                                    <input class="input" type="text" placeholder="Display Name">
                                </p>
                                <p class="control">
                                    <input class="input" type="text" placeholder="Name">
                                </p>
                                <p class="control">
                                    <input class="input" type="text" placeholder="Slug">
                                </p>
                            </vb-section>
                            <vb-section>
                                <p>Articles and Tags</p>
                                <taggable :selected="article.tagIds" @tag="tag" @untag="untag">
                                </taggable>
                                <categorical :selected="article.categoryIds" @category="category" @uncategory="uncategory">
                                </categorical>
                            </vb-section>
                        </vb-column>
                    </vb-columns>

                </vb-content>
            </vb-container>
        </div>
    </page-container>
</template>

<script>
import PageContainer from 'pages/studio/container/Container';
import Taggable from 'tag/components/forms/Taggable';
import Categorical from 'category/components/forms/Categorical';
import VueDatepicker from 'vue-bulma-datepicker';

export default {
    data() {
        return {
            booted: false,
            article: {
                tagIds: [],
                categoryIds: [],
            }
        };
    },

    methods: {
        tag(id) {
            console.log('Index tag');
            this.article.tagIds.push(id);
        },
        untag(id) {
            let exists = this.article.tagIds.find((tagId) => {
                return tagId === id;
            });

            if (! exists) {
                return;
            }
            let index = this.article.tagIds.indexOf(exists);

            if (index === -1) {
                return;
            }
            if (! index && index < this.article.tagIds.length) {
                this.article.tagIds.splice(index, 1);
            }
        },
        category(id) {
            this.article.categoryIds.push(id);
        },
        uncategory(id) {

            let exists = this.article.categoryIds.find((catId) => {
                return catId === id;
            });

            if (! exists) {
                return;
            }
            let index = this.article.categoryIds.indexOf(exists);

            if (index === -1) {
                return;
            }
            if (! index && index < this.article.categoryIds.length) {
                this.article.categoryIds.splice(index, 1);
            }
        }
    },
    components: {
        PageContainer,
        Taggable,
        Categorical,
        VueDatepicker
    }
};
</script>

<style type="text/css">

</style>
