(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"49f63b9d"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"798b4dab"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d7c":function(t,e,n){},"569e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-header"),n("main",[n("router-view")],1),n("v-footer")],1)},o=[],i=n("5530"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"v-header"},[a("div",{staticClass:"v-header_wrapper"},[a("h1",[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"v-header_wrapper_logo-name"},[a("svg",{staticClass:"svg-inline--fa fa-lightbulb fa-w-11",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"lightbulb",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512","data-fa-i2svg":""}},[a("path",{attrs:{fill:"currentColor",d:"M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"}})]),t._v(t._s(t.mainHeading)+" ")]),a("span",[t._v(t._s(t.mainHeading2))])])],1),a("nav",[a("router-link",{attrs:{to:"/"}},[t._v("Главная "),a("span",[t._v("Здравству друг!")]),a("svg",[a("use",{attrs:{"xlink:href":n("8a78")+"#home"}})])]),a("router-link",{attrs:{to:"/catalog"}},[t._v("Каталог "),a("span",[t._v("Самое лучшее")]),a("svg",[a("use",{attrs:{"xlink:href":n("8a78")+"#led"}})])]),a("router-link",{attrs:{to:"/contacts"}},[t._v("Контакты "),a("span",[t._v("Напишите нам")]),a("svg",[a("use",{attrs:{"xlink:href":n("8a78")+"#mail"}})])])],1)])])},c=[],u={name:"v-header",data:function(){return{mainHeading:"ip65",mainHeading2:"Новогодняя иллюминация"}}},l=u,d=(n("f1a0"),n("2877")),f=Object(d["a"])(l,s,c,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"v-footer"},[n("div",{staticClass:"v-footer_wrapper"},[n("div",{staticClass:"v-footer_wrapper_adress"},[n("h4",[t._v("Наши Контакты")]),n("p",[t._v(" Телефон: "),n("span",[n("a",{attrs:{href:"tel: +80447692165"}},[t._v("8 044 769-21-65")])])]),n("p",[t._v(" email: "),n("span",[n("a",{attrs:{href:"mailto:boss@msvet.by"}},[t._v("boss@msvet.by")])])]),n("p",[t._v(" Адрес: "),n("span",[t._v("223060, Минская область, Минский р-н Новодворский с/с, д. Большой Тростенец, ул. Зеленая, 1а - 13а д, Большой Тростенец 223060")])])]),n("div",{staticClass:"v-footer_wrapper_links"},[n("h4",[t._v("Ссылки")]),n("p",[n("span",[n("a",{attrs:{href:"msvet.by"}},[t._v("msvet.by")])])]),n("p",[n("span",[n("a",{attrs:{href:"vk.com"}},[t._v("Вконтакте")])])]),n("p",[n("span",[n("a",{attrs:{href:"ok.ru"}},[t._v("Однокласники")])])]),n("p",[n("span",[n("a",{attrs:{href:"instagram.com"}},[t._v("Instagram")])])])])])])}],m={name:"v-footer"},h=m,E=(n("80b6"),Object(d["a"])(h,v,_,!1,null,null,null)),S=E.exports,b=(n("569e"),n("2f62")),g={name:"App",components:{vHeader:p,vFooter:S},data:function(){return{windowWidth:1200,windowType:""}},computed:Object(i["a"])({},Object(b["c"])(["GET_WINDOW_TYPE"])),methods:Object(i["a"])({},Object(b["b"])(["ACT_WINDOW_SIZE"])),mounted:function(){var t=this;function e(t){return t>=1200?"Extra large":t>=992&&t<=1199?"Large":t>=768&&t<=991?"Medium":t>=576&&t<=767?"Small":"Extra small"}function n(){t.windowWidth=window.innerWidth,t.windowType=e(t.windowWidth),t.ACT_WINDOW_SIZE(t.windowType)}n(),window.addEventListener("resize",(function(){n()}))}},T=g,O=(n("5c0b"),Object(d["a"])(T,r,o,!1,null,null,null)),C=O.exports,w=(n("7db0"),n("4160"),n("a630"),n("d81d"),n("fb6a"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("8c4f")),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("vCarousel"),n("vBenefits"),n("div",{staticClass:"bg-primary"},[n("vWelcome")],1)],1)},R=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"v-carousel"},[t._l(t.banners,(function(e){return n("div",{key:e.id,staticClass:"slide",class:{show:e.id==t.checkedBanner,hidden:e.id!=t.checkedBanner}},[n("div",{staticClass:"banner"},[n("img",{attrs:{src:"https://drive.google.com/uc?export=view&id="+e.img,alt:""}})])])})),n("div",{staticClass:"v-carousel_buttons"},t._l(t.banners,(function(e){return n("div",{key:e.id,staticClass:"v-carousel_buttons_button"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedBanner,expression:"checkedBanner"}],attrs:{type:"radio",id:"banner"+e.id,name:"banners",checked:""},domProps:{value:e.id,checked:t._q(t.checkedBanner,e.id)},on:{change:function(n){t.checkedBanner=e.id}}}),n("label",{attrs:{for:"banner"+e.id}})])})),0)],2)},P=[],D=(n("ac1f"),n("1276"),{name:"vCarousel",data:function(){return{checkedBanner:0}},computed:Object(i["a"])(Object(i["a"])({},Object(b["c"])(["GET_SPREADSHEETS_PRODUCTS","GET_SPREADSHEETS_BANNERS","GET_BANNERS"])),{},{banners:function(){return this.GET_BANNERS}}),methods:Object(i["a"])(Object(i["a"])({},Object(b["b"])(["ACT_SPREADSHEETS_BANNERS_FROM_API","ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE"])),{},{adaptBanners:function(){var t=this.GET_SPREADSHEETS_BANNERS.feed.entry,e=t.map((function(t,e){return{id:e,published:t.gsx$published.$t,title:t.gsx$title.$t,description:t.gsx$description.$t,img:t.gsx$img.$t.split("/view?")[0].split("d/")[1],link:t.gsx$link.$t}}));this.ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE(e)}}),mounted:function(){var t=this;this.ACT_SPREADSHEETS_BANNERS_FROM_API().then((function(e){e.data&&(console.log("%c%s","background-color: #000000; color: #497e04; font: 1rem/1 Tahoma; padding: 1px 5px","Banners from the DataBase loaded!"),t.adaptBanners())}))}}),N=D,x=(n("e617"),Object(d["a"])(N,y,P,!1,null,null,null)),B=x.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"v-benefits"},[n("div",{staticClass:"v-benefits_item"},[n("div",{staticClass:"v-benefits_item_heading"},[n("span",[t._v("1")]),n("h3",[t._v("НОВИНКИ")])]),n("p",[t._v(" Представители нашей компании ежегоднопосещают LED-крупные выставки Европыи Азии, благодаря чему наш ассортимент пополняется новинками, неимеющими аналогов в Республике Беларусь. ")])]),n("div",{staticClass:"v-benefits_item"},[n("div",{staticClass:"v-benefits_item_heading"},[n("span",[t._v("2")]),n("h3",[t._v("НАДЕЖНАЯ КОМАНДА")])]),n("p",[t._v(" Всегда грамотно и доступно проконсультируют по интересующим вопросам, организуют послепродажную поддержку и обслуживание, не останутся равнодушными к любым задачам и предложат наилучшее решение. ")])]),n("div",{staticClass:"v-benefits_item"},[n("div",{staticClass:"v-benefits_item_heading"},[n("span",[t._v("3")]),n("h3",[t._v("ИНФОРМАТИВНОСТЬ")])]),n("p",[t._v(" Информационно наполненный сайт www.msvet.by, бесплатная рассылка каталогов и буклетов, видеопрезентация, прайс-листы. ")])]),n("div",{staticClass:"v-benefits_item"},[n("div",{staticClass:"v-benefits_item_heading"},[n("span",[t._v("4")]),n("h3",[t._v("УДОБСТВО")])]),n("p",[t._v(" Приятные бонусы для наших клиентов. Доставка в любую точку страны ")])])])}],H={name:"v-benefits"},M=H,U=(n("cfaf"),Object(d["a"])(M,j,k,!1,null,null,null)),W=U.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"v-welcome"},[n("h2",[t._v("Собственное производство и первый импортёр")]),n("div",{staticClass:"v-welcome_content"},[n("svg",{staticClass:"svg-inline--fa fa-lightbulb fa-w-11",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"lightbulb",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512","data-fa-i2svg":""}},[n("path",{attrs:{fill:"currentColor",d:"M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"}})]),t._m(0)])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-welcome_content_text"},[n("ul",[n("li",[t._v("10-летний опыт работы")]),n("li",[t._v("26 специалистов")]),n("li",[t._v("более 1600 постоянных клиентов")])]),n("p",[t._v(" Мы следим за качеством импортной продукции от начала производства до момента погрузки и отправки. ")]),n("p",[t._v(" Каждый образец перед упаковкой проходит проверку — втечение 72-х часов каждая гирлянда работает в условиях перепада напряжения и температуры. ")]),n("p",[t._v(" Продукция испытана в аккредитованных лабораториях и соответствует техническим регламентам Таможенного cоюза. ")])])}],G={name:"v-welcome"},z=G,F=(n("8761"),Object(d["a"])(z,$,I,!1,null,null,null)),L=F.exports,q={name:"Home",components:{vCarousel:B,vBenefits:W,vWelcome:L}},Z=q,Y=Object(d["a"])(Z,A,R,!1,null,null,null),J=Y.exports;a["a"].use(w["a"]);var K=[{path:"/",name:"Home",component:J,meta:{title:"ip65.by — Новогодняя иллюминация",metaTags:[{name:"description",content:"Продукция испытана в аккредитованных лабораториях и соответствует техническим регламентам Таможенного cоюза."},{name:"keywords",content:"3D фигуры, 2D фигуры"},{property:"og:title",content:"ip65.by"},{property:"og:description",content:"Приятные бонусы для наших клиентов. Доставка в любую точку страны"},{property:"og:type",content:"text/javascript"},{property:"og:image",content:"/img/logo.png"}]}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/catalog",name:"Catalog",component:function(){return n.e("about").then(n.bind(null,"247d"))},meta:{title:"ip65.by — Наша продукция",metaTags:[{name:"description",content:"Мы следим за качеством импортной продукции от начала производства до момента погрузки и отправки."},{name:"keywords",content:"3D фигуры, 2D фигуры"},{property:"og:title",content:"ip65.by"},{property:"og:description",content:"Приятные бонусы для наших клиентов. Доставка в любую точку страны"},{property:"og:type",content:"text/javascript"},{property:"og:image",content:"/img/logo.png"}]}},{path:"/contacts",name:"Contacts",component:function(){return n.e("about").then(n.bind(null,"c93c"))},meta:{title:"ip65.by — Контакты",metaTags:[{name:"description",content:"Напишите нам"},{name:"keywords",content:""},{property:"og:title",content:"ip65.by"},{property:"og:description",content:"Напишите нам"},{property:"og:type",content:"text/javascript"},{property:"og:image",content:"/img/logo.png"}]}}],Q=new w["a"]({mode:"history",base:"/",routes:K});Q.beforeEach((function(t,e,n){var a=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),r=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags})),o=e.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(document.title=a?a.meta.title:o.meta.title,Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!r)return n();r.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),n()}));var V=Q,X={ACT_WINDOW_SIZE:function(t,e){var n=t.commit;n("MUT_CHANGE_WINDOW_SIZE",e)},ACT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE:function(t,e){var n=t.commit;n("MUT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE",e)},ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE:function(t,e){var n=t.commit;n("MUT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE",e)},ACT_SORTED_PRODUCTS:function(t,e){var n=t.commit;n("MUT_SORTED_PRODUCTS",e)}},tt=n("bc3a"),et=n.n(tt),nt={ACT_SPREADSHEETS_PRODUCTS_FROM_API:function(t){var e=t.commit,n="https://spreadsheets.google.com/feeds/list/1zNxSqG438NAMPh9dzFnFYbvxPbgiUwr501Mn-Wfirh0/1/public/full?alt=json";return et()(n,{method:"GET"}).then((function(t){return e("MUT_SPREADSHEETS_PRODUCTS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},ACT_SPREADSHEETS_BANNERS_FROM_API:function(t){var e=t.commit,n="https://spreadsheets.google.com/feeds/list/1zNxSqG438NAMPh9dzFnFYbvxPbgiUwr501Mn-Wfirh0/2/public/full?alt=json";return et()(n,{method:"GET"}).then((function(t){return e("MUT_SPREADSHEETS_BANNERS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))}},at={GET_WINDOW_TYPE:function(t){return t.windowSize},GET_SPREADSHEETS_PRODUCTS:function(t){return t.spreadsheetsProducts},GET_SPREADSHEETS_BANNERS:function(t){return t.spreadsheetsBanners},GET_PRODUCTS:function(t){return t.products},GET_BANNERS:function(t){return t.banners}},rt={MUT_CHANGE_WINDOW_SIZE:function(t,e){t.windowSize=e},MUT_SPREADSHEETS_PRODUCTS_TO_STATE:function(t,e){t.spreadsheetsProducts=e},MUT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE:function(t,e){t.products=e},MUT_SPREADSHEETS_BANNERS_TO_STATE:function(t,e){t.spreadsheetsBanners=e},MUT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE:function(t,e){t.banners=e}},ot=Object(i["a"])(Object(i["a"])({},X),nt);a["a"].use(b["a"]);var it=new b["a"].Store({state:{windowSize:"",spreadsheetsProducts:[],products:[],spreadsheetsBanners:[],banners:[]},mutations:rt,actions:ot,getters:at});a["a"].config.productionTip=!1,new a["a"]({router:V,store:it,render:function(t){return t(C)}}).$mount("#app")},"58a5":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"80b6":function(t,e,n){"use strict";var a=n("0d7c"),r=n.n(a);r.a},8761:function(t,e,n){"use strict";var a=n("ff2b"),r=n.n(a);r.a},"8a78":function(t,e,n){t.exports=n.p+"img/sprite.d2ea766c.svg"},"9c0c":function(t,e,n){},cfaf:function(t,e,n){"use strict";var a=n("e99b"),r=n.n(a);r.a},e617:function(t,e,n){"use strict";var a=n("58a5"),r=n.n(a);r.a},e99b:function(t,e,n){},f020:function(t,e,n){},f1a0:function(t,e,n){"use strict";var a=n("f020"),r=n.n(a);r.a},ff2b:function(t,e,n){}});
//# sourceMappingURL=app.b8c7ed13.js.map