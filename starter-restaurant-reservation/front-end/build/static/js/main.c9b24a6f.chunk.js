(this["webpackJsonpstarter-restaurant-reservation-front-end"]=this["webpackJsonpstarter-restaurant-reservation-front-end"]||[]).push([[0],{36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),s=n.n(c),i=n(4),o=n(6),l=n(0);var b=function(){return Object(l.jsx)("nav",{className:"navbar navbar-dark align-items-start p-0",children:Object(l.jsxs)("div",{className:"container-fluid d-flex flex-column p-0",children:[Object(l.jsx)(o.b,{className:"navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0",to:"/",children:Object(l.jsx)("div",{className:"sidebar-brand-text mx-3",children:Object(l.jsx)("span",{children:"Periodic Tables"})})}),Object(l.jsx)("hr",{className:"sidebar-divider my-0"}),Object(l.jsxs)("ul",{className:"nav navbar-nav text-light",id:"accordionSidebar",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(o.b,{className:"nav-link",to:"/dashboard",children:[Object(l.jsx)("span",{className:"oi oi-dashboard"}),"\xa0Dashboard"]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(o.b,{className:"nav-link",to:"/search",children:[Object(l.jsx)("span",{className:"oi oi-magnifying-glass"}),"\xa0Search"]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(o.b,{className:"nav-link",to:"/reservations/new",children:[Object(l.jsx)("span",{className:"oi oi-plus"}),"\xa0New Reservation"]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(o.b,{className:"nav-link",to:"/tables/new",children:[Object(l.jsx)("span",{className:"oi oi-layers"}),"\xa0New Table"]})})]}),Object(l.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(l.jsx)("button",{className:"btn rounded-circle border-0",id:"sidebarToggle",type:"button"})})]})})},u=n(2),j=n(3),d=n.n(j),m=n(10),h=/\d\d\d\d-\d\d-\d\d/;function O(e){return"".concat(e.getFullYear().toString(10),"-").concat((e.getMonth()+1).toString(10).padStart(2,"0"),"-").concat(e.getDate().toString(10).padStart(2,"0"))}function f(e){return e.reservation_date=e.reservation_date.match(h)[0],e}function x(e){return Array.isArray(e)?e.map(f):f(e)}var v="https://restaurant-reservation1.herokuapp.com",p=new Headers;function N(e,t,n){return _.apply(this,arguments)}function _(){return(_=Object(m.a)(d.a.mark((function e(t,n,a){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:if(204!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,r.json();case 8:if(!(c=e.sent).error){e.next=11;break}return e.abrupt("return",Promise.reject({message:c.error}));case 11:return e.abrupt("return",c.data);case 14:if(e.prev=14,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=19;break}throw console.error(e.t0.stack),e.t0;case 19:return e.abrupt("return",Promise.resolve(a));case 20:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function g(){return(g=Object(m.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(v,"/reservations"),r={method:"POST",headers:p,body:JSON.stringify({data:t}),signal:n},e.next=4,N(a,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(m.a)(d.a.mark((function e(t,n,a){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/reservations/").concat(n),c={method:"PUT",headers:p,body:JSON.stringify({data:t}),signal:a},e.next=4,N(r,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(d.a.mark((function e(t,n,a){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/reservations/").concat(n,"/status"),c={method:"PUT",headers:p,body:JSON.stringify({data:t}),signal:a},e.next=4,N(r,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return D.apply(this,arguments)}function D(){return(D=Object(m.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URL("".concat(v,"/reservations")),Object.entries(t).forEach((function(e){var t=Object(u.a)(e,2),n=t[0],r=t[1];return a.searchParams.append(n,r.toString())})),e.next=4,N(a,{headers:p,signal:n},[]).then(x).then(x);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(m.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(v,"/tables"),r={method:"POST",headers:p,body:JSON.stringify({data:t}),signal:n},e.next=4,N(a,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(m.a)(d.a.mark((function e(t,n,a){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/tables/").concat(t,"/seat"),c={method:"PUT",headers:p,body:JSON.stringify({data:{reservation_id:n}}),signal:a},e.next=4,N(r,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(m.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(v,"/tables/").concat(t,"/seat"),r={method:"DELETE",headers:p,body:JSON.stringify({data:{table_id:t}}),signal:n},e.next=4,N(a,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return F.apply(this,arguments)}function F(){return(F=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(v,"/tables")),e.next=3,N(n,{headers:p,signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(m.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(v,"/tables"),r={method:"DELETE",headers:p,body:JSON.stringify({data:{table_id:t}}),signal:n},e.next=4,N(a,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p.append("Content-Type","application/json");var J=function(){return new URLSearchParams(Object(i.h)().search)};var L=function(e){var t=e.error;return t&&Object(l.jsxs)("div",{className:"alert alert-danger m-2",children:["Error: ",t.message]})};var q=function(e){var t=e.reservation,n=Object(i.g)(),r=Object(a.useState)(t),c=Object(u.a)(r,2),s=c[0],o=c[1],b=Object(a.useState)(!1),j=Object(u.a)(b,2),d=j[0],m=j[1],h=Object(a.useState)(null),O=Object(u.a)(h,2),f=O[0],x=O[1];return Object(a.useEffect)((function(){"booked"!==s.status&&null!==s.status||m(!0)}),[s]),Object(l.jsxs)("div",{className:"card text-left card-background",children:[Object(l.jsx)(L,{error:f}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h4",{className:"card-title text-center",children:s.reservation_time}),Object(l.jsx)("p",{className:"card-text text-center",children:s.reservation_date}),Object(l.jsxs)("p",{className:"card-text",children:[s.first_name," ",s.last_name]}),Object(l.jsx)("p",{className:"card-text",children:s.mobile_number}),Object(l.jsxs)("p",{className:"card-text",children:["Party Size: ",s.people]}),Object(l.jsx)("p",{className:"text-center boldtext","data-reservation-id-status":s.reservation_id,children:s.status?s.status:"booked"}),Object(l.jsx)("div",{className:"d-flex justify-content-center mb-1",children:d?Object(l.jsx)("a",{href:"/reservations/".concat(s.reservation_id,"/seat"),onClick:function(e){var t=new AbortController;setTimeout((function(){t.abort()}),5e3),e.preventDefault(),x(null),m(!1),S({status:"seated"},s.reservation_id,t.signal).then((function(e){o(e),n.push("/reservations/".concat(s.reservation_id,"/seat"))})).catch(x)},className:"card-link btn btn-primary btn-sm",children:"Seat"}):Object(l.jsx)("div",{})}),Object(l.jsxs)("div",{className:"d-flex justify-content-center btn-group",children:[Object(l.jsx)("a",{href:"/reservations/".concat(s.reservation_id,"/edit"),className:"btn btn-sm btn-outline-dark",children:"EDIT"}),Object(l.jsx)("button",{"data-reservation-id-cancel":s.reservation_id,onClick:function(e){var t=new AbortController;setTimeout((function(){t.abort()}),5e3),e.preventDefault(),x(null),!0===window.confirm("Do you want to cancel this reservation? This cannot be undone.")&&S({status:"cancelled"},s.reservation_id,t.signal).then((function(e){o(e),n.go(0)})).catch(x)},className:"btn btn-danger btn-sm btn-outline-dark",children:"Cancel Reservation"})]})]})]})};var I=function(e){var t=e.table,n=Object(i.g)(),r=Object(a.useState)(t),c=Object(u.a)(r,2),s=c[0],o=c[1],b=Object(a.useState)("Free"),j=Object(u.a)(b,2),d=j[0],m=j[1],h=Object(a.useState)(null),O=Object(u.a)(h,2),f=O[0],x=O[1];return Object(a.useEffect)((function(){s.reservation_id?m("Occupied by reservation ID: ".concat(s.reservation_id)):m("Free")}),[s]),Object(l.jsxs)("div",{className:"card text-center card-background",children:[Object(l.jsx)(L,{error:f}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("p",{className:"card-text",children:["Table Name: ",s.table_name]}),Object(l.jsxs)("p",{className:"card-text",children:["Table Capacity: ",s.capacity]}),Object(l.jsx)("p",{className:"card-text","data-table-id-status":"".concat(s.table_id),children:d}),Object(l.jsx)("div",{className:"d-flex justify-content-center",children:"Free"===d?Object(l.jsx)("div",{}):Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"btn btn-primary","data-table-id-finish":s.table_id,onClick:function(e){var t=new AbortController;setTimeout((function(){t.abort()}),5e3),e.preventDefault(),x(null),!0===window.confirm("Is this table ready to seat new guests? This cannot be undone.")&&(S({status:"finished"},s.reservation_id).catch(x),function(e,t){return E.apply(this,arguments)}(s.table_id,t.signal).then((function(e){o(e),n.go(0)})).catch(x))},children:"FINISH"})," ",Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault()},children:"CANCEL"})]})}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(e){var t=new AbortController;setTimeout((function(){t.abort()}),5e3),e.preventDefault(),x(null),!0===window.confirm("Are you sure you want to delete this table? This cannot be undone.")&&(function(e,t){return P.apply(this,arguments)}(s.table_id,t.signal).catch(x),n.go(0))},children:"Delete"})]})]})};var M=function(){var e=O(new Date),t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(null),i=Object(u.a)(s,2),o=i[0],b=i[1],j=Object(a.useState)(e),d=Object(u.a)(j,2),m=d[0],h=d[1],f=Object(a.useState)(null),x=Object(u.a)(f,2),v=x[0],p=x[1];Object(a.useEffect)((function(){var t=new AbortController;return p(null),setTimeout((function(){t.abort()}),5e3),m===e?k({date:e},t.signal).then(c).catch(p):k({viewDate:m},t.signal).then(c).catch(p),function(){return t.abort()}}),[e,m]),Object(a.useEffect)((function(){var e=new AbortController;return p(null),setTimeout((function(){e.abort()}),5e3),A().then(b).catch(p),function(){return e.abort()}}),[]);var N=J().get("date");return Object(a.useEffect)((function(){N&&""!==N&&h(N)}),[N]),r?Object(l.jsxs)("main",{children:[Object(l.jsx)("div",{className:"d-flex mb-3 justify-content-center",children:Object(l.jsx)("h1",{children:"Your Dashboard"})}),Object(l.jsxs)("div",{className:"d-flex mb-3 justify-content-around",children:[Object(l.jsx)("button",{className:"btn btn-info",onClick:function(e){e.preventDefault(),h(function(e){var t=e.split("-"),n=Object(u.a)(t,3),a=n[0],r=n[1],c=n[2],s=new Date(a,r-=1,c);return s.setMonth(s.getMonth()),s.setDate(s.getDate()-1),O(s)}(m))},children:"Previous Day"}),Object(l.jsx)("button",{className:"btn btn-dark",onClick:function(t){t.preventDefault(),h(e)},children:"Today"}),Object(l.jsx)("button",{className:"btn btn-info",onClick:function(e){e.preventDefault(),h(function(e){var t=e.split("-"),n=Object(u.a)(t,3),a=n[0],r=n[1],c=n[2],s=new Date(a,r-=1,c);return s.setMonth(s.getMonth()),s.setDate(s.getDate()+1),O(s)}(m))},children:"Next Day"})]}),Object(l.jsx)(L,{error:v}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"d-flex mb-3 justify-content-center",children:Object(l.jsxs)("h4",{children:["Date: ",m]})}),Object(l.jsx)("div",{className:"row",children:r&&r.map((function(e){return Object(l.jsx)("div",{className:"col-md-6 mb-3",children:Object(l.jsx)(q,{reservation:e})},e.reservation_id)}))})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{className:"d-flex m-3 justify-content-center",children:"Tables"}),Object(l.jsx)("div",{className:"row",children:o&&o.map((function(e){return Object(l.jsx)("div",{className:"col-md-6 mb-3",children:Object(l.jsx)(I,{table:e})},e.table_id)}))})]})]}):Object(l.jsx)("div",{children:"Loading..."})};var R=function(){return Object(l.jsx)("div",{className:"NotFound",children:Object(l.jsx)("h1",{children:"Not Found"})})},U=n(13);var B=function(e){var t=e.handleSubmit,n=e.formData,a=e.setFormData,r=Object(i.g)();return Object(l.jsxs)("form",{className:"form-group",onSubmit:t,children:[Object(l.jsx)("label",{className:"form-label",children:"First Name:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"first_name",type:"text",required:!0,onChange:function(e){return a({first_name:e.target.value,last_name:n.last_name,mobile_number:n.mobile_number,reservation_date:n.reservation_date,reservation_time:n.reservation_time,people:n.people})},value:n.first_name,className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{className:"form-label",children:"Last Name:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"last_name",type:"text",required:!0,onChange:function(e){return a({first_name:n.first_name,last_name:e.target.value,mobile_number:n.mobile_number,reservation_date:n.reservation_date,reservation_time:n.reservation_time,people:n.people})},value:n.last_name,className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{className:"form-label",children:"Mobile Number:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"mobile_number",type:"text",required:!0,onChange:function(e){return a({first_name:n.first_name,last_name:n.last_name,mobile_number:e.target.value,reservation_date:n.reservation_date,reservation_time:n.reservation_time,people:n.people})},value:n.mobile_number,className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Reservation Date:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"reservation_date",type:"date",required:!0,onChange:function(e){return a({first_name:n.first_name,last_name:n.last_name,mobile_number:n.mobile_number,reservation_date:e.target.value,reservation_time:n.reservation_time,people:n.people})},value:n.reservation_date,className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Reservation Time:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"reservation_time",type:"time",required:!0,onChange:function(e){return a({first_name:n.first_name,last_name:n.last_name,mobile_number:n.mobile_number,reservation_date:n.reservation_date,reservation_time:e.target.value,people:n.people})},value:n.reservation_time,className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Amount of People:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"people",type:"number",required:!0,onChange:function(e){return a({first_name:n.first_name,last_name:n.last_name,mobile_number:n.mobile_number,reservation_date:n.reservation_date,reservation_time:n.reservation_time,people:e.target.valueAsNumber})},value:n.people,className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"submit"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),r.goBack()},children:"CANCEL"})]})]})};var H=function(){var e=Object(i.g)(),t=Object(a.useState)({first_name:"",last_name:"",mobile_number:"",reservation_date:"",reservation_time:"",people:""}),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(null),o=Object(u.a)(s,2),b=o[0],j=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(L,{error:b}),Object(l.jsx)("h3",{className:"d-flex m-3 justify-content-center",children:"New Reservation Form"}),Object(l.jsx)("div",{children:Object(l.jsx)(B,{formData:r,setFormData:c,handleSubmit:function(t){t.preventDefault(),j(null),function(e,t){return g.apply(this,arguments)}(Object(U.a)(Object(U.a)({},r),{},{status:"booked"})).then((function(){e.push("/dashboard?date=".concat(r.reservation_date))})).catch(j)}})})]})};var Y=function(){var e=Object(i.g)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),o=Object(u.a)(s,2),b=o[0],j=o[1],d=Object(a.useState)(null),m=Object(u.a)(d,2),h=m[0],O=m[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(L,{error:h}),Object(l.jsx)("h3",{className:"d-flex m-3 justify-content-center",children:"New Table Form"}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"form-group",onSubmit:function(t){t.preventDefault(),O(null),function(e,t){return C.apply(this,arguments)}({table_name:r,capacity:b}).then((function(){e.push("/dashboard")})).catch(O)},children:[Object(l.jsx)("label",{children:"Table Name:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"table_name",type:"text",required:!0,onChange:function(e){return c(e.target.value)},value:r,className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Table Capacity:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"capacity",type:"number",required:!0,onChange:function(e){return j(e.target.valueAsNumber)},value:b,className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"SUBMIT"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(t){t.preventDefault(),e.goBack()},children:"CANCEL"})]})]})})]})};var z=function(){var e=Object(i.g)(),t=Object(i.i)(),n=Object(a.useState)([]),r=Object(u.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)({}),b=Object(u.a)(o,2),j=b[0],d=b[1],m=Object(a.useState)(null),h=Object(u.a)(m,2),O=h[0],f=h[1];return Object(a.useEffect)((function(){var e=new AbortController;return f(null),A().then(s).catch(f),function(){return e.abort()}}),[]),c?Object(l.jsxs)("div",{children:[Object(l.jsx)(L,{error:O}),Object(l.jsxs)("h3",{className:"d-flex m-3 justify-content-center",children:["Seating for reservation ID: ",t.reservation_id]}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"form-group",onSubmit:function(n){n.preventDefault(),f(null),function(e,t,n){return T.apply(this,arguments)}(JSON.parse(j).table_id,t.reservation_id).then((function(t){var n=c.map((function(e){return e.table_id===t.table_id?t:e}));s(n),e.push("/dashboard")})).catch(f)},children:[Object(l.jsx)("label",{children:"Table Number:"}),Object(l.jsx)("br",{}),Object(l.jsxs)("select",{className:"form-control",name:"table_id",onChange:function(e){return d(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"--Please Choose a Table--"}),c&&c.map((function(e){return Object(l.jsxs)("option",{value:JSON.stringify(e),required:!0,children:[e.table_name," - ",e.capacity]},e.table_id)}))]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"SUBMIT"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(t){t.preventDefault(),e.goBack()},children:"Cancel"})]})]})})]}):Object(l.jsx)("div",{children:"Loading..."})};var G=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(u.a)(c,2),i=s[0],o=s[1],b=Object(a.useState)(!1),j=Object(u.a)(b,2),d=j[0],m=j[1];return Object(a.useEffect)((function(){i&&0===i.length&&m(!0)}),[i]),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:d&&Object(l.jsx)("p",{className:"alert alert-danger",children:"No reservations found."})}),Object(l.jsx)("h3",{className:"d-flex m-3 justify-content-center",children:"Search Form"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),k({mobile_number:n}).then((function(e){o(e)}))},children:[Object(l.jsx)("input",{name:"mobile_number",type:"text",placeholder:"Enter a customer's phone number",required:!0,onChange:function(e){return r(e.target.value)},value:n,className:"form-control"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"FIND"})})]}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{className:"list-group list-group-flush",children:i&&i.map((function(e){return Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsx)(q,{reservation:e})},e.reservation_id)}))})})]})]})};var K=function(){var e=Object(i.g)(),t=Object(i.i)(),n=Object(a.useState)({first_name:"",last_name:"",mobile_number:"",reservation_date:"",reservation_time:"",people:"",status:"booked"}),r=Object(u.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(null),b=Object(u.a)(o,2),j=b[0],d=b[1],m=Object(a.useState)([]),h=Object(u.a)(m,2),O=h[0],f=h[1],x=Object(a.useState)({}),v=Object(u.a)(x,2),p=v[0],N=v[1];return Object(a.useEffect)((function(){var e=new AbortController;return d(null),k({}).then((function(e){f(e)})).catch(d),function(){return e.abort()}}),[]),Object(a.useEffect)((function(){if(0!==O.length){var e=O.find((function(e){return e.reservation_id===Number(t.reservation_id)}));N(e),s(e)}}),[O,t]),Object(l.jsxs)("div",{children:[Object(l.jsx)(L,{error:j}),Object(l.jsx)("h3",{className:"d-flex m-3 justify-content-center",children:"Edit Reservation Form"}),Object(l.jsx)("div",{children:Object(l.jsx)(B,{formData:c,setFormData:s,handleSubmit:function(t){t.preventDefault(),d(null),function(e,t,n){return y.apply(this,arguments)}(Object(U.a)({},c),p.reservation_id).then((function(){e.push("/dashboard?date=".concat(c.reservation_date))})).catch(d)}})})]})};var Q=function(){return Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/",children:Object(l.jsx)(i.a,{to:"/dashboard"})}),Object(l.jsx)(i.b,{exact:!0,path:"/reservations",children:Object(l.jsx)(i.a,{to:"/dashboard"})}),Object(l.jsx)(i.b,{exact:!0,path:"/reservations/new",children:Object(l.jsx)(H,{})}),Object(l.jsx)(i.b,{path:"/reservations/:reservation_id/seat",children:Object(l.jsx)(z,{})}),Object(l.jsx)(i.b,{path:"/reservations/:reservation_id/edit",children:Object(l.jsx)(K,{})}),Object(l.jsx)(i.b,{path:"/tables/new",children:Object(l.jsx)(Y,{})}),Object(l.jsx)(i.b,{path:"/dashboard",children:Object(l.jsx)(M,{})}),Object(l.jsx)(i.b,{path:"/dashboard/:date",children:Object(l.jsx)(M,{})}),Object(l.jsx)(i.b,{path:"/search",children:Object(l.jsx)(G,{})}),Object(l.jsx)(i.b,{children:Object(l.jsx)(R,{})})]})};n(36);var V=function(){return Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-2 side-bar",children:Object(l.jsx)(b,{})}),Object(l.jsx)("div",{className:"col main",children:Object(l.jsx)(Q,{})})]})})};var W=function(){return Object(l.jsx)(i.d,{children:Object(l.jsx)(i.b,{path:"/",children:Object(l.jsx)(V,{})})})},X=n(21);n.n(X).a.config(),s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(W,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c9b24a6f.chunk.js.map