export default {
    data() {
        return {
            isLoadingPage: false
        }
    },
    props: {
        pagination: {
            type: Object,
            required: true
        },
        perPage: {
            type: Number,
            default: 10
        },
    },
    computed: {
        totalPages() {
            if (! this.pagination) {
                return 0;
            }
            return this.pagination.totalPages
        },
        currentPage() {
            if (! this.pagination) {
                return 0;
            }
            return this.pagination.page
        }
    },
    methods: {
        loadPage(page) {
            this.fireEvent('loading')
            console.log(this.isLoadingPage, page);
            if ((! this.isLoadingPage) && page > 0 && page <= this.totalPages) {
                this.isLoadingPage = true;
                let payload = {query: this.getAllQueryParams()}
                payload.query.page = page;
                this.$store.dispatch(this.vuexLoad, payload).then(() => {
                    this.isLoadingPage = false;
                    this.loadSuccess();
                }).catch(() => {
                    this.isLoadingPage = false;

                    this.loadFailed();
                })
            }
        }
    }
}
