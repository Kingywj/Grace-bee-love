(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d7fc8"],{"78c4":function(t,e,a){"use strict";a.r(e);var o=a("c40e"),i={name:"goods",components:{},data:function(){var a=this;return{id:"",loading:!0,searchForm:{pageNumber:1,pageSize:10,sort:"create_time",order:"desc"},goodsAuditForm:{auth_flag:1},columns:[{title:"商品名称",key:"goodsName",minWidth:180,slot:"goodsSlot",tooltip:!0},{title:"商品编号",key:"id",minWidth:100,tooltip:!0},{title:"价格",key:"price",minWidth:130,render:function(t,e){return t("div",a.$options.filters.unitPrice(e.row.price,"￥"))}},{title:"审核状态",key:"authFlag",minWidth:130,render:function(t,e){return"TOBEAUDITED"==e.row.authFlag?t("div",[t("Badge",{props:{status:"error",text:"待审核"}})]):"PASS"==e.row.authFlag?t("div",[t("Badge",{props:{status:"success",text:"审核通过"}})]):"REFUSE"==e.row.authFlag?t("div",[t("Badge",{props:{status:"error",text:"审核拒绝"}})]):void 0}},{title:"店铺名称",key:"storeName",minWidth:100,tooltip:!0},{title:"操作",key:"action",align:"center",fixed:"right",width:200,render:function(t,e){return t("div",[t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){a.examine(e.row,1)}}},"通过"),t("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){a.examine(e.row,2)}}},"拒绝"),t("Button",{props:{size:"small"},on:{click:function(){a.showDetail(e.row)}}},"查看")])}}],data:[],total:0}},methods:{init:function(){this.getDataList()},changePage:function(t){this.searchForm.pageNumber=t,this.getDataList()},changePageSize:function(t){this.searchForm.pageSize=t,this.getDataList()},handleSearch:function(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},getDataList:function(){var e=this;this.loading=!0,this.searchForm.authFlag=0,Object(o.j)(this.searchForm).then(function(t){e.loading=!1,t.success&&(e.data=t.result.records,e.total=t.result.total)})},examine:function(t,e){var a=this,i="通过";this.goodsAuditForm.authFlag="PASS",1!=e&&(i="拒绝",this.goodsAuditForm.authFlag="REFUSE"),this.$Modal.confirm({title:"确认审核",content:"您确认要审核"+i+" "+t.goodsName+" ?",loading:!0,onOk:function(){Object(o.b)(t.id,a.goodsAuditForm).then(function(t){a.$Modal.remove(),t.success&&(a.$Message.success("审核成功"),a.getDataList())})}})},showDetail:function(t){t=t.id;this.$router.push({name:"goods-detail",query:{id:t}})}},mounted:function(){this.init()}},a=a("2877"),a=Object(a.a)(i,function(){var e=this,a=e._self._c;return a("div",{staticClass:"search"},[a("Card",[a("Form",{ref:"searchForm",staticClass:"search-form",attrs:{model:e.searchForm,inline:"","label-width":70},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[a("Form-item",{attrs:{label:"商品名称",prop:"goodsName"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入商品名称",clearable:""},model:{value:e.searchForm.goodsName,callback:function(t){e.$set(e.searchForm,"goodsName",t)},expression:"searchForm.goodsName"}})],1),a("Form-item",{attrs:{label:"商品编号",prop:"id"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入商品编号",clearable:""},model:{value:e.searchForm.id,callback:function(t){e.$set(e.searchForm,"id",t)},expression:"searchForm.id"}})],1),a("Button",{staticClass:"search-btn",attrs:{type:"primary",icon:"ios-search"},on:{click:e.handleSearch}},[e._v("搜索")])],1),a("Table",{ref:"table",staticClass:"mt_10",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data},scopedSlots:e._u([{key:"goodsSlot",fn:function(t){return[a("div",{staticStyle:{"margin-top":"5px",height:"80px",display:"flex"}},[a("div",{},[a("img",{staticStyle:{height:"60px","margin-top":"3px",width:"60px"},attrs:{src:t.row.original}})]),a("div",{staticStyle:{"margin-left":"13px"}},[a("div",{staticClass:"div-zoom"},[a("a",[e._v(e._s(t.row.goodsName))])])])])]}}])}),a("Row",{staticClass:"mt_10",attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)},[],!1,null,null,null);e.default=a.exports}}]);