(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-49c55522"],{"0a41":function(t,n,a){},2903:function(t,n,a){"use strict";a("0a41")},"421b":function(t,n,a){"use strict";a.r(n);var e=a("f8b7");function i(t,n,a){n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a}var r={name:"orderComplaintDetail",data:function(){return{id:0,complaintInfo:"",images:[],appealImages:[],submitLoading:!1,params:{content:"",complainId:""},arbitrationParams:{arbitrationResult:""},arbitrationResultShow:!1}},methods:{handleStoreComplaint:function(){var t,n=this;e.w((i(t={complainStatus:"WAIT_APPEAL"},"complainStatus","WAIT_APPEAL"),i(t,"complainId",this.complaintInfo.id),t)).then(function(t){t.success&&(n.$Message.success("操作成功"),n.getDetail())})},init:function(){this.getDataList()},getDetail:function(){var n=this;this.loading=!0,e.l(this.id).then(function(t){n.loading=!1,t.success&&(n.complaintInfo=t.result,n.images=(t.result.images||"").split(","),n.appealImages=(t.result.appealImages||"").split(","))})},returnDataList:function(){this.$router.push({name:"orderComplaint"})},arbitrationHandle:function(){this.arbitrationResultShow=!0},arbitrationHandleSubmit:function(){var n=this;""!=this.arbitrationParams.arbitrationResult?(e.p(this.id,this.arbitrationParams).then(function(t){n.submitLoading=!1,t.success&&(n.$Message.success("仲裁成功"),n.arbitrationParams.arbitrationResult="",n.getDetail())}),this.arbitrationResultShow=!0):this.$Message.error("请填写仲裁内容")},handleSubmit:function(){var n=this;""!=this.params.content?(this.params.complainId=this.id,e.b(this.params).then(function(t){n.submitLoading=!1,t.success&&(n.$Message.success("对话成功"),n.params.content="",n.getDetail())})):this.$Message.error("请填写对话内容")}},mounted:function(){this.id=this.$route.query.id,this.getDetail()}},a=(a("2903"),a("2877")),a=Object(a.a)(r,function(){var a=this,e=a._self._c;return e("div",{staticClass:"search"},[e("Card",[e("div",{staticClass:"main-content"},[e("div",{staticClass:"div-flow-left"},[e("div",{staticClass:"div-form-default"},[e("h3",[a._v("投诉信息")]),e("dl",[e("dt",[a._v("投诉商品")]),e("dd",[a._v(a._s(a.complaintInfo.goodsName))])]),e("dl",[e("dt",[a._v("投诉状态")]),"NEW"==a.complaintInfo.complainStatus?e("dd",[a._v("新投诉")]):a._e(),"CANCEL"==a.complaintInfo.complainStatus?e("dd",[a._v("已撤销")]):a._e(),"WAIT_APPEAL"==a.complaintInfo.complainStatus?e("dd",[a._v("待申诉")]):a._e(),"COMMUNICATION"==a.complaintInfo.complainStatus?e("dd",[a._v("对话中")]):a._e(),"WAIT_ARBITRATION"==a.complaintInfo.complainStatus?e("dd",[a._v("等待仲裁")]):a._e(),"COMPLETE"==a.complaintInfo.complainStatus?e("dd",[a._v("已完成")]):a._e()]),e("dl",[e("dt",[a._v("投诉时间")]),e("dd",[a._v(a._s(a.complaintInfo.createTime))])]),e("dl",[e("dt",[a._v("投诉主题")]),e("dd",[a._v(a._s(a.complaintInfo.complainTopic))])]),e("dl",[e("dt",[a._v("投诉内容")]),e("dd",[a._v(a._s(a.complaintInfo.content))])]),e("dl",[e("dt",[a._v("投诉凭证")]),""==a.images?e("dd",[a._v(" 暂无投诉凭证 ")]):e("dd",a._l(a.images,function(t,n){return e("div",{key:n,staticClass:"div-img"},[e("img",{staticClass:"complain-img",attrs:{src:t}})])}),0)])]),a.complaintInfo.appealContent?e("div",{staticClass:"div-form-default"},[e("h3",[a._v("商家申诉信息")]),e("dl",[e("dt",[a._v("申诉时间")]),e("dd",[a._v(a._s(a.complaintInfo.appealTime))])]),e("dl",[e("dt",[a._v("申诉内容")]),e("dd",[a._v(a._s(a.complaintInfo.appealContent))])]),e("dl",[e("dt",[a._v("申诉凭证")]),0==a.complaintInfo.appealImagesList.length?e("dd",[a._v(" 暂无申诉凭证 ")]):e("dd",a._l(a.complaintInfo.appealImagesList,function(t,n){return e("div",{key:n,staticClass:"div-img"},[e("img",{staticClass:"complain-img",attrs:{src:t}})])}),0)])]):a._e(),e("div",{staticClass:"div-form-default"},[e("h3",[a._v("对话详情")]),e("dl",[e("dt",[a._v("对话记录")]),e("dd",[e("div",{staticClass:"div-content"},a._l(a.complaintInfo.orderComplaintCommunications,function(t,n){return e("p",{key:n},["STORE"==t.owner?e("span",[a._v("商家["+a._s(t.createTime)+"]")]):a._e(),"BUYER"==t.owner?e("span",[a._v("买家["+a._s(t.createTime)+"]")]):a._e(),"PLATFORM"==t.owner?e("span",[a._v("平台["+a._s(t.createTime)+"]")]):a._e(),a._v(" "+a._s(t.content)+" ")])}),0)])]),"COMPLETE"!=a.complaintInfo.complainStatus?e("dl",[e("dt",[a._v("发送对话")]),e("dd",[e("Input",{staticStyle:{width:"260px"},attrs:{type:"textarea",maxlength:"200",rows:4,clearable:""},model:{value:a.params.content,callback:function(t){a.$set(a.params,"content",t)},expression:"params.content"}})],1)]):a._e(),"COMPLETE"!=a.complaintInfo.complainStatus?e("dl",[e("dt"),e("dd",[e("div",{staticStyle:{"text-align":"right",width:"45%","margin-top":"10px"}},[e("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",loading:a.submitLoading},on:{click:a.handleSubmit}},[a._v(" 回复 ")]),e("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",loading:a.submitLoading},on:{click:a.returnDataList}},[a._v(" 返回列表 ")])],1)])]):a._e()]),"COMPLETE"==a.complaintInfo.complainStatus?e("div",{staticClass:"div-form-default"},[e("h3",[a._v("仲裁结果")]),e("dl",[e("dt",[a._v("仲裁意见")]),e("dd",[a._v(" "+a._s(a.complaintInfo.arbitrationResult)+" ")])])]):a._e(),"COMPLETE"!=a.complaintInfo.complainStatus?e("div",{staticClass:"div-form-default"},[e("h3",[a._v("平台仲裁")]),1==a.arbitrationResultShow?e("dl",[e("dt",[a._v("仲裁")]),e("dd",[e("Input",{staticStyle:{width:"260px"},attrs:{type:"textarea",maxlength:"200",rows:4,clearable:""},model:{value:a.arbitrationParams.arbitrationResult,callback:function(t){a.$set(a.arbitrationParams,"arbitrationResult",t)},expression:"arbitrationParams.arbitrationResult"}})],1)]):a._e(),e("dl",[e("dt"),e("dd",{staticStyle:{"text-align":"right",display:"flex","justify-content":"space-between"}},[0==a.arbitrationResultShow?e("Button",{attrs:{type:"primary",ghost:"",loading:a.submitLoading},on:{click:a.arbitrationHandle}},[a._v(" 直接仲裁结束投诉流程 ")]):a._e(),"NEW"==a.complaintInfo.complainStatus?e("Button",{attrs:{loading:a.submitLoading},on:{click:a.handleStoreComplaint}},[a._v(" 交由商家申诉 ")]):a._e(),1==a.arbitrationResultShow?e("Button",{attrs:{type:"primary",loading:a.submitLoading},on:{click:a.arbitrationHandleSubmit}},[a._v(" 提交仲裁 ")]):a._e()],1)])]):a._e()]),e("div",{staticClass:"div-flow-center"}),e("div",{staticClass:"div-flow-right"},[e("div",{staticClass:"div-form-default"},[e("h3",[a._v("相关商品交易信息")]),e("dl",[e("dt",[e("img",{attrs:{src:a.complaintInfo.goodsImage,height:"60px"}})]),e("dd",[e("a",[a._v(a._s(a.complaintInfo.goodsName))]),e("br"),e("span",[a._v("￥"+a._s(a.complaintInfo.goodsPrice)+" * "+a._s(a.complaintInfo.num)+"(数量)")])])])]),e("div",{staticClass:"div-form-default"},[e("h3",[a._v("订单相关信息")]),e("dl",[e("dt",[a._v(" 订单编号 ")]),e("dd",[a._v(" "+a._s(a.complaintInfo.orderSn)+" ")])]),e("dl",[e("dt",[a._v(" 下单时间 ")]),e("dd",[a._v(" "+a._s(a.complaintInfo.createTime)+" ")])]),e("dl",[e("dt",[a._v(" 订单金额 ")]),e("dd",[a._v(" "+a._s(a.complaintInfo.orderPrice)+" ")])])]),e("div",{staticClass:"div-form-default"},[e("h3",[a._v("收件人信息")]),e("dl",[e("dt",[a._v(" 收货人 ")]),e("dd",[a._v(" "+a._s(a.complaintInfo.consigneeName)+" ")])]),e("dl",[e("dt",[a._v(" 收货地址 ")]),e("dd",[a._v(" "+a._s(a.complaintInfo.consigneeAddressPath)+" ")])]),e("dl",[e("dt",[a._v(" 收货人手机 ")]),e("dd",[a._v(" "+a._s(a.complaintInfo.consigneeMobile)+" ")])])])])])])],1)},[],!1,null,"6110bef6",null);n.default=a.exports},f8b7:function(t,n,a){"use strict";a.d(n,"w",function(){return i}),a.d(n,"i",function(){return r}),a.d(n,"d",function(){return o}),a.d(n,"a",function(){return c}),a.d(n,"e",function(){return s}),a.d(n,"c",function(){return d}),a.d(n,"k",function(){return l}),a.d(n,"l",function(){return u}),a.d(n,"b",function(){return f}),a.d(n,"p",function(){return m}),a.d(n,"m",function(){return p}),a.d(n,"r",function(){return _}),a.d(n,"q",function(){return v}),a.d(n,"x",function(){return b}),a.d(n,"o",function(){return g}),a.d(n,"f",function(){return h}),a.d(n,"h",function(){return I}),a.d(n,"g",function(){return S}),a.d(n,"j",function(){return C}),a.d(n,"n",function(){return O}),a.d(n,"u",function(){return j}),a.d(n,"s",function(){return w}),a.d(n,"t",function(){return y}),a.d(n,"v",function(){return L});var e=a("7f80"),i=function(t){return Object(e.k)("/order/complain/status",t)},r=function(t){return Object(e.c)("/order/afterSaleReason/getByPage",t)},o=function(t){return Object(e.b)("/order/afterSaleReason/delByIds/".concat(t))},c=function(t){return Object(e.g)("/order/afterSaleReason",t)},s=function(t,n){return Object(e.k)("/order/afterSaleReason/update/".concat(t),n)},d=function(t,n){return Object(e.k)("/order/afterSale/review/".concat(t),n)},l=function(t){return Object(e.c)("/order/complain",t)},u=function(t){return Object(e.c)("/order/complain/".concat(t))},f=function(t){return Object(e.g)("/order/complain/communication",t)},m=function(t,n){return Object(e.k)("/order/complain/complete/".concat(t),n)},p=function(t){return Object(e.c)("/order/order",t)},_=function(t){return Object(e.g)("/order/order/".concat(t,"/pay"))},v=function(t){return Object(e.c)("/order/order/".concat(t))},b=function(t,n){return Object(e.k)("/order/order/update/".concat(t,"/price"),n)},g=function(t,n){return Object(e.g)("/order/order/".concat(t,"/cancel"),n)},h=function(t,n){return Object(e.g)("/order/order/update/".concat(t,"/consignee"),n)},I=function(t){return Object(e.c)("/order/afterSale/page",t)},S=function(t){return Object(e.c)("/order/afterSale/get/".concat(t))},C=function(t){return Object(e.c)("/order/afterSale/getDeliveryTraces/".concat(t))},O=function(t){return Object(e.c)("/trade/receipt",t)},j=function(t,n){return Object(e.k)("/order/afterSale/refund/".concat(t),n)},w=function(t){return Object(e.c)("/order/paymentLog",t)},y=function(t){return Object(e.c)("/order/refundLog",t)},L=function(t){return Object(e.c)("/order/afterSale/getStoreAfterSaleAddress/".concat(t))}}}]);