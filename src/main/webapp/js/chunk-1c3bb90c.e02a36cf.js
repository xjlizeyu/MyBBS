(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c3bb90c"],{"048f":function(t,e,a){"use strict";var n=a("952b"),i=a.n(n);i.a},"25f0":function(t,e,a){"use strict";var n=a("6eeb"),i=a("825a"),r=a("d039"),l=a("ad6d"),o="toString",s=RegExp.prototype,u=s[o],c=r((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=o;(c||d)&&n(RegExp.prototype,o,(function(){var t=i(this),e=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in s)?l.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"44e7":function(t,e,a){var n=a("861d"),i=a("c6b6"),r=a("b622"),l=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[l])?!!e:"RegExp"==i(t))}},"4d63":function(t,e,a){var n=a("83ab"),i=a("da84"),r=a("94ca"),l=a("7156"),o=a("9bf2").f,s=a("241c").f,u=a("44e7"),c=a("ad6d"),d=a("9f7f"),f=a("6eeb"),p=a("d039"),m=a("69f3").set,v=a("2626"),b=a("b622"),g=b("match"),h=i.RegExp,x=h.prototype,_=/a/g,w=/a/g,y=new h(_)!==_,E=d.UNSUPPORTED_Y,R=n&&r("RegExp",!y||E||p((function(){return w[g]=!1,h(_)!=_||h(w)==w||"/a/i"!=h(_,"i")})));if(R){var N=function(t,e){var a,n=this instanceof N,i=u(t),r=void 0===e;if(!n&&i&&t.constructor===N&&r)return t;y?i&&!r&&(t=t.source):t instanceof N&&(r&&(e=c.call(t)),t=t.source),E&&(a=!!e&&e.indexOf("y")>-1,a&&(e=e.replace(/y/g,"")));var o=l(y?new h(t,e):h(t,e),n?this:x,N);return E&&a&&m(o,{sticky:a}),o},k=function(t){t in N||o(N,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})},S=s(h),I=0;while(S.length>I)k(S[I++]);x.constructor=N,N.prototype=x,f(i,"RegExp",N)}v("RegExp")},"51b6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-nav",{staticStyle:{"background-color":"whitesmoke"}},[a("b-nav-item",{attrs:{to:"/"}},[t._v("首页")]),a("b-nav-item",{attrs:{to:"/signin"}},[t._v("注册")]),a("b-nav-item",{attrs:{to:"/login"}},[t._v("登录")])],1)},i=[],r=a("2877"),l={},o=Object(r["a"])(l,n,i,!1,null,null,null);e["a"]=o.exports},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,l;return i&&"function"==typeof(r=e.constructor)&&r!==a&&n(l=r.prototype)&&l!==a.prototype&&i(t,l),t}},9263:function(t,e,a){"use strict";var n=a("ad6d"),i=a("9f7f"),r=RegExp.prototype.exec,l=String.prototype.replace,o=r,s=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,c=void 0!==/()??/.exec("")[1],d=s||c||u;d&&(o=function(t){var e,a,i,o,d=this,f=u&&d.sticky,p=n.call(d),m=d.source,v=0,b=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),b=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(m="(?: "+m+")",b=" "+b,v++),a=new RegExp("^(?:"+m+")",p)),c&&(a=new RegExp("^"+m+"$(?!\\s)",p)),s&&(e=d.lastIndex),i=r.call(f?a:d,b),f?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:s&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),c&&i&&i.length>1&&l.call(i[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),t.exports=o},"952b":function(t,e,a){},"9f7f":function(t,e,a){"use strict";var n=a("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var n=a("23e7"),i=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,a){"use strict";var n=a("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d47b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav_bar"),a("div",{attrs:{id:"signinBox"}},[a("b-form",{attrs:{id:"signin"},on:{submit:t.onSubmit,reset:t.onReset}},[a("h2",{staticStyle:{"text-align":"center"}},[t._v("注册")]),a("b-form-group",{attrs:{id:"input-group-1",label:"email地址:","label-for":"input-1","label-align-md":"center","label-cols-lg":"3"}},[a("b-form-input",{attrs:{state:t.validation_email,id:"input-1",type:"email",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t.alert?a("b-form-invalid-feedback",{attrs:{state:t.validation_email}},[t._v(" 非法email地址 ")]):t._e()],1),a("b-form-group",{attrs:{id:"input-group-2",label:"用户名:","label-for":"input-2","label-align-md":"center","label-cols-lg":"3"}},[a("b-form-input",{attrs:{state:t.validation_name,id:"input-2",placeholder:"Enter name"},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}}),t.alert?a("b-form-invalid-feedback",{attrs:{state:t.validation_name}},[a("p",{directives:[{name:"show",rawName:"v-show",value:!t.validation_name_length,expression:"!validation_name_length"}]},[t._v("用户名为5位到12位")]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.isUsed,expression:"isUsed"}]},[t._v("用过了")])]):t._e()],1),a("b-form-group",{attrs:{label:"密码:","label-for":"input-3","label-align-md":"center","label-cols-lg":"3"}},[a("b-form-input",{attrs:{state:t.validation_password,id:"input-3",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t.alert?a("b-form-invalid-feedback",{attrs:{state:t.validation_password}},[t._v(" 密码至少八位 ")]):t._e()],1),a("b-button",{staticStyle:{margin:"5px"},attrs:{type:"submit",variant:"primary",disabled:t.disavailable}},[t._v("注册")]),a("b-button",{staticStyle:{margin:"5px"},attrs:{type:"reset",variant:"danger"}},[t._v("清除")])],1)],1)],1)},i=[],r=(a("4d63"),a("ac1f"),a("25f0"),a("ac34")),l=a("51b6"),o=a("7ae9a"),s={data:function(){return{form:{userName:"",password:"",email:""},result:"",alert:!1,used:!1}},methods:{onSubmit:function(t){var e=this;t.preventDefault(),this.alert=!0,this.available&&Object(r["u"])(this.form.userName,o(this.form.password),this.form.email).then((function(t){t.data.flag?(alert("注册成功，请去邮箱接收激活链接"),e.$router.push("/login")):(alert("用户名重复"),e.used=!0)}))},onReset:function(t){t.preventDefault(),this.password="",this.userName="",this.email=""}},mounted:function(){},components:{nav_bar:l["a"]},computed:{available:function(){return!this.used&&this.validation_name_length&&this.form.password.length>7||!this.alert},disavailable:function(){return!this.available},validation_name_length:function(){return this.form.userName.length>4&&this.form.userName.length<13},validation_name:function(){return this.alert?!this.used&&this.validation_name_length:null},validation_email:function(){if(!this.alert)return null;var t=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");return t.test(this.form.email)},validation_password:function(){return this.alert?this.form.password.length>7:null},isUsed:function(){return this.used}}},u=s,c=(a("048f"),a("2877")),d=Object(c["a"])(u,n,i,!1,null,"8e999122",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-1c3bb90c.e02a36cf.js.map