(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),i=n.n(r),c=(n(26),n(5)),l=n(6),u=n(8),s=n(7),d=n(9),m=n(34),f=n(35),h=n(16),p=n(36),b=(n(27),n(12)),v=n(15),E=n.n(v);function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.name=e,this.isDone=t,this.id=E()()}var O=new j,g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={incomingTask:O,todoList:[new j("get bread"),new j("study german"),new j("code"),new j("play")]},n.removeTodo=function(e){n.setState({todoList:n.state.todoList.filter(function(t){return t.id!==e})})},n.addItem=function(e){e.preventDefault();var t=n.state,a=t.todoList,o=t.incomingTask;n.setState({todoList:[o].concat(Object(b.a)(a)),incomingTask:O})},n.onHandleChange=function(e){n.setState({incomingTask:new j(e.target.value)})},n.editTodo=function(e){var t=n.state.todoList,a=t.filter(function(t){return t.id===e}).pop(),o=t.filter(function(t){return t.id!==e});n.setState({incomingTask:a,todoList:o})},n.doneTodo=function(e){var t=n.state.todoList,a=t.filter(function(t){return t.id===e}).pop();a.isDone=!0;var o=t.filter(function(t){return t.id!==e});n.setState({todoList:[].concat(Object(b.a)(o),[a])})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todoList;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(t){return e.addItem(t)}},o.a.createElement("input",{placeholder:"Task",onChange:function(t){return e.onHandleChange(t)},value:this.state.incomingTask.name}),o.a.createElement("button",{type:"submit"}," Add Task ")),o.a.createElement(k,{todoList:t,delete:function(t){return e.removeTodo(t)},edit:function(t){return e.editTodo(t)},done:function(t){return e.doneTodo(t)}}))}}]),t}(a.Component),k=function(e){return o.a.createElement("div",null,e.todoList.map(function(t){var n=t.id,a=t.name,r=t.isDone;return o.a.createElement("div",{key:n},o.a.createElement("span",{style:r?{textDecoration:"line-through"}:{}},a),o.a.createElement("button",{onClick:function(){return e.edit(n)}},"Edit"),o.a.createElement("button",{onClick:function(){return e.delete(n)}},"Delete"),o.a.createElement("button",{onClick:function(){return e.done(n)},style:r?{display:"none"}:{}},"Mark Done"))}))},w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"I am BasicReduxComponent"))}}]),t}(a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match.url;return o.a.createElement("div",{className:"Blog"},o.a.createElement("header",null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(f.a,{to:"/",exact:!0},"Home")),o.a.createElement("li",null,o.a.createElement(f.a,{to:{pathname:"".concat(e,"/todo")}},"Todo")),o.a.createElement("li",null,o.a.createElement(f.a,{to:{pathname:"".concat(e,"/basicRedux")}},"Basic Redux"))))),o.a.createElement(h.a,{path:"/",exact:!0,render:function(){return o.a.createElement("h1",null,"No body home")}}),o.a.createElement(h.a,{path:"/todo",component:g}),o.a.createElement(h.a,{path:"/basicRedux",component:w}))}}]),t}(a.Component),T=Object(p.a)(y),L=(n(32),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(T,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.6b9bf524.chunk.js.map