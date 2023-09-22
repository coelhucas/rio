"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[8281],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={layout:"post",title:"Rio 0.0.11",date:"2023-07-19 12:34",description:"Performance improvements around 80-110%, binary size optimization, usage of pixel scale and others.",categories:"release windows macos linux"},i="v0.0.11: Changelog",l={permalink:"/rio/blog/2023/07/19/release-0.0.11",editUrl:"https://github.com/raphamorim/rio/tree/main/docs/blog/2023-07-19-release-0.0.11.md",source:"@site/blog/2023-07-19-release-0.0.11.md",title:"Rio 0.0.11",description:"Performance improvements around 80-110%, binary size optimization, usage of pixel scale and others.",date:"2023-07-19T12:34:00.000Z",formattedDate:"July 19, 2023",tags:[],readingTime:.87,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Rio 0.0.11",date:"2023-07-19 12:34",description:"Performance improvements around 80-110%, binary size optimization, usage of pixel scale and others.",categories:"release windows macos linux"},prevItem:{title:"Support to tabs, custom key bindings, performance improvements and other updates",permalink:"/rio/blog/2023/08/02/release-0.0.15"},nextItem:{title:"Rio 0.0.9",permalink:"/rio/blog/2023/07/17/release-0.0.9"}},s={authorsImageUrls:[]},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Example of Rio v0.0.11 using the new sugarloaf:"),(0,n.kt)("p",null,"v0.0.11 includes v0.0.10 with a bug fix of CachedSugar for font styles."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2022 Major rewrote of sugarloaf."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Sugarloaf: Performance improvements around 80-110%."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Sugarloaf: Introduced CachedSugar."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Sugarloaf: Usage of PixelScale."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Sugarloaf: Line-height support."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Open new tab using the current tab directory."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Fix some symbols break the horizontal and vertical alignment of lines (ref ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/raphamorim/rio/issues/148"},"#148"),")."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Fix font size configuration is confusing (ref ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/raphamorim/rio/issues/139"},"#139"),")."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Fix Glyph not rendered in prompt (ref: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/raphamorim/rio/issues/135"},"#135"),")."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Use fork by default in test context."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Updated terminfo."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Increased default font size to 18."),(0,n.kt)("li",{parentName:"ul"},"\u2022 Move to next and prev tab using keybindings."),(0,n.kt)("li",{parentName:"ul"},'\u2022 Setting editor by keybindings and new property called "editor" in configuration file.'),(0,n.kt)("li",{parentName:"ul"},'\u2022 Rio creates ".deb" packages (canary and release).'),(0,n.kt)("li",{parentName:"ul"},"\u2022 Binary size optimization (ref: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/raphamorim/rio/pull/152"},"#152"),") by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OlshaMB"},"@OlshaMB")),(0,n.kt)("li",{parentName:"ul"},"\u2022 A huge thanks to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ralgozino"},"@ralgozino")," for all bug reporting and testing through this version development.")))}m.isMDXComponent=!0}}]);