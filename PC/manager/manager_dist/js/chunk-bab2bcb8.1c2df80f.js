(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bab2bcb8"],{"0276":function(t,e,o){"use strict";o.r(e);var n=o("2934"),i={data:function(){return{domainLogo:o("cf05")}},methods:{init:function(){var t;!(localStorage.getItem("icon")&&localStorage.getItem("title")&&localStorage.getItem("icontitle_expiration_time"))||new Date>localStorage.getItem("icontitle_expiration_time")?this.getSite():(this.domainLogo=localStorage.getItem("icon"),(t=document.querySelector("link[rel*='icon']")||document.createElement("link")).type="image/x-icon",t.href=localStorage.getItem("icon"),t.rel="shortcut icon",document.getElementsByTagName("head")[0].appendChild(t),window.document.title=localStorage.getItem("title")+" - 运营后台")},getSite:function(){var i=this;Object(n.a)().then(function(t){var t=JSON.parse(t.result.settingValue),e=t.domainLogo,t=t.siteName,o=(i.domainLogo=e,(new Date).setHours((new Date).getHours()+1)),o=(localStorage.setItem("icontitle_expiration_time",o),localStorage.setItem("icon",e),localStorage.setItem("title",t),document.querySelector("link[rel*='icon']")||document.createElement("link"));o.type="image/x-icon",o.href=e,o.rel="shortcut icon",document.getElementsByTagName("head")[0].appendChild(o),window.document.title=t+" - 运营后台"})}},mounted:function(){this.init()}},a=(o("0373"),o("2877")),a=Object(a.a)(i,function(){var t=this._self._c;return t("div",[t("Row",{staticClass:"header"},[t("img",{staticClass:"logo",attrs:{src:this.domainLogo,width:"220px"}})])],1)},[],!1,null,"3c8bd382",null);e.default=a.exports},"0373":function(t,e,o){"use strict";o("facd")},cf05:function(t,e,o){t.exports=o.p+"img/logo.a8b029e5.png"},facd:function(t,e,o){}}]);