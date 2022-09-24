(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0aa1d5"],{1044:function(e,t,a){"use strict";a.r(t);var r=a("0959"),s={name:"shop",components:{shopOperation:a("1105").default},data:function(){var a=this;return{loading:!0,searchForm:{pageNumber:1,pageSize:10,sort:"createTime",order:"desc",startDate:"",endDate:""},selectDate:null,columns:[{title:"店铺名称",key:"storeName",minWidth:120,align:"left"},{title:"会员名称",key:"memberName",align:"left",minWidth:120},{title:"店铺地址",key:"storeAddressPath",width:300,sortable:!1,render:function(e,t){return e("Tag",{},t.row.storeAddressPath||"暂未填写")}},{title:"是否自营",key:"selfOperated",align:"left",width:120,render:function(e,t){return e("Tag",{props:{color:t.row.selfOperated?"default":"success"}},t.row.selfOperated?"自营":"非自营")}},{title:"创建时间",key:"createTime",align:"left",width:170,sortable:!1},{title:"操作",key:"action",width:170,align:"center",fixed:"right",render:function(e,t){if("APPLYING"==t.row.storeDisable)return e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){a.edit(t.row)}}},"查看")}}],data:[],total:0}},methods:{callback:function(e){this.$emit("callback",e)},init:function(){this.getDataList()},changePage:function(e){this.searchForm.pageNumber=e,this.getDataList()},changePageSize:function(e){this.searchForm.pageNumber=1,this.searchForm.pageSize=e,this.getDataList()},handleSearch:function(){this.searchForm.pageNumber=1,this.getDataList()},selectDateRange:function(e){e&&(this.searchForm.startDate=e[0],this.searchForm.endDate=e[1])},getDataList:function(){var t=this;this.loading=!0,this.searchForm.storeDisable="APPLYING",Object(r.h)(this.searchForm).then(function(e){t.loading=!1,e.success&&(t.data=e.result.records,t.total=e.result.total)}),this.total=this.data.length,this.loading=!1},edit:function(e){this.$router.push({path:"/shop-operation",query:{shopId:e.id}})}},mounted:function(){this.init()}},a=a("2877"),a=Object(a.a)(s,function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("Card",[e("Form",{ref:"searchForm",staticClass:"search-form",attrs:{model:t.searchForm,inline:"","label-width":70}},[e("Form-item",{attrs:{label:"会员名称",prop:"memberName"}},[e("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入会员名称",clearable:""},model:{value:t.searchForm.memberName,callback:function(e){t.$set(t.searchForm,"memberName",e)},expression:"searchForm.memberName"}})],1),e("Form-item",{attrs:{label:"店铺名称",prop:"storeName"}},[e("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入店铺名称",clearable:""},model:{value:t.searchForm.storeName,callback:function(e){t.$set(t.searchForm,"storeName",e)},expression:"searchForm.storeName"}})],1),e("Form-item",{attrs:{label:"创建时间",prop:"createTime"}},[e("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss",clearable:"",placeholder:"选择起始时间"},on:{"on-change":t.selectDateRange},model:{value:t.selectDate,callback:function(e){t.selectDate=e},expression:"selectDate"}})],1),e("Button",{staticClass:"search-btn",attrs:{type:"primary",icon:"ios-search"},on:{click:t.handleSearch}},[t._v("搜索")])],1),e("Table",{ref:"table",staticClass:"mt_10",attrs:{loading:t.loading,border:"",columns:t.columns,data:t.data}}),e("Row",{staticClass:"mt_10",attrs:{type:"flex",justify:"end"}},[e("Page",{attrs:{current:t.searchForm.pageNumber,total:t.total,"page-size":t.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1)],1)},[],!1,null,null,null);t.default=a.exports}}]);