(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VxSidebarItem',
  props: {
    icon: {
      "default": "",
      type: String
    },
    iconSmall: {
      "default": false,
      type: Boolean
    },
    iconPack: {
      "default": 'material-icons',
      type: String
    },
    href: {
      "default": '#',
      type: String
    },
    to: {
      "default": null,
      type: String
    },
    index: {
      "default": null,
      type: [String, Number]
    },
    featherIcon: {
      "default": true,
      type: Boolean
    },
    target: {
      "default": '_self',
      type: String
    },
    isDisabled: {
      "default": false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      activeLink: false
    };
  },
  watch: {
    '$route': function $route() {
      this.CheckIsActive();
    }
  },
  methods: {
    CheckIsActive: function CheckIsActive() {
      if (this.to) {
        if (this.to == this.$router.path && this.to) this.activeLink = true;else this.activeLink = false; // if (this.$route.path.slice(1).includes(this.to.slice(1)) && this.to.slice(1)) this.activeLink = true
        // else this.activeLink = false
      }
    }
  },
  updated: function updated() {
    this.CheckIsActive();
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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _api_stockManagment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/stockManagment */ "./resources/js/src/api/stockManagment.js");
/* harmony import */ var _layouts_components_vx_sidebar_VxSidebarItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/components/vx-sidebar/VxSidebarItem */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var SquareComponent = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend({
  template: '<vs-chip color="primary" @click="test(params)">{{params.valueFormatted}}</vs-chip>',
  methods: {
    test: function test(dd) {
      console.log(dd);
    }
  }
});
var CustomHeader = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend({
  template: "\n    <div style=\"width: 100%; display: flex; justify-content: center\" @click=\"onSortChanged(1, $event)\">\n        <div>\n            <div class=\"customHeaderLabel\" >{{params.displayName}}</div>\n            <div v-if=\"params.column.colId == order.name && order.by === 'asc'\"  :class=\"ascSort\" class=\"customSortDownLabel\"><span ref=\"eSortAsc\" class=\"ag-header-icon ag-sort-ascending-icon\" aria-hidden=\"true\"><span class=\"ag-icon ag-icon-asc\" unselectable=\"on\"></span></span></i></div>\n            <div v-if=\"params.column.colId == order.name && order.by === 'desc'\" :class=\"descSort\" class=\"customSortUpLabel\"><span ref=\"eSortDesc\" class=\"ag-header-icon ag-sort-descending-icon\" aria-hidden=\"true\"><span class=\"ag-icon ag-icon-desc\" unselectable=\"on\"></span></span></div>\n\n        </div>\n    </div>\n",
  data: function data() {
    return {
      ascSort: null,
      descSort: null,
      noSort: null
    };
  },
  computed: {
    order: function order() {
      return this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER'];
    }
  },
  mounted: function mounted() {},
  methods: {
    onSortChanged: function onSortChanged() {
      var newOrder;

      if (this.params.column.colId == this.order.name) {
        switch (this.order.by) {
          case 'asc':
            newOrder = 'desc';
            break;

          case 'desc':
            newOrder = '';
            break;

          case '':
            newOrder = 'asc';
        }
      } else {
        newOrder = 'desc';
      }

      this.$store.commit('stockCaModule/SET_VARIABLE', {
        name: 'order',
        value: {
          by: newOrder,
          name: this.params.column.colId,
          searchBrand: this.order.searchBrand,
          searchNumber: this.order.searchNumber
        }
      });
      this.$parent.$parent.$parent.getDataStockCa(); // this.$emit('sortChanged')
    },
    onSortRequested: function onSortRequested(order, event) {// debugger
      // this.params.setSort(order, event.shiftKey);
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"],
    singlebundle: _components_SingleBundle_singleBundle__WEBPACK_IMPORTED_MODULE_2__["default"],
    VxSidebarItem: _layouts_components_vx_sidebar_VxSidebarItem__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
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
      contacts: _data_json__WEBPACK_IMPORTED_MODULE_1__,
      context: null,
      timeout: null,
      isNoActive: false,
      groupItem: {}
    };
  },
  beforeMount: function beforeMount() {
    // this.RELOAD();
    this.columnDefs = [{
      width: 75,
      checkboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      headerCheckboxSelection: true,
      suppressMenu: true,
      pinned: "left"
    }, {
      headerName: 'Brand',
      field: 'brand_name',
      // filter: true,
      pinned: "left",
      suppressMenu: true // width: 175,

    }, {
      headerName: 'PartNumber',
      field: 'part_number',
      // filter: true,
      pinned: "left",
      suppressMenu: true // width: 175,

    }, {
      headerName: 'Description',
      field: 'description_english',
      // filter: true,
      pinned: "left",
      suppressMenu: true // width: 250,

    }, {
      headerName: 'Qty',
      field: 'qty',
      // filter: true,
      suppressMenu: true // width: 75,

    }, {
      headerName: 'Min Stock',
      field: 'min_stock',
      // filter: true,
      suppressMenu: true // width: 150,

    }, {
      headerName: 'List price',
      field: 'price',
      // filter: true,
      suppressMenu: true // width: 100,

    }, {
      headerName: 'Min price',
      field: 'min_price',
      // filter: true,
      suppressMenu: true // width: 100,

    }, {
      headerName: 'Max price',
      field: 'max_price',
      // filter: true,
      suppressMenu: true // width: 125,

    }, {
      headerName: 'Last Modified',
      field: 'updated_at',
      // filter: true,
      suppressMenu: true // width: 250,

    }, {
      headerName: 'Location',
      field: 'location',
      // filter: true,
      suppressMenu: true,
      width: 125
    }, {
      headerName: 'Categories',
      field: 'categories',
      // filter: true,
      suppressMenu: true,
      width: 125
    }, {
      headerName: 'Tags',
      field: 'tags',
      cellRenderer: "test",
      suppressMenu: true,
      width: 125
    }];
    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      test: SquareComponent,
      agColumnHeader: CustomHeader
    };
  },
  computed: {
    getDataStock: function getDataStock() {
      return this.$store.getters['stockCaModule/GET_STOCK_DATA'];
    },
    getData: function getData() {
      var store = this.getDataStock;
      return store ? store.data : [];
    },
    totalPages: function totalPages() {
      var store = this.getDataStock;
      return store ? store.last_page : 1;
    },
    order: function order() {
      return this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER'];
    },
    currentPage: {
      get: function get() {
        var store = this.getDataStock;
        return store ? store.current_page : 1;
      },
      set: function set(val) {
        this.getDataStockCa(val);
      }
    }
  },
  methods: {
    updateSearchQuery: function updateSearchQuery() {
      var _this = this;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this.getDataStockCa(1);

        clearTimeout(_this.timeout);
      }, 300);
    },
    getDataStockCa: function getDataStockCa() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.$store.dispatch('stockCaModule/GET_DATA_STOCK_FROM_SERVER', {
        page: !val ? this.currentPage : val,
        searchBrand: this.order.searchBrand,
        searchNumber: this.order.searchNumber,
        orderName: this.order.name,
        orderBy: this.order.by
      });
    },
    setOrder: function setOrder(e, type) {
      this.$store.commit('stockCaModule/SET_VARIABLE', {
        name: 'order',
        value: {
          by: this.order.by,
          name: this.order.name,
          searchBrand: type == 'searchBrand' ? e : this.order.searchBrand,
          searchNumber: type == 'searchNumber' ? e : this.order.searchNumber
        }
      });
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

        e.data.action = 'update';
        this.$store.dispatch("GET_EDIT_STORE", e.data);
      }
    },
    select: function select() {
      var selectedNodes = this.gridApi ? this.gridApi.getSelectedNodes() : [];
      selectedNodes = selectedNodes.map(function (item) {
        return {
          brand_name: item.data.brand_name,
          part_number: item.data.part_number
        };
      });
      return _toConsumableArray(selectedNodes);
    },
    getImage: function getImage() {
      var _this2 = this;

      this.$store.commit('isNoActive', true);
      _api_stockManagment__WEBPACK_IMPORTED_MODULE_5__["StockManagment"].getImage().then(function () {
        return _this2.$store.commit('isNoActive', false);
      });
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
  }
});

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
exports.push([module.i, ".ag-header-cell-label {\n  justify-content: center !important;\n}\n.ag-header-cell {\n  padding: 0 !important;\n}\n.ag-header-cell:first-child {\n  padding: 0 24px !important;\n}\n.ag-theme-material .ag-cell {\n  line-height: 0 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.customHeaderMenuButton {\n  float: left;\n  margin: 0 0 0 3px;\n}\n.customHeaderLabel {\n  float: left;\n  margin: 0 0 0 3px;\n}\n.customSortDownLabel {\n  float: left;\n  margin: 0 0 0 3px;\n}\n.customSortUpLabel {\n  float: left;\n  margin: 0;\n}\n.customSortRemoveLabel {\n  float: left;\n  margin: 0 0 0 3px;\n  font-size: 11px;\n}\n.active {\n  color: cornflowerblue;\n}\n.ag-header-row:last-child{\n  display: none;\n}\n.ag-header{\n  min-height: 50px!important;\n  height: 50px!important;\n}\n.ag-theme-material .ag-icon-checkbox-checked{\n  color: white;\n}\n#content-area.content-area-reduced{\n  margin-left: 40px;\n}\n.ag-theme-material .ag-ltr .ag-cell[col-id=\"description_english\"]{\n  /* width: 200px; */\n  justify-content: flex-start;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n#app{\n  height: calc(100% - 3.5rem);\n}\n.content-wrapper{\n  height: calc(100% - 3.5rem);\n}\n.router-view,.router-content, .vx-card__body,.content-area__content{\n  height: 100%!important;\n}\n#ag-grid-demo, .vx-card, .vx-card__collapsible-content, .ag-grid-table{\n  height: 96%!important;\n}\n.router-content{\n  margin-top: 3em!important;\n}\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "vs-sidebar--item",
      class: [
        { "vs-sidebar-item-active": _vm.activeLink },
        { "disabled-item pointer-events-none": _vm.isDisabled }
      ]
    },
    [
      _vm.to
        ? _c(
            "router-link",
            {
              class: [{ "router-link-active": _vm.activeLink }],
              attrs: { to: _vm.to, target: _vm.target, exact: "" }
            },
            [
              !_vm.featherIcon
                ? _c("vs-icon", {
                    attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                  })
                : _c("feather-icon", {
                    class: { "w-3 h-3": _vm.iconSmall },
                    attrs: { icon: _vm.icon }
                  }),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
          )
        : _c(
            "a",
            { attrs: { target: _vm.target, href: _vm.href } },
            [
              !_vm.featherIcon
                ? _c("vs-icon", {
                    attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                  })
                : _c("feather-icon", {
                    class: { "w-3 h-3": _vm.iconSmall },
                    attrs: { icon: _vm.icon }
                  }),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
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
                  _c("vs-dropdown", {
                    staticClass: "cursor-pointer",
                    attrs: { "vs-trigger-click": "" }
                  }),
                  _vm._v(" "),
                  _c("singlebundle", { attrs: { select: _vm.select } }),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticStyle: { "margin-left": "20px" },
                      attrs: { color: "primary", type: "flat" },
                      on: {
                        click: function($event) {
                          return _vm.getImage()
                        }
                      }
                    },
                    [_vm._v("RELOAD IMAGE")]
                  )
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
                  _c("vs-pagination", {
                    staticStyle: { "margin-right": "20px" },
                    attrs: { total: _vm.totalPages, max: 7 },
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mb-4 md:mb-0 mr-4",
                    attrs: {
                      value: _vm.order.searchBrand,
                      placeholder: "Search brand"
                    },
                    on: {
                      input: function($event) {
                        return _vm.setOrder($event, "searchBrand")
                      },
                      change: _vm.updateSearchQuery
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "mb-4 md:mb-0 mr-4",
                    attrs: {
                      value: _vm.order.searchNumber,
                      placeholder: "Search part number"
                    },
                    on: {
                      input: function($event) {
                        return _vm.setOrder($event, "searchNumber")
                      },
                      change: _vm.updateSearchQuery
                    }
                  })
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("ag-grid-vue", {
            ref: "test",
            staticClass: "ag-theme-material w-100 my-4 ag-grid-table",
            attrs: {
              gridOptions: _vm.gridOptions,
              columnDefs: _vm.columnDefs,
              defaultColDef: _vm.defaultColDef,
              rowData: _vm.getData,
              rowSelection: "multiple",
              colResizeDefault: "shift",
              animateRows: true,
              floatingFilter: true,
              pagination: true,
              context: _vm.context,
              suppressMenuHide: true,
              frameworkComponents: _vm.frameworkComponents,
              suppressPaginationPanel: true
            },
            on: {
              cellClicked: function($event) {
                return _vm.test($event)
              }
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

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarItem.vue?vue&type=template&id=16eca1ae& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&");
/* harmony import */ var _VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarItem.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarItem.vue?vue&type=template&id=16eca1ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/data.json":
/*!******************************************!*\
  !*** ./resources/js/src/views/data.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"brand\":\"JIGUL\",\"partNum\":\"547857480\",\"description\":\"Litronic Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\",\"amazon\"],\"categories\":\"category\",\"chips\":[\"tag\",\"tagtwo\"],\"showTable\":true},{\"brand\":\"BEHA\",\"partNum\":\"547857480\",\"description\":\"Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"DEVYATKA\",\"partNum\":\"547857480\",\"description\":\"Litronic\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"amazon\",\"magento\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"JIGUL\",\"partNum\":\"547857480\",\"description\":\"Litronic Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\",\"amazon\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"BEHA\",\"partNum\":\"547857480\",\"description\":\"Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"DEVYATKA\",\"partNum\":\"547857480\",\"description\":\"Litronic\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"amazon\",\"magento\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"JIGUL\",\"partNum\":\"547857480\",\"description\":\"Litronic Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\",\"amazon\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"BEHA\",\"partNum\":\"547857480\",\"description\":\"Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"DEVYATKA\",\"partNum\":\"547857480\",\"description\":\"Litronic\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"amazon\",\"magento\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"JIGUL\",\"partNum\":\"547857480\",\"description\":\"Litronic Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\",\"amazon\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"BEHA\",\"partNum\":\"547857480\",\"description\":\"Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"DEVYATKA\",\"partNum\":\"547857480\",\"description\":\"Litronic\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"amazon\",\"magento\"],\"categories\":\"category\",\"chips\":[\"tag\"]}]");

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