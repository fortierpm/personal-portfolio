!function(e){function t(t){for(var n,i,o=t[0],s=t[1],l=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(m&&m(t);p.length;)p.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={1:0},c=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var c,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"templates/"+({0:"__react_static_root__/node_modules/react-static/lib/browser/components/Default404"}[e]||e)+"."+{0:"6ba76b7f"}[e]+".js"}(e);var s=new Error;c=function(t){o.onerror=o.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",s.name="ChunkLoadError",s.type=n,s.request=c,a[1](s)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:o})}),12e4);o.onerror=o.onload=c,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var m=s;c.push([59,2,3]),a()}({10:function(e,t,a){e.exports=a.p+"static/project-thumb.8f10ca46.jpg"},105:function(e,t,a){"use strict";a.r(t),function(e){var n=a(0),r=a.n(n),c=a(30),i=a.n(c),o=a(57),s=a(23);if(t.default=s.a,"undefined"!=typeof document){var l=document.getElementById("root"),m=l.hasChildNodes()?i.a.hydrate:i.a.render,u=function(e){m(r.a.createElement(o.AppContainer,null,r.a.createElement(e,null)),l)};u(s.a),e&&e.hot&&e.hot.accept("./App",(function(){u(s.a)}))}}.call(this,a(106)(e))},23:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(0),i=a.n(c),o=a(52),s=a(55),l=a.n(s);function m(){return i.a.createElement("header",{className:"top-navbar"},i.a.createElement("div",{className:"header-logo"},i.a.createElement("img",{className:"logo-image",src:l.a,alt:"Logo"})),i.a.createElement("div",{className:"header-title"},"Peter Fortier"),i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",{className:"nav-list"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#hero",className:"nav-link"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#projects",className:"nav-link"},"Projects")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#skills",className:"nav-link"},"Skills")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#contact",className:"nav-link"},"Contact")))))}a(127);var u=["Web Design","JavaScript","React","Software Development","Python","Graphics","SVGs","Prototyping"],p=u.length,f=3,d=1,g=function(){var e=Object(c.useState)(!0),t=r()(e,2),a=t[0],n=t[1],o=Object(c.useState)("JavaScript"),s=r()(o,2),l=s[0],m=s[1],g=Object(c.useState)("Web Design"),y=r()(g,2),E=y[0],h=y[1],b=Object(c.useState)("React"),N=r()(b,2),M=N[0],k=N[1],v=Object(c.useState)("down"),S=r()(v,2),w=S[0],j=S[1],L=Object(c.useState)("left"),D=r()(L,2),O=D[0],x=D[1],z=Object(c.useRef)(null),T=Object(c.useRef)(null),I=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=setInterval((function(){switch(x(w),j((function(){var e="";switch(Math.floor(4*Math.random()+1)){case 1:e="down";break;case 2:e="up";break;case 3:e="right";break;default:e="left"}return e})),f===p&&(f=0),d){case 0:z.current.style.animationName="".concat(O,"-1"),T.current.style.animationName="".concat(O,"-2"),I.current.style.animationName="".concat(w,"-prep"),k(u[f++]),d++;break;case 1:z.current.style.animationName="".concat(O,"-2"),T.current.style.animationName="".concat(w,"-prep"),I.current.style.animationName="".concat(O,"-1"),h(u[f++]),d++;break;case 2:z.current.style.animationName="".concat(w,"-prep"),T.current.style.animationName="".concat(O,"-1"),I.current.style.animationName="".concat(O,"-2"),m(u[f++]),d=0}n(!a)}),3e3);return function(){return clearInterval(e)}}),[a]),i.a.createElement("p",{className:"subheader"},i.a.createElement("span",{className:"subheader-text"},"I do "),i.a.createElement("span",{className:"subheader-text idobox"},i.a.createElement("span",{className:"screen-readable-label"},u.join(", "))," ",i.a.createElement("span",{className:"ido-placeholder","aria-hidden":"true"},"Web Design"),i.a.createElement("span",{ref:z,className:"ido1 ido","aria-hidden":"true"},l),i.a.createElement("span",{ref:T,className:"ido2 ido","aria-hidden":"true"},E),i.a.createElement("span",{ref:I,className:"ido3 ido","aria-hidden":"true"},M)))},y=a(56),E=a.n(y),h=function(e){var t=e.projectGroupKeys,a=e.setCategory,n=e.category,o=Object(c.useState)(!1),s=r()(o,2),l=s[0],m=s[1];return i.a.createElement("div",{className:"project-category-select"},i.a.createElement("div",{className:"category-desc"},"Category:"),i.a.createElement("div",{onClick:function(e){m(!l)},className:"category-select"},i.a.createElement("h3",{className:"active-category"},n),i.a.createElement("img",{className:l?"rotate-90":"",src:E.a,alt:""}),i.a.createElement("div",{className:"category-dropdown ".concat(l?"dropdown-open":"")},t.map((function(e){return e===n?i.a.createElement("div",{className:"category-option category-option-active",key:e},e):i.a.createElement("div",{onClick:function(){return function(e){a("".concat(e)),m(!1)}(e)},className:"category-option",key:e},e)})))))},b=function(e){var t=e.project,a=e.year,n=e.month,r=e.day,c=1===t.authors.length;return i.a.createElement("article",{className:"project-card"},i.a.createElement("div",{className:"card-title"},i.a.createElement("p",{className:"card-date"},i.a.createElement("time",{dateTime:"".concat(a,"-").concat(n,"-").concat(r)},t.date)),i.a.createElement("h3",null,i.a.createElement("a",{href:"#"},t.title))),i.a.createElement("img",{className:"card-thumb",src:t.thumb,alt:"Project thumbnail"}),i.a.createElement("address",{className:"card-authorship ".concat(c?"single":"")},i.a.createElement("a",{className:"author1-avatar",rel:"author",href:t.authors[0][2]},i.a.createElement("img",{className:"avatar-img",src:t.authors[0][1],alt:""})),i.a.createElement("div",{className:"author-list"},i.a.createElement("div",{className:"author-prefix"},c?"Designer":"Designers"),t.authors.map((function(e){return i.a.createElement("a",{className:"author-link",rel:"author",href:e[2],key:e[0]},e[0],i.a.createElement("br",null))})))),i.a.createElement("div",{className:"card-tags"},t.tags.map((function(e){return i.a.createElement("a",{className:"tag-link",href:e[1],key:e[0]},e[0])}))))},N=function(e){var t=e.projects,a=e.projectGroup;return i.a.createElement("div",{className:"card-stack"},t[a].map((function(e){var t=new Date(e.date),a="".concat(t.getFullYear()),n="".concat(t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1),r="".concat(t.getDate()<10?"0".concat(t.getDate()):t.getDate());return i.a.createElement(b,{project:e,year:a,month:n,day:r,key:e.title})})))},M=function(e){var t=e.tier,a=void 0===t?"primary":t,n=e.proficiency,r="";return r=1===n?"Expert":n>=.9?"Near Expert":n>=.7?"Advanced":n>=.5?"Proficient":n>=.4?"Competent":n>=.1?"Beginner":n>=0?"Unskilled":"Not Specified",i.a.createElement("svg",{className:"prof-guage ".concat("secondary"===a?"prof-guage-sec":"prof-guage-prim"),viewBox:"0 0 1000 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":"Skill Level: ".concat(r)},i.a.createElement("rect",{width:"1000",height:"20",rx:"10",fill:"black"}),i.a.createElement("mask",{id:n,style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"1000",height:"20"},i.a.createElement("rect",{width:1e3*n,height:"20",fill:"#C994C4"})),i.a.createElement("g",{mask:"url(#".concat(n,")")},i.a.createElement("rect",{width:"1000",height:"20",rx:"10",fill:"url(#paint0_linear)"})),i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"paint0_linear",x1:"0",y1:"0",x2:"1000",y2:"0",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#FF1F1F"}),i.a.createElement("stop",{offset:"1",stopColor:"#760AFF"}))))},k=function(e){var t=e.open,a=e.skill;return i.a.createElement("ul",{className:"subskill-list"},t?a.subSkillList.map((function(e){return i.a.createElement("div",{className:"subskill",key:e.name},i.a.createElement("p",{className:"subskill-name"},e.name),i.a.createElement(M,{tier:"secondary",proficiency:e.proficiency}))})):"")},v=function(e){var t=e.skills,a=e.skillGroup;return i.a.createElement("ul",{className:"skill-list"},t[a].map((function(e){var t=Object(c.useState)(!1),a=r()(t,2),n=a[0],o=a[1],s=e.subSkillList.length>0;return i.a.createElement("div",{onFocus:function(e){o(!0)},onBlur:function(e){o(!1)},tabindex:"".concat(s?"0":""),className:"skill ".concat(s?"skill-clickable":""),key:e.name},i.a.createElement("div",{className:"skill-main"},i.a.createElement("h4",{className:"skill-name"},e.name),i.a.createElement("p",{className:"skill-desc"},e.description),i.a.createElement(M,{proficiency:e.proficiency})),i.a.createElement(k,{open:n,skill:e}))})))},S=function(e){var t=e.certificates;return i.a.createElement("ul",{className:"certificate-list"},t.map((function(e){var t,a=new Date(e.dateIssued),n="".concat(a.getFullYear()),r="".concat(a.getMonth()+1<10?"0".concat(a.getMonth()+1):a.getMonth()+1);return e.expires&&(t=new Date(e.expires),"".concat(t.getFullYear()),"".concat(t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1)),i.a.createElement("article",{className:"certificate",key:e.title},i.a.createElement("h3",{className:"certificate-title"},e.title),i.a.createElement("p",{className:"certificate-issuer"},i.a.createElement("a",{href:e.orgLink,target:"_blank"},e.issuingOrg)),i.a.createElement("p",{className:"certificate-dateissued"},i.a.createElement("time",{dateTime:"".concat(n,"-").concat(r)},e.dateIssued)),i.a.createElement("p",{className:"certificate-dateexpires"},e.expires?i.a.createElement("time",{dateTime:"".concat(n,"-").concat(r)},e.expires):"No Expiration Date"),i.a.createElement("p",{className:"certificate-id"},e.credentialID?"Credential ID ".concat(e.credentialID):""),i.a.createElement("p",{className:"certificate-url"},i.a.createElement("a",{href:e.credentialURL,target:"_blank"},"See certificate")))})))},w=(a(128),a(129),a(9)),j=a(22),L=a(16),D=a(29),O=a.n(D),x=a(10),z=a.n(x),T=a(7),I=a.n(T);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){O()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)for(var n=t[a],r=0;r<e[n].length;r++){var c=e[n][r];c.featured&&e.Featured.splice(c.featured-1,0,C({},c))}return e}({Featured:[],React:[{title:"Project 1",date:"Sep 17, 2021",thumb:z.a,authors:[["Peter Fortier",I.a,"https://google.com"]],tags:[["HTML","#skills"],["CSS","#skills"],["JavaScript","#skills"]],featured:2},{title:"Project 2",date:"Sep 17, 2021",thumb:z.a,authors:[["Peter Fortier",I.a,"https://google.com"],["Jacob Merrick",I.a,"https://google.com"]],tags:[["HTML","#skills"],["CSS","#skills"],["JavaScript","#skills"]],featured:1}],Javascript:[{title:"Project 3",date:"Sep 17, 2021",thumb:z.a,authors:[["Peter Fortier",I.a,"https://google.com"],["Jacob Merrick",I.a,"https://google.com"]],tags:[["HTML","#skills"],["CSS","#skills"],["JavaScript","#skills"]],featured:4}],CSS:[{title:"Project 4",date:"Sep 17, 2021",thumb:z.a,authors:[["Peter Fortier",I.a,"https://google.com"],["Jacob Merrick",I.a,"https://google.com"]],tags:[["HTML","#skills"],["CSS","#skills"],["JavaScript","#skills"]],featured:3}],Python:[{title:"Project 5",date:"Sep 17, 2021",thumb:z.a,authors:[["Peter Fortier",I.a,"https://google.com"],["Jacob Merrick",I.a,"https://google.com"]],tags:[["HTML","#skills"],["CSS","#skills"],["JavaScript","#skills"]],featured:5}],"Vector Graphics":[{title:"Project 6",date:"Sep 17, 2021",thumb:z.a,authors:[["Peter Fortier",I.a,"https://google.com"],["Jacob Merrick",I.a,"https://google.com"]],tags:[["HTML","#skills"],["CSS","#skills"],["JavaScript","#skills"]],featured:6}]}),A={Frontend:[{name:"HTML",description:"markup language",proficiency:.9,subSkillList:[{name:"Semantic HTML",proficiency:.9},{name:"Accessible HTML",proficiency:.9},{name:"XHTML",proficiency:.8},{name:"SVG",proficiency:1}]},{name:"CSS",description:"style sheet language",proficiency:.9,subSkillList:[{name:"Sass",proficiency:.9},{name:"Bootstrap",proficiency:.7},{name:"PostCSS",proficiency:.5}]},{name:"JavaScript",description:"OOP language",proficiency:.9,subSkillList:[{name:"ES6",proficiency:.9},{name:"DOM",proficiency:.9},{name:"Regex",proficiency:.6},{name:"TypeScript",proficiency:.7},{name:"jQuery",proficiency:.5}]},{name:"React.js",description:"JavaScript library",proficiency:.8,subSkillList:[{name:"State",proficiency:.8},{name:"Functional Components and Props",proficiency:.8},{name:"Hooks",proficiency:.8}]},{name:"react-static",description:"React.js static site generator",proficiency:.7,subSkillList:[{name:"react-static <Head>",proficiency:.9}]},{name:"Next.js",description:"React.js development framework",proficiency:.6,subSkillList:[{name:"CSS Modules",proficiency:.9},{name:"'next/head' <Head>",proficiency:.9},{name:"SSG",proficiency:.6}]},{name:"Three.js",description:"JavaScript library for 3D visuals",proficiency:.6,subSkillList:[]},{name:"GSAP",description:"JavaScript library for animations",proficiency:.5,subSkillList:[]},{name:"D3.js",description:"JavaScript library for interative data graphics",proficiency:.4,subSkillList:[]}],Backend:[{name:"Python",description:"OOP language",proficiency:.9,subSkillList:[{name:"Tkinter",proficiency:.8},{name:"Pillow",proficiency:.8}]},{name:"Node.js",description:"JavaScript runtime environment",proficiency:.7,subSkillList:[{name:"npm - Node package manager",proficiency:.7},{name:"npx - npm package runner",proficiency:.7}]},{name:"C++",description:"OOP language",proficiency:.6,subSkillList:[]},{name:"Firebase",description:"Google-backed application development software",proficiency:.3,subSkillList:[]}],"Integrated Development Environments":[{name:"Visual Studio Code",description:"IDE",proficiency:.8,subSkillList:[{name:"Localhost",proficiency:1},{name:"Snippets",proficiency:1},{name:"Shortcuts",proficiency:.8},{name:"Source control with Git",proficiency:.8},{name:"Extensions, .json's, customization",proficiency:1}]},{name:"Atom",description:"IDE",proficiency:.7,subSkillList:[]}],"Version Control":[{name:"GitHub",description:"web-hosted Git repository manager",proficiency:.8,subSkillList:[]},{name:"GitLab",description:"web-hosted Git repository manager",proficiency:.3,subSkillList:[]},{name:"Git",description:"version control software",proficiency:.6,subSkillList:[]}],"Web Hosting":[{name:"Github Pages",description:"static site hosting service for GitHub repos",proficiency:.8,subSkillList:[]},{name:"Netlify",description:"hosting and serverless backend services for web applications",proficiency:.8,subSkillList:[]}],Prototyping:[{name:"Figma",description:"layout prototyping tool",proficiency:.8,subSkillList:[{name:"Prototype smart animations",proficiency:.9},{name:"Smart selection",proficiency:.9},{name:"SVG Export",proficiency:1}]},{name:"Affinity Designer",description:"vector graphics editor",proficiency:.9,subSkillList:[{name:"Masks",proficiency:1},{name:"Filters",proficiency:.9},{name:"SVG Export",proficiency:1}]},{name:"InDesign",description:"vector graphics editor",proficiency:.5,subSkillList:[]}],"Image Editing":[{name:"Affinity Photo",description:"raster graphics editor",proficiency:.9,subSkillList:[{name:"Masks",proficiency:1},{name:"Post-processing",proficiency:.9},{name:"Perspective manipulation",proficiency:.9}]},{name:"Photoshop",description:"raster graphics editor",proficiency:.5,subSkillList:[]}],"Math Technologies":[{name:"Mathematica",description:"mathematical computation program",proficiency:.8,subSkillList:[{name:"Graphics and Plots",proficiency:.8},{name:"Loops",proficiency:1}]},{name:"LaTeX",description:"document preparation system",proficiency:.4,subSkillList:[]}]},G=[{title:"Responsive Web Design",issuingOrg:"freeCodeCamp",orgLink:"https://freecodecamp.org",dateIssued:"November 2020",expires:!1,credentialID:"placeholder",credentialURL:"https://freecodecamp.org/certification/fortierpm/responsive-web-design"}];t.a=function(){var e=Object.keys(_),t=Object.keys(A),a=Object(c.useState)("Featured"),n=r()(a,2),s=n[0],l=n[1];return i.a.createElement("div",{className:"App"},i.a.createElement(o.Head,null,i.a.createElement("meta",{charSet:"UTF-8"}),i.a.createElement("title",null,"Peter Fortier - Web Portfolio"),i.a.createElement("meta",{name:"description",content:"Peter Fortier's personal portfolio webpage"}),i.a.createElement("meta",{name:"keywords",content:"Peter Fortier, portfolio, web designer"}),i.a.createElement("meta",{name:"page-topic",content:"Peter Fortier"}),i.a.createElement("meta",{name:"page-type",content:"Portfolio"}),i.a.createElement("meta",{name:"audience",content:"Everyone"})," ",i.a.createElement("meta",{name:"copyright",content:"Peter Fortier"}),i.a.createElement("meta",{name:"robots",content:"index, follow"}),i.a.createElement("link",{rel:"icon",href:"favicon.ico",type:"image/x-icon"}),i.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap",rel:"stylesheet"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700&display=swap",rel:"stylesheet"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700&display=swap",rel:"stylesheet"})),i.a.createElement(m,null),i.a.createElement("main",null,i.a.createElement("section",{id:"hero"},i.a.createElement("h1",{className:"hero-header"},"Hey!",i.a.createElement("br",null),"I'm Peter."),i.a.createElement(g,null)),i.a.createElement("section",{id:"projects",className:"main-section"},i.a.createElement("h2",null,"Projects"),i.a.createElement(h,{projectGroupKeys:e,setCategory:l,category:s}),i.a.createElement("div",{className:"project-stack-container"},i.a.createElement(N,{projects:_,projectGroup:s}))),i.a.createElement("section",{id:"skills",className:"main-section"},i.a.createElement("h2",null,"Skills"),i.a.createElement("div",{className:"skills-container"},t.map((function(e){return i.a.createElement("section",{className:"skill-group",key:e},i.a.createElement("h3",null,e),i.a.createElement(v,{skills:A,skillGroup:e}))})))),i.a.createElement("section",{id:"certificates",className:"main-section"},i.a.createElement("h2",null,"Certificates"),i.a.createElement("div",{className:"certificates-container"},i.a.createElement(S,{certificates:G}))),i.a.createElement("section",{id:"contact",className:"main-section"},i.a.createElement("h2",null,"Contact"),i.a.createElement("section",{className:"contact-info"},i.a.createElement("h3",null,"Info"),i.a.createElement("ul",{className:"info-list"},i.a.createElement("li",{className:"info-item"},i.a.createElement("a",{href:"mailto:fortierpm@gmail.com"},i.a.createElement(w.a,{className:"icon",icon:j.a}),"fortierpm@gmail.com")),i.a.createElement("li",{className:"info-item"},i.a.createElement("a",{href:"mailto:fortie1@stolaf.edu"},i.a.createElement(w.a,{className:"icon",icon:j.c}),"fortie1@stolaf.edu")),i.a.createElement("li",{className:"info-item"},i.a.createElement("a",{href:"sms:+16128038780&body=Hi%20I%27m%20Peter!%20Send%20me%20a%20message."},i.a.createElement(w.a,{className:"icon",icon:j.b}),"(612) 803-8780")),i.a.createElement("li",{className:"info-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/peter-fortier-71359221a/",rel:"external noopener"},i.a.createElement(w.a,{className:"icon",icon:L.c}),"LinkedIn")))),i.a.createElement("section",{className:"contact-socials"},i.a.createElement("h3",null,"Socials"),i.a.createElement("ul",null,i.a.createElement("li",{className:"info-item"},i.a.createElement("a",{href:"https://www.instagram.com/petrfortier/",rel:"external noopener"},i.a.createElement(w.a,{className:"icon",icon:L.b}),"Instagram")),i.a.createElement("li",{className:"info-item"},i.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100010683600528",rel:"external noopener"},i.a.createElement(w.a,{className:"icon",icon:L.a}),"Facebook")),i.a.createElement("li",{className:"info-item"},i.a.createElement("a",{href:"https://twitter.com/fortier_pm",rel:"external noopener"},i.a.createElement(w.a,{className:"icon",icon:L.d}),"Twitter")))))),i.a.createElement("footer",null,i.a.createElement("div",{className:"copyright"},"© 2021 Peter Fortier. All Rights Reserved.")))}},55:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEwMyAxMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGw6I2VlZWVlZjtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwtNzM1Ljg4NCwtMTMxMC42MSkiPgogICAgICAgIDxwYXRoIGlkPSJmb3J0aWVycG1Mb2dvIiBkPSJNNzYwLjYzMywxMzEwLjYxTDgzOC40MTQsMTM4OC4zOUw3NzguMzEsMTQ0OC40OUw3NzEuMjM5LDE0NDEuNDJMNzg3LjYzMSwxNDI1LjAzTDc4Ni4wNTQsMTQyNC45NEM3NzkuNjgxLDE0MjQuMzUgNzczLjg2LDE0MjEuNDEgNzY4LjU4OSwxNDE2LjE0Qzc2My4yODIsMTQxMC44NCA3NjAuMzEyLDE0MDUuMDUgNzU5LjY4LDEzOTguNzlMNzU5LjU1MiwxMzk2LjU0TDc0Mi45NTUsMTQxMy4xNEw3MzUuODg0LDE0MDYuMDdMNzc0Ljc3NSwxMzY3LjE3TDczOS40MTksMTMzMS44Mkw3NDYuNDksMTMyNC43NUw3ODEuODQ2LDEzNjAuMUw3ODguOTE3LDEzNTMuMDNMNzUzLjU2MiwxMzE3LjY4TDc2MC42MzMsMTMxMC42MVpNNzgxLjg0NiwxMzc0LjI1TDc3Ny45NjUsMTM3OC4xM0M3NzUuMDEsMTM4MS40NiA3NzMuMDEzLDEzODQuMzYgNzcxLjk1MSwxMzg2Ljc5Qzc3MC40MTQsMTM5MC4zMSA3NzAuMzM2LDEzOTMuODUgNzcwLjgwNCwxMzk3LjU2Qzc3MS4yNjIsMTQwMS4xOSA3NzIuNzg1LDE0MDQuNzkgNzc2LjM0LDE0MDguMzRDNzc5LjU3NywxNDExLjU3IDc4Mi45NDcsMTQxMy4wMSA3ODYuNzI4LDE0MTMuNjZDNzkwLjQxNSwxNDE0LjMgNzkzLjg2OSwxNDE0LjExIDc5Ny4xNzEsMTQxMi42OEM4MDAuNDYsMTQxMS4yNiA4MTAuMTMsMTQwMi41MyA4MTAuMTMsMTQwMi41M0w3ODEuODQ2LDEzNzQuMjVaTTc5NS45ODgsMTM2MC4xTDc4OC45MTcsMTM2Ny4xN0w4MTcuMjAxLDEzOTUuNDZMODI0LjI3MiwxMzg4LjM5QzgyNC4yNzIsMTM4OC4zOSA3OTUuOTg4LDEzNjAuMSA3OTUuOTg4LDEzNjAuMVoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},56:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9IiNlZWVlZWYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDEwMFYwSDEwMFYxNi42NjY3SDE2LjY2NjdWMTAwSDBaIiAvPgo8L3N2Zz4K"},59:function(e,t,a){a(60),a(89),e.exports=a(100)},61:function(e,t,a){"use strict";a.r(t);t.default=[{location:"__react_static_root__/",plugins:[],hooks:{}}]},7:function(e,t,a){e.exports=a.p+"static/author.fb64dfe1.jpg"},90:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"notFoundTemplate",(function(){return f}));var n=a(50),r=a.n(n),c=a(51),i=a.n(c),o=a(0),s=a.n(o),l=a(13),m=a.n(l);Object(l.setHasBabelPlugin)();var u={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},p=m()(i()({id:"__react_static_root__/node_modules/react-static/lib/browser/components/Default404",load:function(){return Promise.all([a.e(0).then(a.t.bind(null,58,7))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/node_modules/react-static/lib/browser/components/Default404")},resolve:function(){return 58},chunkName:function(){return"__react_static_root__/node_modules/react-static/lib/browser/components/Default404"}}),u);p.template="__react_static_root__/node_modules/react-static/lib/browser/components/Default404",t.default={"__react_static_root__/node_modules/react-static/lib/browser/components/Default404":p};var f="__react_static_root__/node_modules/react-static/lib/browser/components/Default404"}.call(this,"/")},93:function(e,t,a){var n={".":12,"./":12,"./index":12,"./index.js":12};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=93}});