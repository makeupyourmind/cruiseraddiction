(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      showTable: false,
      checkBox1: [],
      activePrompt: false,
      partNum: "",
      description: "",
      descriptionFull: "",
      minStock: "",
      current: "",
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.30
      }
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.mailTo != '';
    }
  },
  methods: {
    clearFields: function clearFields() {
      this.mailTo = '';
      this.mailSubject = '';
      this.mailCC = '';
      this.mailBCC = '';
      this.mailMessage = '';
    },
    sendMail: function sendMail() {},
    createBundle: function createBundle() {
      this.activePrompt = true;
      this.showTable = true;
      console.log("create Bundle");
    },
    createSingle: function createSingle() {
      console.log("create Single");
    },
    deleteItem: function deleteItem() {
      console.log("delete item");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stockManagement.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/stockManagement.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ "./resources/js/src/views/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./resources/js/src/views/data.json", 1);
/* harmony import */ var _components_SingleBundle_singleBundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SingleBundle/singleBundle */ "./resources/js/src/components/SingleBundle/singleBundle.vue");
/* harmony import */ var _assets_scss_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/scss/agGridStyleOverride.scss */ "./resources/assets/scss/agGridStyleOverride.scss");
/* harmony import */ var _assets_scss_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // const VxTour = () => import('../components/VxTour.vue')



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"],
    singlebundle: _components_SingleBundle_singleBundle__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      //
      searchQuery: '',
      gridOptions: {},
      maxPageNumbers: 7,
      gridApi: null,
      defaultColDef: {
        sortable: true,
        editable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [{
        width: 75,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true
      }, {
        headerName: 'Brand',
        field: 'brand',
        filter: true,
        width: 175
      }, {
        headerName: 'PartNumber',
        field: 'part number',
        filter: true,
        width: 175
      }, {
        headerName: 'Description',
        field: 'description',
        filter: true,
        width: 250
      }, {
        headerName: 'Stores',
        field: 'stores',
        filter: true,
        width: 250
      }, {
        headerName: 'Qty',
        field: 'qty',
        filter: true,
        width: 50
      }, {
        headerName: 'Min Stock',
        field: 'min stock',
        filter: true,
        width: 150
      }, {
        headerName: 'List price',
        field: 'list price',
        filter: true,
        width: 100
      }, {
        headerName: 'Min price',
        field: 'min price',
        filter: true,
        width: 100
      }, {
        headerName: 'max price',
        field: 'max price',
        filter: true,
        width: 125
      }, {
        headerName: 'Last Modified',
        field: 'last modified',
        filter: true,
        width: 250
      }, {
        headerName: 'Location',
        field: 'location',
        filter: true,
        width: 125
      }],
      contacts: _data_json__WEBPACK_IMPORTED_MODULE_1__
    };
  },
  watch: {
    '$store.state.windowWidth': function $storeStateWindowWidth(val) {
      if (val <= 576) {
        this.maxPageNumbers = 4;
        this.gridOptions.columnApi.setColumnPinned('email', null);
      } else this.gridOptions.columnApi.setColumnPinned('email', 'left');
    }
  },
  computed: {
    paginationPageSize: function paginationPageSize() {
      if (this.gridApi) return this.gridApi.paginationGetPageSize();else return 50;
    },
    totalPages: function totalPages() {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages();else return 0;
    },
    currentPage: {
      get: function get() {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;else return 1;
      },
      set: function set(val) {
        this.gridApi.paginationGoToPage(val - 1);
      }
    }
  },
  methods: {
    updateSearchQuery: function updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val);
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/assets/scss/agGridStyleOverride.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./resources/assets/scss/agGridStyleOverride.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*=========================================================================================\n    File Name: agGridStyleOverride.scss\n    Description: Override ag-grid table style/SASS vars\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n    Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/**\n ****************************\n * Generic Styles\n ****************************\n*/\n\nag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia {\n  display: block;\n}\n\n.ag-hidden {\n  display: none !important;\n}\n\n.ag-invisible {\n  visibility: hidden !important;\n}\n\n.ag-faded {\n  opacity: 0.3;\n}\n\n.ag-width-half {\n  display: inline-block;\n  width: 50% !important;\n}\n\n.ag-unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n.ag-selectable {\n  -webkit-user-select: text !important;\n     -moz-user-select: text !important;\n      -ms-user-select: text !important;\n          user-select: text !important;\n}\n\n.ag-select-agg-func-popup {\n  position: absolute;\n}\n\n.ag-input-text-wrapper {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  line-height: normal;\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-shake-left-to-right {\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: ag-shake-left-to-right;\n          animation-name: ag-shake-left-to-right;\n}\n\n@-webkit-keyframes ag-shake-left-to-right {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@keyframes ag-shake-left-to-right {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n.ag-root-wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.ag-root-wrapper.ag-layout-normal {\n  height: 100%;\n}\n\n.ag-root-wrapper .ag-watermark {\n  position: absolute;\n  bottom: 10px;\n  right: 25px;\n  opacity: 0.5;\n  transition: opacity 1s ease-out 3s;\n}\n\n.ag-root-wrapper .ag-watermark:before {\n  content: \"\";\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDk0cHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCA0OTQgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLjYxMjg0OTkzMSwxMDggTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgQzAuNjEyODQ5OTMxLDYyLjEwMDY1MzYgMy40NzE4MzM3OCw1Ny4xNDg3NDgzIDguMTEyODQ5OTMsNTQuNDY5MjU2NCBMOTguMzA2NDI1LDIuMzk1OTcxNTcgTDk4LjMwNjQyNSwyLjM5NTk3MTU3IEMxMDIuOTQ3NDQxLC0wLjI4MzUyMDM1OCAxMDguNjY1NDA5LC0wLjI4MzUyMDM1OCAxMTMuMzA2NDI1LDIuMzk1OTcxNTcgTDExMy4zMDY0MjUsMi4zOTU5NzE1NyBMMjAzLjUsNTQuNDY5MjU2NCBMMjAzLjUsNTQuNDY5MjU2NCBDMjA4LjE0MTAxNiw1Ny4xNDg3NDgzIDIxMSw2Mi4xMDA2NTM2IDIxMSw2Ny40NTk2Mzc0IEwyMTEsMTM4IEwxODEsMTM4IEwxODAuOTk3MDQxLDkzLjk5OTk5OTggTDE4MC45OTYwMzIsOTMuOTk5OTk5OSBDMTgwLjk5NTQ3NSw4NS43MTYxMjI2IDE3NC4yNzk5MDksNzkuMDAxMDA4NyAxNjUuOTk2MDMyLDc5LjAwMTAwODcgTDEyMiw3OC45OTk5OTk5IEMxMTMuNzE1NzI5LDc4Ljk5OTk5OTkgMTA3LDg1LjcxNTcyODYgMTA3LDkzLjk5OTk5OTkgTDEwNywxMzYuMDE1NjIzIEwxMDcsMTM2LjAxNTYyMyBDMTA3LDE0NC4yOTk4OTUgMTEzLjcxNTcyOSwxNTEuMDE1NjIzIDEyMiwxNTEuMDE1NjIzIEwxNjgsMTUxLjAxNTYyMyBMMTY4LDE2MyBDMTY4LDE2NC42NTY4NTQgMTY2LjY1Njg1NCwxNjYgMTY1LDE2NiBMMTIwLDE2NiBMMTIwLDE3OSBMMTY1Ljk5NjAzMiwxNzkgTDE2NS45OTYwMzIsMTc4Ljk5Nzg3NyBDMTc0LjI3OTQ3NCwxNzguOTk3ODc3IDE4MC45OTQ4NiwxNzIuMjgzNDQyIDE4MC45OTYwMzIsMTY0IEwxODEsMTUwLjk2MDU1NCBMMjExLDE1MC45NjA1NTQgTDIxMSwxNzEuNjA2MjA3IEwyMTEsMTcxLjYwNjIwNyBDMjExLDE3Ni45NjUxOTEgMjA4LjE0MTAxNiwxODEuOTE3MDk2IDIwMy41LDE4NC41OTY1ODggTDExMy4zMDY0MjUsMjM2LjY2OTg3MyBMMTEzLjMwNjQyNSwyMzYuNjY5ODczIEMxMDguNjY1NDA5LDIzOS4zNDkzNjUgMTAyLjk0NzQ0MSwyMzkuMzQ5MzY1IDk4LjMwNjQyNSwyMzYuNjY5ODczIEw4LjExMjg0OTkzLDE4NC41OTY1ODggTDguMTEyODQ5OTMsMTg0LjU5NjU4OCBDMy40NzE4MzM3OCwxODEuOTE3MDk2IDAuNjEyODQ5OTMxLDE3Ni45NjUxOTEgMC42MTI4NDk5MzEsMTcxLjYwNjIwNyBMMC42MTI4NDk5MzEsMTIxIEwyNywxMjEgTDI3LDEzNiBDMjcsMTQ0LjI4NDI3MSAzMy43MTU3Mjg3LDE1MSA0MiwxNTEgTDQyLDE1MSBMMTAwLDE1MSBMMTAwLDk0IEMxMDAsODUuNzE1NzI4OCA5My4yODQyNzEyLDc5IDg1LDc5IEwyNyw3OSBMMjcsOTIgTDg0LDkyIEM4NS42NTY4NTQyLDkyIDg3LDkzLjM0MzE0NTggODcsOTUgTDg3LDk1IEw4NywxMDggTDAuNjEyODQ5OTMxLDEwOCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxvZ28iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDc3LDU1IEw0OTQsNTUgTDQ5NCwxNTEgTDQzNSwxNTEgQzQyNi43MTU3MjksMTUxIDQyMCwxNDQuMjg0MjcxIDQyMCwxMzYgTDQyMCw5NiBDNDIwLDg3LjcxNTcyODggNDI2LjcxNTcyOSw4MSA0MzUsODEgTDQzNSw4MSBMNDc3LDgxIEw0NzcsNTUgWiBNNDQwLDk4IEM0MzguMzQzMTQ2LDk4IDQzNyw5OS4zNDMxNDU4IDQzNywxMDEgTDQzNywxMzEgQzQzNywxMzIuNjU2ODU0IDQzOC4zNDMxNDYsMTM0IDQ0MCwxMzQgTDQ3NywxMzQgTDQ3Nyw5OCBMNDQwLDk4IFoiIGlkPSJkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTYuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCAyNiAxNyAyNiAxNyA5NiAwIDk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBmaWxsPSIjRTExRjIyIiBwb2ludHM9IjAgMS4xMzY4NjgzOGUtMTMgMTcgMS4xMzY4NjgzOGUtMTMgMTcgMTcgMCAxNyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzEsMTUxIEwzNDgsMTUxIEwzNDgsMTAxIEwzNDgsMTAxIEMzNDgsOTkuMzQzMTQ1OCAzNDkuMzQzMTQ2LDk4IDM1MSw5OCBMMzg5LDk4IEwzODksODEgTDM0Niw4MSBMMzQ2LDgxIEMzMzcuNzE1NzI5LDgxIDMzMSw4Ny43MTU3Mjg4IDMzMSw5NiBMMzMxLDE1MSBaIiBpZD0iciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzI0LDg2IEwzMjQsNzYgTDMyNCw3NiBDMzI0LDY3LjcxNTcyODggMzE3LjI4NDI3MSw2MSAzMDksNjEgTDI0OSw2MSBMMjQ5LDYxIEMyNDAuNzE1NzI5LDYxIDIzNCw2Ny43MTU3Mjg4IDIzNCw3NiBMMjM0LDEzNiBMMjM0LDEzNiBDMjM0LDE0NC4yODQyNzEgMjQwLjcxNTcyOSwxNTEgMjQ5LDE1MSBMMzA5LDE1MSBMMzA5LDE1MSBDMzE3LjI4NDI3MSwxNTEgMzI0LDE0NC4yODQyNzEgMzI0LDEzNiBMMzI0LDEwMCBMMjg3LDEwMCBMMjg3LDExNyBMMzA3LDExNyBMMzA3LDEzMSBMMzA3LDEzMSBDMzA3LDEzMi42NTY4NTQgMzA1LjY1Njg1NCwxMzQgMzA0LDEzNCBMMjU0LDEzNCBMMjU0LDEzNCBDMjUyLjM0MzE0NiwxMzQgMjUxLDEzMi42NTY4NTQgMjUxLDEzMSBMMjUxLDgxIEwyNTEsODEgQzI1MSw3OS4zNDMxNDU4IDI1Mi4zNDMxNDYsNzggMjU0LDc4IEwzMDQsNzggTDMwNCw3OCBDMzA1LjY1Njg1NCw3OCAzMDcsNzkuMzQzMTQ1OCAzMDcsODEgTDMwNyw4NiBMMzI0LDg2IFoiIGlkPSJHIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJhZyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTExRjIyIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJnIiBmaWxsPSIjRTExRjIyIiB4PSIxMjAiIHk9IjkyIiB3aWR0aD0iNDgiIGhlaWdodD0iNDYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAsMTIxIEw4NywxMjEgTDg3LDEzOCBMNDMsMTM4IEw0MywxMzggQzQxLjM0MzE0NTgsMTM4IDQwLDEzNi42NTY4NTQgNDAsMTM1IEw0MCwxMjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTExRjIyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\n  -webkit-filter: invert(50%);\n          filter: invert(50%);\n  background-repeat: no-repeat;\n  background-size: 110px 60px;\n  display: block;\n  height: 60px;\n  width: 110px;\n}\n\n.ag-root-wrapper .ag-watermark .ag-watermark-text {\n  opacity: 0.5;\n  font-weight: bold;\n  font-family: Impact;\n  font-size: 19px;\n}\n\n.ag-root-wrapper-body {\n  display: flex;\n  flex-direction: row;\n}\n\n.ag-root-wrapper-body.ag-layout-normal {\n  flex: 1 1 auto;\n  height: 0;\n  min-height: 0;\n}\n\n.ag-root {\n  cursor: default;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height {\n  overflow: hidden;\n  flex: 1 1 auto;\n  width: 0;\n}\n\n.ag-root.ag-layout-normal {\n  height: 100%;\n}\n\n/**\n ****************************\n * Viewports\n ****************************\n*/\n\n.ag-header-viewport,\n.ag-floating-top-viewport,\n.ag-body-viewport,\n.ag-pinned-left-cols-viewport,\n.ag-center-cols-viewport,\n.ag-pinned-right-cols-viewport,\n.ag-floating-bottom-viewport,\n.ag-body-horizontal-scroll-viewport,\n.ag-virtual-list-viewport {\n  position: relative;\n  height: 100%;\n  min-width: 0px;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n\n.ag-body-viewport {\n  display: flex;\n}\n\n.ag-body-viewport.ag-layout-normal {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.ag-body-viewport:not(.ag-layout-print).ag-force-vertical-scroll {\n  overflow-y: scroll;\n}\n\n.ag-pinned-left-cols-viewport, .ag-pinned-right-cols-viewport {\n  flex-grow: 1000;\n}\n\n.ag-center-cols-viewport {\n  width: 100%;\n  overflow-x: auto;\n}\n\n.ag-body-horizontal-scroll-viewport {\n  overflow-x: scroll;\n}\n\n.ag-virtual-list-viewport {\n  overflow: auto;\n  width: 100%;\n}\n\n/**\n ****************************\n * Containers\n ****************************\n*/\n\n.ag-header-container,\n.ag-floating-top-container,\n.ag-body-container,\n.ag-pinned-right-cols-container,\n.ag-center-cols-container,\n.ag-pinned-left-cols-container,\n.ag-floating-bottom-container,\n.ag-body-horizontal-scroll-container,\n.ag-full-width-container,\n.ag-floating-bottom-full-width-container,\n.ag-virtual-list-container {\n  position: relative;\n}\n\n.ag-header-container, .ag-floating-top-container, .ag-floating-bottom-container {\n  height: 100%;\n  white-space: nowrap;\n}\n\n.ag-body-viewport .ag-center-cols-clipper {\n  min-height: 100%;\n}\n\n.ag-body-viewport.ag-layout-auto-height .ag-center-cols-clipper, .ag-body-viewport.ag-layout-auto-height .ag-center-cols-container {\n  min-height: 50px;\n}\n\n.ag-body-viewport .ag-center-cols-container {\n  display: block;\n}\n\n.ag-body-viewport.ag-layout-print {\n  flex: none;\n}\n\n.ag-body-viewport.ag-layout-print .ag-center-cols-clipper {\n  min-width: 100%;\n}\n\n.ag-pinned-right-cols-container {\n  display: block;\n}\n\n.ag-body-horizontal-scroll-container {\n  height: 100%;\n}\n\n.ag-full-width-container,\n.ag-floating-top-full-width-container,\n.ag-floating-bottom-full-width-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  pointer-events: none;\n}\n\n.ag-full-width-container {\n  width: 100%;\n}\n\n.ag-floating-bottom-full-width-container, .ag-floating-top-full-width-container {\n  display: inline-block;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n\n.ag-virtual-list-container {\n  overflow: hidden;\n}\n\n/**\n ****************************\n * Scrollers\n ****************************\n*/\n\n.ag-center-cols-clipper {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.ag-body-horizontal-scroll {\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n  display: flex;\n  position: relative;\n}\n\n.ag-layout-print .ag-body-horizontal-scroll {\n  display: none;\n}\n\n.ag-horizontal-left-spacer, .ag-horizontal-right-spacer {\n  height: 100%;\n  min-width: 0;\n  flex-grow: 1000;\n  overflow-x: scroll;\n}\n\n.ag-horizontal-left-spacer.ag-scroller-corner, .ag-horizontal-right-spacer.ag-scroller-corner {\n  overflow-x: hidden;\n}\n\n/**\n ****************************\n * Headers\n ****************************\n*/\n\n.ag-header, .ag-pinned-left-header, .ag-pinned-right-header {\n  display: inline-block;\n  overflow: hidden;\n}\n\n.ag-header .ag-header-cell-sortable, .ag-pinned-left-header .ag-header-cell-sortable, .ag-pinned-right-header .ag-header-cell-sortable {\n  cursor: pointer;\n}\n\n.ag-header {\n  display: flex;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.ag-header-icon {\n  display: flex;\n}\n\n.ag-pinned-left-header {\n  height: 100%;\n}\n\n.ag-pinned-right-header {\n  height: 100%;\n}\n\n.ag-header-row {\n  position: absolute;\n  overflow: hidden;\n}\n\n.ag-header-overlay {\n  display: block;\n  position: absolute;\n}\n\n.ag-header-cell {\n  display: inline-flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  overflow: hidden;\n  line-height: 1.5;\n}\n\n.ag-header-group-cell-label, .ag-header-cell-label {\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n  align-items: center;\n  text-overflow: ellipsis;\n  height: 100%;\n}\n\n.ag-header-cell-label .ag-header-cell-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-numeric-header .ag-header-cell-label {\n  flex-direction: row-reverse;\n}\n\n.ag-header-group-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-header-cell-resize {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 4px;\n}\n\n.ag-header-expand-icon {\n  padding-left: 4px;\n}\n\n.ag-header-select-all {\n  display: flex;\n  line-height: 1;\n}\n\n/**\n ****************************\n * Columns\n ****************************\n*/\n\n.ag-column-moving .ag-cell {\n  transition: left 0.2s;\n}\n\n.ag-column-moving .ag-header-cell {\n  transition: left 0.2s;\n}\n\n.ag-column-moving .ag-header-group-cell {\n  transition: left 0.2s, width 0.2s;\n}\n\n/**\n ****************************\n * Column Panel\n ****************************\n*/\n\n.ag-column-panel {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n\n.ag-column-select-panel {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex-grow: 4;\n  flex-shrink: 1;\n  flex-basis: 0;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel {\n  display: flex;\n  flex: none;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-column-name-filter {\n  flex: 1 1 auto;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper {\n  flex: 1 1 auto;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper input {\n  width: 100%;\n}\n\n.ag-column-select-panel .ag-primary-cols-list-panel {\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.ag-column-drop {\n  display: inline-flex;\n  align-items: center;\n  overflow: auto;\n  width: 100%;\n}\n\n.ag-column-drop .ag-column-drop-list {\n  display: flex;\n  align-items: center;\n}\n\n.ag-column-drop .ag-column-drop-list .ag-column-drop-cell {\n  display: flex;\n  align-items: center;\n}\n\n.ag-column-drop .ag-column-drop-list .ag-column-drop-cell .ag-column-drop-cell-text {\n  overflow: hidden;\n  flex: 1 1 auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-column-drop.ag-column-drop-vertical {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex: 1 1 0;\n  align-items: stretch;\n}\n\n.ag-column-drop.ag-column-drop-vertical > div {\n  display: flex;\n}\n\n.ag-column-drop.ag-column-drop-vertical .ag-column-drop-list {\n  align-items: stretch;\n  flex-grow: 1;\n  flex-direction: column;\n  overflow-x: auto;\n}\n\n.ag-column-drop.ag-column-drop-vertical .ag-column-drop-empty-message {\n  display: block;\n}\n\n.ag-column-drop.ag-column-drop-horizontal {\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n/**\n ****************************\n * Rows\n ****************************\n*/\n\n.ag-row-animation .ag-row {\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;\n}\n\n.ag-row-no-animation .ag-row {\n  transition: background-color 0.1s;\n}\n\n.ag-row {\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-row-position-absolute {\n  position: absolute;\n}\n\n.ag-row-position-relative {\n  position: relative;\n}\n\n.ag-full-width-row {\n  overflow: hidden;\n  pointer-events: all;\n}\n\n.ag-row-inline-editing {\n  z-index: 1;\n}\n\n.ag-row-dragging {\n  z-index: 2;\n}\n\n.ag-stub-cell {\n  display: flex;\n  align-items: center;\n}\n\n/**\n ****************************\n * Cells\n ****************************\n*/\n\n.ag-cell {\n  display: inline-block;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-cell-wrapper {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-cell-wrapper.ag-row-group {\n  align-items: flex-start;\n}\n\n.ag-cell-wrapper .ag-cell-value, .ag-cell-wrapper .ag-group-value {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ag-full-width-row.ag-row-group .ag-cell-wrapper {\n  align-items: center;\n}\n\n.ag-cell-with-height {\n  height: 100%;\n}\n\n.ag-group-cell-entire-row {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-footer-cell-entire-row {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-cell-inline-editing {\n  z-index: 1;\n}\n\n.ag-cell-inline-editing .ag-cell-edit-input, .ag-cell-inline-editing .ag-input-text-wrapper {\n  height: 100%;\n  width: 100%;\n  line-height: normal;\n}\n\n/**\n ****************************\n * Filters\n ****************************\n*/\n\n.ag-set-filter-item {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-filter .ag-filter-checkbox {\n  pointer-events: none;\n}\n\n.ag-filter .ag-filter-body-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.ag-filter .ag-filter-filter {\n  flex: 1 1 auto;\n}\n\n/**\n ****************************\n * Floating Filter\n ****************************\n*/\n\n.ag-floating-filter-full-body .ag-react-container, .ag-floating-filter-body .ag-react-container {\n  height: 100%;\n}\n\n.ag-floating-filter-body {\n  display: flex;\n  flex: 1 1 auto;\n  height: 20px;\n}\n\n.ag-floating-filter-body input {\n  margin: 0;\n  flex: 1 1 auto;\n}\n\n.ag-floating-filter-full-body {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.ag-floating-filter-full-body > div {\n  flex: 1 1 auto;\n}\n\n.ag-floating-filter-full-body input {\n  margin: 0;\n  width: 100%;\n}\n\n.ag-floating-filter-full-body input[type=range] {\n  height: 100%;\n}\n\n.ag-floating-filter {\n  display: inline-block;\n  position: absolute;\n}\n\n.ag-floating-filter-input {\n  width: 100%;\n}\n\n.ag-floating-filter-input:-moz-read-only {\n  background-color: #eee;\n}\n\n.ag-floating-filter-input:read-only {\n  background-color: #eee;\n}\n\n.ag-floating-filter-menu {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-floating-filter-button {\n  display: flex;\n  flex: none;\n}\n\n/**\n ****************************\n * Drag & Drop\n ****************************\n*/\n\n.ag-dnd-ghost {\n  display: flex;\n  align-items: center;\n  background: #e5e5e5;\n  border: 1px solid black;\n  cursor: move;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n  overflow: hidden;\n  padding: 3px;\n  position: absolute;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 10;\n}\n\n.ag-dnd-ghost-icon {\n  padding: 2px;\n}\n\n/**\n ****************************\n * Overlay\n ****************************\n*/\n\n.ag-overlay {\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.ag-overlay-panel {\n  display: flex;\n  height: 100%;\n  pointer-events: none;\n  width: 100%;\n}\n\n.ag-overlay-wrapper {\n  display: flex;\n  flex: none;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.ag-overlay-wrapper.ag-overlay-loading-wrapper {\n  pointer-events: all;\n}\n\n.ag-overlay-no-rows-wrapper.ag-layout-auto-height {\n  padding-top: 30px;\n}\n\n/**\n ****************************\n * Popup\n ****************************\n*/\n\n.ag-popup > div {\n  z-index: 5;\n}\n\n.ag-popup-backdrop {\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.ag-popup-editor {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 1;\n}\n\n/**\n ****************************\n * Virtual Lists\n ****************************\n*/\n\n.ag-virtual-list-item {\n  position: absolute;\n  width: 100%;\n}\n\n.ag-virtual-list-item span:empty:not(.ag-icon) {\n  border-left: 1px solid transparent;\n}\n\n/**\n ****************************\n * Floating Top and Bottom\n ****************************\n*/\n\n.ag-floating-top {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex;\n}\n\n.ag-pinned-left-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  flex-grow: 1000;\n}\n\n.ag-pinned-right-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  flex-grow: 1000;\n}\n\n.ag-floating-bottom {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex;\n}\n\n.ag-pinned-left-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  flex-grow: 1000;\n}\n\n.ag-pinned-right-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  flex-grow: 1000;\n}\n\n/**\n ****************************\n * Dialog\n ****************************\n*/\n\n.ag-dialog {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  overflow: hidden;\n}\n\n.ag-dialog .ag-resizer {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-topLeft {\n  top: 0;\n  left: 0;\n  height: 5px;\n  width: 5px;\n  cursor: nwse-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-top {\n  top: 0;\n  left: 5px;\n  right: 5px;\n  height: 5px;\n  cursor: ns-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-topRight {\n  top: 0;\n  right: 0;\n  height: 5px;\n  width: 5px;\n  cursor: nesw-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-right {\n  top: 5px;\n  right: 0;\n  bottom: 5px;\n  width: 5px;\n  cursor: ew-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  bottom: 0;\n  right: 0;\n  height: 5px;\n  width: 5px;\n  cursor: nwse-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottom {\n  bottom: 0;\n  left: 5px;\n  right: 5px;\n  height: 5px;\n  cursor: ns-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  bottom: 0;\n  left: 0;\n  height: 5px;\n  width: 5px;\n  cursor: nesw-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-left {\n  left: 0;\n  top: 5px;\n  bottom: 5px;\n  width: 5px;\n  cursor: ew-resize;\n}\n\n.ag-dialog .ag-dialog-title-bar {\n  display: flex;\n  flex: none;\n  align-items: center;\n  cursor: default;\n}\n\n.ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-title {\n  flex: 1 1 auto;\n}\n\n.ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons {\n  display: flex;\n}\n\n.ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button {\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n}\n\n.ag-dialog .ag-dialog-content-wrapper {\n  display: flex;\n  flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-dialog .ag-dialog-content-wrapper > div {\n  width: 100%;\n  height: 100%;\n}\n\n.ag-dialog .ag-message-box {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.ag-dialog .ag-message-box .ag-message-box-content {\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: center;\n  align-items: center;\n}\n\n.ag-dialog .ag-message-box .ag-message-box-button-bar {\n  display: flex;\n  justify-content: center;\n}\n\n/**\n ****************************\n * Tooltip\n ****************************\n*/\n\n.ag-tooltip {\n  position: absolute;\n  pointer-events: none;\n  z-index: 99999;\n}\n\n.ag-chart-tooltip {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  white-space: nowrap;\n  z-index: 99999;\n  border: 1px solid gray;\n  font: 12px Verdana, sans-serif;\n  padding: 7px;\n  color: black;\n  background: rgba(244, 244, 244, 0.9);\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);\n}\n\n.ag-chart-tooltip .title {\n  font-weight: bold;\n}\n\n/**\n ****************************\n * Animations\n ****************************\n*/\n\n.ag-value-slide-out {\n  margin-right: 5px;\n  opacity: 1;\n  transition: opacity 3s, margin-right 3s;\n  transition-timing-function: linear;\n}\n\n.ag-value-slide-out-end {\n  margin-right: 10px;\n  opacity: 0;\n}\n\n.ag-opacity-zero {\n  opacity: 0 !important;\n}\n\n/**\n ****************************\n * Menu\n ****************************\n*/\n\n.ag-menu {\n  max-height: 100%;\n  overflow-y: auto;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-menu-column-select-wrapper {\n  height: 265px;\n  overflow: auto;\n  width: 200px;\n}\n\n.ag-menu-list {\n  display: table;\n}\n\n.ag-menu-option, .ag-menu-separator {\n  display: table-row;\n}\n\n.ag-menu-option > span, .ag-menu-separator > span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.ag-menu-option-text {\n  white-space: nowrap;\n}\n\n.ag-menu-column-select-wrapper .ag-column-select-panel {\n  height: 100%;\n}\n\n/**\n ****************************\n * Rich Select\n ****************************\n*/\n\n.ag-rich-select {\n  cursor: default;\n  outline: none;\n}\n\n.ag-rich-select .ag-rich-select-value {\n  display: flex;\n  align-items: center;\n}\n\n.ag-rich-select .ag-rich-select-value > span {\n  flex: 1 1 auto;\n}\n\n.ag-rich-select .ag-rich-select-value .ag-icon {\n  order: 1;\n}\n\n.ag-rich-select .ag-rich-select-list .ag-virtual-list-item {\n  display: flex;\n}\n\n.ag-rich-select .ag-rich-select-list .ag-virtual-list-item .ag-rich-select-row {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  white-space: nowrap;\n}\n\n/**\n ****************************\n * Pagination\n ****************************\n*/\n\n.ag-paging-panel {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.ag-paging-page-summary-panel {\n  display: flex;\n  align-items: center;\n}\n\n.ag-paging-page-summary-panel .ag-disabled {\n  pointer-events: none;\n}\n\n/**\n ****************************\n * Tool Panel\n ****************************\n*/\n\n.ag-tool-panel-wrapper {\n  display: flex;\n  overflow-y: auto;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 200px;\n}\n\n.ag-tool-panel-wrapper .ag-filter-toolpanel-header {\n  cursor: pointer;\n}\n\n.ag-column-tool-panel-column,\n.ag-column-tool-panel-column-group {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-column-tool-panel-column .ag-column-tool-panel-column,\n.ag-column-tool-panel-column .ag-column-tool-panel-column-group,\n.ag-column-tool-panel-column-group .ag-column-tool-panel-column,\n.ag-column-tool-panel-column-group .ag-column-tool-panel-column-group {\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ag-column-select-checkbox {\n  display: flex;\n}\n\n.ag-tool-panel-horizontal-resize {\n  cursor: col-resize;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 5px;\n  z-index: 1;\n}\n\n.ag-rtl .ag-tool-panel-horizontal-resize {\n  transform: translateX(3px);\n}\n\n.ag-ltr .ag-tool-panel-horizontal-resize {\n  transform: translateX(-3px);\n}\n\n.loading-filter {\n  background-color: #e6e6e6;\n  height: 100%;\n  padding: 5px;\n  position: absolute;\n  top: 34px;\n  width: 100%;\n  z-index: 1;\n}\n\n.ag-details-row {\n  height: 100%;\n  width: 100%;\n}\n\n.ag-details-grid {\n  height: 100%;\n  width: 100%;\n}\n\n.ag-header-group-cell {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n}\n\n.ag-cell-label-container {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  align-items: center;\n  width: 100%;\n}\n\n.ag-numeric-header .ag-cell-label-container {\n  flex-direction: row;\n}\n\n/**\n ****************************\n * Group Component\n ****************************\n */\n\n.ag-group-component {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.ag-group-component .ag-group-component-label {\n  position: absolute;\n  top: -10px;\n}\n\n.ag-group-component .ag-group-item {\n  display: flex;\n  align-items: center;\n  flex: 1 1 auto;\n}\n\n/**\n ****************************\n * Side Bar\n ****************************\n*/\n\n.ag-side-bar {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.ag-side-bar .ag-side-buttons div button {\n  display: block;\n  white-space: nowrap;\n  outline: none;\n  cursor: pointer;\n}\n\n.ag-side-bar .ag-side-buttons div button span:not(.ag-icon) {\n  -webkit-writing-mode: tb;\n      -ms-writing-mode: tb;\n          writing-mode: tb;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n}\n\n.ag-side-bar .panel-container {\n  width: 180px;\n}\n\n.ag-side-bar.full-width .panel-container {\n  width: 200px;\n}\n\n.ag-rtl .ag-side-bar .ag-side-buttons button span:not(.ag-icon) {\n  -webkit-writing-mode: tb-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: tb-rl;\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n}\n\n/**\n ****************************\n * Status Bar\n ****************************\n*/\n\n.ag-status-bar {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n}\n\n.ag-status-bar .ag-status-panel {\n  display: inline-flex;\n}\n\n.ag-status-bar-left {\n  display: inline-flex;\n}\n\n.ag-status-bar-center {\n  display: inline-flex;\n}\n\n.ag-status-bar-right {\n  display: inline-flex;\n}\n\n.ag-ltr .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n.ag-rtl .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n.ag-ltr .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n.ag-rtl .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n.ag-ltr .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n.ag-rtl .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n.ag-ltr .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n.ag-rtl .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n.ag-ltr .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n.ag-rtl .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n.ag-ltr .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n.ag-rtl .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n.ag-ltr .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n.ag-rtl .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n.ag-ltr .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n.ag-rtl .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n.ag-ltr .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n.ag-rtl .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n.ag-ltr .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n.ag-rtl .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n.ag-ltr .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n.ag-rtl .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n.ag-ltr .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n.ag-rtl .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n.ag-ltr .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n.ag-rtl .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n.ag-ltr .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n.ag-rtl .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n.ag-ltr .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n.ag-rtl .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n.ag-ltr .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n.ag-rtl .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n.ag-ltr .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n.ag-rtl .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n.ag-ltr .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n.ag-rtl .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n.ag-ltr .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n.ag-rtl .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n.ag-ltr .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n.ag-rtl .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n.ag-ltr .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n.ag-rtl .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n.ag-ltr .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n.ag-rtl .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n.ag-ltr .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n.ag-rtl .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n.ag-ltr .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n.ag-rtl .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n.ag-ltr .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n.ag-rtl .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n.ag-ltr .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n.ag-rtl .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n.ag-ltr .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n.ag-rtl .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n.ag-ltr .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n.ag-rtl .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n.ag-ltr .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n.ag-rtl .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n.ag-ltr .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n.ag-rtl .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n.ag-ltr .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n.ag-rtl .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n.ag-ltr .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n.ag-rtl .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n.ag-ltr .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n.ag-rtl .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n.ag-ltr .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n.ag-rtl .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n.ag-ltr .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n.ag-rtl .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n.ag-ltr .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n.ag-rtl .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n.ag-ltr .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n.ag-rtl .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n.ag-ltr .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n.ag-rtl .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n.ag-ltr .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n.ag-rtl .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n.ag-ltr .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n.ag-rtl .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n.ag-ltr .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n.ag-rtl .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n.ag-ltr .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n.ag-rtl .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n.ag-ltr .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n.ag-rtl .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n.ag-ltr .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n.ag-rtl .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n.ag-ltr .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n.ag-rtl .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n.ag-ltr .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n.ag-rtl .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n.ag-ltr .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n.ag-rtl .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n.ag-ltr .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n.ag-rtl .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n.ag-ltr .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n.ag-rtl .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n.ag-ltr .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n.ag-rtl .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n.ag-ltr .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n.ag-rtl .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n.ag-ltr .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n.ag-rtl .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n.ag-ltr .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n.ag-rtl .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n.ag-ltr .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n.ag-rtl .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n.ag-ltr .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n.ag-rtl .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n.ag-ltr .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n.ag-rtl .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n.ag-ltr .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n.ag-rtl .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n.ag-ltr .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n.ag-rtl .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n.ag-ltr .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n.ag-rtl .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n.ag-ltr .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n.ag-rtl .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n.ag-ltr .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n.ag-rtl .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n.ag-ltr .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n.ag-rtl .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n.ag-ltr .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n.ag-rtl .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n.ag-ltr .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n.ag-rtl .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n.ag-ltr .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n.ag-rtl .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n.ag-ltr .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n.ag-rtl .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n.ag-ltr .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n.ag-rtl .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n.ag-ltr .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n.ag-rtl .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n.ag-ltr .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n.ag-rtl .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n.ag-ltr .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n.ag-rtl .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n.ag-ltr .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n.ag-rtl .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n.ag-ltr .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n.ag-rtl .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n.ag-ltr .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n.ag-rtl .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n.ag-ltr .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n.ag-rtl .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n.ag-ltr .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n.ag-rtl .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n.ag-ltr .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n.ag-rtl .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n.ag-ltr .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n.ag-rtl .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n.ag-ltr .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n.ag-rtl .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n.ag-ltr .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n.ag-rtl .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n.ag-ltr .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n.ag-rtl .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n.ag-ltr .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n.ag-rtl .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n.ag-ltr .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n.ag-rtl .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n.ag-ltr .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n.ag-rtl .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n.ag-ltr .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n.ag-rtl .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n.ag-ltr .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n.ag-rtl .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n.ag-ltr .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n.ag-rtl .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n.ag-ltr .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n.ag-rtl .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n.ag-ltr .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n.ag-rtl .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n.ag-ltr .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n.ag-rtl .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n.ag-ltr .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n.ag-rtl .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n.ag-ltr .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n.ag-rtl .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n.ag-ltr .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n.ag-rtl .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n.ag-ltr .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n.ag-rtl .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n.ag-ltr .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n.ag-rtl .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n.ag-ltr .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n.ag-rtl .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n.ag-ltr .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n.ag-rtl .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n.ag-ltr .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n.ag-rtl .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n.ag-ltr .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n.ag-rtl .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n.ag-ltr {\n  direction: ltr;\n}\n\n.ag-ltr .ag-body, .ag-ltr .ag-floating-top, .ag-ltr .ag-floating-bottom, .ag-ltr .ag-header, .ag-ltr .ag-body-viewport, .ag-ltr .ag-body-horizontal-scroll {\n  flex-direction: row;\n}\n\n.ag-ltr .ag-header-cell-resize {\n  right: -4px;\n}\n\n.ag-ltr .ag-pinned-right-header .ag-header-cell-resize {\n  left: -4px;\n}\n\n.ag-rtl {\n  direction: rtl;\n}\n\n.ag-rtl .ag-body, .ag-rtl .ag-floating-top, .ag-rtl .ag-floating-bottom, .ag-rtl .ag-header, .ag-rtl .ag-body-viewport, .ag-rtl .ag-body-horizontal-scroll {\n  flex-direction: row-reverse;\n}\n\n.ag-rtl .ag-header-cell-resize {\n  left: -4px;\n}\n\n.ag-rtl .ag-pinned-left-header .ag-header-cell-resize {\n  right: -4px;\n}\n\n@media print {\n  .ag-body-viewport {\n    display: block;\n  }\n\n  .ag-row {\n    page-break-inside: avoid;\n  }\n}\n\n.ag-body .ag-pinned-left-cols-viewport, .ag-body .ag-body-viewport, .ag-body .ag-pinned-right-cols-viewport {\n  -webkit-overflow-scrolling: touch;\n}\n\n.ag-chart {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-chart .ag-chart-canvas-wrapper {\n  flex: 1 1 auto;\n}\n\n.ag-chart .ag-chart-canvas-wrapper canvas {\n  display: block;\n}\n\n.ag-chart .ag-chart-menu {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  width: 24px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.ag-chart-tabbed-menu > div {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-tab-header {\n  flex: none;\n}\n\n.ag-chart-tabbed-menu .ag-tab-body {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: stretch;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-tab-body > div {\n  flex: 1 1 auto;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings {\n  overflow-x: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar {\n  width: 100%;\n  display: flex;\n  height: 30px;\n  align-items: center;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex: 1 1 auto;\n  height: 100%;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  opacity: 0.2;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected {\n  opacity: 1;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn, .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn {\n  position: relative;\n  flex: none;\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  font-size: 24px;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 100%;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper.ag-animating, .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper.ag-animating {\n  transition: left 0.3s;\n  transition-timing-function: ease-in-out;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail {\n  cursor: pointer;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail canvas {\n  display: block;\n}\n\n.ag-chart-tabbed-menu .ag-chart-data-wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-chart .ag-chart-menu {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.ag-chart .ag-chart-menu > span {\n  opacity: 0.5;\n  line-height: 24px;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  margin: 2px 0;\n  cursor: pointer;\n}\n\n.ag-chart .ag-chart-menu > span:hover {\n  border-radius: 5px;\n}\n\n.ag-chart:hover .ag-chart-menu:not(.ag-has-popup) {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.ag-chart:hover .ag-chart-menu:not(.ag-has-popup):hover > span {\n  opacity: 1;\n}\n\n.ag-chart-tabbed-menu .ag-tab-body {\n  padding: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper > div {\n  margin: 5px;\n  border-radius: 5px;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar {\n  padding: 0 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector {\n  padding: 0 10px;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  cursor: pointer;\n}\n\n/* targets IE11 only */\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ag-chart-tabbed-menu .ag-chart-settings-mini-wrapper {\n    justify-content: center;\n  }\n}\n\n@font-face {\n  font-family: \"agGridMaterial\";\n\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBlIAAAC8AAAAYGNtYXAXVtK5AAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZmIJHuwAAAF4AAAQ7GhlYWQU+iOjAAASZAAAADZoaGVhB4kD+AAAEpwAAAAkaG10eNIAJiwAABLAAAAA3GxvY2F0JHhCAAATnAAAAHBtYXhwAEEAWAAAFAwAAAAgbmFtZWh0POUAABQsAAAB2nBvc3QAAwAAAAAWCAAAACAAAwP2AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpMgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6TL//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAQAAawMAAxUACwAAASEVCQEVITUhNychAwD+AAEV/usCAP7V1tYBKwMVVf8A/wBVgNXVAAAAAAQAOf/5A8cDhwAHAA8AFwAfAAABMzUzJwczFQcjNQcXNTM1BScVIxUzFTcFIxUjFzcjNQGrqnLHx3I5csfHcgJVx3Jyx/6OqnLHx3ICTnLHx3I5csfHcqpVx3KqcseOcsfHcgABAKsAawNVAxUACQAAExc3ETMRFzcJAas87lbuPP6r/qsBwDzu/fkCB+89AVX+qwACAFUAFQOrA2sAHAAoAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxMHJwcnNyc3FzcXBwIAWE5OdCEiIiF0Tk5YWE5OdCEiIiF0Tk5Y1TyZmTyZmTyZmTyZA2siIXROTlhYTk50ISIiIXROTlhYTk50ISL9vDyZmTyZmTyZmTyZAAAAAwDVAJUDKwLrAAQACQANAAATMxEjETczESMREzMRI9WAgO94eO94eAI3/l4BorT9qgJW/qr/AAACAIAAQAOAA0AADwAWAAABISIGFREUFjMhMjY1ETQmASc3FwEXAQMr/aojMjIjAlYjMjL+XdY8mgFEPP6AA0AyI/2qIzIyIwJWIzL9q9U8mQFEPP6AAAAAAgCAAEADgANAAA8AEwAAASEiBhURFBYzITI2NRE0JgMhNSEDK/2qIzIyIwJWIzIyef5WAaoDQDIj/aojMjIjAlYjMv5VVgAAAgCAAEADgANAAAMAEwAAAREhESUhIgYVERQWMyEyNjURNCYDK/2qAlb9qiMyMiMCViMyMgLr/aoCVlUyI/2qIzIyIwJWIzIAAgCrAGsBVQMVAAMABwAAJSMRMzUVIzUBVaqqqmsB/6tXVwAACQCrAGsDVQMVAAMACAAMABAAFQAZAB4AIgAmAAATMzUjATM1IxUhMzUjNTM1IwUzNSMVARUzNQUzNSMVATM1IxEzNSOrqqoBAKqq/wCqqqqqAQCqqgEAqv5WqqoBAKqqqqoCa6r9VqqqqlaqqqqqAaqqqqqqqv8Aqv5WqgAAAAABAWIAwAKeAsAABgAAAScJATcnNwKePP8AAQA8w8MChDz/AP8APMTEAAAAAAMAa//rA5UDlQAIABkAHQAAASEiBhURMxEhFyEiBhURFBYzITI2NRE0JiMRIREhAsD+ACMyVQIAgP4rJDIyJAHVIzIyI/4rAdUDlTIj/asCVVUyJP2rIzIyIwJVJDL9VQJVAAABANUAlQMrAusADAAAAScHJwcXBxc3FzcnNwMrPO/vPO/vPO/vPO/vAq887+887+887+887+8AAAUAVQAVA6sDawAlADIAPwBLAFEAAAE+ATU0JiMiBhUUFjMyNjcXBy4BIyIGFRQWMzI2NTQmJzcBMzUBByImNTQ2MzIWFRQGIxEiJjU0NjMyFhUUBiMBIiY1NDYzMhYVFAYJARcBNSMBmwgIZEdHZGRHEyMQZWUQIxNHZGRHR2QICGUBK4D98JsjMjIjIzIyIyMyMiMjMjIjAQAJDAwJCQwMASL/AFUBK4ACehAjE0dkZEdHZAgIZWUICGRHR2RkRxMjEGX+1SsCDw8xJCQxMSQkMf4AMSQkMTEkJDEBQAwJCQwMCQkMAZX/AFUBKisAAAcAlwC/A2kCwQAMABAAHQAhAC0AOgA+AAATIgYVFBYzMjY1NCYjBTUhFQMiBhUUFjMyNjU0JiMFITUhBTIWFRQGIyImNTQ2NzIWFRQGIyImNTQ2MwUhNSHCEhkZEhIZGRICp/3XfhIZGRISGRkSAdL+rAFU/i4NExMNDRMTDRIZGRISGRkSAqf91wIpARUZEhEaGhESGVVWVgErGRISGRkSEhlVVQsTDQ0TEw0NE+EaERIZGRIRGlZVAAAAAQCrAGsDVQMVAAkAAAEnBxEjEScHCQEDVTzuVu48AVUBVQHAPO4CB/357z3+qwFVAAAAAAEBYgDAAp4CwAAGAAABBxcHFwkBAZ48w8M8AQD/AALAPMTEPAEAAQAAAAAAAQCTAMcDbQK5AEcAAAEuASMiBgcnPgEzMhceARcWFw4BByc+ATcjDgEHJyMXDgEjIiYnIx4BMzI2NxcOASMiJy4BJyYnPgE3Fw4BBzMnPgEzMhYXMwKjClw9Ij0WTytjNj45OV8kJRUYWDlPEhgFRAQNCCtQRgQJBSI1CUQKXD4TIxBIIUcmPjk5XyQlFRM+KF4FBgKGKQ0kFSI0CUQB3TpPGhdPGRwTEkIuLTc+ZSFPEi0aDBUJKkYBASkfOlAICEgNDhMSQi4tNzBUIF4KFAsqDRAoHwAAAwCTAMcDbQK5ABwAKAA1AAABIgcOAQcGBxYXHgEXFjMyNz4BNzY3JicuAScmIxEiJjU0NjMyFhUUBgMiBhUUFjMyNjU0JiMCAD45OV8kJRUVJSRfOTk+Pjk5XyQlFRUlJF85OT5FYWFFRWFhRSk7OykpOzspArkTEkIuLTc3LS5CEhMTEkIuLTc3LS5CEhP+YWFFRWFhRUVhAQo7KSk7OykpOwADAIAAwAOAAsAABAAIAAwAACUzNSMVARUhNQEhNSEBq6qq/tUDAP2AAgD+AMBVVQIAVVX+1VYAAAIA9wDAAwkCwAAFAAoAACUnNycJAQEzESMRAwnExDz/AAEA/ipWVvzExDz/AP8AAgD+AAIAAAAAAgCrAUADVQJAAAMACAAAASEVIQUhNSEVA1X9VgKq/VYCqv1WAkBVq1VVAAAGAI4ApANyAtwABgALABIAFgAaACAAAAEhFAYrATUlFSE1IScyFhUhNSEBIzUzNSM1MycjNDYzFQJVAR1DL6sBHf7jAR1yL0P+AAGO/uRycnJy5HJDLwEVL0Jx5HJy40Ivcf3IcXJyci9CcQACAJMAxwNtArkAHAAoAAABIgcOAQcGBxYXHgEXFjMyNz4BNzY3JicuAScmIxEiJjU0NjMyFhUUBgIAPjk5XyQlFRUlJF85OT4+OTlfJCUVFSUkXzk5PkVhYUVFYWECuRMSQi4tNzctLkISExMSQi4tNzctLkISE/5hYUVFYWFFRWEAAAACAPcAwAMJAsAABgAKAAATFwcXCQEHJTMRI/fExDwBAP8APAG8VlYChMTEPAEAAQA8PP4AAAAAAAEAqwBrA1UDFQAJAAABITcnCQE3JyE1A1X9+e89/qsBVTzuAgcB6+48/qv+qzzuVgAAAAACAOQApAMcAtwAHAAmAAABNxcHMxUjHgEXBycVIzUHJzcjNTMnNx4BFzUzFQczNzUnIwcVHgECOWhQaJOTGjQaUGhyaFBok5NoUBo0GnJoXkNDXkMRIQJJaFBocho0GlBok5NoUGhyaFAaNBqTk/tDXkNDXhEhAAABAIAC6wOAA0AAAwAAEyEVIYADAP0AA0BVAAAAAwCAAMADgALAAAMABwALAAA3ITUhNSE1ITUVITWAAwD9AAMA/QADAMBVgFbVVVUAAQEAAEADAACVAAMAACUhFSEBAAIA/gCVVQAAAAEA1QGVAysB6wAEAAATIRUhNdUCVv2qAetWVgABAWIAwAKeAsAABgAAAQcXBxcJAQGePMPDPAEA/wACwDzExDwBAAEAAAAAAAMAgADAA4ACwAADAAcACwAANyE1IREVITUBITUhgAIA/gADAP0AAwD9AMBVAatVVf7VVgADAFUAFQOrA2sAHAAqADkAAAEiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYjATQ3PgE3NjMyFhcBLgEBIiYnAR4BFRQHDgEHBiMCAFhOTnQhIiIhdE5OWFhOTnQhIiIhdE5OWP6rGhtdPj5HO2sr/iIiJgFVO2srAd4iJhobXT4+RwNrIiF0Tk5YWE5OdCEiIiF0Tk5YWE5OdCEi/lVHPj5dGxomIv4iK2v+5iYiAd4raztHPj5dGxoAAAMAgP/rA4ADlQAXACMAKwAAASMuASMiBgcjIgYVERQWMyEyNjURNCYjITIWFRQGIyImNTQ2ASERMxUhNTMDK7MNQSoqQQ2zIzIyIwJWIzIyI/7VEhkZEhIZGQE9/apWAapWA0AlMDAlMiP9VSMyMiMCqyMyGRIRGRkREhn9AAKrgIAAAAIArQBvA1MDEQAGABMAACUHJzceARcTAQcnBxcHJzcXNyc3AWOOKI4KFAq8ATQfHvc+WPZYPXseHv2OKI4KFAoCFP7MHh57PVj2WD73Hh8ACQA5//kDxwOHAA8AEwAYACEAJQAuADIANgA6AAAFISImNRE0NjMhMhYVERQGASMVMwEhESERBQcXByc3HgEXJyMVMyUHJwcnNx4BFwEjFTMlIxUzNyMVMwNV/VYvQ0MvAqovQ0P90aqqAgD+OQHH/txCQilpaQoVCtyqqgH4KEFCKGoaNRr+CKqqAR3k5OOqqgdDLwKqL0NDL/1WL0MBHKoBjv5yAY7bQkEoaWoKFArbqzEoQUEoaRo1GgGWqqqqqqoAAAEA1QCVAysC6wALAAABIREjESE1IREzESEDK/8AVv8AAQBWAQABlf8AAQBWAQD/AAAAAAABAWIAwAKeAsAABgAAAScJATcnNwKePP8AAQA8w8MChDz/AP8APMTEAAAAAAIAVQAVA6sDawAcADgAAAEiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYjESInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBgIAWE5OdCEiIiF0Tk5YWE5OdCEiIiF0Tk5YRz4+XRsaGhtdPj5HRz4+XRsaGhtdPj4DayIhdE5OWFhOTnQhIiIhdE5OWFhOTnQhIv0AGhtdPj5HRz4+XRsaGhtdPj5HRz4+XRsaAAAAAwBVABUDqwNrABwAOQBVAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIzUiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYjESInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBgIALCcnOhEQEBE6JycsLCcnOhEQEBE6JycsWE5OdCEiIiF0Tk5YWE5OdCEiIiF0Tk5YRz4+XRsaGhtdPj5HRz4+XRsaGhtdPj4ClRAROicnLCwnJzoREBAROicnLCwnJzoRENYiIXROTlhYTk50ISIiIXROTlhYTk50ISL9ABobXT4+R0c+Pl0bGhobXT4+R0c+Pl0bGgAAAAEAqwBrA1UDFQAJAAABBxchFSEHFwkBAgA87v35AgfuPAFV/qsDFTzuVu48AVUBVQAAAAACAIAAQAOAA0AADgAYAAABESERIxEUFjMhMjY1ESMFNxcHJzcXETMRAyv9qlUyIwJWIzJV/wBuPNXVPG5WAcD+1QEr/tUjMjIjASsdbjzV1TxuAZ3+YwAAAQErAVUC1QIrAAMAAAEXNyEBK9XV/lYCK9bWAAEBlQDrAmsClQADAAABBxcRAmvW1gKV1dUBqgABAZUA6wJrApUAAwAAJTcnEQGV1tbr1dX+VgAAAQErAVUC1QIrAAMAAAE3FyEBK9XV/lYBVdbWAAEAiQCiA3cC3gAFAAABJwcXAScBd7I87gIAPAEbsj3uAgA8AAEBYgDAAp4CwAAGAAABBxcHFwkBAZ48w8M8AQD/AALAPMTEPAEAAQAAAAAAAQDVAZUDKwHrAAQAABMhFSE11QJW/aoB61ZWAAEBAAEiAwACXgAFAAABBycHCQECxMTEPAEAAQACXsPDPP8AAQAAAAABAAAAAQAAlpGfTV8PPPUACwQAAAAAANkJ75MAAAAA2QnvkwAA/+sDxwOVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAPHAAEAAAAAAAAAAAAAAAAAAAA3BAAAAAAAAAAAAAAAAgAAAAQAAQAEAAA5BAAAqwQAAFUEAADVBAAAgAQAAIAEAACABAAAqwQAAKsEAAFiBAAAawQAANUEAABVBAAAlwQAAKsEAAFiBAAAkwQAAJMEAACABAAA9wQAAKsEAACOBAAAkwQAAPcEAACrBAAA5AQAAIAEAACABAABAAQAANUEAAFiBAAAgAQAAFUEAACABAAArQQAADkEAADVBAABYgQAAFUEAABVBAAAqwQAAIAEAAErBAABlQQAAZUEAAErBAAAiQQAAWIEAADVBAABAAAAAAAACgAUAB4AOgBsAIQAyADkARABNAFYAWoBqgHAAfICDgKGAuQC/gMUA4AD0gPuBAoEIARWBJgEtATOBQoFGAUwBT4FTAViBXwF2gYcBkQGpgbABtYHLgeuB8gH9AgCCBAIHggsCD4IVAhiCHYAAQAAADcAVgAJAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAA4AAAABAAAAAAACAAcAnwABAAAAAAADAA4ASwABAAAAAAAEAA4AtAABAAAAAAAFAAsAKgABAAAAAAAGAA4AdQABAAAAAAAKABoA3gADAAEECQABABwADgADAAEECQACAA4ApgADAAEECQADABwAWQADAAEECQAEABwAwgADAAEECQAFABYANQADAAEECQAGABwAgwADAAEECQAKADQA+GFnR3JpZE1hdGVyaWFsAGEAZwBHAHIAaQBkAE0AYQB0AGUAcgBpAGEAbFZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGFnR3JpZE1hdGVyaWFsAGEAZwBHAHIAaQBkAE0AYQB0AGUAcgBpAGEAbGFnR3JpZE1hdGVyaWFsAGEAZwBHAHIAaQBkAE0AYQB0AGUAcgBpAGEAbFJlZ3VsYXIAUgBlAGcAdQBsAGEAcmFnR3JpZE1hdGVyaWFsAGEAZwBHAHIAaQBkAE0AYQB0AGUAcgBpAGEAbEZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\");\n\n  font-weight: normal;\n\n  font-style: normal;\n}\n\n.ag-theme-material {\n  -webkit-font-smoothing: antialiased;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: 1;\n}\n\n.ag-theme-material .ag-tab-header .ag-tab.ag-tab-selected {\n  border-bottom: 2px solid #3f51b5;\n}\n\n.ag-theme-material label {\n  margin-bottom: 0;\n}\n\n.ag-theme-material * {\n  box-sizing: border-box;\n}\n\n.ag-theme-material *:focus, .ag-theme-material * *:before, .ag-theme-material * *:after {\n  outline: none;\n  box-sizing: border-box;\n}\n\n.ag-theme-material .ag-tab {\n  box-sizing: content-box;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n.ag-theme-material .ag-ltr .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n.ag-theme-material .ag-rtl .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n.ag-theme-material .ag-cell .ag-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ag-theme-material .ag-radio-button-label, .ag-theme-material .ag-checkbox-label {\n  cursor: default;\n}\n\n.ag-theme-material .ag-radio-button-label:empty, .ag-theme-material .ag-checkbox-label:empty {\n  margin: 0;\n}\n\n.ag-theme-material .ag-radio-button-label, .ag-theme-material .ag-checkbox-label {\n  margin-left: 8px;\n}\n\n.ag-theme-material .ag-cell {\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n.ag-theme-material .ag-ltr .ag-row-group-leaf-indent {\n  margin-left: 42px;\n}\n\n.ag-theme-material .ag-ltr .ag-cell {\n  border-right: 1px solid transparent;\n}\n\n.ag-theme-material .ag-ltr .ag-row.ag-cell-first-right-pinned, .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned {\n  border-left: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-ltr .ag-row.ag-cell-last-left-pinned, .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned {\n  border-right: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-rtl .ag-row-group-leaf-indent {\n  margin-right: 42px;\n}\n\n.ag-theme-material .ag-rtl .ag-cell {\n  border-left: 1px solid transparent;\n}\n\n.ag-theme-material .ag-rtl .ag-row.ag-cell-first-right-pinned, .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned {\n  border-left: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-rtl .ag-row.ag-cell-last-left-pinned, .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned {\n  border-right: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-value-change-delta {\n  padding-right: 2px;\n}\n\n.ag-theme-material .ag-value-change-delta-up {\n  color: #43a047;\n}\n\n.ag-theme-material .ag-value-change-delta-down {\n  color: #e53935;\n}\n\n.ag-theme-material .ag-value-change-value {\n  background-color: transparent;\n  border-radius: 1px;\n  padding-left: 1px;\n  padding-right: 1px;\n  transition: background-color 1s;\n}\n\n.ag-theme-material .ag-value-change-value-highlight {\n  background-color: #00acc1;\n  transition: background-color 0.1s;\n}\n\n.ag-theme-material .ag-input-text-wrapper input:not([type]),\n.ag-theme-material .ag-input-text-wrapper input[type=text],\n.ag-theme-material .ag-input-text-wrapper input[type=tel],\n.ag-theme-material .ag-input-text-wrapper input[type=date],\n.ag-theme-material .ag-input-text-wrapper input[type=datetime-local] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-size: inherit;\n  height: 40px;\n  padding-bottom: 8px;\n  border-width: 0;\n  border-bottom: 2px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-text-wrapper input:not([type]):focus,\n.ag-theme-material .ag-input-text-wrapper input[type=text]:focus,\n.ag-theme-material .ag-input-text-wrapper input[type=tel]:focus,\n.ag-theme-material .ag-input-text-wrapper input[type=date]:focus,\n.ag-theme-material .ag-input-text-wrapper input[type=datetime-local]:focus {\n  border-bottom: 2px solid #3f51b5;\n  outline: none;\n}\n\n.ag-theme-material .ag-input-text-wrapper input:not([type])::-webkit-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=text]::-webkit-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=tel]::-webkit-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=date]::-webkit-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=datetime-local]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper input:not([type])::-moz-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=text]::-moz-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=tel]::-moz-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=date]::-moz-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=datetime-local]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper input:not([type]):-ms-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=text]:-ms-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=tel]:-ms-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=date]:-ms-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=datetime-local]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper input:not([type])::-ms-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=text]::-ms-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=tel]::-ms-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=date]::-ms-input-placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=datetime-local]::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper input:not([type])::placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=text]::placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=tel]::placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=date]::placeholder,\n.ag-theme-material .ag-input-text-wrapper input[type=datetime-local]::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper input:not([type]):disabled,\n.ag-theme-material .ag-input-text-wrapper input[type=text]:disabled,\n.ag-theme-material .ag-input-text-wrapper input[type=tel]:disabled,\n.ag-theme-material .ag-input-text-wrapper input[type=date]:disabled,\n.ag-theme-material .ag-input-text-wrapper input[type=datetime-local]:disabled {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-text-wrapper input:not([type]):disabled,\n.ag-theme-material .ag-input-text-wrapper input[type=text]:disabled,\n.ag-theme-material .ag-input-text-wrapper input[type=tel]:disabled,\n.ag-theme-material .ag-input-text-wrapper input[type=date]:disabled,\n.ag-theme-material .ag-input-text-wrapper input[type=datetime-local]:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper input[type=date] {\n  flex: 1 1 auto;\n}\n\n.ag-theme-material .ag-input-text-wrapper textarea {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-size: inherit;\n  height: 40px;\n  padding-bottom: 8px;\n  border-width: 0;\n  border-bottom: 2px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-text-wrapper textarea:focus {\n  border-bottom: 2px solid #3f51b5;\n  outline: none;\n}\n\n.ag-theme-material .ag-input-text-wrapper textarea::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper textarea::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper textarea:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper textarea::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper textarea::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-text-wrapper textarea:disabled {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-text-wrapper textarea:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-header {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-pinned-right-header {\n  border-left: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-pinned-left-header {\n  border-right: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-header-row {\n  border: none;\n}\n\n.ag-theme-material .ag-row {\n  border-style: solid;\n  border-color: #e2e2e2;\n  border-width: 0;\n}\n\n.ag-theme-material .ag-row:not(.ag-row-first) {\n  border-width: 1px 0 0;\n}\n\n.ag-theme-material .ag-row.ag-row-last {\n  border-bottom-width: 1px;\n}\n\n.ag-theme-material .ag-horizontal-left-spacer {\n  border-right: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-horizontal-left-spacer.ag-scroller-corner {\n  border-right: none;\n}\n\n.ag-theme-material .ag-horizontal-right-spacer {\n  border-left: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-horizontal-right-spacer.ag-scroller-corner {\n  border-left: none;\n}\n\n.ag-theme-material .ag-row-hover {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-numeric-cell {\n  text-align: right;\n}\n\n.ag-theme-material .ag-header-cell-label .ag-header-icon {\n  margin-left: 8px;\n  opacity: 0.87;\n}\n\n.ag-theme-material .ag-header-cell,\n.ag-theme-material .ag-header-group-cell {\n  border-style: solid;\n  border-color: #e2e2e2;\n  padding-left: 24px;\n  padding-right: 24px;\n  border-width: 0;\n}\n\n.ag-theme-material .ag-header-cell.ag-header-cell-moving,\n.ag-theme-material .ag-header-group-cell.ag-header-cell-moving {\n  background-color: #f2f2f2;\n}\n\n.ag-theme-material .ag-header-cell:not(.ag-header-group-cell-no-group),\n.ag-theme-material .ag-header-group-cell:not(.ag-header-group-cell-no-group) {\n  border-top-width: 1px;\n}\n\n.ag-theme-material .ag-header-row:first-child .ag-header-cell, .ag-theme-material .ag-header-row:first-child .ag-header-group-cell {\n  border-top-width: 0;\n}\n\n.ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell:hover, .ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell.ag-column-resizing,\n.ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell:hover,\n.ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell.ag-column-resizing,\n.ag-theme-material .ag-header-group-cell:first-of-type:hover,\n.ag-theme-material .ag-header-group-cell:first-of-type.ag-column-resizing,\n.ag-theme-material .ag-header-cell:first-of-type:hover,\n.ag-theme-material .ag-header-cell:first-of-type.ag-column-resizing {\n  background-color: #f2f2f2;\n}\n\n.ag-theme-material .ag-header-cell-resize {\n  cursor: col-resize;\n}\n\n.ag-theme-material .ag-header-select-all {\n  margin-right: 24px;\n}\n\n.ag-theme-material .ag-cell {\n  line-height: 46px;\n  padding-left: 24px;\n  padding-right: 24px;\n  border: 1px solid transparent;\n  padding-left: 23px;\n  padding-right: 23px;\n}\n\n.ag-theme-material .ag-row-drag {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n  min-width: 42px;\n}\n\n.ag-theme-material .ag-row-dragging, .ag-theme-material .ag-row-dragging .ag-row-drag {\n  cursor: move;\n}\n\n.ag-theme-material .ag-column-drag {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.ag-theme-material .ag-row-dragging {\n  opacity: 0.5;\n}\n\n.ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-material .ag-ltr .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-material .ag-rtl .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle {\n  border: 1px solid #3f51b5;\n  outline: initial;\n}\n\n.ag-theme-material .ag-header-cell-resize {\n  width: 16px;\n}\n\n.ag-theme-material .ag-menu {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  padding: 0;\n}\n\n.ag-theme-material .ag-menu .ag-menu-list {\n  cursor: default;\n  margin-bottom: 8px;\n  margin-top: 8px;\n  width: 100%;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-active {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-disabled {\n  opacity: 0.5;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-text {\n  margin-left: 8px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-icon {\n  padding-left: 8px;\n  padding-right: 8px;\n  min-width: 34px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-shortcut {\n  padding-left: 16px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-separator {\n  height: 16px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-separator > span {\n  background-image: url(\"data:image/svg+xml,%3Csvg%20width%3D'1'%20height%3D'16px'%20viewBox%3D'0%200%201%2016px'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cline%20x1%3D'0'%20y1%3D'8px'%20x2%3D'1'%20y2%3D'8px'%20stroke-width%3D'1'%20stroke%3D'%23E2E2E2'%2F%3E%3C%2Fsvg%3E\");\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-popup-pointer {\n  width: 34px;\n  text-align: center;\n}\n\n.ag-theme-material.ag-dnd-ghost {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  border: 1px solid #e2e2e2;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  height: 56px !important;\n  line-height: 56px;\n  margin: 0;\n  padding: 0 16px;\n  transform: translateY(16px);\n}\n\n.ag-theme-material.ag-dnd-ghost span,\n.ag-theme-material.ag-dnd-ghost div {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  margin-right: 8px;\n  opacity: 0.87;\n}\n\n.ag-theme-material .ag-tab-header {\n  background: #eee;\n  min-width: 220px;\n  width: 100%;\n  display: flex;\n}\n\n.ag-theme-material .ag-tab-header .ag-tab {\n  display: flex;\n  border-bottom: 2px solid transparent;\n  height: 32px;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 auto;\n}\n\n.ag-theme-material .ag-tab-body {\n  padding: 8px 0;\n}\n\n.ag-theme-material .ag-tab-body .ag-menu-list {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.ag-theme-material .ag-tab-body .ag-menu-list > div:first-child > span {\n  padding-top: 0;\n}\n\n.ag-theme-material .ag-tab-body .ag-menu-list > div:last-child > span {\n  padding-bottom: 0;\n}\n\n.ag-theme-material .ag-tab-body .ag-menu-list > div:last-child > .ag-menu-option-popup-pointer {\n  background-position-y: 0;\n}\n\n.ag-theme-material .ag-filter .ag-filter-select, .ag-theme-material .ag-filter .ag-filter-body {\n  margin-bottom: 8px;\n}\n\n.ag-theme-material .ag-filter .ag-filter-body {\n  margin-top: 0;\n}\n\n.ag-theme-material .ag-filter .ag-filter-filter {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-filter .ag-filter-select {\n  margin: 8px;\n}\n\n.ag-theme-material .ag-filter input[type=radio] {\n  margin: 0 3px 0 6px;\n  width: 12px;\n  height: 17px;\n  vertical-align: top;\n}\n\n.ag-theme-material .ag-filter input[type=text],\n.ag-theme-material .ag-filter input[type=date] {\n  padding-left: 8px;\n}\n\n.ag-theme-material .ag-filter .ag-set-filter-list {\n  height: 240px;\n}\n\n.ag-theme-material .ag-filter .ag-set-filter-item {\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.ag-theme-material .ag-filter .ag-set-filter-item > div, .ag-theme-material .ag-filter .ag-set-filter-item > span {\n  margin-left: 5px;\n  display: flex;\n}\n\n.ag-theme-material .ag-filter .ag-filter-header-container:nth-child(2) {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-filter .ag-filter-apply-panel {\n  display: flex;\n  justify-content: flex-end;\n  padding: 8px;\n  padding-top: 16px;\n}\n\n.ag-theme-material .ag-filter .ag-filter-apply-panel button {\n  line-height: 1.5;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  border: 0;\n  color: #3f51b5;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n}\n\n.ag-theme-material .ag-filter .ag-filter-apply-panel button + button {\n  margin-left: 16px;\n}\n\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group,\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column {\n  height: 32px;\n}\n\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox,\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-tool-panel-column-label,\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons,\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox,\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-tool-panel-column-label,\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-column-select-panel .ag-primary-cols-list-panel {\n  border-top: 1px solid #e2e2e2;\n  padding-top: 8px;\n}\n\n.ag-theme-material .ag-column-select-panel .ag-primary-cols-list-panel > div {\n  cursor: pointer;\n}\n\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-left: 34px;\n}\n\n.ag-theme-material .ag-primary-cols-header-panel {\n  border-top: 1px solid #e2e2e2;\n  height: 56px;\n  align-items: center;\n}\n\n.ag-theme-material .ag-primary-cols-header-panel > div {\n  cursor: pointer;\n  margin: 0 8px;\n}\n\n.ag-theme-material .ag-primary-cols-header-panel .ag-filter-body {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper {\n  border-right: 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel {\n  width: 100%;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  flex: auto;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header {\n  padding: 7px 5px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header > div {\n  margin: auto 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-body-wrapper {\n  padding-top: 5px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border: 1px solid #e2e2e2;\n  border-left: 0;\n  border-right: 0;\n  padding: 8px 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel {\n  height: 56px;\n  display: flex;\n  flex: none;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-column-select-panel {\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 7px;\n  padding-top: 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-column-drop {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 8px 0;\n  padding-bottom: 16px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  padding-left: 34px;\n  padding-right: 8px;\n  margin-top: 8px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-list {\n  cursor: default;\n  margin-top: 8px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-column-drop > div > :first-child {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-column-drop:last-child {\n  border-bottom: 0;\n}\n\n.ag-theme-material .ag-numeric-header .ag-header-cell-label .ag-header-icon {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-paging-panel {\n  border-top: 1px solid #e2e2e2;\n  color: rgba(0, 0, 0, 0.54);\n  height: 56px;\n  padding: 0 24px;\n}\n\n.ag-theme-material .ag-paging-panel > span {\n  margin-left: 32px;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-icon {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-icon.ag-disabled {\n  color: rgba(0, 0, 0, 0.38);\n  opacity: 0.38;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-icon button {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel span {\n  margin: 0 8px;\n}\n\n.ag-theme-material .ag-row-selected {\n  background-color: #eee;\n}\n\n.ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell), .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell) {\n  border: 1px solid transparent;\n}\n\n.ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top, .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {\n  border-top-color: #3f51b5;\n}\n\n.ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right, .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {\n  border-right-color: #3f51b5;\n}\n\n.ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom, .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {\n  border-bottom-color: #3f51b5;\n}\n\n.ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left, .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {\n  border-left-color: #3f51b5;\n}\n\n.ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.1);\n}\n\n.ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart {\n  background-color: rgba(0, 88, 255, 0.1);\n}\n\n.ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category {\n  background-color: rgba(0, 255, 132, 0.1);\n}\n\n.ag-theme-material .ag-cell-range-selected-1:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.2);\n}\n\n.ag-theme-material .ag-cell-range-selected-2:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.3);\n}\n\n.ag-theme-material .ag-cell-range-selected-3:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.4);\n}\n\n.ag-theme-material .ag-cell-range-selected-4:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.5);\n}\n\n.ag-theme-material .ag-ltr .ag-selection-fill-top, .ag-theme-material .ag-rtl .ag-selection-fill-top {\n  border-top: 1px dashed #3f51b5;\n}\n\n.ag-theme-material .ag-ltr .ag-selection-fill-top.ag-cell.ag-cell-range-selected, .ag-theme-material .ag-rtl .ag-selection-fill-top.ag-cell.ag-cell-range-selected {\n  border-top: 1px dashed #afafaf;\n}\n\n.ag-theme-material .ag-ltr .ag-selection-fill-right, .ag-theme-material .ag-rtl .ag-selection-fill-right {\n  border-right: 1px dashed #3f51b5;\n}\n\n.ag-theme-material .ag-ltr .ag-selection-fill-right.ag-cell.ag-cell-range-selected, .ag-theme-material .ag-rtl .ag-selection-fill-right.ag-cell.ag-cell-range-selected {\n  border-right: 1px dashed #afafaf;\n}\n\n.ag-theme-material .ag-ltr .ag-selection-fill-bottom, .ag-theme-material .ag-rtl .ag-selection-fill-bottom {\n  border-bottom: 1px dashed #3f51b5;\n}\n\n.ag-theme-material .ag-ltr .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected, .ag-theme-material .ag-rtl .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected {\n  border-bottom: 1px dashed #afafaf;\n}\n\n.ag-theme-material .ag-ltr .ag-selection-fill-left, .ag-theme-material .ag-rtl .ag-selection-fill-left {\n  border-left: 1px dashed #3f51b5;\n}\n\n.ag-theme-material .ag-ltr .ag-selection-fill-left.ag-cell.ag-cell-range-selected, .ag-theme-material .ag-rtl .ag-selection-fill-left.ag-cell.ag-cell-range-selected {\n  border-left: 1px dashed #afafaf;\n}\n\n.ag-theme-material .ag-range-handle, .ag-theme-material .ag-fill-handle {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  bottom: -1px;\n  right: -1px;\n  background-color: #3f51b5;\n}\n\n.ag-theme-material .ag-fill-handle {\n  cursor: cell;\n}\n\n.ag-theme-material .ag-range-handle {\n  cursor: nwse-resize;\n}\n\n.ag-theme-material .ag-cell-inline-editing {\n  padding: 24px;\n  height: 72px;\n}\n\n.ag-theme-material .ag-cell-inline-editing, .ag-theme-material .ag-popup-editor {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-popup-editor {\n  padding: 0;\n}\n\n.ag-theme-material .ag-popup-editor .ag-large-textarea textarea {\n  height: auto;\n  padding: 24px;\n}\n\n.ag-theme-material .ag-rich-select {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-list {\n  width: 200px;\n  height: 312px;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-value {\n  padding: 0 8px 0 24px;\n  height: 48px;\n}\n\n.ag-theme-material .ag-rich-select .ag-virtual-list-item {\n  cursor: default;\n  height: 48px;\n}\n\n.ag-theme-material .ag-rich-select .ag-virtual-list-item:hover {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-row {\n  padding-left: 24px;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-row-selected {\n  background-color: #eee;\n}\n\n.ag-theme-material .ag-ltr .ag-floating-filter-button {\n  margin-left: 24px;\n}\n\n.ag-theme-material .ag-floating-filter-button button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: transparent;\n  border: 0;\n  height: 18px;\n  padding: 0;\n  width: 18px;\n}\n\n.ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-cell-value:not(:empty), .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) + .ag-group-value:not(:empty),\n.ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-cell-value:not(:empty),\n.ag-theme-material .ag-group-expanded:not(.ag-hidden) + .ag-group-value:not(:empty),\n.ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-cell-value:not(:empty),\n.ag-theme-material .ag-group-contracted:not(.ag-hidden) + .ag-group-value:not(:empty),\n.ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-cell-value:not(:empty),\n.ag-theme-material .ag-group-checkbox:not(.ag-invisible) + .ag-group-value:not(:empty) {\n  margin-left: 24px;\n}\n\n.ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-group-checkbox,\n.ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox,\n.ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox,\n.ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox {\n  margin-left: 24px;\n}\n\n.ag-theme-material .ag-group-child-count {\n  margin-left: 2px;\n}\n\n.ag-theme-material .ag-selection-checkbox span {\n  position: relative;\n}\n\n.ag-theme-material .ag-column-drop-horizontal {\n  background-color: #eee;\n  height: 48px;\n  padding-left: 24px;\n}\n\n.ag-theme-material .ag-column-drop-horizontal .ag-icon-group,\n.ag-theme-material .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-right: 24px;\n}\n\n.ag-theme-material .ag-column-drop-horizontal .ag-left-arrow,\n.ag-theme-material .ag-column-drop-horizontal .ag-right-arrow {\n  margin: 0 8px;\n  opacity: 0.54;\n}\n\n.ag-theme-material .ag-column-drop-horizontal .ag-column-drop-empty-message {\n  opacity: 0.38;\n}\n\n.ag-theme-material .ag-column-drop-cell {\n  background: #e2e2e2;\n  border-radius: 32px;\n  min-height: 32px;\n  padding: 0 4px;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-text {\n  margin: 0 8px;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button {\n  min-width: 32px;\n  margin: 0 4px;\n  opacity: 0.54;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button:hover {\n  opacity: 0.87;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drag {\n  margin-left: 16px;\n}\n\n.ag-theme-material .ag-column-drop-vertical .ag-column-drop-cell {\n  margin-top: 8px;\n}\n\n.ag-theme-material .ag-select-agg-func-popup {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background: #fff;\n  height: 140px;\n  padding: 0;\n}\n\n.ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  cursor: default;\n  line-height: 40px;\n  padding-left: 16px;\n}\n\n.ag-theme-material .ag-set-filter-list,\n.ag-theme-material .ag-menu-column-select-wrapper {\n  width: auto;\n}\n\n.ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-left: 8px;\n  margin-top: 0;\n}\n\n.ag-theme-material .ag-cell-data-changed {\n  background-color: #00acc1 !important;\n}\n\n.ag-theme-material .ag-cell-data-changed-animation {\n  background-color: transparent;\n  transition: background-color 1s;\n}\n\n.ag-theme-material .ag-stub-cell {\n  padding-left: 24px;\n  padding-top: 8px;\n}\n\n.ag-theme-material .ag-stub-cell .ag-loading-icon {\n  -webkit-animation-name: spin;\n          animation-name: spin;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-left: 8px;\n  margin-top: 8px;\n}\n\n.ag-theme-material .ag-floating-top {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-floating-bottom {\n  border-top: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-status-bar {\n  background: #fff;\n  border: 1px solid #e2e2e2;\n  border-top-width: 0;\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  padding-right: 32px;\n  padding-left: 32px;\n  line-height: 1.5;\n}\n\n.ag-theme-material .ag-name-value-value {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.ag-theme-material .ag-status-bar-center {\n  text-align: center;\n}\n\n.ag-theme-material .ag-name-value {\n  margin-left: 8px;\n  margin-right: 8px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.ag-theme-material .ag-details-row {\n  padding: 40px;\n}\n\n.ag-theme-material .ag-overlay-loading-wrapper {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.ag-theme-material .ag-overlay-loading-center {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n}\n\n.ag-theme-material .ag-side-bar {\n  background-color: #fafafa;\n  border: 1px solid #e2e2e2;\n  border-left-width: 0;\n  position: relative;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons {\n  padding-top: 32px;\n  background: #fff;\n  width: 22px;\n  position: relative;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  background: transparent;\n  border: 0;\n  color: rgba(0, 0, 0, 0.87);\n  padding: 16px 0 16px 0;\n  width: 100%;\n  margin: 0;\n  min-height: 144px;\n  border-width: 1px 0 1px 0;\n  border-style: solid;\n  border-color: transparent;\n  background-position-y: center;\n  background-position-x: center;\n  background-repeat: no-repeat;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  background-color: #fafafa;\n  margin-left: -1px;\n  padding-left: 1px;\n  border-color: #e2e2e2;\n}\n\n.ag-theme-material .ag-side-bar .ag-panel-container {\n  border-right: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-side-bar.full-width .ag-panel-container {\n  border-right: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-column-drop {\n  min-height: 50px;\n}\n\n.ag-theme-material .ag-primary-cols-filter-wrapper {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-group-component {\n  margin: 10px 5px;\n  padding: 10px 2px;\n  border: 0px solid rgba(226, 226, 226, 0.5);\n  border-top-width: 4px;\n  border-radius: 3px;\n}\n\n.ag-theme-material .ag-group-component .ag-group-component-label {\n  background-color: #fff;\n  margin-left: 8px;\n  padding: 0 2px;\n  font-size: inherit-2px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.ag-theme-material .ag-group-component .ag-group-item {\n  margin-top: 2px;\n}\n\n.ag-theme-material.ag-popup > div {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n.ag-theme-material .ag-dialog {\n  background-color: #fff;\n  border: 1px solid #e2e2e2;\n}\n\n.ag-dragging-range-handle .ag-theme-material .ag-dialog, .ag-dragging-fill-handle .ag-theme-material .ag-dialog {\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.ag-theme-material .ag-dialog .ag-dialog-title-bar {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  height: 56px;\n  font-size: inherit;\n  font-weight: 600;\n  font-family: inherit;\n  padding-left: 24px;\n  padding: 5px 10px;\n}\n\n.ag-theme-material .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button {\n  height: 20px;\n  width: 20px;\n  border-radius: 5px;\n}\n\n.ag-theme-material .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button .ag-icon {\n  line-height: 20px;\n  font-size: 20px;\n}\n\n.ag-theme-material .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button:hover, .ag-theme-material .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button.ag-has-popup {\n  background-color: #e6e6e6;\n}\n\n.ag-theme-material .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button:not(:last-child) {\n  margin-right: 5px;\n}\n\n.ag-theme-material .ag-dialog .ag-message-box .ag-message-box-button-bar {\n  height: 30px;\n  background-color: #fff;\n  padding: 2px;\n}\n\n.ag-theme-material .ag-dialog .ag-message-box .ag-message-box-button-bar button {\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-tooltip {\n  background-color: #535353;\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 2px;\n  padding: 5px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n  transition: opacity 1s;\n}\n\n.ag-theme-material .ag-tooltip.ag-tooltip-hiding {\n  opacity: 0;\n}\n\n.ag-theme-material .ag-chart .ag-chart-menu {\n  background: #fff;\n}\n\n.ag-theme-material .ag-chart .ag-chart-menu > span:hover {\n  background-color: #e6e6e6;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper > div {\n  border: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper > div.ag-selected {\n  border-color: #3f51b5;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  color: rgba(0, 0, 0, 0.87);\n  font-size: inherit-2;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected {\n  color: #3f51b5;\n}\n\n.ag-theme-material .ag-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"agGridMaterial\";\n  speak: none;\n  font-size: 18px;\n  color: #333;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.ag-theme-material .ag-icon-aggregation:before {\n  content: \"\\E900\";\n}\n\n.ag-theme-material .ag-icon-arrows:before {\n  content: \"\\E901\";\n}\n\n.ag-theme-material .ag-icon-asc:before {\n  content: \"\\E902\";\n}\n\n.ag-theme-material .ag-icon-cancel:before {\n  content: \"\\E903\";\n}\n\n.ag-theme-material .ag-icon-chart:before {\n  content: \"\\E904\";\n}\n\n.ag-theme-material .ag-icon-checkbox-checked,\n.ag-theme-material .ag-icon-checkbox-indeterminate,\n.ag-theme-material .ag-icon-checkbox-unchecked {\n  background-color: transparent;\n  line-height: 18px;\n  border-radius: 3px;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked-readonly,\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly,\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly {\n  cursor: default;\n  opacity: 0.38;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked {\n  color: #ff4081;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked:before, .ag-theme-material .ag-icon-checkbox-checked-readonly:before {\n  content: \"\\E905\";\n}\n\n.ag-theme-material .ag-icon-checkbox-indeterminate:before, .ag-theme-material .ag-icon-checkbox-indeterminate-readonly:before {\n  content: \"\\E906\";\n}\n\n.ag-theme-material .ag-icon-checkbox-unchecked:before, .ag-theme-material .ag-icon-checkbox-unchecked-readonly:before {\n  content: \"\\E907\";\n}\n\n.ag-theme-material .ag-icon-column:before {\n  content: \"\\E908\";\n}\n\n.ag-theme-material .ag-icon-columns:before {\n  content: \"\\E909\";\n}\n\n.ag-theme-material .ag-icon-contracted:before {\n  content: \"\\E90A\";\n}\n\n.ag-theme-material .ag-group-expanded .ag-icon-contracted:empty:before {\n  content: \"\\E932\";\n}\n\n.ag-theme-material .ag-icon-copy:before {\n  content: \"\\E90B\";\n}\n\n.ag-theme-material .ag-icon-cross:before {\n  content: \"\\E90C\";\n}\n\n.ag-theme-material .ag-icon-cut:before {\n  content: \"\\E90D\";\n}\n\n.ag-theme-material .ag-icon-data:before {\n  content: \"\\E90E\";\n}\n\n.ag-theme-material .ag-icon-desc:before {\n  content: \"\\E90F\";\n}\n\n.ag-theme-material .ag-icon-expanded:before {\n  content: \"\\E910\";\n}\n\n.ag-theme-material .ag-icon-eye-slash:before {\n  content: \"\\E911\";\n}\n\n.ag-theme-material .ag-icon-eye:before {\n  content: \"\\E912\";\n}\n\n.ag-theme-material .ag-icon-filter:before {\n  content: \"\\E913\";\n}\n\n.ag-theme-material .ag-icon-first:before {\n  content: \"\\E914\";\n}\n\n.ag-theme-material .ag-icon-grip:before, .ag-theme-material .ag-icon-row-drag:before {\n  content: \"\\E915\";\n}\n\n.ag-theme-material .ag-icon-group:before {\n  content: \"\\E916\";\n}\n\n.ag-theme-material .ag-icon-indeterminate:before {\n  content: \"\\E917\";\n}\n\n.ag-theme-material .ag-icon-last:before {\n  content: \"\\E918\";\n}\n\n.ag-theme-material .ag-icon-left:before, .ag-theme-material .ag-right-arrow:before {\n  content: \"\\E919\";\n}\n\n.ag-theme-material .ag-icon-loading:before {\n  content: \"\\E91A\";\n}\n\n.ag-theme-material .ag-icon-maximize:before {\n  content: \"\\E91B\";\n}\n\n.ag-theme-material .ag-icon-menu:before {\n  content: \"\\E91C\";\n}\n\n.ag-theme-material .ag-icon-minimize:before {\n  content: \"\\E91D\";\n}\n\n.ag-theme-material .ag-icon-minus:before {\n  content: \"\\E91E\";\n}\n\n.ag-theme-material .ag-icon-next:before {\n  content: \"\\E91F\";\n}\n\n.ag-theme-material .ag-icon-none:before {\n  content: \"\\E920\";\n}\n\n.ag-theme-material .ag-icon-not-allowed:before {\n  content: \"\\E921\";\n}\n\n.ag-theme-material .ag-icon-paste:before {\n  content: \"\\E922\";\n}\n\n.ag-theme-material .ag-icon-pin:before {\n  content: \"\\E923\";\n}\n\n.ag-theme-material .ag-icon-pivot:before {\n  content: \"\\E924\";\n}\n\n.ag-theme-material .ag-icon-plus:before {\n  content: \"\\E925\";\n}\n\n.ag-theme-material .ag-icon-previous:before {\n  content: \"\\E926\";\n}\n\n.ag-theme-material .ag-icon-radio-button-off:before {\n  content: \"\\E927\";\n}\n\n.ag-theme-material .ag-icon-radio-button-on {\n  color: #ff4081;\n}\n\n.ag-theme-material .ag-icon-radio-button-on:before {\n  content: \"\\E928\";\n}\n\n.ag-theme-material .ag-icon-right:before, .ag-theme-material .ag-right-arrow:before {\n  content: \"\\E929\";\n}\n\n.ag-theme-material .ag-icon-save:before {\n  content: \"\\E92A\";\n}\n\n.ag-theme-material .ag-icon-small-down:before {\n  content: \"\\E92B\";\n}\n\n.ag-theme-material .ag-icon-small-left:before {\n  content: \"\\E92C\";\n}\n\n.ag-theme-material .ag-icon-small-right:before {\n  content: \"\\E92D\";\n}\n\n.ag-theme-material .ag-icon-small-up:before {\n  content: \"\\E92E\";\n}\n\n.ag-theme-material .ag-icon-tick:before {\n  content: \"\\E92F\";\n}\n\n.ag-theme-material .ag-icon-tree-closed:before {\n  content: \"\\E930\";\n}\n\n.ag-theme-material .ag-icon-tree-indeterminate:before {\n  content: \"\\E931\";\n}\n\n.ag-theme-material .ag-icon-tree-open:before {\n  content: \"\\E932\";\n}\n\n.ag-theme-material .ag-rtl {\n  text-align: right;\n}\n\n.ag-theme-material .ag-rtl .ag-numeric-cell {\n  text-align: left;\n}\n\n.ag-theme-material .ag-rtl .ag-radio-button-label, .ag-theme-material .ag-rtl .ag-checkbox-label {\n  margin-right: 8px;\n  margin-left: 0;\n}\n\n.ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-left: 8px;\n  padding-right: 32px;\n}\n\n.ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox,\n.ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons,\n.ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox,\n.ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-left: 0;\n  margin-right: 34px;\n}\n\n.ag-theme-material .ag-rtl .ag-header-select-all {\n  margin-left: 24px;\n  margin-right: 0;\n}\n\n.ag-theme-material .ag-rtl .ag-selection-checkbox,\n.ag-theme-material .ag-rtl .ag-group-checkbox,\n.ag-theme-material .ag-rtl .ag-group-expanded,\n.ag-theme-material .ag-rtl .ag-group-contracted {\n  display: inline-flex;\n}\n\n.ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty), .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty),\n.ag-theme-material .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty),\n.ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty),\n.ag-theme-material .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty),\n.ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty),\n.ag-theme-material .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty),\n.ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty) {\n  margin-right: 24px;\n  margin-left: initial;\n}\n\n.ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-checkbox,\n.ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-checkbox,\n.ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-checkbox,\n.ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-checkbox {\n  margin-right: 24px;\n  margin-left: initial;\n}\n\n.ag-theme-material .ag-rtl .ag-group-child-count {\n  margin-left: unset;\n  margin-right: 2px;\n}\n\n.ag-theme-material .ag-rtl .ag-column-drop-horizontal {\n  padding-right: 24px;\n}\n\n.ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-group,\n.ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-left: 24px;\n  margin-right: 0;\n}\n\n.ag-theme-material .ag-rtl .ag-floating-filter-button {\n  margin-right: 24px;\n}\n\n.ag-theme-material .ag-rtl .ag-set-filter-item > div, .ag-theme-material .ag-rtl .ag-set-filter-item > span {\n  margin-left: 0;\n  margin-right: 5px;\n}\n\n.ag-theme-material .ag-rtl .ag-header .ag-header-cell-resize::after {\n  border-left: 1px solid #e2e2e2;\n  border-right: 0;\n}\n\n.ag-theme-material .ag-rtl .ag-side-bar .ag-panel-container {\n  border-left: 1px solid #e2e2e2;\n  border-right: 0;\n}\n\n.ag-theme-material .ag-rtl .ag-side-bar.full-width .ag-panel-container {\n  border-left: 0;\n}\n\n.ag-theme-material .sass-variables::after {\n  content: '{ \"autoSizePadding\": \"24px\", \"headerHeight\": \"56px\", \"groupPaddingSize\": \"42px\", \"footerPaddingAddition\": \"32px\", \"virtualItemHeight\": \"40px\", \"aggFuncPopupHeight\": \"140px\", \"checkboxIndentWidth\": \"26px\", \"leafNodePadding\": \"24px\", \"rowHeight\": \"48px\", \"gridSize\": \"8px\", \"iconSize\": \"18px\" }';\n  display: none;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked,\n.ag-theme-material .ag-icon-checkbox-checked-readonly,\n.ag-theme-material .ag-icon-checkbox-unchecked,\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly,\n.ag-theme-material .ag-icon-checkbox-indeterminate,\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly,\n.ag-theme-material .ag-icon-radio-button-on,\n.ag-theme-material .ag-icon-radio-button-off {\n  height: 24px;\n  width: 24px;\n  font-size: 24px;\n  line-height: 24px;\n}\n\n.ag-theme-material .ag-header-cell, .ag-theme-material .ag-header-group-cell {\n  transition: background-color 0.5s;\n}\n\n.ag-theme-material .ag-cell-highlight {\n  background-color: #fce4ec !important;\n}\n\n.ag-theme-material .ag-cell-highlight-animation {\n  transition: background-color 1s;\n}\n\n.ag-theme-material .ag-menu-option {\n  height: 38px;\n}\n\n.ag-theme-material .ag-side-bar {\n  border-bottom: 0;\n  border-right: 0;\n  border-top: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons button {\n  border: 0;\n  color: rgba(0, 0, 0, 0.54);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 600;\n  background: transparent;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  background-color: transparent;\n  border-width: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-left: 2px solid #3f51b5;\n  background-color: #fafafa;\n  margin-left: -2px;\n  padding-left: 1px;\n}\n\n.ag-theme-material .ag-side-bar .ag-filter-toolpanel-body {\n  background-color: #fff;\n}\n\n.ag-theme-material .ag-status-bar {\n  border-top-width: 1px;\n}\n\n.ag-theme-material .ag-rtl .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-left: 0;\n  margin-left: 0;\n  padding-left: 0;\n  border-right: 2px solid #3f51b5;\n  margin-right: -2px;\n  padding-right: 1px;\n}\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n.ag-grid-table {\n  height: calc(100vh - 30rem);\n}\n\n@media screen and (max-height: 800px) {\n  .ag-grid-table {\n    height: 620px;\n  }\n}\n\n.ag-grid-table .ag-header-cell .ag-cell-label-container .ag-header-icon.ag-filter-icon {\n  display: none;\n}\n\n.ag-grid-table .ag-filter-select {\n  padding: 0.3rem;\n  background: transparent;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.ag-grid-table .ag-filter-filter {\n  margin-right: 10px;\n  margin-left: 10px;\n  padding-bottom: 0 !important;\n  padding-bottom: 0 !important;\n  height: 25px !important;\n  margin-top: 10px;\n  margin-bottom: 14px !important;\n}\n\n.ag-grid-table .ag-input-text-wrapper input {\n  padding-bottom: 0 !important;\n}\n\n.ag-grid-table .ag-cell-inline-editing {\n  height: 62px !important;\n}\n\n.ag-grid-table .ag-cell-inline-editting,\n.ag-grid-table .ag-popup-editor {\n  padding-bottom: 12px;\n}\n\n@media screen and (max-width: 614px) {\n  .ag-grid-table .ag-grid-table-actions-right {\n    flex-grow: 1;\n  }\n}\n\n@media screen and (max-width: 614px) and (min-width: 443px) {\n  .ag-grid-table .ag-grid-table-actions-left {\n    display: flex;\n    flex-grow: 1;\n    justify-content: flex-end;\n  }\n}\n\n.ag-grid-table .ag-horizontal-left-spacer, .ag-grid-table .ag-horizontal-right-spacer {\n  overflow-x: auto;\n}\n\n.ag-grid-table .ag-icon-checkbox-checked:empty {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/ag-grid/checkbox-checked.svg */ "./resources/assets/images/ag-grid/checkbox-checked.svg")) + ");\n}\n\n.ag-grid-table .ag-icon-checkbox-checked-readonly {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/ag-grid/checkbox-checked-readonly.svg */ "./resources/assets/images/ag-grid/checkbox-checked-readonly.svg")) + ");\n}\n\n.ag-grid-table .ag-icon-checkbox-indeterminate {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/ag-grid/checkbox-indeterminate.svg */ "./resources/assets/images/ag-grid/checkbox-indeterminate.svg")) + ");\n}\n\n.ag-grid-table .ag-icon-checkbox-indeterminate-readonly {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/ag-grid/checkbox-indeterminate-readonly.svg */ "./resources/assets/images/ag-grid/checkbox-indeterminate-readonly.svg")) + ");\n}\n\n.ag-grid-table ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n.ag-grid-table ::-webkit-scrollbar-thumb {\n  background: #dae1e7;\n  border-radius: 20px;\n}\n\n.ag-grid-table ::-webkit-scrollbar-track {\n  background: #f8f8f8;\n  border-radius: 20px;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material {\n  background: transparent;\n  color: #c2c6dc;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-header {\n  background: transparent;\n  color: #fff;\n  border-bottom-color: #414561;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-cell-last-left-pinned {\n  border-right-color: #414561 !important;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-floating-filter-input {\n  color: #c2c6dc;\n  border-bottom-color: #414561;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-row-hover,\n.theme-dark .ag-grid-table.ag-theme-material .ag-header-cell:hover {\n  background-color: #262c49;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-row-selected {\n  background: #262c49;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-row,\n.theme-dark .ag-grid-table.ag-theme-material .ag-header-cell,\n.theme-dark .ag-grid-table.ag-theme-material .ag-header-group-cell,\n.theme-dark .ag-grid-table.ag-theme-material .ag-row,\n.theme-dark .ag-grid-table.ag-theme-material .ag-pinned-left-header,\n.theme-dark .ag-grid-table.ag-theme-material .ag-horizontal-left-spacer,\n.theme-dark .ag-grid-table.ag-theme-material .ag-horizontal-right-spacer {\n  border-color: #414561;\n}\n\n.theme-dark .ag-grid-table .ag-icon-filter {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/ag-grid/dark-filter.svg */ "./resources/assets/images/ag-grid/dark-filter.svg")) + ");\n}\n\n.theme-dark .ag-grid-table .ag-icon-filter {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/ag-grid/dark-filter.svg */ "./resources/assets/images/ag-grid/dark-filter.svg")) + ");\n}\n\n.theme-dark .ag-grid-table .ag-icon-checkbox-unchecked {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/ag-grid/dark-checkbox-unchecked.svg */ "./resources/assets/images/ag-grid/dark-checkbox-unchecked.svg")) + ");\n}\n\n.theme-dark .ag-grid-table .ag-icon-asc {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/ag-grid/dark-asc.svg */ "./resources/assets/images/ag-grid/dark-asc.svg")) + ");\n}\n\n.theme-dark .ag-grid-table .ag-icon-desc {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/ag-grid/dark-desc.svg */ "./resources/assets/images/ag-grid/dark-desc.svg")) + ");\n}\n\n.theme-dark .ag-grid-table ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n.theme-dark .ag-grid-table ::-webkit-scrollbar-thumb {\n  background: #7367F0;\n  border-radius: 20px;\n}\n\n.theme-dark .ag-grid-table ::-webkit-scrollbar-track {\n  background: #262c49;\n  border-radius: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stockManagement.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/stockManagement.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-header-cell-label{\n  justify-content: center!important;\n}\n.ag-header-cell{\n  padding: 0!important;\n}\n.ag-header-cell:first-child{\n  padding: 0 24px!important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stockManagement.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/stockManagement.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./stockManagement.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stockManagement.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vs-dropdown",
        {
          staticClass: "ml-auto md:block hidden cursor-pointer",
          staticStyle: { "margin-left": "15px!important" },
          attrs: { "vs-trigger-click": "" }
        },
        [
          _c("vs-button", {
            attrs: { radius: "", icon: "icon-edit", "icon-pack": "feather" }
          }),
          _vm._v(" "),
          _c(
            "vs-dropdown-menu",
            { staticClass: "w-32" },
            [
              _c("vs-dropdown-item", [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center",
                    on: { click: _vm.createBundle }
                  },
                  [_c("span", [_vm._v("Creatge bundle")])]
                )
              ]),
              _vm._v(" "),
              _c("vs-dropdown-item", [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center",
                    on: { click: _vm.createSingle }
                  },
                  [_c("span", [_vm._v("Create Single item")])]
                )
              ]),
              _vm._v(" "),
              _c("vs-dropdown-item", [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center",
                    on: { click: _vm.deleteItem }
                  },
                  [_c("span", [_vm._v("Delete item")])]
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: {
            "vs-title": "New Message",
            "vs-accept-text": "Send",
            "vs-is-valid": _vm.validateForm,
            "vs-active": _vm.activePrompt
          },
          on: {
            "vs-cancel": _vm.clearFields,
            "vs-accept": _vm.sendMail,
            "vs-close": _vm.clearFields,
            "update:vsActive": function($event) {
              _vm.activePrompt = $event
            },
            "update:vs-active": function($event) {
              _vm.activePrompt = $event
            }
          }
        },
        [
          _c(
            "VuePerfectScrollbar",
            {
              staticClass: "scroll-area p-4",
              attrs: { settings: _vm.settings }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                    }
                  }
                },
                [
                  _c("v-select", {
                    attrs: {
                      "label-placeholder": "Subject",
                      options: ["TOYOTA"]
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: {
                      name: "mailSubject",
                      "label-placeholder": "Part Number"
                    },
                    model: {
                      value: _vm.partNum,
                      callback: function($$v) {
                        _vm.partNum = $$v
                      },
                      expression: "partNum"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: {
                      name: "mailCC",
                      "label-placeholder": "Description"
                    },
                    model: {
                      value: _vm.description,
                      callback: function($$v) {
                        _vm.description = $$v
                      },
                      expression: "description"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: {
                      name: "mailBCC",
                      "label-placeholder": "Description Full"
                    },
                    model: {
                      value: _vm.descriptionFull,
                      callback: function($$v) {
                        _vm.descriptionFull = $$v
                      },
                      expression: "descriptionFull"
                    }
                  }),
                  _vm._v(" "),
                  _c("ul", { staticClass: "demo-alignment" }, [
                    _c(
                      "li",
                      [
                        _c(
                          "vs-checkbox",
                          {
                            attrs: { "vs-value": "ebay" },
                            model: {
                              value: _vm.checkBox1,
                              callback: function($$v) {
                                _vm.checkBox1 = $$v
                              },
                              expression: "checkBox1"
                            }
                          },
                          [_vm._v("Ebay")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "vs-checkbox",
                          {
                            attrs: { "vs-value": "amazon" },
                            model: {
                              value: _vm.checkBox1,
                              callback: function($$v) {
                                _vm.checkBox1 = $$v
                              },
                              expression: "checkBox1"
                            }
                          },
                          [_vm._v("Amazon")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "vs-checkbox",
                          {
                            attrs: { "vs-value": "magento" },
                            model: {
                              value: _vm.checkBox1,
                              callback: function($$v) {
                                _vm.checkBox1 = $$v
                              },
                              expression: "checkBox1"
                            }
                          },
                          [_vm._v("Magento")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "vs-checkbox",
                          {
                            attrs: { "vs-value": "other" },
                            model: {
                              value: _vm.checkBox1,
                              callback: function($$v) {
                                _vm.checkBox1 = $$v
                              },
                              expression: "checkBox1"
                            }
                          },
                          [_vm._v("Other")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm.showTable === true
                    ? _c("div", [_c("h1", [_vm._v("here will be table")])])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: {
                      name: "mailSubject",
                      "label-placeholder": "Part Number"
                    },
                    model: {
                      value: _vm.partNum,
                      callback: function($$v) {
                        _vm.partNum = $$v
                      },
                      expression: "partNum"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: {
                      name: "mailCC",
                      "label-placeholder": "Description"
                    },
                    model: {
                      value: _vm.description,
                      callback: function($$v) {
                        _vm.description = $$v
                      },
                      expression: "description"
                    }
                  })
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stockManagement.vue?vue&type=template&id=6758955f&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/stockManagement.vue?vue&type=template&id=6758955f& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "ag-grid-demo" } },
    [
      _c(
        "vx-card",
        [
          _c(
            "div",
            { staticClass: "flex flex-wrap justify-between items-center" },
            [
              _c(
                "div",
                {
                  staticClass: "mb-4 md:mb-0 mr-4 ag-grid-table-actions-left",
                  staticStyle: { display: "flex", "align-items": "center" }
                },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "cursor-pointer",
                      attrs: { "vs-trigger-click": "" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                        },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v(
                              _vm._s(
                                _vm.currentPage * _vm.paginationPageSize -
                                  (_vm.paginationPageSize - 1)
                              ) +
                                " - " +
                                _vm._s(
                                  _vm.contacts.length -
                                    _vm.currentPage * _vm.paginationPageSize >
                                    0
                                    ? _vm.currentPage * _vm.paginationPageSize
                                    : _vm.contacts.length
                                ) +
                                " of " +
                                _vm._s(_vm.contacts.length)
                            )
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: {
                              icon: "ChevronDownIcon",
                              svgClasses: "h-4 w-4"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.gridApi.paginationSetPageSize(20)
                                }
                              }
                            },
                            [_c("span", [_vm._v("20")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.gridApi.paginationSetPageSize(50)
                                }
                              }
                            },
                            [_c("span", [_vm._v("50")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.gridApi.paginationSetPageSize(100)
                                }
                              }
                            },
                            [_c("span", [_vm._v("100")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.gridApi.paginationSetPageSize(150)
                                }
                              }
                            },
                            [_c("span", [_vm._v("150")])]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("singlebundle")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap items-center justify-between ag-grid-table-actions-right"
                },
                [
                  _c("vs-input", {
                    staticClass: "mb-4 md:mb-0 mr-4",
                    attrs: { placeholder: "Search..." },
                    on: { input: _vm.updateSearchQuery },
                    model: {
                      value: _vm.searchQuery,
                      callback: function($$v) {
                        _vm.searchQuery = $$v
                      },
                      expression: "searchQuery"
                    }
                  })
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("ag-grid-vue", {
            staticClass: "ag-theme-material w-100 my-4 ag-grid-table",
            staticStyle: {
              "text-align": "center!important",
              padding: "0!important"
            },
            attrs: {
              gridOptions: _vm.gridOptions,
              columnDefs: _vm.columnDefs,
              defaultColDef: _vm.defaultColDef,
              rowData: _vm.contacts,
              rowSelection: "multiple",
              colResizeDefault: "shift",
              animateRows: true,
              floatingFilter: true,
              pagination: true,
              paginationPageSize: _vm.paginationPageSize,
              suppressPaginationPanel: true
            }
          }),
          _vm._v(" "),
          _c("vs-pagination", {
            attrs: { total: _vm.totalPages, max: _vm.maxPageNumbers },
            model: {
              value: _vm.currentPage,
              callback: function($$v) {
                _vm.currentPage = $$v
              },
              expression: "currentPage"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/ag-grid/checkbox-checked-readonly.svg":
/*!***********************************************************************!*\
  !*** ./resources/assets/images/ag-grid/checkbox-checked-readonly.svg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/checkbox-checked-readonly.svg?8552be8136a604b0920cb495566f4bb5";

/***/ }),

/***/ "./resources/assets/images/ag-grid/checkbox-checked.svg":
/*!**************************************************************!*\
  !*** ./resources/assets/images/ag-grid/checkbox-checked.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/checkbox-checked.svg?74781636a8e6651466a2f5db2090cb67";

/***/ }),

/***/ "./resources/assets/images/ag-grid/checkbox-indeterminate-readonly.svg":
/*!*****************************************************************************!*\
  !*** ./resources/assets/images/ag-grid/checkbox-indeterminate-readonly.svg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/checkbox-indeterminate-readonly.svg?7b5e970eeefb9553e232c3317cfcf430";

/***/ }),

/***/ "./resources/assets/images/ag-grid/checkbox-indeterminate.svg":
/*!********************************************************************!*\
  !*** ./resources/assets/images/ag-grid/checkbox-indeterminate.svg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/checkbox-indeterminate.svg?fa868cd97176cc2529f466e9518d4e8e";

/***/ }),

/***/ "./resources/assets/images/ag-grid/dark-asc.svg":
/*!******************************************************!*\
  !*** ./resources/assets/images/ag-grid/dark-asc.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/dark-asc.svg?193c66e0a4f7ac86e7cba4c5cf020dab";

/***/ }),

/***/ "./resources/assets/images/ag-grid/dark-checkbox-unchecked.svg":
/*!*********************************************************************!*\
  !*** ./resources/assets/images/ag-grid/dark-checkbox-unchecked.svg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/dark-checkbox-unchecked.svg?8dd5230ac6267f000785185d06bc4751";

/***/ }),

/***/ "./resources/assets/images/ag-grid/dark-desc.svg":
/*!*******************************************************!*\
  !*** ./resources/assets/images/ag-grid/dark-desc.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/dark-desc.svg?9d54b193629c149f84da807bbcd9330f";

/***/ }),

/***/ "./resources/assets/images/ag-grid/dark-filter.svg":
/*!*********************************************************!*\
  !*** ./resources/assets/images/ag-grid/dark-filter.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/dark-filter.svg?e8a8cb8c629aab53ff53e8532f22c4e9";

/***/ }),

/***/ "./resources/assets/scss/agGridStyleOverride.scss":
/*!********************************************************!*\
  !*** ./resources/assets/scss/agGridStyleOverride.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!./agGridStyleOverride.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/assets/scss/agGridStyleOverride.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/singleBundle.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/singleBundle.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _singleBundle_vue_vue_type_template_id_c06f5942_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleBundle.vue?vue&type=template&id=c06f5942&scoped=true& */ "./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&scoped=true&");
