(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),i=a(4),r=a.n(i),o=(a(12),a(2)),p=a.p+"static/media/logo.2e17206c.svg";var l=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"})})},u=a.p+"static/media/edit-button.72373403.svg",d=a(5),_=a(6),j=new(function(){function e(t){Object(d.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(_.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._url).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._sendRequest("users/me",{headers:this._headers})}},{key:"getInitialCards",value:function(){return this._sendRequest("cards",{headers:this._headers})}},{key:"getStartInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"updateUserInfo",value:function(e){return this._sendRequest("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"addNewCard",value:function(e){return this._sendRequest("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"likesCard",value:function(e){return this._sendRequest("cards/likes/".concat(e),{method:"PUT",headers:this._headers})}},{key:"dislikesCard",value:function(e){return this._sendRequest("cards/likes/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"deleteCard",value:function(e){return this._sendRequest("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"updateUserAvatar",value:function(e){return this._sendRequest("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-18/",headers:{authorization:"c769d20f-6915-4a77-9f12-54820513a0a5","Content-Type":"application/json"}});var m=function(e){var t=e.card,a=e.onCardClick;return Object(n.jsxs)("article",{className:"element",children:[Object(n.jsx)("button",{type:"button",className:"element__delete"}),Object(n.jsx)("img",{className:"element__pic",src:t.link,alt:t.name,onClick:function(){a(t)}}),Object(n.jsxs)("div",{className:"element__caption",children:[Object(n.jsx)("h2",{className:"element__title",children:t.name}),Object(n.jsxs)("div",{className:"element__like-area",children:[Object(n.jsx)("button",{type:"button",className:"element__like"}),Object(n.jsx)("p",{className:"element__like-count",children:t.likes.length})]})]})]})};var b=function(e){var t=e.onEditProfile,a=e.onAddPlace,s=e.onEditAvatar,i=e.onCardClick,r=c.a.useState(""),p=Object(o.a)(r,2),l=p[0],d=p[1],_=c.a.useState(""),b=Object(o.a)(_,2),h=b[0],O=b[1],x=c.a.useState(""),f=Object(o.a)(x,2),v=f[0],N=f[1],k=c.a.useState([]),g=Object(o.a)(k,2),y=g[0],C=g[1];return c.a.useEffect((function(){j.getStartInfo().then((function(e){var t=Object(o.a)(e,2),a=t[0],n=a.name,s=a.about,c=a.avatar,i=t[1];d(n),O(s),N(c),C(i)})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))})),Object(n.jsxs)("main",{className:"content",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsxs)("div",{className:"profile__wrapper",children:[Object(n.jsxs)("div",{className:"profile__avatar-overlay",children:[Object(n.jsx)("img",{src:v,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(n.jsx)("button",{type:"button",className:"profile__avatar-button",onClick:s})]}),Object(n.jsxs)("div",{className:"profile__intro",children:[Object(n.jsxs)("div",{className:"profile__intro-top",children:[Object(n.jsx)("h1",{className:"profile__name",children:l}),Object(n.jsx)("button",{type:"button",className:"profile__edit-button",onClick:t,children:Object(n.jsx)("img",{src:u,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"profile__edit-icon"})})]}),Object(n.jsx)("p",{className:"profile__about",children:h})]})]}),Object(n.jsx)("button",{type:"button",className:"profile__add-button",onClick:a})]}),Object(n.jsx)("section",{className:"gallery",children:y.map((function(e){return Object(n.jsx)(m,{card:e,onCardClick:i})}))})]})};var h=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var O=function(e){var t=e.title,a=e.name,s=e.children,c=e.isOpen,i=e.onClose;return Object(n.jsx)("section",{className:"popup popup_place_".concat(a," ").concat(c?"popup_is-opened":""),children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_place_".concat(a),onClick:i}),Object(n.jsxs)("form",{name:"".concat(a,"-popup"),method:"GET",className:"popup__content popup__content_place_".concat(a),noValidate:!0,children:[Object(n.jsx)("h2",{className:"popup__title",children:t}),s,Object(n.jsx)("button",{type:"submit",name:"submit",className:"popup__button popup__button_place_".concat(a),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var x=function(e){var t=e.card,a=e.onClose;return Object(n.jsx)("section",{className:"popup popup-big-pic popup_place_pic ".concat(t.isOpen?"popup_is-opened":""),children:Object(n.jsxs)("div",{className:"popup__container-pic",children:[Object(n.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_place_pic",onClick:a}),Object(n.jsxs)("figure",{className:"popup__item",children:[Object(n.jsx)("img",{className:"popup__pic",src:t.link,alt:t.name}),Object(n.jsx)("figcaption",{className:"popup__caption",children:t.name})]})]})})};var f=function(){var e=c.a.useState(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],i=c.a.useState(!1),r=Object(o.a)(i,2),p=r[0],u=r[1],d=c.a.useState(!1),_=Object(o.a)(d,2),j=_[0],m=_[1],f=c.a.useState({isOpen:!1,link:"",name:""}),v=Object(o.a)(f,2),N=v[0],k=v[1];function g(){m(!1),u(!1),s(!1),k({isOpen:!1,link:"",name:""})}return Object(n.jsxs)("div",{className:"page",children:[Object(n.jsx)(l,{}),Object(n.jsx)(b,{onEditProfile:function(){u(!p)},onAddPlace:function(){m(!j)},onEditAvatar:function(){s(!a)},onCardClick:function(e){var t=e.link,a=e.name;k({isOpen:!0,link:t,name:a})}}),Object(n.jsx)(h,{}),Object(n.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete"}),Object(n.jsx)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:a,onClose:g,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"url",name:"avatar",className:"popup__input popup__input_place_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",id:"avatar-input",required:!0}),Object(n.jsx)("span",{className:"popup__input-error",id:"avatar-input-error"})]})}),Object(n.jsx)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:p,onClose:g,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_place_name",id:"name-input",minLength:"2",maxLength:"40",required:!0}),Object(n.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(n.jsx)("input",{type:"text",name:"about",className:"popup__input popup__input_place_about",id:"about-input",minLength:"2",maxLength:"400",required:!0}),Object(n.jsx)("span",{className:"popup__input-error",id:"about-input-error"})]})}),Object(n.jsx)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",isOpen:j,onClose:g,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_place_location",id:"location-input",minLength:"2",maxLength:"30",required:!0}),Object(n.jsx)("span",{className:"popup__input-error",id:"location-input-error"}),Object(n.jsx)("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_place_link",id:"link-input",required:!0}),Object(n.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})}),Object(n.jsx)(x,{card:N,onClose:g})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.8d49a512.chunk.js.map