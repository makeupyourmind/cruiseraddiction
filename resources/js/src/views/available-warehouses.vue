<template>
  <div id="ag-grid-demo">
    <div></div>
    <vx-card>
      <div class="nav">
        <vs-button @click="create()">create</vs-button>
        <vs-pagination style="margin-right: 20px" :total="totalPages" v-model="currentPage" />
      </div>
      <ag-grid-vue
        ref="test"
        :gridOptions="gridOptions"
        class="ag-theme-material w-100 my-4 ag-grid-table"
        :autoGroupColumnDef="autoGroupColumnDef"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="dataPaginate.data"
        colResizeDefault="shift"
        :floatingFilter="true"
        rowSelection="multiple"
        @cellClicked="test($event)"
        :context="context"
      ></ag-grid-vue>
    </vx-card>
    <vs-prompt

            color="danger"
            @cancel="valueWarehouse={}"
            @vs-accept="acceptAlert"
            @close="modal = false"
            :vs-is-valid="validName"
            :vs-active.sync="modal">
      <div class="con-exemple-prompt" style="width: 200px;">
        <vs-checkbox v-model="valueWarehouse.isAvailable">Available</vs-checkbox><br>
        <vs-input style="width: 100%" placeholder="warehouse" v-model="valueWarehouse.warehouse"/><br>
        <div v-if="!validName" color="danger"
             style="color: #f54758;box-shadow: 0 0 25px 0 rgba(233,76,94,0.15);background: rgba(233,76,94,0.15); padding: 10px; width: 100%"
             icon="new_releases" >
          Fields can not be empty please enter the data
        </div>
      </div>
    </vs-prompt>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import { mapGetters } from "vuex";
import { AvailableWarehouses } from "../api/available_warehouses";
import singlewarehouse from "../components/SingleWarehouse/singleWarehouse";
import test from "../components/SingleWarehouse/cellRenderer";
import WarehouseCellRendererActions from "../components/warehouse-action/WarehouseCellRendererActions";

export default {
  components: { AgGridVue, singlewarehouse },
  data() {
    return {
      gridOptions: {},
      columnDefs: null,
      autoGroupColumnDef: null,
      rowData: null,
      context: null,
      gridApi: null,
      currentPage: 1,
      defaultColDef: {
        sortable: true,
        editable: false,
        resizable: true,
        suppressMenu: true
      },
      components: null,
      timeout: null,
      modal: false,
      valueWarehouse:{},
      frameworkComponents: null
    };
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "Id",
        field: "id",
        suppressMenu: true,
        // width: 100
      },
      {
        headerName: "Warehouse",
        field: "warehouse",
        suppressMenu: true,
        // width: 100
      },
      {
        headerName: "isAvailable",
        field: "isAvailable",
        suppressMenu: true,
        // width: 100
      },
      // {
      //   // width: 75,
      //   pinned: "left",
      //   suppressMenu: true,
      //   headerCheckboxSelection: true,
      //   headerCheckboxSelectionFilteredOnly: true,
      //   checkboxSelection: true
      // },
      {
        headerName: "Created",
        field: "created_at",
        // pinned: "left",
        suppressMenu: true,
        // width: 100
      },
      {
        headerName: "Updated",
        field: "updated_at",
        // pinned: "left",
        suppressMenu: true,
        // width: 100
      },
      {
        headerName: 'Actions',
        field: 'transactions',
        width: 150,
        cellRendererFramework: 'warehouse-cell-renderer-actions',
      },
    ];
    this.autoGroupColumnDef = {
      headerName: "D",
      field: "d",
      minWidth: 150,
      cellRendererParams: {
        checkbox: true
      }
    };
    this.context = { componentParent: this };
  },
  computed: {
    ...mapGetters({
      dataPaginate: "AVAILABLE_WAREHOUSES"
    }),
    totalPages() {
      return Object.keys(this.dataPaginate).length > 0
        ? this.dataPaginate.last_page
        : 1;
    },
    validName(){
      return !!(this.valueWarehouse && this.valueWarehouse.warehouse)
    }
  },
  created() {
    this.fetchWarehouses();
  },
  methods: {
    create(){
      this.valueWarehouse = {};
      this.modal = true;
    },
    acceptAlert(){
      this.$store.commit('isNoActive', true);
      AvailableWarehouses.createWarehouse(this.valueWarehouse)
        .then(()   => this.$store.dispatch("GET_ALL_AVAILABLE_WAREHOUSES"))
        .then(() => {
          this.valueWarehouse = {};
          this.modal = false;
          this.$store.commit('isNoActive', false);
        })
        .catch(() => {
          this.$vs.notify({
            color: 'error',
            title: 'Error warehouse Deleted',
            text: 'The selected warehouse was wrong create'
          })
          this.$store.commit('isNoActive', false);
        })
    },
    fetchWarehouses() {
      this.$store.commit('isNoActive', true);
      this.$store.dispatch("GET_ALL_AVAILABLE_WAREHOUSES")
      .then(() => this.$store.commit('isNoActive', false))
      .catch(() => this.$store.commit('isNoActive', false))
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
  mounted() {
    this.gridApi = this.gridOptions.api;
  }
};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  width: 55%;
}
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
}
.customHeaderMenuButton {
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

.ag-header-row:last-child {
  display: none;
}
.ag-header {
  min-height: 50px !important;
  height: 50px !important;
}
.ag-theme-material .ag-icon-checkbox-checked {
  color: white;
}
#content-area.content-area-reduced {
  margin-left: 40px;
}
.ag-theme-material .ag-ltr .ag-cell[col-id="description_english"] {
  /* width: 200px; */
  justify-content: flex-start;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
}
#app {
  height: calc(100% - 3.5rem);
}
.content-wrapper {
  height: calc(100% - 3.5rem);
}
.router-view,
.router-content,
.vx-card__body,
.content-area__content {
  height: 100% !important;
}
#ag-grid-demo,
.vx-card,
.vx-card__collapsible-content,
.ag-grid-table {
  height: 96% !important;
}
.router-content {
  margin-top: 3em !important;
}
</style>

