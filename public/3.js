(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "cellRenderer"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "deleteConfirm",
  data: function data() {
    return {
      password: "",
      confirm_password: "",
      test: false
    };
  },
  computed: {
    showConfirmDelete: {
      set: function set(val) {
        this.test = val;
      },
      get: function get() {
        return this.$store.getters.SHOWDELETE;
      }
    }
  },
  methods: {
    deleteThis: function deleteThis() {
      this.$store.dispatch("GET_DELETE_MODULE", false); // this.$validator.validateAll().then(result => {
      //     console.log(result)
      // })
    },
    clearDelete: function clearDelete() {
      this.$store.dispatch("GET_DELETE_MODULE", false);
      this.password = "";
      this.confirm_password = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/formElse.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/formElse.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "formElse",
  data: function data() {
    return {
      obj_store: {
        "brand_name": "Paste desc to search",
        "description": "Paste desc to search",
        "parts_number": "Paste desc to search",
        "qty": "Qty"
      }
    };
  },
  props: {
    table_store: Array
  },
  methods: {
    saveChanges: function saveChanges() {
      this.$emit("saveChanges", this.table_store);
    },
    deleteRow: function deleteRow(id) {
      this.table_store.splice(id, 1);

      for (var i = 0; i < this.table_store.length; i++) {
        this.table_store[i].id = i;
      }
    },
    addRow: function addRow() {
      this.table_store.push({
        "id": null,
        "brand_name": '',
        "description": '',
        "parts_number": '',
        "qty": '',
        "stock_qty": "0"
      });

      for (var i = 0; i < this.table_store.length; i++) {
        this.table_store[i].id = i;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_simple_suggest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-simple-suggest */ "./node_modules/vue-simple-suggest/dist/es6.js");
/* harmony import */ var vue_simple_suggest_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-simple-suggest/dist/styles.css */ "./node_modules/vue-simple-suggest/dist/styles.css");
/* harmony import */ var vue_simple_suggest_dist_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_simple_suggest_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _formElse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formElse */ "./resources/js/src/components/SingleBundle/formElse.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "showModulSingleBungle",
  components: {
    VueSimpleSuggest: vue_simple_suggest__WEBPACK_IMPORTED_MODULE_1__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_3___default.a,
    "form-else": _formElse__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fillTable: false,
      //scroll
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.30
      },
      test: false,
      table_store: [],
      moduleStock: null
    };
  },
  created: function created() {
    this.moduleStock = Object.assign({}, this.$store.getters.STORE_EDIT);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])({
    showTable: 'SHOWTABLE'
  }), {
    showBundleSingle: {
      set: function set(val) {
        this.test = val;
      },
      get: function get() {
        return this.$store.getters.SHOWBUNDLESINGLE;
      }
    }
  }),
  methods: {
    simpleSuggestionList: function simpleSuggestionList() {
      return ['TOYOTA', 'RENAULT', 'PEUGEUT'];
    },
    saveChanges: function saveChanges(val) {
      this.table_store = val;
      console.log(this.table_store);
      this.fillTable = false;
    },
    clearFields: function clearFields() {
      this.fillTable = false;
      this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {
        module: false,
        showTable: false
      });
    },
    addChip: function addChip() {
      this.moduleStock.chips.push(this.moduleStock.chip);
      this.chip = '';
    },
    removeChip: function removeChip(item) {
      this.moduleStock.chips.splice(this.moduleStock.chips.indexOf(item), 1);
    },
    create: function create() {
      this.clearFields(); // return this.$validator.validateAll()
      //     .then(result => {
      //         if(result){
      //             console.log("send")
      //         }
      //     })
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteConfirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteConfirm */ "./resources/js/src/components/SingleBundle/deleteConfirm.vue");
/* harmony import */ var _showModulSingleBungle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showModulSingleBungle */ "./resources/js/src/components/SingleBundle/showModulSingleBungle.vue");
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
    deleteConfirm: _deleteConfirm__WEBPACK_IMPORTED_MODULE_0__["default"],
    showModulSingleBungle: _showModulSingleBungle__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showTable: false
    };
  },
  computed: {
    show: function show() {
      return this.$store.getters.SHOWBUNDLESINGLE;
    }
  },
  methods: {
    createBundle: function createBundle() {
      this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {
        module: true,
        showTable: true
      });
    },
    createSingle: function createSingle() {
      this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {
        module: true,
        showTable: false
      });
    },
    deleteItem: function deleteItem() {
      this.$store.dispatch("GET_DELETE_MODULE", true);
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
/* harmony import */ var _components_SingleBundle_cellRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SingleBundle/cellRenderer */ "./resources/js/src/components/SingleBundle/cellRenderer.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_4__);
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





var SquareComponent = vue__WEBPACK_IMPORTED_MODULE_4___default.a.extend({
  template: '<vs-chip color="primary" >{{params.valueFormatted}}</vs-chip>'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"],
    singlebundle: _components_SingleBundle_singleBundle__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      searchQuery: '',
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
      contacts: _data_json__WEBPACK_IMPORTED_MODULE_1__,
      context: null
    };
  },
  beforeMount: function beforeMount() {
    this.columnDefs = [{
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
      field: 'partNum',
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
      width: 75
    }, {
      headerName: 'Min Stock',
      field: 'minStock',
      filter: true,
      width: 150
    }, {
      headerName: 'List price',
      field: 'listPrice',
      filter: true,
      width: 100
    }, {
      headerName: 'Min price',
      field: 'minPrice',
      filter: true,
      width: 100
    }, {
      headerName: 'Max price',
      field: 'maxPrice',
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
    }, {
      headerName: 'Categories',
      field: 'categories',
      filter: true,
      width: 125
    }, {
      headerName: 'Tags',
      field: 'chips',
      cellRenderer: "test",
      width: 125
    }];
    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      test: SquareComponent
    };
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
    },
    test: function test(e) {
      // console.log(e)
      if (e.colDef.headerName === 'PartNumber') {
        if (e.data.showTable) {
          this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {
            module: true,
            showTable: true
          });
        } else {
          this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {
            module: true,
            showTable: false
          });
        }

        this.$store.dispatch("GET_EDIT_STORE", e.data);
      }
    },
    select: function select() {
      var selectedNodes = this.gridApi.getSelectedNodes(); // console.log(selectedNodes)
      // debugger;
      // console.log(this.columnDefs.filter(item => item.checkboxSelection).map(item => ))
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\npre.selected.hljs {\n  margin: 8px 0;\n  height: 295px;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 1rem;\n}\n.vue-simple-suggest.designed .input-wrapper input {\n  color: inherit;\n  position: relative;\n  padding: 0.7rem;\n  font-size: 1rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.vue-simple-suggest.designed.focus .input-wrapper input {\n  border: 1px solid rgba(var(--vs-primary), 1) !important;\n}\n.vue-simple-suggest.designed .suggestions {\n  border-radius: 5px;\n}\n.vue-simple-suggest.designed .suggestions .suggest-item {\n  padding: 0.8rem 1rem;\n}\n.vue-simple-suggest.designed .suggestions .suggest-item.hover, .vue-simple-suggest.designed .suggestions .suggest-item.selected {\n  background-color: rgba(var(--vs-primary), 1) !important;\n}\n.theme-dark .vx-card .vue-simple-suggest input {\n  background: #262c49 !important;\n}\n.theme-dark .vx-card .vue-simple-suggest .suggestions {\n  background: #262c49 !important;\n}\n.theme-dark .vx-card pre.selected.hljs {\n  border-color: #414561 !important;\n}\n.theme-dark .vue-simple-suggest input {\n  background: #10163a !important;\n}\n.theme-dark .vue-simple-suggest .suggestions {\n  background: #10163a !important;\n}\n.theme-dark pre.selected.hljs {\n  border-color: #414561 !important;\n}\nbody .vs-component .vs-dialog {\n  max-width: 650px !important;\n}\n.demo-alignment > * {\n  margin-top: 0 !important;\n}\n\n/*.my_table{*/\n\n/*    border: 1px solid;*/\n\n/*}*/\n\n/*.my_table_header{*/\n\n/*    display: flex;*/\n\n/*}*/", ""]);

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
exports.push([module.i, ".ag-header-cell-label{\n  justify-content: center!important;\n}\n.ag-header-cell{\n  padding: 0!important;\n}\n.ag-header-cell:first-child{\n  padding: 0 24px!important;\n}\n.ag-theme-material .ag-cell{\n  line-height: 0!important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showModulSingleBungle.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=template&id=dae8e18c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=template&id=dae8e18c&scoped=true& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("button", [_vm._v("Invoke Parent")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=template&id=3b6e3370&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=template&id=3b6e3370&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "vs-prompt",
    {
      attrs: {
        "vs-title": "Confirm password",
        "vs-accept-text": "Delete",
        "vs-active": _vm.showConfirmDelete
      },
      on: {
        "vs-cancel": _vm.clearDelete,
        "vs-accept": _vm.deleteThis,
        "vs-close": _vm.clearDelete,
        "update:vsActive": function($event) {
          _vm.showConfirmDelete = $event
        },
        "update:vs-active": function($event) {
          _vm.showConfirmDelete = $event
        }
      }
    },
    [
      _c("vs-input", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "required|min:6|max:10",
            expression: "'required|min:6|max:10'"
          }
        ],
        ref: "password",
        staticClass: "w-full mt-6",
        attrs: {
          type: "password",
          "data-vv-validate-on": "blur",
          name: "password",
          "label-placeholder": "Password"
        },
        model: {
          value: _vm.password,
          callback: function($$v) {
            _vm.password = $$v
          },
          expression: "password"
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "text-danger text-sm" }, [
        _vm._v(_vm._s(_vm.errors.first("password")))
      ]),
      _vm._v(" "),
      _c("vs-input", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "min:6|max:10|confirmed:password",
            expression: "'min:6|max:10|confirmed:password'"
          }
        ],
        staticClass: "w-full mt-6",
        attrs: {
          type: "password",
          "data-vv-validate-on": "blur",
          "data-vv-as": "password",
          name: "confirm_password",
          "label-placeholder": "Confirm Password"
        },
        model: {
          value: _vm.confirm_password,
          callback: function($$v) {
            _vm.confirm_password = $$v
          },
          expression: "confirm_password"
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "text-danger text-sm" }, [
        _vm._v(_vm._s(_vm.errors.first("confirm_password")))
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/formElse.vue?vue&type=template&id=cb298cdc&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/formElse.vue?vue&type=template&id=cb298cdc&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        "vs-button",
        {
          attrs: {
            color: "success",
            type: "relief",
            icon: "icon-save",
            "icon-pack": "feather"
          },
          on: { click: _vm.saveChanges }
        },
        [_vm._v("Save Changes")]
      ),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          staticClass: "mt-5 mb-5",
          attrs: { data: _vm.table_store },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, elem) {
                  return _c(
                    "vs-tr",
                    { key: elem },
                    [
                      _c(
                        "vs-td",
                        { attrs: { data: data[elem].brand_name } },
                        [
                          _c("vs-input", {
                            staticStyle: { width: "117px", "margin-top": "0" },
                            attrs: {
                              "label-placeholder": _vm.obj_store.brand_name
                            },
                            model: {
                              value: data[elem].brand_name,
                              callback: function($$v) {
                                _vm.$set(data[elem], "brand_name", $$v)
                              },
                              expression: "data[elem].brand_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[elem].description } },
                        [
                          _c("vs-input", {
                            staticStyle: { width: "117px", "margin-top": "0" },
                            attrs: {
                              "label-placeholder": _vm.obj_store.description
                            },
                            model: {
                              value: data[elem].description,
                              callback: function($$v) {
                                _vm.$set(data[elem], "description", $$v)
                              },
                              expression: "data[elem].description"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[elem].parts_number } },
                        [
                          _c("vs-input", {
                            staticStyle: { width: "117px", "margin-top": "0" },
                            attrs: {
                              "label-placeholder": _vm.obj_store.parts_number
                            },
                            model: {
                              value: data[elem].parts_number,
                              callback: function($$v) {
                                _vm.$set(data[elem], "parts_number", $$v)
                              },
                              expression: "data[elem].parts_number"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[elem].qty } },
                        [
                          _c("vs-input", {
                            staticStyle: { width: "40px", "margin-top": "0" },
                            attrs: { "label-placeholder": _vm.obj_store.qty },
                            model: {
                              value: data[elem].qty,
                              callback: function($$v) {
                                _vm.$set(data[elem], "qty", $$v)
                              },
                              expression: "data[elem].qty"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        {
                          attrs: { data: data[elem].stock_qty, align: "center" }
                        },
                        [_c("p", [_vm._v(_vm._s(data[elem].stock_qty))])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        [
                          _c("vs-button", {
                            attrs: {
                              color: "danger",
                              radius: "",
                              icon: "icon-trash",
                              "icon-pack": "feather"
                            },
                            on: {
                              click: function($event) {
                                return _vm.deleteRow(data[elem].id)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                })
              }
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("Brand Name")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Description")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Parts Number")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Qty")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Stock Qty")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Delete")])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          attrs: {
            color: "success",
            type: "relief",
            icon: "icon-plus",
            "icon-pack": "feather"
          },
          on: { click: _vm.addRow }
        },
        [_vm._v("Add row")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=template&id=72d74c44&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=template&id=72d74c44& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "vs-prompt",
    {
      attrs: {
        "vs-title": _vm.showTable === true ? "Create Bundle" : "Create Single",
        "vs-accept-text": "Create",
        "vs-active": _vm.showBundleSingle
      },
      on: {
        "vs-cancel": _vm.clearFields,
        "vs-accept": _vm.create,
        "vs-close": _vm.clearFields,
        "update:vsActive": function($event) {
          _vm.showBundleSingle = $event
        },
        "update:vs-active": function($event) {
          _vm.showBundleSingle = $event
        }
      }
    },
    [
      _c(
        "VuePerfectScrollbar",
        {
          staticClass: "scroll-area p-4",
          staticStyle: { "max-height": "75vh" },
          attrs: { settings: _vm.settings }
        },
        [
          _vm.fillTable === false
            ? _c("div", [
                _c(
                  "form",
                  {
                    staticClass: "display: flex; flex-direction: column",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                      }
                    }
                  },
                  [
                    _c("vue-simple-suggest", {
                      attrs: {
                        placeholder: "Part Number",
                        list: _vm.simpleSuggestionList,
                        "filter-by-query": true
                      },
                      model: {
                        value: _vm.moduleStock.brand,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "brand", $$v)
                        },
                        expression: "moduleStock.brand"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      attrs: {
                        name: "partNum",
                        "label-placeholder": "Part Number"
                      },
                      model: {
                        value: _vm.moduleStock.partNum,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "partNum", $$v)
                        },
                        expression: "moduleStock.partNum"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      attrs: {
                        name: "description",
                        "label-placeholder": "Description"
                      },
                      model: {
                        value: _vm.moduleStock.description,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "description", $$v)
                        },
                        expression: "moduleStock.description"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      attrs: {
                        name: "descriptionFull",
                        "label-placeholder": "Description Full"
                      },
                      model: {
                        value: _vm.moduleStock.descriptionFull,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "descriptionFull", $$v)
                        },
                        expression: "moduleStock.descriptionFull"
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
                                value: _vm.moduleStock.stores,
                                callback: function($$v) {
                                  _vm.$set(_vm.moduleStock, "stores", $$v)
                                },
                                expression: "moduleStock.stores"
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
                                value: _vm.moduleStock.stores,
                                callback: function($$v) {
                                  _vm.$set(_vm.moduleStock, "stores", $$v)
                                },
                                expression: "moduleStock.stores"
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
                                value: _vm.moduleStock.stores,
                                callback: function($$v) {
                                  _vm.$set(_vm.moduleStock, "stores", $$v)
                                },
                                expression: "moduleStock.stores"
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
                                value: _vm.moduleStock.stores,
                                callback: function($$v) {
                                  _vm.$set(_vm.moduleStock, "stores", $$v)
                                },
                                expression: "moduleStock.stores"
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
                      ? _c(
                          "div",
                          { staticClass: "w-full mb-6 mt-6" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "success",
                                  icon: "icon-plus",
                                  "icon-pack": "feather",
                                  type: "relief"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.fillTable = true
                                  }
                                }
                              },
                              [_vm._v("Edit bundle Item")]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      attrs: {
                        name: "minStock",
                        "label-placeholder": "Min Stock"
                      },
                      model: {
                        value: _vm.moduleStock.minStock,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "minStock", $$v)
                        },
                        expression: "moduleStock.minStock"
                      }
                    }),
                    _vm._v(" "),
                    _vm.showTable === true
                      ? _c("vs-input", {
                          staticClass: "w-full mb-6",
                          attrs: {
                            name: "current",
                            "label-placeholder": "Current",
                            disabled: "disabled"
                          },
                          model: {
                            value: _vm.moduleStock.current,
                            callback: function($$v) {
                              _vm.$set(_vm.moduleStock, "current", $$v)
                            },
                            expression: "moduleStock.current"
                          }
                        })
                      : _c("vs-input", {
                          staticClass: "w-full mb-6",
                          attrs: {
                            name: "current",
                            "label-placeholder": "Current"
                          },
                          model: {
                            value: _vm.moduleStock.current,
                            callback: function($$v) {
                              _vm.$set(_vm.moduleStock, "current", $$v)
                            },
                            expression: "moduleStock.current"
                          }
                        }),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      attrs: {
                        name: "listPrice",
                        "label-placeholder": "List Price"
                      },
                      model: {
                        value: _vm.moduleStock.listPrice,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "listPrice", $$v)
                        },
                        expression: "moduleStock.listPrice"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      attrs: {
                        name: "minPrice",
                        "label-placeholder": "Min Price"
                      },
                      model: {
                        value: _vm.moduleStock.minPrice,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "minPrice", $$v)
                        },
                        expression: "moduleStock.minPrice"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      attrs: {
                        name: "maxPrice",
                        "label-placeholder": "Max Price"
                      },
                      model: {
                        value: _vm.moduleStock.maxPrice,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "maxPrice", $$v)
                        },
                        expression: "moduleStock.maxPrice"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      attrs: {
                        name: "location",
                        "label-placeholder": "Location"
                      },
                      model: {
                        value: _vm.moduleStock.location,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "location", $$v)
                        },
                        expression: "moduleStock.location"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      staticStyle: { width: "100%!important" },
                      attrs: {
                        name: "categories",
                        "label-placeholder": "Categories"
                      },
                      model: {
                        value: _vm.moduleStock.categories,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "categories", $$v)
                        },
                        expression: "moduleStock.categories"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-full mb-6" },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              display: "flex",
                              "justify-content": "space-between",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("vs-input", {
                              staticClass: "mt-0",
                              attrs: {
                                name: "chips",
                                "label-placeholder": "Find & add tags"
                              },
                              model: {
                                value: _vm.moduleStock.chip,
                                callback: function($$v) {
                                  _vm.$set(_vm.moduleStock, "chip", $$v)
                                },
                                expression: "moduleStock.chip"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                staticStyle: { "box-sizing": "content-box" },
                                attrs: { color: "primary", type: "filled" },
                                on: { click: _vm.addChip }
                              },
                              [_vm._v("Add")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.moduleStock.chips, function(chip) {
                          return _c(
                            "vs-chip",
                            {
                              key: chip,
                              staticStyle: { margin: "15px 5px" },
                              attrs: { color: "primary", closable: "" },
                              on: {
                                click: function($event) {
                                  return _vm.removeChip(chip)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(chip) +
                                  "\n                    "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ],
                  1
                )
              ])
            : _c(
                "div",
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "mr-5",
                      staticStyle: { float: "left" },
                      attrs: { type: "line", color: "dark" },
                      on: {
                        click: function($event) {
                          _vm.fillTable = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c("form-else", {
                    attrs: { table_store: _vm.table_store },
                    on: { saveChanges: _vm.saveChanges }
                  })
                ],
                1
              )
        ]
      ),
      _vm._v("\n    " + _vm._s(_vm.moduleStock) + "\n")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("deleteConfirm"),
      _vm._v(" "),
      _vm.show === true ? _c("div", [_c("showModulSingleBungle")], 1) : _vm._e()
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
              context: _vm.context,
              paginationPageSize: _vm.paginationPageSize,
              frameworkComponents: _vm.frameworkComponents,
              suppressPaginationPanel: true
            },
            on: {
              cellClicked: function($event) {
                return _vm.test($event)
              }
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
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.select()
            }
          }
        },
        [_vm._v("test")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/SingleBundle/cellRenderer.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/cellRenderer.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cellRenderer_vue_vue_type_template_id_dae8e18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cellRenderer.vue?vue&type=template&id=dae8e18c&scoped=true& */ "./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=template&id=dae8e18c&scoped=true&");
/* harmony import */ var _cellRenderer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cellRenderer.vue?vue&type=script&lang=js& */ "./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cellRenderer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cellRenderer_vue_vue_type_template_id_dae8e18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cellRenderer_vue_vue_type_template_id_dae8e18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dae8e18c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/SingleBundle/cellRenderer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cellRenderer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cellRenderer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cellRenderer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=template&id=dae8e18c&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=template&id=dae8e18c&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cellRenderer_vue_vue_type_template_id_dae8e18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cellRenderer.vue?vue&type=template&id=dae8e18c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/cellRenderer.vue?vue&type=template&id=dae8e18c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cellRenderer_vue_vue_type_template_id_dae8e18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cellRenderer_vue_vue_type_template_id_dae8e18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/SingleBundle/deleteConfirm.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/deleteConfirm.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteConfirm_vue_vue_type_template_id_3b6e3370_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteConfirm.vue?vue&type=template&id=3b6e3370&scoped=true& */ "./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=template&id=3b6e3370&scoped=true&");
/* harmony import */ var _deleteConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteConfirm.vue?vue&type=script&lang=js& */ "./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _deleteConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deleteConfirm_vue_vue_type_template_id_3b6e3370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deleteConfirm_vue_vue_type_template_id_3b6e3370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b6e3370",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/SingleBundle/deleteConfirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deleteConfirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=template&id=3b6e3370&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=template&id=3b6e3370&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_template_id_3b6e3370_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deleteConfirm.vue?vue&type=template&id=3b6e3370&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=template&id=3b6e3370&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_template_id_3b6e3370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_template_id_3b6e3370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/SingleBundle/formElse.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/formElse.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formElse_vue_vue_type_template_id_cb298cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formElse.vue?vue&type=template&id=cb298cdc&scoped=true& */ "./resources/js/src/components/SingleBundle/formElse.vue?vue&type=template&id=cb298cdc&scoped=true&");
/* harmony import */ var _formElse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formElse.vue?vue&type=script&lang=js& */ "./resources/js/src/components/SingleBundle/formElse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formElse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formElse_vue_vue_type_template_id_cb298cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formElse_vue_vue_type_template_id_cb298cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cb298cdc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/SingleBundle/formElse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/formElse.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/formElse.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formElse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formElse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/formElse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formElse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/formElse.vue?vue&type=template&id=cb298cdc&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/formElse.vue?vue&type=template&id=cb298cdc&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formElse_vue_vue_type_template_id_cb298cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formElse.vue?vue&type=template&id=cb298cdc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/formElse.vue?vue&type=template&id=cb298cdc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formElse_vue_vue_type_template_id_cb298cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formElse_vue_vue_type_template_id_cb298cdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/SingleBundle/showModulSingleBungle.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/showModulSingleBungle.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showModulSingleBungle_vue_vue_type_template_id_72d74c44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showModulSingleBungle.vue?vue&type=template&id=72d74c44& */ "./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=template&id=72d74c44&");
/* harmony import */ var _showModulSingleBungle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showModulSingleBungle.vue?vue&type=script&lang=js& */ "./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _showModulSingleBungle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showModulSingleBungle.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _showModulSingleBungle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showModulSingleBungle_vue_vue_type_template_id_72d74c44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showModulSingleBungle_vue_vue_type_template_id_72d74c44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/SingleBundle/showModulSingleBungle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showModulSingleBungle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showModulSingleBungle.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=template&id=72d74c44&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=template&id=72d74c44& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_template_id_72d74c44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showModulSingleBungle.vue?vue&type=template&id=72d74c44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/showModulSingleBungle.vue?vue&type=template&id=72d74c44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_template_id_72d74c44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showModulSingleBungle_vue_vue_type_template_id_72d74c44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/SingleBundle/singleBundle.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/singleBundle.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _singleBundle_vue_vue_type_template_id_c06f5942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleBundle.vue?vue&type=template&id=c06f5942& */ "./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&");
/* harmony import */ var _singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleBundle.vue?vue&type=script&lang=js& */ "./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _singleBundle_vue_vue_type_template_id_c06f5942___WEBPACK_IMPORTED_MODULE_0__["render"],
  _singleBundle_vue_vue_type_template_id_c06f5942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./singleBundle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_template_id_c06f5942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./singleBundle.vue?vue&type=template&id=c06f5942& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/singleBundle.vue?vue&type=template&id=c06f5942&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_template_id_c06f5942___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleBundle_vue_vue_type_template_id_c06f5942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/data.json":
/*!******************************************!*\
  !*** ./resources/js/src/views/data.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = [{"brand":"JIGUL","partNum":"547857480","description":"Litronic Industries","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["ebay","amazon"],"categories":"category","chips":["tag","tagtwo"],"showTable":true},{"brand":"BEHA","partNum":"547857480","description":"Industries","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["ebay"],"categories":"category","chips":["tag"]},{"brand":"DEVYATKA","partNum":"547857480","description":"Litronic","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["amazon","magento"],"categories":"category","chips":["tag"]},{"brand":"JIGUL","partNum":"547857480","description":"Litronic Industries","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["ebay","amazon"],"categories":"category","chips":["tag"]},{"brand":"BEHA","partNum":"547857480","description":"Industries","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["ebay"],"categories":"category","chips":["tag"]},{"brand":"DEVYATKA","partNum":"547857480","description":"Litronic","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["amazon","magento"],"categories":"category","chips":["tag"]},{"brand":"JIGUL","partNum":"547857480","description":"Litronic Industries","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["ebay","amazon"],"categories":"category","chips":["tag"]},{"brand":"BEHA","partNum":"547857480","description":"Industries","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["ebay"],"categories":"category","chips":["tag"]},{"brand":"DEVYATKA","partNum":"547857480","description":"Litronic","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["amazon","magento"],"categories":"category","chips":["tag"]},{"brand":"JIGUL","partNum":"547857480","description":"Litronic Industries","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["ebay","amazon"],"categories":"category","chips":["tag"]},{"brand":"BEHA","partNum":"547857480","description":"Industries","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["ebay"],"categories":"category","chips":["tag"]},{"brand":"DEVYATKA","partNum":"547857480","description":"Litronic","minStock":"0","minPrice":"0","maxPrice":"0","location":"B2-017","listPrice":"160.50","stores":["amazon","magento"],"categories":"category","chips":["tag"]}];

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