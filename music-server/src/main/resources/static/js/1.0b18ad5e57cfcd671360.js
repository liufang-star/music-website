webpackJsonp([1],{"+Bbs":function(t,e){},"1Bnj":function(t,e,n){t.exports=n.p+"static/img/user.83d9cc8.jpg"},C0yg:function(t,e){},Pl8o:function(t,e){},QCHQ:function(t,e,n){"use strict";var s=n("Dd8w"),i=n.n(s),o=n("NYxO"),a={name:"song-audio",computed:i()({},Object(o.b)(["id","url","isPlay"])),watch:{isPlay:function(){this.togglePlay()}},methods:{togglePlay:function(){var t=document.querySelector("#player");this.isPlay?t.play():t.pause()},startPlay:function(){document.querySelector("#player").play()},ended:function(){this.isPlay=!1}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"song-audio"},[e("audio",{attrs:{id:"player",controls:"controls",preload:"true",src:this.url},on:{canplay:this.startPlay,ended:this.ended}})])},staticRenderFns:[]};var c=n("VU/8")(a,l,!1,function(t){n("Pl8o")},null,null);e.a=c.exports},bbJb:function(t,e){},lO7g:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("QCHQ"),i=new(n("7+uW").default),o={data:function(){return{collapse:!0,fullscreen:!1,username:"admin"}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()},methods:{handleCommand:function(t){"loginout"===t&&this.$router.push("/")},collapseChage:function(){this.collapse=!this.collapse,i.$emit("collapse",this.collapse)}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[n("i",{staticClass:"el-icon-s-unfold"})]),t._v(" "),n("div",{staticClass:"logo"},[t._v("Liu-music 后台管理")]),t._v(" "),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[t._m(0),t._v(" "),n("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n          "+t._s(t.username)+"\n          "),n("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-avator"},[e("img",{attrs:{src:n("1Bnj")}})])}]};var l=n("VU/8")(o,a,!1,function(t){n("bbJb")},"data-v-8d34cfbe",null).exports,c={data:function(){return{collapse:!1,items:[{icon:"el-icon-s-data",index:"info",title:"系统首页"},{icon:"el-icon-user-solid",index:"consumer",title:"用户管理"},{icon:"el-icon-service",index:"singer",title:"歌手管理"},{icon:"el-icon-document",index:"songList",title:"歌单管理"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;i.$on("collapse",function(e){t.collapse=e})}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#242526","text-color":"#B0B3B2","active-text-color":"#ffffff","unique-opened":"",router:""}},[t._l(t.items,function(e){return[[n("el-menu-item",{key:e.index,attrs:{index:e.index}},[n("i",{class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},staticRenderFns:[]};var u=n("VU/8")(c,r,!1,function(t){n("+Bbs")},"data-v-654b8ae7",null).exports,d={components:{SongAudio:s.a,TheHeader:l,TheAside:u},data:function(){return{collapse:!1}},created:function(){var t=this;i.$on("collapse",function(e){t.collapse=e})}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("song-audio"),this._v(" "),e("the-header"),this._v(" "),e("the-aside"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("div",{staticClass:"content"},[e("router-view")],1)])],1)},staticRenderFns:[]};var f=n("VU/8")(d,p,!1,function(t){n("C0yg")},null,null);e.default=f.exports}});
//# sourceMappingURL=1.0b18ad5e57cfcd671360.js.map