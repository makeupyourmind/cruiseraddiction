<!-- =========================================================================================
    File Name: AgGridTable.vue
    Description: Ag Grid table
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="ag-grid-demo">
        <vx-card>

            <!-- TABLE ACTION ROW -->
            <div class="flex flex-wrap justify-between items-center">

                <!-- ITEMS PER PAGE -->
                <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left" style ="display: flex; align-items: center;">
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                        <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                            <span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ contacts.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : contacts.length }} of {{ contacts.length }}</span>
                            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                        </div>
                        <vs-dropdown-menu>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                                <span>20</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(50)">
                                <span>50</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(100)">
                                <span>100</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(150)">
                                <span>150</span>
                            </vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <singlebundle></singlebundle>
                </div>
                    <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
                <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
                    <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
<!--                    <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button>-->
                </div>
            </div>
            <ag-grid-vue
                :gridOptions="gridOptions"
                class="ag-theme-material w-100 my-4 ag-grid-table"
                style="text-align: center!important; padding:0!important"
                :columnDefs="columnDefs"
                :defaultColDef="defaultColDef"
                :rowData="contacts"
                rowSelection="multiple"
                colResizeDefault="shift"
                :animateRows="true"
                :floatingFilter="true"
                :pagination="true"
                :paginationPageSize="paginationPageSize"
                :suppressPaginationPanel="true">
            </ag-grid-vue>
                <vs-pagination
                    :total="totalPages"
                    :max="maxPageNumbers"
                    v-model="currentPage" />
        </vx-card>
    </div>
</template>

<script>
    import { AgGridVue } from "ag-grid-vue"
    import contacts from './data.json'
    import singlebundle from '../components/SingleBundle/singleBundle'
    import '../../../assets/scss/agGridStyleOverride.scss'

    export default {
        components: {
            AgGridVue,
            singlebundle,
        },
        data() {
            return {
                searchQuery: '',
                gridOptions: {},
                maxPageNumbers: 7,
                gridApi: null,
                defaultColDef: {
                    sortable: true,
                    editable: true,
                    resizable: true,
                    suppressMenu: true
                },
                columnDefs: [
                    {
                        width: 75,
                        checkboxSelection: true,
                        headerCheckboxSelectionFilteredOnly: true,
                        headerCheckboxSelection: true,
                    },
                    {
                        headerName: 'Brand',
                        field: 'brand',
                        filter: true,
                        width: 175,
                    },
                    {
                        headerName: 'PartNumber',
                        field: 'part number',
                        filter: true,
                        width: 175,
                    },
                    {
                        headerName: 'Description',
                        field: 'description',
                        filter: true,
                        width: 250,
                    },
                    {
                        headerName: 'Stores',
                        field: 'stores',
                        filter: true,
                        width: 250,
                    },
                    {
                        headerName: 'Qty',
                        field: 'qty',
                        filter: true,
                        width: 50,
                    },
                    {
                        headerName: 'Min Stock',
                        field: 'min stock',
                        filter: true,
                        width: 150,
                    },
                    {
                        headerName: 'List price',
                        field: 'list price',
                        filter: true,
                        width: 100,
                    },
                    {
                        headerName: 'Min price',
                        field: 'min price',
                        filter: true,
                        width: 100,
                    },
                    {
                        headerName: 'max price',
                        field: 'max price',
                        filter: true,
                        width: 125,
                    },
                    {
                        headerName: 'Last Modified',
                        field: 'last modified',
                        filter: true,
                        width: 250,
                    },
                    {
                        headerName: 'Location',
                        field: 'location',
                        filter: true,
                        width: 125,
                    },
                ],
                contacts: contacts,
            }
        },
        watch: {
            '$store.state.windowWidth'(val) {
                if(val <= 576) {
                    this.maxPageNumbers = 4;
                    this.gridOptions.columnApi.setColumnPinned('email', null);
                }
                else this.gridOptions.columnApi.setColumnPinned('email', 'left')
            }
        },
        computed: {

            paginationPageSize() {
                if(this.gridApi) return this.gridApi.paginationGetPageSize()
                else return 50
            },
            totalPages() {
                if(this.gridApi) return this.gridApi.paginationGetTotalPages()
                else return 0
            },
            currentPage: {
                get() {
                    if(this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
                    else return 1
                },
                set(val) {
                    this.gridApi.paginationGoToPage(val - 1);
                }
            }
        },
        methods: {
            updateSearchQuery(val) {
                this.gridApi.setQuickFilter(val);
            },

        },
        mounted() {
            this.gridApi = this.gridOptions.api;
        }
    }

</script>
<style>
    .ag-header-cell-label{
        justify-content: center!important;
    }
    .ag-header-cell{
        padding: 0!important;
    }
    .ag-header-cell:first-child{
        padding: 0 24px!important;
    }
</style>
