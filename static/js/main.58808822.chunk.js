(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),o=n(6),r=n.n(o),i=(n(12),n(13),n(1)),c=n(2),u=n(4),s=n(3),h=(n(14),n(15),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"output-container"},l.a.createElement("div",null,this.props.value))}}]),n}(a.Component)),m=(n(16),n(17),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(t=e.call.apply(e,[this].concat(l))).handleClick=function(e){t.props.clickHandler(t.props.name)},t}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"button-container",style:{width:this.props.buttonSize}},l.a.createElement("button",{className:"button",onClick:this.handleClick,style:{backgroundColor:this.props.buttonColor}},this.props.name))}}]),n}(a.Component)),d=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(t=e.call.apply(e,[this].concat(l))).handleClick=function(e){t.props.clickHandler(e)},t}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"button-panel-component"},l.a.createElement("div",null,l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"50%",buttonColor:"white",name:"AC"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"50%",buttonColor:"white",name:"="})),l.a.createElement("div",null,l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"7"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"8"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"9"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"orange",name:"%"})),l.a.createElement("div",null,l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"4"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"5"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"6"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"orange",name:"*"})),l.a.createElement("div",null,l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"1"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"2"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"3"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"orange",name:"+"})),l.a.createElement("div",null,l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"white",name:"0"}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"50%",buttonColor:"white",name:"."}),l.a.createElement(m,{clickHandler:this.handleClick,buttonSize:"25%",buttonColor:"orange",name:"-"})))}}]),n}(l.a.Component),b=["%","*","+","-"];function p(t,e,n){"."===t[e.length-1]&&(t+="0");var a,l=parseFloat(t),o=parseFloat(e);if("+"===n)l+=o;else if("-"===n)l-=o;else if("*"===n)l*=o;else if("%"===n){if(0===o)return"error";l/=o}return a=Math.floor(l)===l?parseInt(l).toString():l.toString(),isNaN(parseFloat(a))?"error":a}function k(t,e){return"AC"===e||"error"===t.total?{total:null,next:null,operation:null}:/[0-9]+/.test(e)?t.operation?t.next?{next:t.next+e}:"0"===t.next&&"0"===e?{}:"-0"===t.next?"0"===e?{}:{next:"-"+e}:{next:e}:t.total?{total:t.total+e}:"0"===t.total&&"0"===e?{}:"-0"===t.total?"0"===e?{}:{total:"-"+e}:{total:e}:"."===e?t.operation?t.next?{next:t.next+e}:{next:"0"+e}:t.total?{total:t.total+e}:{toal:"0"+e}:"="===e?t.total&&t.next&&t.operation?{total:p(t.total,t.next,t.operation),next:null,operation:"none"}:{total:null,next:null,operation:null}:b.includes(e)?t.total?t.operation&&"none"!==t.operation?t.next?{total:p(t.total,t.next,t.operation),next:null,operation:e}:"-"===e?{next:e}:{}:{operation:e}:"-"===e?{total:e}:{}:void 0}var C=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(t=e.call.apply(e,[this].concat(l))).state={total:null,next:null,operation:null},t.handleClick=function(e){t.setState(k(t.state,e)),console.log(t.state.total,t.state.next,t.state.operation)},t}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"app-component"},l.a.createElement(h,{value:this.state.next||this.state.total||"0"}),l.a.createElement(d,{clickHandler:this.handleClick})))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.58808822.chunk.js.map