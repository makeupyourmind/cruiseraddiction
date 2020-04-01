<template>
    <div>
        <div></div>
<!--        <vx-card>-->
<!--            <div class="nav">-->
<!--                <vs-pagination-->
<!--                        :total="totalPages"-->
<!--                        :max="10"-->
<!--                        v-model="currentPage" />-->
<!--            </div>-->
            <ag-grid-vue
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material w-100 my-4 ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="dataPaginate.data"
                    rowSelection="multiple"
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
            ></ag-grid-vue>
<!--        </vx-card>-->
    </div>
</template>

<script>
    import { AgGridVue } from "ag-grid-vue";
    import vSelect from 'vue-select';
    import Vue from 'vue'
    import {CalledUsers} from "../api/calledUsers";
    import CellRendererStatus from "../components/cell-renderer/CellRendererStatus";
    import CellRendererVerified from "../components/cell-renderer/CellRendererVerified";
    import CellRendererActions from "../components/cell-renderer/CellRendererActions";
    Vue.component('cell-renderer-status',CellRendererStatus);
    Vue.component('cell-renderer-verified',CellRendererVerified);
    Vue.component('cell-renderer-actions',CellRendererActions);
    export default {
        components: {
            AgGridVue,
            vSelect,

        },
        data() {
            return {
                gridApi: null,
                gridOptions: {},
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    suppressMenu: true
                },
                dataPaginate: {
                    data: []
                },
                columnDefs: [
                    {
                        headerName: 'ID',
                        field: 'id',
                        width: 125,
                        filter: true,
                        checkboxSelection: true,
                        headerCheckboxSelectionFilteredOnly: true,
                        headerCheckboxSelection: true,
                    },
                    {
                        headerName: 'Username',
                        field: 'last_name',
                        filter: true,
                        width: 210,
                    },
                    {
                        headerName: 'Name',
                        field: 'first_name',
                        filter: true,
                        width: 200,
                    },
                    {
                        headerName: 'Phone',
                        field: 'phone',
                        filter: true,
                        width: 200,
                    },
                    {
                        headerName: 'Email',
                        field: 'email',
                        filter: true,
                        width: 225,
                    },
                    {
                        headerName: 'Country',
                        field: 'country',
                        filter: true,
                        width: 150,
                    },
                    {
                        headerName: 'State',
                        field: 'state',
                        filter: true,
                        width: 150,
                    },
                    {
                        headerName: 'City',
                        field: 'city',
                        filter: true,
                        width: 150,
                    },
                    {
                        headerName: 'Street address',
                        field: 'street_address',
                        filter: true,
                        width: 180,
                    },
                    {
                        headerName: 'Role',
                        field: 'role',
                        filter: true,
                        width: 150,
                    },

                    {
                        headerName: 'Verified',
                        field: 'isVerified',
                        filter: true,
                        width: 125,
                        cellRendererFramework: 'cell-renderer-verified',
                        cellClass: "text-center"
                    },
                    {
                        headerName: 'Actions',
                        field: 'transactions',
                        width: 150,
                        cellRendererFramework: 'cell-renderer-actions',
                    },

                ],
                // Cell Renderer Components

            };
        },
        computed: {
            // ...mapGetters({
            //     dataPaginate: "AVAILABLE_WAREHOUSES"
            // }),
            totalPages() {
                return Object.keys(this.dataPaginate) > 0
                    ? typeof this.dataPaginate.last_page === 'number' ? this.dataPaginate.last_page : 1
                    : 1;
            },
            paginationPageSize() {
                return this.gridApi ? this.gridApi.paginationGetPageSize() :  10;
            },
            currentPage: {
                get() {
                    return this.gridApi ? this.gridApi.paginationGetCurrentPage() :  1;
                },
                set(val) {
                    this.gridApi && this.gridApi.paginationGoToPage(val - 1)
                }
            }
        },
        methods: {
            fetchWarehouses() {
                CalledUsers.getUser()
                    .then((response) => {
                        let data = response.data.data;
                        data.data = data.data.map((element, iterator) => {
                            try {
                                element.phone = JSON.parse(element.phone).phoneNumber;
                                element.role = element.roles[0].name;
                            } catch (e) {
                            }
                            return element
                        });
                        this.dataPaginate = data;

                    })
            },
            test(event) {
                if (event.colDef.headerName === "Updated") {
                    if (event.data.showTable) {
                        this.$store.dispatch("GET_SHOW_WAREHOUSE_SINGLE", {
                            module: true,
                            showTable: true
                        });
                    } else {
                        this.$store.dispatch("GET_SHOW_WAREHOUSE_SINGLE", {
                            module: true,
                            showTable: false
                        });
                    }
                }
            },
            select() {
                let selectedNodes = this.gridApi ? this.gridApi.getSelectedNodes() : [];
                selectedNodes = selectedNodes.map(item => item.data.id);
                return [...selectedNodes];
            }
        },
        // mounted() {
        mounted() {
            this.gridApi = this.gridOptions.api
// console.log(this)
            this.fetchWarehouses();
        }
    };
</script>

<style lang="scss" scoped>
    #page-user-list {
    .user-list-filters {
    .vs__actions {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-58%);
    }
    }
    }
    .close{
        display: none;
    }
    .ag-grid-table{
        min-height: 150px;
    }
    .ag-grid-table {
        height: 620px;
    }
    @media screen and (max-height: 800px){
        .ag-grid-table {
            min-height: 620px !important;
        }
    }
</style>

