(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{9233:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return n(6422)}])},6422:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(2313),a=n(2916),s=n(4555);t.default=()=>(0,i.jsx)(r.A,{footerContacts:!1,children:(0,i.jsx)(a.W,{children:(0,i.jsxs)("div",{style:{width:"100%",height:"70vh",display:"flex",alignItems:"center",flexDirection:"column",gap:"1rem",justifyContent:"center"},children:[(0,i.jsx)("h3",{children:"Contacts"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["In Telegram I will answer faster: ",(0,i.jsx)("a",{href:"https://t.me/artemshar",target:"_blanc",children:"t.me/artemshar"})]}),(0,i.jsxs)("p",{children:["Email: ",(0,i.jsx)("a",{href:"mailto:artem.ude@gmail.com",target:"_blanc",children:"artem.ude@gmail.com"})," or ",(0,i.jsx)("a",{href:"https://www.linkedin.com/in/artemshar/",target:"_blanc",children:"LinkedIn"})," also are good."]})]}),(0,i.jsx)(s.z,{})]})})})},4555:function(e,t,n){"use strict";n.d(t,{z:function(){return Contacts},Z:function(){return o}});var i=n(5893),r=n(7731),a=n.n(r),s=n(231),l=n(8193);let c=[{label:"Email",url:"mailto:artem.ude@gmail.com",title:"artem.ude@gmail.com",options:{newWindow:!0},icon:(0,i.jsx)(l.Dme,{size:24})},{label:"LinkedIn",url:"https://www.linkedin.com/in/artemshar",title:"@artemshar",options:{newWindow:!0},icon:(0,i.jsx)(s.ltd,{size:24})},{label:"Telegram",url:"https://t.me/artemshar",title:"t.me/artemshar",options:{newWindow:!0},icon:(0,i.jsx)(s.Ww5,{size:24})},{label:"GitHub",url:"https://github.com/artemshar",title:"@artemshar",options:{newWindow:!0},icon:(0,i.jsx)(s.hJX,{size:24})},{label:"ProductHunt",url:"https://www.producthunt.com/@artemshar",title:"@artemshared",options:{newWindow:!0},icon:(0,i.jsx)(s.M56,{size:24})}],Contacts=()=>(0,i.jsx)("div",{id:"contacts",className:a().contacts,children:(0,i.jsx)("ul",{className:a().contacts__list,children:c.map(e=>(0,i.jsx)("li",{className:a().contacts__item,children:(0,i.jsx)("a",{className:a().contacts__itemLink,href:e.url,rel:"noreferrer",target:e.options.newWindow?"_blank":"",children:e.icon})},e.url))})});var o=Contacts},2916:function(e,t,n){"use strict";n.d(t,{W:function(){return Container},Z:function(){return c}});var i=n(5893),r=n(2422),a=n.n(r),s=n(4184),l=n.n(s);let Container=e=>{let{children:t,width:n}=e;return(0,i.jsx)("div",{className:l()(a().container,"small"===n&&a().small),children:t})};var c=Container},2313:function(e,t,n){"use strict";n.d(t,{A:function(){return Layout}});var i=n(5893),r=n(4184),a=n.n(r),s=n(9008),l=n.n(s),c=n(9473);let useAppDispatch=()=>(0,c.I0)(),o=c.v9;var _=n(4708),m=n(6854),h=n.n(m),u=n(4555),d=n(2916),x=n(7294);let CurrentYearJSX=()=>{var e;let[t,n]=(0,x.useState)(1),r=[{ea:(0,i.jsx)("span",{children:"\uD83C\uDF0E"})},{ea:(0,i.jsx)("span",{children:"\uD83C\uDF0D"})},{ea:(0,i.jsx)("span",{children:"\uD83C\uDF0F"})}];(0,x.useEffect)(()=>{let e=setInterval(()=>{n(e=>e%3+1)},2e3);return()=>clearInterval(e)},[]);let a=new Date,s=a.getFullYear();return(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{title:"The Earth, it's spinning!",children:null===(e=r[t-1])||void 0===e?void 0:e.ea}),s]})},Footer_Footer=e=>{let{footerContacts:t=!0}=e;return(0,i.jsx)("footer",{className:h().footer,children:(0,i.jsxs)(d.Z,{children:[t&&(0,i.jsxs)("div",{className:h().column,children:[(0,i.jsx)("h3",{className:h().title,children:"Contacts"}),(0,i.jsx)(u.Z,{})]}),(0,i.jsx)("div",{children:(0,i.jsx)("a",{href:"https://youtu.be/7QP2I5AHC4I?si=CcX-PFtPB3nbx7kd",target:"_blanc",title:"Venetian Snares - This Bitter Earth",children:(0,i.jsx)(CurrentYearJSX,{})})})]})})};var w=n(1664),j=n.n(w),v=n(1163),p=n(8270),f=n.n(p),g=n(4685),C=n.n(g),k=n(7300);let ThemeSwitcher_ThemeSwitcher=()=>{let e=o(_.qm),t=useAppDispatch();return(0,i.jsx)("div",{className:a()(C().themeSwitcher,e,C()[e.theme]),onClick:()=>{let n=e.theme===k.yU.DARK?k.yU.LIGHT:k.yU.DARK;t((0,_.X8)(n))},children:(0,i.jsx)("div",{className:C().themeSwitcher__radio})})};var N=n(231),b=n(726),S=n.n(b);let BurgerIcon=e=>{let{className:t,onClick:n,style:r,closeView:s}=e;return(0,i.jsxs)("div",{style:r,onClick:n,className:a()(S().icon_burger,s&&S().close,t),children:[(0,i.jsx)("div",{className:S().line1}),(0,i.jsx)("div",{className:S().line2}),(0,i.jsx)("div",{className:S().line3})]})},I=[{url:"/",title:"home",options:{newWindow:!1},icon:N.QBi},{url:"/experience",title:"work",options:{newWindow:!1}},{url:k.Cc,title:"Blog",options:{newWindow:!0}}],F=[{url:"/pace",title:"Pace calculator",options:{newWindow:!1},icon:N.qyc}],Header_Header=()=>{let e=(0,v.useRouter)(),[t,n]=(0,x.useState)(!1),r=(0,x.useCallback)(()=>I.map(t=>(0,i.jsx)("li",{className:a()(f().nav__item,e.asPath===t.url&&f().nav__item_active),children:(0,i.jsxs)(j(),{className:f().nav__itemLink,href:t.url,target:t.options.newWindow?"_blank":"",children:[t.icon&&(0,i.jsx)(t.icon,{style:{marginRight:"0.5rem"}}),t.title]})},t.url+t.title)),[]),s=(0,x.useCallback)(()=>F.map(t=>(0,i.jsx)("li",{className:a()(f().nav__item,e.asPath===t.url&&f().nav__item_active),children:(0,i.jsxs)(j(),{className:f().nav__itemLink,href:t.url,target:t.options.newWindow?"_blank":"",children:[t.icon&&(0,i.jsx)(t.icon,{style:{marginRight:"0.5rem"}}),t.title]})},t.url+t.title)),[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("header",{className:a()(f().header,t&&f().open),children:[(0,i.jsx)(d.W,{children:(0,i.jsxs)("nav",{className:f().nav,children:[(0,i.jsx)("ul",{className:f().nav__list,children:r()}),(0,i.jsx)("ul",{className:f().nav__list,children:s()})]})}),(0,i.jsx)(ThemeSwitcher_ThemeSwitcher,{})]}),(0,i.jsx)(BurgerIcon,{className:f().iconBurger,onClick:()=>{n(!t)},closeView:t})]})};var H=n(860),D=n.n(H);let MetaHead=()=>(0,i.jsxs)(l(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{name:"description",content:"Artem Shar | Web / Front-End / Fullstack Development"}),(0,i.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.99em%22 font-size=%2280%22>⚫</text></svg>"}),(0,i.jsx)("title",{children:"Artem Shar | FE Development"})]}),Layout=e=>{let{children:t,className:n,classNameMain:r,footerContacts:s}=e,l=o(_.qm),c=l.theme.toLowerCase();return(0,i.jsxs)("div",{className:a()(D().wrapper,n,c,c&&D()["".concat(c)]),children:[(0,i.jsx)(MetaHead,{}),(0,i.jsx)(Header_Header,{}),(0,i.jsx)("main",{className:a()(D().main,r),children:t}),(0,i.jsx)(Footer_Footer,{footerContacts:s})]})}},726:function(e){e.exports={icon_burger:"BurgerIcon_icon_burger__KZrIL",line1:"BurgerIcon_line1__ZiYjN",line2:"BurgerIcon_line2__MXkYY",line3:"BurgerIcon_line3__TNKie",close:"BurgerIcon_close__qAnHS"}},7731:function(e){e.exports={contacts:"Contacts_contacts__cflXP",contacts__list:"Contacts_contacts__list__ttF37",contacts__item:"Contacts_contacts__item__uvTCK",contacts__itemLink:"Contacts_contacts__itemLink__kqklr"}},4685:function(e){e.exports={themeSwitcher:"ThemeSwitcher_themeSwitcher__riZg5",themeSwitcher__radio:"ThemeSwitcher_themeSwitcher__radio__o7I2O",DARK:"ThemeSwitcher_DARK__6nrFv",LIGHT:"ThemeSwitcher_LIGHT__zby_6"}},2422:function(e){e.exports={container:"Container_container__FDHk4",small:"Container_small__DB_lb"}},6854:function(e){e.exports={footer:"Footer_footer__fPuQk",column:"Footer_column__I_SdU",title:"Footer_title__CKLXX"}},8270:function(e){e.exports={header:"Header_header__eDAqj",open:"Header_open__2y4EP",nav:"Header_nav__f2MAs",nav__list:"Header_nav__list___w3T9",nav__item:"Header_nav__item__I8i8c",nav__item_active:"Header_nav__item_active__BB1Rw",nav__itemLink:"Header_nav__itemLink__uhj_Z",iconBurger:"Header_iconBurger__vucFi"}},860:function(e){e.exports={wrapper:"Layout_wrapper__MObmA",light:"Layout_light__WZPFR",main:"Layout_main__QJSBj"}}},function(e){e.O(0,[778,617,169,774,888,179],function(){return e(e.s=9233)}),_N_E=e.O()}]);