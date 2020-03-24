<template>
    <div id="ag-grid-demo">
        <vx-card>

            <!-- TABLE ACTION ROW -->
            <div class="flex flex-wrap justify-between items-center">

                <!-- ITEMS PER PAGE -->
                <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left" style="display: flex; align-items: center;">
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                        <!--<div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">-->
                        <!--<span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ contacts.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : contacts.length }} of {{ contacts.length }}</span>-->
                        <!--<feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />-->
                        <!--</div>-->
                        <!--<vs-dropdown-menu>-->
                        <!--<vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">-->
                        <!--<span>20</span>-->
                        <!--</vs-dropdown-item>-->
                        <!--<vs-dropdown-item @click="gridApi.paginationSetPageSize(50)">-->
                        <!--<span>50</span>-->
                        <!--</vs-dropdown-item>-->
                        <!--<vs-dropdown-item @click="gridApi.paginationSetPageSize(100)">-->
                        <!--<span>100</span>-->
                        <!--</vs-dropdown-item>-->
                        <!--<vs-dropdown-item @click="gridApi.paginationSetPageSize(150)">-->
                        <!--<span>150</span>-->
                        <!--</vs-dropdown-item>-->
                        <!--</vs-dropdown-menu>-->
                    </vs-dropdown>
                    <singlebundle :select="select"></singlebundle>

                    <vs-button color="primary" style="margin-left: 20px" @click="getImage()" type="flat">RELOAD IMAGE</vs-button>
                   <div >
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                    <a href="#">
                        Product Filter {{drop}}
                    </a>
                    <vs-dropdown-menu class="examplex">
                        <vs-dropdown-item class="examplex" @click="getQtyZero">
                        Quantity 0
                        </vs-dropdown-item>
                        <vs-dropdown-item  class="examplex" divider @click="getQtyAbove">
                        Quantity Above 10
                        </vs-dropdown-item>
                        <vs-dropdown-item class="examplex"
                        divider @click="getQtyBellowMinStock">
                        Quantity Below Min Stock
                        </vs-dropdown-item>
                        <vs-dropdown-item  class="examplex" divider @click="getBundelsOnly">
                        Bundles Only
                        </vs-dropdown-item>
                        <vs-dropdown-item  class="examplex" divider @click="getWithoutFilters">
                        Without filters
                        </vs-dropdown-item>
                    </vs-dropdown-menu>
                    </vs-dropdown>
                   </div>
                </div>
                <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
                <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
                    <vs-pagination
                            style="margin-right: 20px"
                            :total="totalPages"
                            :max="7"
                            v-model="currentPage"
                    />
                    <vs-input class="mb-4 md:mb-0 mr-4" :value="order.searchBrand"
                              @input="setOrder($event, 'searchBrand')"
                              @change="updateSearchQuery"
                              placeholder="Search brand"/>
                    <vs-input class="mb-4 md:mb-0 mr-4"
                              @input="setOrder($event, 'searchNumber')"
                              :value="order.searchNumber"
                              @change="updateSearchQuery"
                              placeholder="Search part number"/>
                    <!--                    <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button>-->
                </div>
            </div>
            <ag-grid-vue
                    ref="test"
                    :gridOptions="gridOptions"
                    class="ag-theme-material w-100 my-4 ag-grid-table"
                    style=""
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="getData"
                    rowSelection="multiple"
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
                    :pagination="true"
                    @cellClicked="test($event)"
                    :context="context"
                    :suppressMenuHide="true"
                    :frameworkComponents="frameworkComponents"
                    :suppressPaginationPanel="true">
                <!-- :paginationPageSize="paginationPageSize"-->
            </ag-grid-vue>
        </vx-card>
    </div>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue"
    import contacts from './data.json'
    import singlebundle from '../components/SingleBundle/singleBundle'
    import test from '../components/SingleBundle/cellRenderer'
    import Vue from 'vue'
    import {StockManagment} from "../api/stockManagment";
    import VxSidebarItem from "../layouts/components/vx-sidebar/VxSidebarItem";

    let SquareComponent = Vue.extend({
        template: '<vs-chip color="primary" @click="test(params)">{{params.valueFormatted}}</vs-chip>',
        methods:{
            test(dd){
                console.log(dd)
            }
        }
    });
    let CustomHeader = Vue.extend({
        template: `
        <div style="width: 100%; display: flex; justify-content: center" @click="onSortChanged(1, $event)">
            <div>
                <div class="customHeaderLabel" >{{params.displayName}}</div>
                <div v-if="params.column.colId == order.name && order.by === 'asc'"  :class="ascSort" class="customSortDownLabel"><span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" aria-hidden="true"><span class="ag-icon ag-icon-asc" unselectable="on"></span></span></i></div>
                <div v-if="params.column.colId == order.name && order.by === 'desc'" :class="descSort" class="customSortUpLabel"><span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" aria-hidden="true"><span class="ag-icon ag-icon-desc" unselectable="on"></span></span></div>

            </div>
        </div>
    `,
        data: function () {
            return {
                ascSort: null,
                descSort: null,
                noSort: null,

            };
        },
        computed:{
            order(){
                return this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER']
            },
        },
        mounted() {
        },
        methods: {
            onSortChanged() {
                let newOrder;
                if(this.params.column.colId == this.order.name){
                    switch (this.order.by) {
                        case 'asc': newOrder = 'desc';
                            break;
                        case 'desc':  newOrder = '';
                            break;
                        case '': newOrder = 'asc';
                    }
                } else{
                    newOrder = 'desc'
                }

                this.$store.commit('stockCaModule/SET_VARIABLE', {
                    name:'order',
                    value: {
                        by:newOrder,
                        name: this.params.column.colId,
                        searchBrand: this.order.searchBrand,
                        searchNumber: this.order.searchNumber,
                    }
                });
                this.$parent.$parent.$parent.getDataStockCa()
                // this.$emit('sortChanged')
            },

            onSortRequested(order, event) {
                // debugger
                // this.params.setSort(order, event.shiftKey);
            }
        }
    });


    export default {

        components: {
            AgGridVue,
            singlebundle,
            VxSidebarItem
        },

        data() {
            return {
                searchBrand: '',
                searchNumber: '',
                gridOptions: {},
                maxPageNumbers: 7,
                gridApi: null,
                defaultColDef: {
                    sortable: true,
                    editable: false,
                    resizable: true,
                    suppressMenu: true
                },
                frameworkComponents: null,
                columnDefs: null,
                contacts: contacts,
                context: null,
                timeout:null,
                isNoActive: false,
                groupItem: {},
                drop:'',
                qty_above: 10,
                qty_bello_min_stock: 1,
                bundels_only:1
        
            }
        },

        beforeMount() {
            // this.RELOAD();
            this.columnDefs = [
                {
                    width: 75,
                    checkboxSelection: true,
                    headerCheckboxSelectionFilteredOnly: true,
                    headerCheckboxSelection: true,
                    suppressMenu: true,
                    pinned: "left",
                },
                {
                    headerName: 'Brand',
                    field: 'brand_name',
                    // filter: true,
                    pinned: "left",
                    suppressMenu: true
                    // width: 175,
                },
                {
                    headerName: 'PartNumber',
                    field: 'part_number',
                    // filter: true,
                    pinned: "left",
                    suppressMenu: true
                    // width: 175,
                },
                {
                    headerName: 'Description',
                    field: 'description_english',
                    // filter: true,
                    pinned: "left",
                    suppressMenu: true
                    // width: 250,
                },
                {
                    headerName: 'Qty',
                    field: 'qty',
                    // filter: true,
                    suppressMenu: true
                    // width: 75,
                },
                {
                    headerName: 'Min Stock',
                    field: 'min_stock',
                    // filter: true,
                    suppressMenu: true
                    // width: 150,
                },
                {
                    headerName: 'List price',
                    field: 'price',
                    // filter: true,
                    suppressMenu: true
                    // width: 100,
                },
                {
                    headerName: 'Min price',
                    field: 'min_price',
                    // filter: true,
                    suppressMenu: true
                    // width: 100,
                },
                {
                    headerName: 'Max price',
                    field: 'max_price',
                    // filter: true,
                    suppressMenu: true
                    // width: 125,
                },
                {
                    headerName: 'Last Modified',
                    field: 'updated_at',
                    // filter: true,
                    suppressMenu: true
                    // width: 250,
                },
                // {
                //     headerName: 'Location',
                //     field: 'location',
                //     // filter: true,
                //     suppressMenu: true,
                //     width: 125,
                // },
                // {
                //     headerName: 'Categories',
                //     field: 'categories',
                //     // filter: true,
                //     suppressMenu: true,
                //     width: 125,
                // },
                // {
                //     headerName: 'Tags',
                //     field: 'tags',
                //     cellRenderer: "test",
                //     suppressMenu: true,
                //     width: 125,
                // },
            ];

            this.context = {componentParent: this};

            this.frameworkComponents = {
                test: SquareComponent,
                agColumnHeader: CustomHeader
            }

        },
        computed: {
            getDataStock() {
                return JSON.parse(JSON.stringify(this.$store.getters['stockCaModule/GET_STOCK_DATA']));
            },
            getData() {
                const store = this.getDataStock;
                return store  && store.data? store.data.map(i => {
                    // debugger
                    i.price = (Number(i.price) || 0 ).toFixed(2);
                    return i
                }) : []
            },

            totalPages() {
                const store = this.getDataStock;
                return store.length ? store.last_page : 1
            },

            order(){
                return this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER']
            },

            currentPage: {
                get() {
                    const store = this.getDataStock;
                    return store ? store.current_page : 1
                },
                set(val) {
                    this.getDataStockCa(val)
                }
            }
        },
        methods: {
            updateSearchQuery() {
                clearTimeout(this.timeout);
                this.timeout = setTimeout( () => {
                    this.getDataStockCa(1);
                    clearTimeout(this.timeout)
                }, 300 )
            },

            getDataStockCa(val = null){
                this.$store.dispatch('stockCaModule/GET_DATA_STOCK_FROM_SERVER', {
                    page: !val ? this.currentPage : val,
                    searchBrand: this.order.searchBrand,
                    searchNumber: this.order.searchNumber,
                    orderName: this.order.name,
                    orderBy: this.order.by
                })
            },

            setOrder(e, type){
                this.$store.commit('stockCaModule/SET_VARIABLE', {
                    name:'order',
                    value: {
                        by:this.order.by,
                        name: this.order.name,
                        searchBrand:type == 'searchBrand' ? e : this.order.searchBrand,
                        searchNumber: type == 'searchNumber' ? e : this.order.searchNumber,
                    }
                });
            },

            test(e) {
                if (e.colDef.headerName === 'PartNumber') {
                    if (e.data.showTable) {
                        this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module: true, showTable: true});
                    } else {
                        this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {module: true, showTable: false});
                    }
                    e.data.action = 'update';
                    this.$store.dispatch("GET_EDIT_STORE", e.data)
                }
            },

            select() {

                let selectedNodes = this.gridApi ? this.gridApi.getSelectedNodes() : [];

                selectedNodes = selectedNodes.map(item => {
                    return {
                        brand_name: item.data.brand_name,
                        part_number: item.data.part_number
                    }
                });

                return [...selectedNodes];

            },

            getImage() {
                this.$store.commit('isNoActive', true);
                StockManagment.getImage()
                    .then(()=> this.$store.commit('isNoActive', false))
            },

             getQtyZero(){
                 this.drop="by quantity 0"
                StockManagment.getQtyZero(0)
                .then(response => {
                    this.$store.dispatch('stockCaModule/GET_DATA', response.data)
                })
                .catch(er => {
                    console.log(er)
                })
            },

            getQtyAbove(){
                this.drop="by quantity above 10"
                // StockManagment.getQtyFilter({
                //         qty_above: this.qty_above
                    
                // })
                StockManagment.getQtyAbove()
                .then(response => {
                    this.$store.dispatch('stockCaModule/GET_DATA_ABOVE', response.data)
                console.log(response.data)
                })
                .catch(er => {
                    console.log(er)
                })
            },
            getQtyBellowMinStock(){
                this.drop="by quantity bellow min stock"
                // StockManagment.getQtyFilter({
                // qty_bello_min_stock:this.qty_bello_min_stock})
                StockManagment.getQtyBellowMinStock()
                .then(response => {
                    this.$store.dispatch('stockCaModule/GET_DATA_BELLOW', response.data)
                console.log(response.data)
                })
                .catch(er => {
                    console.log(er)
                })
            },
            getBundelsOnly(){
            this.drop="by bundels only"
            // StockManagment.getQtyFilter({
            //     bundels_only:this.bundels_only
            // })
            StockManagment.getBundelsOnly()
                .then(response => {
                    this.$store.dispatch('stockCaModule/GET_DATA_BUNDELS', response.data)
                console.log(response.data)
                })
                .catch(er => {
                    console.log(er)
                })
            },
            getWithoutFilters(){
                this.drop = ''
                this.updateSearchQuery()
                console.log(this.getData)
            }

        },
        mounted() {
            this.gridApi = this.gridOptions.api;
            console.log(this.getDataStock)
        }
    }

