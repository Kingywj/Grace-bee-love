(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e90cadce"],{"29fc":function(t,e,s){"use strict";s.r(e);var o=s("365c"),i={name:"department-manage",data:function(){return{loading:!0,maxHeight:"500px",strict:!0,userLoading:!1,loadingEdit:!1,modalVisible:!1,selectList:[],selectCount:0,showParent:!1,modalTitle:"",editTitle:"",selectedRole:[],searchKey:"",form:{id:"",title:"",parentId:"",parentTitle:"",sortOrder:0,status:0},formAdd:{},formValidate:{title:[{required:!0,message:"名称不能为空",trigger:"blur"}],sortOrder:[{required:!0,type:"number",message:"排序值不能为空",trigger:"blur"}]},submitLoading:!1,data:[],dataEdit:[],users:[]}},methods:{init:function(){this.getParentList()},getParentList:function(){var e=this;this.loading=!0,Object(o.U)().then(function(t){e.loading=!1,t.success&&(e.data=e.bubbleSort(t.result))})},loadData:function(t,e){var s=this;Object(o.X)(t.id).then(function(t){s.loadingEdit=!1,t.success&&e(t.result)})},selectTree:function(t){var s=this;if(0<t.length){for(var e in t[0])null==t[0][e]&&(t[0][e]="");var i=JSON.stringify(t[0]),r=JSON.parse(i);this.editTitle=r.title,this.userLoading=!0,Object(o.O)(r.id).then(function(t){var e=[];t.result&&t.result.forEach(function(t){e.push(t.roleId)}),s.$set(s,"selectedRole",e)}),Object(o.L)({pageNumber:1,pageSize:1e4}).then(function(t){s.userLoading=!1,t.success&&(s.users=t.result.records,s.form=r)})}else this.cancelSelect()},bubbleSort:function(t){var e=t.length;if(!(e<2))for(var s,i=0;i<e;i++)for(var r=0;r<i;r++)t[r].sortOrder>t[i].sortOrder&&(s=t[r],t[r]=t[i],t[i]=s);return t},cancelSelect:function(){var t=this.$refs.tree.getSelectedNodes()[0];t&&(t.selected=!1),this.$refs.form.resetFields(),delete this.form.id,this.editTitle=""},selectTreeEdit:function(t){if(0<t.length){for(var e in t[0])null==t[0][e]&&(t[0][e]="");var s=JSON.stringify(t[0]),s=JSON.parse(s);this.form.parentId=s.id,this.form.parentTitle=s.title}},cancelAdd:function(){this.modalVisible=!1},handleReset:function(){this.$refs.form.resetFields(),this.form.status=0},submitEdit:function(){var s=this;this.$refs.form.validate(function(t){var e;t&&(s.form.id?(e=[],s.selectedRole.forEach(function(t){t={departmentId:s.form.id,roleId:t};e.push(t)}),Promise.all([Object(o.t)(s.form.id,s.form),Object(o.jb)(s.form.id,e)]).then(function(t){s.submitLoading=!1,t[0].success&&(s.$Message.success("编辑成功"),s.init(),s.modalVisible=!1)})):s.$Message.warning("请先点击选择要修改的部门"))})},submitAdd:function(){var e=this;this.$refs.formAdd.validate(function(t){t&&(e.submitLoading=!0,Object(o.a)(e.formAdd).then(function(t){e.submitLoading=!1,t.success&&(e.$Message.success("添加成功"),e.init(),e.modalVisible=!1)}))})},add:function(){""!=this.form.id&&null!=this.form.id?(this.modalTitle="添加子部门",this.showParent=!0,this.formAdd={parentId:this.form.id,sortOrder:0,status:0},this.modalVisible=!0):this.$Message.warning("请先点击选择一个部门")},addRoot:function(){this.modalTitle="添加一级部门",this.showParent=!1,this.formAdd={parentId:0,sortOrder:0,status:0},this.modalVisible=!0},changeSelect:function(t){this.selectCount=t.length,this.selectList=t},delAll:function(){var s=this;this.selectCount<=0?this.$Message.warning("您还未勾选要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据及其下级所有数据?",loading:!0,onOk:function(){var e="";s.selectList.forEach(function(t){e+=t.id+","}),e=e.substring(0,e.length-1),Object(o.n)(e).then(function(t){s.$Modal.remove(),t.success&&(s.$Message.success("删除成功"),s.selectList=[],s.selectCount=0,s.cancelSelect(),s.init())})}})}},mounted:function(){var t=document.documentElement.clientHeight;this.maxHeight=Number(t-287)+"px",this.init()}},s=(s("db40"),s("2877")),s=Object(s.a)(i,function(){var e=this,s=e._self._c;return s("div",{staticClass:"search"},[s("Card",[s("Row",{staticClass:"operation"},[s("i-switch",{staticStyle:{"margin-right":"5px"},attrs:{size:"large"},model:{value:e.strict,callback:function(t){e.strict=t},expression:"strict"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("级联")]),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("单选")])]),s("Button",{on:{click:e.addRoot}},[e._v("添加部门")]),s("Button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("添加子部门")]),s("Button",{on:{click:e.delAll}},[e._v("批量删除")]),s("Button",{on:{click:e.getParentList}},[e._v("刷新")])],1),s("Row",{attrs:{type:"flex",justify:"start"}},[s("Col",{attrs:{md:8,lg:8,xl:6}},[s("Alert",{attrs:{"show-icon":""}},[e._v(" 当前选择编辑： "),s("span",{staticClass:"select-title"},[e._v(e._s(e.editTitle))]),e.form.id?s("a",{staticClass:"select-clear",on:{click:e.cancelSelect}},[e._v("取消选择")]):e._e()]),s("div",{staticClass:"tree-bar",style:{maxHeight:e.maxHeight}},[s("Tree",{ref:"tree",attrs:{data:e.data,"load-data":e.loadData,"show-checkbox":"","check-strictly":!e.strict},on:{"on-check-change":e.changeSelect,"on-select-change":e.selectTree}}),e.loading?s("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1),s("Col",{staticStyle:{"margin-left":"10px"},attrs:{md:15,lg:13,xl:9}},[s("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate}},[s("FormItem",{attrs:{label:"部门名称",prop:"title"}},[s("Input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),s("FormItem",{attrs:{label:"选择角色"}},[s("Select",{attrs:{loading:e.userLoading,"not-found-text":"暂无角色",multiple:""},model:{value:e.selectedRole,callback:function(t){e.selectedRole=t},expression:"selectedRole"}},e._l(e.users,function(t){return s("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1)],1),s("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[s("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[s("InputNumber",{attrs:{max:1e3,min:0},model:{value:e.form.sortOrder,callback:function(t){e.$set(e.form,"sortOrder",t)},expression:"form.sortOrder"}})],1)],1),s("Form-item",[s("Button",{staticStyle:{"margin-right":"5px"},attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.submitEdit}},[e._v("修改并保存")]),s("Button",{on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1)],1)],1),s("Modal",{attrs:{title:e.modalTitle,"mask-closable":!1,width:500},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[s("Form",{ref:"formAdd",attrs:{model:e.formAdd,"label-width":85,rules:e.formValidate}},[e.showParent?s("div",[s("FormItem",{attrs:{label:"上级部门："}},[e._v(e._s(e.form.title))])],1):e._e(),s("FormItem",{attrs:{label:"部门名称",prop:"title"}},[s("Input",{model:{value:e.formAdd.title,callback:function(t){e.$set(e.formAdd,"title",t)},expression:"formAdd.title"}})],1),s("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[s("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[s("InputNumber",{attrs:{max:1e3,min:0},model:{value:e.formAdd.sortOrder,callback:function(t){e.$set(e.formAdd,"sortOrder",t)},expression:"formAdd.sortOrder"}})],1)],1)],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"text"},on:{click:e.cancelAdd}},[e._v("取消")]),s("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitAdd}},[e._v("提交")])],1)],1)],1)},[],!1,null,"953198fe",null);e.default=s.exports},"3b43":function(t,e,s){},db40:function(t,e,s){"use strict";s("3b43")}}]);