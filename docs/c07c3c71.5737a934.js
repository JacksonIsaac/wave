(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{245:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return b}));var t=n(2),a=n(6),u=(n(0),n(314)),o=n(316),c={title:"Breadcrumbs",keywords:["breadcrumbs","navigation"]},i={unversionedId:"examples/breadcrumbs",id:"examples/breadcrumbs",isDocsHomePage:!1,title:"Breadcrumbs",description:"Breadcrumbs should be used as a navigational aid in your app or site.",source:"@site/docs/examples/breadcrumbs.md",slug:"/examples/breadcrumbs",permalink:"/wave/docs/examples/breadcrumbs",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/breadcrumbs.md",version:"current",sidebar:"someSidebar",previous:{title:"Tabs / Navigation",permalink:"/wave/docs/examples/tab-delete"},next:{title:"Header",permalink:"/wave/docs/examples/header"}},s=[],p={rightToc:s};function b(e){var r=e.components,c=Object(a.a)(e,["components"]);return Object(u.b)("wrapper",Object(t.a)({},p,c,{components:r,mdxType:"MDXLayout"}),Object(u.b)("p",null,"Breadcrumbs should be used as a navigational aid in your app or site.\nThey indicate the current page\u2019s location within a hierarchy and help\nthe user understand where they are in relation to the rest of that hierarchy.\nThey also afford one-click access to higher levels of that hierarchy.\nBreadcrumbs are typically placed, in horizontal form, under the masthead\nor navigation of an experience, above the primary content area."),Object(u.b)("div",{className:"cover",style:{backgroundImage:"url("+n(484).default+")"}}),Object(u.b)("pre",null,Object(u.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if '#' in q.args:\n        hash_ = q.args['#']\n        q.page['breadcrumbs'] = ui.form_card(box='1 1 2 2', items=[\n            ui.text(f'#={hash_}'),\n            ui.button(name='show_breadcrumbs', label='Back', primary=True),\n        ])\n    else:\n        q.page['breadcrumbs'] = ui.breadcrumbs_card(\n            box='1 1 4 1',\n            items=[\n                ui.breadcrumb(name='#menu1', label='Menu 1'),\n                ui.breadcrumb(name='#menu2', label='Menu 2'),\n                ui.breadcrumb(name='#menu3', label='Menu 3'),\n            ],\n        )\n    await q.page.save()\n")),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(u.b)("a",{href:Object(o.a)("docs/examples/tags#breadcrumbs")},"breadcrumbs")," \u2002",Object(u.b)("a",{href:Object(o.a)("docs/examples/tags#navigation")},"navigation")))}b.isMDXComponent=!0},314:function(e,r,n){"use strict";n.d(r,"a",(function(){return b})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){u(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},b=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,u=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=t,m=b["".concat(o,".").concat(d)]||b[d]||l[d]||u;return n?a.a.createElement(m,c(c({ref:r},s),{},{components:n})):a.a.createElement(m,c({ref:r},s))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var u=n.length,o=new Array(u);o[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var s=2;s<u;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},315:function(e,r,n){"use strict";var t=n(0),a=n(19);r.a=function(){const e=Object(t.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},316:function(e,r,n){"use strict";n.d(r,"b",(function(){return u})),n.d(r,"a",(function(){return o}));var t=n(315),a=n(317);function u(){const{siteConfig:{baseUrl:e="/",url:r}={}}=Object(t.a)();return{withBaseUrl:(n,t)=>function(e,r,n,{forcePrependBaseUrl:t=!1,absolute:u=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(t)return r+n;const o=n.startsWith(r)?n:r+n.replace(/^\//,"");return u?e+o:o}(r,e,n,t)}}function o(e,r={}){const{withBaseUrl:n}=u();return n(e,r)}},317:function(e,r,n){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}n.d(r,"b",(function(){return t})),n.d(r,"a",(function(){return a}))},484:function(e,r,n){"use strict";n.r(r),r.default="data:image/png;base64,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"}}]);