export default {
    props: {
        sortOrder: {
            type: Array,
            default: () => {
                return [{
                    field: 'id',
                    sortField: 'id',
                    direction: 'asc'
                }]
            }
        },
    },
    methods: {
        orderBy: function(field, event) {
            if (!this.isSortable(field)) return

            //no multisort, or resetting sort
            this.singleColumnSort(field)

            this.currentPage = 1 // reset page index
            this.loadData()
        },
        singleColumnSort: function(field) {
            if (this.sortOrder.length === 0) {
                this.clearSortOrder()
            }

            this.sortOrder.splice(1); //removes additional columns

            if (this.fieldIsInSortOrderPosition(field, 0)) {
                // change sort direction
                this.sortOrder[0].direction = this.sortOrder[0].direction === 'asc' ? 'desc' : 'asc'
            } else {
                // reset sort direction
                this.sortOrder[0].direction = 'asc'
            }
            this.sortOrder[0].field = field.name
            this.sortOrder[0].sortField = field.sortField
        },
        clearSortOrder: function() {
            this.sortOrder.push({
                field: '',
                sortField: '',
                direction: 'asc'
            });
        },
        sortIcon: function(field) {
            let cls = {}
            let i = this.currentSortOrderPosition(field);

            if (i !== false) {
                if (this.sortOrder[i].direction == 'asc') {
                    cls[this.css.ascendingIcon] = true
                } else {
                    cls[this.css.descendingIcon] = true
                }
            }

            return cls;
        },
        sortIconOpacity: function(field) {
            /*
             * fields with stronger precedence have darker color
             *
             * if there are few fields, we go down by 0.3
             * ex. 2 fields are selected: 1.0, 0.7
             *
             * if there are more we go down evenly on the given spectrum
             * ex. 6 fields are selected: 1.0, 0.86, 0.72, 0.58, 0.44, 0.3
             */
            let max = 1.0,
                min = 0.3,
                step = 0.3

            let count = this.sortOrder.length;
            let current = this.currentSortOrderPosition(field)


            if (max - count * step < min) {
                step = (max - min) / (count - 1)
            }

            let opacity = max - current * step

            return opacity
        },
        isSortable: function(field) {
            return !(typeof field.sortField === 'undefined')
        },
        isInCurrentSortGroup: function(field) {
            return this.currentSortOrderPosition(field) !== false;
        },
        currentSortOrderPosition: function(field) {
            if (!this.isSortable(field)) {
                return false
            }

            for (let i = 0; i < this.sortOrder.length; i++) {
                if (this.fieldIsInSortOrderPosition(field, i)) {
                    return i;
                }
            }

            return false;
        },
        fieldIsInSortOrderPosition(field, i) {
            return this.sortOrder[i].field === field.name && this.sortOrder[i].sortField === field.sortField
        },
    }
}
