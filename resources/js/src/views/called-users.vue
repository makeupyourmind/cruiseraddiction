<!-- =========================================================================================
  File Name: UserList.vue
  Description: User List page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>

  <div id="page-user-list">

        <!-- MULTIPLE COLUMNS-->
    <div class="vx-col w-full mb-base" v-bind:class="{close:activeAuth}">
      <vx-card title="Create user" code-toggler>
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="First Name" v-model="firstName" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="Last Name" v-model="lastName" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="EMAIL" v-model="EMAIL" />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="IH8MUD USERNAME" v-model="IH8MUD_USERNAME" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="STREET ADDRESS" v-model="streetAddress" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="STREET ADDRESS 2" v-model="streetAddressTwo" />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="CITY" v-model="city" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-6">
            <vs-input class="w-full" label-placeholder="STATE" v-model="state" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="FRAME NUMBER/VIN" v-model="vin" />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="PHONE" v-model="phone" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="MONTH AND YEAR OF PRODUCTION" v-model="monthAndYearOfProduction" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="ORIGINAL COUNTRY OF SALE" v-model="originalCountryOfSale" />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" label-placeholder="COUNTRY" v-model="country" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input type="password" class="w-full" label-placeholder="PASSWORD*" v-model="password" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input type="password" class="w-full" label-placeholder="CONFIRM PASSWORD*" v-model="confirmPassword" />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2">Save</vs-button>
          </div>
        </div>
      </vx-card>
    </div>

    <div class="vx-card p-6">
      <div class="flex flex-wrap items-center">

        <!-- ITEMS PER PAGE -->
        <div class="flex-grow">
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
              <span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ usersData.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : usersData.length }} of {{ usersData.length }}</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
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

        <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
          <vs-input class="sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
          <!-- <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button> -->

          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="cursor-pointer">

            <div class="p-3 shadow-drop rounded-lg d-theme-dark-light-bg cursor-pointer flex items-end justify-center text-lg font-medium w-32">
              <span class="mr-2 leading-none">Actions</span>
              <!-- <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" /> -->
            </div>

          </vs-dropdown>
      </div>


      <!-- AgGrid Table -->
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
// import '@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss'
import vSelect from 'vue-select'
import {baseURL} from "././../main"
// // Store Module
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'

// Cell Renderer
import CellRendererLink from "../components/cell-renderer/CellRendererLink.vue"
import CellRendererStatus from "../components/cell-renderer/CellRendererStatus.vue"
import CellRendererVerified from "../components/cell-renderer/CellRendererVerified.vue"
import CellRendererActions from "../components/cell-renderer/CellRendererActions.vue"

import axios from 'axios';

export default {
  components: {
    AgGridVue,
    vSelect,

    // Cell Renderer
    CellRendererLink,
    CellRendererStatus,
    CellRendererVerified,
    CellRendererActions,
  },
  data() {
    return {
      baseURL: http.options.root,

      firstName:'',
      lastName:'', 
      EMAIL:'', 
      IH8MUD_USERNAME:'', 
      streetAddress:'',  
      streetAddressTwo:'', 
      city:'', 
      state:'', 
      vin:'', 
      phone:'', 
      monthAndYearOfProduction:'', 
      originalCountryOfSale:'', 
      country:[],  
      password:'', 
      confirmPassword:'',

      activeAuth:true,


      usersData:[], 

      // Filter Options
      roleFilter: { label: 'All', value: 'all' },
      roleOptions: [
        { label: 'All', value: 'all' },
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Staff', value: 'staff' },
      ],

      statusFilter: { label: 'All', value: 'all' },
      statusOptions: [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Deactivated', value: 'deactivated' },
        { label: 'Blocked', value: 'blocked' },
      ],

      isVerifiedFilter: { label: 'All', value: 'all' },
      isVerifiedOptions: [
        { label: 'All', value: 'all' },
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],

      departmentFilter: { label: 'All', value: 'all' },
      departmentOptions: [
        { label: 'All', value: 'all' },
        { label: 'Sales', value: 'sales' },
        { label: 'Development', value: 'development' },
        { label: 'Management', value: 'management' },
      ],

      searchQuery: "",

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
          height: 125,
          filter: true,
        },
        {
          headerName: 'Username',
          field: 'last_name',
          filter: true,
          width: 210,
          // cellRendererFramework: 'CellRendererLink'
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
          field: 'roles[0].User',
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
          headerName: 'Department',
          field: 'department',
          filter: true,
          width: 150,
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
        CellRendererLink,
        CellRendererStatus,
        CellRendererVerified,
        CellRendererActions,
      }
    }
  },
  watch: {
    roleFilter(obj) {
      this.setColumnFilter("role", obj.value)
    },
    statusFilter(obj) {
      this.setColumnFilter("status", obj.value)
    },
    isVerifiedFilter(obj) {
      let val = obj.value === "all" ? "all" : obj.value == "yes" ? "true" : "false"
      this.setColumnFilter("is_verified", val)
    },
    departmentFilter(obj) {
      this.setColumnFilter("department", obj.value)
    },
  },

  


  computed: {
    usersData() {
      console.log(this.usersData);
      return this.usersData;
    },
    paginationPageSize() {
      if(this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 10
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
        this.gridApi.paginationGoToPage(val - 1)
      }
    }
  },
  methods: {

    selectUserData(){
      var token = localStorage.getItem('token');

      axios({
        method: 'get', // Or GET
        url: `${this.baseURL}api/superadmin`,
        headers: { 'Authorization': 'Bearer ' + token } // Cookies.get('Token')
      })
      .then(response => { 
        console.log(response.data); 
        console.log(response.data.data.data); 
        this.usersData =  response.data.data.data;
      });

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

      // Reset Filter Options
      this.roleFilter = this.statusFilter = this.isVerifiedFilter = this.departmentFilter = { label: 'All', value: 'all' }

      this.$refs.filterCard.removeRefreshAnimation()
    },
    updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val)
    }
  },
  mounted() {
    this.gridApi = this.gridOptions.api

    /* =================================================================
      NOTE:
      Header is not aligned properly in RTL version of agGrid table.
      However, we given fix to this issue. If you want more robust solution please contact them at gitHub
    ================================================================= */
    if(this.$vs.rtl) {
      const header = this.$refs.agGridTable.$el.querySelector(".ag-header-container")
      header.style.left = "-" + String(Number(header.style.transform.slice(11,-3)) + 9) + "px"
    }
    this.selectUserData();
  },
  created() {
    if(!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    }
    this.$store.dispatch("userManagement/fetchUsers").catch(err => { console.error(err) })
  }
}

</script>

<style lang="scss">
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

.ag-theme-material .ag-header-row{
  display: block !important;
}
.ag-header-row:last-child{
  display: block !important;
}
.ag-header{
  min-height: 130px !important;
}

</style>
