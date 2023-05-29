"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[8503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={},o="Tool - WikiSearch",l={unversionedId:"Examples/Tool - Wikipedia Search",id:"Examples/Tool - Wikipedia Search",title:"Tool - WikiSearch",description:"- This example demonstrates an example chain called WikiChain which provides current time (updated) information to GPT-3 and asks it to search Wikipedia for the given query.",source:"@site/doc/Examples/Tool - Wikipedia Search.md",sourceDirName:"Examples",slug:"/Examples/Tool - Wikipedia Search",permalink:"/doc/Examples/Tool - Wikipedia Search",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/doc/Examples/Tool - Wikipedia Search.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugin - Klarna Shopping Search",permalink:"/doc/Examples/Plugin - Klarna Shopping Search"},next:{title:"Tutorials",permalink:"/doc/category/tutorials"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tool---wikisearch"},"Tool - WikiSearch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This example demonstrates an example chain called ",(0,n.kt)("strong",{parentName:"li"},"WikiChain")," which provides current time (updated) information to GPT-3 and asks it to search Wikipedia for the given query.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The chain is composed of two Service Classes: ",(0,n.kt)("strong",{parentName:"li"},"BuilderService")," and ",(0,n.kt)("strong",{parentName:"li"},"WikiClientService"),". ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BuilderService")," is responsible for building the chain and ",(0,n.kt)("strong",{parentName:"li"},"WikiClientService")," is responsible for interacting with the Wikipedia API.")),(0,n.kt)("h1",{id:"to-run-the-chain-go-to"},"To run the chain go to:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"localhost:8080/builder/openai-wiki?query=Question : YOUR_QUERY")),(0,n.kt)("h1",{id:"example-queries-can-be"},"Example Queries can be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u201cAuthor David Chanoff has collaborated with a U.S. Navy admiral who served as the ambassador to the United Kingdom under which President?\u201d"),(0,n.kt)("li",{parentName:"ul"},"\u201cWhat is the name of the 1994 film starring Keanu Reeves and Sandra Bullock?\u201d")),(0,n.kt)("p",null,"This example demonstrates the use of a Tool called WikiSearch. A searching tool like this can be implemented for various other purposes like:- "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"on a database for querying internal databases of companies or organizations."),(0,n.kt)("li",{parentName:"ul"},"on a search engine for querying the web.")))}d.isMDXComponent=!0}}]);