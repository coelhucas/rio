"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[2922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Linux",language:"en"},i=void 0,l={unversionedId:"install/linux",id:"install/linux",title:"Linux",description:"Installation options:",source:"@site/docs/install/linux.md",sourceDirName:"install",slug:"/install/linux",permalink:"/rio/docs/install/linux",draft:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/install/linux.md",tags:[],version:"current",frontMatter:{title:"Linux",language:"en"},sidebar:"tutorialSidebar",previous:{title:"FreeBSD",permalink:"/rio/docs/install/freebsd"},next:{title:"MacOS",permalink:"/rio/docs/install/macos"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Installation options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2022 Alpine Linux package: ",(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/packages?name=rio"},"pkgs.alpinelinux.org/packages?name=rio")),(0,a.kt)("li",{parentName:"ul"},"\u2022 Arch Linux package: ",(0,a.kt)("a",{parentName:"li",href:"https://archlinux.org/packages/extra/x86_64/rio"},"archlinux.org/packages/extra/x86_64/rio")),(0,a.kt)("li",{parentName:"ul"},"\u2022 Nix package: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/NixOS/nixpkgs/blob/nixos-unstable/pkgs/applications/terminal-emulators/rio/default.nix"},"NixOS/nixpkgs/rio")),(0,a.kt)("li",{parentName:"ul"},"\u2022 openSUSE package: ",(0,a.kt)("a",{parentName:"li",href:"https://software.opensuse.org/package/rioterm"},"openSUSE:Factory/rioterm"))),(0,a.kt)("p",null,"In case your distro doesn't have the package manager option listed above, proceed to ",(0,a.kt)("a",{parentName:"p",href:"#build-from-the-source"},"build from the source"),"."))}m.isMDXComponent=!0}}]);