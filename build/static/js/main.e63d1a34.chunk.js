(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),i=(n(24),n(5)),l=n(6),u=n(9),s=n(8),h=n(10),m=(n(25),n(3));function g(e){return{type:"LIST_IS_LOADING",isLoading:e}}function d(e){return{type:"LANG_IS_LOADING",isLoading:e}}var f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).onChangeFilter=function(e){n.props.changeFilter(e.target.value)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getLanguages("https://api.github.com/languages")}},{key:"render",value:function(){console.log("sort panel props is ",this.props);var e=this.props.languages.map(function(e){return a.a.createElement("option",{key:e.name,value:e.name},e.name)});return a.a.createElement("div",null,a.a.createElement("div",{className:"form-group col-md-6"},a.a.createElement("label",{className:"col-form-label",htmlFor:"#language"},"Language"),a.a.createElement("select",{onChange:this.onChangeFilter,className:"custom-select mr-sm-2",name:"Language"},a.a.createElement("option",{key:"0",value:""},"All"),e)),a.a.createElement("div",{className:"form-group col-md-6"},a.a.createElement("div",{className:"custom-control custom-checkbox my-1 mr-sm-2"},a.a.createElement("label",{className:"form-check-label",htmlFor:"#sort"},a.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"sort",onClick:this.props.changeSort}),"Sort by date"))))}}]),t}(r.Component),p=Object(m.b)(function(e){return{list:e.List,languages:e.Languages,error:e.LanguageHasErrored,loading:e.LanguageIsLoading}},function(e){return{getLanguages:function(t){return e(function(e){return function(t){t(d(!0)),fetch(e).then(function(e){if(!e.ok)throw Error(e.statusText);return t(d(!1)),e}).then(function(e){return e.json()}).then(function(e){return t(function(e){return{type:"LANG_LOADED",items:e}}(e))}).catch(function(){return t({type:"LANG_HAS_ERRORED",hasErrored:!0})})}}(t))},changeFilter:function(t){return e({type:"FILTER_CHANGED",value:t})},changeSort:function(){return e({type:"SORT_CHANGED"})}}})(f),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getList("https://api.github.com/search/repositories?q=sort=stars&order=desc")}},{key:"transformDate",value:function(e){return e.substring(0,10).replace(/(\d+)-(\d+)-(\d+)/,"$2/$3/$1")}},{key:"sortFilterItems",value:function(e,t,n){var r=this,a=[];return a=""===t?e:e.filter(function(e){return e.language===t}),a=n?a.sort(function(e,t){return new Date(r.transformDate(e.updated_at))-new Date(r.transformDate(t.updated_at))}):a.sort(function(e,t){return t.score-e.score})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,r=t.filter,o=t.sort;console.log(this.props);var c=this.sortFilterItems(n,r,o).map(function(t){return a.a.createElement("tr",{key:t.id},a.a.createElement("td",null,t.name),a.a.createElement("td",null,t.owner.login),a.a.createElement("td",null,a.a.createElement("a",{href:t.html_url},t.html_url)),a.a.createElement("td",null,t.score),a.a.createElement("td",null,t.language),a.a.createElement("td",null,e.transformDate(t.updated_at)))});return a.a.createElement("div",{className:"App"},a.a.createElement("h2",{className:"text-center"},"Repositories"),a.a.createElement(p,null),a.a.createElement("div",{className:"mt-4"},a.a.createElement("table",{className:"table"},a.a.createElement("thead",{className:"thead-dark"},a.a.createElement("tr",null,a.a.createElement("th",null,"Repository Name"),a.a.createElement("th",null,"User Login"),a.a.createElement("th",null,"Link"),a.a.createElement("th",null,"Rating"),a.a.createElement("th",null,"Language"),a.a.createElement("th",null,"Last refresh date"))),a.a.createElement("tbody",null,c))))}}]),t}(r.Component),v=Object(m.b)(function(e){return{list:e.List,error:e.ListHasErrored,loading:e.ListIsLoading,filter:e.ChangeFilter,sort:e.ChangeSort}},function(e){return{getList:function(t){return e(function(e){return function(t){t(g(!0)),fetch(e).then(function(e){if(!e.ok)throw Error(e.statusText);return t(g(!1)),e}).then(function(e){return e.json()}).then(function(e){return t(function(e){return{type:"LIST_LOADED",items:e}}(e))}).catch(function(){return t({type:"LIST_HAS_ERRORED",hasErrored:!0})})}}(t))}}})(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(1),y=n(18);var b=Object(L.c)({List:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_LOADED":return t.items.items;default:return e}},ListHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_HAS_ERRORED":return t.hasErrored;default:return e}},ListIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_IS_LOADING":return t.isLoading;default:return e}},Languages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LANG_LOADED":return t.items;default:return e}},LanguageHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LANG_HAS_ERRORED":return t.hasErrored;default:return e}},LanguageIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LANG_IS_LOADING":return t.isLoading;default:return e}},ChangeFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_CHANGED":return t.value;default:return e}},ChangeSort:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"SORT_CHANGED":return!e;default:return e}}});var O,_=Object(L.d)(b,O,Object(L.a)(y.a));c.a.render(a.a.createElement(m.a,{store:_},a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.e63d1a34.chunk.js.map