(this["webpackJsonppersistent-purpose"]=this["webpackJsonppersistent-purpose"]||[]).push([[0],[,,,,,,function(e,t,c){},,,function(e,t,c){},,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(10),i=c.n(a),n=(c(6),c(2)),r=c(3),l=(c(15),c(0));var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"social-media-bar",children:Object(l.jsx)("section",{className:"social-media",children:Object(l.jsxs)("div",{className:"social-icons",children:[Object(l.jsx)(n.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(l.jsx)("i",{className:"fab fa-facebook-f"})}),Object(l.jsx)(n.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(l.jsx)("i",{className:"fab fa-instagram"})}),Object(l.jsx)(n.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(l.jsx)("i",{className:"fab fa-youtube"})}),Object(l.jsx)(n.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(l.jsx)("i",{className:"fab fa-twitter"})}),Object(l.jsx)(n.b,{className:"social-icon-link linkedin",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(l.jsx)("i",{className:"fab fa-linkedin"})})]})})})})},j=c(4),b=(c(17),c(9),[{title:"Accountablility Tracker",path:"/accountability-tracker",cName:"dropdown-link"},{title:"One Page Life Plan",path:"/one-page-life-plan",cName:"dropdown-link"},{title:"One Page Business Plan",path:"/one-page-business-plan",cName:"dropdown-link"},{title:"Perfect Week",path:"/perfect-week",cName:"dropdown-link"}]),d=[{title:"Podcast",path:"/podcast",cName:"dropdown-link"},{title:"Book Recommendations",path:"/book-recommendations",cName:"dropdown-link"},{title:"Coach Recommendations",path:"/coach-recommendations",cName:"dropdown-link"}];var m=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{onClick:function(){return a(!c)},className:c?"dropdown-menu clicked":"dropdown-menu",children:b.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{className:e.cName,to:e.path,onClick:function(){return a(!1)},children:e.title})},t)}))})})};var u=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{onClick:function(){return a(!c)},className:c?"dropdown-menu clicked":"dropdown-menu",children:d.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)(n.b,{className:e.cName,to:e.path,onClick:function(){return a(!1)},children:e.title})},t)}))})})};var h=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],i=function(){return a(!1)},r=Object(s.useState)(!1),o=Object(j.a)(r,2),b=o[0],d=o[1],h=Object(s.useState)(!1),O=Object(j.a)(h,2),x=O[0],p=O[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsx)(n.b,{to:"/Persistent-Purpose/",className:"navbar-logo",onClick:i,children:"Persistent Purpose"}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return a(!c)},children:Object(l.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(l.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{to:"/my-life",className:"nav-links",onClick:i,children:"My Life"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{to:"/my-work",className:"nav-links",onClick:i,children:"My Work"})}),Object(l.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?d(!1):d(!0)},onMouseLeave:function(){window.innerWidth,d(!1)},children:[Object(l.jsxs)(n.b,{to:"/tools",className:"nav-links",onClick:i,children:["Tools ",Object(l.jsx)("i",{className:"fas fa-caret-down"})]}),b&&Object(l.jsx)(m,{})]}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{to:"/about",className:"nav-links",onClick:i,children:"Mission"})}),Object(l.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?p(!1):p(!0)},onMouseLeave:function(){window.innerWidth,p(!1)},children:[Object(l.jsxs)(n.b,{to:"/resources",className:"nav-links",onClick:i,children:["Resources ",Object(l.jsx)("i",{className:"fas fa-caret-down"})]}),x&&Object(l.jsx)(u,{})]}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{to:"/search",className:"nav-links",onClick:i,children:Object(l.jsx)("i",{className:"fas fa-search"})})})]})]})})})},O=(c(18),["btn--primary","btn--outline","btn--whiteoutline"]),x=["btn--medium","btn--large"],p=function(e){var t=e.children,c=e.type,s=e.onClick,a=e.buttonStyle,i=e.buttonSize,r=O.includes(a)?a:O[0],o=x.includes(i)?i:x[0];return Object(l.jsx)(n.b,{to:"/about-me",className:"btn-mobile",children:Object(l.jsx)("button",{className:"btn ".concat(r," ").concat(o),onClick:s,type:c,children:t})})};c(19);var f=function(){return Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsxs)("section",{className:"footer-subscription",children:[Object(l.jsx)("p",{className:"footer-subscription-heading",children:"Connect With Us To See How We Can Give You Purpose"}),Object(l.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(l.jsx)("div",{className:"input-areas",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",class:"footer-input"}),Object(l.jsx)(p,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(l.jsx)("div",{className:"footer-links",children:Object(l.jsxs)("div",{className:"footer-link-wrapper",children:[Object(l.jsxs)("div",{className:"footer-link-items",children:[Object(l.jsx)("h2",{children:"Contact"}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."})]}),Object(l.jsxs)("div",{className:"footer-link-items",children:[Object(l.jsx)("h2",{children:"About Us"}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."}),Object(l.jsx)(n.b,{to:"/",children:"Lorem, ipsum."})]})]})}),Object(l.jsx)("section",{className:"social-media",children:Object(l.jsxs)("div",{className:"social-media-wrapper",children:[Object(l.jsx)("div",{className:"footer-logo",children:Object(l.jsx)(n.b,{to:"/",className:"social-logo",children:"Persistent Purpose"})}),Object(l.jsx)("small",{className:"website-rights",children:"Persistent Purpose \xa9 2022"}),Object(l.jsxs)("div",{className:"social-icons",children:[Object(l.jsx)(n.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(l.jsx)("i",{className:"fab fa-facebook-f"})}),Object(l.jsx)(n.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(l.jsx)("i",{className:"fab fa-instagram"})}),Object(l.jsx)(n.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(l.jsx)("i",{className:"fab fa-youtube"})}),Object(l.jsx)(n.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(l.jsx)("i",{className:"fab fa-twitter"})}),Object(l.jsx)(n.b,{className:"social-icon-link linkedin",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(l.jsx)("i",{className:"fab fa-linkedin"})})]})]})})]})};var N=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__items",children:Object(l.jsxs)(n.b,{className:"cards__item__link",to:e.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(l.jsx)("img",{src:e.src,alt:"image",className:"cards__item__img"})}),Object(l.jsx)("div",{className:"cards__item__info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},k=(c(20),c.p+"static/media/card1.9715ddea.jpg"),v=c.p+"static/media/card2.f143d66a.jpg",g=c.p+"static/media/card3.6b12ec01.jpg";var w=function(){var e=document.querySelectorAll(".fade-in"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))}),{threshold:1,rootMargin:"0px 0px  100px 0px"});return e.forEach((function(e){t.observe(e)})),Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("h1",{children:"CHECK US OUT!"}),Object(l.jsx)("div",{className:"fade-in",ref:e,children:Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsx)("div",{className:"cards__wrapper",children:Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(N,{src:k,text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, possimus.",label:"Lorem",path:"/"}),Object(l.jsx)(N,{src:v,text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, possimus.",label:"Lorem",path:"/"}),Object(l.jsx)(N,{src:g,text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, possimus.",label:"Lorem",path:"/"})]})})})})]})};c(21);var _=function(){return Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsx)("h1",{children:"FIND YOUR PURPOSE"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet."}),Object(l.jsx)("div",{className:"hero-btns",children:Object(l.jsx)(p,{className:"btns",buttonStyle:"btn--whiteoutline",buttonSize:"btn--large",children:"ABOUT US"})})]})},y=c.p+"static/media/woman.25a4f106.jpg";c(22);var L=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(_,{}),Object(l.jsx)(w,{}),Object(l.jsx)("div",{className:"mid-home",children:Object(l.jsxs)("div",{className:"home-content",children:[Object(l.jsxs)("div",{className:"home-me-p",children:[Object(l.jsx)("h1",{children:"HERE ARE SOME THINGS ABOUT US!"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia rerum sunt dolor fugit vero eos eveniet beatae maxime esse nisi sed saepe voluptatum, labore numquam. Recusandae, autem consectetur! Reprehenderit temporibus doloremque ipsa culpa obcaecati aut quibusdam distinctio perferendis incidunt ratione facilis porro minima tempore nisi necessitatibus dolorem, vitae repudiandae nesciunt!"})]}),Object(l.jsx)("img",{className:"image-home",src:y,alt:"Man"})]})})]})})};c(23);var C=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"my-life",children:Object(l.jsx)("h1",{className:"my-life-header",children:"MY LIFE"})})})};c(24);var P=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"my-work",children:Object(l.jsx)("h1",{className:"my-work-header",children:"MY WORK"})})})};c(25);var S=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"about",children:Object(l.jsx)("h1",{className:"about-header",children:"ABOUT"})})})};var E=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(n.a,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(o,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/Persistent-Purpose/",element:Object(l.jsx)(L,{})}),Object(l.jsx)(r.a,{path:"/my-life",element:Object(l.jsx)(C,{})}),Object(l.jsx)(r.a,{path:"/my-work",element:Object(l.jsx)(P,{})}),Object(l.jsx)(r.a,{path:"/about",element:Object(l.jsx)(S,{})})]}),Object(l.jsx)(f,{})]})})};i.a.render(Object(l.jsx)(E,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.b112faf3.chunk.js.map