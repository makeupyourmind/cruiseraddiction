(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{207:function(t,a,e){var n=e(732);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(51)(n,i);n.locals&&(t.exports=n.locals)},208:function(t,a,e){var n=e(735);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(51)(n,i);n.locals&&(t.exports=n.locals)},209:function(t,a,e){var n=e(737);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(51)(n,i);n.locals&&(t.exports=n.locals)},680:function(t,a){},682:function(t,a){},731:function(t,a,e){"use strict";var n=e(207);e.n(n).a},732:function(t,a,e){(t.exports=e(50)(!1)).push([t.i,".total[data-v-a6494140] {\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n.total[data-v-a6494140]:last-child {\n  border: none;\n}\n.container-info[data-v-a6494140] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.info h3[data-v-a6494140] {\n  color: #3f51b5;\n}\n.info div[data-v-a6494140] {\n  padding: 5px 0;\n  display: flex;\n  justify-content: space-between;\n}\n.info > div[data-v-a6494140] {\n  border-bottom: 1px solid lightgray;\n}\n.info > div[data-v-a6494140]:last-child {\n  border: none;\n}\n.info div div[data-v-a6494140] {\n  width: 100px;\n}\n",""])},733:function(t,a){t.exports="/images/baseline-more_horiz-24px.svg?c838326392eb10101d175cf523baf425"},734:function(t,a,e){"use strict";var n=e(208);e.n(n).a},735:function(t,a,e){(t.exports=e(50)(!1)).push([t.i,".total[data-v-0ad69ac8]{\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n.total[data-v-0ad69ac8]:last-child{\n  border: none;\n}\n",""])},736:function(t,a,e){"use strict";var n=e(209);e.n(n).a},737:function(t,a,e){(t.exports=e(50)(!1)).push([t.i,'.ag-header-cell-label{\n  justify-content: center!important;\n}\n.ag-header-cell{\n  padding: 0!important;\n}\n.ag-header-cell:first-child{\n  padding: 0 24px!important;\n}\n.ag-theme-material .ag-cell{\n  line-height: 0!important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/*#ag-grid-demo .grid > #grid-container > .dx-datagrid .dx-datagrid-rowsview .dx-row:nth-child(odd){*/\n\n/*background: lightgrey;*/\n\n/*}*/\n\n/*.detail .dx-row:nth-child(odd), .detail .dx-row:nth-child(even){*/\n\n/*background: white!important;*/\n\n/*}*/\n.dx-datagrid-group-opened:before{\n  content: "\\21D1";\n  color:red\n}\n.dx-datagrid-group-closed:before{\n  content: "\\21D3";\n  color:blue\n}\n',""])},760:function(t,a,e){"use strict";e.r(a);var n=e(135);function i(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(){!function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t)}var a,e,n;return a=t,n=[{key:"getOrders",value:function(t,a,e,n){return window.http.get("api/orders?page=".concat(n,"&part=").concat(t,"&email=").concat(a,"&country=").concat(e))}}],(e=null)&&i(a.prototype,e),n&&i(a,n),t}(),o=e(81),d=e(133),s=e.n(d),l=e(419),c=e.n(l);function u(t){return function(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn},props:{templateData:{type:Object,default:function(){}}},data:function(){return{dataSource:this.getSource(),detailInfo:"Orders",user:this.templateData.data.user,shipping:this.templateData.data.user.shipping||{}}},computed:{getSubtotal:function(){return this.dataSource.length>1?u(this.dataSource).map((function(t){return Number(t.total)})).reduce((function(t,a){return t+a})).toFixed(2):Number(this.dataSource[0].total)}},methods:{getSource:function(){var t=this;return u(this.templateData.data.data).map((function(a){return a.total=(a.count*Number(a.price)).toFixed(2),a.order=t.templateData.data.id,a}))},completedValue:function(t){return!0},getTasks:function(t){return new c.a({store:new s.a({data:t,key:"unique_hash"})})},setData:function(t){var a=this.templateData.data.attachments[t.rowIndex];return a?a.status:""},prepered:function(t){}}},p=(e(731),e(13)),h=Object(p.a)(v,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail"},[e("div",{staticClass:"master-detail-caption"},[t._v("Order Info")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"container-info"},[e("div",{staticClass:"info"},[e("h3",[t._v("Shipping")]),t._v(" "),e("div",[e("div",[t._v("Service name:")]),t._v(" "),e("div",[t._v(t._s(t.shipping.service_name||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("Service code:")]),t._v(" "),e("div",[t._v(t._s(t.shipping.service_code||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("Min day:")]),t._v(" "),e("div",[t._v(t._s(t.shipping.max_delivery_date||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("Max day:")]),t._v(" "),e("div",[t._v(t._s(t.shipping.min_delivery_date||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("Currency:")]),t._v(" "),e("div",[t._v(t._s(t.shipping.currency||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("value:")]),t._v(" "),e("div",[t._v(t._s(t.shipping.value||"-----"))])])]),t._v(" "),e("div",{staticClass:"info"},[e("h3",[t._v("User")]),t._v(" "),e("div",[e("div",[t._v("User:")]),t._v(" "),e("div",[t._v(t._s(t.user.first_name+" "+t.user.last_name||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("City:")]),t._v(" "),e("div",[t._v(" "+t._s(t.user.city||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("Country:")]),t._v(" "),e("div",[t._v(t._s(t.user.country||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("Phone:")]),t._v(" "),e("div",[t._v(t._s(t.user.phone||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("Post code:")]),t._v(" "),e("div",[t._v(t._s(t.user.postal_code||"-----"))])]),t._v(" "),e("div",[e("div",[t._v("email:")]),t._v(" "),e("div",[t._v(" "+t._s(t.user.email||"-----"))])])]),t._v(" "),t._m(0)]),t._v(" "),e("br"),t._v(" "),e("dx-data-grid",{attrs:{"data-source":t.dataSource,"show-borders":!0,"column-auto-width":!0},on:{rowPrepared:t.prepered},scopedSlots:t._u([{key:"Action",fn:function(a){var n=a.data;return e("div",{},[e("div",{domProps:{innerHTML:t._s(t.setData(n))}})])}}])},[e("dx-column",{attrs:{caption:"Brand Name","data-field":"brand_name"}}),t._v(" "),e("dx-column",{attrs:{caption:"Part Number","data-field":"part_number"}}),t._v(" "),e("dx-column",{attrs:{caption:"Description","data-field":"description_english"}}),t._v(" "),e("dx-column",{attrs:{caption:"QTY","data-field":"count"}}),t._v(" "),e("dx-column",{attrs:{caption:"Price","data-field":"price"}}),t._v(" "),e("dx-column",{attrs:{caption:"Total","data-field":"total"}}),t._v(" "),e("dx-column",{attrs:{caption:"Warehouse","data-field":"warehouse"}}),t._v(" "),e("dx-column",{attrs:{caption:"Order","data-field":"order"}}),t._v(" "),e("dx-column",{attrs:{caption:"client_column_two","data-field":"client_column_two"}}),t._v(" "),e("dx-column",{attrs:{caption:"Action","cell-template":"Action"}})],1),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"master-detail-caption",staticStyle:{"font-weight":"bold",color:"blue"}},[t._v("Total info")]),t._v(" "),e("div",{staticClass:"total"},[t._v("\n        Order notes : "+t._s(t.user.order_notes)+"\n    ")]),t._v(" "),e("div",{staticClass:"total"},[t._v("\n        Subtotal : "+t._s(t.getSubtotal)+" "+t._s(t.user.currency)+"\n    ")]),t._v(" "),e("div",{staticClass:"total"},[t._v("\n        Shipping : "+t._s(t.shipping.value||0)+"\n    ")]),t._v(" "),e("div",{staticClass:"total"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("Total : "+t._s(t.getSubtotal+(t.shipping.value?Number(t.shipping.value):0)))])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"info"},[a("h3",[this._v("Payment")]),this._v(" "),a("div",[this._v("Paypal")])])}],!1,null,"a6494140",null).exports,m=(e(733),{components:{DxButton:o.DxButton},props:{templateData:{type:Object,default:function(){}}},data:function(){return{user:this.templateData.data}},methods:{}}),_=(e(734),Object(p.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"detail"},[this._v("\n    ...\n")])}),[],!1,null,"0ad69ac8",null).exports),f={components:{singlebundle:n.a,DetailTemplate:h,DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn,action:_,detail:o.DxMasterDetail},data:function(){return{searchQuery:"",gridOptions:{},detailCellRendererParams:{},maxPageNumbers:7,gridApi:null,defaultColDef:{sortable:!0,editable:!1,resizable:!0,suppressMenu:!0},frameworkComponents:null,columnDefs:null,contacts:[],interval:null,context:null,searchPart:"",searchEmail:"",searchCountry:"",dataPaginate:{}}},computed:{currentPage:{get:function(){return this.dataPaginate?this.dataPaginate.current_page:1},set:function(t){this.getOrders(t)}},getData:function(){return this.dataPaginate?this.dataPaginate.data:[]},totalPages:function(){return this.dataPaginate?this.dataPaginate.last_page:1}},methods:{updateSearchQuery:function(t){var a=this;clearInterval(this.interval),this.interval=setTimeout((function(){a.getOrders(),clearInterval(a.interval)}),300)},test:function(t){"PartNumber"===t.colDef.headerName&&(t.data.showTable?this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!0,showTable:!0}):this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!0,showTable:!1}),this.$store.dispatch("GET_EDIT_STORE",t.data))},select:function(){var t=this.gridApi.getSelectedNodes();console.log("ssss",t)},prepered:function(t){"header"!=t.rowType&&"detail"!=t.rowType&&void 0!==t.rowIndex&&(t.key%2?t.rowElement.style.background="white":t.rowElement.style.background="#ebebeb")},getOrders:function(t){var a=this;r.getOrders(this.searchPart,this.searchEmail,this.searchCountry,t).then((function(t){a.dataPaginate=t.body,a.dataPaginate.data=a.dataPaginate.data.map((function(t,a){return t.order.ID=a,t.order.id=t.id,t.order.date=t.created_at,t.order.attachments=t.attachments,t.order})),console.log(a.contacts)}))}},created:function(){this.gridApi=this.gridOptions.api,this.gridColumnApi=this.gridOptions.columnApi}},g=(e(736),Object(p.a)(f,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"ag-grid-demo"}},[e("vx-card",[e("div",{staticClass:"flex flex-wrap justify-between items-center"},[e("div",{staticClass:"flex flex-wrap items-center justify-between ag-grid-table-actions-right"},[e("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{placeholder:"Search Part Number"},on:{input:t.updateSearchQuery},model:{value:t.searchPart,callback:function(a){t.searchPart=a},expression:"searchPart"}}),t._v(" "),e("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{placeholder:"Search Email"},on:{input:t.updateSearchQuery},model:{value:t.searchEmail,callback:function(a){t.searchEmail=a},expression:"searchEmail"}}),t._v(" "),e("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{placeholder:"Search country"},on:{input:t.updateSearchQuery},model:{value:t.searchCountry,callback:function(a){t.searchCountry=a},expression:"searchCountry"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"grid"},[e("dx-data-grid",{attrs:{id:"grid-container","show-borders":!0,"data-source":t.getData,"key-expr":"ID"},on:{rowPrepared:t.prepered},scopedSlots:t._u([{key:"ActionTemplate",fn:function(t){var a=t.data;return e("div",{},[e("action",{attrs:{"template-data":a}})],1)}},{key:"detailTemplate",fn:function(t){var a=t.data;return e("div",{},[e("detail-template",{attrs:{"template-data":a}})],1)}}])},[e("dx-column",{attrs:{"data-field":"date",caption:"Date"}}),t._v(" "),e("dx-column",{attrs:{caption:"Order","data-field":"id"}}),t._v(" "),e("dx-column",{attrs:{caption:"Country","data-field":"user.country"}}),t._v(" "),e("dx-column",{attrs:{width:125,caption:"First Name","data-field":"user.first_name"}}),t._v(" "),e("dx-column",{attrs:{caption:"Last Name","data-field":"user.last_name"}}),t._v(" "),e("dx-column",{attrs:{width:70,"data-field":"amount",caption:"Total"}}),t._v(" "),e("dx-column",{attrs:{width:70,caption:"Action","cell-template":"ActionTemplate"}}),t._v(" "),t._v(" "),e("detail",{attrs:{enabled:!0,template:"detailTemplate"}})],1)],1),t._v(" "),e("vs-pagination",{attrs:{total:t.totalPages},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null));a.default=g.exports}}]);