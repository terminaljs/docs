var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function h(){return f("")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let p;function g(t){p=t}function m(){if(!p)throw new Error("Function called outside component initialization");return p}function b(){const t=m();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const s=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,s)}))}}}function A(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const w=[],v=[],y=[],E=[],k=Promise.resolve();let J=!1;function N(){J||(J=!0,k.then($))}function I(t){y.push(t)}let T=!1;const x=new Set;function $(){if(!T){T=!0;do{for(let t=0;t<w.length;t+=1){const n=w[t];g(n),M(n.$$)}for(g(null),w.length=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];x.has(n)||(x.add(n),n())}y.length=0}while(w.length);for(;E.length;)E.pop()();J=!1,T=!1,x.clear()}}function M(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(I)}}const Z=new Set;let R;function D(){R={r:0,c:[],p:R}}function G(){R.r||s(R.c),R=R.p}function S(t,n){t&&t.i&&(Z.delete(t),t.i(n))}function U(t,n,e,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),R.c.push((()=>{Z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function W(t,n){const e={},o={},s={$$scope:1};let r=t.length;for(;r--;){const i=t[r],c=n[r];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)s[t]||(e[t]=c[t],s[t]=1);t[r]=c}else for(const t in i)s[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function j(t){return"object"==typeof t&&null!==t?t:{}}function B(t){t&&t.c()}function F(t,n,o,i){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(n,o),i||I((()=>{const n=l.map(e).filter(r);u?u.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(I)}function C(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function H(n,e,r,i,c,l,a=[-1]){const f=p;g(n);const h=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let d=!1;if(h.ctx=r?r(n,e.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),d&&function(t,n){-1===t.$$.dirty[0]&&(w.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],h.update(),d=!0,s(h.before_update),h.fragment=!!i&&i(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();e.intro&&S(n.$$.fragment),F(n,e.target,e.anchor,e.customElement),$()}g(f)}class V{$destroy(){C(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function Q(t,n){return{subscribe:O(t,n).subscribe}}function O(n,e=t){let o;const s=[];function r(t){if(i(n,t)&&(n=t,o)){const t=!Y.length;for(let t=0;t<s.length;t+=1){const e=s[t];e[1](),Y.push(e,n)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(i,c=t){const l=[i,c];return s.push(l),1===s.length&&(o=e(r)||t),i(n),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}function X(n,e,o){const i=!Array.isArray(n),c=i?[n]:n,l=e.length<2;return Q(o,(n=>{let o=!1;const u=[];let a=0,f=t;const h=()=>{if(a)return;f();const o=e(i?u[0]:u,n);l?n(o):f=r(o)?o:t},d=c.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{u[e]=t,a&=~(1<<e),o&&h()}),(()=>{a|=1<<e}))));return o=!0,h(),function(){s(d),f()}}))}function L(t){let e,o,s;const r=[t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return i&&(e=new i(c()),e.$on("routeEvent",t[7])),{c(){e&&B(e.$$.fragment),o=h()},m(t,n){e&&F(e,t,n),l(t,o,n),s=!0},p(t,n){const s=4&n?W(r,[j(t[2])]):{};if(i!==(i=t[0])){if(e){D();const t=e;U(t.$$.fragment,1,0,(()=>{C(t,1)})),G()}i?(e=new i(c()),e.$on("routeEvent",t[7]),B(e.$$.fragment),S(e.$$.fragment,1),F(e,o.parentNode,o)):e=null}else i&&e.$set(s)},i(t){s||(e&&S(e.$$.fragment,t),s=!0)},o(t){e&&U(e.$$.fragment,t),s=!1},d(t){t&&u(o),e&&C(e,t)}}}function z(t){let e,o,s;const r=[{params:t[1]},t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return i&&(e=new i(c()),e.$on("routeEvent",t[6])),{c(){e&&B(e.$$.fragment),o=h()},m(t,n){e&&F(e,t,n),l(t,o,n),s=!0},p(t,n){const s=6&n?W(r,[2&n&&{params:t[1]},4&n&&j(t[2])]):{};if(i!==(i=t[0])){if(e){D();const t=e;U(t.$$.fragment,1,0,(()=>{C(t,1)})),G()}i?(e=new i(c()),e.$on("routeEvent",t[6]),B(e.$$.fragment),S(e.$$.fragment,1),F(e,o.parentNode,o)):e=null}else i&&e.$set(s)},i(t){s||(e&&S(e.$$.fragment,t),s=!0)},o(t){e&&U(e.$$.fragment,t),s=!1},d(t){t&&u(o),e&&C(e,t)}}}function P(t){let n,e,o,s;const r=[z,L],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=r[n](t),{c(){e.c(),o=h()},m(t,e){i[n].m(t,e),l(t,o,e),s=!0},p(t,[s]){let l=n;n=c(t),n===l?i[n].p(t,s):(D(),U(i[l],1,1,(()=>{i[l]=null})),G(),e=i[n],e?e.p(t,s):(e=i[n]=r[n](t),e.c()),S(e,1),e.m(o.parentNode,o))},i(t){s||(S(e),s=!0)},o(t){U(e),s=!1},d(t){i[n].d(t),t&&u(o)}}}function q(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const K=Q(null,(function(t){t(q());const n=()=>{t(q())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));function _(t,n,e){let{routes:o={}}=n,{prefix:s=""}=n,{restoreScrollState:r=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,s,r,i=[],c="",l=t.split("/");for(l[0]||l.shift();s=l.shift();)"*"===(e=s[0])?(i.push("wild"),c+="/(.*)"):":"===e?(o=s.indexOf("?",1),r=s.indexOf(".",1),i.push(s.substring(1,~o?o:~r?r:s.length)),c+=~o&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(c+=(~o?"?":"")+"\\"+s.substring(r))):c+="/"+s;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(s)if("string"==typeof s){if(!t.startsWith(s))return null;t=t.substr(s.length)||"/"}else if(s instanceof RegExp){const n=t.match(s);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,n)=>{c.push(new i(n,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let l=null,u=null,a={};const f=b();async function h(t,n){await(N(),k),f(t,n)}let d=null;var p;r&&(window.addEventListener("popstate",(t=>{d=t.state&&t.state.scrollY?t.state:null})),p=()=>{d?window.scrollTo(d.scrollX,d.scrollY):window.scrollTo(0,0)},m().$$.after_update.push(p));let g=null,w=null;return K.subscribe((async t=>{g=t;let n=0;for(;n<c.length;){const o=c[n].match(t.location);if(!o){n++;continue}const s={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData};if(!await c[n].checkConditions(s))return e(0,l=null),w=null,void h("conditionsFailed",s);h("routeLoading",Object.assign({},s));const r=c[n].component;if(w!=r){r.loading?(e(0,l=r.loading),w=r,e(1,u=r.loadingParams),e(2,a={}),h("routeLoaded",Object.assign({},s,{component:l,name:l.name}))):(e(0,l=null),w=null);const n=await r();if(t!=g)return;e(0,l=n&&n.default||n),w=r}return o&&"object"==typeof o&&Object.keys(o).length?e(1,u=o):e(1,u=null),e(2,a=c[n].props),void h("routeLoaded",Object.assign({},s,{component:l,name:l.name}))}e(0,l=null),w=null})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,s=t.prefix),"restoreScrollState"in t&&e(5,r=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=r?"manual":"auto")},[l,u,a,o,s,r,function(n){A(t,n)},function(n){A(t,n)}]}X(K,(t=>t.location)),X(K,(t=>t.querystring));class tt extends V{constructor(t){super(),H(this,t,_,P,i,{routes:3,prefix:4,restoreScrollState:5})}}function nt(n){let e;return{c(){e=a("main"),e.innerHTML='<h1 class="svelte-9qnr4w">Website Under Development</h1> \n  <div class="this svelte-9qnr4w"><div class="card svelte-9qnr4w"><div class="container svelte-9qnr4w"><p class="svelte-9qnr4w">The Landing page is still under devlopment. However you can still add\n          Taminaru to your server!</p></div></div></div> \n  <div class="link svelte-9qnr4w"><a target="blank" href="https://discord.com/oauth2/authorize?client_id=769409289043050516&amp;permissions=2956029142&amp;scope=bot%20applications.commands" class="svelte-9qnr4w">Link bot</a></div> \n  <div class="link svelte-9qnr4w"><a target="blank" href="https://discord.com/invite/N79DZsm3m2" class="svelte-9qnr4w">Support Server!</a></div>',d(e,"class","svelte-9qnr4w")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}function et(n){let e;return{c(){e=a("div"),e.innerHTML='<h1 class="svelte-z1ziiy">404 Not Found</h1> \n  <p>This route doesn&#39;t exist.</p> \n  <p><a href="#/" class="svelte-z1ziiy">back to home</a></p>'},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}function ot(n){let e;return{c(){e=a("main"),e.innerHTML='<h3 class="svelte-bhow0c">Is seams the svelte router works...</h3> \n    \n    <button><a href="#/" class="svelte-bhow0c">Back</a></button>'},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}var st={"/":class extends V{constructor(t){super(),H(this,t,null,nt,i,{})}},"/test":class extends V{constructor(t){super(),H(this,t,null,ot,i,{})}},"*":class extends V{constructor(t){super(),H(this,t,null,et,i,{})}}};function rt(n){let e,o,s,r,i,h;return{c(){e=a("div"),o=a("footer"),s=a("a"),r=f("© ThatGuyJamal\r\n      "),i=a("img"),i.src!==(h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=")&&d(i,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII="),d(i,"alt","github logo"),d(i,"class","svelte-1xxyca9"),d(s,"href","https://github.com/ThatGuyJamal"),d(s,"target","_blank"),d(s,"rel","noopener noreferrer"),d(s,"alt","Link to my github"),d(s,"class","svelte-1xxyca9"),d(o,"class","svelte-1xxyca9"),d(e,"class","svelte-1xxyca9")},m(t,n){l(t,e,n),c(e,o),c(o,s),c(s,r),c(s,i)},p:t,i:t,o:t,d(t){t&&u(e)}}}function it(t){return[]}class ct extends V{constructor(t){super(),H(this,t,it,rt,i,{})}}function lt(n){let e,o,s,r,i;return o=new tt({props:{routes:st}}),r=new ct({}),{c(){e=a("main"),B(o.$$.fragment),s=f(" "),B(r.$$.fragment),d(e,"class","svelte-1knh9dm")},m(t,n){l(t,e,n),F(o,e,null),c(e,s),F(r,e,null),i=!0},p:t,i(t){i||(S(o.$$.fragment,t),S(r.$$.fragment,t),i=!0)},o(t){U(o.$$.fragment,t),U(r.$$.fragment,t),i=!1},d(t){t&&u(e),C(o),C(r)}}}return new class extends V{constructor(t){super(),H(this,t,null,lt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map