webpackJsonp([10],{"/MvA":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(a("Zx67")),s=n(a("Zrlr")),r=n(a("wxAW")),d=n(a("zwoO")),o=n(a("Pf15")),u=a("U7vG"),i=n(u),c=n(a("KSGD")),f=function(e){function t(e){(0,s.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.modal=null,a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this;document.querySelector("body").classList.add("noscroll"),setTimeout(function(){return e.modal.classList.add("active")},1)}},{key:"componentWillUnmount",value:function(){document.querySelector("body").classList.remove("noscroll")}},{key:"render",value:function(){var e=this,t=this.props;return i.default.createElement("div",{className:"modal",ref:function(t){return e.modal=t}},i.default.createElement("div",{className:"modal-inner"},i.default.createElement("header",{className:"modal-header"},i.default.createElement("p",{className:"title"},t.title),i.default.createElement("a",{href:"#",className:"close-modal",onClick:function(a){a.preventDefault(),e.modal.classList.remove("active"),setTimeout(function(){return t.handleClose()},200)}},"×")),i.default.createElement("div",{className:"modal-body",style:{minHeight:t.bodyMinHeight||"auto",minWidth:t.bodyMinWidth||"auto"}},t.children),t.buttons?i.default.createElement("div",{className:"modal-footer "+(1===t.buttons.length?"center":"")},t.buttons):null))}}]),t}(u.Component);f.propTypes={children:c.default.node,buttons:c.default.node,title:c.default.oneOfType([c.default.string,c.default.number]),handleClose:c.default.func,bodyMinHeight:c.default.oneOfType([c.default.string,c.default.number]),bodyMinWidth:c.default.oneOfType([c.default.string,c.default.number])};var _=f;t.default=_,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"Modal","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Modal/index.js"),__REACT_HOT_LOADER__.register(_,"default","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Modal/index.js"))},"/zvz":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return s.default.createElement("input",{type:"checkbox",name:e.name,checked:e.checked,disabled:e.disabled,onChange:function(t){return e.handleOnCheck(t)}})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(a("U7vG")),r=n(a("KSGD"));l.propTypes={name:r.default.string,checked:r.default.bool,disabled:r.default.bool,handleOnCheck:r.default.func};var d=l;t.default=d,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"Checkbox","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Checkbox/index.js"),__REACT_HOT_LOADER__.register(d,"default","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Checkbox/index.js"))},AZVq:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(a("Zx67")),s=n(a("Zrlr")),r=n(a("wxAW")),d=n(a("zwoO")),o=n(a("Pf15")),u=n(a("U7vG")),i=n(a("KSGD")),c=function(e){function t(){return(0,s.default)(this,t),(0,d.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,r.default)(t,[{key:"shouldComponentUpdate",value:function(e){return e.text!==this.props.text}},{key:"render",value:function(){var e=this;return u.default.createElement("button",{type:this.props.type,className:this.props.class,onClick:this.props.handleOnClick?function(t){t&&t.preventDefault(),e.props.handleOnClick()}:null},this.props.children?this.props.children:this.props.text)}}]),t}(u.default.Component);c.propTypes={type:i.default.string,class:i.default.string,text:i.default.string,handleOnClick:i.default.func,children:i.default.node};var f=c;t.default=f,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"Button","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Button/index.js"),__REACT_HOT_LOADER__.register(f,"default","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Button/index.js"))},H3TP:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(a("Zx67")),s=n(a("Zrlr")),r=n(a("wxAW")),d=n(a("zwoO")),o=n(a("Pf15")),u=n(a("U7vG")),i=n(a("KSGD")),c=a("T452"),f=function(e){function t(){(0,s.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,l.default)(t)).call(this));return e.state={AssetManagers:[]},e}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.getAssetManagerCoreList()}},{key:"getAssetManagerCoreList",value:function(){var e=this;c.apws.sendRequest({type:"QueryRemoteServices",payload:{QueryString:"Asset"}},function(t,a){a?e.setState({AssetManagers:a||[]}):console.error("Couldn't retrieve AM Core list")})}},{key:"render",value:function(){var e=this,t=this.state.AssetManagers.map(function(t,a){return u.default.createElement("tr",{key:a},u.default.createElement("td",null,u.default.createElement("a",{href:"#",onClick:function(a){a.preventDefault(),e.props.onSelectAM(t.ServiceId)}},t.ServiceId)))});return u.default.createElement("div",{className:"deposit-keys"},u.default.createElement("table",{className:"table no-hover"},u.default.createElement("tbody",null,t.length?t:null)))}}]),t}(u.default.Component);f.propTypes={onSelectAM:i.default.func};var _=f;t.default=_,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"AssetManagerCoreSelect","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/AssetManagerCoreSelect/index.js"),__REACT_HOT_LOADER__.register(_,"default","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/AssetManagerCoreSelect/index.js"))},P63K:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.options.map(function(e,t){return s.default.createElement("option",{key:t,value:e.value},e.text)});return s.default.createElement("div",{className:"select"},s.default.createElement("select",{onChange:e.handleOnChange,value:e.value,disabled:e.disabled,name:e.name,style:e.style,defaultValue:e.defaultValue},e.value?null:s.default.createElement("option",{value:"",disabled:!0,selected:!0},e.hintText||""),t))}Object.defineProperty(t,"__esModule",{value:!0});var s=n(a("U7vG")),r=n(a("KSGD"));l.propTypes={options:r.default.array,handleOnChange:r.default.func,value:r.default.oneOfType([r.default.string,r.default.number,r.default.bool]),defaultValue:r.default.oneOfType([r.default.string,r.default.number]),name:r.default.string,hintText:r.default.string,disabled:r.default.bool,style:r.default.object};var d=l;t.default=d,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"Select","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Select/index.js"),__REACT_HOT_LOADER__.register(d,"default","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Select/index.js"))},ROE5:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return i.default.createElement("div",null,e.children)}Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=void 0;var s=n(a("Zx67")),r=n(a("Zrlr")),d=n(a("wxAW")),o=n(a("zwoO")),u=n(a("Pf15"));t.Pane=l;var i=n(a("U7vG")),c=n(a("KSGD")),f=t.Tabs=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,d.default)(t,[{key:"handleClick",value:function(e,t){e.preventDefault(),this.props.handleTabSelect(t)}},{key:"handleClose",value:function(e,t,a,n){e.preventDefault(),this.props.handleTabClose(t,a,n)}},{key:"renderTabs",value:function(){var e=this;return i.default.createElement("ul",{className:"tabs",style:this.props.style},this.props.children.map(function(t,a){if(t){var n=e.props.selected===a?"active":"",l=t.props,s=l.label,r=l.closable,d=l.id,o=l.type;return i.default.createElement("li",{key:a,className:n},i.default.createElement("a",{href:"#",onClick:function(t){return e.handleClick(t,a)}},i.default.createElement("span",null,s)),r?i.default.createElement("a",{href:"#",className:"close-tab",onClick:function(t){return e.handleClose(t,a,d,o)}},i.default.createElement("svg",{width:"10px",height:"10px",viewBox:"3 3 14 14",version:"1.1"},i.default.createElement("defs",null),i.default.createElement("polygon",{id:"Shape",stroke:"none",fill:"#C7C7C7",fillRule:"evenodd",points:"17 4.41 15.59 3 10 8.59 4.41 3 3 4.41 8.59 10 3 15.59 4.41 17 10 11.41 15.59 17 17 15.59 11.41 10"}))):null)}return null}))}},{key:"renderContent",value:function(){return i.default.createElement("div",{className:"tab-content"},this.props.children[this.props.selected])}},{key:"render",value:function(){return i.default.createElement("div",null,this.renderTabs(),this.renderContent())}}]),t}(i.default.Component);f.propTypes={children:c.default.node,selected:c.default.number,handleTabSelect:c.default.func,handleTabClose:c.default.func,style:c.default.object},l.propTypes={label:c.default.oneOfType([c.default.string,c.default.node]),children:c.default.element.isRequired},"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"Tabs","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Tabs/index.js"),__REACT_HOT_LOADER__.register(l,"Pane","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Tabs/index.js"))},SopG:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(a("Zx67")),s=n(a("Zrlr")),r=n(a("wxAW")),d=n(a("zwoO")),o=n(a("Pf15")),u=n(a("U7vG")),i=n(a("KSGD")),c=a("RH2O"),f=a("cX0o"),_=a("0L5R"),m=a("ROE5"),p=n(a("/MvA")),h=n(a("3oDM")),C=n(a("gcgp")),O=n(a("pt4z")),E=function(e){function t(e){(0,s.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.handleTabSelect=function(){return a.__handleTabSelect__REACT_HOT_LOADER__.apply(a,arguments)},a.handleTabClose=function(){return a.__handleTabClose__REACT_HOT_LOADER__.apply(a,arguments)},a.handleModalClose=function(){return a.__handleModalClose__REACT_HOT_LOADER__.apply(a,arguments)},a.calculateNextOmsId=function(){return a.__calculateNextOmsId__REACT_HOT_LOADER__.apply(a,arguments)},a.initialState={tabs:[u.default.createElement(m.Pane,{key:(0,f.guid)(),label:u.default.createElement("div",null,u.default.createElement("svg",{width:"23px",height:"21px",viewBox:"0 1 23 21",version:"1.1"},u.default.createElement("defs",null),u.default.createElement("path",{d:"M12,1 L17,3.75 L17,9.25 L12,12 L7,9.25 L7,3.75 L12, 1 Z M18,11 L23,13.75 L23,19.25 L18,22 L13,19.25 L13,13.75 L18, 11 Z M6,11 L11,13.75 L11,19.25 L6,22 L1,19.25 L1,13.75 L6,11 Z",id:"Polygon-1",stroke:"none",fill:"#FFFFFF",fillRule:"evenodd"})),u.default.createElement("span",null,"OMS Administration"))},u.default.createElement("div",null,u.default.createElement("section",{className:"secondary_container"},u.default.createElement("div",{className:"head"},u.default.createElement("p",{className:"title"},"OMS Administration"),u.default.createElement(h.default,{label:"Create OMS",className:"green-button",onTouchTap:function(){return a.setState({creatingOms:!0})}})),u.default.createElement(O.default,{handleDblClick:function(e){return a.setState({editingOms:e})}}))))],selectedTab:0,creatingOms:!1,editingOms:null},a.state=a.initialState,a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"__calculateNextOmsId__REACT_HOT_LOADER__",value:function(){var e=0;return this.props.operatorOmss.forEach(function(t){t.Id>e&&(e=t.Id)}),++e}},{key:"__handleModalClose__REACT_HOT_LOADER__",value:function(){this.setState({creatingOms:!1,editingOms:null})}},{key:"__handleTabClose__REACT_HOT_LOADER__",value:function(e){var t=[].concat(this.state.tabs),a=this.state.selectedTab===e?e-1:this.state.selectedTab;e<this.state.selectedTab&&(a=this.state.selectedTab-1),t.splice(e,1),this.setState({tabs:t,selectedTab:a})}},{key:"__handleTabSelect__REACT_HOT_LOADER__",value:function(e){return this.setState({selectedTab:e})}},{key:"componentDidMount",value:function(){var e=this;document.onkeydown=function(t){return(0,f.catchEscapeKey)(t,e.handleModalClose)}}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{className:"main_container"},u.default.createElement(m.Tabs,{selected:this.state.selectedTab,handleTabSelect:this.handleTabSelect,handleTabClose:this.handleTabClose},this.state.tabs),this.state.creatingOms&&u.default.createElement(p.default,{handleClose:this.handleModalClose,title:"Create new OMS"},u.default.createElement("div",null,u.default.createElement(C.default,{nextOmsId:this.calculateNextOmsId(),handleSubmit:function(t){return e.props.addNewOms(t,e.handleModalClose)}}))),this.state.editingOms&&u.default.createElement(p.default,{handleClose:this.handleModalClose,title:"Edit OMS"},u.default.createElement("div",null,u.default.createElement(C.default,{oms:this.state.editingOms,handleSubmit:function(t){return e.props.updateOms(t,e.handleModalClose)}}))))}}]),t}(u.default.Component);E.propTypes={operatorOmss:i.default.array,addNewOms:i.default.func,updateOms:i.default.func};var v=function(e){return{operatorOmss:e.operatorOmss}},y=(0,c.connect)(v,{addNewOms:_.addNewOms,updateOms:_.updateOms})(E);t.default=y,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"OMSAdmin","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/containers/OMSAdmin/index.js"),__REACT_HOT_LOADER__.register(v,"mapStateToProps","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/containers/OMSAdmin/index.js"),__REACT_HOT_LOADER__.register(y,"default","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/containers/OMSAdmin/index.js"))},gcgp:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(a("woOf")),s=n(a("bOdI")),r=n(a("Zx67")),d=n(a("Zrlr")),o=n(a("wxAW")),u=n(a("zwoO")),i=n(a("Pf15")),c=n(a("U7vG")),f=n(a("KSGD")),_=n(a("H3TP")),m=n(a("/MvA")),p=n(a("sNCa")),h=n(a("P63K")),C=n(a("/zvz")),O=n(a("AZVq")),E=n(a("3oDM")),v=function(e){function t(e){(0,d.default)(this,t);var a=e.oms,n=a&&a.OMSId||a&&a.Id,l=(0,u.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return l.handleOnChange=function(){return l.__handleOnChange__REACT_HOT_LOADER__.apply(l,arguments)},l.handleOnCheck=function(){return l.__handleOnCheck__REACT_HOT_LOADER__.apply(l,arguments)},l.validate=function(){return l.__validate__REACT_HOT_LOADER__.apply(l,arguments)},l.handleModalClose=function(){return l.__handleModalClose__REACT_HOT_LOADER__.apply(l,arguments)},l.state={Id:n||e.nextOmsId,OMSName:a?a.OMSName:"",AssetManagerCoreId:a?a.AssetManagerCoreId:"",AssetManagerCoreUser:a?a.AssetManagerCoreUser:"",AssetManagerCorePassword:a?a.AssetManagerCorePassword:"",AssetManagerId:a?a.AssetManagerId:0,MarginMarketType:a?a.MarginMarketType:0,showAssetManagerCoreSelect:!1,PermissionedMarketData:!!a&&a.PermissionedMarketData},l}return(0,i.default)(t,e),(0,o.default)(t,[{key:"__handleModalClose__REACT_HOT_LOADER__",value:function(){return this.setState({showAssetManagerCoreSelect:!1})}},{key:"__validate__REACT_HOT_LOADER__",value:function(){return!(this.state.OMSName&&this.state.AssetManagerCoreId&&this.state.AssetManagerCorePassword&&this.state.AssetManagerCoreUser&&this.state.AssetManagerId)}},{key:"__handleOnCheck__REACT_HOT_LOADER__",value:function(e){var t=e.target.checked,a=e.target.name;this.setState((0,s.default)({},a,t))}},{key:"__handleOnChange__REACT_HOT_LOADER__",value:function(e){var t=e.target,a=t.value,n=t.name,l=t.type;this.setState((0,s.default)({},n,"number"===l?+a:a))}},{key:"render",value:function(){var e=this,t=this.state;return c.default.createElement("div",{className:"form"},c.default.createElement("form",null,c.default.createElement("p",{style:{marginBottom:"1rem"}},"Please fill all the following fields:"),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",null,"OMS Id"),c.default.createElement(p.default,{type:"text",name:"Id",value:t.Id,onChange:this.handleOnChange,disabled:!0})),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",null,"OMS Name"),c.default.createElement(p.default,{type:"text",name:"OMSName",onChange:this.handleOnChange,value:t.OMSName})),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",null,"Market Margin Type"),c.default.createElement(h.default,{name:"MarginMarketType",type:"number",options:[{value:0,text:"None"},{value:1,text:"Provider"},{value:2,text:"Swap"}],handleOnChange:this.handleOnChange,value:function(e){switch(e){case 1:return"Provider";case 2:return"Swap";case 0:default:return"None"}}(t.MarginMarketType)})),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",null,"Permissioned Market Data"),c.default.createElement(C.default,{name:"PermissionedMarketData",handleOnCheck:function(t,a){return e.handleOnCheck(t,a)},checked:t.PermissionedMarketData})),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",null,"Asset Manager Core"),t.AssetManagerCoreId?c.default.createElement("div",{className:"show-on-hover"},c.default.createElement("span",null,t.AssetManagerCoreId),c.default.createElement(O.default,{class:"primary",handleOnClick:function(){return e.setState({showAssetManagerCoreSelect:!0})}},c.default.createElement("svg",{width:"18px",height:"18px",viewBox:"4 4 18 18",version:"1.1"},c.default.createElement("defs",null),c.default.createElement("path",{d:"M16.5,15 L15.71,15 L15.43,14.73 C16.41, 13.59 17,12.11 17,10.5 C17,6.91 14.09,4 10.5,4 C6.91, 4 4,6.91 4,10.5 C4,14.09 6.91,17 10.5,17 C12.11, 17 13.59,16.41 14.73,15.43 L15,15.71 L15,16.5 L20, 21.49 L21.49,20 L16.5,15 L16.5,15 Z M10.5,15 C8.01, 15 6,12.99 6,10.5 C6,8.01 8.01,6 10.5,6 C12.99,6 15, 8.01 15,10.5 C15,12.99 12.99,15 10.5,15 L10.5,15 Z",id:"Shape",stroke:"none",fill:"#C7C7C7",fillRule:"evenodd"})))):c.default.createElement("div",{className:"show-on-hover"},c.default.createElement(O.default,{class:"primary",handleOnClick:function(){return e.setState({showAssetManagerCoreSelect:!0})}},c.default.createElement("svg",{width:"18px",height:"18px",viewBox:"4 4 18 18",version:"1.1"},c.default.createElement("defs",null),c.default.createElement("path",{d:"M16.5,15 L15.71,15 L15.43,14.73 C16.41, 13.59 17,12.11 17,10.5 C17,6.91 14.09,4 10.5,4 C6.91, 4 4,6.91 4,10.5 C4,14.09 6.91,17 10.5,17 C12.11, 17 13.59,16.41 14.73,15.43 L15,15.71 L15,16.5 L20, 21.49 L21.49,20 L16.5,15 L16.5,15 Z M10.5,15 C8.01, 15 6,12.99 6,10.5 C6,8.01 8.01,6 10.5,6 C12.99,6 15, 8.01 15,10.5 C15,12.99 12.99,15 10.5,15 L10.5,15 Z",id:"Shape",stroke:"none",fill:"#C7C7C7",fillRule:"evenodd"}))))),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",null,"Asset Manager User"),c.default.createElement(p.default,{type:"text",name:"AssetManagerCoreUser",onChange:this.handleOnChange,value:t.AssetManagerCoreUser})),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",null,"Asset Manager Password"),c.default.createElement(p.default,{type:"password",name:"AssetManagerCorePassword",onChange:this.handleOnChange,value:t.AssetManagerCorePassword})),c.default.createElement("div",{className:"form-group"},c.default.createElement("label",null,"Asset Manager Id"),c.default.createElement(p.default,{type:"number",name:"AssetManagerId",onChange:this.handleOnChange,value:t.AssetManagerId})),c.default.createElement(E.default,{label:this.props.oms?"Save":"Create",className:"primary",disabled:this.validate(),onTouchTap:function(){delete t.showAssetManagerCoreSelect,e.props.handleSubmit((0,l.default)({},t,{AssetManagerId:+t.AssetManagerId}))}})),this.state.showAssetManagerCoreSelect?c.default.createElement(m.default,{handleClose:this.handleModalClose,title:"Select Asset Manager Core"},c.default.createElement("div",{style:{minWidth:"30rem"}},c.default.createElement(_.default,{onSelectAM:function(t){e.setState({AssetManagerCoreId:t},e.handleModalClose)}}))):null)}}]),t}(c.default.Component);v.propTypes={handleSubmit:f.default.func,nextOmsId:f.default.number,handleShowAMCoreSelect:f.default.func,oms:f.default.object};var y=v;t.default=y,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(v,"OmsForm","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/OmsForm/index.js"),__REACT_HOT_LOADER__.register(y,"default","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/OmsForm/index.js"))},pt4z:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.operatorOmss,a=e.handleDblClick,n=t.map(function(e,t){return s.default.createElement("tr",{key:t,onDoubleClick:function(){return a(e)}},s.default.createElement("td",null,e.OMSId||e.Id),s.default.createElement("td",null,e.OMSName),s.default.createElement("td",null,e.AssetManagerId),s.default.createElement("td",null,e.MarginMarketType),s.default.createElement("td",null,e.OwnerId))});return s.default.createElement("table",{className:"table"},s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"Id"),s.default.createElement("th",null,"Name"),s.default.createElement("th",null,"Asset Manager Id"),s.default.createElement("th",null,"Margin Market Type"),s.default.createElement("th",null,"Owner Id"))),s.default.createElement("tbody",null,t.length?n:null))}Object.defineProperty(t,"__esModule",{value:!0});var s=n(a("U7vG")),r=n(a("KSGD")),d=a("RH2O");l.propTypes={operatorOmss:r.default.array,handleDblClick:r.default.func};var o=function(e){return{operatorOmss:e.operatorOmss}},u=(0,d.connect)(o)(l);t.default=u,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"OperatorOmsTable","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/OperatorOmsTable/index.js"),__REACT_HOT_LOADER__.register(o,"mapStateToProps","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/OperatorOmsTable/index.js"),__REACT_HOT_LOADER__.register(u,"default","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/OperatorOmsTable/index.js"))},sNCa:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return s.default.createElement("input",{type:e.type,name:e.name,className:e.class||e.className,placeholder:e.placeholder,onChange:e.onChange,onFocus:e.onFocus,disabled:e.disabled,readOnly:e.readOnly,value:e.value?e.value:void 0,min:e.min,max:e.max,autoFocus:e.autoFocus,style:e.style,step:e.step})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(a("U7vG")),r=n(a("KSGD"));l.propTypes={type:r.default.string,name:r.default.string,class:r.default.string,className:r.default.string,value:r.default.oneOfType([r.default.string,r.default.number]),placeholder:r.default.string,onChange:r.default.func,onFocus:r.default.func,disabled:r.default.bool,readOnly:r.default.bool,min:r.default.string,max:r.default.string,autoFocus:r.default.bool,style:r.default.object,step:r.default.string};var d=l;t.default=d,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"Input","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Input/index.js"),__REACT_HOT_LOADER__.register(d,"default","/mnt/c/Users/lfblo/Shift_Code/cryptos/sites/dev-2.shiftcrypto.com/admin-3/src/components/Input/index.js"))}});
//# sourceMappingURL=10.2f58baa010d80114be36.js.map