export default {
    computed: {
        queryTagIds() {
            let ids = this.$route.query['tags[]'];

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
