(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{1:function(e,t,n){e.exports={wrap:"styles_wrap__2q_t6",inner:"styles_inner__17EtR",edit:"styles_edit__VU4G4",checkbox:"styles_checkbox__26n7X",btns:"styles_btns__3Epl8",btn:"styles_btn__qZtsS",form:"styles_form__35qBq",formBtn:"styles_formBtn__2DHjE",formInput:"styles_formInput__1S4WU"}},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),a=n.n(s),i=n(10),l=n.n(i),o=n(9),r=n(4),d=n(1),u=n.n(d),b=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1];return a?Object(c.jsx)("div",{className:u.a.edit,children:Object(c.jsxs)("form",{className:u.a.form,onSubmit:function(t){t.preventDefault();var n=t.target.elements.task;n.value&&e.onSubmitEdit&&(e.onSubmitEdit(e.index,n.value),i(!1))},children:[Object(c.jsx)("input",{type:"text",name:"task",className:u.a.formInput,defaultValue:e.label}),Object(c.jsx)("button",{className:u.a.formBtn,type:"submit",children:"\u6c7a\u5b9a"})]})}):Object(c.jsxs)("div",{className:u.a.wrap,children:[Object(c.jsxs)("div",{className:u.a.inner,children:[Object(c.jsx)("input",{className:u.a.checkbox,type:"checkbox",checked:e.isChecked,onChange:function(t){e.toggleChecked&&e.toggleChecked(e.index,t.target.checked)}}),Object(c.jsx)("span",{children:e.label})]}),Object(c.jsxs)("div",{className:u.a.btns,children:[Object(c.jsx)("button",{type:"button",className:u.a.btn,onClick:function(){return i(!0)},children:"\u7de8\u96c6"}),Object(c.jsx)("button",{type:"button",className:u.a.btn,onClick:function(){e.clickDelete&&e.clickDelete(e.index)},children:"\u524a\u9664"})]})]})},j=n(7),m=n.n(j),p=function(e){var t=function(t,n){e.toggleChecked(t,n)},n=function(t,n){e.onSubmitEdit(t,n)},s=function(t){e.clickDelete(t)};return 0===e.list.length?Object(c.jsx)("div",{className:m.a.nodata,children:Object(c.jsx)("p",{children:"\u30bf\u30b9\u30af\u306f\u3042\u308a\u307e\u305b\u3093"})}):Object(c.jsxs)("div",{className:m.a.list,children:[e.list.map((function(e,a){return Object(c.jsx)("div",{children:Object(c.jsx)(b,{id:e.id,index:a,label:e.label,isChecked:e.isChecked,toggleChecked:t,onSubmitEdit:n,clickDelete:s})},e.id)})),Object(c.jsx)("div",{className:m.a.deleteArea,children:Object(c.jsx)("button",{type:"button",onClick:function(){e.deleteCompleteTask()},children:"\u51e6\u7406\u6e08\u307f\u306e\u30bf\u30b9\u30af\u3092\u524a\u9664"})})]})},_=n(5),f=n.n(_),h=function(e){return Object(c.jsx)("div",{className:f.a.wrap,children:Object(c.jsxs)("form",{className:f.a.form,onSubmit:function(t){t.preventDefault();var n=t.target.elements.task;n.value&&(e.onFormSubmit(n.value),n.value="")},children:[Object(c.jsx)("input",{className:f.a.input,type:"text",name:"task"}),Object(c.jsx)("button",{className:f.a.button,type:"submit",children:"\u4f5c\u6210"})]})})};var x=function(){var e=localStorage.getItem("reactTodoAppId")?Number(localStorage.getItem("reactTodoAppId")):0,t=localStorage.getItem("reactTodoAppTasks"),n=t?JSON.parse(t):[],a=Object(s.useState)(e),i=Object(r.a)(a,2),l=i[0],d=i[1],u=Object(s.useState)(n),b=Object(r.a)(u,2),j=b[0],m=b[1],_=function(e){m(Object(o.a)(e)),localStorage.setItem("reactTodoAppTasks",JSON.stringify(e))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(h,{onFormSubmit:function(e){var t={id:l,label:e,isChecked:!1},n=[].concat(Object(o.a)(j),[t]);_(n);var c=l+1;d(c),localStorage.setItem("reactTodoAppId",String(c))}}),Object(c.jsx)(p,{list:j,toggleChecked:function(e,t){j[e].isChecked=t,_(j)},onSubmitEdit:function(e,t){j[e].label=t,_(j)},clickDelete:function(e){j.splice(e,1),_(j)},deleteCompleteTask:function(){var e=j.filter((function(e){return!e.isChecked}));_(e)}})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};n(16);l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),O()},5:function(e,t,n){e.exports={wrap:"styles_wrap__l5kXX",form:"styles_form__18X5T",input:"styles_input__2p_T6",button:"styles_button__2xcgH"}},7:function(e,t,n){e.exports={list:"styles_list__3dyeM",nodata:"styles_nodata__qzstC",deleteArea:"styles_deleteArea__30PPC"}}},[[17,1,2]]]);
//# sourceMappingURL=main.5a290bc9.chunk.js.map