(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2dc1ef74"],{"05e4":function(t,e,n){},"498ab":function(t,e,n){"use strict";n.r(e);var a=n("8194"),i={name:"goods-review",data:function(){var n=this;return{infoData:{},infoFlag:!1,infoTitle:"",loading:!0,searchForm:{pageNumber:1,pageSize:10,sort:"createTime",order:"desc",startDate:"",endDate:""},columns:[{title:"商品名称",key:"goodsName",minWidth:120,align:"left",tooltip:!0},{title:"会员名称",key:"memberName",minWidth:120,align:"left",tooltip:!0},{title:"评价",key:"grade",align:"left",width:90,render:function(t,e){return"GOOD"==e.row.grade?t("Tag",{props:{color:"green"}},"好评"):"MODERATE"==e.row.grade?t("Tag",{props:{color:"orange"}},"中评"):t("Tag",{props:{color:"red"}},"差评")}},{title:"物流评分",key:"deliveryScore",render:function(t,e){return t("div",e.row.deliveryScore||"5星")}},{title:"服务评分",key:"deliveryScore",render:function(t,e){return t("div",e.row.serviceScore||"5星")}},{title:"描述评分",key:"deliveryScore",render:function(t,e){return t("div",e.row.descriptionScore||"5星")}},{title:"评价时间",key:"createTime",align:"left",width:170},{title:"页面展示",key:"shopDisable",align:"left",width:100,slot:"shopDisableSlot"},{title:"操作",key:"action",width:150,align:"center",fixed:"right",render:function(t,e){return t("div",[t("Button",{props:{size:"small",type:"info"},style:{marginRight:"5px"},on:{click:function(){n.info(e.row)}}},"查看"),t("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){n.remove(e.row)}}},"删除")])}}],data:[],total:0}},methods:{changeSwitchView:function(t){var e=this;a.u(this.infoData.id,{status:t}).then(function(t){e.$Message.success("修改成功!"),e.init()})},init:function(){this.getDataList()},changePage:function(t){this.searchForm.pageNumber=t,this.getDataList(),this.clearSelectAll()},changePageSize:function(t){this.searchForm.pageSize=t,this.getDataList()},handleSearch:function(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},changeSwitch:function(t){var e=this,n=t.status;a.u(t.id,{status:n}).then(function(t){e.init()})},getDataList:function(){var e=this;this.loading=!0,a.k(this.searchForm).then(function(t){e.loading=!1,t.success&&(e.data=t.result.records,e.total=t.result.total)}),this.total=this.data.length,this.loading=!1},info:function(t){var e=this;this.infoFlag=!0,this.infoTitle="用户".concat(t.memberName,"的评价详情"),a.h(t.id).then(function(t){t.result&&(e.infoData=t.result)})},remove:function(t){var e=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除会员"+t.memberName+"的评论?",loading:!0,onOk:function(){a.c(t.id).then(function(t){e.$Modal.remove(),e.$Message.success("修改成功"),e.init()})}})}},mounted:function(){this.init()}},n=(n("6a4a"),n("2877")),n=Object(n.a)(i,function(){var n=this,a=n._self._c;return a("div",[a("Card",[a("Row",[a("Form",{ref:"searchForm",staticClass:"search-form",attrs:{model:n.searchForm,inline:"","label-width":70},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.handleSearch.apply(null,arguments)}}},[a("Form-item",{attrs:{label:"会员名称",prop:"memberName"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入会员名称",clearable:""},model:{value:n.searchForm.memberName,callback:function(t){n.$set(n.searchForm,"memberName",t)},expression:"searchForm.memberName"}})],1),a("Button",{staticClass:"search-btn",attrs:{type:"primary",icon:"ios-search"},on:{click:n.handleSearch}},[n._v("搜索")])],1)],1),a("Table",{ref:"table",staticClass:"mt_10",attrs:{loading:n.loading,border:"",columns:n.columns,data:n.data},scopedSlots:n._u([{key:"shopDisableSlot",fn:function(e){return[a("i-switch",{attrs:{size:"large","true-value":"OPEN","false-value":"CLOSE"},on:{"on-change":function(t){return n.changeSwitch(e.row)}},model:{value:e.row.status,callback:function(t){n.$set(e.row,"status",t)},expression:"scope.row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[n._v("展示")]),a("span",{attrs:{slot:"close"},slot:"close"},[n._v("隐藏")])])]}}])}),a("Row",{staticClass:"mt_10",attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:n.searchForm.pageNumber,total:n.total,"page-size":n.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":n.changePage,"on-page-size-change":n.changePageSize}})],1)],1),a("Modal",{attrs:{width:"800",title:n.infoTitle},model:{value:n.infoFlag,callback:function(t){n.infoFlag=t},expression:"infoFlag"}},[a("div",{staticClass:"info-list",staticStyle:{overflow:"hidden"}},[a("div",{staticClass:"left-container"},[a("div",{staticClass:"product"},[a("img",{staticClass:"img",attrs:{src:n.infoData.goodsImage}})]),a("div",{staticClass:"show"},[a("label",[n._v("页面展示：")]),a("i-switch",{staticStyle:{"margin-top":"3px"},attrs:{size:"large","true-value":"OPEN","false-value":"CLOSE"},on:{"on-change":n.changeSwitchView},model:{value:n.infoData.status,callback:function(t){n.$set(n.infoData,"status",t)},expression:"infoData.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[n._v("展示")]),a("span",{attrs:{slot:"close"},slot:"close"},[n._v("隐藏")])])],1)]),a("div",{staticClass:"right-container"},[a("div",{staticClass:"border-b"},[n._v(n._s(n.infoData.goodsName))]),a("div",{staticClass:"border-b"},[a("div",{staticClass:"div-height"},[n._v(" 店铺名称："+n._s(n.infoData.storeName))]),a("div",{staticClass:"div-height"},[n._v(" 订单号："+n._s(n.infoData.orderNo))])]),a("div",{staticClass:"border-b"},[a("List",[a("ListItem",[a("ListItemMeta",{attrs:{avatar:n.infoData.memberProfile,title:n.infoData.memberName,description:n.infoData.content}})],1),a("div",{staticClass:"score-content"},[a("span",[n._v("物流评分："+n._s(n.infoData.deliveryScore))]),a("span",[n._v("服务评分："+n._s(n.infoData.serviceScore))]),a("span",[n._v("描述评分："+n._s(n.infoData.descriptionScore))])]),n.infoData.haveImage?a("div",{},[n._v(" 评价图 "),a("div",{staticStyle:{"margin-left":"40px"}},[n.infoData.images&&n.infoData.images.length?n._l(n.infoData.images.split(","),function(t,e){return a("img",{key:e,staticStyle:{width:"100px",height:"110px","margin-left":"2px"},attrs:{src:t,alt:""}})}):n._e()],2)]):n._e()],1)],1),n.infoData.reply?a("div",{staticClass:"border-b"},[a("div",[a("div",[a("div",{staticStyle:{float:"left"}},[n._v(" 商家回复：")]),a("div",{staticStyle:{"margin-left":"60px"}},[n._v(n._s(n.infoData.reply))])]),n.infoData.haveReplyImage?a("div",[a("div",{staticStyle:{"margin-left":"60px"}},[n.infoData.replyImage&&n.infoData.replyImage.length?n._l(n.infoData.replyImage.split(","),function(t,e){return a("img",{key:e,staticStyle:{width:"100px",height:"110px"},attrs:{src:t,alt:""}})}):n._e()],2)]):n._e()])]):n._e()])])])],1)},[],!1,null,"25b16197",null);e.default=n.exports},"6a4a":function(t,e,n){"use strict";n("05e4")},8194:function(t,e,n){"use strict";n.d(e,"k",function(){return i}),n.d(e,"h",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"u",function(){return s}),n.d(e,"i",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"t",function(){return u}),n.d(e,"a",function(){return d}),n.d(e,"o",function(){return f}),n.d(e,"p",function(){return m}),n.d(e,"q",function(){return h}),n.d(e,"w",function(){return g}),n.d(e,"v",function(){return p}),n.d(e,"l",function(){return b}),n.d(e,"n",function(){return v}),n.d(e,"r",function(){return w}),n.d(e,"j",function(){return y}),n.d(e,"e",function(){return S}),n.d(e,"f",function(){return D}),n.d(e,"s",function(){return _}),n.d(e,"b",function(){return k}),n.d(e,"d",function(){return O}),n.d(e,"m",function(){return j});var a=n("7f80"),i=function(t){return Object(a.c)("/member/evaluation/getByPage",t)},r=function(t){return Object(a.c)("/member/evaluation/get/".concat(t))},o=function(t){return Object(a.k)("/member/evaluation/delete/".concat(t))},s=function(t,e){return Object(a.c)("/member/evaluation/updateStatus/".concat(t),e)},c=function(t){return Object(a.c)("/passport/member",t)},l=function(t){return Object(a.c)("/passport/member/".concat(t))},u=function(t){return Object(a.k)("/passport/member",t)},d=function(t){return Object(a.g)("/passport/member",t)},f=function(t){return Object(a.c)("/wallet/recharge",t)},m=function(t){return Object(a.c)("/wallet/log",t)},h=function(t){return Object(a.c)("/wallet/withdrawApply",t)},g=function(t){return Object(a.g)("/wallet/withdrawApply",t)},p=function(t){return Object(a.k)("/passport/member/updateMemberStatus",t)},b=function(t){return Object(a.c)("/statistics/member",t)},v=function(t){return Object(a.c)("/statistics/view/list",t)},w=function(){return Object(a.c)("/statistics/view/online/history")},y=function(t){return Object(a.c)("/passport/member/num",t)},S=function(t){return Object(a.c)("/member/memberPointsHistory/getByPage",t)},D=function(t,e){return Object(a.c)("/member/address/".concat(t),e)},_=function(t){return Object(a.b)("/member/address/delById/".concat(t))},k=function(t){return Object(a.g)("/member/address",t)},O=function(t){return Object(a.k)("/member/address",t)},j=function(t){return Object(a.c)("/wallet/wallet",t)}}}]);