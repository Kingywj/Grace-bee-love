(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c2d92814"],{"145a":function(t,s,e){},8420:function(t,s,e){"use strict";e.r(s);var r={name:"setPassword",props:{value:String,size:String,placeholder:{type:String,default:"请输入密码，长度为6-20个字符"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:{type:Number,default:20}},data:function(){return{currentValue:this.value,tipStyle:"password-tip-none",strengthValue:0,progressStatus:"normal",strength:"无",grade:0}},methods:{checkStrengthValue:function(t){var s=0;return/\d/.test(t)&&s++,/[a-z]/.test(t)&&s++,/[A-Z]/.test(t)&&s++,/\W/.test(t)&&s++,10<=t.length&&s++,this.grade=s},strengthChange:function(){var t;this.currentValue?(t=this.checkStrengthValue(this.currentValue))<=1?(this.progressStatus="wrong",this.tipStyle="password-tip-weak",this.strength="弱",this.strengthValue=33):2<=t&&t<=4?(this.progressStatus="normal",this.tipStyle="password-tip-middle",this.strength="中",this.strengthValue=66):(this.progressStatus="success",this.tipStyle="password-tip-strong",this.strength="强",this.strengthValue=100):(this.tipStyle="password-tip-none",this.strength="无",this.strengthValue=0)},handleChange:function(t){this.strengthChange(),this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue,this.grade,this.strength)},setCurrentValue:function(t){t!==this.currentValue&&(this.currentValue=t,this.strengthChange(),this.$emit("on-change",this.currentValue,this.grade,this.strength))}},watch:{value:function(t){this.setCurrentValue(t)}}},a=(e("d1fa"),e("2877")),r=Object(a.a)(r,function(){var s=this,t=s._self._c;return t("div",{staticClass:"set-password"},[t("Poptip",{attrs:{transfer:"",trigger:"focus",placement:"right",width:"250"}},[t("Input",{staticStyle:{width:"350px"},attrs:{type:"password",password:"",maxlength:s.maxlength,size:s.size,placeholder:s.placeholder,disabled:s.disabled,readonly:s.readonly},on:{"on-change":s.handleChange},model:{value:s.currentValue,callback:function(t){s.currentValue=t},expression:"currentValue"}}),t("div",{class:s.tipStyle,attrs:{slot:"content"},slot:"content"},[t("div",{staticClass:"words"},[s._v("强度 : "+s._s(s.strength))]),t("Progress",{staticStyle:{margin:"13px 0"},attrs:{percent:s.strengthValue,status:s.progressStatus,"hide-info":""}}),t("br"),s._v("请至少输入 6 个字符。请不要使 "),t("br"),s._v("用容易被猜到的密码。 ")],1)],1)],1)},[],!1,null,"b44d8e28",null).exports,n=e("365c"),e={name:"change-password",components:{SetPassword:r},data:function(){var r=this;return{savePassLoading:!1,editPasswordForm:{oldPassword:"",newPassword:"",rePassword:""},strength:"",passwordValidate:{oldPassword:[{required:!0,message:"请输入原密码",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,message:"请至少输入6个字符",trigger:"blur"},{max:32,message:"最多输入32个字符",trigger:"blur"}],rePassword:[{required:!0,message:"请再次输入新密码",trigger:"blur"},{validator:function(t,s,e){s!==r.editPasswordForm.newPassword?e(new Error("两次输入密码不一致")):e()},trigger:"blur"}]}}},methods:{changeInputPass:function(t,s,e){this.strength=e},saveEditPass:function(){var s=this,e={password:this.md5(this.editPasswordForm.oldPassword),newPassword:this.md5(this.editPasswordForm.newPassword),passStrength:this.md5(this.strength)};this.$refs.editPasswordForm.validate(function(t){t&&(s.savePassLoading=!0,Object(n.h)(e).then(function(t){s.savePassLoading=!1,t.success&&s.$Modal.success({title:"修改密码成功",content:"修改密码成功，需重新登录",onOk:function(){s.$store.commit("logout",s),s.$router.push({name:"login"})}})}))})},cancelEditPass:function(){this.$store.commit("removeTag","change_password"),localStorage.pageOpenedList=JSON.stringify(this.$store.state.app.pageOpenedList);var t=this.$store.state.app.pageOpenedList.length,t=(1<t?this.$store.state.app.pageOpenedList[t-1]:this.$store.state.app.pageOpenedList[0]).name;this.$router.push({name:t})}}},r=Object(a.a)(e,function(){var s=this,t=s._self._c;return t("div",[t("Card",{staticClass:"change-pass"},[t("p",{attrs:{slot:"title"},slot:"title"},[s._v("修改密码")]),t("div",{staticClass:"mt_10"},[t("Form",{ref:"editPasswordForm",staticStyle:{width:"450px"},attrs:{model:s.editPasswordForm,"label-width":100,"label-position":"right",rules:s.passwordValidate}},[t("FormItem",{attrs:{label:"原密码",prop:"oldPass"}},[t("Input",{attrs:{type:"password",placeholder:"请输入现在使用的密码"},model:{value:s.editPasswordForm.oldPassword,callback:function(t){s.$set(s.editPasswordForm,"oldPassword",t)},expression:"editPasswordForm.oldPassword"}})],1),t("FormItem",{attrs:{label:"新密码",prop:"newPass"}},[t("SetPassword",{on:{"on-change":s.changeInputPass},model:{value:s.editPasswordForm.newPassword,callback:function(t){s.$set(s.editPasswordForm,"newPassword",t)},expression:"editPasswordForm.newPassword"}})],1),t("FormItem",{attrs:{label:"确认新密码",prop:"rePass"}},[t("Input",{attrs:{type:"password",placeholder:"请再次输入新密码"},model:{value:s.editPasswordForm.rePassword,callback:function(t){s.$set(s.editPasswordForm,"rePassword",t)},expression:"editPasswordForm.rePassword"}})],1),t("FormItem",[t("Button",{staticClass:"mr_10",attrs:{type:"primary",loading:s.savePassLoading},on:{click:s.saveEditPass}},[s._v("保存 ")]),t("Button",{on:{click:s.cancelEditPass}},[s._v("取消")])],1)],1)],1)])],1)},[],!1,null,null,null);s.default=r.exports},d1fa:function(t,s,e){"use strict";e("145a")}}]);