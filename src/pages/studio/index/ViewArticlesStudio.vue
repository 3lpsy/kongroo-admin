<template lang="html">
    <div class="ViewArticlesStudio container">
        <vb-columns>
            <vb-column class="is-12">
                <vb-section>
                    <h1 class="title">ARTICLES
                        <span class="icon">
                            <i class="fa fa-plus-circle"></i>
                        </span>
                    </h1>
                    <paginated-articles-table>
                    </paginated-articles-table>
                </vb-section>
            </vb-column>
        </vb-columns>
    </div>
</template>

<script>
import PaginatedArticlesTable from './PaginatedArticlesTable';

export default {
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    },
    mounted() {
    },
    components: {
        PaginatedArticlesTable
    }
}
</script>

<style lang="scss">

.ViewArticlesStudio {
    width: 100%;
    height: 100%;
    display: flex;
    .columns {
        flex: 1;
    }
    .title {
        display: flex;
        flex: 1;
        align-items: center;
        font-size: 24px;
        .icon {
            margin-left: 8px;
        }
    }
}

</style>
