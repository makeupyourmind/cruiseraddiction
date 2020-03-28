<template>
  <div id="ag-grid-demo">
    <div></div>
    <vx-card>
      <div class="nav">
        <singlewarehouse :select="select"></singlewarehouse>
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
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import { mapGetters } from "vuex";
import { AvailableWarehouses } from "../api/available_warehouses";
import singlewarehouse from "../components/SingleWarehouse/singleWarehouse";
import test from "../components/SingleWarehouse/cellRenderer";

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
      timeout: null,
      frameworkComponents: null
    };
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "Id",
        field: "id",
        suppressMenu: true,
        width: 500
      },
      {
        headerName: "Warehouse",
        field: "warehouse",
        suppressMenu: true,
        width: 500
      },
      {
        headerName: "isAvailable",
        field: "isAvailable",
        suppressMenu: true,
        width: 500
      },
      {
        width: 75,
        pinned: "left",
        suppressMenu: true,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      {
        headerName: "Created",
        field: "created_at",
        pinned: "left",
        suppressMenu: true,
        width: 250
      },
      {
        headerName: "Updated",
        field: "updated_at",
        pinned: "left",
        suppressMenu: true,
        width: 250
      }
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
    }
  },
  created() {
    this.fetchWarehouses();
  },
  methods: {
    fetchWarehouses() {
      this.$store.dispatch("GET_ALL_AVAILABLE_WAREHOUSES");
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

