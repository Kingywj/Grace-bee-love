(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-766c2b94"],{"941b":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=/^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/},"9ef0":function(e,t,r){"use strict";r.r(t);var a=r("6bba"),s=r("cdbd"),o=(r("941b"),r("c40e")),n=r("0959"),i=r("f8b7"),a={name:"member",components:{region:a.a,ossManage:s.default},data:function(){var r=this;return{id:"",categories:[],loading:!0,storeInfo:{},checkAllGroup:[],selectDate:null,orderColumns:[{title:"订单编号",key:"sn",minWidth:100,tooltip:!0,slot:"orderSlot"},{title:"订单金额",key:"flowPrice",width:140,render:function(e,t){return e("div",r.$options.filters.unitPrice(t.row.flowPrice,"￥"))}},{title:"订单类型",key:"orderType",width:100,render:function(e,t){return"NORMAL"==t.row.orderType?e("div",[e("span",{},"普通订单")]):"VIRTUAL"==t.row.orderType?e("div",[e("span",{},"虚拟订单")]):"GIFT"==t.row.orderType?e("div",[e("span",{},"赠品订单")]):"PINTUAN"==t.row.orderType?e("div",[e("span",{},"拼团订单")]):void 0}},{title:"来源",key:"clientType",width:80,render:function(e,t){return"H5"==t.row.clientType?e("div",{},"移动端"):"PC"==t.row.clientType?e("div",{},"PC端"):"WECHAT_MP"==t.row.clientType?e("div",{},"小程序端"):"APP"==t.row.clientType?e("div",{},"移动应用端"):e("div",{},t.row.clientType)}},{title:"订单状态",key:"orderStatus",width:95,render:function(e,t){return"UNPAID"==t.row.orderStatus?e("div",[e("span",{},"未付款")]):"PAID"==t.row.orderStatus?e("div",[e("span",{},"已付款")]):"UNDELIVERED"==t.row.orderStatus?e("div",[e("span",{},"待发货")]):"DELIVERED"==t.row.orderStatus?e("div",[e("span",{},"已发货")]):"COMPLETED"==t.row.orderStatus?e("div",[e("span",{},"已完成")]):"TAKE"==t.row.orderStatus?e("div",[e("span",{},"待核验")]):"CANCELLED"==t.row.orderStatus?e("div",[e("span",{},"已取消")]):void 0}},{title:"支付状态",key:"payStatus",width:95,render:function(e,t){return"UNPAID"==t.row.payStatus?e("div",[e("span",{},"未付款")]):"PAID"==t.row.payStatus?e("div",[e("span",{},"已付款")]):void 0}},{title:"售后状态",key:"groupAfterSaleStatus",width:100,render:function(e,t){return"NEW"==t.row.groupAfterSaleStatus||"NOT_APPLIED"==t.row.groupAfterSaleStatus?e("div",[e("span",{},"未申请")]):"ALREADY_APPLIED"==t.row.groupAfterSaleStatus?e("div",[e("span",{},"已申请")]):"EXPIRED"==t.row.groupAfterSaleStatus?e("div",[e("span",{},"已失效")]):void 0}},{title:"投诉状态",key:"groupComplainStatus",width:95,render:function(e,t){return"NEW"==t.row.groupComplainStatus||"NO_APPLY"==t.row.groupComplainStatus?e("div",[e("span",{},"未申请")]):"APPLYING"==t.row.groupComplainStatus?e("div",[e("span",{},"申请中")]):"COMPLETE"==t.row.groupComplainStatus?e("div",[e("span",{},"已完成")]):"EXPIRED"==t.row.groupComplainStatus?e("div",[e("span",{},"已失效")]):"CANCEL"==t.row.groupComplainStatus?e("div",[e("span",{},"取消投诉")]):void 0}},{title:"购买店铺",key:"storeName",width:180,tooltip:!0},{title:"下单时间",key:"createTime",width:170}],orderData:[],orderTotal:0,orderSearchForm:{pageNumber:1,pageSize:10,payStatus:"",orderSn:"",orderType:""},refundGoodsOrderColumns:[{title:"售后服务单号",key:"sn",minWidth:140,slot:"refundGoodsOrderSlot"},{title:"订单编号",key:"orderSn",minWidth:120,slot:"orderSlot"},{title:"商品",key:"goodsName",minWidth:300,tooltip:!0,slot:"goodsSlot"},{title:"会员名称",key:"memberName",width:140},{title:"商家名称",key:"storeName",minWidth:100,tooltip:!0},{title:"售后金额",key:"applyRefundPrice",width:110,render:function(e,t){return null==t.row.applyRefundPrice?e("div",r.$options.filters.unitPrice(0,"￥")):e("div",r.$options.filters.unitPrice(t.row.applyRefundPrice,"￥"))}},{title:"售后类型",key:"serviceType",width:100,render:function(e,t){return"RETURN_MONEY"==t.row.serviceType?e("div",[e("span",{},"退款")]):"RETURN_GOODS"==t.row.serviceType?e("div",[e("span",{},"退货")]):"EXCHANGE_GOODS"==t.row.serviceType?e("div",[e("span",{},"换货")]):void 0}},{title:"售后状态",key:"serviceStatus",width:110,render:function(e,t){return"APPLY"==t.row.serviceStatus?e("div",[e("span",{},"申请中")]):"PASS"==t.row.serviceStatus?e("div",[e("span",{},"通过售后")]):"REFUSE"==t.row.serviceStatus?e("div",[e("span",{},"拒绝售后")]):"BUYER_RETURN"==t.row.serviceStatus?e("div",[e("span",{},"买家退货，待卖家收货")]):"SELLER_RE_DELIVERY"==t.row.serviceStatus?e("div",[e("span",{},"商家换货/补发")]):"SELLER_CONFIRM"==t.row.serviceStatus?e("div",[e("span",{},"卖家确认收货")]):"SELLER_TERMINATION"==t.row.serviceStatus?e("div",[e("span",{},"卖家终止售后")]):"BUYER_CONFIRM"==t.row.serviceStatus?e("div",[e("span",{},"买家确认收货")]):"BUYER_CANCEL"==t.row.serviceStatus?e("div",[e("span",{},"买家取消售后")]):"COMPLETE"==t.row.serviceStatus?e("div",[e("span",{},"完成售后")]):"WAIT_REFUND"==t.row.serviceStatus?e("div",[e("span",{},"待平台退款")]):void 0}},{title:"申请时间",key:"createTime",minWidth:145,tooltip:!0}],refundGoodsOrderData:[],refundGoodsOrderTotal:0,refundGoodsOrderSearchForm:{pageNumber:1,pageSize:10},refundOrderSearchForm:{pageNumber:1,pageSize:10},refundOrderData:[],refundOrderTotal:0}},methods:{init:function(){this.getStoreInfo(),this.getCategories(),this.getOrderData()},storeInfoChange:function(e){"order"==e&&this.getOrderData(),"refundGoods"==e&&this.getRefundGoodsOrderData(),"refund"==e&&this.getRefundOrder()},getStoreInfo:function(){var t=this;n.f(this.id).then(function(e){t.$set(t,"storeInfo",e.result),t.storeInfo.storeDisable="OPEN"===t.storeInfo.storeDisable,t.checkAllGroup=t.storeInfo.goodsManagementCategory.split(","),t.storeInfo.legalPhoto=t.storeInfo.legalPhoto.split(",")})},shopStatusChange:function(e){e?n.b(this.id).then(function(e){}):n.a(this.id).then(function(e){})},getOrderData:function(){var t=this;this.loading=!0,this.orderSearchForm.storeId=this.id,i.m(this.orderSearchForm).then(function(e){t.loading=!1,e.success&&(t.orderData=e.result.records,t.orderTotal=e.result.total)}),this.loading=!1},getRefundOrder:function(){var t=this;this.loading=!0,this.refundOrderSearchForm.storeId=this.id,this.refundOrderSearchForm.serviceType="RETURN_MONEY",i.h(this.refundOrderSearchForm).then(function(e){t.loading=!1,e.success&&(t.refundOrderData=e.result.records,t.refundOrderTotal=e.result.total)}),this.loading=!1},getRefundGoodsOrderData:function(){var t=this;this.loading=!0,this.refundGoodsOrderSearchForm.storeId=this.id,this.refundGoodsOrderSearchForm.serviceType="RETURN_GOODS",i.h(this.refundGoodsOrderSearchForm).then(function(e){t.loading=!1,e.success&&(t.refundGoodsOrderData=e.result.records,t.refundGoodsOrderTotal=e.result.total)}),this.loading=!1},getCategories:function(){var t=this;Object(o.o)().then(function(e){e.success&&(t.categories=e.result)})},refundGoodsOrderChangePage:function(e){this.refundGoodsOrderSearchForm.pageNumber=e,this.getRefundGoodsOrderData()},refundGoodsOrderChangePageSize:function(e){this.refundGoodsOrderSearchForm.pageSize=e,this.refundGoodsOrderSearchForm.pageNumber=1,this.getRefundGoodsOrderData()},refundOrderChangePage:function(e){this.refundOrderSearchForm.pageNumber=e,this.getRefundOrder()},refundOrderChangePageSize:function(e){this.refundOrderSearchForm.pageSize=e,this.refundOrderSearchForm.pageNumber=1,this.getRefundOrder()},orderChangePage:function(e){this.orderSearchForm.pageNumber=e,this.getOrderData()},orderChangePageSize:function(e){this.orderSearchForm.pageSize=e,this.orderSearchForm.pageNumber=1,this.getOrderData()},selectDateRange:function(e){e&&(this.orderSearchForm.startDate=e[0],this.orderSearchForm.endDate=e[1])},selectRefundGoodsDateRange:function(e){e&&(this.refundGoodsOrderSearchForm.startDate=e[0],this.refundGoodsOrderSearchForm.endDate=e[1])},selectRefundDateRange:function(e){e&&(this.refundOrderSearchForm.startDate=e[0],this.refundOrderSearchForm.endDate=e[1])}},mounted:function(){this.id=this.$route.query.id,this.init()}},s=(r("b2ce"),r("2877")),r=Object(s.a)(a,function(){var r=this,a=r._self._c;return a("div",[a("Card",{staticStyle:{padding:"10px 12px 0px"}},[a("div",{staticClass:"head-title"},[r._v("基本信息")]),a("div",{staticClass:"detail-body"},[a("div",{staticClass:"ant-col-md-6",staticStyle:{width:"25%"}},[a("div",{staticClass:"info"},[a("div",{staticClass:"head-info"},[a("Avatar",{attrs:{size:"large",src:r.storeInfo.storeLogo}}),a("div",[r.storeInfo.storeName&&15<r.storeInfo.storeName.length?a("div",{staticClass:"name"},[r._v(" "+r._s(r.storeInfo.storeName.slice(0,15))+"... ")]):a("div",{staticClass:"name"},[r._v(" "+r._s(r.storeInfo.storeName)+" ")])])],1),a("div",{staticClass:"bottom-info"},[r.storeInfo.createTime?a("p",[r._v(r._s(r.storeInfo.createTime)+" 开店")]):r._e(),1==r.storeInfo.selfOperated?a("p",[a("Tag",{attrs:{color:"success"}},[r._v("自营")])],1):a("p",[a("Tag",{attrs:{color:"error"}},[r._v("非自营")])],1),a("p",[a("i-switch",{attrs:{size:"large","true-value":!0,"false-value":!1},on:{"on-change":r.shopStatusChange},model:{value:r.storeInfo.storeDisable,callback:function(e){r.$set(r.storeInfo,"storeDisable",e)},expression:"storeInfo.storeDisable"}},[a("span",{attrs:{slot:"open"},slot:"open"},[r._v("启用")]),a("span",{attrs:{slot:"close"},slot:"close"},[r._v("禁用")])])],1)]),a("div",{staticStyle:{"margin-top":"20px"}},[a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("公司名称：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.companyName))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("公司电话：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.companyPhone))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("电子邮箱：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.companyEmail))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("员工总数：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.employeeNum)+"人")])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("注册资金：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.registeredCapital)+"万")])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("电子邮箱：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.companyEmail))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("联系人姓名：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.linkName))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("联系人电话：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.linkPhone))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("公司地址：")]),a("span",{staticClass:"info"},[r._v(" "+r._s(r.storeInfo.companyAddressPath||r.storeInfo.companyAddress?r.storeInfo.companyAddressPath+" "+r.storeInfo.companyAddress:"暂未完善")+" ")])])])])]),a("div",{staticClass:"ant-col-md-6"},[a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("商家账号：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.memberName))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("库存预警数：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.stockWarning||"0"))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("店铺所在地：")]),a("span",{staticClass:"info"},[r._v(" "+r._s(r.storeInfo.storeAddressPath||r.storeInfo.storeAddressDetail?r.storeInfo.storeAddressPath+r.storeInfo.storeAddressDetail:"暂未完善")+" ")])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("退货地址：")]),a("span",{staticClass:"info"},[r._v(" "+r._s("null"!==r.storeInfo.salesConsigneeName?r.storeInfo.salesConsigneeName:"null"!==r.storeInfo.salesConsigneeMobile?r.storeInfo.salesConsigneeMobile:"null"!==r.storeInfo.salesConsigneeAddressPath?r.storeInfo.salesConsigneeAddressPath:"null"!==r.storeInfo.salesConsigneeDetail?r.storeInfo.salesConsigneeDetail:"暂未完善")+" ")])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("店铺定位：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.storeCenter?"已定位":"未定位"))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("经营范围：")]),a("span",{staticClass:"info"},[a("CheckboxGroup",{model:{value:r.checkAllGroup,callback:function(e){r.checkAllGroup=e},expression:"checkAllGroup"}},r._l(r.categories,function(e,t){return a("Checkbox",{key:t+1,attrs:{disabled:"",label:e.id}},[r._v(r._s(e.name)+" ")])}),1)],1)]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("店铺简介：")]),a("span",{staticClass:"info"},[r._v(" "+r._s(r.storeInfo.storeDesc||"暂未完善")+" ")])])]),a("div",{staticClass:"ant-col-md-6"},[a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("法人姓名：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.legalName)+"人")])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("法人身份证：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.legalId)+"人")])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("身份证照片：")]),a("span",{staticClass:"info"},r._l(r.storeInfo.legalPhoto,function(e){return a("img",{key:e,staticClass:"mr_10",staticStyle:{height:"100px",width:"100px"},attrs:{src:e}})}),0)]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("营业执照号：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.licenseNum))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("法定经营范围：")]),a("span",{staticClass:"info"},[r._v(r._s(r.storeInfo.scope))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("营业执照电子版：")]),a("span",{staticClass:"info"},[a("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:r.storeInfo.licencePhoto}})])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("银行名称：")]),a("span",{staticClass:"info"},[r._v(" "+r._s("null"!=r.storeInfo.settlementBankAccountName&&r.storeInfo.settlementBankAccountName?r.storeInfo.settlementBankAccountName:"")+" ")])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("银行账号：")]),a("span",{staticClass:"info"},[r._v(" "+r._s("null"!=r.storeInfo.settlementBankAccountNum&&r.storeInfo.settlementBankAccountNum?r.storeInfo.settlementBankAccountNum:"")+" ")])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("银行开户支行名称：")]),a("span",{staticClass:"info"},[r._v(" "+r._s("null"!=r.storeInfo.settlementBankBranchName&&r.storeInfo.settlementBankBranchName?r.storeInfo.settlementBankBranchName:"")+" ")])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("银行支行联行号：")]),a("span",{staticClass:"info"},[r._v(" "+r._s("null"!=r.storeInfo.settlementBankJointName&&r.storeInfo.settlementBankJointName?r.storeInfo.settlementBankJointName:""))])]),a("p",{staticClass:"item"},[a("span",{staticClass:"label"},[r._v("结算周期：")]),r.storeInfo.settlementCycle?a("span",{staticClass:"info"},[r._l(r.storeInfo.settlementCycle.split(","),function(e){return[""!==e?a("Tag",{key:e,staticStyle:{"marrgin-left":"10px"},attrs:{name:e}},[r._v(r._s(e)+" ")]):r._e()]})],2):r._e()])])])]),a("Card",{staticClass:"mt_10"},[a("Tabs",{attrs:{value:"order"},on:{"on-click":r.storeInfoChange}},[a("TabPane",{staticStyle:{"min-height":"200px"},attrs:{label:"TA的订单",name:"order"}},[a("Row",[a("Form",{ref:"searchForm",staticClass:"search-form",attrs:{model:r.orderSearchForm,inline:"","label-width":70}},[a("Form-item",{attrs:{label:"订单号",prop:"orderSn"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入订单号",clearable:""},model:{value:r.orderSearchForm.orderSn,callback:function(e){r.$set(r.orderSearchForm,"orderSn",e)},expression:"orderSearchForm.orderSn"}})],1),a("Form-item",{attrs:{label:"订单状态",prop:"orderStatus"}},[a("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",clearable:""},model:{value:r.orderSearchForm.orderStatus,callback:function(e){r.$set(r.orderSearchForm,"orderStatus",e)},expression:"orderSearchForm.orderStatus"}},[a("Option",{attrs:{value:"UNPAID"}},[r._v("未付款")]),a("Option",{attrs:{value:"PAID"}},[r._v("已付款")]),a("Option",{attrs:{value:"UNDELIVERED"}},[r._v("待发货")]),a("Option",{attrs:{value:"DELIVERED"}},[r._v("已发货")]),a("Option",{attrs:{value:"COMPLETED"}},[r._v("已完成")]),a("Option",{attrs:{value:"TAKE"}},[r._v("待核验")]),a("Option",{attrs:{value:"CANCELLED"}},[r._v("已取消")])],1)],1),a("Form-item",{attrs:{label:"支付状态",prop:"payStatus"}},[a("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",clearable:""},model:{value:r.orderSearchForm.payStatus,callback:function(e){r.$set(r.orderSearchForm,"payStatus",e)},expression:"orderSearchForm.payStatus"}},[a("Option",{attrs:{value:"UNPAID"}},[r._v("未付款")]),a("Option",{attrs:{value:"PAID"}},[r._v("已付款")])],1)],1),a("Form-item",{attrs:{label:"订单类型",prop:"orderType"}},[a("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",clearable:""},model:{value:r.orderSearchForm.orderType,callback:function(e){r.$set(r.orderSearchForm,"orderType",e)},expression:"orderSearchForm.orderType"}},[a("Option",{attrs:{value:"NORMAL"}},[r._v("普通订单")]),a("Option",{attrs:{value:"VIRTUAL"}},[r._v("虚拟订单")]),a("Option",{attrs:{value:"GIFT"}},[r._v("赠品订单")]),a("Option",{attrs:{value:"PINTUAN"}},[r._v("拼团订单")])],1)],1),a("Form-item",{attrs:{label:"订单来源",prop:"clientType"}},[a("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",clearable:""},model:{value:r.orderSearchForm.clientType,callback:function(e){r.$set(r.orderSearchForm,"clientType",e)},expression:"orderSearchForm.clientType"}},[a("Option",{attrs:{value:"H5"}},[r._v("移动端")]),a("Option",{attrs:{value:"PC"}},[r._v("PC端")]),a("Option",{attrs:{value:"WECHAT_MP"}},[r._v("小程序")]),a("Option",{attrs:{value:"APP"}},[r._v("移动应用端")]),a("Option",{attrs:{value:"UNKNOWN"}},[r._v("未知")])],1)],1),a("Form-item",{attrs:{label:"下单时间"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss",clearable:"",placeholder:"选择起始时间",transfer:""},on:{"on-change":r.selectDateRange},model:{value:r.selectDate,callback:function(e){r.selectDate=e},expression:"selectDate"}})],1),a("Button",{staticClass:"search-btn",attrs:{type:"primary",icon:"ios-search"},on:{click:r.getOrderData}},[r._v("搜索")])],1)],1),a("div",{staticStyle:{"min-height":"180px"}},[a("Table",{ref:"table",staticClass:"mt_10",attrs:{loading:r.loading,border:"",columns:r.orderColumns,data:r.orderData},scopedSlots:r._u([{key:"orderSlot",fn:function(t){return[a("a",{on:{click:function(e){return r.$router.push({name:"order-detail",query:{sn:t.row.sn}})}}},[r._v(r._s(t.row.sn))])]}}])}),a("Row",{staticClass:"mt_10",staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:r.orderSearchForm.pageNumber,total:r.orderTotal,"page-size":r.orderSearchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":r.orderChangePage,"on-page-size-change":r.orderChangePageSize}})],1)],1)],1),a("TabPane",{attrs:{label:"TA的退货单",name:"refundGoods"}},[a("Row",[a("Form",{ref:"refundGoodsOrderSearchForm",staticClass:"search-form",attrs:{model:r.refundGoodsOrderSearchForm,inline:"","label-width":70}},[a("Form-item",{attrs:{label:"订单编号",prop:"orderSn"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入订单编号",clearable:""},model:{value:r.refundGoodsOrderSearchForm.orderSn,callback:function(e){r.$set(r.refundGoodsOrderSearchForm,"orderSn",e)},expression:"refundGoodsOrderSearchForm.orderSn"}})],1),a("Form-item",{attrs:{label:"售后单号",prop:"sn"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入售后单号",clearable:""},model:{value:r.refundGoodsOrderSearchForm.sn,callback:function(e){r.$set(r.refundGoodsOrderSearchForm,"sn",e)},expression:"refundGoodsOrderSearchForm.sn"}})],1),a("Form-item",{attrs:{label:"售后状态"}},[a("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"全部",clearable:""},model:{value:r.refundGoodsOrderSearchForm.serviceStatus,callback:function(e){r.$set(r.refundGoodsOrderSearchForm,"serviceStatus",e)},expression:"refundGoodsOrderSearchForm.serviceStatus"}},[a("Option",{attrs:{value:"APPLY"}},[r._v("申请售后")]),a("Option",{attrs:{value:"PASS"}},[r._v("通过售后")]),a("Option",{attrs:{value:"REFUSE"}},[r._v("拒绝售后")]),a("Option",{attrs:{value:"BUYER_RETURN"}},[r._v("买家退货，待卖家收货")]),a("Option",{attrs:{value:"SELLER_RE_DELIVERY"}},[r._v("商家换货/补发")]),a("Option",{attrs:{value:"SELLER_CONFIRM"}},[r._v("卖家确认收货")]),a("Option",{attrs:{value:"SELLER_TERMINATION"}},[r._v("卖家终止售后")]),a("Option",{attrs:{value:"BUYER_CONFIRM"}},[r._v("买家确认收货")]),a("Option",{attrs:{value:"BUYER_CANCEL"}},[r._v("买家取消售后")]),a("Option",{attrs:{value:"COMPLETE"}},[r._v("完成售后")])],1)],1),a("Form-item",{attrs:{label:"申请时间"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss",clearable:"",placeholder:"选择起始时间",transfer:""},on:{"on-change":r.selectRefundGoodsDateRange},model:{value:r.selectDate,callback:function(e){r.selectDate=e},expression:"selectDate"}})],1),a("Form-item",{attrs:{label:"商家名称",prop:"storeName"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入商家名称",clearable:""},model:{value:r.refundGoodsOrderSearchForm.storeName,callback:function(e){r.$set(r.refundGoodsOrderSearchForm,"storeName",e)},expression:"refundGoodsOrderSearchForm.storeName"}})],1),a("Form-item",{attrs:{label:"会员名称",prop:"memberName"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入会员名称",clearable:""},model:{value:r.refundGoodsOrderSearchForm.memberName,callback:function(e){r.$set(r.refundGoodsOrderSearchForm,"memberName",e)},expression:"refundGoodsOrderSearchForm.memberName"}})],1),a("Button",{staticClass:"search-btn",attrs:{type:"primary",icon:"ios-search"},on:{click:r.getRefundGoodsOrderData}},[r._v("搜索")])],1)],1),a("div",{staticStyle:{"min-height":"180px"}},[a("Table",{ref:"table",staticClass:"mt_10",attrs:{loading:r.loading,border:"",columns:r.refundGoodsOrderColumns,data:r.refundGoodsOrderData},scopedSlots:r._u([{key:"goodsSlot",fn:function(e){return[a("div",{staticStyle:{"margin-top":"5px",height:"80px",display:"flex"}},[a("div",{},[a("img",{staticStyle:{height:"60px","margin-top":"3px"},attrs:{src:e.row.goodsImage}})]),a("div",{staticStyle:{"margin-left":"13px","margin-top":"3px"}},[a("div",{staticClass:"div-zoom"},[a("a",[r._v(r._s(e.row.goodsName))])])])])]}},{key:"orderSlot",fn:function(t){return[a("a",{on:{click:function(e){return r.$router.push({name:"order-detail",query:{sn:t.row.orderSn}})}}},[r._v(r._s(t.row.orderSn))])]}},{key:"refundGoodsOrderSlot",fn:function(t){return[a("a",{on:{click:function(e){return r.$router.push({name:"after-order-detail",query:{sn:t.row.sn}})}}},[r._v(r._s(t.row.sn))])]}}])}),a("Row",{staticClass:"mt_10",staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:r.refundGoodsOrderSearchForm.pageNumber,total:r.refundGoodsOrderTotal,"page-size":r.refundGoodsOrderSearchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":r.refundGoodsOrderChangePage,"on-page-size-change":r.refundGoodsOrderChangePageSize}})],1)],1)],1),a("TabPane",{attrs:{label:"TA的退款单",name:"refund"}},[a("Row",[a("Form",{ref:"refundOrderSearchForm",staticClass:"search-form",attrs:{model:r.refundOrderSearchForm,inline:"","label-width":70}},[a("Form-item",{attrs:{label:"订单编号",prop:"orderSn"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入订单编号",clearable:""},model:{value:r.refundOrderSearchForm.orderSn,callback:function(e){r.$set(r.refundOrderSearchForm,"orderSn",e)},expression:"refundOrderSearchForm.orderSn"}})],1),a("Form-item",{attrs:{label:"售后单号",prop:"sn"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入售后单号",clearable:""},model:{value:r.refundOrderSearchForm.sn,callback:function(e){r.$set(r.refundOrderSearchForm,"sn",e)},expression:"refundOrderSearchForm.sn"}})],1),a("Form-item",{attrs:{label:"售后状态"}},[a("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"全部",clearable:""},model:{value:r.refundOrderSearchForm.serviceStatus,callback:function(e){r.$set(r.refundOrderSearchForm,"serviceStatus",e)},expression:"refundOrderSearchForm.serviceStatus"}},[a("Option",{attrs:{value:"APPLY"}},[r._v("申请售后")]),a("Option",{attrs:{value:"PASS"}},[r._v("通过售后")]),a("Option",{attrs:{value:"REFUSE"}},[r._v("拒绝售后")]),a("Option",{attrs:{value:"BUYER_RETURN"}},[r._v("买家退货，待卖家收货")]),a("Option",{attrs:{value:"SELLER_RE_DELIVERY"}},[r._v("商家换货/补发")]),a("Option",{attrs:{value:"SELLER_CONFIRM"}},[r._v("卖家确认收货")]),a("Option",{attrs:{value:"SELLER_TERMINATION"}},[r._v("卖家终止售后")]),a("Option",{attrs:{value:"BUYER_CONFIRM"}},[r._v("买家确认收货")]),a("Option",{attrs:{value:"BUYER_CANCEL"}},[r._v("买家取消售后")]),a("Option",{attrs:{value:"COMPLETE"}},[r._v("完成售后")])],1)],1),a("Form-item",{attrs:{label:"申请时间"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss",clearable:"",placeholder:"选择起始时间",transfer:""},on:{"on-change":r.selectRefundDateRange},model:{value:r.selectDate,callback:function(e){r.selectDate=e},expression:"selectDate"}})],1),a("Form-item",{attrs:{label:"商家名称",prop:"storeName"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入商家名称",clearable:""},model:{value:r.refundOrderSearchForm.storeName,callback:function(e){r.$set(r.refundOrderSearchForm,"storeName",e)},expression:"refundOrderSearchForm.storeName"}})],1),a("Form-item",{attrs:{label:"会员名称",prop:"memberName"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入会员名称",clearable:""},model:{value:r.refundOrderSearchForm.memberName,callback:function(e){r.$set(r.refundOrderSearchForm,"memberName",e)},expression:"refundOrderSearchForm.memberName"}})],1),a("Button",{staticClass:"search-btn",attrs:{type:"primary",icon:"ios-search"},on:{click:r.getRefundOrder}},[r._v("搜索")])],1)],1),a("div",{staticStyle:{"min-height":"180px"}},[a("Table",{ref:"table",staticClass:"mt_10",attrs:{loading:r.loading,border:"",columns:r.refundGoodsOrderColumns,data:r.refundOrderData},scopedSlots:r._u([{key:"goodsSlot",fn:function(e){return[a("div",{staticStyle:{"margin-top":"5px",height:"80px",display:"flex"}},[a("div",{},[a("img",{staticStyle:{height:"60px","margin-top":"3px"},attrs:{src:e.row.goodsImage}})]),a("div",{staticStyle:{"margin-left":"13px","margin-top":"3px"}},[a("div",{staticClass:"div-zoom"},[a("a",[r._v(r._s(e.row.goodsName))])])])])]}},{key:"orderSlot",fn:function(t){return[a("a",{on:{click:function(e){return r.$router.push({name:"order-detail",query:{sn:t.row.orderSn}})}}},[r._v(r._s(t.row.orderSn))])]}},{key:"refundGoodsOrderSlot",fn:function(t){return[a("a",{on:{click:function(e){return r.$router.push({name:"after-order-detail",query:{sn:t.row.sn}})}}},[r._v(r._s(t.row.sn))])]}}])}),a("Row",{staticClass:"mt_10",staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:r.refundOrderSearchForm.pageNumber,total:r.refundOrderTotal,"page-size":r.refundOrderSearchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":r.refundOrderChangePage,"on-page-size-change":r.refundOrderChangePageSize}})],1)],1)],1)],1)],1)],1)},[],!1,null,"930b3120",null);t.default=r.exports},b2ce:function(e,t,r){"use strict";r("b804")},b804:function(e,t,r){},f8b7:function(e,t,r){"use strict";r.d(t,"w",function(){return s}),r.d(t,"i",function(){return o}),r.d(t,"d",function(){return n}),r.d(t,"a",function(){return i}),r.d(t,"e",function(){return l}),r.d(t,"c",function(){return c}),r.d(t,"k",function(){return d}),r.d(t,"l",function(){return u}),r.d(t,"b",function(){return p}),r.d(t,"p",function(){return f}),r.d(t,"m",function(){return m}),r.d(t,"r",function(){return h}),r.d(t,"q",function(){return v}),r.d(t,"x",function(){return S}),r.d(t,"o",function(){return g}),r.d(t,"f",function(){return _}),r.d(t,"h",function(){return O}),r.d(t,"g",function(){return b}),r.d(t,"j",function(){return C}),r.d(t,"n",function(){return y}),r.d(t,"u",function(){return I}),r.d(t,"s",function(){return w}),r.d(t,"t",function(){return F}),r.d(t,"v",function(){return N});var a=r("7f80"),s=function(e){return Object(a.k)("/order/complain/status",e)},o=function(e){return Object(a.c)("/order/afterSaleReason/getByPage",e)},n=function(e){return Object(a.b)("/order/afterSaleReason/delByIds/".concat(e))},i=function(e){return Object(a.g)("/order/afterSaleReason",e)},l=function(e,t){return Object(a.k)("/order/afterSaleReason/update/".concat(e),t)},c=function(e,t){return Object(a.k)("/order/afterSale/review/".concat(e),t)},d=function(e){return Object(a.c)("/order/complain",e)},u=function(e){return Object(a.c)("/order/complain/".concat(e))},p=function(e){return Object(a.g)("/order/complain/communication",e)},f=function(e,t){return Object(a.k)("/order/complain/complete/".concat(e),t)},m=function(e){return Object(a.c)("/order/order",e)},h=function(e){return Object(a.g)("/order/order/".concat(e,"/pay"))},v=function(e){return Object(a.c)("/order/order/".concat(e))},S=function(e,t){return Object(a.k)("/order/order/update/".concat(e,"/price"),t)},g=function(e,t){return Object(a.g)("/order/order/".concat(e,"/cancel"),t)},_=function(e,t){return Object(a.g)("/order/order/update/".concat(e,"/consignee"),t)},O=function(e){return Object(a.c)("/order/afterSale/page",e)},b=function(e){return Object(a.c)("/order/afterSale/get/".concat(e))},C=function(e){return Object(a.c)("/order/afterSale/getDeliveryTraces/".concat(e))},y=function(e){return Object(a.c)("/trade/receipt",e)},I=function(e,t){return Object(a.k)("/order/afterSale/refund/".concat(e),t)},w=function(e){return Object(a.c)("/order/paymentLog",e)},F=function(e){return Object(a.c)("/order/refundLog",e)},N=function(e){return Object(a.c)("/order/afterSale/getStoreAfterSaleAddress/".concat(e))}}}]);