(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b4ca0926"],{"31af":function(e,t,i){"use strict";i("c27d")},"394c":function(e,t,i){"use strict";i.r(t);var r=i("1619"),a=i("0959"),n={name:"bill-detail",data:function(){var i=this;return{loading:!1,columns:[{title:"项目",key:"name",width:250},{title:"值",key:"value"}],data:[{name:"计算中",value:0},{name:"计算中",value:0},{name:"计算中",value:0},{name:"计算中",value:0},{name:"计算中",value:0},{name:"计算中",value:0},{name:"计算中",value:0},{name:"计算中",value:0}],id:"",bill:{},order:[],orderParam:{pageNumber:1,pageSize:10,sort:"id",order:"desc",flowType:"PAY",startDate:null,endDate:null},orderColumns:[{title:"入账时间",key:"createTime",minWidth:120,tooltip:!0},{title:"订单编号",key:"orderSn",minWidth:120,tooltip:!0},{title:"订单金额",key:"finalPrice",width:120,render:function(e,t){return e("div",i.$options.filters.unitPrice(t.row.finalPrice,"￥"))}},{title:"平台分佣",key:"commissionPrice",width:120,render:function(e,t){return e("div",i.$options.filters.unitPrice(t.row.commissionPrice,"￥"))}},{title:"平台优惠券",key:"siteCouponPrice",render:function(e,t){return null==t.row.siteCouponPrice?e("div","-"):e("div",i.$options.filters.unitPrice(t.row.siteCouponPrice,"￥"))}},{title:"平台优惠券补贴金额",key:"siteCouponCommission",render:function(e,t){return null==t.row.siteCouponCommission?e("div","-"):e("div",i.$options.filters.unitPrice(t.row.siteCouponCommission,"￥"))}},{title:"分销金额",key:"distributionRebate",width:120,render:function(e,t){return null==t.row.distributionRebate?e("div","-"):e("div",i.$options.filters.unitPrice(t.row.distributionRebate,"￥"))}},{title:"应结金额",key:"billPrice",width:120,render:function(e,t){return e("div",i.$options.filters.unitPrice(t.row.billPrice,"￥"))}}],refund:[],refundParam:{flowTypeEnum:"PAY",pageNumber:1,pageSize:10,sort:"id",order:"desc",flowType:"REFUND",startDate:null,endDate:null},refundColumns:[{title:"退款时间",key:"createTime",minWidth:120,tooltip:!0},{title:"退款流水编号",key:"sn",minWidth:120,tooltip:!0},{title:"订单编号",key:"orderSn",minWidth:120,tooltip:!0},{title:"售后编号",key:"refundSn",minWidth:120,tooltip:!0},{title:"退款金额",key:"finalPrice",width:120,render:function(e,t){return e("div",i.$options.filters.unitPrice(t.row.finalPrice,"￥"))}},{title:"退还佣金",key:"commissionPrice",minWidth:120,render:function(e,t){return e("div",i.$options.filters.unitPrice(t.row.commissionPrice,"￥"))}},{title:"退还平台优惠券",key:"siteCouponCommission",minWidth:110},{title:"退还分销",key:"distributionRebate",minWidth:120,render:function(e,t){return null==t.row.distributionRebate?e("div","-"):e("div",i.$options.filters.unitPrice(t.row.distributionRebate,"￥"))}},{title:"合计金额",key:"billPrice",minWidth:120,render:function(e,t){return null==t.row.billPrice?e("div","-"):e("div",i.$options.filters.unitPrice(t.row.billPrice,"￥"))}}],orderTotal:0,refundTotal:0}},methods:{orderChangePage:function(e){this.orderParam.pageNumber=e,this.getOrder()},orderChangePageSize:function(e){this.orderParam.pageNumber=1,this.orderParam.pageSize=e,this.getOrder()},refundOrderChangePage:function(e){this.refundParam.pageNumber=e,this.getRefund()},refundOrderChangePageSize:function(e){this.refundParam.pageSize=e,tthis.getRefund()},clickTabs:function(e){(this.orderParam.pageNumber=1)==e?(this.orderParam.flowType="REFUND",this.getRefund()):(this.orderParam.flowType="PAY",this.getOrder())},pass:function(){var t=this;a.j(this.id).then(function(e){e.success&&(t.$Message.success(e.message),t.init())})},init:function(){this.id=this.$route.query.id,this.getDetail()},getDetail:function(){var t=this;a.c(this.id).then(function(e){e.success&&(t.bill=e.result,t.initTable(),t.orderParam.startDate=t.bill.startTime,t.orderParam.endDate=t.bill.endTime,t.refundParam.startDate=t.bill.startTime,t.refundParam.endDate=t.bill.endTime,t.getOrder())})},initTable:function(){var e=this.bill;this.data[0].name="结算单号",this.data[0].value=e.sn,this.data[1].name="起止日期",this.data[1].value=e.startTime+"~"+e.endTime,this.data[2].name="出帐日期",this.data[2].value=e.createTime,this.data[3].name="当前状态",this.data[3].value=r.unixSellerBillStatus(e.billStatus),this.data[4].name="当前店铺",this.data[4].value=e.storeName,this.data[5].name="平台打款时间",this.data[5].value=null===e.payTime?"未付款":e.payTime,this.data[6].name="订单付款总金额",this.data[6].value=r.unitPrice(e.orderPrice||0,"¥"),this.data[7].name="结算金额",this.data[7].value=r.unitPrice(e.billPrice||0,"¥")},getOrder:function(){var t=this;a.i(this.id,this.orderParam).then(function(e){e.result&&(t.order=e.result.records,t.orderTotal=e.result.total)}),this.orderTotal=this.order.length},getRefund:function(){var t=this;a.i(this.id,this.orderParam).then(function(e){t.loading=!1,e.result&&(t.refund=e.result.records,t.refundTotal=e.result.total,t.$set(t,"refund",e.result.records))}),this.refundTotal=this.refund.length}},mounted:function(){this.init()}},i=(i("31af"),i("2877")),i=Object(i.a)(n,function(){var i=this,r=i._self._c;return r("div",[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[i._v("商家信息")]),r("div",{staticClass:"flex flex_align_item"},[r("p",[i._v("店铺名称："+i._s(i.bill.storeName))]),r("p",[i._v("银行开户名："+i._s(i.bill.bankAccountName))]),r("p",[i._v("银行账号："+i._s(i.bill.bankAccountNumber))]),r("p",[i._v("开户行支行名称："+i._s(i.bill.bankName))]),r("p",[i._v("支行联行号："+i._s(i.bill.bankCode))])])]),r("Card",{staticClass:"mt_10 mb_10"},[r("p",{attrs:{slot:"title"},slot:"title"},[i._v("账单详细")]),r("div",{staticClass:"tips-status"},[r("span",[i._v("账单状态 ：")]),r("span",{staticClass:"theme_color"},[i._v(i._s(i._f("unixSellerBillStatus")(i.bill.billStatus)))]),"CHECK"==i.bill.billStatus?r("Button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return i.pass()}}},[i._v("付款")]):i._e()],1),r("table",[r("tbody",i._l(i.data,function(e,t){return r("tr",{key:t},[r("td",[i._v(i._s(e.name)+"：")]),r("td",[i._v(i._s(e.value))])])}),0)]),r("div",[r("h3",{staticClass:"ml_10",staticStyle:{padding:"10px"}},[i._v("结算详细")]),r("div",{staticClass:"bill-detail-price"},[r("span",[r("p",[i._v("积分结算金额")]),r("p",{staticClass:"increase-color"},[i._v(" +"+i._s(i._f("unitPrice")(i.bill.pointSettlementPrice||0,"￥"))+" ")])]),r("span",[r("p",[i._v("平台优惠券补贴")]),r("p",{staticClass:"increase-color"},[i._v(" +"+i._s(i._f("unitPrice")(i.bill.siteCouponCommission||0,"￥"))+" ")])]),r("span",[r("p",[i._v("砍价商品结算金额")]),r("p",{staticClass:"increase-color"},[i._v(" +"+i._s(i._f("unitPrice")(i.bill.kanjiaSettlementPrice||0,"￥"))+" ")])]),r("span",[r("p",[i._v("退单分销返现返还")]),r("p",{staticClass:"increase-color"},[i._v(" +"+i._s(i._f("unitPrice")(i.bill.distributionRefundCommission||0,"￥"))+" ")])]),r("span",[r("p",[i._v("退单产生退还佣金金额")]),r("p",{staticClass:"increase-color"},[i._v(" +"+i._s(i._f("unitPrice")(i.bill.refundCommissionPrice||0,"￥"))+" ")])]),r("span",[r("p",[i._v("退单金额")]),r("p",{staticClass:"theme_color"},[i._v(" -"+i._s(i._f("unitPrice")(i.bill.refundPrice||0,"￥"))+" ")])]),r("span",[r("p",[i._v("平台收取佣金")]),r("p",{staticClass:"theme_color"},[i._v(" -"+i._s(i._f("unitPrice")(i.bill.commissionPrice||0,"￥"))+" ")])]),r("span",[r("p",[i._v("分销返现支出")]),r("p",{staticClass:"theme_color"},[i._v(" -"+i._s(i._f("unitPrice")(i.bill.distributionCommission||0,"￥"))+" ")])]),r("span",[r("p",[i._v("退单平台优惠券补贴返还")]),r("p",{staticClass:"theme_color"},[i._v(" -"+i._s(i._f("unitPrice")(i.bill.siteCouponRefundCommission||0,"￥"))+" ")])])])])]),r("Tabs",{attrs:{"active-key":"key1"},on:{"on-click":i.clickTabs}},[r("Tab-pane",{key:"key1",attrs:{label:"入账流水"}},[r("Card",[r("Table",{ref:"table",attrs:{loading:i.loading,border:"",columns:i.orderColumns,data:i.order}}),r("Row",{staticClass:"mt_10",attrs:{type:"flex",justify:"end"}},[r("Page",{attrs:{current:i.orderParam.pageNumber,total:i.orderTotal,"page-size":i.orderParam.pageSize,size:"small","show-total":"","show-elevator":""},on:{"on-change":i.orderChangePage,"on-page-size-change":i.orderChangePageSize}})],1)],1)],1),r("Tab-pane",{key:"key2",attrs:{label:"退款流水"}},[r("Card",[r("Table",{ref:"table",attrs:{loading:i.loading,border:"",columns:i.refundColumns,data:i.refund}}),r("Row",{staticClass:"mt_10",attrs:{type:"flex",justify:"end"}},[r("Page",{attrs:{current:i.refundParam.pageNumber,total:i.refundTotal,"page-size":i.refundParam.pageSize,size:"small","show-total":"","show-elevator":""},on:{"on-change":function(e){return i.getRefund()},"on-page-size-change":function(e){return i.getRefund()}}})],1)],1)],1)],1)],1)},[],!1,null,"87389e9a",null);t.default=i.exports},c27d:function(e,t,i){}}]);