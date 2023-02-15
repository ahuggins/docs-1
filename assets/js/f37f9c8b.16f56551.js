"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[308],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,d=u["".concat(p,".").concat(m)]||u[m]||y[m]||a;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_label:"Using TypeScript",sidebar_position:8},o="Using TypeScript",s={unversionedId:"migration-guide/using-typescript",id:"migration-guide/using-typescript",title:"Using TypeScript",description:"Lyra is written in TypeScript and generates type definitions for the library via tsc.",source:"@site/docs/02-migration-guide/08-using-typescript.md",sourceDirName:"02-migration-guide",slug:"/migration-guide/using-typescript",permalink:"/migration-guide/using-typescript",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/docs/02-migration-guide/08-using-typescript.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Using TypeScript",sidebar_position:8},sidebar:"main",previous:{title:"Simplified Imports",permalink:"/migration-guide/simplified-imports"},next:{title:"Usage",permalink:"/category/usage"}},p={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-typescript"},"Using TypeScript"),(0,i.kt)("p",null,"Lyra is written in TypeScript and generates type definitions for the library via ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc"),".\nIf you're using TypeScript in a ",(0,i.kt)("strong",{parentName:"p"},"ESM")," project, you can import Lyra like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { create, insert, search } from '@lyrasearch/lyra';\n")),(0,i.kt)("p",null,"so no additional configuration is needed. But chances are that if you're using the default ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file, you're using CommonJS modules, and you'll need to import Lyra like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { create, insert, search } from '@lyrasearch/lyra/cjs';\nimport { stemmer } from '@lyrasearch/lyra/cjs/stemmer/it';\n")),(0,i.kt)("p",null,"This will allow TypeScript to correctly resolve the types for the imported modules."))}u.isMDXComponent=!0}}]);