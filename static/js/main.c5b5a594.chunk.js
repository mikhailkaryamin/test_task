(this.webpackJsonpkodix=this.webpackJsonpkodix||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),a=c.n(i),s=c(4),o=c.n(s),r=(c(10),c(2)),l="popup",d="start",u=function(e){var t=e.isVisibleTitle,c=e.onClick,i=e.prefix,a=e.title,s=e.type,o=void 0===s?"button":s,r=e.className;return Object(n.jsx)("button",{className:"button button--".concat(i," ").concat(r||""),onClick:c,type:o,title:a,children:t?a:""})},b=function(){return""},j=function(e){var t=e.children,c=e.isDisabled,i=e.className,a=e.onClick,s=void 0===a?b:a,o=e.prefix,r=e.type,l=void 0===r?"checkbox":r;return Object(n.jsxs)("label",{className:"checkbox ".concat(o?"checkbox--".concat(o):""," ").concat(i?"".concat(i):""),children:[t,Object(n.jsx)("input",{disabled:c,className:"checkbox__input",onClick:s,type:l}),Object(n.jsx)("span",{className:"checkbox__icon ".concat(o?"checkbox__icon--".concat(o):"")})]})},p=["\u0432 1-\u044b\u0439 \u0433\u043e\u0434","\u0432\u043e 2-\u043e\u0439 \u0433\u043e\u0434","\u0432 3-\u0438\u0439 \u0433\u043e\u0434","\u0432 4-\u044b\u0439 \u0433\u043e\u0434","\u0432 5-\u044b\u0439 \u0433\u043e\u0434","\u0432 6-\u043e\u0439 \u0433\u043e\u0434","\u0432 7-\u043e\u0439 \u0433\u043e\u0434","\u0432 8-\u043e\u0439 \u0433\u043e\u0434","\u0432 9-\u044b\u0439 \u0433\u043e\u0434","\u0432 10-\u044b\u0439 \u0433\u043e\u0434","\u0432 11-\u044b\u0439 \u0433\u043e\u0434","\u0432 12-\u044b\u0439 \u0433\u043e\u0434","\u0432 13-\u044b\u0439 \u0433\u043e\u0434","\u0432 14-\u044b\u0439 \u0433\u043e\u0434","\u0432 15-\u044b\u0439 \u0433\u043e\u0434","\u0432 16-\u044b\u0439 \u0433\u043e\u0434","\u0432 17-\u044b\u0439 \u0433\u043e\u0434","\u0432 18-\u044b\u0439 \u0433\u043e\u0434","\u0432 19-\u044b\u0439 \u0433\u043e\u0434"],x=function(e){return e.toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm," ")},m=function(e,t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"checkbox__sum",children:"".concat(x(e)," \u0440\u0443\u0431\u043b\u0435\u0439 ")}),Object(n.jsx)("span",{className:"checkbox__year",children:p[t]})]})},h=function(e,t){return[0,1,2,e.length-2,e.length-1].map((function(c){return 2===c?Object(n.jsx)(j,{isDisabled:!1,className:"early-pay__checkbox",onClick:t,prefix:"button-load-more",type:"button",children:Object(n.jsx)("span",{children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435"})},c):Object(n.jsx)(j,{isDisabled:!1,className:"early-pay__checkbox",children:m(e[c],c)},c)}))},f=function(e){var t=e.deductionList,c=Object(i.useState)(!1),a=Object(r.a)(c,2),s=a[0],o=a[1],l=t.length<=5||s,d=t.length>5&&!s;return Object(n.jsxs)("div",{className:"early-pay",children:[Object(n.jsx)("label",{className:"early-pay__label",children:"\u0418\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043d\u0435\u0441\u0442\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445:"}),l&&t.map((function(e,t){return Object(n.jsx)(j,{isDisabled:!1,className:"early-pay__checkbox",children:m(e,t)},"".concat(e,"-").concat(t))})),d&&h(t,(function(){return o(!0)}))]})},O=function(e){var t=e.className,c=e.isDisabled,i=void 0!==c&&c,a=e.isRequired,s=void 0!==a&&a,o=e.name,r=e.onChange,l=e.placeHolder,d=e.prefix,u=e.type;return Object(n.jsx)("input",{className:"input ".concat(d?"input--".concat(d):""," ").concat(t||""),disabled:i,id:o,name:o,onChange:r,placeholder:"".concat(l?"".concat(l):""),required:s,type:u})},_=26e4,N=function(){return"Empty"},y=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.jsxs)("form",{action:"#",className:"form-deduction",children:[Object(n.jsx)("label",{className:"form-deduction__title",htmlFor:"salary",children:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446"}),Object(n.jsx)(O,{className:"form-deduction__sum",isRequired:!0,name:"salary",onChange:function(e){var t=+e.target.value;if(t<1e4)a([]);else{var c=12*t*.13,n=_%c,i=function(e,t,c){var n=new Array(Math.round(c)).fill(Math.round(e));return 0!==t&&n.push(Math.round(t)),n}(c,n,(_-n)/c);a(i)}},placeHolder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",type:"number"}),0!==c.length&&Object(n.jsx)(f,{deductionList:c}),Object(n.jsxs)("div",{className:"form-deduction__container-decrease",children:[Object(n.jsx)("strong",{className:"form-deduction__title",children:"\u0427\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u043c?"}),Object(n.jsxs)("div",{className:"form-deduction__group-buttons",children:[Object(n.jsx)(u,{className:"form-deduction__button-pay",isVisibleTitle:!0,onClick:N,prefix:"decrease button--decrease-active",title:"\u041f\u043b\u0430\u0442\u0451\u0436"}),Object(n.jsx)(u,{isVisibleTitle:!0,onClick:N,prefix:"decrease",title:"\u0421\u0440\u043e\u043a"})]})]}),Object(n.jsx)(u,{className:"form-deduction__button-submit",isVisibleTitle:!0,onClick:N,prefix:"add",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",type:"submit"})]})},k=function(e){var t=e.onClosePopup;return Object(n.jsxs)("section",{className:"tax-deduction",children:[Object(n.jsx)("h1",{className:"tax-deduction__title",children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),Object(n.jsx)(u,{className:"tax-deduction__button-close-popup",isVisibleTitle:!1,onClick:t,prefix:"close-popup",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f"}),Object(n.jsx)("p",{className:"tax-deduction__description",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e. \u0420\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 13% \u043e\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430."}),Object(n.jsx)(y,{})]})},v=function(){var e=Object(i.useState)(d),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.jsx)("div",{className:"main main--".concat(c),children:Object(n.jsxs)("div",{className:"main__wrapper main__wrapper--".concat(c),children:[c===d&&Object(n.jsx)(u,{isVisibleTitle:!0,onClick:function(){a(l)},prefix:"open-popup",title:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),c===l&&Object(n.jsx)(k,{onClosePopup:function(){a(d)}})]})})},g=function(){return Object(n.jsx)(v,{})};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c5b5a594.chunk.js.map