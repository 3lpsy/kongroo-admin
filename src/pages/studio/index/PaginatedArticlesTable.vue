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
            <div slot="top-title">
                <slot name="top-title">
                    <h1 class="title">
                        Articles
                    </h1>
                </slot>
            </div>
            <template slot="detail" scope="props">
                <td :colspan="fields.length">
                    {{props.rowData.title}}
                </td>
            </template>
            <template slot="actions" scope="props">
                <p class="block">
                    <a class="button is-primary">
                        <span class="VueDatatable__table--action-icon icon">
                            <i class="fa fa-pencil"></i>
                        </span>
                    </a>
                </p>
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
                },
                {
                    name: 'slug',
                    sortField: 'slug',
                },
                {
                    name: 'views',
                    sortField: 'views',
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
                direction: 'desc'
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

</style>
