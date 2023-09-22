"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[1104],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=u(a),d=o,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(g,r(r({ref:e},p),{},{components:a})):n.createElement(g,r({ref:e},p))}));function g(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2342:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const i={layout:"post",title:"Support to tabs, custom key bindings, performance improvements and other updates",date:"2023-08-02 12:34",description:"Support to tabs, custom key bindings, performance improvements, color automation for tabs, binary size optimization, bug fixes and other updates.",categories:"windows macos linux webassembly"},r=void 0,l={permalink:"/rio/blog/2023/08/02/release-0.0.15",editUrl:"https://github.com/raphamorim/rio/tree/main/docs/blog/2023-08-02-release-0.0.15.md",source:"@site/blog/2023-08-02-release-0.0.15.md",title:"Support to tabs, custom key bindings, performance improvements and other updates",description:"Support to tabs, custom key bindings, performance improvements, color automation for tabs, binary size optimization, bug fixes and other updates.",date:"2023-08-02T12:34:00.000Z",formattedDate:"August 2, 2023",tags:[],readingTime:3.895,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Support to tabs, custom key bindings, performance improvements and other updates",date:"2023-08-02 12:34",description:"Support to tabs, custom key bindings, performance improvements, color automation for tabs, binary size optimization, bug fixes and other updates.",categories:"windows macos linux webassembly"},prevItem:{title:"New font configuration API and native tabs",permalink:"/rio/blog/2023/08/29/release-0.0.17"},nextItem:{title:"Rio 0.0.11",permalink:"/rio/blog/2023/07/19/release-0.0.11"}},s={authorsImageUrls:[]},u=[{value:"Navigation",id:"navigation",level:2},{value:"Sugarloaf performance improvements",id:"sugarloaf-performance-improvements",level:2},{value:"Color automation for navigation",id:"color-automation-for-navigation",level:2},{value:"Custom key bindings",id:"custom-key-bindings",level:2},{value:"Changelog of v0.0.15 along with 0.0.13 and 0.0.12",id:"changelog-of-v0015-along-with-0013-and-0012",level:2}],p={toc:u},m="wrapper";function c(t){let{components:e,...a}=t;return(0,o.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This post also includes changes from v0.0.13 and v0.0.12."),(0,o.kt)("h1",{id:"highlights"},"Highlights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2022 Navigation."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Custom key bindings."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Performance updates."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Color automation for tabs.")),(0,o.kt)("h2",{id:"navigation"},"Navigation"),(0,o.kt)("p",null,"Rio allows to choose navigation between the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"keyword"},"CollapsedTab")," \u2022 ",(0,o.kt)("span",{class:"keyword"},"BottomTab")," \u2022 ",(0,o.kt)("span",{class:"keyword"},"TopTab")," \u2022 ",(0,o.kt)("span",{class:"keyword"},"Breadcrumb"))),(0,o.kt)("p",null,"--"),(0,o.kt)("p",null,"You can set the navigation mode in the configuration file. An example of configuration:"),(0,o.kt)("p",null,"{% highlight toml %}\n","[navigation]",'\nmode = "BottomTab"\nuse-current-path = true\nclickable = false\n{% endhighlight %}'),(0,o.kt)("p",null,"Note: BottomTab and TopTab does not support click mode yet."),(0,o.kt)("p",null,"Below some images with different navigation setups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2022 First image: BottomTab navigation x11."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Second image: TopTav navigation wayland.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example navigation x11",src:"../../rio/assets/posts/0.0.15/demo-navigation-x11.png",class:"mid"}),(0,o.kt)("img",{alt:"second example navigation Wayland",src:"../../rio/assets/posts/0.0.15/demo-navigation-wayland.png",class:"mid"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2022 First image: Breadcrumb navigation macos."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Second image: BottomTab navigation macos.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example breadcrumb navigation macos",src:"../../rio/assets/features/demo-breadcrumb.png",class:"mid"}),(0,o.kt)("img",{alt:"example BottomTab navigation macos",src:"../../rio/assets/features/demo-bottom-tab.png",class:"mid"})),(0,o.kt)("p",null,"More info about navigation in ",(0,o.kt)("a",{parentName:"p",href:"/rio/docs/documentation/navigation/"},"docs/navigation"),"."),(0,o.kt)("h2",{id:"sugarloaf-performance-improvements"},"Sugarloaf performance improvements"),(0,o.kt)("p",null,"Performance improvements with Sugarloaf de-duplication of input data."),(0,o.kt)("p",null,'Before an average sugarloaf.stack call would cost around "~253.5\xb5s" and now it does cost an average of "~51.5\xb5s".'),(0,o.kt)("p",null,"The algorithm is effective whenever the terminal has a lot of repetition like empty spaces. The benchmark test below was made rendering 100.000 characters that had repetition: "),(0,o.kt)("img",{alt:"second example navigation Wayland",src:"../../rio/assets/posts/0.0.15/de-duplication-sugarloaf.jpg",class:"mid"}),(0,o.kt)("p",null,"The de-duplication algorithm in the renderer considerably reduced the initial rendering time from avg ",(0,o.kt)("span",{class:"keyword"},"6ms to 2ms")," and using Rio in a large screen (>=136 columns) has dropped from ",(0,o.kt)("span",{class:"keyword"},"36ms to 8ms"),"."),(0,o.kt)("p",null,"Tweet reference:"),(0,o.kt)("blockquote",{class:"twitter-tweet"},(0,o.kt)("p",{lang:"ca",dir:"ltr"},"Rewriting Sugarloaf (Rio terminal renderer) to de-duplicate data inputs.",(0,o.kt)("br",null),(0,o.kt)("br",null),"- Results so far:",(0,o.kt)("br",null),"Before: ~253.5\xb5s",(0,o.kt)("br",null),"Now: ~51.5\xb5s",(0,o.kt)("br",null),(0,o.kt)("br",null),"Github: ",(0,o.kt)("a",{href:"https://t.co/5EuJJzPsB2"},"https://t.co/5EuJJzPsB2")," ",(0,o.kt)("a",{href:"https://t.co/8hj2Ku4Otn"},"pic.twitter.com/8hj2Ku4Otn")),"\u2014 Raphael Amorim \ud83e\udd80 (@raphamorims) ",(0,o.kt)("a",{href:"https://twitter.com/raphamorims/status/1685612156773961728?ref_src=twsrc%5Etfw"},"July 30, 2023"))," ",(0,o.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,o.kt)("h2",{id:"color-automation-for-navigation"},"Color automation for navigation"),(0,o.kt)("p",null,"Rio allows to specify color overwrites for tabs based on program context."),(0,o.kt)("p",null,"The example below sets ",(0,o.kt)("span",{class:"keyword"},"#FFFF00")," as color background whenever ",(0,o.kt)("span",{class:"keyword"},"nvim")," is running."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example navigation with color automation",src:"../../rio/assets/features/demo-colorized-navigation.png",class:"mid"}),(0,o.kt)("img",{alt:"second example navigation with color automation",src:"../../rio/assets/features/demo-colorized-navigation-2.png",class:"mid"})),(0,o.kt)("p",null,"The configuration would be like:"),(0,o.kt)("p",null,"{% highlight toml %}\n","[navigation]","\ncolor-automation = ",'[\n{ program = "nvim", color = "#FFFF00" }\n]',"\n{% endhighlight %}"),(0,o.kt)("h2",{id:"custom-key-bindings"},"Custom key bindings"),(0,o.kt)("p",null,"Now you can configure custom key bindings for Rio terminal."),(0,o.kt)("p",null,"Below an example of two custom key bindings:"),(0,o.kt)("p",null,"{% highlight toml %}\n","[bindings]",'\nkeys = [\n{ key = "q", with = "super", action = "Quit" }'),(0,o.kt)("h1",{id:"bytes27-91-53-126-is-equivalent-to-x1b5"},"Bytes","[27, 91, 53, 126]",' is equivalent to "\\x1b[5~"'),(0,o.kt)("p",null,'  { key = "home", with = "super | shift", bytes = ',"[27, 91, 53, 126]"," }\n]\n{% endhighlight %}"),(0,o.kt)("p",null,'For example, in the first binding will tell Rio to close the terminal every time that "q" key is pressed along with "super" (in MacOS the "super" key is "command").'),(0,o.kt)("p",null,"More info about custom key bindings in ",(0,o.kt)("a",{parentName:"p",href:"/rio/docs/documentation/key-bindings/"},"docs/key-bindings"),"."),(0,o.kt)("h2",{id:"changelog-of-v0015-along-with-0013-and-0012"},"Changelog of v0.0.15 along with 0.0.13 and 0.0.12"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'\u2022 Introduce configurable navigation with the following options: "CollapsedTab" (default), "Breadcrumb", "TopTab" and "BottomTab".'),(0,o.kt)("li",{parentName:"ul"},'\u2022 Performance improvements with Sugarloaf de-duplication of input data. Before: "~253.5\xb5s" and now "~51.5\xb5s".'),(0,o.kt)("li",{parentName:"ul"},'\u2022 Introduce "navigation.use-current-path" which sets if a tab/breacrumb should be open from the current context path.'),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix rendering unicode with 1 width glyphs (fix ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/raphamorim/rio/issues/160"},"#160"),")."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Increased max tabs from 9 to 72."),(0,o.kt)("li",{parentName:"ul"},'\u2022 Default colors "selection-foreground" and "selection-background" has changed.'),(0,o.kt)("li",{parentName:"ul"},'\u2022 Default colors "tab" and "tab-active" has changed.'),(0,o.kt)("li",{parentName:"ul"},"\u2022 Implementation of custom key bindings (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/raphamorim/rio/issues/117"},"#117"),")."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix .deb packing in GH Actions."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix key binding for switch tab next (MacOS only)."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix scroll when copying text outside of offset."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix copy key bindings."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix Fuzzy Finder issue (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/raphamorim/rio/issues/132"},"#132"),")."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Introduce Copa (Alacritty's VTE forked version to introduce new sequences/instructions in next versions)."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Upgraded Winit to 0.29.0-beta.0"),(0,o.kt)("li",{parentName:"ul"},"\u2022 Support for keybindings with dead keys."),(0,o.kt)("li",{parentName:"ul"},'\u2022 "Back"/"Forward" mouse buttons support in bindings.'),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix unconditional query of xdg-portal settings on Wayland"),(0,o.kt)("li",{parentName:"ul"},'\u2022 Fix "Maximized" startup mode not filling the screen properly on GNOME Wayland.'),(0,o.kt)("li",{parentName:"ul"},'\u2022 Fix Default Vi key bindings for "Last"/"First" actions not working on X11/Wayland.'),(0,o.kt)("li",{parentName:"ul"},'\u2022 Set "padding-x" to 0 for non-macos.'),(0,o.kt)("li",{parentName:"ul"},'\u2022 Set "app_id"/"WM_CLASS" property on Wayland/X11.'),(0,o.kt)("li",{parentName:"ul"},"\u2022 Strip binary is on for release builds."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Each paste or key binding that has writing leads to clear selection and scroll bottom."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fixed over-rendering when scrolling."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix selection."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Support to copy using VIM."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix for MacOS deadzone chaging cursor to draggable on window buttons."),(0,o.kt)("li",{parentName:"ul"},"\u2022 Fix for scroll using tmux.")))}c.isMDXComponent=!0}}]);