(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0ceabb3a"],{5329:function(e,t,r){},8194:function(e,t,r){"use strict";r.d(t,"k",function(){return n}),r.d(t,"h",function(){return s}),r.d(t,"c",function(){return i}),r.d(t,"u",function(){return o}),r.d(t,"i",function(){return c}),r.d(t,"g",function(){return l}),r.d(t,"t",function(){return d}),r.d(t,"a",function(){return u}),r.d(t,"o",function(){return m}),r.d(t,"p",function(){return p}),r.d(t,"q",function(){return f}),r.d(t,"w",function(){return b}),r.d(t,"v",function(){return h}),r.d(t,"l",function(){return g}),r.d(t,"n",function(){return w}),r.d(t,"r",function(){return y}),r.d(t,"j",function(){return F}),r.d(t,"e",function(){return k}),r.d(t,"f",function(){return M}),r.d(t,"s",function(){return v}),r.d(t,"b",function(){return x}),r.d(t,"d",function(){return S}),r.d(t,"m",function(){return _});var a=r("7f80"),n=function(e){return Object(a.c)("/member/evaluation/getByPage",e)},s=function(e){return Object(a.c)("/member/evaluation/get/".concat(e))},i=function(e){return Object(a.k)("/member/evaluation/delete/".concat(e))},o=function(e,t){return Object(a.c)("/member/evaluation/updateStatus/".concat(e),t)},c=function(e){return Object(a.c)("/passport/member",e)},l=function(e){return Object(a.c)("/passport/member/".concat(e))},d=function(e){return Object(a.k)("/passport/member",e)},u=function(e){return Object(a.g)("/passport/member",e)},m=function(e){return Object(a.c)("/wallet/recharge",e)},p=function(e){return Object(a.c)("/wallet/log",e)},f=function(e){return Object(a.c)("/wallet/withdrawApply",e)},b=function(e){return Object(a.g)("/wallet/withdrawApply",e)},h=function(e){return Object(a.k)("/passport/member/updateMemberStatus",e)},g=function(e){return Object(a.c)("/statistics/member",e)},w=function(e){return Object(a.c)("/statistics/view/list",e)},y=function(){return Object(a.c)("/statistics/view/online/history")},F=function(e){return Object(a.c)("/passport/member/num",e)},k=function(e){return Object(a.c)("/member/memberPointsHistory/getByPage",e)},M=function(e,t){return Object(a.c)("/member/address/".concat(e),t)},v=function(e){return Object(a.b)("/member/address/delById/".concat(e))},x=function(e){return Object(a.g)("/member/address",e)},S=function(e){return Object(a.k)("/member/address",e)},_=function(e){return Object(a.c)("/wallet/wallet",e)}},"941b":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=/^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/},bb7b:function(e,t,r){"use strict";r.r(t);var a=r("6bba"),c=r("8194"),n=r("cdbd"),s=r("941b"),a={name:"member",components:{region:a.a,ossManage:n.default},data:function(){var r=this;return{descTitle:"",descFlag:!1,loading:!0,addFlag:!1,updateRegion:!1,addMemberForm:{mobile:"",username:"",password:""},searchForm:{pageNumber:1,pageSize:10,order:"desc",username:"",mobile:"",disabled:"OPEN"},picModelFlag:!1,form:{},addRule:{mobile:[{required:!0,message:"请输入手机号码"},{pattern:s.a,message:"请输入正确的手机号"}],username:[{required:!0,message:"请输入会员名称"}],password:[{required:!0,message:"请输入密码"}]},ruleValidate:{},columns:[{title:"会员名称",key:"username",tooltip:!0},{title:"会员昵称",key:"nickName",tooltip:!0},{title:"联系方式",width:130,key:"mobile",render:function(e,t){return null==t.row.mobile?e("div",[e("span",{},"")]):e("div",[e("span",{},t.row.mobile)])}},{title:"注册时间",key:"createTime",width:180},{title:"积分数量",align:"left",width:100,render:function(e,t){return e("div",{},null==t.row.point?"0":t.row.point)}},{title:"操作",key:"action",align:"center",width:200,fixed:"right",render:function(e,t){return e("div",{style:{display:"flex",justifyContent:"center"}},[e("Button",{props:{size:"small",type:t.row.___selected?"primary":"default"},style:{marginRight:"5px",display:r.selectedMember?"block":"none"},on:{click:function(){r.callback(t.row,t.index)}}},t.row.___selected?"已选择":"选择"),e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px",display:r.selectedMember?"none":"block"},on:{click:function(){r.detail(t.row)}}},"查看"),e("Button",{props:{type:"info",size:"small",ghost:!0},style:{marginRight:"5px",display:r.selectedMember?"none":"block"},on:{click:function(){r.editPerm(t.row)}}},"编辑"),e("Button",{props:{size:"small",type:"error"},style:{marginRight:"5px",display:r.selectedMember?"none":"block"},on:{click:function(){r.disabled(t.row)}}},"禁用")])}}],data:[],total:0,selectMember:[]}},props:{selectedMember:{type:Boolean,default:!1},selectedList:{type:null,default:function(){return[]}}},watch:{selectedList:{handler:function(e){this.$set(this,"selectMember",JSON.parse(JSON.stringify(e))),this.init(this.data)},deep:!0,immediate:!0}},methods:{callback:function(t,e){var r=this,a=(this.$set(t,"___selected",!t.___selected),this.selectMember.find(function(e){return e.id==t.id}));a?this.selectMember.map(function(e,t){e.id==a.id&&r.selectMember.splice(t,1)}):this.selectMember.push(t),this.$emit("callback",t)},init:function(e){var r=this;e.forEach(function(t){0!=r.selectMember.length?r.selectMember.forEach(function(e){e.id==t.id&&r.$set(t,"___selected",!0)}):r.$set(t,"___selected",!1)}),this.data=e},changePage:function(e){this.searchForm.pageNumber=e,this.getData()},changePageSize:function(e){this.searchForm.pageSize=e,this.searchForm.pageNumber=1,this.getData()},handleSearch:function(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getData()},editPerm:function(e){this.descTitle="查看用户 ".concat(e.username),this.descFlag=!0,this.updateRegion=!1,this.getMemberInfo(e.id)},addMember:function(){this.addFlag=!0,this.$refs.addMemberForm.resetFields()},getMemberInfo:function(e){var t=this;c.g(e).then(function(e){e.result&&t.$set(t,"form",e.result)})},getData:function(){var t=this;c.i(this.searchForm).then(function(e){e.result.records&&(t.loading=!1,t.init(e.result.records),t.total=e.result.total)})},callbackSelected:function(e){this.picModelFlag=!1,this.form.face=e.url},addMemberSubmit:function(){var t=this;this.addMemberForm.password=this.md5(this.addMemberForm.password),this.$refs.addMemberForm.validate(function(e){e&&c.a(t.addMemberForm).then(function(e){e.result&&(t.$refs.addMemberForm.resetFields(),t.getData(),t.$Message.success("添加成功！"),t.addFlag=!1)})})},selectedRegion:function(e){this.region=e[1],this.regionId=e[0]},detail:function(e){this.$router.push({name:"member-detail",query:{id:e.id}})},disabled:function(e){var t=this,r={memberIds:[e.id],disabled:!1};this.$Modal.confirm({title:"提示",content:"<p>确认禁用此会员？</p>",onOk:function(){c.v(r).then(function(e){e.success&&(t.$Message.success("禁用成功"),t.getData())})}})},handleSubmitModal:function(){var t=this,e=this.form,r=e.nickName,a=e.sex,n=e.username,s=e.face,i=e.newPassword,e=e.id,o=new Date(this.form.birthday),o=o?o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate():"",r={regionId:this.form.regionId,region:this.form.region,nickName:r,username:n,sex:a,birthday:o,face:s,id:e};"undefined"!=this.region&&(r.regionId=this.regionId,r.region=this.region),i&&(r.password=this.md5(i)),c.t(r).then(function(e){e.result&&(t.$Message.success("修改成功！"),t.init())})}},mounted:function(){this.getData()}},n=(r("d0ea"),r("2877")),r=Object(n.a)(a,function(){var e=this,t=this,r=t._self._c;return r("div",{staticClass:"search"},[r("Card",[r("Row",{nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch.apply(null,arguments)}}},[r("Form",{ref:"searchForm",staticClass:"search-form",attrs:{model:t.searchForm,inline:"","label-width":70}},[r("Form-item",{attrs:{label:"会员名称",prop:"username"}},[r("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入会员名称",clearable:""},model:{value:t.searchForm.username,callback:function(e){t.$set(t.searchForm,"username",e)},expression:"searchForm.username"}})],1),r("Form-item",{attrs:{label:"会员昵称",prop:"nickName"}},[r("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入会员昵称",clearable:""},model:{value:t.searchForm.nickName,callback:function(e){t.$set(t.searchForm,"nickName",e)},expression:"searchForm.nickName"}})],1),r("Form-item",{attrs:{label:"联系方式",prop:"mobile"}},[r("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入会员联系方式",clearable:""},model:{value:t.searchForm.mobile,callback:function(e){t.$set(t.searchForm,"mobile",e)},expression:"searchForm.mobile"}})],1),r("Button",{staticClass:"search-btn",attrs:{type:"primary",icon:"ios-search"},on:{click:t.handleSearch}},[t._v("搜索")])],1)],1),t.selectedMember?t._e():r("Row",{staticClass:"operation padding-row"},[r("Button",{attrs:{type:"primary"},on:{click:t.addMember}},[t._v("添加会员")])],1),r("Table",{ref:"table",staticClass:"mt_10",attrs:{loading:t.loading,border:"",columns:t.columns,data:t.data}}),r("Row",{staticClass:"mt_10",attrs:{type:"flex",justify:"end"}},[r("Page",{attrs:{current:t.searchForm.pageNumber,total:t.total,"page-size":t.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1),r("Modal",{attrs:{title:"添加会员"},model:{value:t.addFlag,callback:function(e){t.addFlag=e},expression:"addFlag"}},[r("Form",{ref:"addMemberForm",attrs:{model:t.addMemberForm,rules:t.addRule,"label-width":100}},[r("FormItem",{staticStyle:{width:"90%"},attrs:{label:"手机号码",prop:"mobile"}},[r("Input",{attrs:{maxlength:"11",placeholder:"请输入手机号码"},model:{value:t.addMemberForm.mobile,callback:function(e){t.$set(t.addMemberForm,"mobile",e)},expression:"addMemberForm.mobile"}})],1),r("FormItem",{staticStyle:{width:"90%"},attrs:{label:"会员名称",prop:"username"}},[r("Input",{attrs:{maxlength:"15",placeholder:"请输入会员名称"},model:{value:t.addMemberForm.username,callback:function(e){t.$set(t.addMemberForm,"username",e)},expression:"addMemberForm.username"}})],1),r("FormItem",{staticStyle:{width:"90%"},attrs:{label:"会员密码",prop:"password"}},[r("Input",{attrs:{type:"password",password:"",maxlength:"20",placeholder:"请输入会员密码"},model:{value:t.addMemberForm.password,callback:function(e){t.$set(t.addMemberForm,"password",e)},expression:"addMemberForm.password"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{on:{click:function(e){t.addFlag=!1}}},[t._v("取消")]),r("Button",{attrs:{type:"primary"},on:{click:t.addMemberSubmit}},[t._v("确定")])],1)],1),r("Modal",{attrs:{title:t.descTitle,width:"500"},on:{"on-ok":t.handleSubmitModal},model:{value:t.descFlag,callback:function(e){t.descFlag=e},expression:"descFlag"}},[r("Form",{ref:"form",attrs:{model:t.form,rules:t.ruleValidate,"label-width":80}},[r("Input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),r("FormItem",{attrs:{label:"头像"}},[r("img",{staticClass:"face",attrs:{src:t.form.face}}),r("Button",{staticClass:"upload",attrs:{type:"text"},on:{click:function(){e.picModelFlag=!0,e.$refs.ossManage.selectImage=!0}}},[t._v("修改")]),r("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file"}})],1),r("FormItem",{attrs:{label:"用户名",prop:"name"}},[r("Input",{staticStyle:{width:"200px"},attrs:{disabled:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),r("FormItem",{attrs:{label:"用户昵称",prop:"name"}},[r("Input",{staticStyle:{width:"200px"},model:{value:t.form.nickName,callback:function(e){t.$set(t.form,"nickName",e)},expression:"form.nickName"}})],1),r("FormItem",{attrs:{label:"性别",prop:"sex"}},[r("RadioGroup",{attrs:{type:"button","button-style":"solid"},model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}},[r("Radio",{attrs:{label:1}},[r("span",[t._v("男")])]),r("Radio",{attrs:{label:0}},[r("span",[t._v("女")])])],1)],1),r("FormItem",{attrs:{label:"修改密码",prop:"password"}},[r("Input",{staticStyle:{width:"220px"},attrs:{type:"password",password:""},model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}})],1),r("FormItem",{attrs:{label:"生日",prop:"birthday"}},[r("DatePicker",{staticStyle:{width:"220px"},attrs:{type:"date",format:"yyyy-MM-dd"},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}})],1),r("FormItem",{attrs:{label:"所在地",prop:"mail"}},[t.updateRegion?r("div",{staticClass:"form-item"},[r("region",{staticStyle:{width:"250px"},on:{selected:t.selectedRegion}})],1):r("div",{staticClass:"form-item"},[r("Input",{staticStyle:{width:"250px"},attrs:{disabled:"",value:t.form.region}}),r("Button",{attrs:{type:"text"},on:{click:function(){e.updateRegion=!e.updateRegion}}},[t._v("修改")])],1)])],1)],1),r("Modal",{attrs:{width:"1200px"},model:{value:t.picModelFlag,callback:function(e){t.picModelFlag=e},expression:"picModelFlag"}},[r("ossManage",{ref:"ossManage",on:{callback:t.callbackSelected}})],1)],1)},[],!1,null,"ba986850",null);t.default=r.exports},d0ea:function(e,t,r){"use strict";r("5329")}}]);