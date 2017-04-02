export default {
    props: {
        loadOnStart: {
            type: Boolean,
            default: true
        },
        vuexLoad: {
            type: String,
            required: true
        },
    },
    methods: {
        loadData: function() {
            this.fireEvent('loading')

            this.$store.dispatch(this.vuexLoad, {query: this.getAllQueryParams()}).then(() => {
                this.loadSuccess();
            }).catch(() => {
                this.loadFailed();
            })
        },
        loadSuccess: function(response) {
            this.fireEvent('load-success', response)

            this.$nextTick(function() {
                this.fireEvent('pagination-data', this.tablePagination)
                this.fireEvent('loaded')
            })
        },
        loadFailed: function(response) {
            this.fireEvent('load-error', response)
            this.fireEvent('loaded')
        },
    }
}
