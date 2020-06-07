(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},i=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/parts-test-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"21bb":function(t,e,r){"use strict";var a=r("2dad"),n=r.n(a);n.a},"2dad":function(t,e,r){},"41f0":function(t,e,r){"use strict";var a=r("7359"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("5f5b"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/"}},[t._v("Test parts app")])],1),r("div",{staticClass:"container"},[r("router-view")],1)],1)},s=[],o=r("d0b9"),c={components:{BNavbar:o["a"]}},u=c,l=(r("5c0b"),r("2877")),d=Object(l["a"])(u,i,s,!1,null,null,null),p=d.exports,f=r("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home pt-4"},[r("h1",[t._v("Список запчастей")]),r("PartForm"),r("FiltersBox"),r("div",{staticClass:"tabs mt-4"},[r("span",{staticClass:"tab-link",class:{active:"all"===this.activeTab},on:{click:function(e){return t.changeFilter("all")}}},[t._v("Все")]),t._v(" | "),r("span",{staticClass:"tab-link",class:{active:"available"===this.activeTab},on:{click:function(e){return t.changeFilter("available")}}},[t._v("В наличии")]),t._v(" | "),r("span",{staticClass:"tab-link",class:{active:"deleted"===this.activeTab},on:{click:function(e){return t.changeFilter("deleted")}}},[t._v("Удалённые")])]),r("PartsList")],1)},b=[],g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",[t._v("Создание и редактирование запчастей")]),r("b-form",{staticClass:"pb-2",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.savePart(e)}}},[r("div",{staticClass:"d-flex flex-wrap"},[r("b-form-group",{staticClass:"pb-2 mr-2"},[r("label",{attrs:{for:"partIdForm"}},[t._v("№ детали:")]),r("b-input",{attrs:{required:"",id:"partIdForm",type:"text",value:t.partId},model:{value:t.partId,callback:function(e){t.partId=e},expression:"partId"}})],1),r("b-form-group",{staticClass:"pb-2 mr-2"},[r("label",{attrs:{for:"partNameForm"}},[t._v("Название запчасти:")]),r("b-input",{attrs:{required:"",id:"partNameForm",type:"text"},model:{value:t.partName,callback:function(e){t.partName=e},expression:"partName"}})],1),r("b-form-group",{staticClass:"pb-2 mr-2"},[r("label",{attrs:{for:"vendorCodeForm"}},[t._v("Код товара:")]),r("b-input",{attrs:{required:"",id:"vendorCodeForm",type:"text"},model:{value:t.vendorCode,callback:function(e){t.vendorCode=e},expression:"vendorCode"}})],1),r("b-form-group",{staticClass:"pb-2 mr-2"},[r("label",{attrs:{for:"manufacturerIdForm"}},[t._v("Производитель:")]),r("vue-bootstrap-typeahead",{ref:"typeahead",attrs:{required:"",id:"manufacturerIdForm",data:t.brandList,minMatchingChars:2},on:{hit:t.setManufacturerId},model:{value:t.brand,callback:function(e){t.brand=e},expression:"brand"}})],1)],1),r("div",{staticClass:"d-flex"},[r("b-form-group",{staticClass:"pb-2 mr-2"},[r("label",{attrs:{for:"priceMinForm"}},[t._v("Цена:")]),r("b-input",{attrs:{required:"",id:"priceMinForm",type:"number"},model:{value:t.priceMin,callback:function(e){t.priceMin=e},expression:"priceMin"}})],1),r("b-form-group",{staticClass:"pb-2 mr-2"},[r("label",{attrs:{for:"allOffersCountForm"}},[t._v("Количество:")]),r("b-input",{attrs:{required:"",id:"allOffersCountForm",type:"number"},model:{value:t.allOffersCount,callback:function(e){t.allOffersCount=e},expression:"allOffersCount"}})],1)],1),r("b-button",{staticClass:"mr-2",attrs:{variant:"primary"},on:{click:t.savePart}},[t._v("Сохранить")]),r("b-button",{attrs:{variant:"warning"},on:{click:t.resetForm}},[t._v("Сбросить")])],1)],1)},v=[],h=(r("7db0"),r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("2909")),I=r("d45f"),C={name:"PartForm",components:{VueBootstrapTypeahead:I["a"]},data:function(){return{partId:"",partName:"",vendorCode:"",brand:"",priceMin:"",manufacturerId:"",allOffersCount:"",createdAt:"",isDeleted:""}},computed:{partData:function(){var t=this.$store.getters.editedPart;return this.setData(t),t},brandList:function(){var t=this.$store.getters.partsList,e=[];return t.map((function(t){return e.push(t.brand),t})),Object(h["a"])(new Set(e))}},watch:{partData:function(t){this.formData=t,this.$refs.typeahead.inputValue=t.brand}},methods:{setManufacturerId:function(){var t=this.$store.getters.manufacturerIds,e=this.$refs.typeahead.inputValue.toUpperCase(),r="",a=t.find((function(t){return t.text===e}));return a?r=a.value:(a=t.sort((function(t,e){return e.value-t.value})),r=a[0].value+1),r},setData:function(t){this.partId=t.partId,this.partName=t.partName,this.vendorCode=t.vendorCode,this.brand=t.brand,this.manufacturerId=t.manufacturerId,this.priceMin=t.priceMin,this.allOffersCount=t.allOffersCount,this.createdAt=t.createdAt,this.isDeleted=t.isDeleted},savePart:function(){this.createdAt=this.partData.createdAt&&this.partData.partId===this.partId?this.partData.createdAt:(new Date).toLocaleString(),this.brand=this.brand.toUpperCase(),this.isDeleted=this.partData.isDeleted||!1,this.manufacturerId=this.setManufacturerId();var t={partId:this.partId,partName:this.partName,vendorCode:this.vendorCode,brand:this.brand,manufacturerId:this.manufacturerId,priceMin:this.priceMin,allOffersCount:this.allOffersCount,createdAt:this.createdAt,isDeleted:this.isDeleted};this.$store.dispatch("updatePart",t),this.resetForm()},resetForm:function(){this.$refs.typeahead.inputValue="",this.$store.dispatch("resetForm")}}},T=C,_=Object(l["a"])(T,g,v,!1,null,null,null),O=_.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"mt-4 mb-4",on:{click:t.toggleFilters}},[t._v(" "+t._s(t.filtersVisible?"Скрыть фильтры":"Показать фильтры")+" ")]),r("b-collapse",{attrs:{visible:t.filtersVisible,id:"collapse-2"}},[r("b-card",[r("h4",[t._v("Фильтрация")]),r("b-form",{staticClass:"pb-2",attrs:{inline:""},on:{submit:function(t){t.preventDefault(),t.stopPropagation()}}},[r("b-form-group",{staticClass:"pb-4 mr-2",on:{submit:function(e){return e.preventDefault(),t.setFiltering(e)}}},[r("b-form-group",{attrs:{label:"Производитель:","label-for":"manufacturerId"}}),r("b-form-select",{attrs:{id:"manufacturerId",options:t.manufacturerIds},on:{input:t.setFiltering},scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:null}},[t._v(" Все ")])]},proxy:!0}]),model:{value:t.manufacturerId,callback:function(e){t.manufacturerId=e},expression:"manufacturerId"}})],1),r("b-form-group",{staticClass:"pb-4 mr-2"},[r("b-form-group",{attrs:{label:"Код товара:","label-for":"vendorCode"}}),r("vue-bootstrap-typeahead",{ref:"typeahead",attrs:{value:t.vendorCode,data:t.vendorCodesList,minMatchingChars:2},on:{hit:t.setFiltering},model:{value:t.vendorCode,callback:function(e){t.vendorCode=e},expression:"vendorCode"}})],1),r("b-form-group",{staticClass:"pb-4 mr-2"},[r("b-form-group",{attrs:{label:"Дата создания от:","label-for":"datepicker-from"}}),r("b-form-datepicker",{attrs:{id:"datepicker-from",value:t.dateFrom,"date-format-options":{year:"numeric",month:"short",day:"numeric",weekday:"short"}},on:{input:t.setFiltering},model:{value:t.dateFrom,callback:function(e){t.dateFrom=e},expression:"dateFrom"}}),t.filteringOptions.dateFrom?r("span",{staticClass:"position-absolute clear-date",on:{click:function(e){return t.clearDate("dateFrom")}}},[t._v("Очистить")]):t._e()],1),r("b-form-group",{staticClass:"pb-4 mr-2"},[r("b-form-group",{attrs:{label:"Дата создания до:","label-for":"datepicker-to"}}),r("b-form-datepicker",{staticClass:"input-group",attrs:{id:"datepicker-to",value:t.dateTo,"date-format-options":{year:"numeric",month:"short",day:"numeric",weekday:"short"}},on:{input:t.setFiltering},model:{value:t.dateTo,callback:function(e){t.dateTo=e},expression:"dateTo"}}),t.filteringOptions.dateTo?r("span",{staticClass:"position-absolute clear-date",on:{click:function(e){return t.clearDate("dateTo")}}},[t._v("Очистить")]):t._e()],1)],1),r("b-button",{staticClass:"mt-2",attrs:{variant:"warning"},on:{click:t.resetFilters}},[t._v("Сбросить фильтры")])],1)],1)],1)},A=[],F={name:"FiltersBox",components:{VueBootstrapTypeahead:I["a"]},data:function(){return{filtersVisible:!1,manufacturerId:null,vendorCode:null,dateFrom:null,dateTo:null}},mounted:function(){if(localStorage.listFiltering){var t=JSON.parse(localStorage.listFiltering);this.$refs.typeahead.inputValue=t.vendorCode||"",this.setFilterValues(t)}},computed:{filteringOptions:function(){return this.$store.getters.filters},manufacturerIds:function(){return this.$store.getters.manufacturerIds},vendorCodesList:function(){return this.$store.getters.vendorCodesList}},watch:{vendorCode:function(t){""===t&&this.setFiltering()}},methods:{toggleFilters:function(){this.filtersVisible=!this.filtersVisible},setFilterValues:function(t){this.manufacturerId=t.manufacturerId,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo},resetFilters:function(){this.manufacturerId=null,this.vendorCode=null,this.dateFrom=null,this.dateTo=null,this.$refs.typeahead.inputValue="",this.$store.dispatch("resetFiltering")},clearDate:function(t){this[t]=null,this.setFiltering()},setFiltering:function(){var t=this.$refs.typeahead.inputValue||"",e=this.manufacturerId,r=this.dateFrom,a=this.dateTo;this.$store.dispatch("setFiltering",{manufacturerId:e,vendorCode:t,dateFrom:r,dateTo:a})}}},S=F,L=(r("aba0"),Object(l["a"])(S,D,A,!1,null,"45eaf1f6",null)),P=L.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mt-2"},[r("span",[t._v("Кол-во на странице: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.pagePortion,expression:"pagePortion"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.pagePortion=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"5"}},[t._v("5")]),r("option",{attrs:{value:"10"}},[t._v("10")]),r("option",{attrs:{value:"25"}},[t._v("25")])])]),r("div",[t.partsList.length?r("b-table-simple",{staticClass:"mt-3",attrs:{responsive:""}},[r("b-thead",[r("b-tr",[r("b-th",{staticClass:"date-col sortable position-relative",class:"createdAt"===t.sorting.param?t.sorting.desc?"desc":"asc":"",on:{click:function(e){return t.setSorting("createdAt")}}},[t._v("Создано ")]),r("b-th",{staticClass:"code-col"},[t._v("Код товара")]),r("b-th",[t._v("Остаток")]),r("b-th",{staticClass:"price-col sortable position-relative",class:"priceMin"===t.sorting.param?t.sorting.desc?"desc":"asc":"",on:{click:function(e){return t.setSorting("priceMin")}}},[t._v("Цена ")]),r("b-th",[t._v("Производитель")]),r("b-th",{staticClass:"name-col"},[t._v("Наименование")]),r("b-th",{staticClass:"part-id-col sortable position-relative",class:"partId"===t.sorting.param?t.sorting.desc?"desc":"asc":"",on:{click:function(e){return t.setSorting("partId")}}},[t._v("№ детали ")]),r("b-th",[t._v("Статус")]),r("b-th",{staticClass:"pl-4"})],1)],1),r("b-tbody",t._l(t.partsList,(function(t){return r("PartItem",{key:t.partId,attrs:{partData:t}})})),1)],1):r("div",{staticClass:"mt-4"},[r("h4",[t._v("Список пуст")]),r("p",[t._v("Не удалось найти запчасти по заданным параметрам. Пожалуйста, измените условия поиска.")])]),r("ul")],1),r("p",[t._v(t._s(t.stringShown))]),t.partsList.length&&1!==t.pagesTotal?r("div",{staticClass:"mb-4"},[r("br"),r("b-button",{staticClass:"mr-4",attrs:{variant:"primary",disabled:0==t.currentPage[t.tabFiltering]},on:{click:t.prevPage}},[t._v(" Назад ")]),r("b-button",{attrs:{variant:"primary",disabled:t.currentPage[t.tabFiltering]>=t.pagesTotal-1||t.partsList.length<1*t.pagePortion},on:{click:t.nextPage}},[t._v(" Далее ")])],1):t._e()])},N=[],x=(r("99af"),r("4de4"),r("caad"),r("fb6a"),r("a9e3"),r("2532"),r("5530")),y=(r("96cf"),r("1da1")),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-tr",[r("b-td",[t._v(" "+t._s(t.createdAt.date)+" "),r("pre",{staticClass:"mb-0"},[t._v(t._s(t.createdAt.time))])]),r("b-td",[t._v(" "+t._s(t.partData.vendorCode)+" ")]),r("b-td",[t._v(" "+t._s(t.partData.allOffersCount)+" шт. ")]),r("b-td",[t._v(" "+t._s(t.partData.priceMin)+" ")]),r("b-td",[t._v(" "+t._s(t.partData.brand)+" ")]),r("b-td",[t._v(" "+t._s(t.partData.partName)+" ")]),r("b-td",[t._v(" "+t._s(t.partData.partId)+" ")]),r("b-td",[t._v(" "+t._s(t.partData.isDeleted?"В архиве":"Доступна")+" ")]),r("b-td",{staticClass:"d-flex flex-column justify-content-center"},[r("b-button",{staticClass:"mb-2",attrs:{variant:t.partData.isDeleted?"success":"danger"},on:{click:function(e){return t.togglePart(t.partData.partId)}}},[t._v(" "+t._s(t.partData.isDeleted?"Восстановить":"Удалить")+" ")]),r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.setFormPart(t.partData)}}},[t._v(" Изменить ")])],1)],1)},k=[],E={name:"PartItem",props:{partData:{default:function(){return{}},type:Object}},computed:{createdAt:function(){var t=new Date(this.partData.createdAt).toLocaleDateString(),e=new Date(this.partData.createdAt).toLocaleTimeString();return{date:t,time:e}}},methods:{togglePart:function(t){this.$store.dispatch("togglePart",t)},setFormPart:function(t){window.scrollTo(0,0);var e=t;this.$store.dispatch("setFormPart",e)}}},$=E,R=(r("41f0"),Object(l["a"])($,w,k,!1,null,"144fc4e5",null)),Z=R.exports,j={name:"PartsList",components:{PartItem:Z},data:function(){return{partsTotal:0,currentPage:{all:0,deleted:0,available:0},pagePortion:10}},mounted:function(){this.partsList.length||this.fetchPartsList()},computed:{tabFiltering:function(){return this.$store.getters.activeTab},sorting:function(){return this.$store.getters.sorting},partsList:function(){var t=[];return t="deleted"===this.tabFiltering?this.$store.getters.deletedParts:"available"===this.tabFiltering?this.$store.getters.availableParts:this.$store.getters.partsList,this.paginateParts(this.setFilters(t))},filters:function(){return this.$store.getters.filters},pagesTotal:function(){var t=this.partsTotal,e=1*this.pagePortion;return Math.ceil(t/e)},stringShown:function(){if(!this.partsList.length)return"";var t=this.currentPage[this.tabFiltering]*Number(this.pagePortion)+1,e=this.currentPage[this.tabFiltering]===this.pagesTotal-1?this.partsTotal:t+Number(this.pagePortion)-1;return"Показаны запчасти ".concat(t," - ").concat(e," из ").concat(this.partsTotal)}},watch:{tabFiltering:function(t){0!==this.currentPage[t]&&0===this.partsList.length&&this.prevPage()},pagePortion:function(){this.resetPagination()}},methods:{fetchPartsList:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("init");case 2:case"end":return e.stop()}}),e)})))()},checkEmptyPage:function(){0===this.partsList.length&&0!==this.currentPage[this.tabFiltering]&&this.prevPage()},paginateParts:function(t){this.setPartsTotal(t);var e=this.currentPage[this.tabFiltering]*(1*this.pagePortion),r=e+1*this.pagePortion;return t.slice(e,r)},setPartsTotal:function(t){this.partsTotal=t.length},setSorting:function(t){var e=Object(x["a"])({},this.sorting);e.param=t,this.$store.dispatch("setSorting",e)},setFilters:function(t){var e=this.$store.getters.filters,r=t;return e.manufacturerId&&(r=r.filter((function(t){return t.manufacturerId===e.manufacturerId?t:null}))),e.vendorCode&&null!==e.vendorCode&&e.vendorCode.length>=3&&(r=r.filter((function(t){return String(t.vendorCode).toLowerCase().includes(String(e.vendorCode).toLowerCase())}))),e.dateFrom&&(r=r.filter((function(t){var r=new Date(new Date(t.createdAt).getTime()).toLocaleDateString(),a=new Date(new Date(e.dateFrom).getTime()).toLocaleDateString();return Date.parse(r)>=Date.parse(a)?t:null}))),e.dateTo&&(r=r.filter((function(t){var r=new Date(new Date(t.createdAt).getTime()).toLocaleDateString(),a=new Date(new Date(e.dateTo).getTime()).toLocaleDateString();return Date.parse(r)<=Date.parse(a)?t:null}))),r},resetPagination:function(){this.currentPage={all:0,deleted:0,available:0}},prevPage:function(){this.currentPage[this.tabFiltering]-=1},nextPage:function(){this.currentPage[this.tabFiltering]+=1}}},G=j,V=(r("bda7"),Object(l["a"])(G,M,N,!1,null,"24e5a9e2",null)),B=V.exports,J={name:"Home",components:{PartForm:O,FiltersBox:P,PartsList:B},computed:{activeTab:function(){return this.$store.getters.activeTab}},methods:{changeFilter:function(t){this.$store.dispatch("changeActiveTab",t)}}},Y=J,U=(r("21bb"),Object(l["a"])(Y,m,b,!1,null,null,null)),H=U.exports;a["default"].use(f["a"]);var q=[{path:"/",name:"Home",component:H}],K=new f["a"]({mode:"history",base:"/parts-test-app/",routes:q}),Q=K,z=r("2f62"),W=(r("4ec9"),{actions:{init:function(t){if(localStorage.listSorting?t.commit("SET_SORTING",JSON.parse(localStorage.getItem("listSorting"))):t.commit("SET_SORTING",t.state.defaultSorting),localStorage.listFiltering?t.commit("SET_FILTERING",JSON.parse(localStorage.getItem("listFiltering"))):t.commit("SET_FILTERING",t.state.defaultFiltering),localStorage.partsList)return t.commit("UPDATE_PARTS_LIST",JSON.parse(localStorage.getItem("partsList"))),JSON.parse(localStorage.partsList);var e=JSON.parse('{"data":[{"partId":"335443","createdAt":"2020-06-03T11:38:57Z","vendorCode":"4851139825","brand":"TOYOTA","partName":"Absorber a/s, s","priceMin":5089,"priceMax":5089,"userLocationCount":0,"allOffersCount":1,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"29684391","createdAt":"2020-06-03T11:20:21Z","vendorCode":"MD358361","brand":"MITSUBISHI","partName":"Датчик EGR","priceMin":2122,"priceMax":2122,"userLocationCount":0,"allOffersCount":1,"descriptionIsset":true,"manufacturerId":2,"isDeleted":1},{"partId":"17655549","createdAt":"2020-06-03T10:01:08Z","vendorCode":"9038914048","brand":"TOYOTA","partName":"Сайлентблок амортизатора","priceMin":912,"priceMax":1040,"userLocationCount":2,"allOffersCount":28,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"11149109","createdAt":"2020-06-03T09:14:05Z","vendorCode":"25915BH20D","brand":"NISSAN","partName":"Автомагнитола (мультимедийный центр для","priceMin":100994,"priceMax":100994,"userLocationCount":0,"allOffersCount":2,"descriptionIsset":true,"manufacturerId":4,"isDeleted":0},{"partId":"17258723","createdAt":"2020-06-03T05:45:52Z","vendorCode":"A741","brand":"VIC","partName":"Фильтр воздушный","priceMin":827,"priceMax":827,"userLocationCount":1,"allOffersCount":52,"descriptionIsset":true,"manufacturerId":5,"isDeleted":0},{"partId":"16184056","createdAt":"2020-06-03T04:45:58Z","vendorCode":"IFR5N10","brand":"NGK","partName":"Свеча зажигания","priceMin":8,"priceMax":1100,"userLocationCount":0,"allOffersCount":94,"descriptionIsset":true,"manufacturerId":6,"isDeleted":0},{"partId":"12138070","createdAt":"2020-06-03T04:08:47Z","vendorCode":"46272CH001","brand":"NISSAN","partName":"Держатель тормозной трубки","priceMin":404,"priceMax":650,"userLocationCount":0,"allOffersCount":10,"descriptionIsset":true,"manufacturerId":4,"isDeleted":0},{"partId":"16434539","createdAt":"2020-06-02T16:13:36Z","vendorCode":"NST5388L","brand":"KYB","partName":"Стойка газомасляная new sr special kyb (fl)","priceMin":3742,"priceMax":10739,"userLocationCount":0,"allOffersCount":23,"descriptionIsset":true,"manufacturerId":8,"isDeleted":0},{"partId":"16368950","createdAt":"2020-06-02T13:21:27Z","vendorCode":"5611144170","brand":"TOYOTA","partName":"Стекло лобовое","priceMin":34202,"priceMax":37842,"userLocationCount":0,"allOffersCount":3,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"13490912","createdAt":"2020-06-02T12:14:12Z","vendorCode":"MD366568","brand":"MITSUBISHI","partName":"Крышка грм","priceMin":1410,"priceMax":4250,"userLocationCount":0,"allOffersCount":5,"descriptionIsset":true,"manufacturerId":2,"isDeleted":0},{"partId":"15923662","createdAt":"2020-06-02T10:07:20Z","vendorCode":"7461013011A0","brand":"TOYOTA","partName":"Ручка салона","priceMin":803,"priceMax":2627,"userLocationCount":0,"allOffersCount":26,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"16745737","createdAt":"2020-06-02T09:56:35Z","vendorCode":"MR166189","brand":"MITSUBISHI","partName":"Трос_акпп","priceMin":5067,"priceMax":17630,"userLocationCount":0,"allOffersCount":19,"descriptionIsset":true,"manufacturerId":2,"isDeleted":0},{"partId":"11237106","createdAt":"2020-06-02T07:27:13Z","vendorCode":"4851079015","brand":"TOYOTA","partName":"Амортизатор подвески","priceMin":5681,"priceMax":5681,"userLocationCount":0,"allOffersCount":1,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"15789671","createdAt":"2020-06-02T07:17:33Z","vendorCode":"7588360010","brand":"TOYOTA","partName":"Клипса (фиксатор)","priceMin":21,"priceMax":270,"userLocationCount":0,"allOffersCount":63,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"15863961","createdAt":"2020-06-02T05:09:35Z","vendorCode":"ST1539","brand":"GMB","partName":"Крестовина рулевая","priceMin":320,"priceMax":420,"userLocationCount":3,"allOffersCount":200,"descriptionIsset":true,"manufacturerId":15,"isDeleted":0},{"partId":"22885655","createdAt":"2020-06-02T05:03:27Z","vendorCode":"7H0498202A","brand":"VAG","partName":"Пыльник ШРУС [IN]","priceMin":1153,"priceMax":5454,"userLocationCount":0,"allOffersCount":39,"descriptionIsset":true,"manufacturerId":16,"isDeleted":0},{"partId":"11206766","createdAt":"2020-06-02T03:46:24Z","vendorCode":"NSF2101","brand":"KYB","partName":"Амортизатор гм. new sr special nsf2101","priceMin":3274,"priceMax":6540,"userLocationCount":0,"allOffersCount":22,"descriptionIsset":true,"manufacturerId":8,"isDeleted":0},{"partId":"15306708","createdAt":"2020-06-02T03:41:29Z","vendorCode":"1571054030","brand":"TOYOTA","partName":"Радиатор/","priceMin":21304,"priceMax":68160,"userLocationCount":0,"allOffersCount":9,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"2942073","createdAt":"2020-06-02T03:05:01Z","vendorCode":"S157122330","brand":"TOYOTA","partName":"Element oil cooler","priceMin":18735,"priceMax":58920,"userLocationCount":0,"allOffersCount":6,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"12269901","createdAt":"2020-06-02T03:01:22Z","vendorCode":"4261160200","brand":"TOYOTA","partName":"Диск колесный","priceMin":15417,"priceMax":77750,"userLocationCount":0,"allOffersCount":10,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"11295857","createdAt":"2020-06-02T02:47:01Z","vendorCode":"SPR06","brand":"AURAMI","partName":"Ароматизатор спрей 06 новая машина 100мл (aurami)","priceMin":66,"priceMax":240,"userLocationCount":0,"allOffersCount":7,"descriptionIsset":false,"manufacturerId":21,"isDeleted":0},{"partId":"15048492","createdAt":"2020-06-02T02:26:23Z","vendorCode":"2206046010","brand":"TOYOTA","partName":"Датчик дроссельной заслонки","priceMin":12271,"priceMax":38840,"userLocationCount":0,"allOffersCount":11,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0},{"partId":"11926878","createdAt":"2020-06-02T01:39:29Z","vendorCode":"AL8Z5230A","brand":"FORD","partName":"Глушитель","priceMin":27008,"priceMax":32973,"userLocationCount":0,"allOffersCount":3,"descriptionIsset":true,"manufacturerId":23,"isDeleted":0},{"partId":"15340930","createdAt":"2020-06-02T01:31:05Z","vendorCode":"TOV485","brand":"AVA QUALITY COOLING","partName":"Радиатор кондиционера внутренний","priceMin":6,"priceMax":7937,"userLocationCount":0,"allOffersCount":77,"descriptionIsset":true,"manufacturerId":24,"isDeleted":0},{"partId":"11260666","createdAt":"2020-06-02T00:04:13Z","vendorCode":"4853180756","brand":"TOYOTA","partName":"Амортизатор подвески задний","priceMin":3864,"priceMax":13880,"userLocationCount":0,"allOffersCount":6,"descriptionIsset":true,"manufacturerId":1,"isDeleted":0}],"type":"success"}');return t.commit("UPDATE_PARTS_LIST",e.data),e.data},togglePart:function(t,e){t.commit("TOGGLE_PART",e)},updatePart:function(t,e){t.commit("UPDATE_PART",e)},changeActiveTab:function(t,e){t.commit("CHANGE_ACTIVE_TAB",e)},setSorting:function(t,e){t.commit("SET_SORTING",e)},setFiltering:function(t,e){t.commit("SET_FILTERING",e)},resetFiltering:function(t){t.commit("RESET_FILTERING")},setFormPart:function(t,e){t.commit("SET_FORM_PART",e)},resetForm:function(t){t.commit("RESET_FORM")}},mutations:{UPDATE_PARTS_LIST:function(t,e){localStorage.setItem("partsList",JSON.stringify(e)),t.partsList=e},TOGGLE_PART:function(t,e){t.partsList.map((function(t){if(t.partId===e){var r=t;return r.isDeleted=!r.isDeleted,r}return t})),localStorage.setItem("partsList",JSON.stringify(t.partsList))},UPDATE_PART:function(t,e){var r=[],a={},n=t.partsList.find((function(t){return t.partId===e.partId}));n?(a=Object.assign(n,e),a.createdAt=n.createdAt,r=t.partsList.filter((function(t){return t.partId!==e.partId}))):(a=e,r=t.partsList),r.push(a),t.partsList=r.sort((function(e,r){return t.sorting.desc?"createdAt"===t.sorting.param?new Date(r[t.sorting.param]).getTime()-new Date(e[t.sorting.param]).getTime():r[t.sorting.param]-e[t.sorting.param]:"createdAt"===t.sorting.param?new Date(e[t.sorting.param]).getTime()-new Date(r[t.sorting.param]).getTime():e[t.sorting.param]-r[t.sorting.param]})),localStorage.setItem("partsList",JSON.stringify(t.partsList))},CHANGE_ACTIVE_TAB:function(t,e){t.activeTab=e},SET_SORTING:function(t,e){t.sorting.param===e.param?t.sorting.desc=!e.desc:(t.sorting=e,t.sorting.desc=!0),localStorage.setItem("listSorting",JSON.stringify(t.sorting)),t.partsList.sort((function(e,r){return t.sorting.desc?"createdAt"===t.sorting.param?new Date(r[t.sorting.param]).getTime()-new Date(e[t.sorting.param]).getTime():r[t.sorting.param]-e[t.sorting.param]:"createdAt"===t.sorting.param?new Date(e[t.sorting.param]).getTime()-new Date(r[t.sorting.param]).getTime():e[t.sorting.param]-r[t.sorting.param]})),t.partsList.length&&localStorage.setItem("partsList",JSON.stringify(t.partsList))},SET_FILTERING:function(t,e){t.filtering=e,localStorage.setItem("listFiltering",JSON.stringify(e))},RESET_FILTERING:function(t){t.filtering={},localStorage.removeItem("listFiltering")},SET_FORM_PART:function(t,e){t.editedPart=e},RESET_FORM:function(t){t.editedPart={partId:null,partName:null,vendorCode:null,brand:"",priceMin:null,allOffersCount:null,createdAt:null}}},state:{defaultSorting:{param:"createdAt",desc:!0},defaultFiltering:{vendorCode:null,dateFrom:null,dateTo:null,manufacturerId:null},editedPart:{partId:null,partName:null,vendorCode:null,brand:null,priceMin:null,allOffersCount:null,createdAt:null},partsList:[],filteredParts:[],activeTab:"all",sorting:{},filtering:{}},getters:{partsList:function(t){return t.partsList},availableParts:function(t){return t.partsList.filter((function(t){return t.isDeleted?null:t}))},deletedParts:function(t){return t.partsList.filter((function(t){return t.isDeleted?t:null}))},activeTab:function(t){return t.activeTab},sorting:function(t){return t.sorting},filters:function(t){return t.filtering},manufacturerIds:function(t){var e=t.partsList,r=[];return e.map((function(t){return r.push({value:t.manufacturerId,text:t.brand}),t})),r.sort((function(t,e){return t.text.localeCompare(e.text)})),Object(h["a"])(new Map(r.map((function(t){return[t.value,t]}))).values())},vendorCodesList:function(t){var e=t.partsList,r=[];return e.map((function(t){return r.push(String(t.vendorCode)),t})),r},editedPart:function(t){return t.editedPart}}});a["default"].use(z["a"]);var X=new z["a"].Store({strict:!0,modules:{parts:W}});a["default"].use(n["a"]),a["default"].config.productionTip=!1,new a["default"]({router:Q,store:X,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("9c0c"),n=r.n(a);n.a},7359:function(t,e,r){},9325:function(t,e,r){},"9c0c":function(t,e,r){},aba0:function(t,e,r){"use strict";var a=r("9325"),n=r.n(a);n.a},bda7:function(t,e,r){"use strict";var a=r("fb9d"),n=r.n(a);n.a},fb9d:function(t,e,r){}});
//# sourceMappingURL=app.8cccb58a.js.map