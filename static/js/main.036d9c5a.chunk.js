(this.webpackJsonpfood_order=this.webpackJsonpfood_order||[]).push([[0],{114:function(e,t,n){},122:function(e,t,n){e.exports={loginForm:"LoginModal_loginForm__1uBw5"}},123:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(18),i=n.n(a),o=(n(114),n(13)),r=n(28),s=n(170),l=n(17),d=n(1),j=function(e){return Object(d.jsx)("div",{style:{height:"1000px",width:"100%",margin:"auto",position:"absolute",zIndex:5,backgroundColor:"rgba(0, 0, 0, .5)",display:"flex"},onClick:e.onModalWasClicked})},u=n(165),m=n(171),x=n(169);var b=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],i=n[1];return Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.a,{to:"/menu"})}):Object(d.jsx)(x.a,{container:!0,component:s.a,direction:"column",justifyContent:"center",sx:{minHeight:"275px",justifyContent:"space-evenly"},children:Object(d.jsx)(x.a,{item:!0,component:"form",onSubmit:function(t){t.preventDefault(),console.log(t.target[0].value),console.log(t.target[1].value),e.userDidLogin(),i(!0)},children:Object(d.jsxs)(x.a,{item:!0,component:s.a,raised:!0,sx:{height:"50vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",margin:"auto",alignItems:"center",width:"25%"},children:[Object(d.jsx)(x.a,{item:!0,children:Object(d.jsx)(u.a,{variant:"filled",required:!0,autoFocus:!0,placeholder:"username",size:"small"})}),Object(d.jsx)(x.a,{item:!0,children:Object(d.jsx)(u.a,{variant:"filled",required:!0,size:"small",placeholder:"password"})}),Object(d.jsx)(x.a,{item:!0,children:Object(d.jsx)(m.a,{variant:"contained",type:"submit",children:"submit"})})]})})})})};n(122);var h=function(){return Object(d.jsx)(x.a,{container:!0,component:s.a,direction:"column",justifyContent:"center",sx:{minHeight:"250px",justifyContent:"space-evenly"},children:Object(d.jsx)(x.a,{item:!0,component:"form",children:Object(d.jsxs)(x.a,{item:!0,component:s.a,raised:!0,sx:{height:"75vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",margin:"auto",alignItems:"center",width:"25%"},children:[Object(d.jsx)(x.a,{item:!0,children:Object(d.jsx)(u.a,{variant:"filled",required:"true",autoFocus:!0,placeholder:"username",size:"small"})}),Object(d.jsx)(x.a,{item:!0,children:Object(d.jsx)(u.a,{variant:"filled",required:"true",autoFocus:!0,placeholder:"email",size:"small"})}),Object(d.jsx)(x.a,{item:!0,children:Object(d.jsx)(u.a,{variant:"filled",required:"true",size:"small",placeholder:"password"})}),Object(d.jsx)(x.a,{item:!0,children:Object(d.jsx)(u.a,{variant:"filled",required:"true",size:"small",placeholder:"confirm password"})}),Object(d.jsx)(x.a,{item:!0,children:Object(d.jsx)(m.a,{variant:"contained",type:"submit",children:"submit"})})]})})})},O=n(15),p=n(59),g=n(46),f={mealItems:[],total:0},y=Object(g.b)({name:"menuSlice",initialState:f,reducers:{removeItem:function(e,t){for(var n=0;n<e.mealItems.length;n++)if(e.mealItems[n].id===t.payload.id){var c=e.mealItems[n],a=e.total-c.cost,i=Object(p.a)(Object(p.a)({},c),{},{quantity:Number(c.quantity)-t.payload.quantity}),o=Object(O.a)(e.mealItems);return 0===i.quantity?(o.splice(n,1),{mealItems:o,total:a}):(o[n]=i,{mealItems:o,total:a})}return f},addItem:function(e,t){for(var n=e.total+t.payload.cost*Number(t.payload.quantity),c=0;c<e.mealItems.length;c++)if(e.mealItems[c].id===t.payload.id){var a=e.mealItems[c],i=void 0,o=Object(p.a)(Object(p.a)({},a),{},{quantity:a.quantity+t.payload.quantity});return(i=Object(O.a)(e.mealItems))[c]=o,{mealItems:i,total:n}}return{mealItems:e.mealItems.concat(t.payload),total:n}},clearCart:function(e){e.mealItems=[],e.total=0}}}),v=(y.actions,y),C=n(173),_=n(172),k=n(56),I=n.n(k),w=n(57),S=n.n(w),F=function(e){var t=Object(r.b)(),n=Object(r.c)((function(e){return e.menuSlice.mealItems})),c=Object(r.c)((function(e){return e.menuSlice.total})).toFixed(2);return Object(d.jsxs)(s.a,{sx:{margin:"100px 500px",height:"500px",width:"500px",backgroundColor:"white",position:"absolute",zIndex:10},children:[Object(d.jsx)("span",{className:I.a.close_icon,onClick:e.onClose,children:Object(d.jsx)(S.a,{})}),0===n.length?null:Object(d.jsxs)(x.a,{container:!0,children:[Object(d.jsx)(x.a,{item:!0,component:_.a,variant:"h5",sx:{width:"35%",borderBottom:"1px solid black"},gutterBottom:!0,children:"Summary"}),n.map((function(e){return Object(d.jsxs)(x.a,{item:!0,xs:12,container:!0,sx:{padding:"10px"},children:[Object(d.jsx)(x.a,{item:!0,xs:4,textAlign:"end",children:Object(d.jsx)(_.a,{variant:"h6",children:e.quantity},e.id)}),Object(d.jsx)(x.a,{item:!0,xs:6,sx:{marginTop:"0"},children:Object(d.jsxs)(_.a,{variant:"h6",children:["\xa0",e.name,"(s)"]})}),Object(d.jsx)(x.a,{item:!0,xs:2,children:Object(d.jsx)("span",{className:I.a.close_icon,children:Object(d.jsx)(S.a,{onClick:function(){!function(e){t(v.actions.removeItem(e))}(e)}})})})]},e.id)}))]}),0===n.length?Object(d.jsxs)(C.a,{alignItems:"center",sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(d.jsx)(_.a,{textAlign:"center",variant:"h2",children:"Nothing in cart...yet!"}),Object(d.jsx)(m.a,{onClick:e.onClose,size:"large",children:"Back to menu"})]}):Object(d.jsx)(C.a,{sx:{margin:"auto",height:"50%",width:"75%"},children:Object(d.jsxs)(m.a,{size:"medium",variant:"contained",sx:{marginTop:"40px"},onClick:function(){e.onClose()},children:["Place your order - $",c]})})]})},q=n.p+"static/media/Fork_&_knife.004f2788.png",B=n(35),z=n(174),N=n(175),M=n(167),D=n(176),P=n(88),T=n.n(P),E=n(87),A=n.n(E);var H=function(e){var t=Object(r.c)((function(e){return e.menuSlice.mealItems.length})),n=Object(c.useState)(!1),a=Object(o.a)(n,2),s=(a[0],a[1],Object(c.useState)(!1)),l=Object(o.a)(s,2),u=l[0],x=l[1],h=Object(c.useState)(!1),O=Object(o.a)(h,2),p=O[0],g=O[1];function f(){x(!1),g(!1)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(z.a,{position:"static",children:Object(d.jsxs)(N.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(B.b,{className:A.a.link,to:"/",children:"hello, food"})}),Object(d.jsx)(C.a,{children:Object(d.jsx)(B.b,{className:A.a.link,to:"/menu",children:"Start your order"})}),e.userLoggedin?Object(d.jsx)(C.a,{sx:{width:"10%"},children:Object(d.jsx)(M.a,{sx:{cursor:"pointer"},onClick:e.userClickedCart,badgeContent:t,color:"warning",children:Object(d.jsx)(T.a,{})})}):Object(d.jsxs)(C.a,{sx:{display:"flex",justifyContent:"space-evenly",width:"40%"},children:[Object(d.jsx)(m.a,{variant:"contained",size:"small",color:"warning",component:B.c,to:"/login",children:"Login"}),Object(d.jsx)(m.a,{variant:"contained",size:"small",color:"secondary",component:B.c,to:"/signup",children:"Sign up"}),Object(d.jsx)(D.a,{sx:{width:"10%"},children:Object(d.jsx)(M.a,{sx:{cursor:"pointer"},onClick:e.userClickedCart,badgeContent:t,color:"warning",children:Object(d.jsx)(T.a,{})})})]})]})}),u?i.a.createPortal(Object(d.jsx)(b,{onClose:function(){f()}}),document.getElementById("modalHandler")):null,u||p?i.a.createPortal(Object(d.jsx)(j,{onModalWasClicked:function(){f()}}),document.getElementById("background")):null]})},L=[{id:"i1",name:"Burger",img:"foo",cost:"3.50",description:"Juicy!"},{id:"i2",name:"Hotdog",img:"foo",cost:"1.50",description:"Snappy!"},{id:"i3",name:"Soda",img:"foo",cost:".50",description:"Fizzy!"},{id:"i4",name:"French Fries",img:"foo",cost:"2.00",description:"Salty!"}],W=n(179),J=n(178),R=n(96),Q=n.n(R);var $=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{sx:{width:"400px",margin:"20px 20px"},children:Object(d.jsx)(J.a,{onClick:function(){e.handleClick(e)},children:Object(d.jsxs)(W.a,{children:[Object(d.jsxs)(_.a,{variant:"h6",sx:{display:"flex",flexDirection:"row"},children:[e.name,Object(d.jsx)(Q.a,{sx:{paddingTop:"5px"}})]}),Object(d.jsx)(_.a,{paragraph:!0,children:e.description})]})})})})},X=function(e){var t=Number(e.cost),n=Object(r.b)(),a=Object(c.useState)(1),i=Object(o.a)(a,2),l=i[0],j=i[1],x=Object(c.useState)(t),b=Object(o.a)(x,2),h=b[0],O=b[1];function p(t){var n,c=l;if("+"===t)j(c+1),n=h+Number(e.cost),O(n);else{if(0===c)return;j(c-1),n=h-Number(e.cost),O(n)}}return Object(d.jsx)(s.a,{sx:{margin:"100px 500px",height:"500px",width:"500px",backgroundColor:"white",position:"absolute",zIndex:10},children:Object(d.jsx)(W.a,{children:Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:"column",height:"500px",width:"450px",margin:"auto",overflow:"scroll"},children:[Object(d.jsx)("span",{className:I.a.close_icon,onClick:e.onClose,children:Object(d.jsx)(S.a,{})}),Object(d.jsx)(_.a,{variant:"h2",children:e.name}),Object(d.jsx)(_.a,{paragraph:!0,children:e.description}),Object(d.jsx)(_.a,{variant:"h6",children:"Preferences"}),Object(d.jsx)(u.a,{placeholder:"foo"}),Object(d.jsx)(s.a,{sx:{marginTop:"100px",height:"100px",width:"500px"},children:Object(d.jsxs)(C.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",height:"100%",width:"80%",alignItems:"center"},children:[Object(d.jsx)(M.a,{onClick:p,sx:{borderRadius:"50%",backgroundColor:"white",cursor:"pointer"},children:Object(d.jsx)(_.a,{variant:"h5",sx:{margin:"auto"},children:"-"})}),Object(d.jsx)(M.a,{onClick:p,sx:{width:"50px",color:"red"},children:Object(d.jsx)(u.a,{size:"small",value:l})}),Object(d.jsx)(M.a,{onClick:function(){p("+")},sx:{borderRadius:"50%",cursor:"pointer"},children:Object(d.jsx)(_.a,{variant:"h5",sx:{margin:"auto"},children:"+"})}),Object(d.jsxs)(m.a,{size:"medium",variant:"contained",onClick:function(){if(0!==l){var t={id:e.id,name:e.name,cost:Number(e.cost),quantity:l};n(v.actions.addItem(t)),e.onClose()}},children:["add to cart - $",h.toFixed(2)]})]})})]})})})},G=n(97),K=n.n(G);var U=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(),l=Object(o.a)(s,2),u=l[0],m=l[1];function x(e){r(!0),m(e)}function b(){r(!1)}return Object(d.jsxs)(d.Fragment,{children:[a?Object(d.jsxs)(d.Fragment,{children:[i.a.createPortal(Object(d.jsx)(j,{onModalWasClicked:b}),document.getElementById("background")),i.a.createPortal(Object(d.jsx)(X,{id:u.id,name:u.name,cost:u.cost,description:u.description,onClose:b,onItemAddedToCart:function(t){e.onItemAddedToCart(t)}}),document.getElementById("modalHandler"))]}):null,Object(d.jsx)(C.a,{sx:{fontFamily:"roboto",color:"#0288d1",backgroundColor:"white",width:"50%",borderBottom:"1px solid black"},children:Object(d.jsx)(_.a,{paragraph:!0,children:"popular items"})}),Object(d.jsx)("div",{className:K.a.menu_container,children:L.map((function(e){return Object(d.jsx)($,{id:e.id,handleClick:x,name:e.name,img:e.img,cost:e.cost,description:e.description},e.id)}))})]})},V=n(89),Y=n.n(V);var Z=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],u=Object(c.useState)(!1),m=Object(o.a)(u,2),x=m[0],O=m[1],p=Object(r.c)((function(e){return e.menuSlice.mealItems.length}));function g(){a(!1)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(H,{userLoggedin:x,userClickedCart:function(){0!==p&&a(!0)}}),Object(d.jsx)("div",{className:Y.a.image_container,children:Object(d.jsx)(s.a,{sx:{height:"100px",width:"100px",position:"static",display:"flex",justifyContent:"center",marginBottom:"10px"},children:Object(d.jsx)("img",{className:Y.a.image,src:q,alt:"null"})})}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/menu",children:Object(d.jsx)(U,{})}),Object(d.jsx)(l.b,{exact:!0,path:"/login",children:Object(d.jsx)(b,{userDidLogin:function(){O(!0)}})}),Object(d.jsx)(l.b,{exact:!0,path:"/signup",children:Object(d.jsx)(h,{})})]}),n?Object(d.jsxs)(d.Fragment,{children:[i.a.createPortal(Object(d.jsx)(j,{onModalWasClicked:g}),document.getElementById("background")),i.a.createPortal(Object(d.jsx)(F,{onClose:g}),document.getElementById("modalHandler"))]}):null]})},ee=Object(g.b)({name:"bounce",initialState:{showBounce:!1},reducers:{bounceisTrue:function(e){e.showBounce=!0},bounceIsFalse:function(e){e.showBounce=!1}}}),te=(ee.actions,ee),ne=Object(g.a)({reducer:{menuSlice:v.reducer,bounceSlice:te.reducer}}),ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,180)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};i.a.render(Object(d.jsx)(r.a,{store:ne,children:Object(d.jsx)(B.a,{children:Object(d.jsx)(Z,{})})}),document.getElementById("root")),ce()},56:function(e,t,n){e.exports={menu_container:"ModalMenu_menu_container__2h4jO",close_icon:"ModalMenu_close_icon__2xRAF",add_to_cart:"ModalMenu_add_to_cart__1Qn3Q"}},87:function(e,t,n){e.exports={link:"Header_link__21SEu"}},89:function(e,t,n){e.exports={image:"App_image__3u5FA",image_container:"App_image_container__2drqE"}},97:function(e,t,n){e.exports={menu_container:"Menu_menu_container__3iXli",close_icon:"Menu_close_icon__HO7xT",add_to_cart:"Menu_add_to_cart__3upcq"}}},[[123,1,2]]]);
//# sourceMappingURL=main.036d9c5a.chunk.js.map