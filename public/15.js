(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/orders */ "./resources/js/src/api/orders.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var SquareComponent = vue__WEBPACK_IMPORTED_MODULE_2___default.a.extend({
  template: '<vs-chip color="primary" >{{params.valueFormatted}}</vs-chip>'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"],
    singlebundle: _components_SingleBundle_singleBundle__WEBPACK_IMPORTED_MODULE_1__["default"]
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
  beforeMount: function beforeMount() {
    this.columnDefs = [{
      headerName: 'amount',
      cellRenderer: "agGroupCellRenderer"
    }, {
      headerName: 'amount',
      field: 'amount',
      filter: true,
      width: 175
    }, {
      headerName: 'city',
      field: 'user.city',
      filter: true,
      width: 175
    }, {
      headerName: 'country',
      field: 'user.country',
      filter: true,
      width: 250
    }, {
      headerName: 'email',
      field: 'user.email',
      filter: true,
      width: 250
    }, {
      headerName: 'first_name',
      field: 'user.first_name',
      filter: true,
      width: 75
    }, {
      headerName: 'last_name',
      field: 'user.last_name',
      filter: true,
      width: 150
    }, {
      headerName: 'phone',
      field: 'user.phone',
      filter: true,
      width: 100
    }, {
      headerName: 'postal_code',
      field: 'user.postal_code',
      filter: true,
      width: 125
    }, {
      headerName: 'state',
      field: 'user.state',
      filter: true,
      width: 250
    }, {
      headerName: 'same_address',
      field: 'user.same_address',
      filter: true,
      width: 125
    }, {
      headerName: 'street_address',
      field: 'user.street_address',
      filter: true,
      width: 125
    }, {
      headerName: 'street_address_two',
      field: 'user.street_address_two',
      width: 125
    }];
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [{
          field: "brand_name"
        }, {
          field: "count"
        }, {
          field: "part_number"
        }, {
          field: "warehouse"
        }],
        onFirstDataRendered: function onFirstDataRendered(params) {
          params.api.sizeColumnsToFit();
        }
      },
      getDetailRowData: function getDetailRowData(params) {
        params.successCallback(params.data.data);
      }
    };
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
      console.log(e);
      debugger;

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
  mounted: function mounted() {
    var _this = this;

    _api_orders__WEBPACK_IMPORTED_MODULE_3__["Orders"].getOrders().then(function (res) {
      _this.contacts = res.body.map(function (item) {
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
              colResizeDefault: "shift",
              animateRows: true,
              floatingFilter: true,
              pagination: true,
              context: _vm.context,
              paginationPageSize: _vm.paginationPageSize,
              masterDetail: true,
              master: true,
              detailCellRendererParams: _vm.detailCellRendererParams,
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



/***/ })

}]);