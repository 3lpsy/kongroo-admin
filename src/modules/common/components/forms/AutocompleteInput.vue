<template lang="html">
    <div class="Autocomplete">
        <div class="Autocomplete__selected">
            <ul class="Autocomplete__selected-list">
                <li class="Autocomplete__selected-item" v-for="tag in tags">
                    <span>{{tag.label}}</span>
                </li>
            </ul>
        </div>
        <p class="Autocomplete__input control has-icon has-icon-right">
            <input
              class="input"
              placeholder="Tags"
              v-model="filter"
              @blur="close"
              @focus="open"
            >
            <i class="fa fa-angle-down"></i>
        </p>
        <div class="Autocomplete__options" :class="{'is-open': isOpen}">
            <ul class="Autocomplete__options-list" v-if="isOpen">
                <li class="Autocomplete__options-item" v-for="option in filtered" @click="toggleSelect(option)">
                    <slot name="option"
                      :label="option.label"
                      :value="option.value">
                      <span :class="{'is-selected': isSelected(option)}">
                          {{option.label}}
                            <span class="icon pull-right">
                                <i class="fa fa-remove"></i>
                            </span>
                      </span>
                    </slot>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            filter: ''
        }
    },
    props: {
        options: {
            type: Array,
            default: () => {
                return [];
            }
        },
        filters: {
            default: () => {
                return ['label', 'value'];
            }
        },
        selected: {
            default: () => {
                return [];
            }
        },
        selectable: {
            default: false
        },
        sendObject: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        tags() {
            if (! this.selected || this.selected.length < 1) {
                return [];
            }
            return this.selected.map((selected) => {
                return this.resolveSelected(selected);
            })
        },
        filtered() {
            let filter = this.filter;
            let options = this.options;

            if (! filter || filter.length < 1) {
                return options;
            }

            let filters = this.filters;

            if (! Array.isArray(filters)) {
                filters = [filters];
            }

            return options.filter((option) => {
                return this.searchOption(option, filter, filters);
            });
        }
    },
    methods: {
        close() {
            // this.isOpen = false;
        },
        open() {
            this.isOpen = true;
        },
        resolveSelected(selected) {
            console.log('resolve', selected);
            if (Array.isArray(selected) || typeof selected === 'object') {
                return selected;
            }
            return this.options.find((option) => {
                return option.value === selected;
            });
        },
        toggleSelect(option) {
            if (this.isSelected(option)) {
                // if we are not sending the object,
                // send the value
                if (! this.sendObject) {
                    this.$emit('remove', option.value);
                } else {
                    this.$emit('remove', option);
                }
            } else {
                // if we are not sending the object,
                // send the value
                if (! this.sendObject) {
                    this.$emit('select', option.value);
                } else {
                    this.$emit('select', option);
                }
            }
        },
        isSelected(option) {
            // if we are not passing a selected list,
            // then selected is saved on the option
            if (option.selectable === true) {
                return option.selected;
            }

            // if selected has no values,
            // return false
            if (! this.selected || this.selected.length < 1) {
                return false;
            }
            // filter selected for option
            return this.selected.filter((selected) => {
                // if selected is primative,
                // return matching value
                if (Array.isArray(selected) || typeof selected === 'object') {
                    return selected === option;
                } else {
                    return selected === option.value;
                }
            }).length > 0;
        },
        searchOption(option, search, keys = false) {

            if (! keys) {
                keys = this.filters;
            }

            let matches = keys.filter((key) => {
                let target = option[key];

                if (! target) {
                    return false;
                }
                return this.searchString(target, search);
            });

            return matches.length > 0;
        },
        searchString(target, needle) {

            if (typeof target !== 'string') {
                target = target.toString();
            }

            if (typeof needle !== 'string') {
                needle = needle.toString();
            }

            target = target.split(' ').join('');
            needle = needle.split(' ').join('');

            return target.toLowerCase().includes(needle.toLowerCase());
        }
    }
}
</script>

<style lang="scss">

</style>
