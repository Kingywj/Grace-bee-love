(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0b846873"],{"1b48":function(t,e,o){"use strict";o.r(e);var r=o("365c"),n=o("06c9");function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(){E=function(){return a};var a={},t=Object.prototype,s=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof f?e:f,e=Object.create(e.prototype),n=new b(n||[]);return e._invoke=(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return L()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=e.iterator[r.method];if(void 0===n){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}n=u(n,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;n=n.arg;return n?n.done?(r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}(r,a);if(r){if(r===l)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=u(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===l)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}}),e}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var l={};function f(){}function h(){}function p(){}var e={},d=(i(e,n,function(){return this}),Object.getPrototypeOf),d=d&&d(d(x([]))),y=(d&&d!==t&&s.call(d,n)&&(e=d),p.prototype=f.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function m(a,c){var e;this._invoke=function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=u(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_(r)&&s.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function x(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:L}}function L(){return{value:void 0,done:!0}}return i(y,"constructor",h.prototype=p),i(p,"constructor",h),h.displayName=i(p,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,o,"GeneratorFunction")),t.prototype=Object.create(y),t},a.awrap=function(t){return{__await:t}},v(m.prototype),i(m.prototype,r,function(){return this}),a.AsyncIterator=m,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new m(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(y),i(y,o,"Generator"),i(y,n,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),a.keys=function(r){var t,n=[];for(t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=x,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,w(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},a}function s(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}var i={data:function(){return{ruleValidate:{},way:{APP:"移动应用端",H5:"移动端",WECHAT_MP:"小程序端",PC:"PC端"},formValidate:{}}},props:["res","type"],created:function(){this.init()},methods:{submit:function(t){Object(n.a)(this,t)&&this.setupSetting()},setupSetting:function(){var e=this;this.$Spin.show(),setTimeout(function(){e.$Spin.hide(),Object(r.hb)(e.type,{qqConnectSettingItemList:e.formValidate}).then(function(t){t.success?e.$Message.success("保存成功!"):e.$Message.error("保存失败!"),e.$Modal.remove()})},3e3)},init:function(){var c,e=this;return c=E().mark(function t(){return E().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.formValidate=JSON.parse(e.res).qqConnectSettingItemList,Object.keys(e.formValidate).forEach(function(t){e.ruleValidate[t]=[{required:!0,message:"请填写必填项",trigger:"blur"}]});case 2:case"end":return t.stop()}},t)}),function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){s(n,e,r,o,i,"next",t)}function i(t){s(n,e,r,o,i,"throw",t)}o(void 0)})}()}}},a=(o("37b2"),o("2877")),a=Object(a.a)(i,function(){var r=this,n=r._self._c;return n("div",{staticClass:"layout"},r._l(r.formValidate,function(e,t){return r.client==e.client?n("div",{key:t,staticClass:"row"},[n("div",{staticClass:"col"},[n("Card",{attrs:{padding:0}},["APP"==e.clientType?n("div",{staticClass:"icon-item"},[n("img",{staticClass:"icon",attrs:{src:o("6d25"),alt:"",srcset:""}})]):r._e(),"PC"==e.clientType?n("div",{staticClass:"icon-item"},[n("img",{staticClass:"icon",attrs:{src:o("34f7"),alt:"",srcset:""}})]):r._e(),"WECHAT_MP"==e.clientType?n("div",{staticClass:"icon-item"},[n("img",{staticClass:"icon",attrs:{src:o("9c73"),alt:"",srcset:""}})]):r._e(),"H5"==e.clientType?n("div",{staticClass:"icon-item"},[n("img",{staticClass:"icon",attrs:{src:o("9178"),alt:"",srcset:""}})]):r._e(),n("div",{staticClass:"pay-title"},[r._v(" "+r._s(r.way[e.clientType]))]),n("div",[n("Divider",{attrs:{orientation:"left"}},[r._v("登录设置")]),n("div",{staticClass:"pay-list"},[n("Form",{ref:"formValidate",refInFor:!0,staticStyle:{width:"100%"},attrs:{model:r.formValidate,rules:r.ruleValidate,"label-width":80}},[n("FormItem",{attrs:{label:"appId",prop:"appId"}},[n("Input",{staticClass:"label-appkey",on:{"on-enter":r.setupSetting},model:{value:e.appId,callback:function(t){r.$set(e,"appId",t)},expression:"item.appId"}})],1),n("FormItem",{attrs:{label:"appKey",prop:"appKey"}},[n("Input",{on:{"on-enter":r.setupSetting},model:{value:e.appKey,callback:function(t){r.$set(e,"appKey",t)},expression:"item.appKey"}})],1)],1),n("Button",{on:{click:r.setupSetting}},[r._v("保存设置")])],1)],1)])],1)]):r._e()}),0)},[],!1,null,"661d9262",null);e.default=a.exports},"37b2":function(t,e,r){"use strict";r("6fad")},"6fad":function(t,e,r){}}]);