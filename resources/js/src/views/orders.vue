<template>
    <div id="ag-grid-demo">
        <vx-card>

            <!-- TABLE ACTION ROW -->
            <div class="flex flex-wrap justify-between items-center">

                <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
                    <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />>
                </div>
            </div>
            <!--<ag-grid-vue-->
            <!--:gridOptions="gridOptions"-->
            <!--class="ag-theme-material w-100 my-4 ag-grid-table"-->
            <!--style="text-align: center!important; padding:0!important"-->
            <!--:columnDefs="columnDefs"-->
            <!--:defaultColDef="defaultColDef"-->
            <!--:rowData="contacts"-->
            <!--colResizeDefault="shift"-->
            <!--:animateRows="true"-->
            <!--:floatingFilter="true"-->
            <!--:pagination="true"-->
            <!--@cellClicked="test($event)"-->
            <!--:context="context"-->
            <!--:paginationPageSize="paginationPageSize"-->
            <!--:masterDetail="true"-->
            <!--:master="true"-->
            <!--:detailCellRendererParams="detailCellRendererParams"-->
            <!--:frameworkComponents="frameworkComponents"-->
            <!--:suppressPaginationPanel="true">-->
            <!--</ag-grid-vue>-->
            <br>
            <dx-data-grid
                    id="grid-container"
                    :show-borders="true"
                    :data-source="contacts"
                    key-expr="ID"
            >
                <dx-column
                        :width="70"
                        data-field="amount"
                        caption="Title"
                />
                <dx-column data-field="user.city"/>
                <dx-column data-field="user.country"/>
                <dx-column
                        :width="170"
                        data-field="user.email"
                />
                <dx-column
                        :width="125"
                        data-field="user.first_name"
                />
                <dx-column
                        data-field="user.last_name"
                />
                <dx-column
                        data-field="user.phone"
                />
                <dx-column
                        data-field="user.postal_code"
                />
                <dx-column
                        data-field="user.state"
                />
                <dx-column
                        data-field="user.same_address"
                />
                <dx-column
                        data-field="user.street_address"
                />
                <dx-column
                        data-field="user.street_address_two"
                />
                <detail
                        :enabled="true"
                        template="detailTemplate"
                />
                <div slot="detailTemplate" slot-scope="{ data }">
                    <detail-template :template-data="data"/>
                </div>
            </dx-data-grid>

            <vs-pagination
                    :total="totalPages"
                    :max="maxPageNumbers"
                    v-model="currentPage" />
        </vx-card>
    </div>
</template>

<script>
    import { AgGridVue } from "ag-grid-vue"
    import singlebundle from '../components/SingleBundle/singleBundle'
    import Vue from 'vue'
    import {Orders} from "../api/orders";
    // import "ag-grid-enterprise";
    // let SquareComponent = Vue.extend({
    //     template: '<vs-chip color="primary" >{{params.valueFormatted}}</vs-chip>',
    // });
    import {
        DxDataGrid,
        DxColumn,
        DxMasterDetail,
    } from 'devextreme-vue/data-grid';
    import DetailTemplate from "../components/DetailTemplate";

    export default {
        components: {
            AgGridVue,
            singlebundle,
            DetailTemplate,
            DxDataGrid,
            DxColumn,
            detail:DxMasterDetail
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
        computed: {
            paginationPageSize() {
                if(this.gridApi) return this.gridApi.paginationGetPageSize()
                else return 50
            },
            totalPages() {
                if(this.gridApi) return this.gridApi.paginationGetTotalPages() | 0
                else return 0
            },
            currentPage: {
                get() {
                    if(this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
                    else return 1
                },
                set(val) {
                    // this.gridApi.paginationGoToPage(val - 1);
                }
            }
        },
        methods: {
            updateSearchQuery(val) {
                this.gridApi.setQuickFilter(val);
            },
            test(e){
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
        created() {
            Orders.getOrders()
                .then(res => {
                    this.contacts = res.body.map(item => {
                        item.order.ID = item.id;
                        return item.order;
                    })
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
