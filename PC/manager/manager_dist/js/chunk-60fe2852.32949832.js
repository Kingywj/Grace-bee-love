(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-60fe2852"],{2272:function(t,e,r){"use strict";r.r(e);var n=r("f74c");function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(){F=function(){return a};var a={},t=Object.prototype,c=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},i=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function n(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{n({},"")}catch(t){n=function(t,e,r){return t[e]=r}}function s(t,e,r,i){var o,n,a,s,e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),i=new x(i||[]);return e._invoke=(o=t,n=r,a=i,s="suspendedStart",function(t,e){if("executing"===s)throw new Error("Generator is already running");if("completed"===s){if("throw"===t)throw e;return _()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var i=e.iterator[r.method];if(void 0===i){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method))return u;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}i=l(i,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,u;i=i.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,u):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,u)}(r,a);if(r){if(r===u)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===s)throw s="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s="executing";r=l(o,n,a);if("normal"===r.type){if(s=a.done?"completed":"suspendedYield",r.arg===u)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(s="completed",a.method="throw",a.arg=r.arg)}}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=s;var u={};function h(){}function d(){}function m(){}var e={},p=(n(e,i,function(){return this}),Object.getPrototypeOf),p=p&&p(p(b([]))),f=(p&&p!==t&&c.call(p,i)&&(e=p),m.prototype=h.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){n(t,e,function(t){return this._invoke(e,t)})})}function y(a,s){var e;this._invoke=function(r,i){function t(){return new s(function(t,e){!function e(t,r,i,o){var n,t=l(a[t],a,r);if("throw"!==t.type)return(r=(n=t.arg).value)&&"object"==I(r)&&c.call(r,"__await")?s.resolve(r.__await).then(function(t){e("next",t,i,o)},function(t){e("throw",t,i,o)}):s.resolve(r).then(function(t){n.value=t,i(n)},function(t){return e("throw",t,i,o)});o(t.arg)}(r,i,t,e)})}return e=e?e.then(t,t):t()}}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function b(e){if(e){var r,t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(c.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:_}}function _(){return{value:void 0,done:!0}}return n(f,"constructor",d.prototype=m),n(m,"constructor",d),d.displayName=n(m,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,n(t,o,"GeneratorFunction")),t.prototype=Object.create(f),t},a.awrap=function(t){return{__await:t}},v(y.prototype),n(y.prototype,r,function(){return this}),a.AsyncIterator=y,a.async=function(t,e,r,i,o){void 0===o&&(o=Promise);var n=new y(s(t,e,r,i),o);return a.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},v(f),n(f,o,"Generator"),n(f,i,function(){return this}),n(f,"toString",function(){return"[object Generator]"}),a.keys=function(r){var t,i=[];for(t in r)i.push(t);return i.reverse(),function t(){for(;i.length;){var e=i.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=b,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&c.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var i=this;function t(t,e){return n.type="throw",n.arg=r,i.next=t,e&&(i.method="next",i.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],n=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=c.call(o,"catchLoc"),s=c.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&c.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}var n=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return n.type=t,n.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,i,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(i=r.arg,w(o)),i}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:b(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},a}function c(t,e,r,i,o,n,a){try{var s=t[n](a),c=s.value}catch(t){return r(t)}s.done?e(c):Promise.resolve(c).then(i,o)}var i={data:function(){return{imageVisible:!1,imageSrc:"",liveForm:{name:"",anchorName:"",anchorWechat:"",feedsImg:"",coverImg:"",shareImg:"",startTime:""},times:[],liveColumns:[{title:"商品",slot:"goodsName"},{title:"价格",slot:"price"},{title:"库存",slot:"quantity",width:100},{title:"操作",slot:"action",width:250}],liveData:[],commodityList:""}},mounted:function(){this.$route.query.id&&this.getLiveDetail(),this.accessToken={accessToken:this.getStore("accessToken")}},methods:{handleView:function(t){this.imageVisible=!0,this.imageSrc=t},handleMaxSize:function(t){this.$Notice.warning({title:"文件大小过大",desc:"所选文件大小过大, 不得超过 1M."})},getLiveDetail:function(){var s,o=this;return s=F().mark(function t(){var e,r,i;return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(n.t)(o.$route.query.id);case 2:if((e=t.sent).success){for(i in r=e.result)o.liveForm[i]=r[i];o.liveData=r.commodityList,o.commodityList=r.commodityList,o.$set(o.times,[0],o.$options.filters.unixToDate(r.startTime,"yyyy-MM-dd hh:mm")),o.$set(o.times,[1],o.$options.filters.unixToDate(r.endTime,"yyyy-MM-dd hh:mm")),o.liveStatus=r.status}case 4:case"end":return t.stop()}},t)}),function(){var t=this,a=arguments;return new Promise(function(e,r){var i=s.apply(t,a);function o(t){c(i,e,r,o,n,"next",t)}function n(t){c(i,e,r,o,n,"throw",t)}o(void 0)})}()}}},r=(r("55c3"),r("2877")),r=Object(r.a)(i,function(){var r=this,i=r._self._c;return i("div",[i("Card",[i("Form",{ref:"liveForm",attrs:{model:r.liveForm,rules:r.liveRulesForm,"label-width":120}},[i("FormItem",{attrs:{label:"直播标题",prop:"name"}},[i("Input",{staticStyle:{width:"460px"},attrs:{disabled:""},model:{value:r.liveForm.name,callback:function(t){r.$set(r.liveForm,"name",t)},expression:"liveForm.name"}}),i("div",{staticClass:"tips"},[r._v("直播间名字，最短3个汉字，最长17个汉字，1个汉字相当于2个字符")])],1),i("FormItem",{attrs:{label:"主播昵称",prop:"anchorName"}},[i("Input",{staticStyle:{width:"360px"},attrs:{disabled:""},model:{value:r.liveForm.anchorName,callback:function(t){r.$set(r.liveForm,"anchorName",t)},expression:"liveForm.anchorName"}}),i("div",{staticClass:"tips"},[r._v("主播昵称，最短2个汉字，最长15个汉字，1个汉字相当于2个字符")])],1),i("FormItem",{attrs:{label:"直播时间",prop:"startTime"}},[i("DatePicker",{staticStyle:{width:"300px"},attrs:{disabled:"",format:"yyyy-MM-dd HH:mm",type:"datetimerange",options:r.optionsTime,placeholder:"直播计划开始时间-直播计划结束时间"},on:{"on-change":r.handleChangeTime},model:{value:r.times,callback:function(t){r.times=t},expression:"times"}}),i("div",{staticClass:"tips"},[r._v("直播开播时间需要在当前时间的10分钟后 并且 开始时间不能在 6 个月后")])],1),i("FormItem",{attrs:{label:"主播微信号",prop:"anchorWechat"}},[i("Input",{staticStyle:{width:"360px"},attrs:{disabled:"",placeholder:"主播微信号"},model:{value:r.liveForm.anchorWechat,callback:function(t){r.$set(r.liveForm,"anchorWechat",t)},expression:"liveForm.anchorWechat"}}),i("div",{staticClass:"tips"},[r._v("主播微信号，如果未实名认证，需要先前往“小程序直播”小程序进行"),i("a",{attrs:{target:"_black",href:"https://res.wx.qq.com/op_res/9rSix1dhHfK4rR049JL0PHJ7TpOvkuZ3mE0z7Ou_Etvjf-w1J_jVX0rZqeStLfwh"}},[r._v("实名验证")])])],1),i("FormItem",{attrs:{label:"分享卡片封面",prop:"feedsImg"}},[r.liveForm.feedsImg?i("div",{staticClass:"upload-list"},[[i("img",{attrs:{src:r.liveForm.feedsImg}}),i("div",{staticClass:"upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return r.handleView(r.liveForm.feedsImg)}}})],1)]],2):r._e(),0==r.liveForm.feedsImg.length?i("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"on-success":r.handleFeedsImgSuccess,"default-file-list":r.defaultImgList,format:["jpg","jpeg","png"],"on-format-error":r.handleFormatError,"max-size":1024,"on-exceeded-size":r.handleMaxSize,type:"drag",action:r.action,headers:r.accessToken}},[i("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[i("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]):r._e(),i("div",{staticClass:"tips"},[r._v(" 直播间分享图，图片规则：建议像素800*640，大小不超过1M； ")])],1),i("FormItem",{attrs:{label:"直播间背景墙",prop:"coverImg"}},[r.liveForm.coverImg?i("div",{staticClass:"upload-list"},[[i("img",{attrs:{src:r.liveForm.coverImg}}),i("div",{staticClass:"upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return r.handleView(r.liveForm.coverImg)}}})],1)]],2):r._e(),0==r.liveForm.coverImg.length?i("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"on-success":r.handleCoverImgSuccess,"default-file-list":r.defaultImgList,format:["jpg","jpeg","png"],"on-format-error":r.handleFormatError,"max-size":1024,"on-exceeded-size":r.handleMaxSize,type:"drag",action:r.action,headers:r.accessToken}},[i("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[i("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]):r._e(),i("div",{staticClass:"tips"},[r._v(" 直播间背景图，图片规则：建议像素1080*1920，大小不超过1M")])],1),i("FormItem",{attrs:{label:"直播间分享图",prop:"shareImg"}},[r.liveForm.shareImg?i("div",{staticClass:"upload-list"},[[i("img",{attrs:{src:r.liveForm.shareImg}}),i("div",{staticClass:"upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return r.handleView(r.liveForm.shareImg)}}})],1)]],2):r._e(),0==r.liveForm.shareImg.length?i("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"on-success":r.handleShareImgSuccess,"default-file-list":r.defaultImgList,format:["jpg","jpeg","png"],"on-format-error":r.handleFormatError,"max-size":1024,"on-exceeded-size":r.handleMaxSize,type:"drag",action:r.action,headers:r.accessToken}},[i("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[i("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]):r._e(),i("div",{staticClass:"tips"},[r._v(" 直播间分享图，图片规则：建议像素800*640，大小不超过1M")])],1),r.$route.query.id?i("FormItem",{attrs:{label:"商品"}},[i("Table",{staticClass:"goods-table",attrs:{columns:r.liveColumns,data:r.liveData},scopedSlots:r._u([{key:"goodsName",fn:function(t){var e=t.row,t=t.index;return[i("div",{staticClass:"flex-goods"},[0==t||1==t?i("Badge",{attrs:{color:"volcano"}}):r._e(),i("img",{staticClass:"thumbnail",attrs:{src:e.thumbnail||e.goodsImage}}),r._v(" "+r._s(e.goodsName||e.name)+" ")],1)]}},{key:"price",fn:function(t){t=t.row;return[i("div",[1==t.priceType?i("div",[r._v(r._s(r._f("unitPrice")(t.price,"￥")))]):r._e(),2==t.priceType?i("div",[r._v(r._s(r._f("unitPrice")(t.price,"￥"))+"至"+r._s(r._f("unitPrice")(t.price2,"￥")))]):r._e(),3==t.priceType?i("div",[r._v(r._s(r._f("unitPrice")(t.price,"￥"))),i("span",{staticClass:"original-price"},[r._v(r._s(r._f("unitPrice")(t.price2,"￥")))])]):r._e()])]}},{key:"quantity",fn:function(t){t=t.row;return[i("div",[r._v(r._s(t.quantity))])]}}],null,!1,1009266884)}),i("div",{staticClass:"tips"},[r._v(" 直播间商品中前两个商品将自动被选为封面，伴随直播间在直播列表中显示 ")])],1):r._e(),i("FormItem",[i("Button",{attrs:{type:"primary"},on:{click:function(t){return r.createLives()}}},[r._v("保存")])],1)],1)],1),i("Modal",{attrs:{title:"查看图片"},model:{value:r.imageVisible,callback:function(t){r.imageVisible=t},expression:"imageVisible"}},[r.imageVisible?i("img",{staticStyle:{width:"100%"},attrs:{src:r.imageSrc}}):r._e()])],1)},[],!1,null,"7e74f12b",null);e.default=r.exports},"55c3":function(t,e,r){"use strict";r("af0d")},af0d:function(t,e,r){}}]);