</script>
<style scope>
    .ag-header-cell-label {
        justify-content: center !important;
    }

    .ag-header-cell {
        padding: 0 !important;
    }

    .ag-header-cell:first-child {
        padding: 0 24px !important;
    }

    .ag-theme-material .ag-cell {
        line-height: 0 !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }.customHeaderMenuButton {
         float: left;
         margin: 0 0 0 3px;
     }

    .customHeaderLabel {
        float: left;
        margin: 0 0 0 3px;
    }

    .customSortDownLabel {
        float: left;
        margin: 0 0 0 3px;
    }

    .customSortUpLabel {
        float: left;
        margin: 0;
    }

    .customSortRemoveLabel {
        float: left;
        margin: 0 0 0 3px;
        font-size: 11px;
    }

    .active {
        color: cornflowerblue;
    }
    .ag-theme-material .ag-icon-checkbox-checked{
        color: white;
    }
    #content-area.content-area-reduced{
        margin-left: 40px;
    }
    .ag-theme-material .ag-ltr .ag-cell[col-id="description_english"]{
        /* width: 200px; */
        justify-content: flex-start;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
    }
    #app{
        height: calc(100% - 3.5rem);
     }
    .content-wrapper{
        height: calc(100% - 3.5rem);
    }
    .router-view,.router-content, .vx-card__body,.content-area__content{
        height: 100%!important;
    }
    .router-content{
        margin-top: 3em!important;
    }
    .examplex{
        font-size: 18px;
    }
</style>
