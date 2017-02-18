<template>
    <page-container>
        <div slot="page-nav" class="tabs is-fullwidth">
                <!-- <div class="tabs "> -->
                <ul>
                  <li>
                      <router-link :to="{name: 'dashboard.index'}">
                          Dashboard
                      </router-link>
                  </li>
                  <li class="is-active">
                      <router-link :to="{name: 'studio.index'}">
                          Studio
                      </router-link>
                  </li>
                  <li>
                      <router-link :to="{name: 'analytics.index'}">
                          Analytics
                      </router-link>
                  </li>
                </ul>
                <!-- </div> -->
        </div>
        <div class="page-content">
            <vb-container>
                <vb-columns class="is-12">
                    <vb-column>
                        <vue-breadcrumbs :list="crumbs">
                        </vue-breadcrumbs>
                    </vb-column>
                </vb-columns>
            </vb-container>
            <vb-container>
                <view-articles-studio>
                </view-articles-studio>
                <!-- <create-article-studio>
                </create-article-studio> -->
            </vb-container>
        </div>
    </page-container>
</template>

<script>
import PageContainer from 'pages/studio/container/Container';
// import CreateArticleStudio from 'pages/studio/index/CreateArticleStudio';
import ViewArticlesStudio from 'pages/studio/index/ViewArticlesStudio';
import VueBreadcrumbs from 'vue-bulma-breadcrumb'

export default {
    data() {
        return {
            crumbs: [
                {
                    name: 'Dashboard',
                    path: '/dashboard'
                },
                {
                    name: 'Studo',
                    path: '/studio'
                }
            ]
        }
    },
    components: {
        PageContainer,
        ViewArticlesStudio,
        VueBreadcrumbs
    }
};
</script>

<style type="text/css">

</style>
