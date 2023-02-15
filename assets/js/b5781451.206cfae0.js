"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[7050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"CommonJS imports",sidebar_position:5},i="CommonJS Imports",s={unversionedId:"migration-guide/commonjs",id:"migration-guide/commonjs",title:"CommonJS Imports",description:'Lyra now ships ESM modules by default. This allows us to move faster when providing new features and bug fixes, as well as using the "exports" field in package.json to provide a better developer experience.',source:"@site/docs/02-migration-guide/05-commonjs.md",sourceDirName:"02-migration-guide",slug:"/migration-guide/commonjs",permalink:"/migration-guide/commonjs",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/docs/02-migration-guide/05-commonjs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"CommonJS imports",sidebar_position:5},sidebar:"main",previous:{title:"Async methods",permalink:"/migration-guide/async-methods"},next:{title:"Default IDs",permalink:"/migration-guide/default-ids"}},l={},p=[{value:"TypeScript",id:"typescript",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commonjs-imports"},"CommonJS Imports"),(0,o.kt)("p",null,"Lyra now ships ",(0,o.kt)("strong",{parentName:"p"},"ESM")," modules by default. This allows us to move faster when providing new features and bug fixes, as well as using the ",(0,o.kt)("inlineCode",{parentName:"p"},'"exports"')," field in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to provide a better developer experience."),(0,o.kt)("p",null,"CommonJS imports are still supported, but you'll need to import Lyra from ",(0,o.kt)("inlineCode",{parentName:"p"},"@lyrasearch/lyra/cjs")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"@lyrasearch/lyra"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- const { search, insert, create } = require("@lyrasearch/lyra");\n+ const { search, insert, create } = require("@lyrasearch/lyra/cjs");\n')),(0,o.kt)("p",null,"No other changes are required."),(0,o.kt)("h2",{id:"typescript"},"TypeScript"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleResolution")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"compilerOptions")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\xa0to be either ",(0,o.kt)("inlineCode",{parentName:"p"},"Node16")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeNext"),"."),(0,o.kt)("p",null,"When importing types, always refer to the standard lyra import:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Language } from '@lyrasearch/lyra'\n")))}m.isMDXComponent=!0}}]);