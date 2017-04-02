import Vue from 'vue';

export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        fields: {
            type: Array,
            required: true
        },
        queryParams: {
            type: Object,
            default: function() {
                return {
                    sort: 'orderBy',
                    sortDir: 'orderDir',
                    page: 'page',
                    perPage: 'limit'
                }
            }
        },
        rowClassCallback: {
            type: String,
            default: ''
        },
        trackBy: {
            type: String,
            default: 'id'
        },
        css: {
            type: Object,
            default: function() {
                return {
                    tableClass: 'table',
                    loadingClass: 'loading',
                    ascendingIcon: '',
                    descendingIcon: '',
                    sortHandleIcon: '',
                }
            }
        },
        multiSort: {
            type: Boolean,
            default: false
        },
        silent: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        return {
            selectedTo: [],
        }
    },
    mounted: function() {
        this.normalizeFields()
        if (this.loadOnStart) {
            console.log('load on start');
            this.loadData()
        }
    },
    computed: {
        countVisibleFields: function() {
            return this.fields.filter(function(field) {
                return field.visible
            }).length
        }
    },
    methods: {
        isSpecialField: function(fieldName) {
            return fieldName.slice(0, 2) === '__'
        },
        extractName: function(string) {
            return string.split(':')[0].trim()
        },
        normalizeFields: function() {
            if (typeof(this.fields) === 'undefined') {
                this.warn('You need to provide "fields" prop.')
                return
            }

            let self = this
            let obj
            this.fields.forEach(function(field, i) {
                if (typeof(field) === 'string') {
                    obj = {
                        name: field,
                        title: self.setTitle(field),
                        titleClass: '',
                        dataClass: '',
                        callback: null,
                        visible: true,
                    }
                } else {
                    obj = {
                        name: field.name,
                        title: (field.title === undefined) ? self.setTitle(field.name) : field.title,
                        sortField: field.sortField,
                        titleClass: (field.titleClass === undefined) ? '' : field.titleClass,
                        dataClass: (field.dataClass === undefined) ? '' : field.dataClass,
                        callback: (field.callback === undefined) ? '' : field.callback,
                        visible: (field.visible === undefined) ? true : field.visible,
                    }
                }
                Vue.set(self.fields, i, obj)
            })
        },
        setTitle: function(str) {
            if (this.isSpecialField(str)) {
                return ''
            }

            return this.titleCase(str)
        },
        getTitle: function(field) {
            if (typeof field.title === 'undefined') {
                return field.name.replace('.', ' ')
            }

            return field.title
        },
        titleCase: function(str) {
            return str.replace(/\w+/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            })
        },
        camelCase: function(str, delimiter = '_') {
            let self = this
            return str.split(delimiter).map(function(item) {
                return self.titleCase(item)
            }).join('')
        },
        notIn: function(str, arr) {
            return arr.indexOf(str) === -1
        },
        parentFunctionExists: function(func) {
            return (func !== '' && typeof this.$parent[func] === 'function')
        },
        warn: function(msg) {
            if (!this.silent) {
                console.warn(msg)
            }
        },
        extractArgs: function(string) {
            return string.split(':')[1]
        },

        hasCallback: function(item) {
            return item.callback ? true : false
        },
        callCallback: function(field, item) {
            if (!this.hasCallback(field)) return

            if (typeof(field.callback) == 'function') {
                return field.callback(this.getObjectValue(item, field.name))
            }

            let args = field.callback.split('|')
            let func = args.shift()

            if (typeof this.$parent[func] === 'function') {
                let value = this.getObjectValue(item, field.name)

                return (args.length > 0) ?
                    this.$parent[func].apply(this.$parent, [value].concat(args)) :
                    this.$parent[func].call(this.$parent, value)
            }

            return null
        },
        getObjectValue: function(object, path, defaultValue) {
            defaultValue = (typeof defaultValue === 'undefined') ? null : defaultValue

            let obj = object
            if (path.trim() != '') {
                let keys = path.split('.')
                keys.forEach(function(key) {
                    if (obj !== null && typeof obj[key] !== 'undefined' && obj[key] !== null) {
                        obj = obj[key]
                    } else {
                        obj = defaultValue
                        return
                    }
                })
            }
            return obj
        },
        onRowClass: function(dataItem, index) {
            let func = this.rowClassCallback.trim()

            if (func !== '' && typeof this.$parent[func] === 'function') {
                return this.$parent[func].call(this.$parent, dataItem, index)
            }
            return ''
        },
        reload: function() {
            this.loadData()
        },
        refresh: function() {
            // this.currentPage = 1
            this.loadData()
        },
    }
}
