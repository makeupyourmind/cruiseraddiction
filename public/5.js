(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DetailTemplate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/DetailTemplate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme-vue/data-grid */ "./node_modules/devextreme-vue/data-grid.js");
/* harmony import */ var devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DxDataGrid: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__["DxDataGrid"],
    DxColumn: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__["DxColumn"]
  },
  props: {
    templateData: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      dataSource: this.templateData.data.data,
      detailInfo: "Orders"
    };
  },
  methods: {
    completedValue: function completedValue(rowData) {
      return true;
    },
    getTasks: function getTasks(data) {
      return new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2___default.a({
        store: new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_1___default.a({
          data: data,
          key: 'unique_hash'
        })
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/orders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SingleBundle_singleBundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SingleBundle/singleBundle */ "./resources/js/src/components/SingleBundle/singleBundle.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _api_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/orders */ "./resources/js/src/api/orders.js");
/* harmony import */ var devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-vue/data-grid */ "./node_modules/devextreme-vue/data-grid.js");
/* harmony import */ var devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DetailTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DetailTemplate */ "./resources/js/src/components/DetailTemplate.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import "ag-grid-enterprise";
// let SquareComponent = Vue.extend({
//     template: '<vs-chip color="primary" >{{params.valueFormatted}}</vs-chip>',
// });



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"],
    singlebundle: _components_SingleBundle_singleBundle__WEBPACK_IMPORTED_MODULE_1__["default"],
    DetailTemplate: _components_DetailTemplate__WEBPACK_IMPORTED_MODULE_5__["default"],
    DxDataGrid: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_4__["DxDataGrid"],
    DxColumn: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_4__["DxColumn"],
    detail: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_4__["DxMasterDetail"]
  },
  data: function data() {
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
      frameworkComponents: null,
      columnDefs: null,
      contacts: [],
      context: null
    };
  },
  computed: {
    paginationPageSize: function paginationPageSize() {
      if (this.gridApi) return this.gridApi.paginationGetPageSize();else return 50;
    },
    totalPages: function totalPages() {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages() | 0;else return 0;
    },
    currentPage: {
      get: function get() {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;else return 1;
      },
      set: function set(val) {// this.gridApi.paginationGoToPage(val - 1);
      }
    }
  },
  methods: {
    updateSearchQuery: function updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val);
    },
    test: function test(e) {
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
      var selectedNodes = this.gridApi.getSelectedNodes();
      console.log('ssss', selectedNodes); // debugger;
      // console.log(this.columnDefs.filter(item => item.checkboxSelection).map(item => ))
    }
  },
  created: function created() {
    var _this = this;

    _api_orders__WEBPACK_IMPORTED_MODULE_3__["Orders"].getOrders().then(function (res) {
      _this.contacts = res.body.map(function (item) {
        item.order.ID = item.id;
        item.order.date = item.created_at;
        return item.order;
      });
      console.log(_this.contacts);
    });
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/orders.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/orders.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-header-cell-label{\n  justify-content: center!important;\n}\n.ag-header-cell{\n  padding: 0!important;\n}\n.ag-header-cell:first-child{\n  padding: 0 24px!important;\n}\n.ag-theme-material .ag-cell{\n  line-height: 0!important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/orders.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/orders.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./orders.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/orders.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DetailTemplate.vue?vue&type=template&id=7f59c1ab&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/DetailTemplate.vue?vue&type=template&id=7f59c1ab&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "master-detail-caption" }, [
        _vm._v(_vm._s(_vm.detailInfo))
      ]),
      _vm._v(" "),
      _c(
        "dx-data-grid",
        {
          attrs: {
            "data-source": _vm.dataSource,
            "show-borders": true,
            "column-auto-width": true
          }
        },
        [
          _c("dx-column", {
            attrs: { caption: "Brand Name", "data-field": "brand_name" }
          }),
          _vm._v(" "),
          _c("dx-column", {
            attrs: {
              caption: "Part Number",
              "data-field": "part_number",
              "data-type": "date"
            }
          }),
          _vm._v(" "),
          _c("dx-column", {
            attrs: {
              caption: "Description",
              "data-field": "description_english"
            }
          }),
          _vm._v(" "),
          _c("dx-column", { attrs: { caption: "QTY", "data-field": "count" } }),
          _vm._v(" "),
          _c("dx-column", {
            attrs: { caption: "Warehouse", "data-field": "warehouse" }
          }),
          _vm._v(" "),
          _c("dx-column", {
            attrs: { caption: "Price", "data-field": "price" }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/orders.vue?vue&type=template&id=bc9f2822&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/orders.vue?vue&type=template&id=bc9f2822& ***!
  \********************************************************************************************************************************************************************************************************/
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
                  }),
                  _vm._v(">\n            ")
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "dx-data-grid",
            {
              attrs: {
                id: "grid-container",
                "show-borders": true,
                "data-source": _vm.contacts,
                "key-expr": "ID"
              },
              scopedSlots: _vm._u([
                {
                  key: "detailTemplate",
                  fn: function(ref) {
                    var data = ref.data
                    return _c(
                      "div",
                      {},
                      [
                        _c("detail-template", {
                          attrs: { "template-data": data }
                        })
                      ],
                      1
                    )
                  }
                }
              ])
            },
            [
              _c("dx-column", {
                attrs: { "data-field": "date", caption: "Date" }
              }),
              _vm._v(" "),
              _c("dx-column", {
                attrs: { caption: "Order", "data-field": "ID" }
              }),
              _vm._v(" "),
              _c("dx-column", {
                attrs: { caption: "Country", "data-field": "user.country" }
              }),
              _vm._v(" "),
              _c("dx-column", {
                attrs: {
                  width: 125,
                  caption: "First Name",
                  "data-field": "user.first_name"
                }
              }),
              _vm._v(" "),
              _c("dx-column", {
                attrs: { caption: "Last Name", "data-field": "user.last_name" }
              }),
              _vm._v(" "),
              _c("dx-column", {
                attrs: { width: 70, "data-field": "amount", caption: "Total" }
              }),
              _vm._v(" "),
              _c("detail", {
                attrs: { enabled: true, template: "detailTemplate" }
              })
            ],
            1
          ),
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

/***/ "./resources/js/src/api/orders.js":
/*!****************************************!*\
  !*** ./resources/js/src/api/orders.js ***!
  \****************************************/
/*! exports provided: Orders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orders", function() { return Orders; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Orders =
/*#__PURE__*/
function () {
  function Orders() {
    _classCallCheck(this, Orders);
  }

  _createClass(Orders, null, [{
    key: "getOrders",
    value: function getOrders(data) {
      return window.http.get("api/orders");
    }
  }]);

  return Orders;
}();

/***/ }),

