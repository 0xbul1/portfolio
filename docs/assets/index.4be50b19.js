import{g as e,o as t,c as s,a as o,p as n,b as a,r as i,d as r,w as l,e as c,f as d,t as m,h as u,i as p,j as h,k as f,T as v,F as g,l as y,m as w,n as k,q as _,s as b}from"./vendor.9a5574c9.js";function j(e,t){let s;return()=>{clearTimeout(s),s=setTimeout((()=>{s=null,e.apply(this,arguments)}),t)}}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const D=e.timeline(),E=e=>{D.from(".line span",1.8,{y:100,ease:"power4.out",delay:1,skewY:7,stagger:{amount:.3}}).to(".overlay-top",1.6,{height:0,ease:"expo.inOut",stagger:.4}).to(".overlay-bottom",1.6,{width:0,ease:"expo.inOut",delay:-.8,stagger:{amount:.4}}).to(".intro-overlay",0,{css:{display:"none"}}).from(".case-image img",1.6,{scale:1.4,ease:"expo.inOut",delay:-2,stagger:{amount:.4},onComplete:e})},O={xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64"},L=[o('<g id="Group_1" data-name="Group 1" transform="translate(-152 -439)"><line id="Line_1" data-name="Line 1" y1="14.91" transform="translate(184 463.788)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></line><path id="Path_1" data-name="Path 1" d="M6,9.155,10.949,5" transform="translate(173.051 458.302)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path><path id="Path_2" data-name="Path 2" d="M10.949,5,15.9,9.155" transform="translate(173.051 458.302)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path><g id="Ellipse_1" data-name="Ellipse 1" transform="translate(152 439)" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="2.5"><circle cx="32" cy="32" r="32" stroke="none"></circle><circle id="circle" cx="32" cy="32" r="30.75" fill="none"></circle></g></g>',1)];const P={SiteName:"Hi, I'm mjj",logoName:"MJJ",line1Desc:"I don't have to, but I have to",line2Desc:"Sorry, I'm mjj ：）",projectDesc:[{id:1,subtitle:"haha",title:"This project is for mjj",img:"img1"},{id:2,subtitle:"hoho",title:"something wonderful is about to happen",img:"img2"},{id:3,subtitle:"hehe",title:"Best wishes to mjj",img:"img3"}],email:"mjj@mjj.com",phone:"188-8888-8888"};const A={name:"Header",components:{UpArrow:function(e,o){return t(),s("svg",O,L)}},props:{dimensions:{type:Object}},setup(e){const t=i({menuOpened:!1});return r((()=>{l((()=>t.menuOpened),(t=>{var s;!0===t?(s=e.dimensions.width,D.to("nav",0,{css:{display:"block"}}).to("body",0,{css:{overflow:"hidden"}}).to(".App",1,{y:s<=654?"50vh":window.innerHeight/2,ease:"expo.inOut"}).to(".hamburger-menu span",.6,{delay:-1,scaleX:0,transformOrigin:"50% 0%",ease:"expo.inOut"}).to("#Path_1",.4,{delay:-.6,css:{strokeDashoffset:10,strokeDasharray:5}}).to("#Path_2",.4,{delay:-.6,css:{strokeDashoffset:10,strokeDasharray:20}}).to("#Line_1",.4,{delay:-.6,css:{strokeDashoffset:40,strokeDasharray:18}}).to("#circle",.6,{delay:-.8,css:{strokeDashoffset:0},ease:"expo.inOut"}).to(".hamburger-menu-close",.6,{delay:-.8,css:{display:"block"}})):D.to(".App",1,{y:0,ease:"expo.inOut"}).to("#circle",.6,{delay:-.6,css:{strokeDashoffset:-193,strokeDasharray:227}}).to("#Path_1",.4,{delay:-.6,css:{strokeDashoffset:10,strokeDasharray:10}}).to("#Path_2",.4,{delay:-.6,css:{strokeDashoffset:10,strokeDasharray:10}}).to("#Line_1",.4,{delay:-.6,css:{strokeDashoffset:40,strokeDasharray:40}}).to(".hamburger-menu span",.6,{delay:-.6,scaleX:1,transformOrigin:"50% 0%",ease:"expo.inOut"}).to(".hamburger-menu-close",0,{delay:-.1,css:{display:"none"}}).to("body",0,{css:{overflow:"auto"}}).to("nav",0,{css:{display:"none"}})}),{immediate:!0})})),{menuState:t,logoName:P.logoName}}};n("data-v-67ae45d8");const x={class:"header"},I={class:"container"},N={class:"row v-center space-between"},S={class:"logo"},H={to:"/",exact:""},T={class:"nav-toggle"},C=[d("span",null,null,-1),d("span",null,null,-1)];a(),A.render=function(e,o,n,a,i,r){const l=c("UpArrow");return t(),s("div",x,[d("div",I,[d("div",N,[d("div",S,[d("a",H,m(a.logoName),1)]),d("div",T,[d("div",{class:"hamburger-menu",onClick:o[0]||(o[0]=e=>a.menuState.menuOpened=!0)},C),d("div",{class:"hamburger-menu-close",onClick:o[1]||(o[1]=e=>a.menuState.menuOpened=!1)},[u(l)])])])])])},A.__scopeId="data-v-67ae45d8";const R={name:"Navigation",setup:()=>({email:P.email,phone:P.phone})};n("data-v-cf7e37cc");const V={class:"container"},M={class:"nav-columns"},$={class:"nav-column"},q=d("div",{class:"nav-label"},"Contact",-1),W={class:"nav-infos"},z={class:"nav-info"},B=d("li",{class:"nav-info-label"},"Email",-1),G=["href"],J={class:"nav-info"},U=d("li",{class:"nav-info-label"},"Phone",-1),X=["href"];a(),R.render=function(e,o,n,a,i,r){return t(),s("nav",null,[d("div",V,[d("div",M,[d("div",$,[q,d("div",W,[d("ul",z,[B,d("li",null,[d("a",{href:`mailto:${a.email}`},m(a.email),9,G)])]),d("ul",J,[U,d("li",null,[d("a",{href:`tel:${a.phone}`},m(a.phone),9,X)])])])])])])])},R.__scopeId="data-v-cf7e37cc";const F={components:{Header:A,Navigation:R},setup(){document.title=P.SiteName;const t=i({height:window.innerHeight,width:window.innerWidth}),s=p(!0);r((()=>{window.addEventListener("resize",o),window.addEventListener("scroll",n)})),h((()=>{window.removeEventListener("resize",o),window.removeEventListener("scroll",n)})),e.to("body",0,{css:{visibility:"visible"}});const o=j((()=>{t.height=window.innerHeight,t.width=window.innerWidth}),1e3),n=j((()=>{const e=document.documentElement.scrollTop;s.value=e<100}),100);return{dimensions:t,showHeader:s}}},K={class:"App"};F.render=function(e,o,n,a,i,r){const l=c("Header"),m=c("router-view"),p=c("Navigation");return t(),s(g,null,[u(v,{name:"vite-bounce"},{default:f((()=>[a.showHeader?(t(),y(l,{key:0,dimensions:a.dimensions},null,8,["dimensions"])):w("",!0)])),_:1}),d("div",K,[u(m,{dimensions:a.dimensions},null,8,["dimensions"])]),u(p)],64)};const Y={},Q=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in Y)return;Y[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},Z=[{path:"/:pathMatch(.*)*",redirect:"/"},{path:"/",name:"Home",component:()=>Q((()=>import("./Home.d1e0ac17.js")),["assets/Home.d1e0ac17.js","assets/Home.d8f5f1dc.css","assets/vendor.9a5574c9.js"])},{path:"/case-studies",name:"CaseStudies",component:()=>Q((()=>import("./CaseStudies.4f8282ad.js")),["assets/CaseStudies.4f8282ad.js","assets/vendor.9a5574c9.js"])},{path:"/approach",name:"Approach",component:()=>Q((()=>import("./Approach.3041b2a7.js")),["assets/Approach.3041b2a7.js","assets/vendor.9a5574c9.js"])},{path:"/services",name:"Services",component:()=>Q((()=>import("./Services.1d089628.js")),["assets/Services.1d089628.js","assets/vendor.9a5574c9.js"])},{path:"/about-us",name:"About",component:()=>Q((()=>import("./About.c74d5919.js")),["assets/About.c74d5919.js","assets/vendor.9a5574c9.js"])}],ee=k({history:_(),routes:Z});(async()=>{const e=b(F);!function(e){e.use(ee)}(e),await ee.isReady(),e.mount("#app")})();export{P as V,E as h};
