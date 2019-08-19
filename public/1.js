(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    deleteThis: function () {
      var _deleteThis = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var order, current;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch("stockCaModule/DELETE_DATA_STOCK", {
                  array: this.$store.getters["stockCaModule/GET_STOCK_DATA_DELETE"],
                  password: this.password
                });

              case 2:
                order = this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER'];
                current = this.$store.getters['stockCaModule/GET_STOCK_DATA'];
                _context.next = 6;
                return this.$store.dispatch('stockCaModule/GET_DATA_STOCK_FROM_SERVER', {
                  page: current ? current.current_page : 1,
                  searchBrand: order.searchBrand,
                  searchNumber: order.searchNumber,
                  orderName: order.name,
                  orderBy: order.by
                });

              case 6:
                this.$store.dispatch("GET_DELETE_MODULE", false);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deleteThis() {
        return _deleteThis.apply(this, arguments);
      }

      return deleteThis;
    }(),
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
/* harmony import */ var _api_stockManagment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/stockManagment */ "./resources/js/src/api/stockManagment.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        "description_english": "Paste desc to search",
        "part_number": "Paste desc to search",
        "qty": "Qty"
      },
      table_data: []
    };
  },
  props: {
    table_store: Array
  },
  created: function created() {
    this.table_data = JSON.parse(JSON.stringify(this.table_store)).map(function (item) {
      item.id = Math.random().toString(36).substr(2);
      return item;
    });
  },
  computed: {
    order: function order() {
      return this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER'];
    }
  },
  methods: {
    saveChanges: function saveChanges() {
      this.$emit("saveChanges", this.table_data);
    },
    deleteRow: function deleteRow(id) {
      var indexM;
      this.table_data.find(function (item, index) {
        var bool = item.id === id;
        bool && (indexM = index);
        return bool;
      });
      typeof indexM == 'number' && this.table_data.splice(indexM, 1);
    },
    addRow: function addRow() {
      this.table_data.push({
        "id": Math.random().toString(36).substr(2),
        "brand_name": '',
        "description_english": '',
        "part_number": '',
        "qty": '',
        "bundle_qty": "0"
      });
    },
    getData: function getData(e, type, index) {
      var _this = this;

      this.table_data[index][type] = e;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        if (!_this.table_data[index].brand_name || !_this.table_data[index].part_number) {
          return clearTimeout(_this.timeout);
        }

        _api_stockManagment__WEBPACK_IMPORTED_MODULE_0__["StockManagment"].getStockCA({
          page: 1,
          searchBrand: _this.table_data[index].brand_name,
          searchNumber: _this.table_data[index].part_number,
          orderName: _this.order.name,
          orderBy: _this.order.by
        }).then(function (res) {
          _this.table_data[index].description_english = res.body.data[0].description_english;
          _this.table_data[index].qty = res.body.data[0].qty;
          clearTimeout(_this.timeout);
        });
      }, 500);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tag: '',
      test: false,
      table_store: [],
      moduleStock: null
    };
  },
  created: function created() {
    this.moduleStock = Object.assign({}, this.$store.getters.STORE_EDIT);
    this.moduleStock.tags = !this.moduleStock.tags ? [] : JSON.parse(this.moduleStock.tags);
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
      this.moduleStock.bundle_parts = val;
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
      !this.moduleStock.tags && (this.moduleStock.tags = []);
      this.moduleStock.tags.push(this.tag);
      this.tag = '';
    },
    removeChip: function removeChip(item) {
      this.moduleStock.tags.splice(this.moduleStock.tags.indexOf(item), 1);
    },
    create: function create() {
      var _this = this;

      var module = JSON.parse(JSON.stringify(this.moduleStock));
      module.part_number_without_too_much = module.part_number.replace(/[- )(]/g, '');
      var current = this.$store.getters['stockCaModule/GET_STOCK_DATA'];
      var order = this.$store.getters['stockCaModule/GET_DATA_STOCK_ORDER'];

      if (this.moduleStock.action == 'update') {
        module && delete module.brand;
        module && delete module.action;
        module && delete module.id;
        module && delete module.unique_hash;
        module && (module.tags = JSON.stringify(module.tags));
        this.$store.dispatch("stockCaModule/UPDATE_DATA_STOCK", module).then(function () {
          return _this.$store.dispatch('stockCaModule/GET_DATA_STOCK_FROM_SERVER', {
            page: current ? current.current_page : 1,
            searchBrand: order.searchBrand,
            searchNumber: order.searchNumber,
            orderName: order.name,
            orderBy: order.by
          });
        }).then(function () {
          return _this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {
            module: false,
            showTable: false
          });
        });
      } else {
        module && (module.tags = JSON.stringify(module.tags));

        if (this.moduleStock.is_bundle) {
          module.bundle_parts = module.bundle_parts.map(function (item) {
            item.stock_qty = item.qty;
            item.qty = item.bundle_qty;
            item.bundle_qty && delete item.bundle_qty;
            return item;
          });
        }

        this.$store.dispatch("stockCaModule/".concat(!this.moduleStock.is_bundle ? 'CREATE_DATA_STOCK' : 'CREATE_DATA_STOCK_BUNDLE'), module).then(function () {
          return _this.$store.dispatch('stockCaModule/GET_DATA_STOCK_FROM_SERVER', {
            page: current ? current.current_page : 1,
            searchBrand: order.searchBrand,
            searchNumber: order.searchNumber,
            orderName: order.name,
            orderBy: order.by
          });
        }).then(function () {
          return _this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {
            module: false,
            showTable: false
          });
        });
      }
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
  props: ['select'],
  methods: {
    createSingle: function createSingle(type) {
      var data = {
        is_stock_ca: 1,
        warehouse: "canada",
        action: 'create',
        is_bundle: Number(type)
      };
      type && (data.bundle_parts = []);
      ['brand_name', 'categories', 'description_english', 'description_full', 'tags', 'price', 'weight_physical', 'weight_volumetric'].forEach(function (item) {
        return data[item] = '';
      });
      ['color', 'image', 'part_fits'].forEach(function (item) {
        return data[item] = null;
      });
      ['qty', 'subst_for'].forEach(function (item) {
        return data[item] = 0;
      });
      this.$store.dispatch("GET_EDIT_STORE", data);
      this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE", {
        module: true,
        showTable: false
      });
    },
    deleteItem: function deleteItem() {
      this.$store.dispatch("GET_DELETE_MODULE", true);
      this.$store.commit("stockCaModule/SET_VARIABLE", {
        name: 'deletedData',
        value: this.select()
      });
    }
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
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\npre.selected.hljs {\n  margin: 8px 0;\n  height: 295px;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 1rem;\n}\n.vue-simple-suggest.designed .input-wrapper input {\n  color: inherit;\n  position: relative;\n  padding: 0.7rem;\n  font-size: 1rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.vue-simple-suggest.designed.focus .input-wrapper input {\n  border: 1px solid rgba(var(--vs-primary), 1) !important;\n}\n.vue-simple-suggest.designed .suggestions {\n  border-radius: 5px;\n}\n.vue-simple-suggest.designed .suggestions .suggest-item {\n  padding: 0.8rem 1rem;\n}\n.vue-simple-suggest.designed .suggestions .suggest-item.hover, .vue-simple-suggest.designed .suggestions .suggest-item.selected {\n  background-color: rgba(var(--vs-primary), 1) !important;\n}\n.theme-dark .vx-card .vue-simple-suggest input {\n  background: #262c49 !important;\n}\n.theme-dark .vx-card .vue-simple-suggest .suggestions {\n  background: #262c49 !important;\n}\n.theme-dark .vx-card pre.selected.hljs {\n  border-color: #414561 !important;\n}\n.theme-dark .vue-simple-suggest input {\n  background: #10163a !important;\n}\n.theme-dark .vue-simple-suggest .suggestions {\n  background: #10163a !important;\n}\n.theme-dark pre.selected.hljs {\n  border-color: #414561 !important;\n}\nbody .vs-component .vs-dialog {\n  max-width: 1000px !important;\n}\n.demo-alignment > * {\n  margin-top: 0 !important;\n}\n\n/*.my_table{*/\n\n/*    border: 1px solid;*/\n\n/*}*/\n\n/*.my_table_header{*/\n\n/*    display: flex;*/\n\n/*}*/\n.custom-my .vs-table--content {\n  overflow-y: scroll;\n  max-height: 281px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".l[data-v-3b6e3370]{\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css&");

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
          attrs: { data: _vm.table_data },
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
                            staticStyle: { "margin-top": "0" },
                            attrs: {
                              "label-placeholder": _vm.obj_store.brand_name
                            },
                            on: {
                              input: function($event) {
                                return _vm.getData($event, "brand_name", elem)
                              }
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
                        { attrs: { data: data[elem].description_english } },
                        [
                          _c("vs-input", {
                            staticStyle: { "margin-top": "0" },
                            attrs: {
                              "label-placeholder":
                                _vm.obj_store.description_english
                            },
                            model: {
                              value: data[elem].description_english,
                              callback: function($$v) {
                                _vm.$set(data[elem], "description_english", $$v)
                              },
                              expression: "data[elem].description_english"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[elem].part_number } },
                        [
                          _c("vs-input", {
                            staticStyle: { "margin-top": "0" },
                            attrs: {
                              "label-placeholder": _vm.obj_store.part_number
                            },
                            on: {
                              input: function($event) {
                                return _vm.getData($event, "part_number", elem)
                              }
                            },
                            model: {
                              value: data[elem].part_number,
                              callback: function($$v) {
                                _vm.$set(data[elem], "part_number", $$v)
                              },
                              expression: "data[elem].part_number"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[elem].bundle_qty } },
                        [
                          _c("vs-input", {
                            staticStyle: { width: "50px", "margin-top": "0" },
                            style:
                              Number(data[elem].bundle_qty) >
                                Number(data[elem].qty) && "color: red",
                            attrs: { "label-placeholder": _vm.obj_store.qty },
                            model: {
                              value: data[elem].bundle_qty,
                              callback: function($$v) {
                                _vm.$set(data[elem], "bundle_qty", $$v)
                              },
                              expression: "data[elem].bundle_qty"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[elem].qty, align: "center" } },
                        [_c("p", [_vm._v(_vm._s(data[elem].qty))])]
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
      staticStyle: { "min-width": "60vw" },
      attrs: {
        "vs-title": "Create Single",
        "vs-accept-text":
          _vm.moduleStock.action != "update" ? "Create" : "Save",
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
                        placeholder: "Brand name",
                        list: _vm.simpleSuggestionList,
                        "filter-by-query": true
                      },
                      model: {
                        value: _vm.moduleStock.brand_name,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "brand_name", $$v)
                        },
                        expression: "moduleStock.brand_name"
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
                        value: _vm.moduleStock.part_number,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "part_number", $$v)
                        },
                        expression: "moduleStock.part_number"
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
                        value: _vm.moduleStock.description_full,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "description_full", $$v)
                        },
                        expression: "moduleStock.description_full"
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
                        value: _vm.moduleStock.description_english,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "description_english", $$v)
                        },
                        expression: "moduleStock.description_english"
                      }
                    }),
                    _vm._v(" "),
                    _vm.moduleStock.is_bundle && _vm.moduleStock.bundle_parts
                      ? _c(
                          "vs-table",
                          {
                            staticClass: "mt-5 mb-5 custom-my",
                            attrs: { data: _vm.moduleStock.bundle_parts },
                            scopedSlots: _vm._u(
                              [
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
                                            {
                                              attrs: {
                                                data: data[elem].brand_name
                                              }
                                            },
                                            [
                                              _c("p", [
                                                _vm._v(
                                                  _vm._s(data[elem].brand_name)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data:
                                                  data[elem].description_english
                                              }
                                            },
                                            [
                                              _c("p", [
                                                _vm._v(
                                                  _vm._s(
                                                    data[elem]
                                                      .description_english
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[elem].part_number
                                              }
                                            },
                                            [
                                              _c("p", [
                                                _vm._v(
                                                  _vm._s(data[elem].part_number)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[elem].bundle_qty
                                              }
                                            },
                                            [
                                              _c(
                                                "p",
                                                {
                                                  style:
                                                    Number(
                                                      data[elem].bundle_qty
                                                    ) >
                                                      Number(data[elem].qty) &&
                                                    "color: red"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                    " +
                                                      _vm._s(
                                                        data[elem].bundle_qty
                                                      ) +
                                                      "\n                                "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: data[elem].qty,
                                                align: "center"
                                              }
                                            },
                                            [
                                              _c("p", [
                                                _vm._v(_vm._s(data[elem].qty))
                                              ])
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    })
                                  }
                                }
                              ],
                              null,
                              false,
                              2934420749
                            )
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
                                _c("vs-th", [_vm._v("Stock Qty")])
                              ],
                              1
                            )
                          ],
                          2
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.moduleStock.is_bundle
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
                        value: _vm.moduleStock.min_stock,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "min_stock", $$v)
                        },
                        expression: "moduleStock.min_stock"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-input", {
                      staticClass: "w-full mb-6",
                      attrs: {
                        name: "current Stock",
                        "label-placeholder": "Current"
                      },
                      model: {
                        value: _vm.moduleStock.qty,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "qty", $$v)
                        },
                        expression: "moduleStock.qty"
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
                        value: _vm.moduleStock.price,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "price", $$v)
                        },
                        expression: "moduleStock.price"
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
                        value: _vm.moduleStock.min_price,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "min_price", $$v)
                        },
                        expression: "moduleStock.min_price"
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
                        value: _vm.moduleStock.max_price,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleStock, "max_price", $$v)
                        },
                        expression: "moduleStock.max_price"
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
                                value: _vm.tag,
                                callback: function($$v) {
                                  _vm.tag = $$v
                                },
                                expression: "tag"
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
                        _vm._l(_vm.moduleStock.tags, function(chip) {
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
                    attrs: { table_store: this.moduleStock.bundle_parts },
                    on: { saveChanges: _vm.saveChanges }
                  })
                ],
                1
              )
        ]
      )
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
            { staticClass: "w-32", staticStyle: { "margin-left": "50px" } },
            [
              _c("vs-dropdown-item", [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center",
                    on: {
                      click: function($event) {
                        return _vm.createSingle(true)
                      }
                    }
                  },
                  [_c("span", [_vm._v("Create bundle")])]
                )
              ]),
              _vm._v(" "),
              _c("vs-dropdown-item", [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center",
                    on: {
                      click: function($event) {
                        return _vm.createSingle(false)
                      }
                    }
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
/* empty/unused harmony star reexport *//* harmony import */ var _deleteConfirm_vue_vue_type_style_index_0_id_3b6e3370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css& */ "./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_style_index_0_id_3b6e3370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/SingleBundle/deleteConfirm.vue?vue&type=style&index=0&id=3b6e3370&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_style_index_0_id_3b6e3370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_style_index_0_id_3b6e3370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_style_index_0_id_3b6e3370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_style_index_0_id_3b6e3370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteConfirm_vue_vue_type_style_index_0_id_3b6e3370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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



/***/ })

}]);