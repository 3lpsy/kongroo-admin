<template>
        <ol class="breadcrumb">
            <li class="breadcrumb-item" v-for="(item, index) in showList">
                <span class="active" v-if="isLast(index)">
                    {{  showName(item) }}
                </span>
                <router-link :to="item.path" v-else>
                    {{ showName(item) }}
                </router-link>
            </li>
        </ol>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true,
            default: () => []
        },
        separator: {
            type: String
        }
    },
    computed: {
        showList() {
            if (! this.list) {
                return []
            }
            return this.list.filter((crumb) => {
                if (! crumb.meta) {
                    return true
                }
                if (crumb.meta.crumb === false) {
                    return false
                }
                return true
            })
        }
    },
    methods: {
        isLast (index) {
            return index === this.showList.length - 1
        },
        showName (item) {
            return item.meta && item.meta.label || item.name
        },
        shouldShow(item) {
            console.log(item.meta)
            if (! this.meta) {
                return true
            }
            return this.meta.crumb;
        }
    }
}
</script>
