(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-647a2637"],{"5fda":function(t,i,e){},6926:function(t,i,e){"use strict";e("5fda")},beb8:function(t,i,e){"use strict";e.r(i);var s={data:function(){return{type:"full",advertising:[{img:"https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200903-182035-5e87.png?x-oss-process=image/resize,w_932/interlace,1,image/format,webp",size:"750*1624"}],linkType:""}},methods:{clickLink:function(t){this.$refs.liliDialog.open("link")},changeFile:function(i,t){t=document.getElementById("files"+t).files[0];if(null==t)return!1;var e=new FileReader;e.readAsDataURL(t),this.$nextTick(function(t){e.onload=function(t){i.img=t.target.result}})},handleClickFile:function(t,i){document.getElementById("files"+i).click()}}},e=(e("6926"),e("2877")),e=Object(e.a)(s,function(){var s=this,t=s._self._c;return t("div",{staticClass:"model-view"},[t("div",{staticClass:"model-view-content"},[t("div",{staticClass:"content"},[t("div",{staticClass:"wap-title"},[s._v("首页")]),t("div",{staticClass:"draggable"},["full"==s.type?t("div",{staticClass:"full-shadow"},[t("img",{attrs:{src:s.advertising[0].img,alt:""}})]):s._e()])])]),t("div",{staticClass:"model-config"},[t("div",{staticClass:"decorate"},[t("div",{staticClass:"decorate-title"},[s._v("全屏广告")]),t("div",{staticClass:"decorate-list"},s._l(s.advertising,function(i,e){return t("div",{key:e,staticClass:"decorate-item"},[s._m(0,!0),t("div",{staticClass:"decorate-item-box"},[t("div",{staticClass:"decorate-view"},[t("div",{staticClass:"decorate-view-title"},[s._v("选择图片")]),t("div",[t("img",{staticClass:"show-image",attrs:{src:i.img,alt:""}}),t("input",{ref:"files",refInFor:!0,staticClass:"hidden-input",attrs:{type:"file",id:"files"+e},on:{change:function(t){return s.changeFile(i,e)}}}),t("div",{staticClass:"tips"},[s._v(" 建议尺寸 "),t("span",[s._v(s._s(i.size))])])]),t("div",{staticClass:"selectBtn"},[t("Button",{attrs:{size:"small",ghost:"",type:"primary"},on:{click:function(t){return s.handleClickFile(i,e)}}},[s._v("选择照片")])],1)]),t("div",{staticClass:"decorate-view"},[t("div",{staticClass:"decorate-view-title"},[s._v("选择图片")]),t("div",[t("Button",{attrs:{ghost:"",type:"primary",size:"small"},on:{click:function(t){return s.clickLink(i)}}},[s._v("选择链接")])],1)])])])}),0),t("liliDialog",{ref:"liliDialog",attrs:{types:s.linkType}})],1)])])},[function(){var t=this._self._c;return t("div",{staticClass:"decorate-item-title"},[t("div",[this._v("设置")])])}],!1,null,"256c1214",null);i.default=e.exports}}]);