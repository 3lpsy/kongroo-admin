<template lang="html">
    <nav v-if="pagination && pagination.totalPages > 1" :class="['pagination','block', 'BulmaPaginationButtons', location]">
        <a @click.prevent="loadPrev()"
                :class="['button', 'is-primary', 'is-outlined', 'pagination-previous', isOnFirstPage ? css.disabledClass : '']"
                v-html="prevText"
            >
        </a>
        <a @click.prevent="loadNext()"
          :class="['button', 'is-primary', 'is-outlined', 'pagination-next', isOnLastPage ? css.disabledClass : '']"
          v-html="nextText"
        >
        </a>

    </nav>
</template>

<script>
import qs from 'query-string';
export default {
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
        links() {
            return this.pagination === null ? false : this.pagination.links;
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
        }
    },
    methods: {
        loadNext() {
            if (this.next) {
                let query = qs.parse(this.nextQuery);
                this.$store.dispatch(this.vuexLoad, {query});
            }
        },
        loadPrev() {
            if (this.prev) {
                let query = qs.parse(this.prevQuery);
                this.$store.dispatch(this.vuexLoad, {query});
            }
        }
    }
}
</script>

<style lang="scss">
.BulmaPaginationButtons {
    .button {
        margin: 0 3px 0 3px;
    }
}
</style>
