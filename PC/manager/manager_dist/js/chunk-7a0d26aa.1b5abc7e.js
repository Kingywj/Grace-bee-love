(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7a0d26aa","chunk-7a0d26aa"],{ae40:function(e,t,i){"use strict";i("f189")},cdbd:function(e,t,a){"use strict";a.r(t);var i,s=a("365c"),o=a("c06d"),l=a.n(o),n=a("7f80"),r=a("f121"),o={name:"oss-manage",props:{isComponent:{default:!1,type:Boolean}},data:function(){var i=this;return{commonUrl:n.a,config:r,selectImage:!1,accessToken:{},loading:!1,fileType:"all",showType:"list",modalVisible:!1,uploadVisible:!1,videoVisible:!1,picVisible:!1,picTitle:"",videoTitle:"",modalTitle:"",searchForm:{name:"",fileKey:"",fileType:"",pageNumber:1,pageSize:10,sort:"createTime",order:"desc",startDate:"",endDate:""},selectDate:null,oldKey:"",form:{name:"",fileKey:""},file:{},formValidate:{name:[{required:!0,message:"不能为空",trigger:"blur"}],fileKey:[{required:!0,message:"不能为空",trigger:"blur"}]},submitLoading:!1,selectList:[],selectCount:0,totalSize:"",columns:[{type:"selection",width:60,align:"center"},{title:"原文件名",key:"name",minWidth:130,sortable:!0,ellipsis:!1,tooltip:!0},{title:"存储文件名",key:"fileKey",width:165,sortable:!0,ellipsis:!1,tooltip:!0},{title:"缩略图(点击预览)",key:"url",width:150,align:"center",render:function(e,t){return 0<t.row.fileType.includes("image")?e("img",{attrs:{src:t.row.url||"",alt:"加载图片失败"},style:{cursor:"pointer",width:"80px",height:"60px",margin:"10px 0","object-fit":"contain"},on:{click:function(){i.showPic(t.row)}}}):0<t.row.fileType.includes("video")?t.row.fileSize<5242880?e("video",{style:{cursor:"pointer",width:"80px",height:"60px",margin:"10px 0","object-fit":"contain"},on:{click:function(){i.showVideo(t.row)}}},[e("source",{attrs:{src:t.row.url}})]):e("img",{attrs:{src:a("df84")},style:{cursor:"pointer",width:"80px",height:"60px",margin:"10px 0","object-fit":"contain"},on:{click:function(){i.showVideo(t.row)}}}):e("span","非多媒体类型")}},{title:"文件类型",key:"fileType",width:115,sortable:!0,className:1==this.selectImage?"none":""},{title:"文件大小",key:"fileSize",width:115,sortable:!0,className:1==this.selectImage?"none":"",render:function(e,t){return e("span",(+t.row.fileSize/1048576).toFixed(2)+" MB")}},{title:"上传者",key:"createBy",width:120,sortable:!0,render:function(e,t){var i="MANAGER"==t.row.userEnums?"[管理员]":"STORE"==t.row.userEnums?"[店铺]":"[会员]";return e("span",i+=t.row.createBy)}},{title:"上传时间",key:"createTime",width:180,sortable:!0,sortType:"desc"},{title:"操作",key:"action",align:"center",fixed:"right",width:200,render:function(e,t){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px",display:1==i.selectImage?"inline-block":"none"},on:{click:function(){i.selectedParams(t.row)}}},"选择"),e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px",display:1==i.selectImage?"none":"inline-block"},on:{click:function(){i.download(t.row)}}},"下载"),e("Button",{props:{size:"small",type:"success"},style:{marginRight:"5px",display:1==i.selectImage?"none":"inline-block"},on:{click:function(){i.rename(t.row)}}},"重命名"),e("Button",{props:{type:"error",size:"small"},style:{display:1==i.selectImage?"none":"inline-block"},on:{click:function(){i.remove(t.row)}}},"删除")])}}],data:[],total:0,pageSizeOpts:[5,10,20]}},watch:{selectImage:function(e){e&&!this.data.length&&this.init()}},methods:{selectedParams:function(e){this.$emit("callback",e)},handleDropdown:function(e){"refresh"==e?this.getDataList():"removeAll"==e&&this.removeAll()},init:function(){this.accessToken={accessToken:this.getStore("accessToken")},this.getDataList()},showPic:function(e){this.file=e,this.file.msize=(+e.fileSize/1048576).toFixed(2)+" MB",this.picTitle=e.name+"("+e.fileKey+")",this.picVisible=!0},showVideo:function(e){i=new l.a({container:document.getElementById("dplayer"),screenshot:!0,video:{url:e.url}}),this.file=e,this.file.msize=(+e.fileSize/1048576).toFixed(2)+" MB",this.videoTitle=e.name+"("+e.fileKey+")",this.videoVisible=!0},closeVideo:function(){i.destroy()},changePage:function(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize:function(e){this.searchForm.pageNumber=1,this.searchForm.pageSize=e,this.getDataList()},changeSort:function(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"==e.order&&(this.searchForm.order=""),this.getDataList()},selectDateRange:function(e){e&&(this.searchForm.startDate=e[0],this.searchForm.endDate=e[1])},changeShowType:function(){this.searchForm.pageNumber=1,"list"==this.showType?this.searchForm.pageSize=10:this.searchForm.pageSize=12,this.getDataList()},getDataList:function(){var t=this;"list"==this.showType?this.pageSizeOpts=[10,20,50]:this.pageSizeOpts=[12,24,48],this.loading=!0,Object(s.D)(this.searchForm).then(function(e){t.loading=!1,t.data=e.result.records,t.total=e.result.total})},handleSearch:function(){this.searchForm.title=this.searchForm.name,this.searchForm.pageNumber=1,"list"==this.showType?this.searchForm.pageSize=5:this.searchForm.pageSize=12,this.getDataList()},changeFileType:function(){var e=this.fileType;"all"==e?this.searchForm.fileType="":"pic"==e?this.searchForm.fileType="image":"video"==e&&(this.searchForm.fileType="video"),this.handleSearch()},handleMaxSize:function(e){this.$Notice.warning({title:"文件大小过大",desc:"所选文件大小过大, 不得超过 1M."})},handleSuccess:function(e,t){e.success?(this.$Message.success("上传文件 "+t.name+" 成功"),this.getDataList()):this.$Message.error(e.message)},handleError:function(e,t,i){this.$Message.error(e.toString())},clearFiles:function(){this.$refs.up.clearFiles()},handleCancel:function(){this.modalVisible=!1},download:function(e){window.open(e.url+"?attname=&response-content-type=application/octet-stream")},removeAll:function(){var i=this;this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 个文件?",loading:!0,onOk:function(){var t="";i.selectList.forEach(function(e){t+=e.id+","}),t=t.substring(0,t.length-1),Object(s.o)(t).then(function(e){i.$Modal.remove(),e.success&&(i.$Message.success("批量删除文件成功"),i.clearSelectAll(),i.getDataList())})}})},remove:function(t){var i=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除文件 "+t.name+" ?",loading:!0,onOk:function(){Object(s.o)(t.id).then(function(e){i.$Modal.remove(),e.success&&(i.$Message.success("删除文件 "+t.name+" 成功"),i.getDataList())})}})},handleSubmit:function(){var t=this;this.$refs.form.validate(function(e){e&&(t.submitLoading=!0,e={id:t.form.id,key:t.oldKey,newKey:t.form.fileKey,newName:t.form.name},Object(s.ab)(e).then(function(e){t.submitLoading=!1,e.success&&(t.$Message.success("操作成功"),t.getDataList(),t.modalVisible=!1)}))})},rename:function(e){for(var t in this.modalTitle="编辑文件名",e)null==e[t]&&(e[t]="");var i=JSON.stringify(e),i=JSON.parse(i);this.form=i,this.oldKey=i.fileKey,this.modalVisible=!0},clearSelectAll:function(){this.$refs.table.selectAll(!1),this.totalSize=""},changeSelect:function(e){this.selectList=e,this.selectCount=e.length;var t=0;e.forEach(function(e){t+=+e.fileSize}),this.totalSize=(+t/1048576).toFixed(2)+" MB"}},mounted:function(){this.isComponent||this.init()}},c=(a("ae40"),a("2877")),c=Object(c.a)(o,function(){var i=this,s=i._self._c;return s("div",{staticClass:"search"},[s("Card",[s("div",{staticClass:"operation"},[s("Row",{nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"enter",13,e.key,"Enter")?null:i.handleSearch.apply(null,arguments)}}},[s("Form",{ref:"searchForm",staticClass:"search-form",attrs:{model:i.searchForm,inline:"","label-width":85}},[s("Form-item",{attrs:{label:"原文件名",prop:"name"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入原文件名",clearable:""},model:{value:i.searchForm.name,callback:function(e){i.$set(i.searchForm,"name",e)},expression:"searchForm.name"}})],1),s("Form-item",{attrs:{label:"存储文件名",prop:"fileKey"}},[s("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入存储文件名",clearable:""},model:{value:i.searchForm.fileKey,callback:function(e){i.$set(i.searchForm,"fileKey",e)},expression:"searchForm.fileKey"}})],1),s("Form-item",{attrs:{label:"上传时间"}},[s("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",format:"yyyy-MM-dd",clearable:"",placeholder:"选择起始时间"},on:{"on-change":i.selectDateRange},model:{value:i.selectDate,callback:function(e){i.selectDate=e},expression:"selectDate"}})],1),s("Button",{staticClass:"search-btn",attrs:{type:"primary",icon:"ios-search"},on:{click:i.handleSearch}},[i._v("搜索 ")])],1)],1),s("div",{staticClass:"oss-operation padding-row"},[s("div",[s("Upload",{ref:"up",staticStyle:{display:"inline-block"},attrs:{action:i.commonUrl+"/common/common/upload/file",headers:i.accessToken,"on-success":i.handleSuccess,"on-error":i.handleError,"show-upload-list":!1,"max-size":2048,"on-exceeded-size":i.handleMaxSize,multiple:""}},[s("Button",{attrs:{type:"primary"}},[i._v("上传文件")])],1),s("Dropdown",{on:{"on-click":i.handleDropdown}},[s("Button",[i._v(" 更多操作 "),s("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),s("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[s("DropdownItem",{attrs:{name:"refresh"}},[i._v("刷新")]),s("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:"list"==i.showType,expression:"showType == 'list'"}],attrs:{name:"removeAll"}},[i._v("批量删除 ")])],1)],1)],1),s("div",[s("RadioGroup",{staticStyle:{"margin-right":"25px"},attrs:{type:"button","button-style":"solid"},on:{"on-change":i.changeFileType},model:{value:i.fileType,callback:function(e){i.fileType=e},expression:"fileType"}},[s("Radio",{attrs:{label:"all"}},[i._v("所有类型")]),s("Radio",{attrs:{label:"pic"}},[i._v("图片")]),s("Radio",{attrs:{label:"video"}},[i._v("视频")])],1),s("RadioGroup",{attrs:{type:"button","button-style":"solid"},on:{"on-change":i.changeShowType},model:{value:i.showType,callback:function(e){i.showType=e},expression:"showType"}},[s("Radio",{attrs:{title:"列表",label:"list"}},[s("Icon",{attrs:{type:"md-list"}})],1),s("Radio",{attrs:{title:"缩略图",label:"thumb"}},[s("Icon",{attrs:{type:"ios-apps"}})],1)],1)],1)])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"list"==i.showType,expression:"showType == 'list'"}]},[s("Row",[s("Alert",{attrs:{"show-icon":""}},[i._v(" 已选择 "),s("span",[i._v(i._s(i.selectCount))]),i._v(" 项 "),s("a",{staticClass:"select-clear",on:{click:i.clearSelectAll}},[i._v("清空")]),0<i.selectCount?s("span",{staticStyle:{"margin-left":"15px"}},[i._v("共计 "+i._s(i.totalSize)+" 存储量")]):i._e()])],1),s("Table",{ref:"table",attrs:{loading:i.loading,border:"",columns:i.columns,data:i.data,sortable:"custom"},on:{"on-sort-change":i.changeSort,"on-selection-change":i.changeSelect}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"thumb"==i.showType,expression:"showType == 'thumb'"}]},[s("div",{staticClass:"oss-wrapper"},i._l(i.data,function(t,e){return s("Card",{key:e,staticClass:"oss-card"},[s("div",{staticClass:"content"},[0<=t.fileType.indexOf("image")?s("img",{staticClass:"img",attrs:{src:t.url},on:{click:function(e){return i.showPic(t)}}}):0<=t.fileType.indexOf("video")?s("div",{staticClass:"video",on:{click:function(e){return i.showVideo(t)}}},[t.fileSize<5242880?s("video",{staticClass:"cover"},[s("source",{attrs:{src:t.url}})]):i._e(),s("img",{staticClass:"play",attrs:{src:a("df84")}})]):s("div",{staticClass:"other"},[s("div",{staticClass:"name"},[i._v(i._s(t.name))]),s("div",{staticClass:"key"},[i._v(i._s(t.fileKey))]),s("div",{staticClass:"info"},[i._v(" 文件类型："+i._s(t.fileType)+" 文件大小："+i._s((+t.fileSize/1048576).toFixed(2))+" MB 创建时间："+i._s(t.createTime)+" ")])]),s("div",{staticClass:"actions"},[s("div",{staticClass:"btn"},[s("Tooltip",{attrs:{content:"下载",placement:"top"}},[s("Icon",{attrs:{type:"md-download",size:"16"},on:{click:function(e){return i.download(t)}}})],1)],1),s("div",{staticClass:"btn"},[s("Tooltip",{attrs:{content:"重命名",placement:"top"}},[s("Icon",{attrs:{type:"md-create",size:"16"},on:{click:function(e){return i.rename(t)}}})],1)],1),s("div",{staticClass:"btn-no"},[s("Tooltip",{attrs:{content:"删除",placement:"top"}},[s("Icon",{attrs:{type:"md-trash",size:"16"},on:{click:function(e){return i.remove(t)}}})],1)],1)])])])}),1)]),s("Row",{staticClass:"mt_10",attrs:{type:"flex",justify:"end"}},[s("Page",{attrs:{current:i.searchForm.pageNumber,total:i.total,"page-size":i.searchForm.pageSize,"page-size-opts":i.pageSizeOpts,size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":i.changePage,"on-page-size-change":i.changePageSize}})],1)],1),s("Modal",{attrs:{title:i.modalTitle,"mask-closable":!1,width:500},model:{value:i.modalVisible,callback:function(e){i.modalVisible=e},expression:"modalVisible"}},[s("Form",{ref:"form",attrs:{model:i.form,"label-width":95,rules:i.formValidate}},[s("FormItem",{attrs:{label:"原文件名",prop:"name"}},[s("Input",{model:{value:i.form.name,callback:function(e){i.$set(i.form,"name",e)},expression:"form.name"}})],1),s("FormItem",{attrs:{label:"存储文件名",prop:"fileKey"}},[s("Input",{attrs:{disabled:""},model:{value:i.form.fileKey,callback:function(e){i.$set(i.form,"fileKey",e)},expression:"form.fileKey"}})],1)],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"text"},on:{click:i.handleCancel}},[i._v("取消")]),s("Button",{attrs:{type:"primary",loading:i.submitLoading},on:{click:i.handleSubmit}},[i._v("提交 ")])],1)],1),s("Modal",{attrs:{title:i.picTitle,draggable:""},model:{value:i.picVisible,callback:function(e){i.picVisible=e},expression:"picVisible"}},[s("img",{staticStyle:{width:"100%",margin:"0 auto",display:"block"},attrs:{src:i.file.url,alt:"无效的图片链接"}}),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("span",[i._v("文件类型："+i._s(i.file.fileType)+" 文件大小："+i._s(i.file.msize)+" 创建时间："+i._s(i.file.createTime))])])]),s("Modal",{attrs:{title:i.videoTitle,width:800,draggable:""},on:{"on-cancel":i.closeVideo},model:{value:i.videoVisible,callback:function(e){i.videoVisible=e},expression:"videoVisible"}},[s("div",{attrs:{id:"dplayer"}}),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("span",[i._v("文件类型："+i._s(i.file.fileType)+" 文件大小："+i._s(i.file.msize)+" 创建时间："+i._s(i.file.createTime))])])])],1)},[],!1,null,null,null);t.default=c.exports},df84:function(e,t,i){e.exports=i.p+"img/play.7cf8df74.png"},f189:function(e,t,i){}}]);