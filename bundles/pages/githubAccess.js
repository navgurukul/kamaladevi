module.exports=__NEXT_REGISTER_PAGE("/githubAccess",function(){return{page:webpackJsonp([11],{2004:function(e,t,n){e.exports=n(2005)},2005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(57),a=n.n(r),o=n(0),i=n.n(o),c=n(31),u=n.n(c),s=n(24),l=(n.n(s),n(36)),p=n.n(l),f=n(45),m=n.n(f),b=n(28),h=n.n(b),y=n(19),d=n.n(y),v=n(87),g=n(44),w=n(97);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void a(e)}n.done?r(i):Promise.resolve(i).then(c,u)}function c(e){i("next",e)}function u(e){i("throw",e)}c()})}}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S=function(e){function t(e){var n,r,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),n=!o||"object"!==E(o)&&"function"!=typeof o?O(r):o,Object.defineProperty(O(n),"accessGitHubLink",{configurable:!0,enumerable:!0,writable:!0,value:(i=k(a.a.mark(function e(){var t,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.email,e.next=3,Object(g.d)("/users/github/".concat(t),{},{});case 3:r=e.sent,(o=r.url)&&(m.a.replace("/home"),window.open(o,"_blank"));case 6:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})}),n.state={email:""},n}var n,r,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),n=t,(r=[{key:"componentDidMount",value:(s=k(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.getItem("authResponse");case 2:(t=e.sent)&&this.setState({email:t.user.email});case 4:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.classes,t=this.state.email;return i.a.createElement("div",null,i.a.createElement(w.a,{searchHidden:!0}),i.a.createElement("div",{className:e.root},i.a.createElement(h.a,{className:e.paper},i.a.createElement(d.a,{variant:"body1",gutterBottom:!0},"Aap ",t," se SARAL par logged in hai."),i.a.createElement(d.a,{variant:"body1",gutterBottom:!0},"Sabse pehle aap ",i.a.createElement("a",{href:"https://github.com/",target:"_blank"},"github.com")," par, ",t," se login karein."),i.a.createElement(d.a,{variant:"body1",gutterBottom:!0},"Aur phir, niche diye huye link button par click karein"),i.a.createElement("hr",null),i.a.createElement(u.a,{type:"submit",variant:"contained",color:"primary",onClick:this.accessGitHubLink,style:{height:45}},"Get Github Student Pack"))))}}])&&_(n.prototype,r),c&&_(n,c),t}();t.default=Object(v.a)(Object(s.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:20*e.spacing.unit},paper:{width:"25%",minWidth:"300px",margin:"auto",marginTop:"-130px",padding:2.5*e.spacing.unit}}})(S))}},[2004]).default}});