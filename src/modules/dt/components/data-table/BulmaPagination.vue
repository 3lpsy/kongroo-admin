<template lang="html">
    <div class="">
        <nav v-if="pagination && pagination.totalPages > 1" :class="['pagination', 'BulmaPagination', location]">
            <ul :class="[css.listClass]">
                <template v-if="totalPagesLessThanWindowSize">
                    <li v-for="n in totalPages">
                        <a @click="loadPage(n)"
                            :class="[css.linkClass, isCurrentPage(n) ? css.activeClass : '']"
                            v-html="n"
                        ></a>
                    </li>
                </template>
                <template v-else>
                    <li>
                        <a
                        @click="loadPage(1)"
                            :class="[css.linkClass, isOnFirstPage ? css.disabledClass : '']">
                            1
                        </a>
                    </li>
                    <li>
                        <span :class="css.ellipsisClass">&hellip;</span>
                    </li>
                    <li v-for="n in windowSize-2">
                        <a @click="loadPage(windowStart+n)"
                            :class="[css.linkClass, isCurrentPage(windowStart+n) ? css.activeClass : '']"
                            v-html="windowStart+n">
                        </a>
                    </li>
                    <li>
                        <span :class="css.ellipsisClass">&hellip;</span>
                    </li>
                    <li>
                        <a
                            @click="loadPage(totalPages)"
                            :class="[css.linkClass, isOnLastPage ? css.disabledClass : '']"
                            v-html="totalPages">
                        </a>
                    </li>
                </template>
            </ul>
        </nav>
        <nav class="pagination">
            <vuetable-pagination-info
                class="is-paddingless is-pulled-left vuetable-pagination-info is-hidden-mobile"
                vuex-pagination="dt/getters/article/pagination">
            </vuetable-pagination-info>
        </nav>
    </div>

</template>

<script>
import VuetablePaginationInfo from 'dt/components/vuex-table-2/VuetablePaginationInfo'
import qs from 'query-string';
export default {
    data() {
        return {
            onEachSide: 3
        }
    },
    props: {
        vuexPagination: {
            type: String,
            required: true
        },
        vuexLoad: {
            type: String,
            required: true
        },
        location: {
            type: String,
            default: ''
        },
        prevText: {
            type: String,
            default: 'Previous'
        },
        nextText: {
            type: String,
            default: 'Next'
        },
        css: {
            type: Object,
            default () {
                return {
                    activeClass: 'is-current',
                    disabledClass: 'is-disabled',
                    listClass: 'pagination-list',
                    linkClass: 'pagination-link',
                    ellipsisClass: 'pagination-ellipsis'
                }
            }
        }
    },
    computed: {
        pagination() {
            return this.$store.getters[this.vuexPagination];
        },
        totalPagesLessThanWindowSize () {
           return this.totalPages < (this.onEachSide * 2) + 4
        },
        links() {
            return this.pagination === null ? false : this.pagination.links;
        },
        totalPages() {
            if (! this.pagination) {
                return 0;
            }
            return this.pagination.totalPages
        },
        prev() {
            if (! this.links) {
                return false;
            }
            return this.links.previous;
        },
        prevQuery() {
            if (! this.prev) {
                return false;
            }
            if ( this.prev.split('?').length > 1) {
                return this.prev.split('?')[1];
            }
        },
        next() {
            if (! this.links) {
                return false;
            }
            return this.links.next;
        },
        nextQuery() {
            if (! this.next) {
                return false;
            }
            if ( this.next.split('?').length > 1) {
                return this.next.split('?')[1];
            }
        },
        isOnFirstPage() {
            return this.pagination === null ? false : this.pagination.page === 1
        },
        isOnLastPage() {
            return this.pagination === null ? false : this.pagination.page === this.pagination.totalPages
        },
        currentPage() {
            if (! this.pagination) {
                return 0;
            }
            return this.pagination.page;
        },
        windowSize() {
            return this.onEachSide * 2 + 1;
        },
        windowStart() {
            if (!this.page <= this.onEachSide) {
                return 1
            } else if (this.currentPage >= (this.totalPages - this.onEachSide)) {
                return this.totalPages - this.onEachSide * 2
            }

            return this.page - this.onEachSide
        },
    },
    methods: {
        loadNext() {
            if (this.next) {
                let query = qs.parse(this.nextQuery);
                console.log(query);

                this.$store.dispatch(this.vuexLoad, {query});
            }
        },
        loadPrev() {
            if (this.prev) {
                let query = qs.parse(this.prevQuery);
                console.log(query);

                this.$store.dispatch(this.vuexLoad, {query});
            }
        },
        isCurrentPage(page) {
            return page === this.currentPage
        },
        loadPage(page) {
            let query = {};
            if (this.prev) {
                query = qs.parse(this.prevQuery);
            } else if (this.next) {
                query = qs.parse(this.nextQuery);
            }
            query.page = page;
            console.log(query);

            this.$store.dispatch(this.vuexLoad, {query});

        }
    },
    components: {
        VuetablePaginationInfo
    }
}
</script>

<style lang="scss">
.BulmaPagination {
    padding: 3px;
    .button {
        margin: 0 3px 0 3px;
    }
}
.vuetable-pagination-info {
    width: 100%;
    flex:1;
    text-align: right;
    padding: 2px 2px 2px 0;
}
</style>
