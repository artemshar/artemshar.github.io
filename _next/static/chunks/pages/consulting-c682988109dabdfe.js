(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[659],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},7398:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/consulting",function(){return i(8403)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,a=i(4941).Z,r=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,s=e.src,l=e.sizes,g=e.unoptimized,A=void 0!==g&&g,v=e.priority,S=void 0!==v&&v,z=e.loading,k=e.lazyRoot,I=e.lazyBoundary,C=e.className,L=e.quality,N=e.width,R=e.height,W=e.style,B=e.objectFit,P=e.objectPosition,D=e.onLoadingComplete,F=e.placeholder,M=void 0===F?"empty":F,H=e.blurDataURL,O=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=d.useContext(f.ImageConfigContext),q=d.useMemo(function(){var e=p||T||h.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return o({},e,{allSizes:t,deviceSizes:i})},[T]),Q=l?"responsive":"intrinsic";"layout"in O&&(O.layout&&(Q=O.layout),delete O.layout);var U=j;if("loader"in O){if(O.loader){var Z=O.loader;U=function(e){e.config;var t=c(e,["config"]);return Z(t)}}delete O.loader}var G="";if(function(e){var t;return"object"==typeof e&&(b(e)||void 0!==e.src)}(s)){var V=b(s)?s.default:s;if(!V.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(H=H||V.blurDataURL,G=V.src,(!Q||"fill"!==Q)&&(R=R||V.height,N=N||V.width,!V.height||!V.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}s="string"==typeof s?s:G;var K=!S&&("lazy"===z||void 0===z);(s.startsWith("data:")||s.startsWith("blob:"))&&(A=!0,K=!1),_.has(s)&&(K=!1),q.unoptimized&&(A=!0);var J=a(d.useState(!1),2),X=J[0],Y=J[1],$=a(m.useIntersection({rootRef:void 0===k?null:k,rootMargin:I||"200px",disabled:!K}),3),ee=$[0],et=$[1],ei=$[2],en=!K||et,ea={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},er={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo=!1,es=y(N),el=y(R),ec=y(L),ed=Object.assign({},W,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:B,objectPosition:P}),eu="blur"!==M||X?{}:{backgroundSize:B||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(H,'")')};if("fill"===Q)ea.display="block",ea.position="absolute",ea.top=0,ea.left=0,ea.bottom=0,ea.right=0;else if(void 0!==es&&void 0!==el){var eh=el/es,em=isNaN(eh)?"100%":"".concat(100*eh,"%");"responsive"===Q?(ea.display="block",ea.position="relative",eo=!0,er.paddingTop=em):"intrinsic"===Q?(ea.display="inline-block",ea.position="relative",ea.maxWidth="100%",eo=!0,er.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es,"%27%20height=%27").concat(el,"%27/%3e")):"fixed"===Q&&(ea.display="inline-block",ea.position="relative",ea.width=es,ea.height=el)}var ef={src:w,srcSet:void 0,sizes:void 0};en&&(ef=x({config:q,src:s,unoptimized:A,layout:Q,width:es,quality:ec,sizes:l,loader:U}));var eg=s,eA="imagesizes";eA="imageSizes";var ep=(n(i={},"imageSrcSet",ef.srcSet),n(i,eA,ef.sizes),n(i,"crossOrigin",O.crossOrigin),i),e_=d.default.useLayoutEffect,ew=d.useRef(D),ev=d.useRef(s);d.useEffect(function(){ew.current=D},[D]),e_(function(){ev.current!==s&&(ei(),ev.current=s)},[ei,s]);var eb=o({isLazy:K,imgAttributes:ef,heightInt:el,widthInt:es,qualityInt:ec,layout:Q,className:C,imgStyle:ed,blurStyle:eu,loading:z,config:q,unoptimized:A,placeholder:M,loader:U,srcString:eg,onLoadingCompleteRef:ew,setBlurComplete:Y,setIntersection:ee,isVisible:en,noscriptSizes:l},O);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:ea},eo?d.default.createElement("span",{style:er},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(E,Object.assign({},eb))),S?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ef.src+ef.srcSet+ef.sizes,rel:"preload",as:"image",href:ef.srcSet?void 0:ef.src},ep))):null)};var o=i(6495).Z,s=i(2648).Z,l=i(1598).Z,c=i(7273).Z,d=l(i(7294)),u=s(i(5443)),h=i(9309),m=i(7190),f=i(9977);i(3794);var g=i(2392);function A(e){return"/"===e[0]?e.slice(1):e}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},_=new Set,w="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,r=new URL("".concat(t.path).concat(A(i))),o=r.searchParams;return o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),a&&o.set("q",a.toString()),r.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,a=e.width,r=["f_auto","c_limit","w_"+a,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(r).concat(A(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(A(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function b(e){return void 0!==e.default}function x(e){var t=e.config,i=e.src,n=e.unoptimized,a=e.layout,o=e.width,s=e.quality,l=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var a=e.deviceSizes,o=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(n);c)l.push(parseInt(c[2]));if(l.length){var c,d,u=.01*(d=Math).min.apply(d,r(l));return{widths:o.filter(function(e){return e>=a[0]*u}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:a,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,a,l),u=d.widths,h=d.kind,m=u.length-1;return{sizes:l||"w"!==h?l:"100vw",srcSet:u.map(function(e,n){return"".concat(c({config:t,src:i,quality:s,width:e})," ").concat("w"===h?e:n+1).concat(h)}).join(", "),src:c({config:t,src:i,quality:s,width:u[m]})}}function y(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function j(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=v.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(i))}function S(e,t,i,n,a,r){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(_.add(t),"blur"===n&&r(!0),null==a?void 0:a.current)){var i=e.naturalWidth,o=e.naturalHeight;a.current({naturalWidth:i,naturalHeight:o})}}))}var E=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,a=e.layout,r=e.className,s=e.imgStyle,l=e.blurStyle,u=e.isLazy,h=e.placeholder,m=e.loading,f=e.srcString,g=e.config,A=e.unoptimized,p=e.loader,_=e.onLoadingCompleteRef,w=e.setBlurComplete,v=e.setIntersection,b=e.onLoad,y=e.onError,j=(e.isVisible,e.noscriptSizes),E=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=u?"lazy":m,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},E,t,{decoding:"async","data-nimg":a,className:r,style:o({},s,l),ref:d.useCallback(function(e){v(e),(null==e?void 0:e.complete)&&S(e,f,a,h,_,w)},[v,f,a,h,_,w,]),onLoad:function(e){S(e.currentTarget,f,a,h,_,w),b&&b(e)},onError:function(e){"blur"===h&&w(!0),y&&y(e)}})),(u||"blur"===h)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},E,x({config:g,src:f,unoptimized:A,layout:a,width:i,quality:n,sizes:j,loader:p}),{decoding:"async","data-nimg":a,style:s,className:r,loading:m}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8403:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return h}});var n=i(5893),a=i(3679),r=i(6783),o=i(5925),s=i.n(o),l=i(5675),c=i.n(l),d={src:"/_next/static/media/two_chairs.1c34df5e.jpg",height:1154,width:1731,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALEz/8QAHRAAAQIHAAAAAAAAAAAAAAAAAQMEAAISFCJSsf/aAAgBAQABPwBeVwglVfOTlsBwR//EABcRAAMBAAAAAAAAAAAAAAAAAAADE1L/2gAIAQIBAT8AqzR//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECMf/aAAgBAwEBPwBxKeH/2Q==",blurWidth:8,blurHeight:5},u=function(){return(0,n.jsx)(a.A,{classNameMain:s().consultingMain,children:(0,n.jsxs)(r.W,{width:"small",children:[(0,n.jsxs)("h1",{className:s().title,children:["I'm happy to share my experience and talk about some topics. ",(0,n.jsx)("i",{children:"Or we will make us both get better in remote work-life"})]}),(0,n.jsx)(c(),{src:d,alt:"Two chairs in a nature. Photo by Chaz McGregor on Unsplash",width:700,height:300}),(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Communications help all of us, especially when they are substantive and help solve some problem."}),(0,n.jsx)("p",{children:"Sometimes, we just need to gather thoughts in a bunch and share them with someone to understand the next steps, that is, actions. Sometimes, we need the advice of a professional or a person with experience on a specific issue."}),(0,n.jsx)("p",{children:"We often do it in everyday life, but we don't attach importance to it.\n          I want to streamline this process and make it more effectively."}),(0,n.jsx)("p",{children:"I can have both a good experience and a bad one that will help you avoid mistakes."}),(0,n.jsx)("p",{children:"I'm ready to share my experience by one of these topics:"}),(0,n.jsxs)("ul",{className:s().topicsList,children:[(0,n.jsx)("li",{children:"Entrepreneurship & Life"}),(0,n.jsx)("li",{children:"Web / Frontend Development, UX / UI Design"}),(0,n.jsx)("li",{children:"Education and cognitive sciences"}),(0,n.jsx)("li",{children:"Culture & Creative industries: music, podcasts, films, games, books, etc."}),(0,n.jsx)("li",{children:"Running, gym, health"}),(0,n.jsx)("li",{children:"Political vision, future, hypotheses, global risks"}),(0,n.jsx)("li",{children:"Other..."})]}),(0,n.jsxs)("p",{style:{fontSize:"30px"},children:["Please, choose a time"," ",(0,n.jsx)("a",{className:s().ctaBlock__button,href:"https://calendly.com/artem-shar/talks-consulting",target:"_blank",rel:"noopener noreferrer",children:"in Calandly"})," ","and/or write to me in ",(0,n.jsx)("a",{href:"https://t.me/artemshar",children:"Telegram"})]}),(0,n.jsx)("p",{children:"We can use these languages:"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("u",{children:"Russian"}),": more advanced and complex ",(0,n.jsx)("br",{}),(0,n.jsx)("u",{children:"English"}),": simple (most likely, just for practice English :)"]})]})})},h=function(){return(0,n.jsx)(u,{})}},6783:function(e,t,i){"use strict";i.d(t,{W:function(){return l},Z:function(){return c}});var n=i(5893),a=i(8694),r=i.n(a),o=i(4184),s=i.n(o),l=function(e){var t=e.children,i=e.width;return(0,n.jsx)("div",{className:s()(r().container,"small"===i&&r().small),children:t})},c=l},3679:function(e,t,i){"use strict";i.d(t,{A:function(){return B}});var n=i(5893),a=i(4184),r=i.n(a),o=i(9473),s=o.v9,l=i(2336),c=i(7320),d=i.n(c),u=i(7935),h=i.n(u),m=[{label:"Email",url:"mailto:artem.ude@gmail.com",title:"artem.ude@gmail.com",options:{newWindow:!0}},{label:"Telegram",url:"https://t.me/artemshar",title:"t.me/artemshar",options:{newWindow:!0}},{label:"GitHub",url:"https://github.com/artemshar",title:"@artemshar",options:{newWindow:!0}},{label:"LinkedIn",url:"https://www.linkedin.com/in/artemshar/",title:"@artemshar",options:{newWindow:!0}},{label:"ProductHunt",url:"https://www.producthunt.com/@artemshared",title:"@artemshared",options:{newWindow:!0}},],f=function(){return(0,n.jsx)("div",{id:"contacts",className:h().contacts,children:(0,n.jsx)("ul",{children:m.map(function(e){return(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:e.url,target:e.options.newWindow?"_blanc":"",children:e.label})},e.url)})})})},g=i(6783),A=function(){var e;return(0,n.jsx)("footer",{className:d().footer,children:(0,n.jsxs)(g.Z,{children:[(0,n.jsxs)("div",{className:d().column,children:[(0,n.jsx)("h3",{className:d().title,children:"Contacts"}),(0,n.jsx)(f,{})]}),(0,n.jsx)("div",{children:(e=new Date().getFullYear(),(0,n.jsxs)("div",{children:["\uD83C\uDF0D ",e]}))})]})})},p=i(1664),_=i.n(p),w=i(1163),v=i(7908),b=i.n(v),x=i(2817),y=i.n(x),j=i(4731),S=function(){var e=s(l.qm),t=(0,o.I0)(),i=function(){var i=e.theme===j.yU.DARK?j.yU.LIGHT:j.yU.DARK;t((0,l.X8)(i))};return(0,n.jsx)("div",{className:r()(y().themeSwitcher,e,y()[e.theme]),onClick:i,children:(0,n.jsx)("div",{className:y().themeSwitcher__radio})})},E=i(6570),z=i(6375),k=i.n(z),I=function(e){var t=e.style,i=e.className;return(0,n.jsx)(E.Z,{style:t,className:r()(k().icon,i&&i),size:20,strokeWidth:1.4})},C=[{url:"/",title:"Home",options:{newWindow:!1}},{url:j.qc,title:"Blog",options:{newWindow:!1}},{url:"/consulting",title:"Consulting, Chat",options:{newWindow:!1}},],L=function(){var e=(0,w.useRouter)();return(0,n.jsxs)("header",{className:b().header,children:[(0,n.jsx)(g.W,{children:(0,n.jsx)("nav",{className:b().nav,children:(0,n.jsx)("ul",{className:b().nav__list,children:C.map(function(t){return(0,n.jsx)("li",{className:r()(b().nav__item,e.asPath===t.url&&b().nav__item_active),children:(0,n.jsx)(_(),{href:t.url,target:t.options.newWindow?"_blanc":"",children:(0,n.jsxs)("a",{className:b().nav__itemLink,children:[t.url===e.asPath&&(0,n.jsx)(I,{className:b().activeIcon}),t.title]})})},t.url+t.title)})})})}),(0,n.jsx)(S,{})]})},N=i(4204),R=i.n(N),W=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{name:"theme-color",content:"#FFFFFF"}),(0,n.jsx)("meta",{name:"description",content:"Artem Shar: personal site"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("title",{children:"ArtemShar.Space"})]})},B=function(e){var t=e.children,i=e.className,a=e.classNameMain,o=s(l.qm).theme.toLowerCase();return(0,n.jsxs)("div",{className:r()(R().wrapper,i,o),children:[(0,n.jsx)(W,{}),(0,n.jsx)(L,{}),(0,n.jsx)("main",{className:r()(R().main,a),children:t}),(0,n.jsx)(A,{})]})}},6375:function(e){e.exports={icon:"CircleDashedIcon_icon__B4MNs",rotate:"CircleDashedIcon_rotate__TgWSF"}},7935:function(e){e.exports={contacts:"Contacts_contacts__TPo_o"}},2817:function(e){e.exports={themeSwitcher:"ThemeSwitcher_themeSwitcher__3ppfH",themeSwitcher__radio:"ThemeSwitcher_themeSwitcher__radio__Gbv0_",DARK:"ThemeSwitcher_DARK__ENafB",LIGHT:"ThemeSwitcher_LIGHT__kLVfZ"}},8694:function(e){e.exports={container:"Container_container__hLzfs",small:"Container_small__tns52"}},7320:function(e){e.exports={footer:"Footer_footer__LyqoE",column:"Footer_column__fIaab",title:"Footer_title__4_ybK"}},7908:function(e){e.exports={header:"Header_header__jtMDd",nav__list:"Header_nav__list___5Wm2",nav__item:"Header_nav__item__HFm1L",nav__item_active:"Header_nav__item_active__jkJ3n",nav__itemLink:"Header_nav__itemLink__eEwpk",activeIcon:"Header_activeIcon__LW9xF"}},4204:function(e){e.exports={wrapper:"Layout_wrapper__kfZ1l",main:"Layout_main__oc42n"}},5925:function(e){e.exports={consultingMain:"ConsultingPage_consultingMain__HABuC",title:"ConsultingPage_title__MOjNv",topicsList:"ConsultingPage_topicsList__dtdJ4"}},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[805,774,888,179],function(){return e(e.s=7398)}),_N_E=e.O()}]);