<template>
    <div id="ag-grid-demo">
        <vx-card>
            <div>
                <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
                <!--<div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">-->
                    <!--<vs-pagination-->
                            <!--style="margin-right: 20px"-->
                            <!--:total="totalPages"-->
                            <!--:max="7"-->
                            <!--v-model="currentPage"-->
                    <!--/>-->
                    <!--<vs-input class="mb-4 md:mb-0 mr-4" :value="order.searchBrand"-->
                              <!--@input="setOrder($event, 'searchBrand')"-->
                              <!--@change="updateSearchQuery"-->
                              <!--placeholder="Search brand"/>-->
                    <!--<vs-input class="mb-4 md:mb-0 mr-4"-->
                              <!--@input="setOrder($event, 'searchNumber')"-->
                              <!--:value="order.searchNumber"-->
                              <!--@change="updateSearchQuery"-->
                              <!--placeholder="Search part number"/>-->
                    <!--&lt;!&ndash;                    <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button>&ndash;&gt;-->
                <!--</div>-->
            </div>
            <vs-pagination
                    style="margin-right: 20px"
                    :total="totalPages"
                    v-model="currentPage"
            />
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
    import {Feedback} from "../api/feedback";

    export default {

        components: {
            AgGridVue,
            singlebundle,
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
                data:[],
                dataPaginate: {}
            }
        },

        beforeMount() {
            this.columnDefs = [
                {
                    headerName: 'Comment',
                    field: 'comment',
                    // filter: true,
                    suppressMenu: true,
                    width: 500
                },
                {
                    headerName: 'Created',
                    field: 'created_at',
                    // filter: true,
                    pinned: "left",
                    suppressMenu: true
                    // width: 250,
                },
                {
                    headerName: 'Order id',
                    field: 'order_id',
                    // filter: true,
                    suppressMenu: true
                    // width: 75,
                },
                {
                    headerName: 'Rate',
                    field: 'rate',
                    // filter: true,
                    suppressMenu: true
                    // width: 150,
                },
                {
                    headerName: 'Recommend',
                    field: 'recommend',
                    // filter: true,
                    suppressMenu: true
                    // width: 100,
                },
                {
                    headerName: 'Understanding',
                    field: 'understanding',
                    // filter: true,
                    suppressMenu: true
                    // width: 100,
                }
            ];

            this.context = {componentParent: this};


        },
        computed: {

            currentPage: {
                get() {
                    return this.dataPaginate ? this.dataPaginate.current_page : 1
                },
                set(val) {
                    this.getReviews(val)
                }
            },

            getData(){
                return this.dataPaginate ? this.dataPaginate.data : []
            },

            totalPages() {
                return this.dataPaginate.length ? this.dataPaginate.last_page : 1
            },

        },
        methods: {
            getReviews(page){
                Feedback.get(page)
                    .then(res => {
                        this.dataPaginate = res.body
                    })
            }
        },
        mounted() {
            // this.currentPage = 1;
            // this.getReviews()
        },
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
</style>
