(this.webpackJsonppmtfrontend=this.webpackJsonppmtfrontend||[]).push([[0],{60:function(e,t,a){},61:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),i=a(25),r=(a(60),a(32)),c=a(8),o=a(9),l=a(11),h=a(10),d=(a.p,a(61),a(7)),p=a(20),j=a(72),u=a(78),m=a(79),b=a(73),O=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={salesperson_id:"",showHideEdit:!1,showHide:!1,toggleEditForm:!1,handleShow:!1,input:"",email:"",lastName:"",firstName:""},e.handleShowHideSPEdit=function(t,a,s,n,i,r){e.setState({showHideEdit:!e.state.showHideEdit,salesperson_id:t,email:a,lastName:r,firstName:i})},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.handleInput=function(t){e.setState({input:t.target.value})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.allSalespeople()}},{key:"handleModalShowHideSp",value:function(){this.setState({showHide:!this.state.showHide})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{id:"allsview",children:[Object(s.jsx)("br",{}),Object(s.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"#"}),Object(s.jsx)("th",{children:"First Name"}),Object(s.jsx)("th",{children:"Last Name"}),Object(s.jsx)("th",{children:"Username"}),Object(s.jsx)("th",{children:"Actions"})]})}),Object(s.jsx)("tbody",{children:this.props.salespeople.map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.id}),Object(s.jsx)("td",{children:t.first_name}),Object(s.jsx)("td",{children:t.last_name}),Object(s.jsx)("td",{children:t.email}),Object(s.jsxs)("td",{children:[!0===e.state.showHideEdit?Object(s.jsxs)(u.a,{show:e.state.showHideEdit,children:[Object(s.jsx)(u.a.Header,{children:Object(s.jsx)(u.a.Title,{children:"Edit Sales"})}),Object(s.jsxs)(u.a.Body,{children:[Object(s.jsxs)(m.a,{children:[Object(s.jsxs)(m.a.Group,{controlId:"formGroupfirstName",children:[Object(s.jsx)(m.a.Label,{children:"First Name"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"text",name:"firstName",placeholder:"First Name",value:e.state.firstName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGrouplastName",children:[Object(s.jsx)(m.a.Label,{children:"Last Name"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"text",name:"lastName",placeholder:"Last Name",value:e.state.lastName}),Object(s.jsx)(m.a.Label,{children:"Email address"})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGrouplastName",children:[Object(s.jsx)(m.a.Label,{children:"Last Name"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"email",name:"email",placeholder:"email",value:e.state.email}),Object(s.jsx)(m.a.Label,{children:"Email address"})]})]}),Object(s.jsxs)(u.a.Footer,{children:[Object(s.jsx)(b.a,{variant:"secondary",onClick:function(){return e.handleShowHideSPEdit()},children:"Close"}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(t){e.props.updateSalesRep(t,e.state.firstName,e.state.lastName,e.state.email,e.state.salesperson_id),e.handleShowHideSPEdit()},children:"Save Changes"})]})]})]}):null,Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)(b.a,{variant:"primary",onClick:function(){return e.handleShowHideSPEdit(t.id,t.email,t.first_name,t.last_name)},size:"sm",children:"Edit"})," ",Object(s.jsx)(b.a,{onClick:function(){return e.props.deleteRep(t.id)},variant:"danger",size:"sm",children:"delete"})]})]})]},t.id)}))})]}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(){return e.handleModalShowHideSp()},children:"Create a new sales person "}),!0===this.state.showHide?Object(s.jsxs)(u.a,{show:this.state.showHide,id:"csm",children:[Object(s.jsx)(u.a.Header,{closeButton:!0,onClick:function(){return e.handleModalShowHideSp()},children:Object(s.jsx)(u.a.Title,{children:"Create a sales person"})}),Object(s.jsxs)(u.a.Body,{children:[Object(s.jsxs)(m.a,{children:[Object(s.jsxs)(m.a.Group,{controlId:"formGroupfirstName",children:[Object(s.jsx)(m.a.Label,{children:"First Name"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"firstName",placeholder:"First Name",value:this.state.firstName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGrouplastName",children:[Object(s.jsx)(m.a.Label,{children:"Last Name"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"lastName",placeholder:"Last Name",value:this.state.lastName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupEmail",children:[Object(s.jsx)(m.a.Label,{children:"Email"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"email",name:"email",placeholder:"email",value:this.state.email})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupPassword",children:[Object(s.jsx)(m.a.Label,{children:"Password"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"password",name:"password",placeholder:"password",value:this.state.password})]})]}),Object(s.jsxs)(u.a.Footer,{children:[Object(s.jsx)(b.a,{variant:"secondary",onClick:function(){return e.handleModalShowHideSp()},children:"Close"}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(t){e.props.createSalesperson(e.state),e.handleModalShowHideSp()},children:"Save Changes"})]})]})]}):null]})}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.allActivities()}},{key:"render",value:function(){return Object(s.jsxs)("div",{id:"spa",children:[Object(s.jsx)("br",{}),Object(s.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"#"}),Object(s.jsx)("th",{children:"Activity"}),Object(s.jsx)("th",{children:"Prospect ID"}),Object(s.jsx)("th",{children:"Prospect name"}),Object(s.jsx)("th",{children:"Created_by"}),Object(s.jsx)("th",{children:"Description"}),Object(s.jsx)("th",{children:"Status"})]})}),Object(s.jsx)("tbody",{children:this.props.activities.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{children:[e.id," "]}),Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.prospect_id}),Object(s.jsx)("td",{children:e.prospect_name}),Object(s.jsx)("td",{children:e.created_by}),Object(s.jsx)("td",{children:e.description}),Object(s.jsx)("td",{children:e.status})]},e.id)}))})]})]})}}]),a}(n.Component),f=a(82),v=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={prospect_id:"",prospect_name:"",created_by:"",showHideEdit:!1,showHide:!1,toggleEditForm:!1,handleShow:!1,input:"",email:"",lastName:"",firstName:"",phone:"",showHideAddActivity:!1,status:"",name:"",description:""},e.handleShowHideSPEdit=function(t,a,s,n,i,r,c){e.setState({showHideEdit:!e.state.showHideEdit,prospect_id:t,prospect_name:c,created_by:c,email:a,lastName:n,firstName:s,phone:i,status:r})},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.handleInput=function(t){e.setState({input:t.target.value})},e.getProgress=function(e){switch(e){case"open":return 30;case"working":return 60;case"closed":return 100;default:return 30}},e}return Object(o.a)(a,[{key:"handleModalShowHideSp",value:function(){this.setState({showHide:!this.state.showHide})}},{key:"componentDidMount",value:function(){this.setState({salesperson_id:this.props.salesperson_id,manager_id:this.props.manager_id}),this.props.allProspect()}},{key:"handleShowHideAddActivity",value:function(e,t,a){this.setState({showHideAddActivity:!this.state.showHideAddActivity,prospect_id:e,prospect_name:t+" "+a})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{id:"nike",children:[Object(s.jsx)("br",{}),Object(s.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"First Name"}),Object(s.jsx)("th",{children:"Last Name"}),Object(s.jsx)("th",{children:"email"}),Object(s.jsx)("th",{children:"phone"}),Object(s.jsx)("th",{children:"status"}),Object(s.jsx)("th",{children:"created_by"}),Object(s.jsx)("th",{children:"Progress"}),Object(s.jsx)("th",{children:"Actions"})]})}),Object(s.jsx)("tbody",{children:this.props.prospects.map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.first_name}),Object(s.jsx)("td",{children:t.last_name}),Object(s.jsx)("td",{children:t.email}),Object(s.jsx)("td",{children:t.phone}),Object(s.jsx)("td",{children:t.status}),Object(s.jsx)("td",{children:t.created_by}),Object(s.jsx)("td",{children:Object(s.jsx)(f.a,{now:e.getProgress(t.status)})}),Object(s.jsxs)("td",{children:[Object(s.jsxs)(u.a,{show:e.state.showHideEdit,children:[Object(s.jsx)(u.a.Header,{children:Object(s.jsx)(u.a.Title,{children:"Edit"})}),Object(s.jsxs)(u.a.Body,{children:[Object(s.jsxs)(m.a,{children:[Object(s.jsxs)(m.a.Group,{controlId:"formGroupfirstName",children:[Object(s.jsx)(m.a.Label,{children:"First Name"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"text",name:"firstName",value:e.state.firstName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGrouplastName",children:[Object(s.jsx)(m.a.Label,{children:"Last Name"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"text",name:"lastName",value:e.state.lastName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupEmail",children:[Object(s.jsx)(m.a.Label,{children:"Last Name"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"email",name:"email",value:e.state.email})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupPhone",children:[Object(s.jsx)(m.a.Label,{children:"phone"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"text",name:"phone",value:e.state.phone})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupStatus",children:[Object(s.jsx)(m.a.Label,{children:"status"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"text",name:"status",value:e.state.status})]})]}),Object(s.jsxs)(u.a.Footer,{children:[Object(s.jsx)(b.a,{variant:"secondary",onClick:function(){return e.handleShowHideSPEdit()},children:"Close"}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(t){e.props.updateProspect(t,e.state.firstName,e.state.lastName,e.state.email,e.state.phone,e.state.status,e.state.prospect_id,e.state.created_by,e.state.prospect_name),e.handleShowHideSPEdit()},children:"Save Changes"})]})]})]}),Object(s.jsxs)(u.a,{show:e.state.showHideAddActivity,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,onClick:function(){return e.handleShowHideAddActivity()},children:Object(s.jsx)(u.a.Title,{children:"Create A New Activity"})}),Object(s.jsxs)(u.a.Body,{children:[Object(s.jsxs)(m.a,{children:[Object(s.jsxs)(m.a.Group,{controlId:"formGroupName",children:[Object(s.jsx)(m.a.Label,{children:"Activity"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"text",name:"name",value:e.state.name})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupStatus",children:[Object(s.jsx)(m.a.Label,{children:"status"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,type:"text",name:"status",value:e.state.status})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupDescription",children:[Object(s.jsx)(m.a.Label,{children:"description"}),Object(s.jsx)(m.a.Control,{onChange:e.handleChange,as:"textarea",name:"description",value:e.state.description})]})]}),Object(s.jsxs)(u.a.Footer,{children:[Object(s.jsx)(b.a,{variant:"secondary",onClick:function(){return e.handleShowHideAddActivity()},children:"Close"}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(t){e.props.createActivity(e.state),e.handleShowHideAddActivity()},children:"Save Changes"})]})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(b.a,{variant:"primary",onClick:function(){return e.handleShowHideSPEdit(t.id,t.email,t.first_name,t.last_name,t.phone,t.status)},size:"sm",children:"Edit"}),"  ",Object(s.jsx)(b.a,{onClick:function(){return e.handleShowHideAddActivity(t.id,t.first_name,t.last_name)},variant:"info",size:"sm",children:"Add Activity"}),"  ",Object(s.jsx)(b.a,{onClick:function(){return e.props.deleteProspect(t.id)},variant:"danger",size:"sm",children:"delete"})]})]})]},t.id)}))})]}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(){return e.handleModalShowHideSp()},children:"Create a new prospect "}),Object(s.jsxs)(u.a,{show:this.state.showHide,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,onClick:function(){return e.handleModalShowHideSp()},children:Object(s.jsx)(u.a.Title,{children:"Create a prospect"})}),Object(s.jsxs)(u.a.Body,{children:[Object(s.jsxs)(m.a,{children:[Object(s.jsxs)(m.a.Group,{controlId:"formGroupfirstName",children:[Object(s.jsx)(m.a.Label,{children:"First Name"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"firstName",value:this.state.firstName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGrouplastName",children:[Object(s.jsx)(m.a.Label,{children:"Last Name"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"lastName",value:this.state.lastName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupEmail",children:[Object(s.jsx)(m.a.Label,{children:"Email "}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"email",value:this.state.email})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupPhone",children:[Object(s.jsx)(m.a.Label,{children:"phone"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"phone",value:this.state.phone})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupStatus",children:[Object(s.jsx)(m.a.Label,{children:"status"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"status",value:this.state.status})]})]}),Object(s.jsxs)(u.a.Footer,{children:[Object(s.jsx)(b.a,{variant:"secondary",onClick:function(){return e.handleModalShowHideSp()},children:"Close"}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(t){e.props.createProspect(e.state),e.handleModalShowHideSp()},children:"Save Changes"})]})]})]})]})}}]),a}(n.Component),g=a(74),y=a(75),C=a(52),S=a(83),w=a(76),N=a(53),L=a(77),P=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={salespersonList:!1,prospectList:!1,activitiesList:!1,handleShowHideSPEdit:!1,handleShow:!1,EditButton:!1,email:"",lastName:"",firstName:""},e.salespersonList=function(){e.setState({salespersonList:!e.state.salespersonList,prospectList:!1,activitiesList:!1})},e.handleEdit=function(){e.setState({EditButton:!e.state.EditButton})},e.prospectList=function(){e.setState({prospectList:!e.state.prospectList,salespersonList:!1,activitiesList:!1})},e.activitiesList=function(){e.setState({activitiesList:!e.state.activitiesList,prospectList:!1,salespersonList:!1})},e.handleShow=function(){e.setState({handleShow:!e.state.handleShow})},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.allSalespeople()}},{key:"handleShowHideSPEdit",value:function(){this.setState({showHide:!this.state.showHide})}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(y.a,{id:"mvp",children:Object(s.jsx)("div",{children:Object(s.jsx)(C.a,{children:Object(s.jsxs)(S.a,{id:"profile",style:{width:"25rem"},children:[Object(s.jsx)(S.a.Img,{variant:"top",src:this.props.manager.photo}),Object(s.jsx)(S.a.Body,{children:Object(s.jsxs)(S.a.Title,{children:[this.props.manager.first_name," ",this.props.manager.last_name]})}),Object(s.jsxs)(w.a,{className:"list-group-flush",children:[Object(s.jsxs)(N.a,{children:["Title: ",this.props.manager.title]}),Object(s.jsxs)(N.a,{children:["Email address: ",this.props.manager.email]})]}),Object(s.jsxs)(S.a.Body,{children:[Object(s.jsx)(b.a,{variant:"primary",onClick:function(){return e.handleShowHideSPEdit()},children:"Edit"}),!0===this.state.showHide?Object(s.jsxs)(u.a,{show:this.state.showHide,onHide:this.handleShow,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{children:"Modal heading"})}),Object(s.jsxs)(u.a.Body,{children:[Object(s.jsxs)(m.a,{children:[Object(s.jsxs)(m.a.Group,{controlId:"formGroupfirstName",children:[Object(s.jsx)(m.a.Label,{children:"First Name"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"firstName",placeholder:"First Name",value:this.state.firstName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGrouplastName",children:[Object(s.jsx)(m.a.Label,{children:"Last Name"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"lastName",placeholder:"Last Name",value:this.state.lastName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupEmail",children:[Object(s.jsx)(m.a.Label,{children:"Email"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"email",placeholder:"Enter email",name:"email",value:this.state.email})]})]}),Object(s.jsxs)(u.a.Footer,{children:[Object(s.jsx)(b.a,{variant:"secondary",onClick:function(){return e.handleShowHideSPEdit()},children:"Close"}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(t){e.props.updateUser(t,e.state.firstName,e.state.lastName,e.state.email,e.props.manager.id),e.handleShowHideSPEdit()},children:"Save Changes"})]})]})]}):null]})]})})})}),Object(s.jsx)(y.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)(C.a,{id:"allsb",children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:Object(s.jsxs)(L.a,{className:"mb-2",children:[Object(s.jsx)(b.a,{id:"asp1",onClick:this.salespersonList,variant:"primary",children:" All Sales People"}),"  ",Object(s.jsx)(b.a,{id:"asp2",onClick:this.prospectList,variant:"primary",children:" All Prospects"}),"  ",Object(s.jsx)(b.a,{id:"ac1",onClick:this.activitiesList,variant:"primary",children:" All Activities"})]})})})})})}),!0===this.state.salespersonList?Object(s.jsx)(O,{salespeople:this.props.salespeople,allSalespeople:this.props.allSalespeople,updateUser:this.updateUser,updateSalesRep:this.props.updateSalesRep,createSalesperson:this.props.createSalesperson,newSalesrep:this.state.newSalesrep,deleteRep:this.props.deleteRep}):null,!0===this.state.prospectList?Object(s.jsx)(v,{allProspect:this.props.allProspect,prospects:this.props.prospects,updateProspect:this.props.updateProspect,deleteProspect:this.props.deleteProspect,createProspect:this.props.createProspect,createActivity:this.props.createActivity}):null,!0===this.state.activitiesList?Object(s.jsx)(x,{allActivities:this.props.allActivities,activities:this.props.activities}):null]})})}}]),a}(n.Component),k=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={manager:{},salespeople:[],prospects:[],activities:[]},e.allActivities=function(){fetch("https://calm-dawn-96008.herokuapp.com/activities").then((function(e){return e.json()})).then((function(t){e.setState({activities:t})}))},e.allSalespeople=function(){fetch("https://calm-dawn-96008.herokuapp.comsalesreps").then((function(e){return e.json()})).then((function(t){e.setState({salespeople:t})}))},e.allProspect=function(){fetch("https://calm-dawn-96008.herokuapp.com/prospects").then((function(e){return e.json()})).then((function(t){e.setState({prospects:t})}))},e.updateUser=function(t,a,s,n,i){fetch("https://calm-dawn-96008.herokuapp.com/managers/".concat(i),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:a,last_name:s,email:n})}).then((function(e){return e.json()})).then((function(t){e.setState({manager:t})}))},e.updateSalesRep=function(t,a,s,n,i){fetch("https://calm-dawn-96008.herokuapp.com/salesreps/".concat(i),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:a,last_name:s,email:n})}).then((function(e){return e.json()})).then((function(t){e.allSalespeople()}))},e.updateProspect=function(t,a,s,n,i,r,c){fetch("https://calm-dawn-96008.herokuapp.com/prospects/".concat(c),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:a,last_name:s,phone:n,email:i,status:r})}).then((function(e){return e.json()})).then((function(t){e.allProspect()}))},e.createSalesperson=function(t){fetch("https://calm-dawn-96008.herokuapp.com/salesreps",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({salesrep:{first_name:t.firstName,last_name:t.lastName,email:t.email,password:t.password,username:t.username,manager_id:e.state.manager.id}})}).then((function(t){e.allSalespeople()}))},e.createProspect=function(t){fetch("https://calm-dawn-96008.herokuapp.com/prospects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:t.firstName,last_name:t.lastName,email:t.email,status:t.status,phone:t.phone,created_by:e.state.manager.first_name+" "+e.state.manager.last_name})}).then((function(t){e.allProspect()}))},e.createActivity=function(t){fetch("https://calm-dawn-96008.herokuapp.com/activities",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({activity:{name:t.name,prospect_id:t.prospect_id,prospect_name:t.prospect_name,description:t.description,created_by:e.state.manager.first_name+" "+e.state.manager.last_name,status:t.status}})}).then((function(e){}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-dawn-96008.herokuapp.com/managers/".concat(localStorage.getItem("user"))).then((function(e){return e.json()})).then((function(t){e.setState({manager:t})}))}},{key:"deleteRep",value:function(e){var t=this;window.confirm("Are you sure?")&&fetch("https://calm-dawn-96008.herokuapp.com/salesreps/".concat(e),{method:"DELETE",header:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.allSalespeople()}))}},{key:"deleteProspect",value:function(e){var t=this;window.confirm("Are you sure?")&&fetch("https://calm-dawn-96008.herokuapp.com/prospects/".concat(e),{method:"DELETE",header:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.allProspect()}))}},{key:"render",value:function(){return Object(s.jsx)(P,{manager:this.state.manager,prospects:this.state.prospects,salespeople:this.state.salespeople,activities:this.state.activities,updateUser:this.updateUser,updateSalesRep:this.updateSalesRep,allSalespeople:this.allSalespeople,allProspect:this.allProspect,updateProspect:this.updateProspect,createSalesperson:this.createSalesperson,deleteRep:this.deleteRep,deleteProspect:this.deleteProspect,createProspect:this.createProspect,createActivity:this.createActivity,allActivities:this.allActivities})}}]),a}(n.Component),_=a(80),H=a(81),A=a(29),E=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).logout=function(){localStorage.clear(),e.props.updateUser(null)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{id:"nv",children:!0===this.props.logged_in?Object(s.jsxs)(_.a,{id:"navm",bg:"light",variant:"light",children:[Object(s.jsx)(_.a.Brand,{href:"/login",children:"PMT"}),Object(s.jsx)(H.a,{className:"mr-auto",children:Object(s.jsx)(H.a.Link,{href:"/logout",as:A.b,to:"/login",active:"/managers"===this.props.location.pathname,onClick:this.logout,children:"  logout"})})]}):Object(s.jsxs)(_.a,{bg:"light",variant:"light",as:A.b,to:"/login",active:"/login"===this.props.location.pathname,children:[Object(s.jsx)(_.a.Brand,{href:"#home",children:"PMT"}),Object(s.jsx)(H.a,{className:"mr-auto",children:Object(s.jsx)(H.a.Link,{href:"/login",children:"login"})})]})})}}]),a}(n.Component),G=Object(d.g)(E),T=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={username:"",password:"",title:""},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.handleLoginSubmit=function(){fetch("https://calm-dawn-96008.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.state.username,password:e.state.password,title:e.state.title}),redirect:"follow"}).then((function(e){return e.json()})).then((function(t){t.authenticated?(localStorage.setItem("token",t.token),localStorage.setItem("user",t.user.id),e.props.updateUser(t.user)):alert("Incorrect username or password")}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{id:"name",children:" Prospect Managerment Tracker "}),Object(s.jsxs)(u.a.Dialog,{id:"login",children:[Object(s.jsx)(u.a.Header,{children:Object(s.jsx)(u.a.Title,{children:"Login"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsxs)(m.a,{size:"mini",loading:this.props.authenticatingUser,error:this.props.failedLogin,children:[Object(s.jsxs)(m.a.Group,{controlId:"formGridState",children:[Object(s.jsx)(m.a.Label,{children:"Title"}),Object(s.jsxs)(m.a.Control,{as:"select",defaultValue:"Choose...",onChange:this.handleChange,name:"title",children:[Object(s.jsx)("option",{children:"Title..."}),Object(s.jsx)("option",{children:"salesperson"}),Object(s.jsx)("option",{children:"manager"})]})]}),Object(s.jsxs)(m.a.Group,{controlId:"formBasicUserName",children:[Object(s.jsx)(m.a.Label,{children:"username"}),Object(s.jsx)(m.a.Control,{type:"text",placeholder:"Enter username",name:"username",onChange:this.handleChange})]}),Object(s.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsx)(m.a.Label,{children:"Password"}),Object(s.jsx)(m.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:this.handleChange})]}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(t){e.handleLoginSubmit()},children:"summit"})]},"mini")})]})]})}}]),a}(n.Component),I=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={salespersonList:!1,prospectList:!1,activitiesList:!1,handleShowHideSPEdit:!1,firstName:"",lastName:"",email:""},e.prospectList=function(){e.setState({prospectList:!e.state.prospectList,activitiesList:!1})},e.activitiesList=function(){e.setState({activitiesList:!e.state.activitiesList,prospectList:!1})},e.salespersonList=function(){e.setState({salespersonList:!e.state.salespersonList})},e.prospectList=function(){e.setState({prospectList:!e.state.prospectList})},e}return Object(o.a)(a,[{key:"handleShowHideSPEdit",value:function(){this.setState({showHide:!this.state.showHide})}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(y.a,{id:"wht",children:Object(s.jsx)("div",{children:Object(s.jsx)(C.a,{id:"spp",children:Object(s.jsxs)(S.a,{style:{width:"25rem"},children:[Object(s.jsx)(S.a.Img,{variant:"top",src:this.props.salesrep.photo}),Object(s.jsx)(S.a.Body,{children:Object(s.jsxs)(S.a.Title,{children:[this.props.salesrep.first_name," ",this.props.salesrep.last_name]})}),Object(s.jsxs)(w.a,{className:"list-group-flush",children:[Object(s.jsxs)(N.a,{children:["Title: ",this.props.salesrep.title]}),Object(s.jsxs)(N.a,{children:["Email address: ",this.props.salesrep.email]})]}),Object(s.jsx)(S.a.Body,{children:!0===this.state.showHide?Object(s.jsxs)(u.a,{show:this.state.showHide,onHide:this.handleShow,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{children:"Edit "})}),Object(s.jsxs)(u.a.Body,{children:[Object(s.jsxs)(m.a,{children:[Object(s.jsxs)(m.a.Group,{controlId:"formGroupfirstName",children:[Object(s.jsx)(m.a.Label,{children:"First Name"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"firstName",placeholder:"First Name",value:this.state.firstName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGrouplastName",children:[Object(s.jsx)(m.a.Label,{children:"First Name"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"text",name:"firstName",placeholder:"First Name",value:this.state.firstName})]}),Object(s.jsxs)(m.a.Group,{controlId:"formGroupEmail",children:[Object(s.jsx)(m.a.Label,{children:"Last Name"}),Object(s.jsx)(m.a.Control,{onChange:this.handleChange,type:"email",placeholder:"Enter email",name:"email",value:this.state.email||""})]})]}),Object(s.jsxs)(u.a.Footer,{children:[Object(s.jsx)(b.a,{variant:"secondary",onClick:function(){return e.handleShowHideSPEdit()},children:"Close"}),Object(s.jsx)(b.a,{variant:"primary",onClick:function(t){e.props.updateUser(t,e.state.firstName,e.state.lastName,e.state.email,e.props.manager.id),e.handleShowHideSPEdit()},children:"Save Changes"})]})]})]}):null})]})})})}),Object(s.jsx)(y.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)(C.a,{id:"buttondiv",children:Object(s.jsx)("div",{children:Object(s.jsxs)("div",{id:"new",className:"mb-2",children:[Object(s.jsx)(b.a,{id:"pb",onClick:this.prospectList,variant:"primary",size:"lg",children:" All Prospects"}),Object(s.jsx)(b.a,{id:"ab",onClick:this.activitiesList,variant:"primary",size:"lg",children:" All Activities"})]})})})})}),!0===this.state.prospectList?Object(s.jsx)(v,{allProspect:this.props.allProspect,prospects:this.props.prospects,updateProspect:this.props.updateProspect,deleteProspect:this.props.deleteProspect,createProspect:this.props.createProspect,createActivity:this.props.createActivity}):null,!0===this.state.activitiesList?Object(s.jsx)(x,{allActivities:this.props.allActivities,activities:this.props.activities}):null]})})}}]),a}(n.Component),F=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={salesrep:{},manager_id:"",id:"",activities:[],prospects:[]},e.allActivities=function(){fetch("https://calm-dawn-96008.herokuapp.com/activities").then((function(e){return e.json()})).then((function(t){e.setState({activities:t})}))},e.allProspect=function(){fetch("https://calm-dawn-96008.herokuapp.com/prospects?salesrep_id=".concat(e.state.salesrep.id)).then((function(e){return e.json()})).then((function(t){e.setState({prospects:t})}))},e.allActivities=function(){fetch("https://calm-dawn-96008.herokuapp.com/activities").then((function(e){return e.json()})).then((function(t){e.setState({activities:t})}))},e.updateProspect=function(t,a,s,n,i,r,c){fetch("https://calm-dawn-96008.herokuapp.com/".concat(c),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:a,last_name:s,phone:n,email:i,status:r})}).then((function(e){return e.json()})).then((function(t){e.allProspect()}))},e.createProspect=function(t){fetch("https://calm-dawn-96008.herokuapp.com/prospects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:t.firstName,last_name:t.lastName,email:t.email,status:t.status,phone:t.phone,created_by:e.state.salesrep.first_name+" "+e.state.salesrep.last_name,manager_id:e.state.salesrep.manager_id,salesrep_id:e.state.salesrep.id})}).then((function(t){e.allProspect()}))},e.createActivity=function(t){fetch("https://calm-dawn-96008.herokuapp.com/activities",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.name,prospect_id:t.prospect_id,description:t.description,status:t.status,prospect_name:t.prospect_name,created_by:e.state.salesrep.first_name+" "+e.state.salesrep.last_name})}).then((function(e){}))},e.updateUser=function(t,a,s){fetch("https://calm-dawn-96008.herokuapp.com/salesreps/".concat(localStorage.getItem("user")),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:t,last_name:a,email:s})}).then((function(e){return e.json()})).then((function(t){e.setState({salesrep:t})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-dawn-96008.herokuapp.com/".concat(localStorage.getItem("user"))).then((function(e){return e.json()})).then((function(t){e.setState({salesrep:t})}))}},{key:"deleteProspect",value:function(e){var t=this;window.confirm("Are you sure?")&&fetch("https://calm-dawn-96008.herokuapp.com/".concat(e),{method:"DELETE",header:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.allProspect()}))}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(I,{salesrep:this.state.salesrep,allProspect:this.allProspect,prospects:this.state.prospects,updateProspect:this.updateProspect,deleteProspect:this.deleteProspect,createProspect:this.createProspect,createActivity:this.createActivity,updateUser:this.updateUser,activities:this.state.activities,allActivities:this.allActivities})})}}]),a}(n.Component),B=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).updateUser=function(t){e.setState({user:t,logged_in:!e.state.logged_in})},e.state={user:null,logged_in:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)(G,{logged_in:this.state.logged_in,updateUser:this.updateUser}),this.state.loading?null:Object(s.jsxs)(d.d,{children:[Object(s.jsx)(d.b,{exact:!0,path:"/pmt",render:function(){return Object(s.jsx)(d.a,{to:"/process.env.https://alexstephane.github.io/pmt"})}}),Object(s.jsx)(d.b,{exact:!0,path:"/pmt",render:function(){return null!==e.state.user&&"manager"===e.state.user.title?Object(s.jsx)(d.a,{to:"/manager/"}):null!==e.state.user&&"Salesperson"===e.state.user.title?Object(s.jsx)(d.a,{to:"/salesperson/"}):Object(s.jsx)(T,{updateUser:e.updateUser})}}),Object(s.jsx)(d.b,{path:"/manager",render:function(t){return Object(s.jsx)(k,Object(r.a)(Object(r.a)({},t),{},{user:e.state.user}))}}),Object(s.jsx)(d.b,{path:"/salesperson/",render:function(t){return Object(s.jsx)(F,Object(r.a)(Object(r.a)({},t),{},{user:e.state.user}))}}),Object(s.jsx)(d.b,{path:"/pmt",render:function(e){return Object(s.jsx)(T,Object(r.a)({},e))}})]})]})}}]),a}(n.Component),M=Object(d.g)(B),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};a(68),a(69);Object(i.render)(Object(s.jsx)(A.a,{children:Object(s.jsx)(M,{})}),document.getElementById("root")),U()}},[[70,1,2]]]);
//# sourceMappingURL=main.0856b377.chunk.js.map