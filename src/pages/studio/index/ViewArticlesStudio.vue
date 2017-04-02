<template lang="html">
        <vuex-datatable
        :fields="fields"
        :detail="detail"
        :sort-order="sortOrder"
        :visible-detail-rows="visibleDetailRows"
        @table:cell-dblclicked="toggleDetailRow"
        :items="items"
        :pagination="pagination"
        vuex-load="dt/actions/article/fetchArticles"
        >
            <div slot="top-title" class="ViewArticlesStudio__top-title">
                <h1 class="title">ARTICLES</h1>
            </div>

            <template slot="detail" scope="props">
                <td :colspan="fields.length">
                    {{props.rowData.title}}
                </td>
            </template>
            <template slot="actions" scope="props">
                <v-icon>mode_edit</v-icon>
            </template>
    </vuex-datatable>
</template>

<script>
import moment from 'moment';
import VuexDatatable from 'dt/components/data-table/VuexDatatable';
export default {
    data() {
        return {
            fields: [
                {
                    name: 'id',
                    field: 'id',
                    sortField: 'id',
                },
                {
                    name: 'title',
                    field: 'title',
                    sortField: 'title',
                },
                {
                    name: 'subTitle',
                    field: 'subTitle',
                    sortField: 'sub_title',
                    titleClass: 'hidden-sm-and-down',
                    dataClass: 'hidden-sm-and-down'
                },
                {
                    name: 'slug',
                    sortField: 'slug',
                    titleClass: 'hidden-sm-and-down',
                    dataClass: 'hidden-sm-and-down'
                },
                {
                    name: 'views',
                    sortField: 'views',
                    titleClass: 'hidden-sm-and-down',
                    dataClass: 'hidden-sm-and-down'
                },
                {
                    name: 'createdAt',
                    title: 'Created',
                    sortField: 'createdAt',
                    callback: (value) => {
                        return moment(value, 'X').format('MM/DD/YYYY')
                    }
                },
                {
                    title: 'Actions',
                    name: '__slot:actions',
                }
            ],
            detail: {
                name: '__slot:detail',
                use: true
            },
            sortOrder: [{
                field: 'id',
                sortField: 'id',
                direction: 'asc'
            }],
            visibleDetailRows: []
        }
    },
    computed: {
        items() {
            return this.$store.getters["dt/getters/article/articles"]
        },
        pagination() {
            return this.$store.getters["dt/getters/article/pagination"]
        },

    },
    methods: {
        toggleDetailRow(item) {
            let trackById = item.id;
            if (this.visibleDetailRows.includes(trackById)) {
                let index = this.visibleDetailRows.indexOf(trackById);
                // console.log(index, this.visibleDetailRows.splice(index, 1));
                this.visibleDetailRows.splice(index, 1);
            } else {
                this.visibleDetailRows.push(trackById);
            }
        }
    },
    components: {
        VuexDatatable
    }
}
</script>

<style lang="scss">
.ViewArticlesStudio__top-title {
    .TopTitle__action-icon {
        padding:14px;
    }
}

</style>
