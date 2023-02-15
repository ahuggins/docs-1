"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[8343],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={description:"The plugin-data-persistence plugin allows Lyra to bump the entire database and restore it in three different formats."},s="Data persistence plugin",l={unversionedId:"plugins/data-persistence-plugin",id:"plugins/data-persistence-plugin",title:"Data persistence plugin",description:"The plugin-data-persistence plugin allows Lyra to bump the entire database and restore it in three different formats.",source:"@site/docs/04-plugins/01-data-persistence-plugin.md",sourceDirName:"04-plugins",slug:"/plugins/data-persistence-plugin",permalink:"/plugins/data-persistence-plugin",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/docs/04-plugins/01-data-persistence-plugin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"The plugin-data-persistence plugin allows Lyra to bump the entire database and restore it in three different formats."},sidebar:"main",previous:{title:"Plugins",permalink:"/plugins/"},next:{title:"Parsedoc plugin",permalink:"/plugins/parsedoc-plugin"}},o={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:'Persisting the database to disk\u200b <a href="#persisting-the-database-to-disk" id="persisting-the-database-to-disk"></a>',id:"persisting-the-database-to-disk-",level:2},{value:'Restore the database from disk\u200b <a href="#restore-the-database-from-disk" id="restore-the-database-from-disk"></a>',id:"restore-the-database-from-disk-",level:2},{value:"CommonJS Imports",id:"commonjs-imports",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-persistence-plugin"},"Data persistence plugin"),(0,r.kt)("h3",{className:"plugin-description"},i.description),(0,r.kt)("p",null,"The plugin is currently available on the following runtimes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Runtime"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bun"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V8 isolates"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Major browsers"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deno"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udea7 under construction")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can install the plugin using any major Node.js/Bun package manager:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using npm"',title:'"Using','npm"':!0},"npm install --save @lyrasearch/plugin-data-persistence\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using yarn"',title:'"Using','yarn"':!0},"yarn add @lyrasearch/plugin-data-persistence\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using pnpm"',title:'"Using','pnpm"':!0},"pnpm add @lyrasearch/plugin-data-persistence\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Plugin usage depends on the runtime that you are using, even though the goal is\nto expose the exact same APIs for browsers, Deno, and all the other JavaScript\nengines."),(0,r.kt)("p",null,"Let's consider the following Lyra instance as a common database source for both\nbrowsers and JavaScript engines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { create, insert } from "@lyrasearch/lyra";\n\nconst originalInstance = await create({\n  schema: {\n    author: "string",\n    quote: "string",\n  },\n});\n\nawait insert(originalInstance, {\n  quote: "He who is brave is free",\n  author: "Seneca",\n});\n\nawait insert(originalInstance, {\n  quote: "Make each day your masterpiece",\n  author: "John Wooden",\n});\n\nawait insert(originalInstance, {\n  quote: "You must be the change you wish to see in the world",\n  author: "Mahatma Gandhi",\n});\n')),(0,r.kt)("h2",{id:"persisting-the-database-to-disk-"},"Persisting the database to disk",(0,r.kt)("a",{parentName:"h2",href:"https://docs.lyrasearch.io/plugins/plugin-data-persistence#persisting-the-database-to-disk"},"\u200b")," ",(0,r.kt)("a",{href:"#persisting-the-database-to-disk",id:"persisting-the-database-to-disk"})),(0,r.kt)("p",null,"Now we have a Lyra instance containing three quotes. We can use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"plugin-data-persistence")," plugin to save the database to a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { persistToFile } from "@lyrasearch/plugin-data-persistence";\n\nconst filePath = await persistToFile(originalInstance, "binary", "./quotes.msp");\n')),(0,r.kt)("h2",{id:"restore-the-database-from-disk-"},"Restore the database from disk",(0,r.kt)("a",{parentName:"h2",href:"https://docs.lyrasearch.io/plugins/plugin-data-persistence#restore-the-database-from-disk"},"\u200b")," ",(0,r.kt)("a",{href:"#restore-the-database-from-disk",id:"restore-the-database-from-disk"})),(0,r.kt)("p",null,"To restore the database from the disk:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { restoreFromFile } from "@lyrasearch/plugin-data-persistence";\nconst db = await restoreFromFile("binary", filePath);\n')),(0,r.kt)("h2",{id:"commonjs-imports"},"CommonJS Imports"),(0,r.kt)("p",null,"Lyra plugins now ships ",(0,r.kt)("strong",{parentName:"p"},"ESM")," modules by default. This allows us to move faster when providing new features and bug fixes, as well as using the ",(0,r.kt)("inlineCode",{parentName:"p"},'"exports"')," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," to provide a better developer experience."),(0,r.kt)("p",null,"CommonJS imports are still supported, but you'll need to import the plugin from ",(0,r.kt)("inlineCode",{parentName:"p"},"@lyrasearch/plugin-data-persistence/cjs")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"@lyrasearch/plugin-data-persistence"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- const { persistToFile } = require("@lyrasearch/plugin-data-persistence");\n+ const { persistToFile } = require("@lyrasearch/plugin-data-persistence/cjs");\n')))}d.isMDXComponent=!0}}]);