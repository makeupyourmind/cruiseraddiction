<template>
    <div id="ag-grid-demo">
        <vx-card>

            <!-- TABLE ACTION ROW -->
            <div class="flex flex-wrap justify-between items-center">

                <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
                    <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchPart" @input="updateSearchQuery" placeholder="Search Part Number" />
                    <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchEmail" @input="updateSearchQuery" placeholder="Search Email" />
                    <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchCountry" @input="updateSearchQuery" placeholder="Search country" />
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
            <div class="grid">
                <dx-data-grid
                        id="grid-container"
                        :show-borders="true"
                        :data-source="contacts"
                        @rowPrepared="prepered"
                        key-expr="ID"
                >
                    <dx-column
                            data-field="date"
                            caption="Date"
                    />
                    <dx-column
                            caption="Order"
                            data-field="id"/>
                    <dx-column
                            caption="Country"
                            data-field="user.country"/>
                    <dx-column
                            :width="125"
                            caption="First Name"
                            data-field="user.first_name"
                    />
                    <dx-column
                            caption="Last Name"
                            data-field="user.last_name"
                    />

                    <dx-column
                            :width="70"
                            data-field="amount"
                            caption="Total"
                    />
                    <dx-column
                            :width="70"
                            caption="Action"
                            cell-template="ActionTemplate"
                    />
                    <div slot="ActionTemplate" slot-scope="{ data }">
                        <action :template-data="data"/>
                    </div>
                    <detail
                            :enabled="true"
                            template="detailTemplate"
                    />
                    <div slot="detailTemplate" slot-scope="{ data }">
                        <detail-template :template-data="data"/>
                    </div>
                </dx-data-grid>
            </div>

            <vs-pagination
                    :total="totalPages"
                    :max="maxPageNumbers"
                    v-model="currentPage" />
        </vx-card>
    </div>
</template>

<script>

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
        DxButton
    } from 'devextreme-vue/data-grid';
    import DetailTemplate from "../components/DetailTemplate";
    import ActionTemplate from "../components/ActionTemplate";

    export default {
        components: {
            singlebundle,
            DetailTemplate,
            DxDataGrid,
            DxColumn,
            action:ActionTemplate,
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
                interval:null,
                context: null,
                searchPart:'',
                searchEmail:'',
                searchCountry:'',
            }
        },
        computed: {
            paginationPageSize() {
                if(this.gridApi) return this.gridApi.paginationGetPageSize();
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
                    // this.gridApi.paginationGoToPage(val - 1);TEST
                }
            }
        },
        methods: {
            updateSearchQuery(val) {
                clearInterval(this.interval);
                this.interval = setTimeout(() => {
                    this.getOrders();
                    clearInterval(this.interval);
                }, 300)
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
            },
            prepered(row){

                if(row.rowType == 'header' || row.rowType == 'detail') return;
                if(typeof row.rowIndex == 'undefined')return;
                if (row.key%2) row.rowElement.style['background'] = 'white';
                else row.rowElement.style['background'] = '#ebebeb';
            },
            getOrders(){
                Orders.getOrders(this.searchPart, this.searchEmail,this.searchCountry )
                    .then(res => {
                        this.contacts = res.body.map((item, index) => {
                            item.order.ID = index;
                            item.order.id = item.id;
                            item.order.date = item.created_at;
                            return item.order;
                        });
                        console.log(this.contacts)
                    });
            }
        },
        created() {
           this.getOrders()
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
    /*#ag-grid-demo .grid > #grid-container > .dx-datagrid .dx-datagrid-rowsview .dx-row:nth-child(odd){*/
        /*background: lightgrey;*/
    /*}*/
    /*.detail .dx-row:nth-child(odd), .detail .dx-row:nth-child(even){*/
        /*background: white!important;*/
    /*}*/
    .dx-datagrid-group-opened:before{
        content: "\21D1";
        color:red
    }
    .dx-datagrid-group-closed:before{
        content: "\21D3";
        color:blue
    }
</style>
