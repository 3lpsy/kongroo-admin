<template>
    <page-container>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-sm-12">
                                <h4 class="card-title mb-0">
                                    Articles
                                    <router-link :to="{name:'studio.article.create'}" tag="i" class="fa fa-plus-circle fa-md">
                                    </router-link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </page-container>
</template>

<script>
import PageContainer from 'pages/studio/container/Container';
import ViewArticlesStudio from 'pages/studio/index/ViewArticlesStudio';

export default {
    data() {
        return {
            crumbs: [
                {
                    name: 'Dashboard',
                    path: '/dashboard'
                },
                {
                    name: 'Studio',
                    path: '/studio'
                }
            ]
        }
    },
    components: {
        PageContainer,
        ViewArticlesStudio
    }
};
</script>

<style type="text/css">

</style>
