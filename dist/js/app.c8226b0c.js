(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b408d8a9"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"2e3d1d84"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d7c":function(e,t,n){},"569e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-header"),n("main",[n("router-view")],1),n("v-footer")],1)},i=[],o=n("5530"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"v-header"},[r("div",{staticClass:"v-header_wrapper"},[r("h1",[r("router-link",{attrs:{to:"/"}},[r("div",{staticClass:"v-header_wrapper_logo-name"},[r("svg",{staticClass:"svg-inline--fa fa-lightbulb fa-w-11",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"lightbulb",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512","data-fa-i2svg":""}},[r("path",{attrs:{fill:"currentColor",d:"M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"}})]),e._v(e._s(e.mainHeading)+" ")]),r("span",[e._v(e._s(e.mainHeading2))])])],1),r("nav",[r("router-link",{attrs:{to:"/"}},[e._v("Главная "),r("span",[e._v("Здравствуй друг!")]),r("svg",[r("use",{attrs:{"xlink:href":n("8a78")+"#home"}})])]),r("router-link",{attrs:{to:"/catalog"}},[e._v("Каталог "),r("span",[e._v("Самое лучшее")]),r("svg",[r("use",{attrs:{"xlink:href":n("8a78")+"#led"}})])]),r("router-link",{attrs:{to:"/contacts"}},[e._v("Контакты "),r("span",[e._v("Напишите нам")]),r("svg",[r("use",{attrs:{"xlink:href":n("8a78")+"#mail"}})])])],1)])])},c=[],u={name:"v-header",data:function(){return{mainHeading:"ip65",mainHeading2:"Новогодняя иллюминация"}}},l=u,d=(n("f1a0"),n("2877")),f=Object(d["a"])(l,s,c,!1,null,null,null),p=f.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"v-footer"},[n("h2",[e._v("Собственное производство и первый импортёр")]),n("div",{staticClass:"v-footer_wrapper"},[n("svg",{staticClass:"svg-inline--fa fa-lightbulb fa-w-11",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"lightbulb",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512","data-fa-i2svg":""}},[n("path",{attrs:{d:"M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"}})]),e._m(0),n("div",{staticClass:"v-footer_wrapper_links"})])])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-footer_wrapper_adress"},[n("h4",[e._v("Наши Контакты")]),n("p",[e._v(" Телефон: "),n("span",[n("a",{attrs:{href:"tel: +80447692165"}},[e._v("8 044 769-21-65")])])]),n("p",[e._v(" email: "),n("span",[n("a",{attrs:{href:"mailto:ip44ip65@mail.ru"}},[e._v("ip44ip65@mail.ru")])])]),n("p",[e._v(" Адрес: "),n("span",[e._v("220075, г. Минск, ул. Шабаны, 14а, офис 6")])])])}],m={name:"v-footer"},h=m,E=(n("80b6"),Object(d["a"])(h,_,v,!1,null,null,null)),S=E.exports,b=(n("569e"),n("2f62")),g={name:"App",components:{vHeader:p,vFooter:S},data:function(){return{windowWidth:1200,windowType:""}},computed:Object(o["a"])({},Object(b["c"])(["GET_WINDOW_TYPE"])),methods:Object(o["a"])({},Object(b["b"])(["ACT_WINDOW_SIZE"])),mounted:function(){var e=this;function t(e){return e>=1200?"Extra large":e>=992&&e<=1199?"Large":e>=768&&e<=991?"Medium":e>=576&&e<=767?"Small":"Extra small"}function n(){e.windowWidth=window.innerWidth,e.windowType=t(e.windowWidth),e.ACT_WINDOW_SIZE(e.windowType)}n(),window.addEventListener("resize",(function(){n()}))}},T=g,O=(n("5c0b"),Object(d["a"])(T,a,i,!1,null,null,null)),C=O.exports,A=(n("7db0"),n("4160"),n("a630"),n("d81d"),n("26e9"),n("fb6a"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("031e")),R=n.n(A),w=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("vCarousel"),n("vBenefits"),n("div",{staticClass:"bg-primary"})],1)},P=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"v-carousel"},[e._l(e.banners,(function(t){return n("div",{key:t.id,staticClass:"slide",class:{show:t.id==e.checkedBanner,hidden:t.id!=e.checkedBanner}},[n("div",{staticClass:"banner"},[n("router-link",{attrs:{to:"/catalog"}},[n("img",{attrs:{src:"https://drive.google.com/uc?export=view&id="+t.img,alt:""}})])],1)])})),n("div",{staticClass:"v-carousel_buttons"},e._l(e.banners,(function(t){return n("div",{key:t.id,staticClass:"v-carousel_buttons_button"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedBanner,expression:"checkedBanner"}],attrs:{type:"radio",id:"banner"+t.id,name:"banners"},domProps:{value:t.id,checked:e._q(e.checkedBanner,t.id)},on:{change:function(n){e.checkedBanner=t.id}}}),n("label",{attrs:{for:"banner"+t.id}})])})),0)],2)},N=[],x=(n("ac1f"),n("1276"),{name:"vCarousel",data:function(){return{checkedBanner:0}},computed:Object(o["a"])(Object(o["a"])({},Object(b["c"])(["GET_SPREADSHEETS_BANNERS","GET_BANNERS"])),{},{banners:function(){return this.GET_BANNERS}}),methods:Object(o["a"])(Object(o["a"])({},Object(b["b"])(["ACT_SPREADSHEETS_BANNERS_FROM_API","ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE"])),{},{adaptBanners:function(){var e=this.GET_SPREADSHEETS_BANNERS.feed.entry,t=e.map((function(e,t){return{id:t,published:e.gsx$published.$t,title:e.gsx$title.$t,description:e.gsx$description.$t,img:e.gsx$img.$t.split("/view?")[0].split("d/")[1],link:e.gsx$link.$t}}));this.ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE(t)},nextBanner:function(){this.checkedBanner===this.banners.length-1?this.checkedBanner=0:this.checkedBanner+=1}}),mounted:function(){var e=this;this.ACT_SPREADSHEETS_BANNERS_FROM_API().then((function(t){t.data&&(console.log("%c%s","background-color: #000000; color: #497e04; font: 1rem/1 Tahoma; padding: 1px 5px","Banners from the DataBase loaded!"),e.adaptBanners())})),setInterval(this.nextBanner,3e3)}}),B=x,k=(n("e617"),Object(d["a"])(B,D,N,!1,null,null,null)),j=k.exports,H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"v-benefits"},[n("div",{staticClass:"v-benefits_item"},[n("div",{staticClass:"v-benefits_item_heading"},[n("span",[e._v("1")]),n("h3",[e._v("12 ЛЕТ ИМПОРТИРУЕМ СВЕТОДИОДНУЮ ИЛЛЮМИНАЦИЮ В БЕЛАРУСЬ!")])]),n("ul",[n("li",[e._v("7 филиалов и демо-комнат"),n("br"),e._v(" по всей стране")]),n("li",[e._v("28 заботливых менеджеров")]),n("li",[e._v("2000 довольных клиентов")])])]),n("div",{staticClass:"v-benefits_item"},[n("div",{staticClass:"v-benefits_item_heading"},[n("span",[e._v("2")]),n("h3",[e._v("1 ДЕНЬ И ЗАКАЗ У ВАС, ВЕДЬ ВСЯ ПРОДУКЦИЯ НА НАШЕМ СКЛАДЕ!")])]),n("ul",[n("li",[e._v("нет рисков срыва поставки")]),n("li",[e._v("внешние обстоятельства не влияют на ваш заказ")]),n("li",[e._v("товар можно увидеть до покупки в нашем шоу-руме")])])]),n("div",{staticClass:"v-benefits_item"},[n("div",{staticClass:"v-benefits_item_heading"},[n("span",[e._v("3")]),n("h3",[e._v("4 ГОДА ГАРАНТИИ НА КОМПЛЕКТУЮЩИЕ И 12 МЕСЯЦЕВ – НА ИЗДЕЛИЕ!")])]),n("ul",[n("li",[e._v("импортируем качественный ассортимент")]),n("li",[e._v("испытываем и сертифицируем весь товар")]),n("li",[e._v("проверяем каждую гирлянду перед упаковкой")])])]),n("div",{staticClass:"v-benefits_item"},[n("div",{staticClass:"v-benefits_item_heading"},[n("span",[e._v("4")]),n("h3",[e._v("ДЛЯ ДЕТЕЙ И ВЗРОСЛЫХ, ДЛЯ ГОРОДА И ОРГАНИЗАЦИЙ!")])]),n("ul",[n("li",[e._v("сами изготавливаем актуальные каркасные конструкции")]),n("li",[e._v("широкий ассортимент от плоских надписей и героев, "),n("br"),e._v(" до 3D фигур и фотозон")])])])])}],U={name:"v-benefits"},W=U,$=(n("cfaf"),Object(d["a"])(W,H,M,!1,null,null,null)),I=$.exports,G={name:"Home",components:{vCarousel:j,vBenefits:I}},z=G,F=Object(d["a"])(z,y,P,!1,null,null,null),L=F.exports;r["a"].use(w["a"]);var q=[{path:"/",name:"Home",component:L,meta:{title:"ip65.by — Новогодняя иллюминация",metaTags:[{name:"description",content:"Продукция испытана в аккредитованных лабораториях и соответствует техническим регламентам Таможенного cоюза."},{name:"keywords",content:"3D фигуры, 2D фигуры"},{property:"og:title",content:"ip65.by"},{property:"og:description",content:"Приятные бонусы для наших клиентов. Доставка в любую точку страны"},{property:"og:type",content:"text/javascript"},{property:"og:image",content:"/img/logo.png"}]}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/catalog",name:"Catalog",component:function(){return n.e("about").then(n.bind(null,"247d"))},meta:{title:"ip65.by — Наша продукция",metaTags:[{name:"description",content:"Мы следим за качеством импортной продукции от начала производства до момента погрузки и отправки."},{name:"keywords",content:"3D фигуры, 2D фигуры"},{property:"og:title",content:"ip65.by"},{property:"og:description",content:"Приятные бонусы для наших клиентов. Доставка в любую точку страны"},{property:"og:type",content:"text/javascript"},{property:"og:image",content:"/img/logo.png"}]}},{path:"/contacts",name:"Contacts",component:function(){return n.e("about").then(n.bind(null,"c93c"))},meta:{title:"ip65.by — Контакты",metaTags:[{name:"description",content:"Напишите нам"},{name:"keywords",content:""},{property:"og:title",content:"ip65.by"},{property:"og:description",content:"Напишите нам"},{property:"og:type",content:"text/javascript"},{property:"og:image",content:"/img/logo.png"}]}}],Z=new w["a"]({mode:"history",base:"/",routes:q});r["a"].use(R.a,{id:"GTM-KBQNXSQ",defer:!1,enabled:!0,debug:!0,loadScript:!0,vueRouter:Z,ignoredViews:["homepage"],trackOnNextTick:!1}),Z.beforeEach((function(e,t,n){var r=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),a=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags})),i=t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(document.title=r?r.meta.title:i.meta.title,Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!a)return n();a.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),n()}));var Y=Z,J={ACT_WINDOW_SIZE:function(e,t){var n=e.commit;n("MUT_CHANGE_WINDOW_SIZE",t)},ACT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE:function(e,t){var n=e.commit;n("MUT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE",t)},ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE:function(e,t){var n=e.commit;n("MUT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE",t)},ACT_SORTED_PRODUCTS:function(e,t){var n=e.commit;n("MUT_SORTED_PRODUCTS",t)}},K=n("bc3a"),Q=n.n(K),V={ACT_SPREADSHEETS_PRODUCTS_FROM_API:function(e){var t=e.commit,n="https://spreadsheets.google.com/feeds/list/1zNxSqG438NAMPh9dzFnFYbvxPbgiUwr501Mn-Wfirh0/1/public/full?alt=json";return Q()(n,{method:"GET"}).then((function(e){return t("MUT_SPREADSHEETS_PRODUCTS_TO_STATE",e.data),e})).catch((function(e){return console.log(e),e}))},ACT_SPREADSHEETS_BANNERS_FROM_API:function(e){var t=e.commit,n="https://spreadsheets.google.com/feeds/list/1zNxSqG438NAMPh9dzFnFYbvxPbgiUwr501Mn-Wfirh0/2/public/full?alt=json";return Q()(n,{method:"GET"}).then((function(e){return t("MUT_SPREADSHEETS_BANNERS_TO_STATE",e.data),e})).catch((function(e){return console.log(e),e}))}},X={GET_WINDOW_TYPE:function(e){return e.windowSize},GET_SPREADSHEETS_PRODUCTS:function(e){return e.spreadsheetsProducts},GET_SPREADSHEETS_BANNERS:function(e){return e.spreadsheetsBanners},GET_PRODUCTS:function(e){return e.products},GET_BANNERS:function(e){return e.banners}},ee={MUT_CHANGE_WINDOW_SIZE:function(e,t){e.windowSize=t},MUT_SPREADSHEETS_PRODUCTS_TO_STATE:function(e,t){e.spreadsheetsProducts=t},MUT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE:function(e,t){e.products=t},MUT_SPREADSHEETS_BANNERS_TO_STATE:function(e,t){e.spreadsheetsBanners=t},MUT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE:function(e,t){e.banners=t}},te=Object(o["a"])(Object(o["a"])({},J),V);r["a"].use(b["a"]);var ne=new b["a"].Store({state:{windowSize:"",spreadsheetsProducts:[],products:[],spreadsheetsBanners:[],banners:[]},mutations:ee,actions:te,getters:X});r["a"].config.productionTip=!1,new r["a"]({router:Y,store:ne,render:function(e){return e(C)}}).$mount("#app")},"58a5":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"80b6":function(e,t,n){"use strict";var r=n("0d7c"),a=n.n(r);a.a},"8a78":function(e,t,n){e.exports=n.p+"img/sprite.d2ea766c.svg"},"9c0c":function(e,t,n){},cfaf:function(e,t,n){"use strict";var r=n("e99b"),a=n.n(r);a.a},e617:function(e,t,n){"use strict";var r=n("58a5"),a=n.n(r);a.a},e99b:function(e,t,n){},f020:function(e,t,n){},f1a0:function(e,t,n){"use strict";var r=n("f020"),a=n.n(r);a.a}});
//# sourceMappingURL=app.c8226b0c.js.map