/* harmony import */ var _singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleBundle.vue?vue&type=script&lang=js& */ "./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _singleBundle_vue_vue_type_template_id_c06f5942_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _singleBundle_vue_vue_type_template_id_c06f5942_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c06f5942",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/SingleBundle/singleBundle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./singleBundle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_template_id_c06f5942_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./singleBundle.vue?vue&type=template&id=c06f5942&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_template_id_c06f5942_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_template_id_c06f5942_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/data.json":
/*!******************************************!*\
  !*** ./resources/js/src/views/data.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, default */
/***/ (function(module) {

module.exports = [{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"JIGUL","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"TOYOTA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"BMV","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"AUDI","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"MAZDA","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"},{"brand":"PORSH","part number":"547857480","description":"Litronic Industries","stores":"ebey","qty":"0","min stock":"0","list price":"160.50","min price":"0","max price":"0","last modified":"May 27, 2019 Vennia L","location":"B2-017"}];

/***/ }),

/***/ "./resources/js/src/views/stockManagement.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/stockManagement.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stockManagement_vue_vue_type_template_id_6758955f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockManagement.vue?vue&type=template&id=6758955f& */ "./resources/js/src/views/stockManagement.vue?vue&type=template&id=6758955f&");
/* harmony import */ var _stockManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stockManagement.vue?vue&type=script&lang=js& */ "./resources/js/src/views/stockManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _stockManagement_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stockManagement.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/stockManagement.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _stockManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stockManagement_vue_vue_type_template_id_6758955f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stockManagement_vue_vue_type_template_id_6758955f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/stockManagement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/stockManagement.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/stockManagement.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./stockManagement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stockManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/stockManagement.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/stockManagement.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./stockManagement.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stockManagement.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/stockManagement.vue?vue&type=template&id=6758955f&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/stockManagement.vue?vue&type=template&id=6758955f& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_template_id_6758955f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./stockManagement.vue?vue&type=template&id=6758955f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stockManagement.vue?vue&type=template&id=6758955f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_template_id_6758955f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stockManagement_vue_vue_type_template_id_6758955f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);