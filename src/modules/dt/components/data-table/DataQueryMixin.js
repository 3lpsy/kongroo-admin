export default {
    props: {
        appendParams: {
            type: Object,
            default: function() {
                return {}
            }
        },
    },
    methods: {
        getAllQueryParams: function() {
            let params = {}
            params[this.queryParams.sort] = this.getSortParam();
            params[this.queryParams.sortDir] = this.getSortDirParam()

            params[this.queryParams.page] = this.currentPage
            params[this.queryParams.perPage] = this.perPage

            for (let x in this.appendParams) {
                params[x] = this.appendParams[x]
            }

            return params
        },
        getSortDirParam: function () {
            if (!this.sortOrder || this.sortOrder.field == '') {
                return 'ASC'
            }

            return this.getDefaultSortDirParam()
        },
        getDefaultSortDirParam: function() {
            let result = '';

            for (let i = 0; i < 1; i++) {
                let fieldName = (typeof this.sortOrder[i].sortField === 'undefined') ?
                    this.sortOrder[i].field :
                    this.sortOrder[i].sortField;
                result = this.sortOrder[i].direction;
            }

            return result;
        },
        getSortParam: function() {
            if (!this.sortOrder || this.sortOrder.field == '') {
                return 'id'
            }

            return this.getDefaultSortParam()
        },
        getDefaultSortParam: function() {
            let result = '';

            for (let i = 0; i < 1; i++) {
                let fieldName = (typeof this.sortOrder[i].sortField === 'undefined') ?
                    this.sortOrder[i].field :
                    this.sortOrder[i].sortField;
                console.log(this.sortOrder[i].sortField);
                result = fieldName;
            }

            return result;
        },
    }
}
