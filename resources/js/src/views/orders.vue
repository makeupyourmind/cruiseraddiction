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
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
                    :pagination="true"
                    @cellClicked="test($event)"
                    :context="context"
                    :paginationPageSize="paginationPageSize"
                    :masterDetail="true"
                    :master="true"
                    :detailCellRendererParams="detailCellRendererParams"
                    :frameworkComponents="frameworkComponents"
                    :suppressPaginationPanel="true">
            </ag-grid-vue>
            <vs-pagination
                    :total="totalPages"
                    :max="maxPageNumbers"
                    v-model="currentPage" />
        </vx-card>
        <button @click="select()">test</button>
    </div>
</template>

<script>
    import { AgGridVue } from "ag-grid-vue"
    import singlebundle from '../components/SingleBundle/singleBundle'
    import Vue from 'vue'
    import {Orders} from "../api/orders";
    // import "ag-grid-enterprise";
    let SquareComponent = Vue.extend({
        template: '<vs-chip color="primary" >{{params.valueFormatted}}</vs-chip>',
    });
    export default {
        components: {
            AgGridVue,
            singlebundle,
        },
        data() {
            return {
                searchQuery: '',
                gridOptions: {},
                detailCellRendererParams: {},
                maxPageNumbers: 7,
                gridApi: null,
                defaultColDef: {
                    sortable: true,
                    editable: false,
                    resizable: true,
                    suppressMenu: true
                },
                frameworkComponents:null,
                columnDefs: null,
                contacts: [],
                context: null
            }
        },
        beforeMount(){
            this.columnDefs = [
                {
                    headerName: 'amount',
                    cellRenderer: "agGroupCellRenderer"
                },
                {
                    headerName: 'amount',
                    field: 'amount',
                    filter: true,
                    width: 175,
                },
                {
                    headerName: 'city',
                    field: 'user.city',
                    filter: true,
                    width: 175,
                },
                {
                    headerName: 'country',
                    field: 'user.country',
                    filter: true,
                    width: 250,
                },
                {
                    headerName: 'email',
                    field: 'user.email',
                    filter: true,
                    width: 250,
                },
                {
                    headerName: 'first_name',
                    field: 'user.first_name',
                    filter: true,
                    width: 75,
                },
                {
                    headerName: 'last_name',
                    field: 'user.last_name',
                    filter: true,
                    width: 150,
                },
                {
                    headerName: 'phone',
                    field: 'user.phone',
                    filter: true,
                    width: 100,
                },
                {
                    headerName: 'postal_code',
                    field: 'user.postal_code',
                    filter: true,
                    width: 125,
                },
                {
                    headerName: 'state',
                    field: 'user.state',
                    filter: true,
                    width: 250,
                },
                {
                    headerName: 'same_address',
                    field: 'user.same_address',
                    filter: true,
                    width: 125,
                },
                {
                    headerName: 'street_address',
                    field: 'user.street_address',
                    filter: true,
                    width: 125,
                },
                {
                    headerName: 'street_address_two',
                    field: 'user.street_address_two',
                    width: 125,
                },
            ];
            this.detailCellRendererParams = {
                detailGridOptions: {
                    columnDefs: [
                        {field: "brand_name"},
                        {field: "count"},
                        {field: "part_number"},
                        {field: "warehouse"}
                    ],
                    onFirstDataRendered(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                getDetailRowData: params => {
                    params.successCallback(params.data.data);
                }
            };

            this.context = { componentParent: this };
            this.frameworkComponents= {
                test: SquareComponent
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
            test(e){
                console.log(e)
                debugger;
                if(e.colDef.headerName === 'PartNumber'){
                    if(e.data.showTable){
                        this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module: true, showTable:true});
                    }else{
                        this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module: true, showTable:false});
                    }
                    this.$store.dispatch("GET_EDIT_STORE", e.data)

                }
            },
            select(){
                const selectedNodes = this.gridApi.getSelectedNodes();
                console.log('ssss',selectedNodes)
                // debugger;
                // console.log(this.columnDefs.filter(item => item.checkboxSelection).map(item => ))
            }
        },
        mounted() {
            Orders.getOrders()
                .then(res => {
                    this.contacts = res.body.map(item => item.order)
                    console.log(this.contacts)
                });
            this.gridApi = this.gridOptions.api;
            this.gridColumnApi = this.gridOptions.columnApi;
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
    .ag-theme-material .ag-cell{
        line-height: 0!important;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
