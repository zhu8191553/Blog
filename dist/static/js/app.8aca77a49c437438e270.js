webpackJsonp([23],{"9/MJ":function(e,t,n){"use strict";var o=n("//Fk"),i=n.n(o),a=n("mtWM"),s=n.n(a),r=n("zL8q");n.n(r);console.log("http://localhost:5000");var l,c=s.a.create({baseURL:"http://localhost:5000",timeout:5e3,withCredentials:!0});c.interceptors.request.use(function(e){return l=r.Loading.service({fullscreen:!0}),e},function(e){return l.close(),r.Message.error({message:"加载超时"}),i.a.reject(e)}),c.interceptors.response.use(function(e){return l.close(),e},function(e){return l.close(),r.Message.error({message:"加载失败"}),i.a.reject(e)}),t.a=c},BfUi:function(e,t){function n(e,t){var n=t.getContext("2d");n.fillStyle="#0f88eb",n.clearRect(0,0,1e3,1e3),n.font="80px 'Microsoft Yahei'",n.fillText(e,0,100)}var o=void 0;t.install=function(e,t){e.prototype.createCode=function(e){o="";for(var t=e,i=new Array(1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"),a=0;a<4;a++){var s=Math.floor(60*Math.random());o+=i[s]}return 4!=o.length&&this.createCode(),n(o,t),o},e.prototype.sucMessage=function(e){this.$message({message:e,type:"success",duration:1e3})},e.prototype.sortFtimes=function(e,t){return t.fTimes-e.fTimes},e.prototype.g_debounce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=void 0,i=void 0,a=void 0,s=function(){return setTimeout(function(){o=null,n||(e.apply(i,a),i=a=null)},t)};return function(){if(o)clearTimeout(o),o=s();else{o=s();for(var t=arguments.length,r=Array(t),l=0;l<t;l++)r[l]=arguments[l];n?e.apply(this,r):(i=this,a=r)}}}}},Cz8s:function(e,t,n){"use strict";function o(e){n("iw2a")}var i={data:function(){return{activeIndex:"",searchValue:""}},props:{loginStatic:{required:!0},privateMessageData:{required:!0}},created:function(){},methods:{toDetail:function(){this.$router.push({path:"/privateMessageDetail/"+this.loginStatic.uid})},logOut:function(){this.$emit("logOut")},toHome:function(){this.$router.push({path:"home"})},search:function(){this.searchValue&&this.$router.push({path:"/search/"+this.searchValue+"/first"})}}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal","text-color":"#8590a6"}},[n("div",{staticClass:"logo",on:{click:e.toHome}},[e._v("YUYAN")]),e._v(" "),n("el-menu-item",{staticClass:"header_home_item",attrs:{index:"1"}},[n("router-link",{attrs:{to:"/home"}},[e._v("首页")])],1),e._v(" "),n("el-menu-item",{staticClass:"header_book_item",attrs:{index:"2"}},[n("router-link",{attrs:{to:"/bookStore"}},[e._v("书城")])],1),e._v(" "),n("el-menu-item",{staticClass:"header_topic_item",attrs:{index:"3"}},[n("router-link",{attrs:{to:"/topic"}},[e._v("话题")])],1),e._v(" "),n("el-menu-item",{staticClass:"header_topic_item",attrs:{index:"4"}},[n("router-link",{attrs:{to:"/answer"}},[e._v("回答")])],1),e._v(" "),n("el-menu-item",{attrs:{index:"5"}},[n("el-input",{staticClass:"search_input",attrs:{size:"small",placeholder:"请输入内容"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}},[n("el-button",{staticClass:"search_input_button",attrs:{slot:"append",icon:"el-icon-search",type:"primary"},on:{click:e.search},slot:"append"})],1),e._v(" "),n("el-input",{staticClass:"search_input_mobile",attrs:{size:"small",placeholder:"请输入内容"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1),e._v(" "),n("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.loginStatic.isNotLogin,expression:"loginStatic.isNotLogin"}],staticClass:"header_reg_item",attrs:{index:"6"}},[n("router-link",{attrs:{to:"/reg"}},[e._v("注册/登陆")])],1),e._v(" "),n("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.loginStatic.isLogin,expression:"loginStatic.isLogin"}],staticClass:"sixin",attrs:{index:"7"}},[n("el-dropdown",{attrs:{trigger:"click",placement:"bottom"}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-bell header-icon"}),n("span",{staticStyle:{color:"#fa5555"}},[e._v("("+e._s(e.privateMessageData.length)+")")])]),e._v(" "),n("el-dropdown-menu",{staticClass:"dropdown_container",attrs:{slot:"dropdown"},slot:"dropdown"},[n("div",{staticClass:"dropdown_head"},[e._v("\n              我的私信\n            ")]),e._v(" "),e._l(e.privateMessageData,function(t){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.privateMessageData.length,expression:"privateMessageData.length"}],key:t,staticClass:"dropdown_content",on:{click:e.toDetail}},[n("img",{staticClass:"dropdown_content_img",attrs:{src:t[t.length-1].userInfo.senderUpic}}),e._v(" "),n("div",{staticClass:"dropdown_content_t"},[n("span",{class:t[t.length-1].userInfo.senderUsername===e.loginStatic.username?"aaa":null,staticStyle:{"font-size":"16px","font-weight":"700"}},[e._v(e._s(t[t.length-1].userInfo.senderUsername===e.loginStatic.username?"我":t[t.length-1].userInfo.senderUsername))]),e._v(" "),n("div",{staticClass:"dropdown_content_text"},[e._v(e._s(t[t.length-1].content))])]),e._v(" "),n("div",{staticClass:"dropdown_content_time"},[e._v("\n                  "+e._s(t[t.length-1].createdAt)+"\n              ")])])}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.privateMessageData.length,expression:"!privateMessageData.length"}],staticClass:"no_private_message"},[e._v("\n              没有人给你发私信哦(ಥ﹏ಥ)\n            ")])],2)],1)],1),e._v(" "),n("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.loginStatic.isLogin,expression:"loginStatic.isLogin"}],staticClass:"header_person_item",attrs:{index:"8"}},[n("el-dropdown",{attrs:{trigger:"click",placement:"bottom"}},[n("span",{staticClass:"el-dropdown-link"},[n("img",{staticClass:"header-avatar",attrs:{src:e.loginStatic.upic?e.loginStatic.upic:e.$var.defaultAvatar}})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("router-link",{attrs:{to:{name:"personnalCenter",params:{uid:e.loginStatic.uid,who:"me",tab:"first"}}}},[e._v("个人中心")])],1),e._v(" "),n("el-dropdown-item",{staticClass:"header_todo_item"},[n("router-link",{attrs:{to:"/todoList"}},[e._v("Todo List")])],1),e._v(" "),n("el-dropdown-item",{staticClass:"header_todo_item"},[n("router-link",{attrs:{to:"/gameEat"}},[e._v("吃豆豆(游戏)")])],1)],1)],1)],1),e._v(" "),n("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.loginStatic.isLogin,expression:"loginStatic.isLogin"}],staticClass:"header_logout_item",attrs:{index:"9"},on:{click:e.logOut}},[e._v("注销")]),e._v(" "),n("el-menu-item",{attrs:{index:"10"}},[n("el-dropdown",[n("i",{staticClass:"el-icon-menu header_moble_menu"}),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("router-link",{attrs:{to:"/home"}},[e._v("首页")])],1),e._v(" "),n("el-dropdown-item",[n("router-link",{attrs:{to:"/bookStore"}},[e._v("书城")])],1),e._v(" "),n("el-dropdown-item",[n("router-link",{attrs:{to:"/topic"}},[e._v("话题")])],1),e._v(" "),n("el-dropdown-item",[n("div",[n("router-link",{attrs:{to:"/todoList"}},[e._v("Todo List")])],1)]),e._v(" "),n("el-dropdown-item",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loginStatic.isLogin,expression:"loginStatic.isLogin"}],attrs:{index:"9"}},[n("router-link",{attrs:{to:{name:"personnalCenter",params:{uid:e.loginStatic.uid,who:"me",tab:"first"}}}},[e._v(e._s(e.loginStatic.username))])],1)]),e._v(" "),n("el-dropdown-item",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loginStatic.isNotLogin,expression:"loginStatic.isNotLogin"}]},[n("router-link",{attrs:{to:"/reg"}},[e._v("注册/登陆")])],1)]),e._v(" "),n("el-dropdown-item",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loginStatic.isLogin,expression:"loginStatic.isLogin"}],on:{click:e.toDetail}},[e._v("私信")])]),e._v(" "),n("el-dropdown-item",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loginStatic.isLogin,expression:"loginStatic.isLogin"}],attrs:{index:"10"},on:{click:e.logOut}},[e._v("注销")])])],1)],1)],1)],1)},s=[],r={render:a,staticRenderFns:s},l=r,c=n("VU/8"),u=o,d=c(i,l,!1,u,null,null);t.a=d.exports},NHnr:function(e,t,n){"use strict";function o(e){n("XM5N")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a=n("zL8q"),s=n.n(a),r=(n("tvR6"),n("9/MJ")),l=function(){return r.a.get("/api/examine")},c=function(){return r.a.get("/api/logOut")},u=n("Cz8s"),d=document.documentElement.scrollTop,m={name:"app",components:{myHeader:u.a},data:function(){return{loginStatic:{isLogin:!1,isNotLogin:!0,username:"",uid:"",upic:""},showToTop:!1,privateMessageData:""}},created:function(){this.userExamine()},mounted:function(){window.addEventListener("scroll",this.g_debounce(this.handleScroll))},methods:{getPrivateMessage:function(){var e=this,t={uid:this.loginStatic.uid};r.a.post("/api/getPrivateMessage",t).then(function(t){e.privateMessageData=t.data}).catch(function(e){console.log(e)})},userExamine:function(){var e=this;l().then(function(t){var n=t.data;n.isLogin?(e.loginStatic.isLogin=!0,e.loginStatic.isNotLogin=!1,e.loginStatic.username=n.username,e.loginStatic.uid=n.uid,e.loginStatic.upic=n.upic):(e.loginStatic.isLogin=!1,e.loginStatic.isNotLogin=!0),e.getPrivateMessage()}).catch(function(e){console.log(e)})},handleScroll:function(){d>200?this.showToTop=!0:d<200&&(this.showToTop=!1)},getScrollTop:function(){d=0},logOut:function(){var e=this;this.$confirm("是否注销当前用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){c().then(function(t){e.loginStatic.isLogin=!1,e.loginStatic.isNotLogin=!0,e.$message({type:"success",message:"注销成功!",duration:1e3}),e.$router.push("/home")}).catch(function(e){})}).catch(function(){e.$message({type:"info",message:"已取消注销",duration:1e3})})}}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-collapse-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showToTop,expression:"showToTop"}],staticClass:"toTop transition-box",on:{click:e.getScrollTop}},[n("svg",{staticClass:"Zi Zi--BackToTop",attrs:{title:"回到顶部",fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{d:"M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"}})])])]),e._v(" "),n("router-view",{attrs:{loginStatic:e.loginStatic,privateMessageData:e.privateMessageData},on:{userExamine:e.userExamine,logOut:e.logOut}})],1)},h=[],v={render:p,staticRenderFns:h},g=v,f=n("VU/8"),_=o,w=f(m,g,!1,_,null,null),S=w.exports,b=n("/ocq");i.default.use(b.a);var k=new b.a({mode:"history",routes:[{path:"/",redirect:"/begin"},{path:"/begin",name:"begin",component:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"WIjR"))}},{path:"/home",name:"home",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"26dS"))}},{path:"/detail",name:"detail",component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"GwIj"))}},{path:"/reg",name:"reg",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"z3zf"))}},{path:"/write/:aid",name:"write",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"qon6"))}},{path:"/articleDetail/:aid/:upic/:username/:createdAt/:uid",name:"articleDetail",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"Y1VG"))}},{path:"/personnalCenter/:uid/:who/:tab",name:"personnalCenter",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"SnaO"))}},{path:"/answer",name:"answer",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"UfdR"))}},{path:"/answerDetail/:answerid",name:"answerDetail",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"qhBK"))}},{path:"/topic",name:"topic",component:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"cOqS"))}},{path:"/search/:value/:tab",name:"search",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"2QH8"))}},{path:"/topicDetail/:topic/:tab",name:"topicDetail",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"INqO"))}},{path:"/privateMessageDetail/:uid",name:"privateMessageDetail",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"W+f5"))}},{path:"/todoList",name:"todoList",component:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"vqJZ"))}},{path:"/adminHome/:password/:tab",name:"adminHome",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"d2FM"))}},{path:"/admin",name:"admin",component:function(){return n.e(6).then(n.bind(null,"3SYa"))}},{path:"/bookStore",name:"bookStore",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"Eiko"))}},{path:"/bookStoreDetail/:id",name:"bookStoreDetail",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"QPEg"))}},{path:"/myBook/:id",name:"myBook",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"DmQc"))}},{path:"/gameEat",name:"gameEat",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"aDzN"))}},{path:"*",component:function(){return n.e(20).then(n.bind(null,"G7/3"))}}]});k.beforeEach(function(e,t,n){e.meta.requireAuth?store.getters.token?n():(n({path:"/"}),store.commit("SHOW_SIGN_DIALOG")):n()});var x=k,C=n("BfUi"),L=n.n(C);i.default.use(s.a),i.default.config.productionTip=!1,i.default.prototype.$http=r.a,i.default.use(L.a),i.default.prototype.$var={serverUrl:"http://localhost:5000",defaultAvatar:"/static/avatar/default.jpg"},new i.default({el:"#app",router:x,template:"<App/>",components:{App:S}})},XM5N:function(e,t){},iw2a:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8aca77a49c437438e270.js.map