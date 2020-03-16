
<template>

  <div id="page-user-list">
    <div class="vx-card p-6">
      <div class="flex flex-wrap items-center">

        <div class="flex-grow">
          <vs-dropdown vs-trigger-click 
                        class="cursor-pointer">
            <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
              <span class="mr-2">{{pageNavigation()}}</span>
              <feather-icon icon="ChevronDownIcon" 
                            svgClasses="h-4 w-4" />
            </div>
      
            <vs-dropdown-menu>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(10)">
                <span>10</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                <span>20</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(25)">
                <span>25</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(30)">
                <span>30</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
      </div>

      <ag-grid-vue
        ref="agGridTable"
        :components="components"
        :gridOptions="gridOptions"
        class="ag-theme-material w-100 my-4 ag-grid-table"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="usersData"
        rowSelection="multiple"
        colResizeDefault="shift"
        :animateRows="true"
        :floatingFilter="true"
        :pagination="true"
        :paginationPageSize="paginationPageSize"
        :suppressPaginationPanel="true"
        :enableRtl="$vs.rtl">
      </ag-grid-vue>

      <vs-pagination
        :total="totalPages"
        :max="10"
        v-model="currentPage" />

    </div>
  </div>

</template>

<script>
import { AgGridVue } from "ag-grid-vue"
import '@sass/vuesax/extraComponents/agGridStyleOverride.scss'
import vSelect from 'vue-select'
// // Store Module
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'
import {CalledUsers} from "../api/calledUsers";
// Cell Renderer
import CellRendererStatus from "../components/cell-renderer/CellRendererStatus.vue"
import CellRendererVerified from "../components/cell-renderer/CellRendererVerified.vue"
import CellRendererActions from "../components/cell-renderer/CellRendererActions.vue"

export default {
  components: {
    AgGridVue,
    vSelect,

    // Cell Renderer
    CellRendererStatus,
    CellRendererVerified,
    CellRendererActions,
  },
  data() {
    return {

      arrayUsers:[], 

      // AgGrid
      gridApi: null,
      gridOptions: {},
      defaultColDef: {
        sortable: true,
        resizable: true,
        suppressMenu: true
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
          cellRendererFramework: 'CellRendererVerified',
          cellClass: "text-center"
        },
        {
          headerName: 'Actions',
          field: 'transactions',
          width: 150,
          cellRendererFramework: 'CellRendererActions',
        },

      ],

      // Cell Renderer Components
      components: {
        CellRendererStatus,
        CellRendererVerified,
        CellRendererActions,
      }
    }
  },
  watch: {


  },



  computed: {
    usersData() {
      return this.arrayUsers;
    },
    paginationPageSize() {
      return this.gridApi ? this.gridApi.paginationGetPageSize() :  10;
    },
    totalPages() {
      return this.gridApi ? this.gridApi.paginationGetTotalPages() :  0;  
    },
    currentPage: {
      get() {
        return this.gridApi ? this.gridApi.paginationGetCurrentPage() :  1;   
      },
      set(val) {
        this.gridApi.paginationGoToPage(val - 1)
      }
    }
  },
  methods: {
    pageNavigation(){
      return `${ this.currentPage * this.paginationPageSize - (this.paginationPageSize ) }" - "
      ${this.usersData.length - this.currentPage * this.paginationPageSize > 0 ? this.currentPage * this.paginationPageSize : this.usersData.length } "of" 
      ${ this.usersData.length}`
    },
    async selectUsers(){
      CalledUsers.getUser()
        .then((response)=> {
          let data = response.data.data.data;
          data.forEach((element, iterator) => {
           try{
              element.phone = JSON.parse(element.phone).phoneNumber;
              element.role = element.roles["0"].name;  
            } catch(e) {} 
            this.arrayUsers = data;
        }) 
      })   
    },
    setColumnFilter(column, val) {
      const filter = this.gridApi.getFilterInstance(column)
      let modelObj = null

      if(val !== "all") {
        modelObj = { type: "equals", filter: val }
      }

      filter.setModel(modelObj)
      this.gridApi.onFilterChanged()
    },
    resetColFilters() {
      // Reset Grid Filter
      this.gridApi.setFilterModel(null)
      this.gridApi.onFilterChanged()

      this.$refs.filterCard.removeRefreshAnimation()
    },
    updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val)
    }
  },
  mounted() {
    this.gridApi = this.gridOptions.api

    if(this.$vs.rtl) {
      const header = this.$refs.agGridTable.$el.querySelector(".ag-header-container")
      header.style.left = "-" + String(Number(header.style.transform.slice(11,-3)) + 9) + "px"
    }
    this.selectUsers();
  },
  created() {
    if(!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    }
  }
}

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
