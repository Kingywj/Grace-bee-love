(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ed38481a"],{"88b2":function(e,t,s){},def8:function(e,t,s){"use strict";s("88b2")},f5bf:function(e,t,s){"use strict";s.r(t);var o=s("c40e"),a={name:"goodsDetail",data:function(){var s=this;return{goods:{},previewGoodsPicture:"",goodsPictureVisible:!1,wholesalePreviewColumns:[{title:"销售规则",width:300,render:function(e,t){return e("div","当商品购买数量 ≥"+t.row.num+" 时，售价为 ￥"+t.row.price+" /"+s.goods.goodsUnit)}}],wholesaleData:[],skuColumn:[{title:"规格",key:"specs"},{title:"编号",key:"sn"},{title:"重量(kg)",key:"weight"}],skuData:[]}},mounted:function(){this.initGoods(this.$route.query.id)},methods:{initGoods:function(e){var s=this;Object(o.p)(e).then(function(e){s.goods=e.result;var o=s;e.result.skuList.forEach(function(e,t,s){o.skuData.push({specs:e.goodsName,sn:e.sn,weight:e.weight,cost:o.$options.filters.unitPrice(e.cost,"¥"),price:o.$options.filters.unitPrice(e.price,"¥"),image:e.thumbnail})}),"WHOLESALE"===e.result.salesModel&&e.result.wholesaleList?e.result.wholesaleList.forEach(function(e,t){s.skuColumn.push({title:"购买量 ≥ "+e.num,slot:"wholePrice"+t})}):s.skuColumn.push({title:"成本",key:"cost"},{title:"价格",key:"price"}),s.skuColumn.push({title:"图片",slot:"showImage"}),s.wholesaleData=e.result.wholesaleList})},handleViewGoodsPicture:function(e){this.previewGoodsPicture=e,this.goodsPictureVisible=!0}}},s=(s("def8"),s("2877")),s=Object(s.a)(a,function(){var s=this,o=s._self._c;return o("div",[o("Form",{attrs:{"label-width":120}},[o("Card",[o("div",{staticClass:"base-info-item"},[o("h4",[s._v("基本信息")]),o("div",{staticClass:"form-item-view"},[o("FormItem",{attrs:{label:"商品分类"}},s._l(s.goods.categoryName,function(e,t){return o("span",{key:t},[s._v(" "+s._s(e)+" "),t!==s.goods.categoryName.length-1?o("i",[s._v(">")]):s._e()])}),0),o("FormItem",{attrs:{label:"商品名称"}},[s._v(" "+s._s(s.goods.goodsName)+" ")]),o("FormItem",{attrs:{label:"商品卖点"}},[s._v(" "+s._s(s.goods.sellingPoint)+" ")])],1),o("h4",[s._v("商品交易信息")]),o("div",{staticClass:"form-item-view"},[o("FormItem",{attrs:{label:"计量单位"}},[s._v(" "+s._s(s.goods.goodsUnit))]),o("FormItem",{attrs:{label:"销售模式"}},[s._v(" "+s._s("RETAIL"===s.goods.salesModel?"零售型":"批发型")+" ")]),"RETAIL"!==s.goods.salesModel?o("FormItem",{attrs:{label:"销售规则"}},[o("Table",{attrs:{border:"",columns:s.wholesalePreviewColumns,data:s.wholesaleData}})],1):s._e()],1),o("h4",[s._v("商品规格及图片")]),o("div",{staticClass:"form-item-view"},[o("FormItem",{attrs:{label:"商品编号"}},[s._v(" "+s._s(s.goods.id))]),o("FormItem",{attrs:{label:"商品价格"}},[s._v(" ¥"+s._s(s._f("unitPrice")(s.goods.price))+" ")]),o("FormItem",{attrs:{label:"商品图片"}},s._l(s.goods.goodsGalleryList,function(t,e){return o("div",{key:e,staticClass:"demo-upload-list"},[o("img",{attrs:{src:t}}),o("div",{staticClass:"demo-upload-list-cover"},[o("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(e){return s.handleViewGoodsPicture(t)}}})],1),o("Modal",{attrs:{title:"View Image"},model:{value:s.goodsPictureVisible,callback:function(e){s.goodsPictureVisible=e},expression:"goodsPictureVisible"}},[s.goodsPictureVisible?o("img",{staticStyle:{width:"100%"},attrs:{src:s.previewGoodsPicture}}):s._e()])],1)}),0),o("FormItem",{attrs:{label:"商品规格"}},[o("Table",{attrs:{columns:s.skuColumn,data:s.skuData},scopedSlots:s._u([{key:"showImage",fn:function(e){return[o("div",{staticStyle:{"margin-top":"5px",height:"80px",display:"flex"}},[o("div",[o("img",{staticStyle:{height:"60px","margin-top":"1px",width:"60px"},attrs:{src:e.row.image}})])])]}},{key:"wholePrice0",fn:function(e){return e.row,[s.wholesaleData[0]?o("Input",{attrs:{clearable:"",disabled:""},model:{value:s.wholesaleData[0].price,callback:function(e){s.$set(s.wholesaleData[0],"price",e)},expression:"wholesaleData[0].price"}},[o("span",{attrs:{slot:"append"},slot:"append"},[s._v("元")])]):s._e()]}},{key:"wholePrice1",fn:function(e){return e.row,[s.wholesaleData[1]?o("Input",{attrs:{clearable:"",disabled:""},model:{value:s.wholesaleData[1].price,callback:function(e){s.$set(s.wholesaleData[1],"price",e)},expression:"wholesaleData[1].price"}},[o("span",{attrs:{slot:"append"},slot:"append"},[s._v("元")])]):s._e()]}},{key:"wholePrice2",fn:function(e){return e.row,[s.wholesaleData[2]?o("Input",{attrs:{clearable:"",disabled:""},model:{value:s.wholesaleData[2].price,callback:function(e){s.$set(s.wholesaleData[2],"price",e)},expression:"wholesaleData[2].price"}},[o("span",{attrs:{slot:"append"},slot:"append"},[s._v("元")])]):s._e()]}}])})],1)],1),o("h4",[s._v("商品详情描述")]),o("div",{staticClass:"form-item-view"},[o("FormItem",{attrs:{label:"商品描述"}},[o("div",{domProps:{innerHTML:s._s(s.goods.intro)}})]),o("FormItem",{attrs:{label:"移动端描述"}},[o("div",{domProps:{innerHTML:s._s(s.goods.mobileIntro)}})])],1)])])],1)],1)},[],!1,null,null,null);t.default=s.exports}}]);