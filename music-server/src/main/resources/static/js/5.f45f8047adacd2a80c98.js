webpackJsonp([5],{aiVm:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("BO1k"),s=i.n(n),a=i("msXN"),o=i("gyMJ"),l={name:"comment-page",mixins:[a.a],data:function(){return{tableData:[],tempDate:[],multipleSelection:[],editVisible:!1,delVisible:!1,select_word:"",form:{id:"",userId:"",songId:"",songListId:"",content:"",type:"",up:""},idx:-1}},watch:{select_word:function(){if(""===this.select_word)this.tableData=this.tempDate;else{this.tableData=[];var t=!0,e=!1,i=void 0;try{for(var n,a=s()(this.tempDate);!(t=(n=a.next()).done);t=!0){var o=n.value;o.name.includes(this.select_word)&&this.tableData.push(o)}}catch(t){e=!0,i=t}finally{try{!t&&a.return&&a.return()}finally{if(e)throw i}}}}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.tableData=[],this.tempDate=[];var e=void 0;0===this.$route.query.type?e=o.a.getCommentOfSongId(this.$route.query.id):1===this.$route.query.type&&(e=o.a.getCommentOfSongListId(this.$route.query.id)),e.then(function(e){var i=!0,n=!1,a=void 0;try{for(var o,l=s()(e);!(i=(o=l.next()).done);i=!0){var r=o.value;t.getUsers(r.userId,r)}}catch(t){n=!0,a=t}finally{try{!i&&l.return&&l.return()}finally{if(n)throw a}}})},getUsers:function(t,e){var i=this;o.a.getUserOfId(t).then(function(t){var n=e;n.name=t[0].username,i.tableData.push(n),i.tempDate.push(n)}).catch(function(t){console.log(t)})},handleEdit:function(t){this.idx=t.id,this.form={id:t.id,userId:t.userId,songId:t.songId,songListId:t.songListId,content:t.content,type:t.type,up:t.up},this.editVisible=!0},saveEdit:function(){var t=this,e=new URLSearchParams;e.append("id",this.form.id),e.append("userId",this.form.userId),e.append("songId",null===this.form.songId?"":this.form.songId),e.append("songListId",null===this.form.songId?"":this.form.songListId),e.append("content",this.form.content),e.append("type",this.form.type),e.append("up",this.form.up),o.a.updateCommentMsg(e).then(function(e){1===e.code?(t.getData(),t.notify("编辑成功","success")):t.notify("编辑失败","error")}).catch(function(t){console.log(t)}),this.editVisible=!1},deleteRow:function(){var t=this;o.a.deleteComment(this.idx).then(function(e){e?(t.getData(),t.notify("删除成功","success")):t.notify("删除失败","error")}).catch(function(t){console.log(t)}),this.delVisible=!1}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),t._v(" 评论信息\n      ")])],1)],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",size:"mini"},on:{click:t.delAll}},[t._v("批量删除")]),t._v(" "),i("el-input",{staticClass:"handle-input mr10",attrs:{size:"mini",placeholder:"筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}})],1),t._v(" "),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,size:"mini",border:""},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"50"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"用户"}}),t._v(" "),i("el-table-column",{attrs:{prop:"content",label:"评论内容"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"400px"},on:{"update:visible":function(e){t.editVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"评论内容",size:"mini"}},[i("el-input",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[i("div",{staticClass:"del-dialog-cnt",attrs:{align:"center"}},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=i("VU/8")(l,r,!1,function(t){i("sPHK")},"data-v-7908dc22",null);e.default=c.exports},sPHK:function(t,e){}});
//# sourceMappingURL=5.f45f8047adacd2a80c98.js.map