(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n.n(c),i=n(24),r=n.n(i),l=(n(30),n(2)),o=(n(31),n(8));var j=function(e){var t=e.setVisible,n=e.thisTab,a=e.currentTab,i=e.setTab,r=Object(c.useState)(!1),j=Object(l.a)(r,2),u=j[0],d=j[1];return Object(c.useEffect)((function(){d(n===a)}),[n,a]),Object(s.jsxs)("div",{className:"tabBtn text px-3 py-2 ".concat(a.name===n.name&&"tabActive"),onMouseEnter:function(){n!==a&&d(!0)},onMouseLeave:function(){n!==a&&d(!1)},onClick:function(){n!==a&&(d(!0),t(!1),setTimeout((function(){i(n)}),300))},children:[n.name,Object(s.jsx)(o.Animated,{animationIn:"zoomIn",animationOut:"zoomOut",animationInDuration:500,animationOutDuration:500,isVisible:u,children:Object(s.jsx)("div",{className:"hl"})})]})};var u=function(e){var t=e.tabs,n=void 0===t?[]:t,c=e.setVisible,a=e.currentTab,i=e.setTab;return Object(s.jsxs)("nav",{className:"row no-gutters col-12 header",children:[Object(s.jsx)("h1",{className:"col-12 pb-2 pl-4 pt-3 m-0 text text-center text-sm-left",style:{fontSize:"3rem"},children:"Vinh Tran"}),Object(s.jsx)("div",{className:"col-12 pb-2 btn-group  d-flex justify-content-center justify-content-sm-end",children:n.map((function(e){return Object(s.jsx)(j,{setVisible:c,thisTab:e,currentTab:a,setTab:i},e.name)}))})]})},d=function(e){return Object(s.jsx)("div",{className:"px-3 px-lg-5",children:e.children})};var b=function(){return Object(s.jsx)("section",{className:"my-5 px-2",children:Object(s.jsxs)("div",{className:"m-2 px-3 d-flex justified-contend-between",children:[Object(s.jsx)("div",{className:"profile-img my-1 text-center text-md-left",children:Object(s.jsx)("i",{className:"fas fa-user-circle",style:{fontSize:"96px"}})}),Object(s.jsxs)("div",{className:"pl-5",children:[Object(s.jsx)("p",{children:"I'm Vinh Tran, a full stack web developer who loves slick and intuitive webdesigns. I enjoy challenges from both frontend and backend aspect, from designing a user friendly wireframe, to writing efficient algorithms that handles edge cases."}),Object(s.jsx)("p",{children:"Specialized in minimalistic, user-friendly web interfaces that provides responsive functionality. User experience is number 1 priority whether I design my application."}),Object(s.jsx)("p",{style:{fontWeight:"bold"},children:"Please note that this website is a quick place holder and does not fully refects my works"})]})]})})};function m(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var p=function(e){var t=e.project,c=t.name,a=t.repo,i=t.link,r=t.description;return Object(s.jsx)("div",{className:"project col-12 col-md-6 p-0",children:Object(s.jsxs)("div",{className:"project-container m-3",children:[Object(s.jsx)("img",{src:n(90)("./".concat(c,".jpg")).default,alt:m(c),className:"project-bg"}),Object(s.jsxs)("div",{className:"project-text p-3 p-sm-4 m-3",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)("a",{href:i,children:m(c)})," ",Object(s.jsx)("a",{href:a,children:Object(s.jsx)("i",{className:"fab fa-github"})})]}),Object(s.jsx)("p",{children:r})]})]})},c)};var f=function(){var e=Object(c.useState)([{name:"trip-planner",description:"MERN Stack",link:"https://still-taiga-93727.herokuapp.com/",repo:"https://github.com/MeeMofu/travel-planner"},{name:"just-chattin",description:"Express/Socket.io",link:"https://just-chattin.herokuapp.com/",repo:"https://github.com/jcgom3/Just-Chattin"},{name:"weather-dashboard",description:"HTML/CSS",link:"https://meemofu.github.io/weather-forecast/",repo:"https://github.com/MeeMofu/weather-forecast"},{name:"CMS-blog",description:"Node/IoT",link:"https://radiant-citadel-50156.herokuapp.com/",repo:"https://github.com/MeeMofu/CMS-blog"}]),t=Object(l.a)(e,1)[0];return Object(s.jsx)("div",{className:"row ",children:t.map((function(e,t){return Object(s.jsx)(p,{project:e},"project"+t)}))})},h=n(9),x=n(13);var O=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),o=r[0],j=r[1],u=n.name,d=n.email,b=n.message,m=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(a(Object(x.a)(Object(x.a)({},n),{},Object(h.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(s.jsx)("section",{children:Object(s.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",n)},className:"my-4 px-2",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(s.jsx)("input",{type:"text",name:"name",className:"form-control",defaultValue:u,onBlur:m})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(s.jsx)("input",{type:"email",name:"email",className:"form-control",defaultValue:d,onBlur:m})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(s.jsx)("textarea",{name:"message",rows:"5",className:"form-control",defaultValue:b,onBlur:m})]}),o&&Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"error-text",children:o})}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})};var g=function(){return Object(s.jsx)("section",{className:"my-5",children:Object(s.jsxs)("div",{className:"my-2",children:[Object(s.jsx)("h3",{children:"Front-end Proficiencies"}),Object(s.jsxs)("ul",{className:"skills",children:[Object(s.jsx)("li",{children:"HTML"}),Object(s.jsx)("li",{children:"CSS libraries"}),Object(s.jsx)("li",{children:"JavaScript"}),Object(s.jsx)("li",{children:"jQuery"}),Object(s.jsx)("li",{children:"Responsive design"}),Object(s.jsx)("li",{children:"React"})]}),Object(s.jsx)("h3",{children:"Back-end Proficiencies"}),Object(s.jsxs)("ul",{className:"skills",children:[Object(s.jsx)("li",{children:"REST APIs"}),Object(s.jsx)("li",{children:"Node"}),Object(s.jsx)("li",{children:"Express"}),Object(s.jsx)("li",{children:"MySQL, Sequelize"}),Object(s.jsx)("li",{children:"MongoDB, Mongoose"}),Object(s.jsx)("li",{children:"GraphQL"})]})]})})};var v=function(e){var t=e.viewTab,n=e.currentTab;return Object(s.jsx)(o.Animated,{animationIn:"slideInLeft",animationOut:"fadeOutRight",animationInDuration:700,animationOutDuration:300,isVisible:t,children:Object(s.jsxs)("div",{className:"container py-5",style:{color:"var(--text)",textShadow:" 1px 1px var(--header)"},children:[Object(s.jsxs)("h2",{className:"text-center text-md-left px-1 px-md-3 px-lg-5",style:{fontSize:"2.5rem"},children:[n.name," "]}),Object(s.jsx)(d,{children:function(){switch(n.name){case"About":return Object(s.jsx)(b,{});case"Portfolio":return Object(s.jsx)(f,{});case"Contact":return Object(s.jsx)(O,{});case"Resume":return Object(s.jsx)(g,{});default:return Object(s.jsx)(b,{})}}()})]})})};var N=function(){return Object(s.jsx)("footer",{className:"d-flex justify-content-center px-1",children:[{name:"fab fa-github",link:"https://github.com/"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/"}].map((function(e){return Object(s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("i",{className:e.name})},e.name)}))})};var y=function(){var e=Object(c.useState)([{name:"About"},{name:"Portfolio"},{name:"Contact"},{name:"Resume"}]),t=Object(l.a)(e,1)[0],n=Object(c.useState)(t[0]),a=Object(l.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(!0),j=Object(l.a)(o,2),d=j[0],b=j[1];return Object(c.useEffect)((function(){document.title=i.name,b(!0)}),[i]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}),Object(s.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"}),Object(s.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"}),Object(s.jsxs)("div",{className:"App-header",children:[Object(s.jsx)(u,{tabs:t,setVisible:b,currentTab:i,setTab:r}),Object(s.jsx)(v,{viewTab:d,currentTab:i})]}),Object(s.jsx)(N,{style:{position:"fixed",left:"0",bottom:"0"}})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),w()},30:function(e,t,n){},31:function(e,t,n){},90:function(e,t,n){var s={"./CMS-blog.jpg":91,"./calculator.jpg":92,"./just-chattin.jpg":93,"./led-wall.jpg":94,"./pastel-puzzels.jpg":95,"./run-buddy.jpg":96,"./surf-report.jpg":97,"./trip-planner.jpg":98,"./weather-dashboard.jpg":99};function c(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}c.keys=function(){return Object.keys(s)},c.resolve=a,e.exports=c,c.id=90},91:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/CMS-blog.dbe8310f.jpg"},92:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/calculator.bb6f4d8d.jpg"},93:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/just-chattin.1817042c.jpg"},94:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/led-wall.c905c2d1.jpg"},95:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/pastel-puzzels.5ff0a760.jpg"},96:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/run-buddy.b57f2b88.jpg"},97:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/surf-report.6490cdfe.jpg"},98:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/trip-planner.3eb23b31.jpg"},99:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/weather-dashboard.482b9a11.jpg"}},[[100,1,2]]]);
//# sourceMappingURL=main.4eeb773e.chunk.js.map