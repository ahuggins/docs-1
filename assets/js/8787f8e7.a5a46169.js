"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[9605],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Fields Boosting",s={unversionedId:"usage/search/field-boosting",id:"usage/search/field-boosting",title:"Fields Boosting",description:"Available since v0.4.2",source:"@site/docs/03-usage/search/02-field-boosting.md",sourceDirName:"03-usage/search",slug:"/usage/search/field-boosting",permalink:"/usage/search/field-boosting",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/docs/03-usage/search/02-field-boosting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"main",previous:{title:"Introduction to search",permalink:"/usage/search/search"},next:{title:"Facets",permalink:"/usage/search/facets"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fields-boosting"},"Fields Boosting"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Available since ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.4.2"))),(0,a.kt)("p",null,"Starting with Lyra ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.4.2"),", you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"boost")," interface to boost the\nimportance of a field in the search results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const searchResult = await search(movieDB, {\n  term: "Harry",\n  properties: "*",\n  boost: {\n    title: 2,\n    director: 1.5,\n  }\n});\n')),(0,a.kt)("p",null,"In this example, we are boosting the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," field by ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"director")," field\nby ",(0,a.kt)("inlineCode",{parentName:"p"},"1.5"),"."))}u.isMDXComponent=!0}}]);