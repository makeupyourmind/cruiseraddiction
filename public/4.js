(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(t,e,a){var n=a(706);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(50)(n,i);n.locals&&(t.exports=n.locals)},203:function(t,e,a){var n=a(709);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(50)(n,i);n.locals&&(t.exports=n.locals)},204:function(t,e,a){var n=a(711);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(50)(n,i);n.locals&&(t.exports=n.locals)},654:function(t,e){},656:function(t,e){},705:function(t,e,a){"use strict";var n=a(202);a.n(n).a},706:function(t,e,a){(t.exports=a(49)(!1)).push([t.i,".total[data-v-0e8fc534] {\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n.total[data-v-0e8fc534]:last-child {\n  border: none;\n}\n.container-info[data-v-0e8fc534] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.info h3[data-v-0e8fc534] {\n  color: #3f51b5;\n}\n.info div[data-v-0e8fc534] {\n  padding: 5px 0;\n  display: flex;\n  justify-content: space-between;\n}\n.info > div[data-v-0e8fc534] {\n  border-bottom: 1px solid lightgray;\n}\n.info > div[data-v-0e8fc534]:last-child {\n  border: none;\n}\n.info div div[data-v-0e8fc534] {\n  width: 100px;\n}\n",""])},707:function(t,e){t.exports="/images/baseline-more_horiz-24px.svg?c838326392eb10101d175cf523baf425"},708:function(t,e,a){"use strict";var n=a(203);a.n(n).a},709:function(t,e,a){(t.exports=a(49)(!1)).push([t.i,".total[data-v-0ad69ac8]{\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n.total[data-v-0ad69ac8]:last-child{\n  border: none;\n}\n",""])},710:function(t,e,a){"use strict";var n=a(204);a.n(n).a},711:function(t,e,a){(t.exports=a(49)(!1)).push([t.i,'.ag-header-cell-label{\n  justify-content: center!important;\n}\n.ag-header-cell{\n  padding: 0!important;\n}\n.ag-header-cell:first-child{\n  padding: 0 24px!important;\n}\n.ag-theme-material .ag-cell{\n  line-height: 0!important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/*#ag-grid-demo .grid > #grid-container > .dx-datagrid .dx-datagrid-rowsview .dx-row:nth-child(odd){*/\n\n/*background: lightgrey;*/\n\n/*}*/\n\n/*.detail .dx-row:nth-child(odd), .detail .dx-row:nth-child(even){*/\n\n/*background: white!important;*/\n\n/*}*/\n.dx-datagrid-group-opened:before{\n  content: "\\21D1";\n  color:red\n}\n.dx-datagrid-group-closed:before{\n  content: "\\21D3";\n  color:blue\n}\n',""])},734:function(t,e,a){"use strict";a.r(e);var n=a(132);function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,a,n;return e=t,n=[{key:"getOrders",value:function(t,e,a){return window.http.get("api/orders?part=".concat(t,"&email=").concat(e,"&country=").concat(a))}}],(a=null)&&i(e.prototype,a),n&&i(e,n),t}(),o=a(82),s=a(130),d=a.n(s),c=a(399),l=a.n(c);function u(t){return function(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn},props:{templateData:{type:Object,default:function(){}}},data:function(){return{dataSource:this.getSource(),detailInfo:"Orders",user:this.templateData.data.user,shipping:this.templateData.data.user.shipping||{}}},computed:{getSubtotal:function(){return this.dataSource.length>1?u(this.dataSource).map(function(t){return Number(t.total)}).reduce(function(t,e){return t+e}).toFixed(2):Number(this.dataSource[0].total)}},methods:{getSource:function(){var t=this;return u(this.templateData.data.data).map(function(e){return e.total=(e.count*Number(e.price)).toFixed(2),e.order=t.templateData.data.id,e})},completedValue:function(t){return!0},getTasks:function(t){return new l.a({store:new d.a({data:t,key:"unique_hash"})})},setData:function(t){var e=this.templateData.data.attachments[t.rowIndex];return e?e.status:""},prepered:function(t){}}},p=(a(705),a(13)),m=Object(p.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"master-detail-caption"},[t._v("Order Info")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"container-info"},[a("div",{staticClass:"info"},[a("h3",[t._v("Shipping")]),t._v(" "),a("div",[a("div",[t._v("Service name:")]),t._v(" "),a("div",[t._v(t._s(t.shipping.service_name||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("Service code:")]),t._v(" "),a("div",[t._v(t._s(t.shipping.service_code||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("Min day:")]),t._v(" "),a("div",[t._v(t._s(t.shipping.max_delivery_date||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("Max day:")]),t._v(" "),a("div",[t._v(t._s(t.shipping.min_delivery_date||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("Currency:")]),t._v(" "),a("div",[t._v(t._s(t.shipping.currency||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("value:")]),t._v(" "),a("div",[t._v(t._s(t.shipping.value||"-----"))])])]),t._v(" "),a("div",{staticClass:"info"},[a("h3",[t._v("User")]),t._v(" "),a("div",[a("div",[t._v("User:")]),t._v(" "),a("div",[t._v(t._s(t.user.first_name+" "+t.user.last_name||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("City:")]),t._v(" "),a("div",[t._v(" "+t._s(t.user.city||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("Country:")]),t._v(" "),a("div",[t._v(t._s(t.user.country||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("Phone:")]),t._v(" "),a("div",[t._v(t._s(t.user.phone||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("Post code:")]),t._v(" "),a("div",[t._v(t._s(t.user.postal_code||"-----"))])]),t._v(" "),a("div",[a("div",[t._v("email:")]),t._v(" "),a("div",[t._v(" "+t._s(t.user.email||"-----"))])])]),t._v(" "),t._m(0)]),t._v(" "),a("br"),t._v(" "),a("dx-data-grid",{attrs:{"data-source":t.dataSource,"show-borders":!0,"column-auto-width":!0},on:{rowPrepared:t.prepered},scopedSlots:t._u([{key:"Action",fn:function(e){var n=e.data;return a("div",{},[a("div",{domProps:{innerHTML:t._s(t.setData(n))}})])}}])},[a("dx-column",{attrs:{caption:"Brand Name","data-field":"brand_name"}}),t._v(" "),a("dx-column",{attrs:{caption:"Part Number","data-field":"part_number"}}),t._v(" "),a("dx-column",{attrs:{caption:"Description","data-field":"description_english"}}),t._v(" "),a("dx-column",{attrs:{caption:"QTY","data-field":"count"}}),t._v(" "),a("dx-column",{attrs:{caption:"Price","data-field":"price"}}),t._v(" "),a("dx-column",{attrs:{caption:"Total","data-field":"total"}}),t._v(" "),a("dx-column",{attrs:{caption:"Warehouse","data-field":"warehouse"}}),t._v(" "),a("dx-column",{attrs:{caption:"Order","data-field":"order"}}),t._v(" "),a("dx-column",{attrs:{caption:"client_column_two","data-field":"client_column_two"}}),t._v(" "),a("dx-column",{attrs:{caption:"Action","cell-template":"Action"}})],1),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"master-detail-caption",staticStyle:{"font-weight":"bold",color:"blue"}},[t._v("Total info")]),t._v(" "),a("div",{staticClass:"total"},[t._v("\n        Subtotal : "+t._s(t.getSubtotal)+"\n    ")]),t._v(" "),a("div",{staticClass:"total"},[t._v("\n        Shipping : "+t._s(t.shipping.value||0)+"\n    ")]),t._v(" "),a("div",{staticClass:"total"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("Total : "+t._s(t.getSubtotal+(t.shipping.value?Number(t.shipping.value):0)))])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("h3",[this._v("Payment")]),this._v(" "),e("div",[this._v("Paypal")])])}],!1,null,"0e8fc534",null).exports,h=(a(707),{components:{DxButton:o.DxButton},props:{templateData:{type:Object,default:function(){}}},data:function(){return{user:this.templateData.data}},methods:{}}),f=(a(708),Object(p.a)(h,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"detail"},[this._v("\n    ...\n")])},[],!1,null,"0ad69ac8",null).exports),_={components:{singlebundle:n.a,DetailTemplate:m,DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn,action:f,detail:o.DxMasterDetail},data:function(){return{searchQuery:"",gridOptions:{},detailCellRendererParams:{},maxPageNumbers:7,gridApi:null,defaultColDef:{sortable:!0,editable:!1,resizable:!0,suppressMenu:!0},frameworkComponents:null,columnDefs:null,contacts:[],interval:null,context:null,searchPart:"",searchEmail:"",searchCountry:""}},computed:{paginationPageSize:function(){return this.gridApi?this.gridApi.paginationGetPageSize():50},totalPages:function(){return this.gridApi?0|this.gridApi.paginationGetTotalPages():0},currentPage:{get:function(){return this.gridApi?this.gridApi.paginationGetCurrentPage()+1:1},set:function(t){}}},methods:{updateSearchQuery:function(t){var e=this;clearInterval(this.interval),this.interval=setTimeout(function(){e.getOrders(),clearInterval(e.interval)},300)},test:function(t){"PartNumber"===t.colDef.headerName&&(t.data.showTable?this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!0,showTable:!0}):this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!0,showTable:!1}),this.$store.dispatch("GET_EDIT_STORE",t.data))},select:function(){var t=this.gridApi.getSelectedNodes();console.log("ssss",t)},prepered:function(t){"header"!=t.rowType&&"detail"!=t.rowType&&void 0!==t.rowIndex&&(t.key%2?t.rowElement.style.background="white":t.rowElement.style.background="#ebebeb")},getOrders:function(){var t=this;r.getOrders(this.searchPart,this.searchEmail,this.searchCountry).then(function(e){t.contacts=e.body.map(function(t,e){return t.order.ID=e,t.order.id=t.id,t.order.date=t.created_at,t.order.attachments=t.attachments,t.order}),console.log(t.contacts)})}},created:function(){this.getOrders(),this.gridApi=this.gridOptions.api,this.gridColumnApi=this.gridOptions.columnApi}},g=(a(710),Object(p.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ag-grid-demo"}},[a("vx-card",[a("div",{staticClass:"flex flex-wrap justify-between items-center"},[a("div",{staticClass:"flex flex-wrap items-center justify-between ag-grid-table-actions-right"},[a("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{placeholder:"Search Part Number"},on:{input:t.updateSearchQuery},model:{value:t.searchPart,callback:function(e){t.searchPart=e},expression:"searchPart"}}),t._v(" "),a("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{placeholder:"Search Email"},on:{input:t.updateSearchQuery},model:{value:t.searchEmail,callback:function(e){t.searchEmail=e},expression:"searchEmail"}}),t._v(" "),a("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{placeholder:"Search country"},on:{input:t.updateSearchQuery},model:{value:t.searchCountry,callback:function(e){t.searchCountry=e},expression:"searchCountry"}})],1)]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"grid"},[a("dx-data-grid",{attrs:{id:"grid-container","show-borders":!0,"data-source":t.contacts,"key-expr":"ID"},on:{rowPrepared:t.prepered},scopedSlots:t._u([{key:"ActionTemplate",fn:function(t){var e=t.data;return a("div",{},[a("action",{attrs:{"template-data":e}})],1)}},{key:"detailTemplate",fn:function(t){var e=t.data;return a("div",{},[a("detail-template",{attrs:{"template-data":e}})],1)}}])},[a("dx-column",{attrs:{"data-field":"date",caption:"Date"}}),t._v(" "),a("dx-column",{attrs:{caption:"Order","data-field":"id"}}),t._v(" "),a("dx-column",{attrs:{caption:"Country","data-field":"user.country"}}),t._v(" "),a("dx-column",{attrs:{width:125,caption:"First Name","data-field":"user.first_name"}}),t._v(" "),a("dx-column",{attrs:{caption:"Last Name","data-field":"user.last_name"}}),t._v(" "),a("dx-column",{attrs:{width:70,"data-field":"amount",caption:"Total"}}),t._v(" "),a("dx-column",{attrs:{width:70,caption:"Action","cell-template":"ActionTemplate"}}),t._v(" "),t._v(" "),a("detail",{attrs:{enabled:!0,template:"detailTemplate"}})],1)],1),t._v(" "),a("vs-pagination",{attrs:{total:t.totalPages,max:t.maxPageNumbers},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},[],!1,null,null,null));e.default=g.exports}}]);