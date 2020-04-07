(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),c=(n(0),n(210)),i={id:"bottomTabs-layout",title:"Bottom Tabs",sidebar_label:"Bottom Tabs"},o={id:"bottomTabs-layout",title:"Bottom Tabs",description:"A container view for managing a radio-style selection interface, where a selection determines which child view controller to display.",source:"@site/docs/layout-BottomTabs.mdx",permalink:"/docs/bottomTabs-layout",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/layout-BottomTabs.mdx",sidebar_label:"Bottom Tabs",sidebar:"api",previous:{title:"Stack",permalink:"/docs/stack-layout"},next:{title:"Side Menu",permalink:"/docs/sideMenu-layout"}},l=[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>children</code>",id:"children",children:[]},{value:"<code>options</code>",id:"options",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A container view for managing a radio-style selection interface, where a selection determines which child view controller to display."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  id: 'BOTTOM_TABS_LAYOUT',\n  children: [\n    {\n      component: {\n        id: 'HOME_SCREEN'\n        name: 'HomeScreen'\n      }\n    },\n    stack: {\n      id: 'PROFILE_TAB',\n      children: [\n        {\n          component: {\n            id: 'PROFILE_SCREEN',\n            name: 'ProfileScreen'\n          }\n        }\n      ]\n    }\n  ]\n}\n")),Object(c.b)("h2",{id:"id"},Object(c.b)("inlineCode",{parentName:"h2"},"id")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unique id used to interact with the view via the Navigation api, usually ",Object(c.b)("inlineCode",{parentName:"td"},"Navigation.mergeOptions")," which accepts the componentId as it's first argument.")))),Object(c.b)("h2",{id:"children"},Object(c.b)("inlineCode",{parentName:"h2"},"children")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/layout"}),"Layout[]")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Child layouts of any kind.")))),Object(c.b)("h2",{id:"options"},Object(c.b)("inlineCode",{parentName:"h2"},"options")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/options-root"}),"Options")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dynamic options which will apply to all screens in bottomTabs")))))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),O=a,m=d["".concat(i,".").concat(O)]||d[O]||u[O]||c;return n?r.a.createElement(m,o({ref:t},b,{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);