(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-25529d30"],{"15fc":function(t,e,l){},e5ae:function(t,e,l){"use strict";l("15fc")},ee3a:function(t,e,l){"use strict";l.r(e);var a={name:"modelCarousel",props:["data"],components:{ossManage:l("cdbd").default},data:function(){return{showModal:!1,selected:null,picModelFlag:!1,bgColor:"#fff"}},mounted:function(){this.bgColor=this.data.options.list[0].bgColor},methods:{handleSelectModel:function(){this.showModal=!0},autoChange:function(t,e){this.bgColor=this.data.options.list[e].bgColor},handleAdd:function(){this.data.options.list.push({img:"",url:"",bgColor:"#fff"}),this.$forceUpdate()},handleSelectLink:function(t){this.$refs.liliDialog.open("link"),this.selected=t},callbackSelected:function(t){this.picModelFlag=!1,this.selected.img=t.url},handleDel:function(t){this.data.options.list.splice(t,1)},selectedLink:function(t){this.selected.url=this.$options.filters.formatLinkType(t),this.selected.type="other"===t.___type&&""===t.url?"link":"other"},handleSelectImg:function(t){this.selected=t,this.$refs.ossManage.selectImage=!0,this.picModelFlag=!0}}},l=(l("e5ae"),l("2877")),l=Object(l.a)(a,function(){var a=this,s=a._self._c;return s("div",{staticClass:"model-carousel1",style:{background:a.bgColor}},[s("div",{staticClass:"nav-body clearfix"},[s("div",{staticClass:"nav-side"},[a._v("分类占位区")]),s("div",{staticClass:"nav-content setup-content"},[s("Carousel",{attrs:{autoplay:""},on:{"on-change":a.autoChange}},a._l(a.data.options.list,function(t,e){return s("CarouselItem",{key:e},[s("div",{staticStyle:{overflow:"hidden"}},[s("img",{attrs:{src:t.img,width:"1200",height:"470"}})])])}),1),s("div",{staticClass:"setup-box"},[s("div",[s("Button",{attrs:{size:"small"},on:{click:function(t){return t.stopPropagation(),a.handleSelectModel.apply(null,arguments)}}},[a._v("编辑")])],1)])],1)]),s("Modal",{attrs:{title:"快捷导航",draggable:"",width:"800","z-index":100,"mask-closable":!1},model:{value:a.showModal,callback:function(t){a.showModal=t},expression:"showModal"}},[s("div",{staticClass:"modal-tab-bar"},[s("Button",{attrs:{type:"primary",size:"small"},on:{click:a.handleAdd}},[a._v("添加轮播")]),a._v("   "),s("span",{staticClass:"ml_10"},[a._v("图片尺寸:"+a._s(a.data.size))]),s("span",{staticClass:"fz_12 ml_10",staticStyle:{color:"red"}},[a._v("点击缩略图替换图片、点击颜色选择器选择背景色")]),s("table",{attrs:{cellspacing:"0"}},[s("thead",[s("tr",[s("th",{attrs:{width:"250"}},[a._v("所选图片")]),s("th",{attrs:{width:"250"}},[a._v("链接地址")]),s("th",{attrs:{width:"250"}},[a._v("操作")])])]),s("tbody",a._l(a.data.options.list,function(e,l){return s("tr",{key:l},[s("td",[s("img",{staticStyle:{cursor:"pointer"},attrs:{src:e.img,width:"200",height:"100",alt:""},on:{click:function(t){return a.handleSelectImg(e)}}})]),s("td",[s("Input",{staticClass:"outsideUrl",attrs:{disabled:!!e.type&&"link"!==e.type},model:{value:e.url,callback:function(t){a.$set(e,"url",t)},expression:"item.url"}})],1),s("td",[s("Button",{attrs:{type:"info",size:"small"},on:{click:function(t){return a.handleSelectLink(e)}}},[a._v("选择链接")]),a._v("  "),s("ColorPicker",{attrs:{size:"small"},model:{value:e.bgColor,callback:function(t){a.$set(e,"bgColor",t)},expression:"item.bgColor"}}),a._v("   "),s("Button",{attrs:{type:"error",ghost:"",size:"small"},on:{click:function(t){return a.handleDel(l)}}},[a._v("删除")])],1)])}),0)])],1)]),s("liliDialog",{ref:"liliDialog",on:{selectedLink:a.selectedLink}}),s("Modal",{attrs:{width:"1200px","footer-hide":""},model:{value:a.picModelFlag,callback:function(t){a.picModelFlag=t},expression:"picModelFlag"}},[s("ossManage",{ref:"ossManage",on:{callback:a.callbackSelected}})],1)],1)},[],!1,null,"792f69ae",null);e.default=l.exports}}]);