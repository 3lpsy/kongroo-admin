export default {
    computed: {
        queryCategoryIds() {
            let ids = this.$route.query['categories[]'];

            ids = Array.isArray(ids) ? ids : [ids];

            ids = ids.map((id) => {
                return parseInt(id);
            });

            return ids.filter((id) => {
                return ! isNaN(id);
            });
        }
    }
}
