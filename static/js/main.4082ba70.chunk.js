(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),i=n(7),s=n.n(i),r=(n(16),n(10)),u=n(4),l=n(2),p=n.p+"static/media/logo.2e17206c.svg";var d=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"})})},_=n.p+"static/media/edit-button.72373403.svg",j=o.a.createContext();var b=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,i=e.onCardDelete,s=o.a.useContext(j),r=t.owner._id===s._id,u=t.likes.some((function(e){return e._id===s._id})),l="element__delete ".concat(r?"element__delete_visible":""),p="element__like ".concat(u?"element__like_active":"");return Object(a.jsxs)("article",{className:"element",children:[Object(a.jsx)("button",{type:"button",className:l,onClick:function(){i(t)}}),Object(a.jsx)("img",{className:"element__pic",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"element__caption",children:[Object(a.jsx)("h2",{className:"element__title",children:t.name}),Object(a.jsxs)("div",{className:"element__like-area",children:[Object(a.jsx)("button",{type:"button",className:p,onClick:function(){c(t)}}),Object(a.jsx)("p",{className:"element__like-count",children:t.likes.length})]})]})]})};var m=function(e){var t=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,i=e.onCardClick,s=e.cards,r=e.onCardLike,u=e.onCardDelete,l=o.a.useContext(j);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__wrapper",children:[Object(a.jsxs)("div",{className:"profile__avatar-overlay",children:[Object(a.jsx)("img",{src:l.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(a.jsx)("button",{type:"button",className:"profile__avatar-button",onClick:c})]}),Object(a.jsxs)("div",{className:"profile__intro",children:[Object(a.jsxs)("div",{className:"profile__intro-top",children:[Object(a.jsx)("h1",{className:"profile__name",children:l.name}),Object(a.jsx)("button",{type:"button",className:"profile__edit-button",onClick:t,children:Object(a.jsx)("img",{src:_,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"profile__edit-icon"})})]}),Object(a.jsx)("p",{className:"profile__about",children:l.about})]})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-button",onClick:n})]}),Object(a.jsx)("section",{className:"gallery",children:s.map((function(e){return Object(a.jsx)(b,{card:e,onCardClick:i,onCardLike:r,onCardDelete:u},e._id)}))})]})};var O=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var v=function(e){var t=e.card,n=e.onClose,c=e.onClickOverlay;return Object(a.jsx)("section",{className:"popup popup-big-pic popup_place_pic ".concat(t.isOpen?"popup_is-opened":""),onClick:c,children:Object(a.jsxs)("div",{className:"popup__container-pic",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_place_pic",onClick:n}),Object(a.jsxs)("figure",{className:"popup__item",children:[Object(a.jsx)("img",{className:"popup__pic",src:t.link,alt:t.name}),Object(a.jsx)("figcaption",{className:"popup__caption",children:t.name})]})]})})},h=n(8),f=n(9),C=new(function(){function e(t){Object(h.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(f.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._url).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._sendRequest("users/me",{headers:this._headers})}},{key:"getInitialCards",value:function(){return this._sendRequest("cards",{headers:this._headers})}},{key:"updateUserInfo",value:function(e){return this._sendRequest("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"addNewCard",value:function(e){return this._sendRequest("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"changeLikeCardStatus",value:function(e,t){return this._sendRequest("cards/likes/".concat(e),{method:t?"DELETE":"PUT",headers:this._headers})}},{key:"deleteCard",value:function(e){return this._sendRequest("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"updateUserAvatar",value:function(e){return this._sendRequest("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-18/",headers:{authorization:"c769d20f-6915-4a77-9f12-54820513a0a5","Content-Type":"application/json"}});var k=function(e){var t=e.title,n=e.name,c=e.button,o=e.children,i=e.isOpen,s=e.onClose,r=e.onSubmit,u=e.onClickOverlay,l=e.isValid;return Object(a.jsx)("section",{className:"popup popup_place_".concat(n," ").concat(i?"popup_is-opened":""),onClick:u,children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_place_".concat(n),onClick:s}),Object(a.jsxs)("form",{name:"".concat(n,"-popup"),method:"GET",className:"popup__content popup__content_place_".concat(n),onSubmit:r,noValidate:!0,children:[Object(a.jsx)("h2",{className:"popup__title",children:t}),o,Object(a.jsx)("button",{type:"submit",name:"submit",className:"popup__button popup__button_place_".concat(n," ").concat(l?"":"popup__button_inactive"),children:c})]})]})})};var x=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,i=e.onClickOverlay,s=o.a.useContext(j),r=o.a.useState(s.name),u=Object(l.a)(r,2),p=u[0],d=u[1],_=o.a.useState(s.about),b=Object(l.a)(_,2),m=b[0],O=b[1],v=o.a.useState(!0),h=Object(l.a)(v,2),f=h[0],C=h[1],x=o.a.useState(""),g=Object(l.a)(x,2),y=g[0],N=g[1],S=o.a.useState(!0),E=Object(l.a)(S,2),L=E[0],P=E[1],U=o.a.useState(""),q=Object(l.a)(U,2),w=q[0],D=q[1];return o.a.useEffect((function(){d(s.name),O(s.about),t&&(C(!0),P(!0),N(""),D(""))}),[s,t]),Object(a.jsxs)(k,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,isValid:L&&f,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:p,about:m})},onClickOverlay:i,children:[Object(a.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_place_name",id:"name-input",minLength:"2",maxLength:"40",value:p,onChange:function(e){C(e.target.validity.valid),N(e.target.validationMessage),d(e.target.value)},required:!0}),Object(a.jsx)("span",{className:"popup__input-error ".concat(f?"":"popup_input-error_active"),id:"location-input-error",children:y}),Object(a.jsx)("input",{type:"text",name:"about",className:"popup__input popup__input_place_about",id:"about-input",minLength:"2",maxLength:"400",value:m,onChange:function(e){P(e.target.validity.valid),D(e.target.validationMessage),O(e.target.value)},required:!0}),Object(a.jsx)("span",{className:"popup__input-error ".concat(L?"":"popup_input-error_active"),id:"location-input-error",children:w})]})};var g=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,i=e.onClickOverlay,s=o.a.useState(""),r=Object(l.a)(s,2),u=r[0],p=r[1],d=o.a.useState(!1),_=Object(l.a)(d,2),j=_[0],b=_[1],m=o.a.useState(""),O=Object(l.a)(m,2),v=O[0],h=O[1];return o.a.useEffect((function(){t&&(p(""),b(!1),h(""))}),[t]),Object(a.jsxs)(k,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,isValid:j,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:u})},onClickOverlay:i,children:[Object(a.jsx)("input",{type:"url",name:"avatar",className:"popup__input popup__input_place_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",value:u,id:"avatar-input",onChange:function(e){b(e.target.validity.valid),h(e.target.validationMessage),p(e.target.value)},required:!0}),Object(a.jsx)("span",{className:"popup__input-error ".concat(j?"popup_input-error_active":""),id:"link-input-error",children:v})]})};var y=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,i=e.onClickOverlay,s=o.a.useState(""),r=Object(l.a)(s,2),u=r[0],p=r[1],d=o.a.useState(""),_=Object(l.a)(d,2),j=_[0],b=_[1],m=o.a.useState(!1),O=Object(l.a)(m,2),v=O[0],h=O[1],f=o.a.useState(""),C=Object(l.a)(f,2),x=C[0],g=C[1],y=o.a.useState(!1),N=Object(l.a)(y,2),S=N[0],E=N[1],L=o.a.useState(""),P=Object(l.a)(L,2),U=P[0],q=P[1];return o.a.useEffect((function(){t&&(p(""),b(""),h(!1),E(!1),g(""),q(""))}),[t]),Object(a.jsxs)(k,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),c({name:u,link:j})},isOpen:t,isValid:S&&v,onClose:n,onClickOverlay:i,children:[Object(a.jsx)("input",{type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_place_location",id:"location-input",minLength:"2",maxLength:"30",value:u,onChange:function(e){h(e.target.validity.valid),g(e.target.validationMessage),p(e.target.value)},required:!0}),Object(a.jsx)("span",{className:"popup__input-error ".concat(v?"popup_input-error_active":""),id:"location-input-error",children:x}),Object(a.jsx)("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_place_link",id:"link-input",value:j,onChange:function(e){E(e.target.validity.valid),q(e.target.validationMessage),b(e.target.value)},required:!0}),Object(a.jsx)("span",{className:"popup__input-error ".concat(S?"popup_input-error_active":""),id:"link-input-error",children:U})]})};var N=function(e){var t=e.isOpen,n=e.onClose,c=e.onDeleteCard,o=e.onClickOverlay;return Object(a.jsx)(k,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete",button:"\u0414\u0430",isOpen:t,onClose:n,isValid:!0,onSubmit:function(e){e.preventDefault(),c()},onClickOverlay:o})};var S=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],i=o.a.useState(!1),s=Object(l.a)(i,2),p=s[0],_=s[1],b=o.a.useState(!1),h=Object(l.a)(b,2),f=h[0],k=h[1],S=o.a.useState(!1),E=Object(l.a)(S,2),L=E[0],P=E[1],U=o.a.useState({isOpen:!1,link:"",name:""}),q=Object(l.a)(U,2),w=q[0],D=q[1],A=o.a.useState({}),T=Object(l.a)(A,2),R=T[0],I=T[1],M=o.a.useState([]),V=Object(l.a)(M,2),J=V[0],F=V[1],B=o.a.useState({}),H=Object(l.a)(B,2),z=H[0],G=H[1];function K(){k(!1),_(!1),c(!1),P(!1),D({isOpen:!1,link:"",name:""}),document.removeEventListener("keydown",W)}function Q(e){e.target.classList.contains("popup_is-opened")&&K()}function W(e){"Escape"===e.key&&K()}return o.a.useEffect((function(){Promise.all([C.getUserInfo(),C.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];I(n),F(a)})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))}),[]),Object(a.jsx)(j.Provider,{value:R,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(d,{}),Object(a.jsx)(m,{onEditProfile:function(){_(!p),document.addEventListener("keydown",W)},onAddPlace:function(){k(!f),document.addEventListener("keydown",W)},onEditAvatar:function(){c(!n),document.addEventListener("keydown",W)},onCardClick:function(e){var t=e.link,n=e.name;D({isOpen:!0,link:t,name:n}),document.addEventListener("keydown",W)},cards:J,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===R._id}));C.changeLikeCardStatus(e._id,t).then((function(t){var n=J.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))},onCardDelete:function(e){P(!L),G(e),document.addEventListener("keydown",W)}}),Object(a.jsx)(O,{}),Object(a.jsx)(N,{isOpen:L,onClose:K,onDeleteCard:function(){C.deleteCard(z._id).then((function(){var e=J.filter((function(e){return e._id!==z._id}));F(e),G({}),K()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))},onClickOverlay:Q}),Object(a.jsx)(g,{isOpen:n,onClose:K,onUpdateAvatar:function(e){C.updateUserAvatar(e).then((function(){I(Object(u.a)(Object(u.a)({},R),e)),K()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))},onClickOverlay:Q}),Object(a.jsx)(x,{isOpen:p,onClose:K,onUpdateUser:function(e){C.updateUserInfo(e).then((function(){I(Object(u.a)(Object(u.a)({},R),e)),K()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))},onClickOverlay:Q}),Object(a.jsx)(y,{isOpen:f,onClose:K,onAddPlace:function(e){C.addNewCard(e).then((function(e){F([e].concat(Object(r.a)(J))),K()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))},onClickOverlay:Q}),Object(a.jsx)(v,{card:w,onClose:K,onClickOverlay:Q})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),E()}},[[17,1,2]]]);
//# sourceMappingURL=main.4082ba70.chunk.js.map