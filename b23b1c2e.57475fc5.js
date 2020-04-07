/*! For license information please see b23b1c2e.57475fc5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),o=(n(0),n(210)),i=n(216),s=n(215),c=(n(214),{id:"docs-overlay",title:"Overlay",sidebar_label:"Overlay"}),l={id:"docs-overlay",title:"Overlay",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/docs-overlay.mdx",permalink:"/docs/docs-overlay",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/docs-overlay.mdx",sidebar_label:"Overlay",sidebar:"docs",previous:{title:"Modal",permalink:"/docs/docs-modal"},next:{title:"Themes",permalink:"/docs/theme"}},u=[{value:"Handling touch events outside the view",id:"handling-touch-events-outside-the-view",children:[]},{value:"Overlay examples",id:"overlay-examples",children:[]}],p={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Overlays are used to layout content on top of all other layout hierarchies, while fitting the screen bounds.\nThe contents displayed in an Overlay can either be non-obtrusive, like Toasts and Snackbars, or an Alert that blocks all interactions with any content behind it. The view contained within it should be aligned either with absolute position, flex, or with margins, all according to your needs."),Object(o.b)("h2",{id:"handling-touch-events-outside-the-view"},"Handling touch events outside the view"),Object(o.b)("p",null,"When showing views like Alert or Toast in an Overlay, you would want to configure if you want to allow users to interact with content behind the alert. This is done via the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"interceptTouchOutside")," option."),Object(o.b)("h2",{id:"overlay-examples"},"Overlay examples"),Object(o.b)(i.a,{defaultValue:"alert",values:[{label:"Alert",value:"alert"},{label:"Toast",value:"toast"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"alert",mdxType:"TabItem"},Object(o.b)("p",null,"The example below demonstrates how to create a simple alert dialog using an Overlay. Touch events outside the alert will be blocked and won't pass through to the content behind the alert since we're specifying ",Object(o.b)("inlineCode",{parentName:"p"},"interceptTouchOutside: true")," in the static options of the Alert."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/img/alert_android.png"}),"screenshot")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const React = require('react');\nconst { Text, Button, View } = require('react-native');\nconst { Navigation } = require('react-native-navigation');\n\nfunction Alert({ componentId, title, message }) {\n  const dismiss = () => Navigation.dismissOverlay(componentId);\n\n  return (\n    <View style={styles.root}>\n      <View style={styles.alert}>\n        <Text style={styles.title}>{title}</Text>\n        <Text style={styles.message}>{message}</Text>\n        <Button title='OK' onPress={dismiss} />\n      </View>\n    </View>\n  );\n}\n\nconst styles = {\n  root: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#00000050'\n  },\n  alert: {\n    alignItems: 'center',\n    backgroundColor: 'whitesmoke',\n    width: 250,\n    elevation: 4,\n    padding: 16\n  },\n  title: {\n    fontSize: 18\n  },\n  message: {\n    marginVertical: 8\n  }\n};\n\nAlert.options = (props) => {\n  return ({\n    overlay: {\n      interceptTouchOutside: true\n    }\n  });\n}\n\nmodule.exports = Alert;\n\n"))),Object(o.b)(s.a,{value:"toast",mdxType:"TabItem"},Object(o.b)("p",null,"The example below demonstrates how to show a Toast using an Overlay. A user can interact with the content behind the toast since we've declared ",Object(o.b)("inlineCode",{parentName:"p"},"interceptTouchOutside: false")," in the static options of the Alert."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/img/toast_android.png"}),"screenshot")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const React = require('react');\nconst { View, Text, StyleSheet, TouchableOpacity } = require('react-native');\nconst Colors = require('../commons/Colors');\nconst Navigation = require('../services/Navigation');\n\nconst Toast = function ({componentId}) {\n  return (\n    <View style={styles.root}>\n      <View style={styles.toast}>\n        <Text style={styles.text}>This a very important message!</Text>\n        <TouchableOpacity style={styles.button} onPress={() => Navigation.dismissOverlay(componentId)}>\n          <Text style={styles.buttonText}>OK</Text>\n        </TouchableOpacity>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  root: {\n    flex: 1,\n    flexDirection: 'column-reverse',\n  },\n  toast: {\n    elevation: 2,\n    flexDirection: 'row',\n    height: 40,\n    margin: 16,\n    borderRadius: 20,\n    backgroundColor: Colors.accent,\n    alignItems: 'center',\n    justifyContent: 'space-between'\n  },\n  text: {\n    color: 'white',\n    fontSize: 16,\n    marginLeft: 16\n  },\n  button: {\n    marginRight: 16\n  },\n  buttonText: {\n    color: 'white',\n    fontSize: 16,\n    fontWeight: 'bold'\n  }\n});\n\nToast.options = {\n  layout: {\n    componentBackgroundColor: 'transparent'\n  },\n  overlay: {\n    interceptTouchOutside: false\n  }\n}\n\nmodule.exports = Toast;\n")))))}d.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,s({ref:t},l,{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},211:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},212:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},213:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(217);var r=n(212);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},215:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},216:function(e,t,n){"use strict";n(24),n(19),n(20);var r=n(0),a=n.n(r),o=n(213);var i=function(){return Object(r.useContext)(o.a)},s=n(211),c=n.n(s),l=n(131),u=n.n(l),p=37,d=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,s=e.values,l=e.groupId,b=i(),f=b.tabGroupChoices,h=b.setTabGroupChoices,v=Object(r.useState)(o),m=v[0],y=v[1];if(null!=l){var g=f[l];null!=g&&g!==m&&y(g)}var O=function(e){y(e),null!=l&&h(l,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===t,className:c()("tab-item",u.a.tabItem,{"tab-item--active":m===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===m}))[0]))}},217:function(e,t,n){"use strict";var r=n(12),a=n(25),o=n(218),i="".startsWith;r(r.P+r.F*n(219)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},218:function(e,t,n){var r=n(75),a=n(26);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},219:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);