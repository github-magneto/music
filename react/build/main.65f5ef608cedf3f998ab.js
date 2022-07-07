"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[179],{411:(e,t,n)=>{var r=n(363),o=n.n(r);const a=ReactDOM;var i=n.n(a);const l=ReactRouterDOM;var c=n(34),u=n(746),s=n(515);function f(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e){return function(t){t.name;var n,r,a=t.src,i=t.codeInclued,l=t.codeMain,c=t.codeExclude,f=t.stay,d=o().useRef(),m=(n=o().useState(!1),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(n,r)||h(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=m[0],g=m[1],b=function(){(0,u.OM)(a),g(!0),d.current&&clearTimeout(d.current),d.current=setTimeout((function(){g(!1),d.current=null}),500)},v=o().useMemo((function(){return f&&i.some((function(e){return(0,u.VH)(e,s.Z.state.pressKeep)}))||y}));o().useEffect((function(){l&&0!==l.length&&!l.includes(s.Z.state.pressKeep[s.Z.state.pressKeep.length-1])||i.some((function(e){return(0,u.VH)(e,s.Z.state.pressKeep)}))&&(c&&0!==c.length&&(0,u.VH)(c,s.Z.state.pressKeep)||b())}),[s.Z.state.pressUpdate]);var E=p(p({},t),{},{clicking:v,onClick:b});return o().createElement(e,E)}}function v(e){return s.Z.state.tooltip?o().createElement(c.Tooltip,e):e.children}var E=b((function(e){var t=e.name,n=e.codeInclued,r=e.clicking,a=e.onClick,i=o().useMemo((function(){return{flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",cursor:"pointer",transition:"0.5s all",width:72,height:72,margin:8,borderRadius:12,fontWeight:"bold",position:"relative",fontSize:12,boxShadow:"0 4px 8px gray",background:r?"gray":"white"}}),[r]);return o().createElement(v,{title:n.map((function(e){return o().createElement("div",null,e.join(" + "))}))},o().createElement("div",{style:i,onMouseDown:"pc"===(0,u.Wt)()?a:void 0,onTouchStart:"phone"===(0,u.Wt)()?a:void 0},o().createElement("div",null,t||"")))}));b((function(e){var t=e.name,n=e.codeInclued,r=e.clicking,a=e.onClick,i=o().useMemo((function(){return{flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",cursor:"pointer",transition:"0.5s all",width:64,height:64,margin:8,borderRadius:12,fontWeight:"bold",position:"relative",fontSize:12,boxShadow:"0 4px 8px gray",background:r?"gray":"white",transform:r?"rotate(".concat(Math.random()<.5?45:-45,"deg)"):"rotate(0)"}}),[r]);return o().createElement(v,{title:n.map((function(e){return o().createElement("div",null,e.join(" + "))}))},o().createElement("div",null,o().createElement("div",{style:i,onMouseDown:"pc"===(0,u.Wt)()?a:void 0,onTouchStart:"phone"===(0,u.Wt)()?a:void 0},o().createElement("div",null,t||""))))}));var w=[{name:"Piano",dependencies:["console.keyboard.json","console.piano.json"],component:function(e){var t=["A","B","C","D","E","F","G"];return o().createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",alignContent:"center"}},o().createElement("div",{style:{width:"fit-content",height:"fit-content",display:"flex"}},o().createElement("div",null,t.map((function(t){return o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.piano.json"].filter((function(e){return e.name.includes(t)&&!e.name.includes("M")})).map((function(e,t){return o().createElement(E,e)})))}))),o().createElement("div",{style:{width:48}}),o().createElement("div",null,t.map((function(t){return o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.piano.json"].filter((function(e){return e.name.includes(t)&&e.name.includes("M")})).map((function(e,t){return o().createElement(E,e)})))})))),o().createElement("div",{style:{width:"100%",height:48}}),o().createElement("div",{style:{width:"fit-content",height:"fit-content",display:"flex"}},o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.keyboard.json"].filter((function(e){return"RFVEDCWSX".includes(e.name)})).map((function(e,t){return o().createElement(E,d({},e,{stay:!0}))}))),o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",margin:"0 24px"}},e.media["console.keyboard.json"].filter((function(e){return"Space"===e.name})).map((function(e,t){return o().createElement(E,d({},e,{stay:!0}))}))),o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.keyboard.json"].filter((function(e){return"IJNOKMPL".includes(e.name)})).map((function(e,t){return o().createElement(E,d({},e,{stay:!0}))})))))}},{name:"Hatsune",dependencies:["console.hatsune.json"],component:function(e){return o().createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",alignContent:"center"}},[[0,5],[6,11],[12,17],[18,23],[24,29]].map((function(t){return o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.hatsune.json"].filter((function(e,n){return n>=t[0]&&n<=t[1]})).map((function(e){return o().createElement(E,e)})))})))}}];const Z=function(){var e=o().useMemo((function(){return w.find((function(e){return e.name===s.Z.state.console}))}),[s.Z.state.console]),t=o().useMemo((function(){if(!e.dependencies.filter((function(e){return!s.Z.state.media.find((function(t){return t.name===e}))})).length){var t={};return e.dependencies.forEach((function(e){return t[e]=s.Z.state.media.find((function(t){return t.name===e})).source})),t}}),[s.Z.state.console,s.Z.state.media]);return o().useEffect((function(){var e=w.find((function(e){return e.name===s.Z.state.console})).dependencies.filter((function(e){return!s.Z.state.media.find((function(t){return t.name===e}))}));e.length&&(s.Z.state.xhrLoading=!0,s.Z.setState(s.Z.state),Promise.all(e.map((function(e){return new Promise((function(t){"console.piano.json"===e&&n.e(173).then(n.t.bind(n,173,19)).then((function(n){return t({name:e,source:n.default})})),"console.keyboard.json"===e&&n.e(840).then(n.t.bind(n,840,19)).then((function(n){return t({name:e,source:n.default})})),"console.hatsune.json"===e&&n.e(895).then(n.t.bind(n,895,19)).then((function(n){return t({name:e,source:n.default})}))}))}))).then((function(e){s.Z.state.media=[].concat(f(s.Z.state.media),f(e)),s.Z.state.xhrLoading=!1,s.Z.setState(s.Z.state)})))}),[s.Z.state.console]),t?o().createElement(e.component,{media:t}):null};var S=n(914);function x(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=[{name:"Asphalt",dependencies:["bgm.asphalt.json"]},{name:"Warcraft",dependencies:["bgm.warcraft.json"]}];const A=function(){var e=o().useMemo((function(){return C.find((function(e){return e.name===s.Z.state.bgmCollection}))}),[s.Z.state.bgmCollection]),t=o().useMemo((function(){if(!e.dependencies.filter((function(e){return!s.Z.state.media.find((function(t){return t.name===e}))})).length)return s.Z.state.media.filter((function(t){return e.dependencies.includes(t.name)})).reduce((function(e,t){return[].concat(x(e),x(t.source))}),[]).find((function(e){return e.name===s.Z.state.bgm}))}),[s.Z.state.bgm,s.Z.state.media]);return o().useEffect((function(){var t=e.dependencies.filter((function(e){return!s.Z.state.media.find((function(t){return t.name===e}))}));t.length&&(s.Z.state.xhrLoading=!0,s.Z.setState(s.Z.state),Promise.all(t.map((function(e){return new Promise((function(t){"bgm.asphalt.json"===e&&n.e(863).then(n.t.bind(n,863,19)).then((function(n){return t({name:e,source:n.default})})),"bgm.warcraft.json"===e&&n.e(451).then(n.t.bind(n,451,19)).then((function(n){return t({name:e,source:n.default})}))}))}))).then((function(e){s.Z.state.media=[].concat(x(s.Z.state.media),x(e)),s.Z.state.xhrLoading=!1,s.Z.setState(s.Z.state)})))}),[s.Z.state.bgmCollection]),o().useEffect((function(){if(!s.Z.state.bgm&&!e.dependencies.filter((function(e){return!s.Z.state.media.find((function(t){return t.name===e}))})).length){var t=s.Z.state.media.filter((function(t){return e.dependencies.includes(t.name)})).reduce((function(e,t){return[].concat(x(e),x(t.source))}),[]);s.Z.state.bgm=t[0].name,s.Z.setState(s.Z.state)}}),[s.Z.state.bgmCollection,s.Z.state.media]),t?o().createElement("audio",{key:t.src,loop:!0,autoPlay:!0,controls:!0},o().createElement("source",{src:t.src})):null};function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(){var e=function(e){e(s.Z.state),s.Z.setState(s.Z.state)};return o().createElement(c.Grid,{container:!0,spacing:2,alignContent:"flex-start"},o().createElement(c.Grid,{item:!0,xs:12,style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o().createElement("div",{style:{fontWeight:"bold",marginLeft:24,minWidth:240}},"Playground Scale"),o().createElement(c.Slider,{value:s.Z.state.scale,onChange:function(t,n){return e((function(e){return e.scale=n}))},min:0,max:2,step:.01,valueLabelDisplay:"auto",color:"secondary"})),o().createElement(c.Grid,{item:!0,xs:12,style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o().createElement("div",{style:{fontWeight:"bold",marginLeft:24,minWidth:240}},"Tooltip"),o().createElement(c.Switch,{checked:s.Z.state.tooltip,onChange:function(t){return e((function(e){return e.tooltip=t.target.checked}))},color:"secondary"})))}function T(){return o().createElement(c.List,{style:{width:"100%",height:"100%",overflow:"auto",boxSizing:"border-box"}},w.map((function(e){return o().createElement(c.ListItem,{disablePadding:!0},o().createElement(c.ListItemButton,{onClick:function(){return s.Z.assignState({console:e.name})}},o().createElement(c.ListItemText,{sx:{"& .MuiTypography-root":{fontWeight:"bold"}}},e.name)))})))}function P(){var e=o().useMemo((function(){var e=C.find((function(e){return e.name===s.Z.state.bgmCollection}));return s.Z.state.media.filter((function(t){return e.dependencies.includes(t.name)})).reduce((function(e,t){return[].concat(O(e),O(t.source))}),[])}),[s.Z.state.bgmCollection,s.Z.state.media]);return o().createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column"}},o().createElement(c.Select,{value:s.Z.state.bgmCollection,onChange:function(e){return s.Z.assignState({bgmCollection:e.target.value,bgm:null})},fullWidth:!0,style:{marginBottom:12,fontWeight:"bold"}},C.map((function(e){return o().createElement(c.MenuItem,{key:e.name,value:e.name},e.name)}))),o().createElement(c.List,{style:{width:"100%",overflow:"auto",flexGrow:1}},e.map((function(e){return o().createElement(c.ListItem,{disablePadding:!0},o().createElement(c.ListItemButton,{onClick:function(){return s.Z.assignState({bgm:e.name})}},o().createElement(c.ListItemText,{sx:{"& .MuiTypography-root":{fontWeight:"bold"}}},e.name)))}))))}const W=function(){var e=I(o().useState(!1),2),t=e[0],n=e[1],r=I(o().useState("System"),2),a=r[0],i=r[1],l=I(o().useState(["System","Console","BGM"]),2),u=l[0];return l[1],o().createElement(o().Fragment,null,o().createElement(c.Fab,{onClick:function(){return n(!0)}},o().createElement(S.Z,null)),o().createElement(c.Dialog,{open:t,sx:{"& .MuiDialog-paper":{width:"100%",maxWidth:"1080px",height:"720px",maxHeight:"75vh"}},onClose:function(){return n()}},o().createElement(c.DialogContent,{dividers:!0},o().createElement("div",{style:{display:"flex",height:"100%"}},o().createElement(c.Tabs,{value:a,onChange:function(e,t){return i(t)},orientation:"vertical",style:{width:120,flexShrink:0},textColor:"inherit",indicatorColor:"secondary"},u.map((function(e,t){return o().createElement(c.Tab,{key:t,value:e,label:e,style:{fontWeight:"bold"}})}))),o().createElement("div",{style:{width:48}}),o().createElement("div",{style:{padding:24,width:"100%",height:"100%",boxSizing:"border-box"}},"System"===a?o().createElement(L,null):null,"Console"===a?o().createElement(T,null):null,"BGM"===a?o().createElement(P,null):null)))))};function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const D=s.Z.withBindRender((function(){return o().useEffect((function(){var e=function(e){var t;console.log(e.code),s.Z.state.pressKeep[s.Z.state.pressKeep.length-1]!==e.code&&(s.Z.state.pressKeep=s.Z.state.pressKeep.includes(e.code)?s.Z.state.pressKeep:[].concat(function(e){if(Array.isArray(e))return R(e)}(t=s.Z.state.pressKeep)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.code]),s.Z.state.pressUpdate=s.Z.state.pressUpdate+1,s.Z.setState(s.Z.state))},t=function(e){s.Z.state.pressKeep=s.Z.state.pressKeep.filter((function(t){return!t.includes(e.code)})),s.Z.setState(s.Z.state)};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}}),[]),o().createElement("div",{style:{width:"100vw",height:"100vh",position:"relative"}},o().createElement("div",{style:{width:"100%",height:"100%",overflow:"hidden"}},o().createElement("div",{style:{position:"relative",width:"100%",height:"100%",transform:"scale(".concat(s.Z.state.scale,")")}},o().createElement(Z,null))),o().createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",right:12,bottom:12,position:"absolute",zIndex:1}},o().createElement(W,null)),o().createElement("div",{style:{width:"fit-content",bottom:12,left:0,right:0,margin:"auto",position:"absolute",zIndex:1}},o().createElement(A,null)))})),K=s.Z.withBindRender((function(){var e=o().useRef(null);return o().useEffect((function(){s.Z.state.message&&(e.current&&clearTimeout(e.current),e.current=setTimeout((function(){s.Z.assignState({message:""}),e.current=null}),1500))}),[s.Z.state.message]),o().createElement(c.Snackbar,{open:!!s.Z.state.message,message:s.Z.state.message,anchorOrigin:{vertical:"top",horizontal:"center"}})}),(function(e){return[e.message]}));function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const U=s.Z.withBindRender((function(){var e,t,n=(e=o().useState(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=n[0],a=n[1],i=o().useRef(null);return o().useEffect((function(){s.Z.state.xhrLoading&&(a(!0),i.current&&clearTimeout(i.current)),s.Z.state.xhrLoading||(i.current&&clearTimeout(i.current),i.current=setTimeout((function(){a(!1),i.current=null}),500))}),[s.Z.state.xhrLoading]),r?o().createElement(c.Backdrop,{open:!0,style:{color:"#fff",zIndex:1e4}},o().createElement(c.CircularProgress,{color:"inherit"})):null}),(function(e){return[e.xhrLoading]})),z=function(){return o().createElement(l.HashRouter,null,o().createElement(K,null),o().createElement(U,null),o().createElement(l.Switch,null,o().createElement(l.Route,{path:"/",exact:!0},o().createElement(D,null)),o().createElement(l.Route,{path:"/Base64",component:function(){return n.e(690).then(n.bind(n,690))},exact:!0})))};var G=n(379),H=n.n(G),V=n(795),F=n.n(V),$=n(569),J=n.n($),N=n(565),X=n.n(N),Y=n(216),q=n.n(Y),Q=n(589),_=n.n(Q),ee=n(788),te={};te.styleTagTransform=_(),te.setAttributes=X(),te.insert=J().bind(null,"head"),te.domAPI=F(),te.insertStyleElement=q(),H()(ee.Z,te),ee.Z&&ee.Z.locals&&ee.Z.locals,i().render(o().createElement(z,null),document.getElementById("root"))},746:(e,t,n)=>{n.d(t,{JG:()=>o,OM:()=>a,VH:()=>i,Wt:()=>l,YV:()=>r});var r=function(e,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)}},o=function(e,t){var n=document.createElement("input");document.body.appendChild(n),n.setAttribute("value",e),n.select(),document.execCommand("copy")&&(document.execCommand("copy"),t()),document.body.removeChild(n)},a=function(e){new Audio(e).play()},i=function(e,t){return!e.some((function(e){return!t.includes(e)}))},l=function(){return/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?"phone":"pc"}},515:(e,t,n)=>{n.d(t,{Z:()=>o});var r=new(n(199).Z);r.state={xhrLoading:!1,message:0,pressKeep:[],pressUpdate:0,tooltip:!0,scale:1,media:[],console:"Piano",bgmCollection:"Asphalt",bgm:null};const o=r},788:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(300),o=n.n(r),a=n(743),i=n.n(a)()(o());i.push([e.id,"body {\n  padding: 0;\n  margin: 0;\n\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n}",""]);const l=i},34:e=>{e.exports=MaterialUI},363:e=>{e.exports=React}},e=>{e.O(0,[216],(()=>(411,e(e.s=411)))),e.O()}]);