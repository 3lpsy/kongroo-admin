export default {
    props: {
        detail: {
            type: Object,
            default: () => {
                return {
                    use: false
                }
            }
        },
        visibleDetailRows: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods: {
        isVisibleDetailRow: function(trackById) {
            return this.visibleDetailRows.indexOf(trackById) >= 0
        },
    },
    computed: {
        useDetailRow() {
            return !! this.detail.use;
        }
    }
}
