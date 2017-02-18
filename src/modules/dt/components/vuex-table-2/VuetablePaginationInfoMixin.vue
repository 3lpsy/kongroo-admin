<script>
    export default {
        props: {
            infoClass: {
                type: String,
                default () {
                    return ''
                }
            },
            infoTemplate: {
                type: String,
                default () {
                    return "Displaying {from} to {to} of {total} items"
                }
            },
            noDataTemplate: {
                type: String,
                default () {
                    return 'No relevant data'
                }
            },
        },
    }
</script>