/***/ "./resources/js/src/components/DetailTemplate.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/components/DetailTemplate.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailTemplate_vue_vue_type_template_id_7f59c1ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailTemplate.vue?vue&type=template&id=7f59c1ab&scoped=true& */ "./resources/js/src/components/DetailTemplate.vue?vue&type=template&id=7f59c1ab&scoped=true&");
/* harmony import */ var _DetailTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailTemplate.vue?vue&type=script&lang=js& */ "./resources/js/src/components/DetailTemplate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailTemplate_vue_vue_type_template_id_7f59c1ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailTemplate_vue_vue_type_template_id_7f59c1ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7f59c1ab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/DetailTemplate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/DetailTemplate.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/components/DetailTemplate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailTemplate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DetailTemplate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/DetailTemplate.vue?vue&type=template&id=7f59c1ab&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/components/DetailTemplate.vue?vue&type=template&id=7f59c1ab&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailTemplate_vue_vue_type_template_id_7f59c1ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailTemplate.vue?vue&type=template&id=7f59c1ab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DetailTemplate.vue?vue&type=template&id=7f59c1ab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailTemplate_vue_vue_type_template_id_7f59c1ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailTemplate_vue_vue_type_template_id_7f59c1ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/orders.vue":
/*!*******************************************!*\
  !*** ./resources/js/src/views/orders.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orders_vue_vue_type_template_id_bc9f2822___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.vue?vue&type=template&id=bc9f2822& */ "./resources/js/src/views/orders.vue?vue&type=template&id=bc9f2822&");
/* harmony import */ var _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.vue?vue&type=script&lang=js& */ "./resources/js/src/views/orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/orders.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orders_vue_vue_type_template_id_bc9f2822___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orders_vue_vue_type_template_id_bc9f2822___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/orders.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/orders.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/orders.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/orders.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./orders.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/orders.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/orders.vue?vue&type=template&id=bc9f2822&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/orders.vue?vue&type=template&id=bc9f2822& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_template_id_bc9f2822___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./orders.vue?vue&type=template&id=bc9f2822& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/orders.vue?vue&type=template&id=bc9f2822&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_template_id_bc9f2822___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_template_id_bc9f2822___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);