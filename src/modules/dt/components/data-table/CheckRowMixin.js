export default {
    methods: {
        toggleAllCheckboxes: function(fieldName, event) {
            let self = this
            let isChecked = event.target.checked
            let idColumn = this.trackBy

            if (isChecked) {
                this.items.forEach(function(dataItem) {
                    self.selectId(dataItem[idColumn])
                })
            } else {
                this.items.forEach(function(dataItem) {
                    self.unselectId(dataItem[idColumn])
                })
            }
            this.$emit('vuetable:checkbox-toggled-all', isChecked)
        },
        checkCheckboxesState: function(fieldName) {
            if (!this.items) return

            let self = this
            let idColumn = this.trackBy
            let selector = 'th.vuetable-th-checkbox-' + idColumn + ' input[type=checkbox]'
            let els = document.querySelectorAll(selector)

            // count how many checkbox row in the current page has been checked
            let selected = this.items.filter(function(item) {
                return self.selectedTo.indexOf(item[idColumn]) >= 0
            })

            // count == 0, clear the checkbox
            if (selected.length <= 0) {
                els.forEach(function(el) {
                    el.indeterminate = false
                })
                return false
            }
            // count > 0 and count < perPage, set checkbox state to 'indeterminate'
            else if (selected.length < this.perPage) {
                els.forEach(function(el) {
                    el.indeterminate = true
                })
                return true
            }
            // count == perPage, set checkbox state to 'checked'
            else {
                els.forEach(function(el) {
                    el.indeterminate = false
                })
                return true
            }
        },
        toggleCheckbox: function(dataItem, fieldName, event) {
            let isChecked = event.target.checked
            let idColumn = this.trackBy

            if (dataItem[idColumn] === undefined) {
                this.warn('__checkbox field: The "' + this.trackBy + '" field does not exist! Make sure the field you specify in "track-by" prop does exist.')
                return
            }

            let key = dataItem[idColumn]
            if (isChecked) {
                this.selectId(key)
            } else {
                this.unselectId(key)
            }
            this.$emit('vuetable:checkbox-toggled', isChecked, dataItem)
        },
        selectId: function(key) {
            if (!this.isSelectedRow(key)) {
                this.selectedTo.push(key)
            }
        },
        unselectId: function(key) {
            this.selectedTo = this.selectedTo.filter(function(item) {
                return item !== key
            })
        },
        isSelectedRow: function(key) {
            return this.selectedTo.indexOf(key) >= 0
        },
        rowSelected: function(dataItem, fieldName) {
            let idColumn = this.trackBy
            let key = dataItem[idColumn]

            return this.isSelectedRow(key)
        },
    }
}
