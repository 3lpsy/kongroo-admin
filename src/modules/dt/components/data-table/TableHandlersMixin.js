export default {
    props: {
        eventPrefix: {
            type: String,
            default: 'table:'
        }
    },
    methods: {
        fireEvent: function(eventName, args) {
            this.$emit(this.eventPrefix + eventName, args)
        },
        onRowChanged: function(dataItem) {
            this.fireEvent('row-changed', dataItem)
            return true
        },
        onRowClicked: function(dataItem, event) {
            this.$emit(this.eventPrefix + 'row-clicked', dataItem, event)
            return true
        },
        onRowDoubleClicked: function(dataItem, event) {
            this.$emit(this.eventPrefix + 'row-dblclicked', dataItem, event)
        },
        onCellClicked: function(dataItem, field, event) {
            this.$emit(this.eventPrefix + 'cell-clicked', dataItem, field, event)
        },
        onCellDoubleClicked: function(dataItem, field, event) {
            this.$emit(this.eventPrefix + 'cell-dblclicked', dataItem, field, event)
        },
    }
}
