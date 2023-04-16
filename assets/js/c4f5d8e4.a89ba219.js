"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[4195],{328:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},s=void 0,i={type:"mdx",permalink:"/alekhaweb/home",source:"@site/src/pages/home.mdx",description:"What is Bun?",frontMatter:{}},o=[{value:"What is Bun?",id:"what-is-bun",level:2},{value:"Install",id:"install",level:2},{value:"Upgrade",id:"upgrade",level:3},{value:"Quick links",id:"quick-links",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}],p=(u="Highlight",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const m={toc:o},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-bun"},"What is Bun?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u200b\u200bBun is still under development.")," Use it to speed up your development workflows or run simpler production code in resource-constrained environments like serverless functions. We're working on more complete Node.js compatibility and integration with existing frameworks. Join the ",(0,r.kt)("a",{parentName:"p",href:"https://bun.sh/discord"},"Discord")," and watch the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oven-sh/bun"},"GitHub repository")," to keeps tabs on future releases.")),(0,r.kt)(p,{color:"#25c2a0",mdxType:"Highlight"},"Bun")," is an all-in-one toolkit for ",(0,r.kt)(p,{color:"#ff6524",mdxType:"Highlight"},"JavaScript")," and TypeScript apps. It ships as a single executable called `bun\u200b`.",(0,r.kt)("p",null,"At its core is the ",(0,r.kt)("em",{parentName:"p"},"Bun runtime"),", a fast JavaScript ",(0,r.kt)(p,{color:"#998524",mdxType:"Highlight"},"Runtime"),"  designed as a drop-in replacement for Node.js. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bun run index.tsx             # TS and JSX supported out of the box\n")),(0,r.kt)("p",null,"\u200b\u200bThe ",(0,r.kt)("inlineCode",{parentName:"p"},"bun\u200b")," command-line tool also implements a test runner, script runner, and Node.js-compatible package manager. Instead of 1,000 node_modules for development, you only need ",(0,r.kt)("inlineCode",{parentName:"p"},"bun"),". Bun's built-in tools are significantly faster than existing options and usable in existing Node.js projects with little to no changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bun test                      # run tests\nbun run start                 # run the `start` script in `package.json`\nbun install <pkg>\u200b             # install a package\nbunx cowsay 'Hello, world!'   # execute a package\n")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Bun supports Linux (x64 & arm64) and macOS (x64 & Apple Silicon)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Linux users")," \u2014 Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Windows users")," \u2014 Bun does not currently provide a native Windows build. We're working on this; progress can be tracked at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oven-sh/bun/issues/43"},"this issue"),". In the meantime, use one of the installation methods below for Windows Subsystem for Linux.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# with install script (recommended)\ncurl -fsSL https://bun.sh/install | bash\n\n# with npm\nnpm install -g bun\n\n# with Homebrew\nbrew tap oven-sh/bun\nbrew install bun\n\n# with Docker\ndocker pull oven/bun\ndocker run --rm --init --ulimit memlock=-1:-1 oven/bun\n")),(0,r.kt)("h3",{id:"upgrade"},"Upgrade"),(0,r.kt)("p",null,"To upgrade to the latest version of Bun, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bun upgrade\n")),(0,r.kt)("p",null,"Bun automatically releases a canary build on every commit to ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". To upgrade to the latest canary build, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bun upgrade --canary\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/oven-sh/bun/releases/tag/canary"},"View canary build")),(0,r.kt)("h2",{id:"quick-links"},"Quick links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intro",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/index"},"What is Bun?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/quickstart"},"Quickstart")))),(0,r.kt)("li",{parentName:"ul"},"CLI",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/run"},(0,r.kt)("inlineCode",{parentName:"a"},"bun run"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/install"},(0,r.kt)("inlineCode",{parentName:"a"},"bun install"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/test"},(0,r.kt)("inlineCode",{parentName:"a"},"bun test"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/create"},(0,r.kt)("inlineCode",{parentName:"a"},"bun create"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/cli/bunx"},(0,r.kt)("inlineCode",{parentName:"a"},"bunx"))))),(0,r.kt)("li",{parentName:"ul"},"Runtime",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/runtime/index"},"Runtime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/runtime/modules"},"Module resolution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/runtime/hot"},"Hot ","&"," live reloading")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/runtime/plugins"},"Plugins")))),(0,r.kt)("li",{parentName:"ul"},"Ecosystem",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/nodejs"},"Node.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/typescript"},"TypeScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/react"},"React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/elysia"},"Elysia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/hono"},"Hono")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/ecosystem/express"},"Express")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apvarun/awesome-bun"},"awesome-bun")))),(0,r.kt)("li",{parentName:"ul"},"API",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/http"},"HTTP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/websockets"},"WebSockets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/tcp"},"TCP Sockets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/file-io"},"File I/O")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/sqlite"},"SQLite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/file-system-router"},"FileSystemRouter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/globals"},"Globals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/spawn"},"Spawn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/transpiler"},"Transpiler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/console"},"Console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/ffi"},"FFI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/html-rewriter"},"HTMLRewriter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/test"},"Testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/utils"},"Utils")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/dns"},"DNS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bun.sh/docs/api/node-api"},"Node-API"))))),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://bun.sh/docs/project/development"},"Project > Development")," guide to start contributing to Bun."),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://bun.sh/docs/project/licensing"},"Project > License")," page for information about Bun's licensing."))}d.isMDXComponent=!0},2485:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(7294),r=a(2263),l=a(7961),s=a(5742),i=a(5042),o=a(328);const p=e=>{let{code:t,source:a}=e;const[r,l]=(0,n.useState)(!1);return n.createElement("div",{className:"mt-0 hidden  md:block InstallBox--desktop w-full"},n.createElement("p",{className:"all-caps mb-2 text-xl font-semibold dark:text-white"},"Install Bun v0.5.9"),n.createElement("div",{className:"rounded-md border-solid border-2 border-[#EE81C3] text-lg mb-2"},n.createElement("div",{className:"relative "},n.createElement("div",{className:""},n.createElement("pre",{className:"m-0",style:{backgroundColor:"#282A36"}},n.createElement("code",null,n.createElement("span",{className:"line"},n.createElement("span",{style:{color:"#F8F8F2"}},t)))),n.createElement("div",{id:"WEeJYNsIgEDo",className:"CopyIcon copy absolute right-6 top-4",onClick:function(){navigator.clipboard.writeText(t),l(!0),setTimeout((()=>{l(!1)}),1e3)}},r?n.createElement(n.Fragment,null,n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",className:"check h-7 w-7 cursor-pointer p-1 text-white opacity-70 hover:opacity-100 p-0 w-7 h-7"},n.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",clipRule:"evenodd"}))):n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",className:"clipboard h-7 w-7 cursor-pointer p-1 text-white opacity-70 hover:opacity-100 p-0 w-7 h-7"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"})))))),n.createElement("div",{className:"text-sm whitespace-nowrap pt-1 text-gray-500 opacity-70 md:flex md:flex-row md:flex-wrap md:justify-between"},n.createElement("p",{className:"text-sm text-gray-500 dark:text-gray-300"},"Supported on macOS, Linux, and WSL"),n.createElement("a",{className:"text-gray-300",href:a},"View source")))};var u=a(5750),m=a(4950);u.kL.register(u.uw,u.f$,u.ZL,u.Dx,u.u,u.De);const c=["January","February","March","April","May","June","July"];u.kL.register(u.uw,u.f$,u.ZL,u.Dx,u.u,u.De);c.map((()=>m.We.datatype.number({min:0,max:1e3}))),c.map((()=>m.We.datatype.number({min:0,max:1e3})));const d=function(e){let{YoutubeVideoId:t}=e;const[a,r]=(0,n.useState)(1),l=e=>{r(e)};return n.createElement("div",{className:"flex flex-col"},n.createElement("div",{className:"flex border-b border-gray-300"},n.createElement("button",{className:"py-2 px-4 border-b-2 "+(1===a?"font-medium text-white border-gray-100 bg-gray-600 border-0 rounded-t-[7px]":"w-full cursor-pointer rounded-t-[7px] border-0 outline-none border-b-[3px] border-gray-400  bg-transparent py-[12px] px-[3px] text-center sm:py-[12px] sm:px-[5px] md:px-4 lg:w-auto lg:py-[16px] text-white  outline-0  focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700  font-regular transition ease-out duration-200  hover:bg-gray-600   hover:border-gray-100 dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 "),onClick:()=>l(1)},"Youtube Video 1"),n.createElement("button",{className:"py-2 px-4 border-b-2 "+(2===a?"font-medium text-white border-gray-100 bg-gray-600 border-0 rounded-t-[7px]":"w-full cursor-pointer rounded-t-[7px] border-0 outline-none border-b-[3px] border-gray-400  bg-transparent py-[12px] px-[3px] text-center sm:py-[12px] sm:px-[5px] md:px-4 lg:w-auto lg:py-[16px] text-white  outline-0  focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700  font-regular transition ease-out duration-200  hover:bg-gray-600   hover:border-gray-100 dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 "),onClick:()=>l(2)},"Youtube Video 2")),n.createElement("div",{className:"flex flex-col p-4"},1===a&&n.createElement("div",{className:"aspect-w-16 aspect-h-9"},n.createElement("iframe",{src:`https://www.youtube.com/embed/${t}`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),2===a&&n.createElement("div",{className:"aspect-w-16 aspect-h-9"},n.createElement("iframe",{src:"https://www.youtube.com/embed/4WXs3sKu41I",title:"Google \u2014 Year in Search 2022",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))))};function h(){const{siteConfig:e}=(0,r.Z)();return n.createElement("div",null,n.createElement(l.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(s.Z,null,n.createElement("title",null,"Bun - A Fast All-in-One JavaScript Runtime")),n.createElement("div",{id:"homepage",className:"px-10 lg:px-20 flex w-full flex-row items-center justify-center bg-neutral-900  pt-[5rem] pb-[5rem] text-neutral-100 md:pt-[6rem] md:pb-[8rem]"},n.createElement("main",{className:"mx-auto my-0 flex w-full flex-col items-center gap-8 md:max-w-screen-sm lg:max-w-[var(--max-width)] lg:flex-row lg:justify-between"},n.createElement("div",{className:"flex-1 lg:max-w-[700px]"},n.createElement("h1",{className:"mt-0 text-[26pt] font-extrabold leading-none dark:text-neutral-50 md:text-[32pt] lg:text-[38pt] xl:text-[40pt]"},"Bun is a fast all-in-one JavaScript runtime"),n.createElement("p",{className:"text-[1.3rem] leading-normal dark:text-neutral-300"},"Run, test, transpile, and bundle JavaScript & TypeScript projects \u2014 all in Bun. Bun is a new JavaScript runtime built for speed and ease of use."),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement(p,{code:"curl -fsSL https://bun.sh/install{' '} | bash",source:"https://bun.sh/install"}))),n.createElement("div",{className:"w-full flex-0 lg:flex-1"},n.createElement(d,{YoutubeVideoId:"cOv1GoWVcY4"})))),n.createElement("div",{className:" px-8 py-16 lg:px-40 md:py-20"},n.createElement(i.Z,null,n.createElement(o.default,null)))))}},8389:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);const r={...a(702).Z,Highlight:function(e){let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}}}}]);