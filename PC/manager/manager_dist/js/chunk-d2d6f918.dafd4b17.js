(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d2d6f918"],{"3749a":function(e,t,l){},"9d11":function(e,t,l){"use strict";l.r(t);var s=l("cdbd"),s={props:{data:{type:Object,default:null}},components:{ossManage:s.default},data:function(){return{options:this.data.options,showModal:!1,selected:{},picModelFlag:!1}},methods:{handleSelectModel:function(e,t){this.selected=e,this.showModal=!0},handleSelectLink:function(e,t){this.$refs.liliDialog.open("link")},selectedLink:function(e){this.selected.url=this.$options.filters.formatLinkType(e),this.selected.type="other"===e.___type&&""===e.url?"link":"other"},handleSelectImg:function(){this.$refs.ossManage.selectImage=!0,this.picModelFlag=!0},callbackSelected:function(e){this.picModelFlag=!1,this.selected.img=e.url}}},l=(l("fc8a"),l("2877")),l=Object(l.a)(s,function(){var l=this,s=l._self._c;return s("div",{staticClass:"first-page-advert"},[l._l(l.options.list,function(t,e){return s("div",{key:e,staticClass:"item setup-content",style:{backgroundImage:"linear-gradient(to right, ".concat(t.fromColor,", ").concat(t.toColor,")")}},[s("div",[s("span",{staticClass:"line top-line"}),s("p",[l._v(l._s(t.name))]),s("span",{staticClass:"line btm-line"}),s("p",[l._v(l._s(t.describe))])]),s("img",{attrs:{src:t.img,width:"170",height:"170",alt:""}}),s("div",{staticClass:"setup-box"},[s("div",[s("Button",{attrs:{size:"small"},on:{click:function(e){return e.stopPropagation(),l.handleSelectModel(t)}}},[l._v("编辑")])],1)])])}),s("Modal",{attrs:{title:"装修",draggable:"",width:"800","z-index":100,"mask-closable":!1},model:{value:l.showModal,callback:function(e){l.showModal=e},expression:"showModal"}},[s("div",{staticClass:"modal-top-advert"},[s("div",[s("img",{staticClass:"show-image",attrs:{width:"170",height:"170",src:l.selected.img,alt:""}})]),s("div",[s("span",[l._v("图片主标题：")]),s("Input",{model:{value:l.selected.name,callback:function(e){l.$set(l.selected,"name",e)},expression:"selected.name"}})],1),s("div",[s("span",[l._v("图片描述：")]),s("Input",{model:{value:l.selected.describe,callback:function(e){l.$set(l.selected,"describe",e)},expression:"selected.describe"}})],1),s("div",{staticClass:"tips"},[l._v(" 建议尺寸："),s("span",[l._v(l._s(l.selected.size))])]),s("div",[l._v(" 图片链接："),s("Input",{staticClass:"outsideUrl",attrs:{disabled:!!l.selected.type&&"link"!==l.selected.type,placeholder:"https://"},model:{value:l.selected.url,callback:function(e){l.$set(l.selected,"url",e)},expression:"selected.url"}}),s("Button",{attrs:{size:"small",type:"primary"},on:{click:l.handleSelectLink}},[l._v("选择链接")])],1),s("div",[s("span",[l._v("渐变背景色：")]),s("Input",{model:{value:l.selected.fromColor,callback:function(e){l.$set(l.selected,"fromColor",e)},expression:"selected.fromColor"}}),l.selected.fromColor?s("ColorPicker",{model:{value:l.selected.fromColor,callback:function(e){l.$set(l.selected,"fromColor",e)},expression:"selected.fromColor"}}):l._e()],1),s("div",[s("span",[l._v("渐变背景色：")]),s("Input",{model:{value:l.selected.toColor,callback:function(e){l.$set(l.selected,"toColor",e)},expression:"selected.toColor"}}),l.selected.toColor?s("ColorPicker",{model:{value:l.selected.toColor,callback:function(e){l.$set(l.selected,"toColor",e)},expression:"selected.toColor"}}):l._e()],1),s("div",{staticClass:"exhibition",style:{backgroundImage:"linear-gradient(to right, ".concat(l.selected.fromColor,", ").concat(l.selected.toColor,")")}}),s("div",[l._v(" 选择图片："),s("Button",{attrs:{size:"small",type:"primary"},on:{click:l.handleSelectImg}},[l._v("选择图片")]),l._v("  ")],1)])]),s("liliDialog",{ref:"liliDialog",on:{selectedLink:l.selectedLink}}),s("Modal",{attrs:{width:"1200px","footer-hide":""},model:{value:l.picModelFlag,callback:function(e){l.picModelFlag=e},expression:"picModelFlag"}},[s("ossManage",{ref:"ossManage",attrs:{isComponent:!0},on:{callback:l.callbackSelected}})],1)],2)},[],!1,null,"dd873cb2",null);t.default=l.exports},fc8a:function(e,t,l){"use strict";l("3749a")}}]);