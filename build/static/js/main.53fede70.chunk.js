(this.webpackJsonpmittausfront=this.webpackJsonpmittausfront||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),u=n.n(c),o=n(15),i=n.n(o),s=n(19),l=n(16),d=n(39),f=n(41),p=n(31),m=n.n(p),h="https://mittaustyokalu.herokuapp.com/api/measurements/",v={addNew:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post(h,t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),del:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.delete(h+t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.put(h.concat(t.id),t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getAll:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(h);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},b=n(6),w=n.n(b);function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(a.useState)(e),n=Object(l.a)(t,2),r=n[0],c=n[1],u=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getAll();case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){u()}),[]);var o=function(){u()};return[r,o]}j.propTypes={initialStatus:w.a.arrayOf(w.a.object)};var O=j,g=n(56),E=n(23),x=n(8),k=n(5);var y=function(e){var t=e.errors,n=Object(k.a)(e,["errors"]);return r.a.createElement(E.c.Cell,n,r.a.Children.map(n.children,(function(e){return e&&"commit"===e.props.id?r.a.cloneElement(e,{disabled:t[n.tableRow.rowId]}):e})))},C=n(63),S=n(64),R=n.n(S),I=n(62),A=n.n(I),N=[{name:"id",title:"Tunnus"},{name:"name",title:"Mittaus",editable:!0},{name:"quantity",title:"Mittayksikk\xf6",editable:!0},{name:"referenceValueLower",title:"Alempi viitearvo",editable:!0,number:!0},{name:"referenceValueUpper",title:"Ylempi viitearvo",editable:!0,number:!0}];function D(e){var t=e.data,n=e.handleEdit,c=e.handleDelete,u=e.handleSubmitNew,o=Object(a.useState)([]),i=Object(l.a)(o,2),s=i[0],d=i[1],f=Object(a.useState)([]),p=Object(l.a)(f,2),m=p[0],h=p[1],v=Object(a.useState)([{columnName:"id",editingEnabled:!1}]),b=Object(l.a)(v,1)[0],w=Object(a.useState)({}),j=Object(l.a)(w,2),O=j[0],k=j[1],S=Object(a.useCallback)(A()((function(e){var t=I(e,N);k(t)}),200),[]),I=function(e,t){return Object(C.a)((function(e){return t.some((function(t){return t.number&&void 0!==e[t.name]&&!R()(e[t.name])}))}),e)};return r.a.createElement("div",null,r.a.createElement(E.a,{rows:t,columns:N},r.a.createElement(x.c,{editingRowIds:s,onEditingRowIdsChange:d,onRowChangesChange:function(e){S(e)},deletedRowIds:m,onDeletedRowIdsChange:h,onCommitChanges:function(e){var a=e.added,r=e.changed,o=e.deleted,i=[],s=[];a&&a.forEach((function(e){u(e)})),r&&t.map((function(e){r[e.id-1]&&i.push(Object(g.a)({},e,{},r[e.id-1]))})),o&&(s=o.map((function(e){return t[e]}))),i.forEach((function(e){n(e)})),s.forEach((function(e){c(e)}))},onAddedRowsChange:function(e){S(Object.assign({},e))},columnExtensions:b}),r.a.createElement(E.b,null),r.a.createElement(E.e,null),r.a.createElement(E.d,null),r.a.createElement(E.c,{cellComponent:function(e){return r.a.createElement(y,Object.assign({},e,{errors:O}))},showAddCommand:!0,showEditCommand:!0,showDeleteCommand:!0})))}D.defaultProps={data:[]};var M=D;function B(){var e=Object(d.a)(["\n\n"]);return B=function(){return e},e}function J(){var e=Object(d.a)(["\n  margin-top: 2em\n  display: flex\n  flex: 1 1 auto\n"]);return J=function(){return e},e}var T=f.a.div(J()),V=f.a.h2(B());var W=function(){var e=O(),t=Object(l.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.addNew(t);case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.del(t.id);case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.update(t);case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(T,null,r.a.createElement(V,null,"Mittaustietokanta"),r.a.createElement(M,{data:n,handleEdit:o,handleDelete:u,handleChanges:function(){},handleSubmitNew:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,n){e.exports=n(105)}},[[78,1,2]]]);
//# sourceMappingURL=main.53fede70.chunk.js.map