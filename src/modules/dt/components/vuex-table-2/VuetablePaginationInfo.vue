<template>
  <div
        :class="['vuetable-pagination-info', infoClass]"
        v-html="paginationInfo">
  </div>
</template>

<script>
    import PaginationInfoMixin from './VuetablePaginationInfoMixin.vue'

    export default {
        mixins: [PaginationInfoMixin],
        props: {
            vuexPagination: {
                type: String,
                default: () => {
                    return {}
                }
            }
        },
        computed: {
            pagination() {
                return this.$store.getters[this.vuexPagination];
            },
            total() {
                if (! this.pagination) {
                    return 0;
                }
                return this.pagination.total;
            },
            from() {
                if (! this.pagination || ! this.to) {
                    return 0;
                }
                return this.to - this.pagination.limit + 1;
            },
            to() {
                if (! this.pagination) {
                    return 0;
                }
                return this.pagination.page * this.pagination.limit;

            },
            paginationInfo() {
                if (this.pagination == null || this.pagination.total == 0) {
                    return this.noDataTemplate
                }

                return this.infoTemplate
                    .replace('{from}', this.from|| 0)
                    .replace('{to}', this.to || 0)
                    .replace('{total}', this.total || 0)
            },
        }
    }
</script>
