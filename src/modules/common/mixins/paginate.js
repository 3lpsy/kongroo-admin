export default {
    data() {
        return {
            dataPage: 1,
            dataLimit: 15,
            dataTotal: 0
        }
    },
    methods: {
        paginate(data, pagination, filters = []) {

            if (! data) {
                return [];
            }

            if (! pagination) {
                pagination = {
                    page: 1,
                    limit: 15,
                    scopes: []
                }
            }

            let end = pagination.page * pagination.limit;

            let items = data.slice(0, end);

            if (pagination.scopes && pagination.scopes.length > 0) {

            }

            return items;
        },
    },
    computed: {
        page() {
            let page = this.dataPage || 1;

            page = parseInt(page);

            if (isNaN(page)) {
                return 1;
            }
            return page;
        },
        limit() {
            let limit = this.dataLimit || 15;

            limit = parseInt(limit);

            if (isNaN(limit)) {
                return 15;
            }

            return limit;
        },
        total() {
            let total = this.dataTotal || 15;

            total = parseInt(total);

            if (isNaN(total)) {
                return 15;
            }
            return total;
        }
    }
}
