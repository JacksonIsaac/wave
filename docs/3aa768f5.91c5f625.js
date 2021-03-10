(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{118:function(A,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return l})),r.d(e,"metadata",(function(){return o})),r.d(e,"rightToc",(function(){return c})),r.d(e,"default",(function(){return s}));var t=r(2),n=r(6),a=(r(0),r(314)),u=r(316),l={title:"Form / File Upload",keywords:["file_upload","form","upload"]},o={unversionedId:"examples/file-upload",id:"examples/file-upload",isDocsHomePage:!1,title:"Form / File Upload",description:"Use a file upload component to allow users to upload files.",source:"@site/docs/examples/file-upload.md",slug:"/examples/file-upload",permalink:"/wave/docs/examples/file-upload",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/file-upload.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Separator",permalink:"/wave/docs/examples/separator"},next:{title:"Form / Frame",permalink:"/wave/docs/examples/form-frame"}},c=[],i={rightToc:c};function s(A){var e=A.components,l=Object(n.a)(A,["components"]);return Object(a.b)("wrapper",Object(t.a)({},i,l,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use a file upload component to allow users to upload files."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(372).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if 'file_upload' in q.args:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.text(f'file_upload={q.args.file_upload}'),\n            ui.button(name='show_upload', label='Back', primary=True),\n        ])\n    else:\n        q.page['example'] = ui.form_card(\n            box='1 1 4 10',\n            items=[\n                ui.file_upload(name='file_upload', label='Upload!', multiple=True,\n                               file_extensions=['csv', 'gz'], max_file_size=10, max_size=15)\n            ]\n        )\n    await q.page.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(u.a)("docs/examples/tags#file_upload")},"file_upload")," \u2002",Object(a.b)("a",{href:Object(u.a)("docs/examples/tags#form")},"form")," \u2002",Object(a.b)("a",{href:Object(u.a)("docs/examples/tags#upload")},"upload")))}s.isMDXComponent=!0},314:function(A,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return d}));var t=r(0),n=r.n(t);function a(A,e,r){return e in A?Object.defineProperty(A,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):A[e]=r,A}function u(A,e){var r=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),r.push.apply(r,t)}return r}function l(A){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){a(A,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(r,e))}))}return A}function o(A,e){if(null==A)return{};var r,t,n=function(A,e){if(null==A)return{};var r,t,n={},a=Object.keys(A);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(n[r]=A[r]);return n}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(A,r)&&(n[r]=A[r])}return n}var c=n.a.createContext({}),i=function(A){var e=n.a.useContext(c),r=e;return A&&(r="function"==typeof A?A(e):l(l({},e),A)),r},s=function(A){var e=i(A.components);return n.a.createElement(c.Provider,{value:e},A.children)},p={inlineCode:"code",wrapper:function(A){var e=A.children;return n.a.createElement(n.a.Fragment,{},e)}},f=n.a.forwardRef((function(A,e){var r=A.components,t=A.mdxType,a=A.originalType,u=A.parentName,c=o(A,["components","mdxType","originalType","parentName"]),s=i(r),f=t,d=s["".concat(u,".").concat(f)]||s[f]||p[f]||a;return r?n.a.createElement(d,l(l({ref:e},c),{},{components:r})):n.a.createElement(d,l({ref:e},c))}));function d(A,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof A||t){var a=r.length,u=new Array(a);u[0]=f;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=A,l.mdxType="string"==typeof A?A:t,u[1]=l;for(var c=2;c<a;c++)u[c]=r[c];return n.a.createElement.apply(null,u)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},315:function(A,e,r){"use strict";var t=r(0),n=r(19);e.a=function(){const A=Object(t.useContext)(n.a);if(null===A)throw new Error("Docusaurus context not provided");return A}},316:function(A,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return u}));var t=r(315),n=r(317);function a(){const{siteConfig:{baseUrl:A="/",url:e}={}}=Object(t.a)();return{withBaseUrl:(r,t)=>function(A,e,r,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(t)return e+r;const u=r.startsWith(e)?r:e+r.replace(/^\//,"");return a?A+u:u}(e,A,r,t)}}function u(A,e={}){const{withBaseUrl:r}=a();return r(A,e)}},317:function(A,e,r){"use strict";function t(A){return!0===/^(\w*:|\/\/)/.test(A)}function n(A){return void 0!==A&&!t(A)}r.d(e,"b",(function(){return t})),r.d(e,"a",(function(){return n}))},372:function(A,e,r){"use strict";r.r(e),e.default="data:image/png;base64,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"}}]);