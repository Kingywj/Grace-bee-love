(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f74e1ce0"],{"06c9":function(t,e,r){"use strict";function n(e,t){var r=!1;return e.$refs[t].validate(function(t){return t?r=!0:e.$Message.error("请正确填写内容!"),r}),r}r.d(e,"a",function(){return n})},"3bb9":function(t,e,r){},"9d3a":function(t,e,r){"use strict";r("3bb9")},e482:function(t,e,r){"use strict";r.r(e);var n=r("365c"),s=r("06c9");function i(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function a(n){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach(function(t){var e,r;e=n,r=s[t=t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(s,t))})}return n}var o={data:function(){return{formValidate:{apply:!0},switchTitle:"提现审核是否开启"}},created:function(){this.init()},props:["res","type"],methods:{submit:function(t){Object(s.a)(this,t)&&this.setupSetting()},setupSetting:function(){var e=this;Object(n.hb)(this.type,this.formValidate).then(function(t){t.success?e.$Message.success("保存成功!"):e.$Message.error("保存失败!")})},init:function(){this.res=JSON.parse(this.res),this.$set(this,"formValidate",a({},this.res))}}},r=(r("9d3a"),r("2877")),r=Object(r.a)(o,function(){var e=this,t=e._self._c;return t("div",{staticClass:"layout"},[t("Form",{ref:"formValidate",attrs:{"label-width":150,"label-position":"right",model:e.formValidate,rules:e.ruleValidate}},[t("FormItem",{attrs:{label:"提现审核是否开启"}},[t("i-switch",{staticStyle:{"margin-top":"7px"},model:{value:e.formValidate.apply,callback:function(t){e.$set(e.formValidate,"apply",t)},expression:"formValidate.apply"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])],1),t("div",{staticClass:"label-btns"},[t("Button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("formValidate")}}},[e._v("保存")])],1)],1)],1)},[],!1,null,"32bf17c3",null);e.default=r.exports}}]);