(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{109:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,m=l["".concat(c,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(m,i(i({ref:r},s),{},{components:t})):o.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},82:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(8),a=(t(0),t(109)),c=["components"],i={id:"dora-server",title:"dora-server"},p={unversionedId:"dora-server",id:"dora-server",isDocsHomePage:!1,title:"dora-server",description:"\u670d\u52a1\u7aef\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff0ctransit \u548c manage",source:"@site/docs/server.md",slug:"/dora-server",permalink:"/dora-docs/docs/dora-server",editUrl:"https://github.com/nanzm/dora-docs/edit/master/docs/server.md",version:"current",sidebar:"someSidebar",previous:{title:"dora-cli",permalink:"/dora-docs/docs/dora-cli"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/dora-docs/docs/questions"}},s=[],u={toc:s};function l(e){var r=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u670d\u52a1\u7aef\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"transit")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"manage")),Object(a.b)("p",null,"github: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nanzm/dora-server"},"https://github.com/nanzm/dora-server")),Object(a.b)("h1",{id:"transit"},"transit"),Object(a.b)("p",null,"\u63a5\u6536\u4e0a\u62a5\u4fe1\u606f\uff0c\u8fc7\u6ee4\u6821\u9a8c\u540e\uff0c\u5bf9\u6d88\u606f\u4f53\u7684\u90e8\u5206\u5c5e\u6027\u8fdb\u884c",Object(a.b)("inlineCode",{parentName:"p"},"MD5"),"\uff0c\u5b58\u5165 ",Object(a.b)("inlineCode",{parentName:"p"},"MQ")," \u6d88\u606f\u961f\u5217\uff08\u6d41\u91cf\u524a\u950b\uff09\uff0c\u7136\u540e\u5b58\u5165\u65e5\u5fd7\u5b58\u50a8\u7cfb\u7edf\uff1b\n\u6839\u636e\u9700\u8981\u53ef\u4ee5\u90e8\u7f72\u591a\u4e2a\u5b9e\u4f8b\uff0c\u6765\u5e94\u5bf9\u5927\u91cf\u7684\u6d41\u91cf"),Object(a.b)("h1",{id:"manage"},"manage"),Object(a.b)("p",null,"\u4e3a\u63a7\u5236\u53f0\u63d0\u4f9b\u67e5\u8be2\u63a5\u53e3\uff0c\u5b9a\u65f6\u4efb\u52a1\uff0c\u544a\u8b66\u76d1\u63a7\uff0c\u6210\u5458\u7ba1\u7406\u7b49\uff1b\u4e00\u822c\u53ea\u9700\u90e8\u7f72\u4e00\u4e2a\u5b9e\u4f8b"))}l.isMDXComponent=!0}}]);