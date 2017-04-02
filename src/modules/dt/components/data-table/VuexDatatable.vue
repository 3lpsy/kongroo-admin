<template>
    <div>
        <div class="VuexDatatable__top-title">
            <slot name="top-title">
            </slot>
        </div>
        <div class="VueDatatable__table-wrapper">
            <table :class="['table VueDatatable__table', css.tableClass]">
                <thead>
                    <tr>
                        <template v-for="field in fields">
                            <template v-if="field.visible">
                                <template v-if="isSpecialField(field.name)">
                                    <th v-if="extractName(field.name) == '__checkbox'"
                                        :class="['vuetable-th-checkbox-'+trackBy, field.titleClass]">
                                        <input
                                            type="checkbox"
                                            @change="toggleAllCheckboxes(field.name, $event)"
                                            :checked="checkCheckboxesState(field.name)">
                                    </th>
                                    <th
                                        v-if="extractName(field.name) == '__component'"
                                        @click="orderBy(field, $event)"
                                        :class="['vuetable-th-component-'+trackBy, field.titleClass, {'sortable': isSortable(field)}]">
                                            {{ field.title || '' }}
                                            <i
                                                v-if="isInCurrentSortGroup(field) && field.title"
                                                :class="sortIcon(field)"
                                                :style="{opacity: sortIconOpacity(field)}">
                                            </i>
                                    </th>
                                    <th
                                        v-if="extractName(field.name) == '__slot'"
                                        @click="orderBy(field, $event)"
                                        :class="['vuetable-th-slot-'+extractArgs(field.name), field.titleClass, {'sortable': isSortable(field)}]">
                                            {{ field.title || '' }}
                                        <i
                                            v-if="isInCurrentSortGroup(field) && field.title"
                                            :class="sortIcon(field)"
                                            :style="{opacity: sortIconOpacity(field)}">
                                        </i>
                                    </th>
                                    <th
                                        v-if="extractName(field.name) == '__sequence'"
                                        :class="['vuetable-th-sequence', field.titleClass || '']" v-html="field.title || ''">
                                    </th>
                                    <th
                                        v-if="notIn(extractName(field.name), ['__sequence', '__checkbox', '__component', '__slot'])"
                                        :class="['vuetable-th-'+field.name, field.titleClass || '']" v-html="field.title || ''">
                                    </th>
                                </template>
                                <template v-else>
                                    <th @click="orderBy(field, $event)"
                                    :id="'_' + field.name"
                                    :class="['vuetable-th-'+field.name, field.titleClass,  {'sortable': isSortable(field)}]">
                                    {{  getTitle(field) }}&nbsp;
                                        <i v-if="isInCurrentSortGroup(field)" :class="sortIcon(field)" :style="{opacity: sortIconOpacity(field)}"></i>
                                    </th>
                                </template>
                            </template>
                        </template>
                    </tr>
                </thead>
                <tbody v-cloak>
                    <template v-for="(item, index) in items">
                        <tr
                            @dblclick="onRowDoubleClicked(item, $event)"
                            @click="onRowClicked(item, $event)"
                            :render="onRowChanged(item)"
                            :class="onRowClass(item, index)">
                            <template v-for="field in fields">
                                <template v-if="field.visible">
                                    <template v-if="isSpecialField(field.name)">
                                        <td
                                            v-if="extractName(field.name) == '__sequence'"
                                            :class="['vuetable-sequence', field.dataClass]"
                                            v-html="tablePagination.from + index">
                                        </td>
                                        <td
                                            v-if="extractName(field.name) == '__handle'"
                                            :class="['vuetable-handle', field.dataClass]">
                                            <i :class="['sort-handle', css.sortHandleIcon]"></i>
                                        </td>
                                        <td
                                            v-if="extractName(field.name) == '__checkbox'"
                                            :class="['vuetable-checkboxes', field.dataClass]">
                                            <input type="checkbox"
                                                @change="toggleCheckbox(item, field.name, $event)"
                                                :checked="rowSelected(item, field.name)">
                                        </td>
                                        <td
                                            v-if="extractName(field.name) === '__component'"
                                            :class="['vuetable-component', field.dataClass]">
                                            <component
                                                :is="extractArgs(field.name)"
                                                :row-data="item" :row-index="index">
                                            </component>
                                        </td>
                                        <td
                                            v-if="extractName(field.name) === '__slot'"
                                            :class="['vuetable-slot', field.dataClass]">
                                            <slot
                                                :name="extractArgs(field.name)"
                                                :row-data="item"
                                                :row-index="index">
                                            </slot>
                                        </td>
                                    </template>
                                    <template v-else>
                                        <td v-if="hasCallback(field)"
                                            :class="field.dataClass"
                                            @click="onCellClicked(item, field, $event)"
                                            @dblclick="onCellDoubleClicked(item, field, $event)"
                                            v-html="callCallback(field, item)">
                                        </td>
                                        <td v-else
                                            :class="field.dataClass"
                                            @click="onCellClicked(item, field, $event)"
                                            @dblclick="onCellDoubleClicked(item, field, $event)"
                                            v-html="getObjectValue(item, field.name, '')">
                                        </td>
                                    </template>
                                </template>
                            </template>
                        </tr>
                        <template v-if="useDetailRow && extractName(detail.name) == '__slot'">
                            <transition :name="detailRowTransition">
                                <tr
                                    v-if="isVisibleDetailRow(item[trackBy])"
                                    @click="onDetailRowClick(item, $event)"
                                    :class="[css.detailRowClass]">
                                    <slot
                                        :name="extractArgs(detail.name)"
                                        :row-data="item"
                                        :row-index="index">
                                    </slot>
                                </tr>
                            </transition>
                        </template>
                    </template>
                </tbody>
            </table>
        </div>

        <slot name="bottom-bar">
            <div style="display:flex; margin-top: 10px">
                <div style="flex:1"></div>
                <v-pagination
                    @input="loadPage"
                    v-bind:length.number="totalPages"
                    :value="currentPage"
                ></v-pagination>
            </div>
        </slot>
    </div>
</template>

<script>
import DataTableMixin from "./DataTableMixin";
import LoadDataMixin from "./LoadDataMixin";
import DataQueryMixin from "./DataQueryMixin";
import DetailRowMixin from "./DetailRowMixin";
import OrderByMixin from "./OrderByMixin";
import TableHandlersMixin from "./TableHandlersMixin";
import PaginationMixin from './PaginationMixin'

export default {
    mixins: [
        DataTableMixin,
        LoadDataMixin,
        OrderByMixin,
        LoadDataMixin,
        DataQueryMixin,
        DetailRowMixin,
        TableHandlersMixin,
        PaginationMixin
    ],
    mounted() {
        this.loadData();
    },
    components: {
    },
}
</script>

<style lang='scss'>
@import "./styles";
.VuexDatatable__top-title {
    margin-bottom: 10px;
}
</style>
