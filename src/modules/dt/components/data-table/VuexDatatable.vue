<template>
    <div class="container VuexDatatable">
        <nav class="level is-marginless">
            <div class="level-left">
                <div class="level-item">

                </div>
            </div>
            <div class="level-right">
                <div class="">
                    <bulma-pagination
                        :vuex-pagination="vuexPagination"
                        :vuex-load="vuexLoad">
                    </bulma-pagination>
            </div>
        </nav>
        <vuetable
            class="Vuetable"
            :vuex-data="vuexData"
            :vuex-pagination="vuexPagination"
            :vuex-load="vuexLoad"
            :fields="fields"
            :css="css"
            :multi-sort="false"
            :sort-order="sortOrder"
        >
            <template slot="actions" scope="props">
                <div class="table-button-container">
                    <button class="btn btn-default" @click="onClick('edit-item', props.rowData)"><i class="fa fa-edit"></i> View</button>&nbsp;&nbsp;
                    <button class="btn btn-danger" @click="onClick('delete-item', props.rowData)"><i class="fa fa-remove"></i> Edit</button>&nbsp;&nbsp;
                </div>
            </template>
        </vuetable>
        <nav class="level is-marginless">
            <div class="level-left">
                <div class="level-item">

                </div>
            </div>
            <div class="level-right">
                <bulma-pagination-simple-nav
                    :vuex-pagination="vuexPagination"
                    :vuex-load="vuexLoad">
                </bulma-pagination-simple-nav>
            </div>
        </nav>
    </div>
</template>

<script>
import Vuetable from 'dt/components/vuex-table-2/Vuetable';
import BulmaPaginationSimpleNav from './BulmaPaginationSimpleNav';
import BulmaPagination from './BulmaPagination';
import RowActions from './RowActions'
import DetailRow from './DetailRow'
import FilterBar from './FilterBar'

export default {
    data() {
        return {
            css: {
                tableClass: 'table is-bordered is-striped',
                ascendingIcon: 'fa fa-chevron-up',
                descendingIcon: 'fa fa-chevron-down',
                sortHandleIcon: 'fa fa-bars',
            }
        }
    },
    props: {
        fields: {
            type: Array,
            required: true
        },
        sortOrder: {
            type: Array,
            default: () => {
                return [{
                    field: 'id',
                    sortField: 'id',
                    direction: 'asc'
                }]
            }
        },
        vuexData: {
            type: String,
            required: true
        },
        vuexPagination: {
            type: String,
            required: true
        },
        vuexLoad: {
            type: String,
            required: true
        }
    },
    methods: {
        // onPaginationData(paginationData) {
        //     this.$refs.pagination.setPaginationData(paginationData)
        //     this.$refs.paginationInfo.setPaginationData(paginationData)
        // },
        // onChangePage(page) {
        //     this.$refs.vuetable.changePage(page)
        // },
        // onCellClicked(data, field, event) {
        //     console.log('cellClicked: ', field.name)
        //     this.$refs.vuetable.toggleDetailRow(data.id)
        // }
    },
    components: {
        Vuetable,
        BulmaPagination,
        BulmaPaginationSimpleNav,
        FilterBar,
        RowActions,
        DetailRow
    },
}
</script>

<style lang='scss'>
.VuexDatatable{
    overflow: hidden;

}
.Vuetable{
    overflow: scroll;
}
</style>
