(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reviews.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reviews.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony import */ var _api_feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/feedback */ "./resources/js/src/api/feedback.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"],
    singlebundle: _components_SingleBundle_singleBundle__WEBPACK_IMPORTED_MODULE_2__["default"]
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
      data: []
    };
  },
  beforeMount: function beforeMount() {
    this.columnDefs = [{
      headerName: 'Comment',
      field: 'comment',
      // filter: true,
      suppressMenu: true,
      width: 500
    }, {
      headerName: 'Created',
      field: 'created_at',
      // filter: true,
      pinned: "left",
      suppressMenu: true // width: 250,

    }, {
      headerName: 'Order id',
      field: 'order_id',
      // filter: true,
      suppressMenu: true // width: 75,

    }, {
      headerName: 'Rate',
      field: 'rate',
      // filter: true,
      suppressMenu: true // width: 150,

    }, {
      headerName: 'Recommend',
      field: 'recommend',
      // filter: true,
      suppressMenu: true // width: 100,

    }, {
      headerName: 'Understanding',
      field: 'understanding',
      // filter: true,
      suppressMenu: true // width: 100,

    }];
    this.context = {
      componentParent: this
    };
  },
  computed: {
    getData: function getData() {
      var store = this.getDataStock;
      return store ? store.data : [];
    },
    totalPages: function totalPages() {
      var store = this.getDataStock;
      return store ? store.last_page : 1;
    }
  },
  methods: {
    getReviews: function getReviews() {
      var _this = this;

      _api_feedback__WEBPACK_IMPORTED_MODULE_6__["Feedback"].get().then(function (res) {
        return _this.data = res.body;
      });
    }
  },
  mounted: function mounted() {
    this.getReviews();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reviews.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reviews.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-header-cell-label {\n  justify-content: center !important;\n}\n.ag-header-cell {\n  padding: 0 !important;\n}\n.ag-header-cell:first-child {\n  padding: 0 24px !important;\n}\n.ag-theme-material .ag-cell {\n  line-height: 0 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.customHeaderMenuButton {\n  float: left;\n  margin: 0 0 0 3px;\n}\n.customHeaderLabel {\n  float: left;\n  margin: 0 0 0 3px;\n}\n.customSortDownLabel {\n  float: left;\n  margin: 0 0 0 3px;\n}\n.customSortUpLabel {\n  float: left;\n  margin: 0;\n}\n.customSortRemoveLabel {\n  float: left;\n  margin: 0 0 0 3px;\n  font-size: 11px;\n}\n.active {\n  color: cornflowerblue;\n}\n.ag-header-row:last-child{\n  display: none;\n}\n.ag-header{\n  min-height: 50px!important;\n  height: 50px!important;\n}\n.ag-theme-material .ag-icon-checkbox-checked{\n  color: white;\n}\n#content-area.content-area-reduced{\n  margin-left: 40px;\n}\n.ag-theme-material .ag-ltr .ag-cell[col-id=\"description_english\"]{\n  /* width: 200px; */\n  justify-content: flex-start;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n#app{\n  height: calc(100% - 3.5rem);\n}\n.content-wrapper{\n  height: calc(100% - 3.5rem);\n}\n.router-view,.router-content, .vx-card__body,.content-area__content{\n  height: 100%!important;\n}\n#ag-grid-demo, .vx-card, .vx-card__collapsible-content, .ag-grid-table{\n  height: 96%!important;\n}\n.router-content{\n  margin-top: 3em!important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reviews.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reviews.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./reviews.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reviews.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reviews.vue?vue&type=template&id=5272ee81&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reviews.vue?vue&type=template&id=5272ee81& ***!
  \*********************************************************************************************************************************************************************************************************/
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
          _c("div"),
          _vm._v(" "),
          _c("ag-grid-vue", {
            ref: "test",
            staticClass: "ag-theme-material w-100 my-4 ag-grid-table",
            attrs: {
              gridOptions: _vm.gridOptions,
              columnDefs: _vm.columnDefs,
              defaultColDef: _vm.defaultColDef,
              rowData: _vm.data,
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

/***/ "./resources/js/src/api/feedback.js":
/*!******************************************!*\
  !*** ./resources/js/src/api/feedback.js ***!
  \******************************************/
/*! exports provided: Feedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Feedback =
/*#__PURE__*/
function () {
  function Feedback() {
    _classCallCheck(this, Feedback);
  }

  _createClass(Feedback, null, [{
    key: "get",
    value: function get() {
      return window.http.get('api/reviews');
    }
  }]);

  return Feedback;
}();

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

/***/ "./resources/js/src/views/data.json":
/*!******************************************!*\
  !*** ./resources/js/src/views/data.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"brand\":\"JIGUL\",\"partNum\":\"547857480\",\"description\":\"Litronic Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\",\"amazon\"],\"categories\":\"category\",\"chips\":[\"tag\",\"tagtwo\"],\"showTable\":true},{\"brand\":\"BEHA\",\"partNum\":\"547857480\",\"description\":\"Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"DEVYATKA\",\"partNum\":\"547857480\",\"description\":\"Litronic\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"amazon\",\"magento\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"JIGUL\",\"partNum\":\"547857480\",\"description\":\"Litronic Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\",\"amazon\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"BEHA\",\"partNum\":\"547857480\",\"description\":\"Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"DEVYATKA\",\"partNum\":\"547857480\",\"description\":\"Litronic\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"amazon\",\"magento\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"JIGUL\",\"partNum\":\"547857480\",\"description\":\"Litronic Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\",\"amazon\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"BEHA\",\"partNum\":\"547857480\",\"description\":\"Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"DEVYATKA\",\"partNum\":\"547857480\",\"description\":\"Litronic\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"amazon\",\"magento\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"JIGUL\",\"partNum\":\"547857480\",\"description\":\"Litronic Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\",\"amazon\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"BEHA\",\"partNum\":\"547857480\",\"description\":\"Industries\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"ebay\"],\"categories\":\"category\",\"chips\":[\"tag\"]},{\"brand\":\"DEVYATKA\",\"partNum\":\"547857480\",\"description\":\"Litronic\",\"minStock\":\"0\",\"minPrice\":\"0\",\"maxPrice\":\"0\",\"location\":\"B2-017\",\"listPrice\":\"160.50\",\"stores\":[\"amazon\",\"magento\"],\"categories\":\"category\",\"chips\":[\"tag\"]}]");

/***/ }),

/***/ "./resources/js/src/views/reviews.vue":
/*!********************************************!*\
  !*** ./resources/js/src/views/reviews.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reviews_vue_vue_type_template_id_5272ee81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews.vue?vue&type=template&id=5272ee81& */ "./resources/js/src/views/reviews.vue?vue&type=template&id=5272ee81&");
/* harmony import */ var _reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.vue?vue&type=script&lang=js& */ "./resources/js/src/views/reviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/reviews.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reviews_vue_vue_type_template_id_5272ee81___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reviews_vue_vue_type_template_id_5272ee81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/reviews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/reviews.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/reviews.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reviews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/reviews.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/reviews.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./reviews.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reviews.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/reviews.vue?vue&type=template&id=5272ee81&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/reviews.vue?vue&type=template&id=5272ee81& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_template_id_5272ee81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./reviews.vue?vue&type=template&id=5272ee81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reviews.vue?vue&type=template&id=5272ee81&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_template_id_5272ee81___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_template_id_5272ee81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);