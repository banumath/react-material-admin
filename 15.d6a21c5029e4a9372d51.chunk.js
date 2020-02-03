(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0b8eb3e35929778b339a":function(e,t,r){"use strict";r.r(t);var o,n=r("8af190b70a6bc55c6f1b"),i=r.n(n),a=r("ab4cb61bcb2dc161defb"),d=r("4a5602adf82fe13d6438"),l=r("d7dd51e1bf6bfc2c9c3d"),c=r("0d939196e59ed73c94e6"),s=r("f993ef5da7d81af534f1"),f=r("a9a7fbc74aa76df90e23"),p=r("711f9393a7bdb8588a8c"),u=r("e95a63b25fb92ed15721"),h=r("988b7bbe4d0c07f69a17"),v=r.n(h),m=(r("8a2d1b95e05b6a321e74"),r("ef58856f4f875bd36582")),b=r.n(m),g=[{title:"Dashboard",href:"/dashboard",icon:"dashboard"},{title:"Users",href:"/users",icon:"people"},{title:"Products",href:"/products",icon:"shopping_basket"},{title:"Authentication",href:"/login",icon:"lock_open"},{title:"Typography",href:"/typography",icon:"text_fields"},{title:"Icons",href:"/icons",icon:"image"},{title:"Account",href:"/account",icon:"account_box"},{title:"Settings",href:"/settings",icon:"settings"}];function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function w(e,t,r,n){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var d in i)void 0===t[d]&&(t[d]=i[d]);else t||(t=i||{});if(1===a)t.children=n;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function x(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var S,j=Object(s.makeStyles)(function(e){return{root:{},item:{display:"flex",paddingTop:0,paddingBottom:0,overflowX:"hidden",padding:7},button:{color:c.colors.blueGrey[800],padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightMedium,overflowX:"hidden"},icon:{color:e.palette.icon,width:24,height:24,display:"flex",alignItems:"center",marginRight:e.spacing(2)},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium,"& $icon":{color:e.palette.primary.main}}}}),O=Object(n.forwardRef)(function(e,t){return i.a.createElement("div",{ref:t,style:{flexGrow:1}},i.a.createElement(u.NavLink,e))}),k=function(e){var t=e.className,r=x(e,["className"]),o=j();return i.a.createElement(c.List,y({},r,{className:v()(o.root,t)}),g.map(function(e){return w(c.ListItem,{className:o.item,disableGutters:!0},e.title,w(c.Button,{activeClassName:o.active,className:o.button,component:O,to:e.href},void 0,w("div",{className:o.icon},void 0,w(b.a,{},void 0,e.icon)),w(c.ListItemText,{primary:e.title,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"}})))}))},C=r("6938d226fd372a75cbf9"),N=r("aaeb9c46d19e83ac4847"),P=r("f2e45f249ae387e855e6"),T=r.n(P),R=r("e799c547a20a503b338f"),I=r.n(R);function L(e,t,r,o){S||(S="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===i)t.children=o;else if(i>1){for(var d=new Array(i),l=0;l<i;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:S,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=L(b.a,{},void 0,"search"),_=L(I.a,{},void 0,L(b.a,{},void 0,"more_vert")),G=L(I.a,{},void 0,L(b.a,{},void 0,"favorite")),$=L(I.a,{},void 0,L(b.a,{},void 0,"more_vert")),E=L(I.a,{},void 0,L(b.a,{},void 0,"favorite")),B=L(I.a,{},void 0,L(b.a,{},void 0,"phone")),F=L(I.a,{},void 0,L(b.a,{},void 0,"camera")),M=function(e){var t=e.classes,r=e.screen;return i.a.createElement(i.a.Fragment,null,L("div",{},void 0,L("img",{className:t.logo,src:"https://www.fcodelabs.com/img/fcode_logo.png",alt:"FCodeLabs"})),L("div",{className:t.grow}),L("div",{className:t.search},void 0,L("div",{className:t.searchIcon},void 0,A),L(T.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput}})),"xs"===r&&_,"sm"===r&&i.a.createElement(i.a.Fragment,null,G,$),Object(N.isWidthUp)("md",r)&&i.a.createElement(i.a.Fragment,null,E,B,F))};M.defaultProps={screen:null};var U,D=Object(C.withStyles)(function(e){var t=e.spacing,r=e.transitions,o=e.breakpoints,n=e.palette;return{header:{fontWeight:900,minWidth:0,fontSize:18},grow:{flexGrow:1},search:W({position:"relative",marginRight:8,borderRadius:e.shape.borderRadius,background:n.grey[200],"&:hover":{background:n.grey[300]},marginLeft:0,width:"100%"},o.up("sm"),{marginLeft:t(1),width:"auto"}),searchIcon:{width:t(9),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:W({borderRadius:4,paddingTop:t(1),paddingRight:t(1),paddingBottom:t(1),paddingLeft:t(10),transition:r.create("width"),width:"100%"},o.up("sm"),{width:120,"&:focus":{width:200}}),logo:{maxWidth:170,paddingLeft:0,paddingRight:10}}})(Object(n.memo)(M)),X={navWidth:200,navAnchor:"left",collapsedWidth:52,collapsedBreakpoint:"md",autoCollapsedDisabled:!1,heightAdjustmentDisabled:!1,initialAdjustmentHeight:64,heightAdjustmentSpeed:144,headerPosition:"relative",footerShrink:!0,clipped:!0,navVariant:{xs:"temporary",sm:"permanent"},collapsible:{xs:!1,sm:!0}},H=Object(s.makeStyles)(function(){return{header:{backgroundColor:"#fff !important",boxShadow:"0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)"},content:{backgroundColor:"#f8f8f8"}}}),J=Object(s.makeStyles)(function(){return{paper:{border:"none",boxShadow:"0 0 8px 0 rgba(0,0,0,0.38)",overflowX:"hidden"}}});function z(e,t,r,o){U||(U="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===i)t.children=o;else if(i>1){for(var d=new Array(i),l=0;l<i;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:U,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var V=z(p.ChevronLeft,{}),q=z(p.MenuRounded,{}),K=z(p.ChevronRight,{}),Q=z(p.ChevronLeft,{}),Y=z(k,{});var Z,ee=function(e){var t=e.children,r=H(),o=r.header,n=r.content,i=J();return z(f.Root,{config:X},void 0,z(f.Header,{classes:{root:o},renderMenuIcon:function(e){return e?V:q}},void 0,function(e){var t=e.screen,r=e.collapsed;return z(D,{screen:t,collapsed:r.toString()})}),z(f.Nav,{classes:i,renderIcon:function(e){return e?K:Q}},void 0,Y),z(f.Content,{classes:{root:n}},void 0,t))};function te(e,t,r,o){Z||(Z="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===i)t.children=o;else if(i>1){for(var d=new Array(i),l=0;l<i;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:Z,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var re=Object(s.makeStyles)(function(e){return{root:{flexGrow:1},gridContainer:{paddingTop:20},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},pageTitle:{marginBottom:0},pageSubTitle:{paddingBottom:"10px !important"}}}),oe=te(c.Grid,{item:!0,md:4},void 0,te(c.Paper,{},void 0,"xs=12")),ne=te(c.Grid,{item:!0,md:4},void 0,te(c.Paper,{},void 0,"xs=12")),ie=te(c.Grid,{item:!0,md:4},void 0,te(c.Paper,{},void 0,"xs=12"));t.default=Object(a.compose)(Object(d.firestoreConnect)(function(){return["Users"]}),Object(l.connect)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile,users:e.firestore.ordered.Users}}))(function(){var e=re();return te(ee,{},void 0,te(c.Container,{maxWidth:"false",disableGutters:!0},void 0,te(c.Box,{p:{xs:2,sm:3}},void 0,te(c.Typography,{variant:"h6",className:e.pageTitle},void 0,"Children"),te(c.Typography,{variant:"caption",className:e.pageSubTitle},void 0,"List of children listed under your account"),te(c.Paper,{style:{padding:20,marginTop:20}},void 0,te(c.Grid,{container:!0,spacing:3,className:e.gridContainer},void 0,oe,ne,ie)))))})}}]);