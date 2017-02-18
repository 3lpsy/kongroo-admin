<template lang="html">
    <vuex-datatable
        class="container"
        :fields="fields"
        vuex-data="dt/getters/article/articles"
        vuex-pagination="dt/getters/article/pagination"
        vuex-load="dt/actions/article/fetchArticles">
        <!-- <template slot="actions" scope="props">
            <div class="table-button-container">
                <button class="btn btn-default" @click="onClick('edit-item', props.rowData)"><i class="fa fa-edit"></i> View</button>&nbsp;&nbsp;
                <button class="btn btn-danger" @click="onClick('delete-item', props.rowData)"><i class="fa fa-remove"></i> Edit</button>&nbsp;&nbsp;
            </div>
        </template> -->
    </vuex-datatable>
</template>


<script>
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
                        name: '__slot:actions',
                        title: 'Actions',

                    }
                ]
            }
        },
        components: {
            VuexDatatable
        }
    }
</script>


<style lang="css">

</style>
