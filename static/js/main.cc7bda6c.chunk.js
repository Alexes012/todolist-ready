(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){},20:function(t,e,n){},32:function(t,e,n){t.exports=n(60)},37:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(12),i=n.n(a),c=(n(37),n(1)),s=n(13),d=n(3),l=n(2),u=n(4),p=(n(11),n(14)),T=(n(20),function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={editMode:!1,title:n.props.task.title},n.onIsDoneChanged=function(t){var e=t.currentTarget.checked?2:0;n.props.changeStatus(n.props.task.id,e)},n.onTitleChanged=function(t){n.setState({title:t.currentTarget.value})},n.activateEditMode=function(){n.setState({editMode:!0})},n.deactivateEditMode=function(){n.props.changeTitle(n.props.task.id,n.state.title),n.setState({editMode:!1})},n.onDeleteTask=function(){n.props.deleteTask(n.props.task.id)},n.render=function(){var t=n.props.task.isDone?"todoList-task done":"todoList-task";switch(n.props.task.priority){case 0:"Low";break;case 1:"Middle";break;case 2:"High";break;case 3:"Urgently";break;case 4:"Later"}return r.a.createElement("div",{className:t},r.a.createElement("input",{type:"checkbox",checked:2===n.props.task.status,onChange:n.onIsDoneChanged}),n.state.editMode?r.a.createElement("input",{onBlur:n.deactivateEditMode,onChange:n.onTitleChanged,autoFocus:!0,value:n.state.title}):r.a.createElement("span",{onClick:n.activateEditMode},n.props.task.title)," ",r.a.createElement("button",{onClick:n.onDeleteTask},"X"))},n}return Object(u.a)(e,t),e}(r.a.Component)),f=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).render=function(){var t=n.props.tasks.map(function(t){return r.a.createElement(T,{task:t,key:t.id,changeStatus:n.props.changeStatus,changeTitle:n.props.changeTitle,deleteTask:n.props.deleteTask})});return r.a.createElement("div",{className:"todoList-tasks"},t)},n}return Object(u.a)(e,t),e}(r.a.Component),E=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={isHidden:!1},n.onAllFilterClick=function(){n.props.changeFilter("All")},n.onCompletedFilterClick=function(){n.props.changeFilter("Completed")},n.onActiveFilterClick=function(){n.props.changeFilter("Active")},n.onShowFiltersClick=function(){n.setState({isHidden:!0})},n.onHideFiltersClick=function(){n.setState({isHidden:!1})},n.render=function(){var t="All"===n.props.filterValue?"filter-active":"",e="Completed"===n.props.filterValue?"filter-active":"",o="Active"===n.props.filterValue?"filter-active":"";return r.a.createElement("div",{className:"todoList-footer"},!n.state.isHidden&&r.a.createElement("div",null,r.a.createElement("button",{onClick:n.onAllFilterClick,className:t},"All"),r.a.createElement("button",{onClick:n.onCompletedFilterClick,className:e},"Completed"),r.a.createElement("button",{onClick:n.onActiveFilterClick,className:o},"Active")),!n.state.isHidden&&r.a.createElement("span",{onClick:n.onShowFiltersClick},"hide"),n.state.isHidden&&r.a.createElement("span",{onClick:n.onHideFiltersClick},"show"))},n}return Object(u.a)(e,t),e}(r.a.Component),S=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={editMode:!1,title:n.props.title},n.onTitleChanged=function(t){n.setState({title:t.currentTarget.value})},n.deactivateEditMode=function(){n.setState({editMode:!1}),n.props.updateTitle(n.state.title)},n.activateEditMode=function(){n.setState({editMode:!0})},n.render=function(){return r.a.createElement(r.a.Fragment,null,n.state.editMode?r.a.createElement("input",{value:n.state.title,autoFocus:!0,onBlur:n.deactivateEditMode,onChange:n.onTitleChanged}):r.a.createElement("h3",{className:"todoList-header__title",onClick:n.activateEditMode},n.props.title))},n}return Object(u.a)(e,t),e}(r.a.Component),m=n(7),O=n.n(m),h=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={error:!1,title:""},n.onAddItemClick=function(){var t=n.state.title;n.setState({title:""}),""===t?n.setState({error:!0}):(n.setState({error:!1}),n.props.addItem(t))},n.onTitleChanged=function(t){n.setState({error:!1,title:t.currentTarget.value})},n.onKeyPress=function(t){"Enter"===t.key&&n.onAddItemClick()},n.render=function(){n.state.error;return r.a.createElement("div",{className:O.a.wrapper},r.a.createElement("div",{className:O.a.newTodolist},r.a.createElement("input",{className:O.a.classNameForInput,type:"text",placeholder:"New item name",onChange:n.onTitleChanged,onKeyPress:n.onKeyPress,value:n.state.title}),r.a.createElement("div",{className:O.a.buttonsColl},r.a.createElement("div",{className:O.a.customBtn},r.a.createElement("button",{className:O.a.btn9,onClick:n.onAddItemClick},"Add")))))},n}return Object(u.a)(e,t),e}(r.a.Component),k=n(9),_=n(18),b=n(30),C=n.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"6827c2e6-7737-44e7-8d82-87e21bdec453"}}),v=function(){return C.get("")},R=function(t){return C.post("",{title:t})},L=function(t){return C.delete("/".concat(t))},g=function(t,e){return C.put("/".concat(e),{title:t})},y=function(t){return C.get("/".concat(t,"/tasks"))},D=function(t,e){return C.post("/".concat(e,"/tasks"),{title:t})},A=function(t,e,n){return C.put("/".concat(e,"/tasks/").concat(t),n)},j=function(t,e){return C.delete("/".concat(e,"/tasks/").concat(t))};function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach(function(e){Object(p.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var F={todolists:[]},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TodoList/Reducer/SET_TODOLISTS_SUCCESS":return I({},t,{todolists:e.todolists.map(function(t){return I({},t,{tasks:[]})})});case"TodoList/Reducer/SET_TODOLISTS_ERROR":return I({},t,{error:"error"});case"TodoList/Reducer/ADD-ADD_TODOLIST_SUCCESS":return I({},t,{todolists:[e.newTodolist].concat(Object(_.a)(t.todolists))});case"TodoList/Reducer/ADD_TODOLIST_ERROR":return I({},t,{error:"error"});case"TodoList/Reducer/SET_TASKS_SUCCESS":return I({},t,{todolists:t.todolists.map(function(t){return t.id!==e.todolistId?t:I({},t,{tasks:e.tasks})})});case"TodoList/Reducer/SET_TASKS_ERROR":return I({},t,{error:"error"});case"TodoList/Reducer/DELETE_TODOLIST_SUCCESS":return I({},t,{todolists:t.todolists.filter(function(t){return t.id!==e.todolistId})});case"TodoList/Reducer/DELETE_TODOLIST_ERROR":return I({},t,{error:"error"});case"TodoList/Reducer/UPDATE_TODOLIST_TITLE_SUCCESS":return I({},t,{todolists:t.todolists.map(function(t){return t.id!==e.todolistId?t:I({},t,{title:e.title})})});case"TodoList/Reducer/UPDATE_TODOLIST_TITLE_ERROR":return I({},t,{error:"error"});case"TodoList/Reducer/DELETE_TASK_SUCCESS":return I({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?I({},t,{tasks:t.tasks.filter(function(t){return t.id!==e.taskId})}):t})});case"TodoList/Reducer/DELETE_TASK_ERROR":return I({},t,{error:"error"});case"TodoList/Reducer/ADD_TASK_SUCCESS":return I({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?I({},t,{tasks:[e.newTask].concat(Object(_.a)(t.tasks))}):t})});case"TodoList/Reducer/ADD_TASK_ERROR":return I({},t,{error:"error"});case"TodoList/Reducer/UPDATE_TASK_SUCCESS":return I({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?I({},t,{tasks:t.tasks.map(function(t){return t.id!==e.taskId?t:I({},t,{},e.obj)})}):t})});case"TodoList/Reducer/UPDATE_TASK_ERROR":return I({},t,{error:"error"});default:return t}};function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}var U=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={filterValue:"All"},n.restoreState=function(){n.props.setTasks(n.props.id)},n.addTask=function(t){n.props.addTask(t,n.props.id)},n.changeFilter=function(t){n.setState({filterValue:t})},n.changeTask=function(t,e){var o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach(function(e){Object(p.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},n.props.tasks.find(function(e){return e.id===t}),{},e);n.props.updateTask(t,e,n.props.id,o)},n.changeStatus=function(t,e){n.changeTask(t,{status:e})},n.changeTitle=function(t,e){n.changeTask(t,{title:e})},n.deleteTodolist=function(){n.props.deleteTodolist(n.props.id)},n.deleteTask=function(t){n.props.deleteTask(t,n.props.id)},n.updateTitle=function(t){n.props.updateTodolistTitle(t,n.props.id)},n.render=function(){var t=n.props.tasks,e=void 0===t?[]:t;return r.a.createElement("div",{className:"todoList"},r.a.createElement("div",{className:"todoList-header"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(S,{title:n.props.title,updateTitle:n.updateTitle}),r.a.createElement("button",{onClick:n.deleteTodolist},"X")),r.a.createElement(h,{addItem:n.addTask})),r.a.createElement(f,{changeStatus:n.changeStatus,changeTitle:n.changeTitle,deleteTask:n.deleteTask,tasks:e.filter(function(t){return"All"===n.state.filterValue||("Active"===n.state.filterValue?0===t.status:"Completed"===n.state.filterValue?2===t.status:void 0)})}),r.a.createElement(E,{changeFilter:n.changeFilter,filterValue:n.state.filterValue}))},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(r.a.Component),K=Object(k.b)(null,{setTasks:function(t){return function(e){y(t).then(function(n){e({type:"TodoList/Reducer/SET_TASKS_SUCCESS",tasks:n.data.items,todolistId:t})}).catch(function(t){e({type:"TodoList/Reducer/SET_TASKS_ERROR"})})}},addTask:function(t,e){return function(n){D(t,e).then(function(t){n({type:"TodoList/Reducer/ADD_TASK_SUCCESS",newTask:t.data.data.item,todolistId:e})}).catch(function(t){n({type:"TodoList/Reducer/ADD_TASK_ERROR"})})}},updateTask:function(t,e,n,o){return function(r){A(t,n,o).then(function(o){r(function(t,e,n){return{type:"TodoList/Reducer/UPDATE_TASK_SUCCESS",taskId:t,obj:e,todolistId:n}}(t,e,n))}).catch(function(t){r({type:"TodoList/Reducer/UPDATE_TASK_ERROR"})})}},deleteTodolist:function(t){return function(e){L(t).then(function(n){e(function(t){return{type:"TodoList/Reducer/DELETE_TODOLIST_SUCCESS",todolistId:t}}(t))}).catch(function(t){e({type:"TodoList/Reducer/DELETE_TODOLIST_ERROR"})})}},deleteTask:function(t,e){return function(n){j(t,e).then(function(o){n(function(t,e){return{type:"TodoList/Reducer/DELETE_TASK_SUCCESS",taskId:t,todolistId:e}}(t,e))}).catch(function(t){n({type:"TodoList/Reducer/DELETE_TASK_ERROR"})})}},updateTodolistTitle:function(t,e){return function(n){g(t,e).then(function(o){n(function(t,e){return{type:"TodoList/Reducer/UPDATE_TODOLIST_TITLE_SUCCESS",title:t,todolistId:e}}(t,e))}).catch(function(t){n({type:"TodoList/Reducer/UPDATE_TODOLIST_TITLE_ERROR"})})}}})(U),M=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).restoreState=function(){n.props.setTodolists()},n.addTodoList=function(t){n.props.addTodolist(t)},n.render=function(){var t=n.props.todolists.map(function(t){return r.a.createElement(K,{key:t.id,id:t.id,title:t.title,tasks:t.tasks})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(h,{addItem:n.addTodoList})),r.a.createElement("div",{className:"App"},t))},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(r.a.Component),V=Object(k.b)(function(t){return{todolists:t.todolists}},{setTodolists:function(){return function(t,e){v().then(function(e){t({type:"TodoList/Reducer/SET_TODOLISTS_SUCCESS",todolists:e.data})}).catch(function(e){t({type:"TodoList/Reducer/SET_TODOLISTS_ERROR"})})}},addTodolist:function(t){return function(e){R(t).then(function(t){e({type:"TodoList/Reducer/ADD-ADD_TODOLIST_SUCCESS",newTodolist:t.data.data.item})}).catch(function(t){e({type:"TodoList/Reducer/ADD_TODOLIST_ERROR"})})}}})(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(10),H=n(31),x=Object(B.c)(N,Object(B.a)(H.a));window.store=x;var W=x;i.a.render(r.a.createElement(k.a,{store:W},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,n){t.exports={wrapper:"AddNewItemForm_wrapper__1W6eo",newTodolist:"AddNewItemForm_newTodolist__7NZff",classNameForInput:"AddNewItemForm_classNameForInput__1IrBN",buttonsColl:"AddNewItemForm_buttonsColl__3DUE7",customBtn:"AddNewItemForm_customBtn__c_Buk",btn9:"AddNewItemForm_btn9__15sAy"}}},[[32,1,2]]]);
//# sourceMappingURL=main.cc7bda6c.chunk.js.map