<template>
    <page-container>

    </page-container>
</template>

<script>
import PageContainer from 'pages/studio/container/Container';
import slugify from 'slugify';
export default {
    data() {
        return {
            title: '',
            subTitle: '',
            slug: '',
            authorId: '',
            syncSlug: true
        }
    },
    methods: {
        create() {

        },
        unSyncSlug() {
            this.syncSlug = false;
        }
    },
    watch: {
        title: function(val) {
            if (this.syncSlug) {
                this.slug = slugify(this.title).toLowerCase();
            }
        },
        slug: function(val) {
            if (! val) {
                this.syncSlug = true;
            }
        }
    },
    components: {
        PageContainer,
    }
};
</script>

<style type="text/css">

</style>
