(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d213187"],{aae6:function(t,e,s){"use strict";s.r(e);function a(t,e){return Object(o.k)("/other/logistics/".concat(t),e)}var o=s("7f80"),i={name:"logistics",data:function(){var s=this;return{loading:!0,modalVisible:!1,modalTitle:"",searchForm:{pageNumber:1,pageSize:20,sort:"createTime",order:"desc",name:""},form:{name:"",disabled:"CLOSE"},formValidate:{name:[{required:!0,message:"请输入物流公司名称",trigger:"blur"}]},submitLoading:!1,columns:[{title:"物流公司名称",key:"name",minWidth:120,sortable:!1},{title:"物流公司编码",key:"code",minWidth:120,sortable:!1},{title:"状态",key:"disabled",width:150,slot:"disableSlot"},{title:"创建时间",key:"createTime",width:180,sortable:!1},{title:"操作",key:"action",align:"center",width:150,render:function(t,e){return t("div",[t("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){s.detail(e.row)}}},"修改"),t("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){s.remove(e.row)}}},"删除")])}}],data:[],total:0}},methods:{init:function(){this.getDataList()},changePage:function(t){this.searchForm.pageNumber=t,this.getDataList()},changePageSize:function(t){this.searchForm.pageSize=t,this.getDataList()},getDataList:function(){var t,s=this;this.loading=!0,t=this.searchForm,Object(o.c)("/other/logistics/getByPage",t).then(function(t){var e;s.loading=!1,t.success&&((e=t.result.records).forEach(function(t){t.switch="OPEN"===t.disabled,t.standBy=!("null"==t.standBy||!t.standBy)}),s.data=e,s.total=t.result.total)}),this.total=this.data.length,this.loading=!1},changeSwitch:function(t){var e=this;this.form.name=t.name,this.form.code=t.code,this.form.standBy=t.standBy,this.form.formItems=t.formItems,this.form.disabled="CLOSE"===t.disabled?"OPEN":"CLOSE",a(t.id,this.form).then(function(t){t.success&&(e.$Message.success("操作成功"),e.getDataList())})},handleSubmit:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.submitLoading=!0,"添加"==e.modalTitle?(delete e.form.id,t=e.form,Object(o.g)("/other/logistics/save",t).then(function(t){e.submitLoading=!1,t.success&&(e.$Message.success("操作成功"),e.getDataList(),e.modalVisible=!1)})):a(e.id,e.form).then(function(t){e.submitLoading=!1,t.success&&(e.$Message.success("操作成功"),e.getDataList(),e.modalVisible=!1)}))})},add:function(){this.modalTitle="添加",this.form={},this.$refs.form.resetFields(),this.modalVisible=!0},detail:function(t){this.id=t.id,this.modalTitle="修改",this.modalVisible=!0,this.form.name=t.name,this.form.code=t.code,this.form.standBy=t.standBy,this.form.formItems=t.formItems,this.form.disabled=t.disabled},remove:function(e){var s=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+e.name+" ?",loading:!0,onOk:function(){var t;t=e.id,Object(o.b)("/other/logistics/delete/".concat(t)).then(function(t){s.$Modal.remove(),t.success&&(s.$Message.success("操作成功"),s.getDataList())})}})}},mounted:function(){this.init()}},s=s("2877"),s=Object(s.a)(i,function(){var s=this,a=s._self._c;return a("div",{staticClass:"search"},[a("Card",[a("Row",{staticClass:"operation padding-row"},[a("Button",{attrs:{type:"primary"},on:{click:s.add}},[s._v("添加")])],1),a("Table",{ref:"table",attrs:{loading:s.loading,border:"",columns:s.columns,data:s.data},scopedSlots:s._u([{key:"disableSlot",fn:function(t){var e=t.row;return[a("i-switch",{attrs:{size:"large","true-value":!0,"false-value":!1,value:e.switch},on:{"on-change":function(t){return s.changeSwitch(e)}}},[a("span",{attrs:{slot:"open"},slot:"open"},[s._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[s._v("禁用")])])]}}])}),a("Row",{staticClass:"mt_10",attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:s.searchForm.pageNumber,total:s.total,"page-size":s.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":s.changePage,"on-page-size-change":s.changePageSize}})],1)],1),a("Modal",{attrs:{title:s.modalTitle,"mask-closable":!1,width:500},model:{value:s.modalVisible,callback:function(t){s.modalVisible=t},expression:"modalVisible"}},[a("Form",{ref:"form",attrs:{model:s.form,"label-width":120,rules:s.formValidate}},[a("FormItem",{attrs:{label:"物流公司名称",prop:"name"}},[a("Input",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:s.form.name,callback:function(t){s.$set(s.form,"name",t)},expression:"form.name"}})],1),a("FormItem",{attrs:{label:"物流公司代码",prop:"code"}},[a("Input",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:s.form.code,callback:function(t){s.$set(s.form,"code",t)},expression:"form.code"}})],1),a("FormItem",{attrs:{label:"支持电子面单"}},[a("i-switch",{attrs:{size:"large"},model:{value:s.form.standBy,callback:function(t){s.$set(s.form,"standBy",t)},expression:"form.standBy"}},[a("span",{attrs:{slot:"open"},slot:"open"},[s._v("开")]),a("span",{attrs:{slot:"close"},slot:"close"},[s._v("关")])])],1),a("FormItem",{attrs:{label:"电子面单表单"}},[a("Input",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:s.form.formItems,callback:function(t){s.$set(s.form,"formItems",t)},expression:"form.formItems"}})],1),a("FormItem",{attrs:{label:"禁用状态",prop:"disabled"}},[a("i-switch",{attrs:{"true-value":"OPEN","false-value":"CLOSE",size:"large"},model:{value:s.form.disabled,callback:function(t){s.$set(s.form,"disabled",t)},expression:"form.disabled"}},[a("span",{attrs:{slot:"open"},slot:"open"},[s._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[s._v("禁用")])])],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:function(t){s.modalVisible=!1}}},[s._v("取消")]),a("Button",{attrs:{type:"primary",loading:s.submitLoading},on:{click:s.handleSubmit}},[s._v("提交 ")])],1)],1)],1)},[],!1,null,null,null);e.default=s.exports}}]);