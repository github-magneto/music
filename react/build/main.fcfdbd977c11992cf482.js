"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[179],{795:(e,t,n)=>{var r=n(363),o=n.n(r);const a=ReactDOM;var i=n.n(a);ReactRouterDOM;const l=MaterialUI;var c=function(e,t){return!e.some((function(e){return!t.includes(e)}))},u=function(){return/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?"phone":"pc"},s=new(n(199).Z);s.state={xhrLoading:!1,message:0,pressKeep:[],pressUpdate:0,tooltip:!0,scale:1,media:[],console:"Piano",bgmCollection:"Asphalt",bgm:null};const f=s;function d(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){return function(t){t.name;var n,r,a=t.src,i=t.codeInclued,l=t.codeMain,u=t.codeExclude,s=t.stay,d=o().useRef(),m=(n=o().useState(!1),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(n,r)||g(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=m[0],h=m[1],b=function(){!function(e){new Audio(e).play()}(a),h(!0),d.current&&clearTimeout(d.current),d.current=setTimeout((function(){h(!1),d.current=null}),500)},v=o().useMemo((function(){return s&&i.some((function(e){return c(e,f.state.pressKeep)}))||p}));o().useEffect((function(){l&&0!==l.length&&!l.includes(f.state.pressKeep[f.state.pressKeep.length-1])||i.some((function(e){return c(e,f.state.pressKeep)}))&&(u&&0!==u.length&&c(u,f.state.pressKeep)||b())}),[f.state.pressUpdate]);var E=y(y({},t),{},{clicking:v,onClick:b});return o().createElement(e,E)}}function E(e){return f.state.tooltip?o().createElement(l.Tooltip,e):e.children}var w=v((function(e){var t=e.name,n=e.codeInclued,r=e.clicking,a=e.onClick,i=o().useMemo((function(){return{flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",cursor:"pointer",transition:"0.5s all",width:72,height:72,margin:8,borderRadius:12,fontWeight:"bold",position:"relative",fontSize:12,boxShadow:"0 4px 8px gray",background:r?"gray":"white"}}),[r]);return o().createElement(E,{title:n.map((function(e){return o().createElement("div",null,e.join(" + "))}))},o().createElement("div",{style:i,onMouseDown:"pc"===u()?a:void 0,onTouchStart:"phone"===u()?a:void 0},o().createElement("div",null,t||"")))}));v((function(e){var t=e.name,n=e.codeInclued,r=e.clicking,a=e.onClick,i=o().useMemo((function(){return{flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",cursor:"pointer",transition:"0.5s all",width:64,height:64,margin:8,borderRadius:12,fontWeight:"bold",position:"relative",fontSize:12,boxShadow:"0 4px 8px gray",background:r?"gray":"white",transform:r?"rotate(".concat(Math.random()<.5?45:-45,"deg)"):"rotate(0)"}}),[r]);return o().createElement(E,{title:n.map((function(e){return o().createElement("div",null,e.join(" + "))}))},o().createElement("div",null,o().createElement("div",{style:i,onMouseDown:"pc"===u()?a:void 0,onTouchStart:"phone"===u()?a:void 0},o().createElement("div",null,t||""))))}));var S=[{name:"Piano",dependencies:["console.keyboard.json","console.piano.json"],component:function(e){var t=["A","B","C","D","E","F","G"];return o().createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",alignContent:"center"}},o().createElement("div",{style:{width:"fit-content",height:"fit-content",display:"flex"}},o().createElement("div",null,t.map((function(t){return o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.piano.json"].filter((function(e){return e.name.includes(t)&&!e.name.includes("M")})).map((function(e,t){return o().createElement(w,e)})))}))),o().createElement("div",{style:{width:48}}),o().createElement("div",null,t.map((function(t){return o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.piano.json"].filter((function(e){return e.name.includes(t)&&e.name.includes("M")})).map((function(e,t){return o().createElement(w,e)})))})))),o().createElement("div",{style:{width:"100%",height:48}}),o().createElement("div",{style:{width:"fit-content",height:"fit-content",display:"flex"}},o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.keyboard.json"].filter((function(e){return"RFVEDCWSX".includes(e.name)})).map((function(e,t){return o().createElement(w,m({},e,{stay:!0}))}))),o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",margin:"0 24px"}},e.media["console.keyboard.json"].filter((function(e){return"Space"===e.name})).map((function(e,t){return o().createElement(w,m({},e,{stay:!0}))}))),o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.keyboard.json"].filter((function(e){return"IJNOKMPL".includes(e.name)})).map((function(e,t){return o().createElement(w,m({},e,{stay:!0}))})))))}},{name:"Hatsune",dependencies:["console.hatsune.json"],component:function(e){return o().createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",alignContent:"center"}},[[0,5],[6,11],[12,17],[18,23],[24,29]].map((function(t){return o().createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},e.media["console.hatsune.json"].filter((function(e,n){return n>=t[0]&&n<=t[1]})).map((function(e){return o().createElement(w,e)})))})))}}];const x=function(){var e=o().useMemo((function(){return S.find((function(e){return e.name===f.state.console}))}),[f.state.console]),t=o().useMemo((function(){if(!e.dependencies.filter((function(e){return!f.state.media.find((function(t){return t.name===e}))})).length){var t={};return e.dependencies.forEach((function(e){return t[e]=f.state.media.find((function(t){return t.name===e})).source})),t}}),[f.state.console,f.state.media]);return o().useEffect((function(){var e=S.find((function(e){return e.name===f.state.console})).dependencies.filter((function(e){return!f.state.media.find((function(t){return t.name===e}))}));e.length&&(f.state.xhrLoading=!0,f.setState(f.state),Promise.all(e.map((function(e){return new Promise((function(t){"console.piano.json"===e&&n.e(173).then(n.t.bind(n,173,19)).then((function(n){return t({name:e,source:n.default})})),"console.keyboard.json"===e&&n.e(840).then(n.t.bind(n,840,19)).then((function(n){return t({name:e,source:n.default})})),"console.hatsune.json"===e&&n.e(895).then(n.t.bind(n,895,19)).then((function(n){return t({name:e,source:n.default})}))}))}))).then((function(e){f.state.media=[].concat(d(f.state.media),d(e)),f.state.xhrLoading=!1,f.setState(f.state)})))}),[f.state.console]),t?o().createElement(e.component,{media:t}):null};var j=n(914);function C(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=[{name:"Asphalt",dependencies:["bgm.asphalt.json"]},{name:"Warcraft",dependencies:["bgm.warcraft.json"]}];const O=function(){var e=o().useMemo((function(){return I.find((function(e){return e.name===f.state.bgmCollection}))}),[f.state.bgmCollection]),t=o().useMemo((function(){if(!e.dependencies.filter((function(e){return!f.state.media.find((function(t){return t.name===e}))})).length)return f.state.media.filter((function(t){return e.dependencies.includes(t.name)})).reduce((function(e,t){return[].concat(C(e),C(t.source))}),[]).find((function(e){return e.name===f.state.bgm}))}),[f.state.bgm,f.state.media]);return o().useEffect((function(){var t=e.dependencies.filter((function(e){return!f.state.media.find((function(t){return t.name===e}))}));t.length&&(f.state.xhrLoading=!0,f.setState(f.state),Promise.all(t.map((function(e){return new Promise((function(t){"bgm.asphalt.json"===e&&n.e(863).then(n.t.bind(n,863,19)).then((function(n){return t({name:e,source:n.default})})),"bgm.warcraft.json"===e&&n.e(451).then(n.t.bind(n,451,19)).then((function(n){return t({name:e,source:n.default})}))}))}))).then((function(e){f.state.media=[].concat(C(f.state.media),C(e)),f.state.xhrLoading=!1,f.setState(f.state)})))}),[f.state.bgmCollection]),o().useEffect((function(){if(!f.state.bgm&&!e.dependencies.filter((function(e){return!f.state.media.find((function(t){return t.name===e}))})).length){var t=f.state.media.filter((function(t){return e.dependencies.includes(t.name)})).reduce((function(e,t){return[].concat(C(e),C(t.source))}),[]);f.state.bgm=t[0].name,f.setState(f.state)}}),[f.state.bgmCollection,f.state.media]),t?o().createElement("audio",{key:t.src,loop:!0,autoPlay:!0,controls:!0},o().createElement("source",{src:t.src})):null};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||T(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(){var e=function(e){e(f.state),f.setState(f.state)};return o().createElement(l.Grid,{container:!0,spacing:2,alignContent:"flex-start"},o().createElement(l.Grid,{item:!0,xs:12,style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o().createElement("div",{style:{fontWeight:"bold",marginLeft:24,minWidth:240}},"Playground Scale"),o().createElement(l.Slider,{value:f.state.scale,onChange:function(t,n){return e((function(e){return e.scale=n}))},min:0,max:2,step:.01,valueLabelDisplay:"auto",color:"secondary"})),o().createElement(l.Grid,{item:!0,xs:12,style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o().createElement("div",{style:{fontWeight:"bold",marginLeft:24,minWidth:240}},"Tooltip"),o().createElement(l.Switch,{checked:f.state.tooltip,onChange:function(t){return e((function(e){return e.tooltip=t.target.checked}))},color:"secondary"})))}function W(){return o().createElement(l.List,{style:{width:"100%",height:"100%",overflow:"auto",boxSizing:"border-box"}},S.map((function(e){return o().createElement(l.ListItem,{disablePadding:!0},o().createElement(l.ListItemButton,{onClick:function(){return f.assignState({console:e.name})}},o().createElement(l.ListItemText,{sx:{"& .MuiTypography-root":{fontWeight:"bold"}}},e.name)))})))}function D(){var e=o().useMemo((function(){var e=I.find((function(e){return e.name===f.state.bgmCollection}));return f.state.media.filter((function(t){return e.dependencies.includes(t.name)})).reduce((function(e,t){return[].concat(M(e),M(t.source))}),[])}),[f.state.bgmCollection,f.state.media]);return o().createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column"}},o().createElement(l.Select,{value:f.state.bgmCollection,onChange:function(e){return f.assignState({bgmCollection:e.target.value,bgm:null})},fullWidth:!0,style:{marginBottom:12,fontWeight:"bold"}},I.map((function(e){return o().createElement(l.MenuItem,{key:e.name,value:e.name},e.name)}))),o().createElement(l.List,{style:{width:"100%",overflow:"auto",flexGrow:1}},e.map((function(e){return o().createElement(l.ListItem,{disablePadding:!0},o().createElement(l.ListItemButton,{onClick:function(){return f.assignState({bgm:e.name})}},o().createElement(l.ListItemText,{sx:{"& .MuiTypography-root":{fontWeight:"bold"}}},e.name)))}))))}const K=function(){var e=k(o().useState(!1),2),t=e[0],n=e[1],r=k(o().useState("System"),2),a=r[0],i=r[1],c=k(o().useState(["System","Console","BGM"]),2),u=c[0];return c[1],o().createElement(o().Fragment,null,o().createElement(l.Fab,{onClick:function(){return n(!0)}},o().createElement(j.Z,null)),o().createElement(l.Dialog,{open:t,sx:{"& .MuiDialog-paper":{width:"100%",maxWidth:"1080px",height:"720px",maxHeight:"75vh"}},onClose:function(){return n()}},o().createElement(l.DialogContent,{dividers:!0},o().createElement("div",{style:{display:"flex",height:"100%"}},o().createElement(l.Tabs,{value:a,onChange:function(e,t){return i(t)},orientation:"vertical",style:{width:120,flexShrink:0},textColor:"inherit",indicatorColor:"secondary"},u.map((function(e,t){return o().createElement(l.Tab,{key:t,value:e,label:e,style:{fontWeight:"bold"}})}))),o().createElement("div",{style:{width:48}}),o().createElement("div",{style:{padding:24,width:"100%",height:"100%",boxSizing:"border-box"}},"System"===a?o().createElement(P,null):null,"Console"===a?o().createElement(W,null):null,"BGM"===a?o().createElement(D,null):null)))))};function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const B=f.withBindRender((function(){return o().useEffect((function(){var e=function(e){var t;console.log(e.code),f.state.pressKeep[f.state.pressKeep.length-1]!==e.code&&(f.state.pressKeep=f.state.pressKeep.includes(e.code)?f.state.pressKeep:[].concat(function(e){if(Array.isArray(e))return R(e)}(t=f.state.pressKeep)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.code]),f.state.pressUpdate=f.state.pressUpdate+1,f.setState(f.state))},t=function(e){f.state.pressKeep=f.state.pressKeep.filter((function(t){return!t.includes(e.code)})),f.setState(f.state)};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}}),[]),o().createElement("div",{style:{width:"100vw",height:"100vh",position:"relative"}},o().createElement("div",{style:{width:"100%",height:"100%",overflow:"hidden"}},o().createElement("div",{style:{position:"relative",width:"100%",height:"100%",transform:"scale(".concat(f.state.scale,")")}},o().createElement(x,null))),o().createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",right:12,bottom:12,position:"absolute",zIndex:1}},o().createElement(K,null)),o().createElement("div",{style:{width:"fit-content",bottom:12,left:0,right:0,margin:"auto",position:"absolute",zIndex:1}},o().createElement(O,null)))})),U=f.withBindRender((function(){var e=o().useRef(null);return o().useEffect((function(){f.state.message&&(e.current&&clearTimeout(e.current),e.current=setTimeout((function(){f.assignState({message:""}),e.current=null}),1500))}),[f.state.message]),o().createElement(l.Snackbar,{open:!!f.state.message,message:f.state.message,anchorOrigin:{vertical:"top",horizontal:"center"}})}),(function(e){return[e.message]}));function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const G=f.withBindRender((function(){var e,t,n=(e=o().useState(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=n[0],a=n[1],i=o().useRef(null);return o().useEffect((function(){f.state.xhrLoading&&(a(!0),i.current&&clearTimeout(i.current)),f.state.xhrLoading||(i.current&&clearTimeout(i.current),i.current=setTimeout((function(){a(!1),i.current=null}),500))}),[f.state.xhrLoading]),r?o().createElement(l.Backdrop,{open:!0,style:{color:"#fff",zIndex:1e4}},o().createElement(l.CircularProgress,{color:"inherit"})):null}),(function(e){return[e.xhrLoading]})),Z=function(){return o().createElement(o().Fragment,null,o().createElement(U,null),o().createElement(G,null),o().createElement(B,null))};var F=n(379),$=n.n(F),H=n(380),J=n.n(H),N=n(569),V=n.n(N),X=n(565),q=n.n(X),Q=n(216),Y=n.n(Q),_=n(589),ee=n.n(_),te=n(788),ne={};ne.styleTagTransform=ee(),ne.setAttributes=q(),ne.insert=V().bind(null,"head"),ne.domAPI=J(),ne.insertStyleElement=Y(),$()(te.Z,ne),te.Z&&te.Z.locals&&te.Z.locals,i().render(o().createElement(Z,null),document.getElementById("root"))},788:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(300),o=n.n(r),a=n(743),i=n.n(a)()(o());i.push([e.id,"body {\n  padding: 0;\n  margin: 0;\n\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n}",""]);const l=i},363:e=>{e.exports=React}},e=>{e.O(0,[216],(()=>(795,e(e.s=795)))),e.O()}]);