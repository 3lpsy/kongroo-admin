export default {
    computed: {
        queryPage() {
            let page = this.$route.query.page || 1;

            page = parseInt(page);

            if (isNaN(page)) {
                return 1;
            }
            return page;
        },
        queryLimit() {
            let limit = this.$route.query.limit || 15;

            limit = parseInt(limit);

            if (isNaN(limit)) {
                return 15;
            }

            return limit;
        },
        queryTotal() {
            let total = this.$route.query.total || 15;

            total = parseInt(total);

            if (isNaN(total)) {
                return 15;
            }

            return total;
        }
    }
}
