(this.webpackJsonpfood_order=this.webpackJsonpfood_order||[]).push([[0],[,,function(e,t,a){e.exports={cartList:"CartOverlay_cartList__1SZdR",entrance:"CartOverlay_entrance__2SOEd",total:"CartOverlay_total__Hqa5z",cart_items:"CartOverlay_cart_items__3E5R4",backDrop:"CartOverlay_backDrop__3XIhP",separate_buttons:"CartOverlay_separate_buttons__1jCF0",cart_item_form:"CartOverlay_cart_item_form__yuntv",cart_item_buttons:"CartOverlay_cart_item_buttons__2GOx4",cart_item_input:"CartOverlay_cart_item_input__2EfgB",close_order_buttons:"CartOverlay_close_order_buttons__2UmTz",cart_complete:"CartOverlay_cart_complete__h6Alp",order_complete_explanation:"CartOverlay_order_complete_explanation__1QjNO"}},,function(e,t,a){e.exports={meal:"Meals_meal__2hYjK",amount:"Meals_amount__2cMXj",userInteractItems:"Meals_userInteractItems__3yI4c",userId:"Meals_userId__29INq",addButton:"Meals_addButton__3QDv0",image:"Meals_image__1gjt-",description_container:"Meals_description_container__2oqwY"}},,,,,,,function(e,t,a){e.exports={cartButton:"CartIcon_cartButton__JqWhG",badge:"CartIcon_badge__1DCu6",cart_bounce:"CartIcon_cart_bounce__1T516",bounce:"CartIcon_bounce__2gq32"}},,,,function(e,t,a){e.exports={mainOverlay:"MenuOverlay_mainOverlay__2KSXM",centerText:"MenuOverlay_centerText__15kfo"}},,function(e,t,a){e.exports={header:"Header_header__23cqb"}},function(e,t,a){e.exports={card:"Card_card__2Vg_A"}},function(e,t,a){e.exports={universal_button:"Button_universal_button__HCFB7"}},function(e,t,a){e.exports={mealList:"MealList_mealList__uTyZt"}},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(5),r=a.n(c),o=(a(25),a(26),a(17)),s=a.n(o),i=a(10),l=a(11),m=a.n(l),u=a(3),d=a(6),_=Object(d.b)({name:"bounce",initialState:{showBounce:!1},reducers:{bounceisTrue:function(e){e.showBounce=!0},bounceIsFalse:function(e){e.showBounce=!1}}}),b=_.actions,j=_,O=a(2),p=a.n(O),f=a(18),h=a.n(f),x=a(0);var v=function(e){return Object(x.jsx)("div",{className:"".concat(h.a.card," ").concat(e.className),children:e.children})},y=a(16),C=a(8),I={mealItems:[],total:0},g=Object(d.b)({name:"menuSlice",initialState:I,reducers:{removeItem:function(e,t){for(var a=0;a<e.mealItems.length;a++)if(e.mealItems[a].id===t.payload.id){var n=e.mealItems[a],c=e.total-n.itemCost,r=Object(C.a)(Object(C.a)({},n),{},{itemQuantity:Number(n.itemQuantity)-t.payload.amount}),o=Object(y.a)(e.mealItems);return 0===r.itemQuantity?(o.splice(a,1),{mealItems:o,total:c}):(o[a]=r,{mealItems:o,total:c})}return I},addItem:function(e,t){for(var a=e.total+t.payload.item.itemCost*Number(t.payload.amount),n=0;n<e.mealItems.length;n++)if(e.mealItems[n].id===t.payload.item.id){var c=e.mealItems[n],r=void 0,o=Object(C.a)(Object(C.a)({},c),{},{itemQuantity:c.itemQuantity+t.payload.amount});return(r=Object(y.a)(e.mealItems))[n]=o,{mealItems:r,total:a}}return{mealItems:e.mealItems.concat(t.payload.item),total:a}},clearCart:function(e){e.mealItems=[],e.total=0}}}),N=g.actions,B=g,S=a(19),M=a.n(S);var F=function(e){return Object(x.jsx)("button",{onClick:function(){if(e.onDisplay)e.onDisplay();else if(e.onClose)e.onClose();else{if(!e.onOrderWasPlaced)return e.onOrderIsComplete?void e.onOrderIsComplete():void 0;e.onOrderWasPlaced()}},className:"".concat(M.a.universal_button," ").concat(e.className),children:e.children})};function T(e){return Object(x.jsx)("div",{onClick:e.onClose,className:p.a.backDrop,children:e.children})}function k(e){var t=Object(u.c)((function(e){return e.menuSlice.mealItems})),a=Object(u.c)((function(e){return e.menuSlice.total})),c=Object(n.useState)(!1),r=Object(i.a)(c,2),o=r[0],s=r[1],l=Object(u.b)();return Object(x.jsx)(v,{className:p.a.cartList,children:o?Object(x.jsxs)(v,{className:p.a.cart_complete,children:[Object(x.jsx)("h1",{className:p.a.order_complete_explanation,children:"Your order's been placed!  If this were a true food app, a fetch request with method='POST' would be sent to a server to fulfill this order :)"}),Object(x.jsx)(F,{onClose:e.onOrderWasPlaced,children:"Awesome!"})]}):Object(x.jsxs)("div",{className:p.a.cartList,children:[t.map((function(e){return Object(x.jsxs)(v,{className:p.a.cart_items,children:[Object(x.jsxs)("h3",{children:[e.itemQuantity," ",e.itemName,"(s)...."]}),Object(x.jsxs)("h3",{children:["$",Number(e.itemCost*e.itemQuantity).toFixed(2)]}),Object(x.jsxs)("div",{className:p.a.cart_item_form,children:[Object(x.jsx)("p",{className:p.a.cart_item_input,children:e.itemQuantity}),Object(x.jsx)("button",{className:p.a.cart_item_buttons,onClick:function(){return t=e.id,a=1,void l(N.removeItem({id:t,amount:a}));var t,a},children:"-Remove"}),Object(x.jsx)("button",{className:p.a.cart_item_buttons,onClick:function(){return t=e,a=1,void l(N.addItem({item:t,amount:a}));var t,a},children:"+Add"})]})]},Math.random())})),Object(x.jsxs)("h2",{className:p.a.total,children:["Total: $",Number(a).toFixed(2)]}),Object(x.jsxs)("div",{className:p.a.separate_buttons,children:[Object(x.jsx)(F,{className:p.a.close_order_buttons,onClose:e.onClose,children:"Close Cart"}),0!==t.length&&Object(x.jsx)(F,{className:p.a.close_order_buttons,onOrderIsComplete:function(){return s(!0)},children:"Place Your Order!"})]})]})})}var w=function(e){return Object(x.jsxs)(x.Fragment,{children:[r.a.createPortal(Object(x.jsx)(k,{onClose:e.onClose,onOrderWasPlaced:e.onOrderWasPlaced}),document.getElementById("modalHandler")),r.a.createPortal(Object(x.jsx)(T,{onClose:e.onClose}),document.getElementById("backGround"))]})};var P=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.bounceSlice.showBounce})),a=Object(u.c)((function(e){return e.menuSlice.mealItems.length})),c="".concat(m.a.badge," ").concat(t?m.a.cart_bounce:""),r=Object(n.useState)(!1),o=Object(i.a)(r,2),s=o[0],l=o[1];return Object(n.useEffect)((function(){if(0!==a){var t=setTimeout((function(){e(b.bounceIsFalse())}),300);return function(){clearTimeout(t)}}}),[t,e,a]),Object(x.jsxs)("div",{children:[Object(x.jsx)(F,{onDisplay:function(){l(!0)},className:m.a.cartButton,children:"My Cart"}),Object(x.jsx)("span",{className:c,children:a}),s&&Object(x.jsx)(w,{onClose:function(){l(!1)},onOrderWasPlaced:function(){e(N.clearCart()),l(!1)}})]})};var Q=function(){return Object(x.jsxs)("div",{className:s.a.header,children:[Object(x.jsx)("h2",{children:"My Food Ordering App"}),Object(x.jsx)(P,{})]})},D=a(15),L=a.n(D),q=a.p+"static/media/food.7dca0457.jpg";var A=function(){return Object(x.jsxs)("div",{className:L.a.mainOverlay,children:[Object(x.jsx)("img",{src:q,alt:"null"}),Object(x.jsx)("p",{className:L.a.centerText,children:"Welcome to my first React app!  This app simulates a food ordering experience. Feel free to order any of the items below, check your cart, and check out!"})]})},W=a(4),E=a.n(W);var H=function(e){var t=Object(n.useRef)(),a=Object(u.b)();return Object(x.jsxs)(v,{className:E.a.meal,children:[Object(x.jsxs)("form",{className:E.a.userInteractItems,onSubmit:function(n){n.preventDefault(),a(b.bounceisTrue());var c=t.current.value,r=+c;"0"===c||r<1||r>5||e.onItemAdded(e.id,e.name,e.cost,r)},children:[Object(x.jsxs)("label",{className:E.a.amount,htmlFor:E.a.amount,children:["How many?"," "]}),Object(x.jsx)("input",{ref:t,type:"number",min:"1",defaultValue:"1",max:"10",step:"1",id:E.a.userId}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:E.a.addButton,children:"Add+"})]}),Object(x.jsxs)("span",{className:E.a.description_container,children:[Object(x.jsx)("h2",{children:e.name}),Object(x.jsx)("img",{className:E.a.image,src:e.image,alt:"null"})]}),Object(x.jsx)("p",{children:e.description}),Object(x.jsxs)("h4",{children:["$",e.cost]})]})},R=a(20),z=a.n(R),Y=a.p+"static/media/cheeseburger.e4aef1ef.png",G=a.p+"static/media/hotdog.70f71dbd.png",J=a.p+"static/media/coleslaw.5388e516.png",X=a.p+"static/media/coke.0f828a4c.png";var $=function(e){var t=[{id:"m1",name:"Cheeseburger",description:"juicy!",cost:"10",image:Y},{id:"m2",name:"Hotdog",description:"snappy!",cost:"5",image:G},{id:"m3",name:"Macaroni salad",description:"quite creamy",cost:"2.50",image:J},{id:"m4",name:"cola",description:"fizzy!",cost:"1",image:X}],a=Object(u.b)();function n(e,t,n,c){var r={id:e,itemName:t,itemCost:n,itemQuantity:c};a(N.addItem({item:r,amount:c}))}return Object(x.jsx)(v,{className:z.a.mealList,children:t.map((function(e){return Object(x.jsx)(H,{id:e.id,name:e.name,description:e.description,onItemAdded:n,cost:e.cost,image:e.image},e.id)}))})};var K=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q,{}),Object(x.jsx)(A,{}),Object(x.jsx)($,{})]})},V=Object(d.a)({reducer:{menuSlice:B.reducer,bounceSlice:j.reducer}}),Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};r.a.render(Object(x.jsx)(u.a,{store:V,children:Object(x.jsx)(K,{})}),document.getElementById("root")),Z()}],[[32,1,2]]]);
//# sourceMappingURL=main.59f6a4e4.chunk.js.map