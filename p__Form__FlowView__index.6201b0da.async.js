"use strict";(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[514],{99903:function(me,H,l){l.d(H,{T:function(){return M}});var M=`import { DataForm } from 'antd-management-fast-framework';

const { BaseAddForm } = DataForm;

class BaseView extends BaseAddForm {
  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      submitApiPath: 'simple/addBasicInfo',
    };
  }
}

export { BaseView };
`},88017:function(me,H,l){l.d(H,{P:function(){return ae}});var M=l(86832),z=l.n(M),$=l(3782),J=l.n($),G=l(25471),q=l.n(G),ee=l(42314),Y=l.n(ee),te=l(96082),ne=l.n(te),oe=l(77475),re=oe.jY.BaseAddForm,ae=function(ie){Y()(T,ie);var le=ne()(T);function T(se){var a;return q()(this,T),a=le.call(this,se),a.state=z()(z()({},a.state),{},{submitApiPath:"simple/addBasicInfo"}),a}return J()(T)}(re)},80494:function(me,H,l){l.r(H),l.d(H,{default:function(){return pt}});var M=l(42559),z=l.n(M),$=l(3782),J=l.n($),G=l(25471),q=l.n(G),ee=l(56507),Y=l.n(ee),te=l(42314),ne=l.n(te),oe=l(96082),re=l.n(oe),ae=l(73581),ie=l.n(ae),le=l(86832),T=l.n(le),se=l(85388),a=l(56015),de=l(92870),d=l(92637),e=l(52983),s=l(92841),Ke=l(27510),Me=l(92262),ze=l(17053),ce=l(79301),V=l(10223),Z=l(25864),Ze=l(52901),pe=l(24599),We=l(12228),Xe=l(24106),Ye=l(18989),Ue=l(87608),Qe=l.n(Ue);function fe(t,o){(o==null||o>t.length)&&(o=t.length);for(var n=0,r=new Array(o);n<o;n++)r[n]=t[n];return r}function U(t,o){return function(n){if(Array.isArray(n))return n}(t)||function(n,r){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var u,c,p,y,g=[],f=!0,E=!1;try{if(p=(i=i.call(n)).next,r===0){if(Object(i)!==i)return;f=!1}else for(;!(f=(u=p.call(i)).done)&&(g.push(u.value),g.length!==r);f=!0);}catch(N){E=!0,c=N}finally{try{if(!f&&i.return!=null&&(y=i.return(),Object(y)!==y))return}finally{if(E)throw c}}return g}}(t,o)||function(n,r){if(n){if(typeof n=="string")return fe(n,r);var i=Object.prototype.toString.call(n).slice(8,-1);return i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set"?Array.from(n):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?fe(n,r):void 0}}(t,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function F(t){return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},F(t)}function ye(t){var o=function(n,r){if(F(n)!=="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var u=i.call(n,r||"default");if(F(u)!=="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}(t,"string");return F(o)==="symbol"?o:String(o)}function ge(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);o&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function A(t){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?ge(Object(n),!0).forEach(function(r){var i,u,c;i=t,u=r,c=n[r],(u=ye(u))in i?Object.defineProperty(i,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[u]=c}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var w="antd-management-fast-flow",k="#4e44f2",R="#a98477",ve="rgba(211, 220, 50, .6)",Ee="rgba(921, 120, 90, .6)",he="#e895d2",$e="#f66902",xe="#c2fa32",Je={backgroundColor:he},Ge={backgroundColor:xe},qe=ce.Z.Text,we=function(t){var o=t.id,n=t.data,r=t.sourceX,i=t.sourceY,u=t.targetX,c=t.targetY,p=t.sourcePosition,y=t.targetPosition,g=t.borderRadius,f=t.centerX,E=t.centerY,N=t.offset,v=t.style,S=v===void 0?{}:v,P=t.markerEnd,C=U((0,s.OW)({sourceX:r,sourceY:i,sourcePosition:p,targetX:u,targetY:c,targetPosition:y,borderRadius:g,centerX:f,centerY:E,offset:N}),3),B=C[0],I=C[1],O=C[2],_=A({canEdit:!1},n),h=_.data,m=_.canEdit,x=_.onChange,b=_.onRemove,j=(0,a.s4e)({data:h,key:"title"}),L=(0,a.s4e)({data:h,key:"description"});return e.createElement(e.Fragment,null,e.createElement(s.u5,{id:o,path:B,markerEnd:P,style:S}),e.createElement(s.XQ,null,e.createElement("div",{style:{position:"absolute",transform:"translate(-50%, -50%) translate(".concat(I,"px,").concat(O,"px)"),background:"#ffcc00",padding:6,borderRadius:5,fontSize:12,pointerEvents:"all"},title:L||""},e.createElement(V.Z,null,e.createElement(qe,{style:{fontSize:"12px",padding:"0.5px 2px",border:"1.2mm ridge ".concat(Ee),color:"#666"}},j||"\u56DE\u9000"),m?e.createElement("button",{style:{padding:"0.5px 4px",fontSize:"12px"},title:"\u70B9\u51FB\u53D8\u66F4\u8FDE\u7EBF",onClick:function(D){D.stopPropagation(),(0,a.mf2)(x)&&x(h)}},d.xM.edit()):null,m?e.createElement("button",{style:{padding:"0.5px 4px",fontSize:"12px"},title:"\u70B9\u51FB\u79FB\u9664\u8FDE\u7EBF",onClick:function(D){D.stopPropagation(),(0,a.mf2)(b)&&b(h)}},d.xM.delete()):null))))};we.defaultProps={};var be=function(t){var o=t.size,n=t.data,r=t.onClick,i=A({canEdit:!1},n),u=i.data,c=i.canEdit,p=i.onRemove,y=(0,a.s4e)({data:u,key:"name"}),g=(0,a.s4e)({data:u,key:"description"});return e.createElement(e.Fragment,null,e.createElement("div",{className:"".concat(w+"-node"),onClick:r,title:g||""},e.createElement("div",{className:"".concat(w+"-node-header"),style:Ge},e.createElement(d.hs,{flexAuto:"left",left:e.createElement(d.OP,null,e.createElement(d._w,{style:{color:"#ffe4c4"},color:"#333",separator:" ",textPrefixStyle:{marginRight:"6px"},text:y||"\u7EC8\u6B62\u70B9"})),right:c?e.createElement(V.Z,null,e.createElement("button",{style:{padding:"1px 4px",fontSize:"12px",backgroundColor:"transparent",borderRadius:"5px",borderColor:"#fff"},title:"\u70B9\u51FB\u79FB\u9664\u8282\u70B9",onClick:function(f){f.stopPropagation(),(0,a.mf2)(p)&&p(u)}},d.xM.delete())):null})),o!=="small"&&e.createElement("div",{className:"".concat(w+"-node-content")},e.createElement("div",{className:"".concat(w+"-node-content-inner")},e.createElement("div",{className:"".concat(w+"-node-content-info")},e.createElement(d._w,{text:"\u6B64\u8282\u70B9\u4E3A\u7EC8\u6B62\u8282\u70B9\uFF0C\u4EE3\u8868\u6D41\u7A0B\u7ED3\u675F\u3002"}))))),e.createElement(s.HH,{type:"target",position:s.Ly.Top,id:"top",style:{background:k},isConnectable:!0}),e.createElement(s.HH,{type:"target",position:s.Ly.Left,id:"left",style:{top:"50%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"target",position:s.Ly.Right,id:"right",style:{top:"50%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"target",position:s.Ly.Bottom,id:"bottom",style:{top:"100%",background:k},isConnectable:!0}))};function Ce(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function ke(t,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,ye(r.key),r)}}function Ne(t,o,n){return o&&ke(t.prototype,o),n&&ke(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ue(t,o){return ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ue(t,o)}function _e(t,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),o&&ue(t,o)}function Pe(t,o){if(o&&(F(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},K(t)}function et(t){var o=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}();return function(){var n,r=K(t);if(o){var i=K(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Pe(this,n)}}be.defaultProps={};var tt=ce.Z.Text,Be=function(t){_e(n,e.PureComponent);var o=et(n);function n(){return Ce(this,n),o.apply(this,arguments)}return Ne(n,[{key:"render",value:function(){var r=this.props,i=r.id,u=r.data,c=r.sourceX,p=r.sourceY,y=r.targetX,g=r.targetY,f=r.sourcePosition,E=r.targetPosition,N=r.borderRadius,v=r.centerX,S=r.centerY,P=r.offset,C=r.markerEnd,B=r.style,I=U((0,s.OW)({sourceX:c,sourceY:p,sourcePosition:f,targetX:y,targetY:g,targetPosition:E,borderRadius:N,centerX:v,centerY:S,offset:P}),3),O=I[0],_=I[1],h=I[2],m=A({canEdit:!1},u),x=m.data,b=m.canEdit,j=m.onChange,L=m.onRemove,D=(0,a.s4e)({data:x,key:"title"}),Q=(0,a.s4e)({data:x,key:"description"});return e.createElement(e.Fragment,null,e.createElement(s.u5,{id:i,path:O,markerEnd:C,style:B}),e.createElement(s.XQ,null,e.createElement("div",{style:{position:"absolute",transform:"translate(-50%, -50%) translate(".concat(_,"px,").concat(h,"px)"),background:"#ffcc00",padding:6,borderRadius:5,fontSize:12,pointerEvents:"all"},title:Q||""},e.createElement(V.Z,null,e.createElement(tt,{style:{fontSize:"12px",padding:"0.5px 2px",border:"1.2mm ridge ".concat(ve)}},D||"\u524D\u8FDB"),b?e.createElement("button",{style:{padding:"0.5px 4px",fontSize:"12px"},title:"\u70B9\u51FB\u53D8\u66F4\u8FDE\u7EBF",onClick:function(X){X.stopPropagation(),(0,a.mf2)(j)&&j(x)}},d.xM.edit()):null,b?e.createElement("button",{style:{padding:"0.5px 4px",fontSize:"12px"},title:"\u70B9\u51FB\u79FB\u9664\u8FDE\u7EBF",onClick:function(X){X.stopPropagation(),(0,a.mf2)(L)&&L(x)}},d.xM.delete()):null))))}}]),n}();function nt(t){var o=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}();return function(){var n,r=K(t);if(o){var i=K(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Pe(this,n)}}Be.defaultProps={};var Ie=function(t){_e(n,e.PureComponent);var o=nt(n);function n(){return Ce(this,n),o.apply(this,arguments)}return Ne(n,[{key:"render",value:function(){var r=this.props,i=r.data,u=r.size,c=A({canEdit:!1,nodeNameKey:"nodeNameKey",listApproverKey:"listApprover",personnelNameKey:"personnelName",personnelNameLabel:""},i),p=c.data,y=c.isNext,g=c.canEdit,f=c.nodeNameKey,E=c.listApproverKey,N=c.personnelNameKey,v=c.personnelNameLabel,S=c.onAddApprover,P=c.onChange,C=c.onRemove,B=c.onRemoveApprover,I=(0,a.s4e)({data:p,key:f,defaultValue:"\u6682\u65E0"});console.log({dataSource:p,nodeNameKey:f});var O=(0,a.s4e)({data:p,key:E,convert:a.$07.array}),_=O.length>0;return e.createElement(e.Fragment,null,e.createElement("div",{className:Qe()("".concat(w+"-node"),y?"".concat(w+"-node-next"):null)},e.createElement("div",{className:"".concat(w+"-node-header")},e.createElement(d.hs,{flexAuto:"left",left:e.createElement(d.OP,null,e.createElement(d._w,{style:{},color:"#333",separator:" ",textPrefixStyle:{marginRight:"6px"},text:I||"\u6D41\u7A0B\u9879"})),right:g?e.createElement(V.Z,null,e.createElement("button",{style:{padding:"1px 4px",fontSize:"12px",backgroundColor:"transparent",borderRadius:"5px",borderColor:"#fff"},title:"\u70B9\u51FB\u6DFB\u52A0\u5BA1\u6279\u4EBA",onClick:function(h){h.stopPropagation(),(0,a.mf2)(S)&&S(p)}},d.xM.plusCircle()),e.createElement("button",{style:{padding:"1px 4px",fontSize:"12px",backgroundColor:"transparent",borderRadius:"5px",borderColor:"#fff"},title:"\u70B9\u51FB\u7F16\u8F91\u8282\u70B9",onClick:function(h){h.stopPropagation(),(0,a.mf2)(P)&&P(p)}},d.xM.edit()),e.createElement("button",{style:{padding:"1px 4px",fontSize:"12px",backgroundColor:"transparent",borderRadius:"5px",borderColor:"#fff"},title:"\u70B9\u51FB\u79FB\u9664\u8282\u70B9",onClick:function(h){h.stopPropagation(),(0,a.mf2)(C)&&C(p)}},d.xM.delete())):null})),u!=="small"&&e.createElement("div",{className:"".concat(w+"-node-content")},e.createElement("div",{className:"".concat(w+"-node-content-inner")},e.createElement("div",{className:"".concat(w+"-node-content-info")},e.createElement(V.Z,{direction:"vertical",style:{width:"100%"},split:e.createElement(Z.Z,{style:{margin:"0"}})},_&&O.map(function(h,m){var x=(0,a.s4e)({data:h,key:N,defaultValue:""});return e.createElement(d.hs,{key:"user_".concat(m),flexAuto:"left",left:e.createElement(d._w,{textPrefix:v,text:x||"\u672A\u8BBE\u7F6E",separatorStyle:{paddingRight:"3px"},textPrefixStyle:{color:"#333"},color:(0,a.aMH)(x)?"#ccc":""}),right:g?e.createElement(V.Z,{split:e.createElement(Z.Z,{type:"vertical",style:{marginLeft:"1px",marginRight:"1px"}})},e.createElement(Ze.ZP,{size:"small",style:{padding:"0.5px 5px",fontSize:"12px"},title:"\u79FB\u9664\u5BA1\u6279\u4EBA",onClick:function(b){b.stopPropagation(),(0,a.mf2)(B)&&B(h)}},d.xM.delete())):null})}),_?null:e.createElement("div",null,"\u672A\u8BBE\u7F6E\u5BA1\u6279\u4EBA",g?"\uFF0C\u70B9\u51FB ":"",g?d.xM.plusCircle():"",g?" \u6309\u94AE\u6DFB\u52A0":"","\u3002")))))),e.createElement(s.HH,{type:"target",id:"top",position:s.Ly.Top,style:{left:"45%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"source",id:"top",position:s.Ly.Top,style:{left:"55%",background:R},isConnectable:!0}),e.createElement(s.HH,{type:"target",position:s.Ly.Left,id:"left",style:{top:"33%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"source",position:s.Ly.Left,id:"left",style:{top:"66%",background:R},isConnectable:!0}),e.createElement(s.HH,{type:"target",position:s.Ly.Right,id:"right",style:{top:"66%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"source",position:s.Ly.Right,id:"right",style:{top:"33%",background:R},isConnectable:!0}),e.createElement(s.HH,{type:"target",id:"bottom",position:s.Ly.Bottom,style:{left:"55%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"source",position:s.Ly.Bottom,id:"bottom",style:{left:"45%",background:R},isConnectable:!0}))}}]),n}();Ie.defaultProps={color:"black"};var Oe=function(t){var o=t.size,n=t.onClick;return e.createElement(e.Fragment,null,e.createElement("div",{className:"".concat(w+"-node"),onClick:n},e.createElement("div",{className:"".concat(w+"-node-header"),style:Je},e.createElement(d.hs,{flexAuto:"left",left:e.createElement(d.OP,null,e.createElement(d._w,{style:{color:"#ffe4c4"},color:"#333",separator:" ",text:"\u8D77\u59CB\u70B9"}))})),o!=="small"&&e.createElement("div",{className:"".concat(w+"-node-content")},e.createElement("div",{className:"".concat(w+"-node-content-inner")},e.createElement("div",{className:"".concat(w+"-node-content-info")},e.createElement(d._w,{text:"\u6B64\u4E3A\u6D41\u7A0B\u53D1\u8D77\u552F\u4E00\u8282\u70B9\uFF0C\u65E0\u5BA1\u6279\u4EBA\u3002"}))))),e.createElement(s.HH,{type:"target",id:"top",position:s.Ly.Top,style:{left:"45%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"source",id:"top",position:s.Ly.Top,style:{left:"55%",background:R},isConnectable:!0}),e.createElement(s.HH,{type:"target",position:s.Ly.Left,id:"left",style:{top:"33%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"source",position:s.Ly.Left,id:"left",style:{top:"66%",background:R},isConnectable:!0}),e.createElement(s.HH,{type:"target",position:s.Ly.Right,id:"right",style:{top:"66%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"source",position:s.Ly.Right,id:"right",style:{top:"33%",background:R},isConnectable:!0}),e.createElement(s.HH,{type:"target",id:"bottom",position:s.Ly.Bottom,style:{left:"55%",background:k},isConnectable:!0}),e.createElement(s.HH,{type:"source",position:s.Ly.Bottom,id:"bottom",style:{left:"45%",background:R},isConnectable:!0}))};Oe.defaultProps={};var ot={intermediate:Ie,start:Oe,end:be},rt={forward:Be,backward:we};function at(){return e.createElement(pe.Z,{title:"\u56FE\u793A\u8BF4\u660E\uFF1A",size:"small"},e.createElement("div",{style:{width:"120px"}},e.createElement(d.hs,{flex:"left",leftStyle:{paddingRight:"10px"},left:e.createElement(d.kQ,null,e.createElement("div",{style:{height:"10px",width:"16px",backgroundColor:he,borderRadius:"3px"}})),right:"\u6D41\u7A0B\u8D77\u59CB\u8282\u70B9"})),e.createElement("div",{style:{width:"120px"}},e.createElement(d.hs,{flex:"left",leftStyle:{paddingRight:"10px"},left:e.createElement(d.kQ,null,e.createElement("div",{style:{height:"10px",width:"16px",backgroundColor:$e,borderRadius:"3px"}})),right:"\u6D41\u7A0B\u4E2D\u95F4\u8282\u70B9"})),e.createElement("div",{style:{width:"120px"}},e.createElement(d.hs,{flex:"left",leftStyle:{paddingRight:"10px"},left:e.createElement(d.kQ,null,e.createElement("div",{style:{height:"10px",width:"16px",backgroundColor:xe,borderRadius:"3px"}})),right:"\u6D41\u7A0B\u7EC8\u6B62\u8282\u70B9"})),e.createElement("div",{style:{width:"120px"}},e.createElement(d.hs,{flex:"left",leftStyle:{paddingRight:"10px"},left:e.createElement(d.kQ,null,e.createElement("div",{style:{height:"10px",width:"16px",border:"2px solid",borderImage:"linear-gradient(45deg, gold, deeppink) 1",clipPath:"inset(0px round 5px)",filter:"hue-rotate(360deg)"}})),right:"\u7B49\u5F85\u6D41\u8F6C\u8282\u70B9"})),e.createElement(Z.Z,{type:"horizontal",style:{marginTop:"6px",marginBottom:"6px"}}),e.createElement("div",{style:{width:"120px"}},e.createElement(d.hs,{flex:"left",leftStyle:{paddingRight:"10px"},left:e.createElement(d.kQ,null,e.createElement("div",{style:{height:"6px",width:"6px",backgroundColor:R,borderRadius:"50%"}})),right:"\u8282\u70B9\u6D41\u7A0B\u51FA\u53E3"})),e.createElement("div",null,e.createElement(d.hs,{flex:"left",leftStyle:{paddingRight:"10px"},left:e.createElement(d.kQ,null,e.createElement("div",{style:{height:"6px",width:"6px",backgroundColor:k,borderRadius:"50%"}})),right:"\u8282\u70B9\u6D41\u7A0B\u5165\u53E3"})),e.createElement(Z.Z,{type:"horizontal",style:{marginTop:"6px",marginBottom:"6px"}}),e.createElement("div",null,e.createElement(d.hs,{flex:"left",leftStyle:{paddingRight:"10px"},left:e.createElement(d.kQ,null,e.createElement("div",{style:{height:"2px",width:"100%",backgroundColor:ve}})),right:"\u524D\u8FDB\u6D41\u7A0B\u6807\u7B7E"})),e.createElement("div",null,e.createElement(d.hs,{flex:"left",leftStyle:{paddingRight:"10px"},left:e.createElement(d.kQ,null,e.createElement("div",{style:{height:"2px",width:"100%",backgroundColor:Ee}})),right:"\u56DE\u9000\u6D41\u7A0B\u6807\u7B7E"})))}function it(){return e.createElement(pe.Z,{title:"\u64CD\u4F5C\u8BF4\u660E\uFF1A",size:"small"},e.createElement("div",{style:{width:"180px"}},e.createElement(d.Kf,{showTitle:!1,showNumber:!0,labelWidth:18,list:[{text:"\u8D77\u59CB\u8282\u70B9\u4EC5\u80FD\u5B58\u5728\u4E00\u4E2A\u3002"},{text:"\u70B9\u51FB \u201D\u7F16\u8F91\u201C \u53EF\u8BBE\u7F6E\u8282\u70B9\u4FE1\u606F\u3002"},{text:"\u70B9\u51FB \u201D\u66F4\u6539\u201C \u53EF\u8BBE\u7F6E\u8282\u70B9\u5BA1\u6838\u4EBA\u4FE1\u606F\u3002"},{text:"\u70B9\u51FB \u201D\u53D8\u66F4\u201C \u53EF\u8BBE\u7F6E\u8FDE\u7EBF\u4FE1\u606F\u3002"},{text:"\u70B9\u51FB \u5237\u65B0\u56FE\u6807 \u53EF\u91CD\u65B0\u52A0\u8F7D\u4FE1\u606F\u3002"},{text:"\u70B9\u51FB \u5220\u9664\u56FE\u6807 \u53EF\u5220\u9664\u8282\u70B9\u6216\u8FDE\u7EBF\u3002"}],useBackground:!1})))}function lt(t){return A({position:{x:0,y:0},canEdit:!1},t)}function st(t){var o=(0,a.s4e)({data:t,key:"index",convert:a.$07.number}),n=(0,a.s4e)({data:t,key:"forward",convert:a.$07.boolean}),r=o>0?(0,a.d37)({seed:30*o+o+2}):"#b1b1b7",i=o>0?(0,a.d37)({seed:30*o+o+2}):"#FF0072";return A(A({animated:!0,canEdit:!1,sourceHandle:n?"bottom":"right",targetHandle:n?"top":"right"},t),{},{type:n?"forward":"backward",markerEnd:{type:s.QZ.ArrowClosed,color:n?r:i},style:{stroke:n?r:i}})}var Le={};function Te(t){var o=t.canEdit,n=t.nodeNameKey,r=t.listApproverKey,i=t.personnelNameKey,u=t.personnelNameLabel,c=t.nodes,p=t.edges,y=t.updateViewConfig,g=t.onEdgeCreate,f=(0,a.kJL)(c)?c:[],E=(0,a.kJL)(p)?p:[],N=U((0,s.Rr)([]),3),v=N[0],S=N[1],P=N[2],C=U((0,s.ll)([]),3),B=C[0],I=C[1],O=C[2];(0,e.useEffect)(function(){S(f),I(E)},[f,E]);var _=v.map(function(m){return m.data.canEdit=o,m.data.nodeNameKey=n,m.data.listApproverKey=r,m.data.personnelNameKey=i,m.data.personnelNameLabel=u,m}),h=B.map(function(m){return m.data.canEdit=o,m});return e.createElement(s.x$,{fitView:!0,nodes:_,edges:h,onConnect:function(m){(0,a.mf2)(g)&&g(m)},onNodesChange:function(m){o&&P(m)},onEdgesChange:function(m){o&&O(m)},onNodeDragStart:function(m,x){if(o){var b=x.position;Le=b}},onNodeDragStop:function(m,x){if(o&&(0,a.mf2)(y)){var b=x.position,j=x.data.data,L=b.x,D=b.y,Q=Le,X=Q.x,ft=Q.y;L==X&&D==ft||y({viewConfigData:JSON.stringify({position:b})},j)}},nodeTypes:ot,edgeTypes:rt},e.createElement(Ke.Z,null),e.createElement(Me.a,{zoomable:!0,pannable:!0}),e.createElement(s.s_,{position:"top-left"},e.createElement(at,null)),e.createElement(s.s_,{position:"top-right"},o?e.createElement(it,null):null),e.createElement(ze.A,null))}Te.defaultProps={canEdit:!0,nodeNameKey:"nodeNameKey",listApproverKey:"listApprover",personnelNameKey:"personnelNameKey",personnelNameLabel:"personnelNameLabel",onEdgeCreate:function(){}};var W=ce.Z.Paragraph;function dt(t){var o=t.style,n=t.list,r=t.listItemConvert,i=t.nextData,u=t.nextDataConvert,c=i==null?null:(0,a.mf2)(u)?u(i):i,p=((0,a.kJL)(n)?n:[]).map(function(E){return(0,a.mf2)(r)?r(E):E});c!=null&&p.push(c);var y=null;if(p.length<=0)y=e.createElement(We.Z,null);else{var g=p.length,f=p.map(function(E,N){var v=A({titlePrefix:"\u5BA1\u6279\u8282\u70B9",icon:null,color:null,notePrefix:"\u5BA1\u6279\u5907\u6CE8",resultPrefix:"\u5BA1\u6279\u7ED3\u679C",operatorNamePrefix:"\u5BA1\u6279\u4EBA",timePrefix:"\u5BA1\u6279\u65F6\u95F4",compact:!1},E),S=v.titlePrefix,P=v.title,C=v.notePrefix,B=v.note,I=v.resultPrefix,O=v.result,_=v.operatorNamePrefix,h=v.operatorName,m=v.timePrefix,x=v.time,b=v.icon,j=v.color,L=v.compact;return{color:j||(c==null&&g===N+1?"blue":"gray"),dot:b,children:e.createElement(e.Fragment,null,(0,a.aMH)(P)?null:e.createElement(W,null,e.createElement(d._w,{separatorStyle:{padding:"0 4px 0 2px"},textPrefix:S,text:P})),L||(0,a.aMH)(O)?null:e.createElement(W,null,e.createElement(d._w,{separatorStyle:{padding:"0 4px 0 2px"},textPrefix:I,text:O})),L||(0,a.aMH)(h)?null:e.createElement(W,null,e.createElement(d._w,{separatorStyle:{padding:"0 4px 0 2px"},textPrefix:_,text:h})),L||(0,a.aMH)(B)?null:e.createElement(W,null,e.createElement(d._w,{separatorStyle:{padding:"0 4px 0 2px"},textPrefix:C,text:B||"\u65E0\u5907\u6CE8"})),L||(0,a.aMH)(x)?null:e.createElement(W,null,e.createElement(d._w,{separatorStyle:{padding:"0 4px 0 2px"},textPrefix:m,text:x})))}});y=e.createElement(Xe.Z,{reverse:!0,style:{marginTop:"10px"},items:f})}return e.createElement(d.hs,{style:A(A({},o),{},{height:"100%"}),flexAuto:"right",left:e.createElement(Z.Z,{type:"vertical",style:{height:"100%"}}),right:e.createElement(d.hs,{style:{height:"100%"},flexAuto:"bottom",topStyle:{paddingBottom:"6px"},top:e.createElement(Ye.Z,{message:"\u5BA1\u6279\u8FDB\u5EA6\uFF1A",type:"info"}),bottom:e.createElement("div",{style:{height:"100%",position:"relative"}},e.createElement("div",{style:{position:"absolute",left:0,top:0,paddingLeft:"6px",paddingRight:"6px",height:"100%",width:"100%",overflowY:"auto"}},y))})})}dt.defaultProps={style:{},canEdit:!0,list:[],listItemConvert:null,nextData:null,nextDataConvert:null};var ct=l(88017),ut=l(99903),Ae=`import { connect } from 'easy-soft-dva';
import {
  checkInCollection,
  convertCollection,
  getValueByKey,
  isArray,
  mergeArrowText,
  showSimpleInfoMessage,
  toLowerFirst,
} from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import { convertOptionOrRadioData } from 'antd-management-fast-component';
import { adjustEdge, adjustNode, Flow } from 'antd-management-fast-flow';

import { BaseView } from '../BaseView';
import { code as codeBaseView } from '../BaseView/codeSource';

import { code as codeFlowView } from './codeSource';

const workflowNodeList = [
  {
    workflowId: '1718837194992521216',
    name: '\u8D77\u59CB\u70B9 - 1718937226831859712',
    description: '\u6D41\u7A0B\u8D77\u59CB\u8282\u70B9',
    viewConfigData:
      '{"position":{"x":-282.37469290539946,"y":-157.68119533736086}}',
    type: 10,
    workflowNodeId: '1718937226831859712',
    channel: 0,
    status: 100,
    createOperatorId: '1683472879502626816',
    createTime: '2023-10-30 18:25:45',
    updateOperatorId: '1683472879502626816',
    updateTime: '2023-10-31 15:19:34',
    key: '1718937226831859712',
    workflowName: '\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001',
    statusNote: '\u6B63\u5E38',
    typeNote: '\u8D77\u59CB\u70B9',
    listApprover: [],
    viewConfig: {
      position: {
        x: -282.374_692_905_399_46,
        y: -157.681_195_337_360_86,
      },
    },
  },
  {
    workflowId: '1718837194992521216',
    name: '\u8282\u70B9001',
    description: '',
    viewConfigData:
      '{"position":{"x":-39.61612194131288,"y":37.08743330676117}}',
    type: 20,
    workflowNodeId: '1719271707115655168',
    channel: 0,
    status: 100,
    createOperatorId: '1683472879502626816',
    createTime: '2023-10-31 16:34:52',
    updateOperatorId: '1683472879502626816',
    updateTime: '2023-10-31 16:36:26',
    key: '1719271707115655168',
    workflowName: '\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001',
    statusNote: '\u6B63\u5E38',
    typeNote: '\u8FC7\u7A0B\u70B9',
    listApprover: [],
    viewConfig: {
      position: {
        x: -39.616_121_941_312_883,
        y: 37.087_433_306_761_17,
      },
    },
  },
  {
    workflowId: '1718837194992521216',
    name: '\u7EC8\u6B62\u70B9 - 1719252735666294784',
    description: '\u6D41\u7A0B\u7EC8\u6B62\u8282\u70B9',
    viewConfigData:
      '{"position":{"x":-263.34096464399295,"y":270.7843015377835}}',
    type: 30,
    workflowNodeId: '1719252735666294784',
    channel: 0,
    status: 100,
    createOperatorId: '1683472879502626816',
    createTime: '2023-10-31 15:19:29',
    updateOperatorId: '1683472879502626816',
    updateTime: '2023-10-31 16:36:25',
    key: '1719252735666294784',
    workflowName: '\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001',
    statusNote: '\u6B63\u5E38',
    typeNote: '\u7EC8\u6B62\u70B9',
    listApprover: [],
    viewConfig: {
      position: {
        x: -263.340_964_643_992_95,
        y: 270.784_301_537_783_51,
      },
    },
  },
];

const workflowLineList = [
  {
    workflowId: '1718837194992521216',
    title: '',
    fromId: '1718937226831859712',
    fromPosition: 400,
    toId: '1719271707115655168',
    toPosition: 100,
    type: 100,
    description: '',
    workflowLineId: '1719252862103588864',
    channel: 0,
    status: 100,
    createOperatorId: '1683472879502626816',
    createTime: '2023-10-31 15:19:59',
    updateOperatorId: '1683472879502626816',
    updateTime: '2023-10-31 16:35:07',
    key: '1719252862103588864',
    workflowName: '\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001',
    fromPositionName: 'Bottom',
    fromPositionNote: '\u4E0B\u90E8',
    toPositionName: 'Top',
    toPositionNote: '\u4E0A\u90E8',
    typeNote: '\u524D\u8FDB',
    statusNote: '\u6B63\u5E38',
    fromName: '\u8D77\u59CB\u70B9',
    toName: '\u8282\u70B9001',
  },
  {
    workflowId: '1718837194992521216',
    title: '',
    fromId: '1719271707115655168',
    fromPosition: 400,
    toId: '1719252735666294784',
    toPosition: 100,
    type: 100,
    description: '',
    workflowLineId: '1719272086574338048',
    channel: 0,
    status: 100,
    createOperatorId: '1683472879502626816',
    createTime: '2023-10-31 16:36:22',
    updateOperatorId: '1683472879502626816',
    updateTime: '2023-10-31 16:36:22',
    key: '1719272086574338048',
    workflowName: '\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001',
    fromPositionName: 'Bottom',
    fromPositionNote: '\u4E0B\u90E8',
    toPositionName: 'Top',
    toPositionNote: '\u4E0A\u90E8',
    typeNote: '\u524D\u8FDB',
    statusNote: '\u6B63\u5E38',
    fromName: '\u8282\u70B9001',
    toName: '\u7EC8\u6B62\u70B9',
  },
];

// eslint-disable-next-line no-unused-vars
function dataConvert(o, index) {
  const { flag, name } = o;

  return { label: name, value: flag, disabled: false, ...o };
}

const nodeList = (isArray(workflowNodeList) ? workflowNodeList : []).map(
  (o) => {
    const workflowNodeId = getValueByKey({
      data: o,
      key: 'workflowNodeId',
    });

    const type = getValueByKey({
      data: o,
      key: 'type',
      convert: convertCollection.number,
    });

    let nodeType = 'intermediate';

    switch (type) {
      case 10: {
        nodeType = 'start';
        break;
      }

      case 30: {
        nodeType = 'end';
        break;
      }

      case 20: {
        nodeType = 'intermediate';
        break;
      }

      default: {
        nodeType = 'intermediate';
      }
    }

    const { viewConfig } = {
      viewConfig: {
        position: {
          x: 0,
          y: 0,
        },
      },
      ...o,
    };

    const result = adjustNode({
      id: workflowNodeId,
      type: nodeType,
      ...viewConfig,
      data: {
        data: o,
        // isNext: '' === workflowNodeId,
        isNext: true,
      },
    });

    return result;
  },
);

const edgeList = (isArray(workflowLineList) ? workflowLineList : []).map(
  (o, index) => {
    const workflowLineId = getValueByKey({
      data: o,
      key: 'workflowLineId',
    });

    const fromId = getValueByKey({
      data: o,
      key: 'fromId',
    });

    const fromPositionName = getValueByKey({
      data: o,
      key: 'fromPositionName',
      convertBuilder: (v) => {
        return toLowerFirst(v);
      },
    });

    const toId = getValueByKey({
      data: o,
      key: 'toId',
    });

    const toPositionName = getValueByKey({
      data: o,
      key: 'toPositionName',
      convertBuilder: (v) => {
        return toLowerFirst(v);
      },
    });

    const type = getValueByKey({
      data: o,
      key: 'name',
      convert: convertCollection.number,
    });

    const positionList = ['top', 'left', 'bottom', 'right'];

    return adjustEdge({
      index,
      id: workflowLineId,
      forward: type === 100,
      source: fromId,
      sourceHandle: checkInCollection(positionList, fromPositionName)
        ? fromPositionName
        : 'bottom',
      target: toId,
      targetHandle: checkInCollection(positionList, toPositionName)
        ? toPositionName
        : 'top',
      data: {
        data: o,
      },
    });
  },
);

@connect(({ schedulingControl }) => ({
  schedulingControl,
}))
class RadioView extends BaseView {
  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      pageTitle: 'Flow \u793A\u4F8B',
      currentCodeTitle: 'FlowView',
      currentCode: codeFlowView,
    };
  }

  establishCardCollectionConfig = () => {
    const { currentCode, currentCodeTitle } = this.state;

    const that = this;

    return {
      list: [
        {
          title: {
            text: '\u793A\u4F8B',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={{ height: '630px' }}>
                  <Flow
                    canEdit={true}
                    nodeNameKey={'name'}
                    // listApproverKey={fieldDataWorkflowNode.listApprover.name}
                    // personnelNameKey={
                    //   fieldDataWorkflowNodeApprover.userRealName.name
                    // }
                    // personnelNameLabel={
                    //   fieldDataWorkflowNodeApprover.userRealName.label
                    // }
                    nodes={[...(isArray(nodeList) ? nodeList : [])]}
                    edges={[...(isArray(edgeList) ? edgeList : [])]}
                  />
                </div>
              ),
            },
          ],
        },
        {
          title: {
            text: '\u4EE3\u7801\u793A\u4F8B',
            subText: mergeArrowText('Code', currentCodeTitle),
          },
          extra: {
            affix: true,
            split: false,
            list: [
              {
                buildType: cardConfig.extraBuildType.flexSelect,
                label: '\u663E\u793A\u6E90\u4EE3\u7801',
                size: 'small',
                defaultValue: 'FlowView',
                style: { width: '520px' },
                list: [
                  {
                    flag: 'BaseView',
                    name: 'BaseView',
                  },
                  {
                    flag: 'FlowView',
                    name: 'FlowView',
                  },
                ],
                dataConvert: convertOptionOrRadioData,
                onChange: (v) => {
                  let code = '';

                  switch (v) {
                    case 'BaseView': {
                      code = codeBaseView;
                      break;
                    }

                    case 'FlowView': {
                      code = codeFlowView;
                      break;
                    }
                  }

                  that.setState({
                    currentCodeTitle: v,
                    currentCode: code,
                  });

                  showSimpleInfoMessage(\`\u5F53\u524D\u663E\u793A \${v} \u6E90\u4EE3\u7801\`);
                },
              },
            ],
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.syntaxHighlighterView,
              fieldData: 'syntaxHighlighter',
              value: currentCode,
              language: 'js',
              innerProps: {
                showLineNumbers: false,
                wrapLines: false,
              },
            },
          ],
        },
      ],
    };
  };
}

export default RadioView;
`,Se=l(97458),Re,je,De=[{workflowId:"1718837194992521216",name:"\u8D77\u59CB\u70B9 - 1718937226831859712",description:"\u6D41\u7A0B\u8D77\u59CB\u8282\u70B9",viewConfigData:'{"position":{"x":-282.37469290539946,"y":-157.68119533736086}}',type:10,workflowNodeId:"1718937226831859712",channel:0,status:100,createOperatorId:"1683472879502626816",createTime:"2023-10-30 18:25:45",updateOperatorId:"1683472879502626816",updateTime:"2023-10-31 15:19:34",key:"1718937226831859712",workflowName:"\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001",statusNote:"\u6B63\u5E38",typeNote:"\u8D77\u59CB\u70B9",listApprover:[],viewConfig:{position:{x:-282.37469290539946,y:-157.68119533736086}}},{workflowId:"1718837194992521216",name:"\u8282\u70B9001",description:"",viewConfigData:'{"position":{"x":-39.61612194131288,"y":37.08743330676117}}',type:20,workflowNodeId:"1719271707115655168",channel:0,status:100,createOperatorId:"1683472879502626816",createTime:"2023-10-31 16:34:52",updateOperatorId:"1683472879502626816",updateTime:"2023-10-31 16:36:26",key:"1719271707115655168",workflowName:"\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001",statusNote:"\u6B63\u5E38",typeNote:"\u8FC7\u7A0B\u70B9",listApprover:[],viewConfig:{position:{x:-39.61612194131288,y:37.08743330676117}}},{workflowId:"1718837194992521216",name:"\u7EC8\u6B62\u70B9 - 1719252735666294784",description:"\u6D41\u7A0B\u7EC8\u6B62\u8282\u70B9",viewConfigData:'{"position":{"x":-263.34096464399295,"y":270.7843015377835}}',type:30,workflowNodeId:"1719252735666294784",channel:0,status:100,createOperatorId:"1683472879502626816",createTime:"2023-10-31 15:19:29",updateOperatorId:"1683472879502626816",updateTime:"2023-10-31 16:36:25",key:"1719252735666294784",workflowName:"\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001",statusNote:"\u6B63\u5E38",typeNote:"\u7EC8\u6B62\u70B9",listApprover:[],viewConfig:{position:{x:-263.34096464399295,y:270.7843015377835}}}],He=[{workflowId:"1718837194992521216",title:"",fromId:"1718937226831859712",fromPosition:400,toId:"1719271707115655168",toPosition:100,type:100,description:"",workflowLineId:"1719252862103588864",channel:0,status:100,createOperatorId:"1683472879502626816",createTime:"2023-10-31 15:19:59",updateOperatorId:"1683472879502626816",updateTime:"2023-10-31 16:35:07",key:"1719252862103588864",workflowName:"\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001",fromPositionName:"Bottom",fromPositionNote:"\u4E0B\u90E8",toPositionName:"Top",toPositionNote:"\u4E0A\u90E8",typeNote:"\u524D\u8FDB",statusNote:"\u6B63\u5E38",fromName:"\u8D77\u59CB\u70B9",toName:"\u8282\u70B9001"},{workflowId:"1718837194992521216",title:"",fromId:"1719271707115655168",fromPosition:400,toId:"1719252735666294784",toPosition:100,type:100,description:"",workflowLineId:"1719272086574338048",channel:0,status:100,createOperatorId:"1683472879502626816",createTime:"2023-10-31 16:36:22",updateOperatorId:"1683472879502626816",updateTime:"2023-10-31 16:36:22",key:"1719272086574338048",workflowName:"\u8303\u56F4\u5185\u5BA1\u6279\u6D41\u7A0B001",fromPositionName:"Bottom",fromPositionNote:"\u4E0B\u90E8",toPositionName:"Top",toPositionNote:"\u4E0A\u90E8",typeNote:"\u524D\u8FDB",statusNote:"\u6B63\u5E38",fromName:"\u8282\u70B9001",toName:"\u7EC8\u6B62\u70B9"}];function yt(t,o){var n=t.flag,r=t.name;return _objectSpread({label:r,value:n,disabled:!1},t)}var Ve=((0,a.kJL)(De)?De:[]).map(function(t){var o=(0,a.s4e)({data:t,key:"workflowNodeId"}),n=(0,a.s4e)({data:t,key:"type",convert:a.$07.number}),r="intermediate";switch(n){case 10:{r="start";break}case 30:{r="end";break}case 20:{r="intermediate";break}default:r="intermediate"}var i=T()({viewConfig:{position:{x:0,y:0}}},t),u=i.viewConfig,c=lt(T()(T()({id:o,type:r},u),{},{data:{data:t,isNext:!0}}));return c}),Fe=((0,a.kJL)(He)?He:[]).map(function(t,o){var n=(0,a.s4e)({data:t,key:"workflowLineId"}),r=(0,a.s4e)({data:t,key:"fromId"}),i=(0,a.s4e)({data:t,key:"fromPositionName",convertBuilder:function(f){return(0,a.ZOy)(f)}}),u=(0,a.s4e)({data:t,key:"toId"}),c=(0,a.s4e)({data:t,key:"toPositionName",convertBuilder:function(f){return(0,a.ZOy)(f)}}),p=(0,a.s4e)({data:t,key:"name",convert:a.$07.number}),y=["top","left","bottom","right"];return st({index:o,id:n,forward:p===100,source:r,sourceHandle:(0,a.f9X)(y,i)?i:"bottom",target:u,targetHandle:(0,a.f9X)(y,c)?c:"top",data:{data:t}})}),mt=(Re=(0,se.$j)(function(t){var o=t.schedulingControl;return{schedulingControl:o}}),Re(je=function(t){ne()(n,t);var o=re()(n);function n(r){var i;return q()(this,n),i=o.call(this,r),ie()(Y()(i),"establishCardCollectionConfig",function(){var u=i.state,c=u.currentCode,p=u.currentCodeTitle,y=Y()(i);return{list:[{title:{text:"\u793A\u4F8B"},items:[{lg:24,type:de.ul.contentItemType.component,component:(0,Se.jsx)("div",{style:{height:"630px"},children:(0,Se.jsx)(Te,{canEdit:!0,nodeNameKey:"name",nodes:z()((0,a.kJL)(Ve)?Ve:[]),edges:z()((0,a.kJL)(Fe)?Fe:[])})})}]},{title:{text:"\u4EE3\u7801\u793A\u4F8B",subText:(0,a.cpJ)("Code",p)},extra:{affix:!0,split:!1,list:[{buildType:de.ul.extraBuildType.flexSelect,label:"\u663E\u793A\u6E90\u4EE3\u7801",size:"small",defaultValue:"FlowView",style:{width:"520px"},list:[{flag:"BaseView",name:"BaseView"},{flag:"FlowView",name:"FlowView"}],dataConvert:d.hy,onChange:function(f){var E="";switch(f){case"BaseView":{E=ut.T;break}case"FlowView":{E=Ae;break}}y.setState({currentCodeTitle:f,currentCode:E}),(0,a.WWi)("\u5F53\u524D\u663E\u793A ".concat(f," \u6E90\u4EE3\u7801"))}}]},items:[{lg:24,type:de.ul.contentItemType.syntaxHighlighterView,fieldData:"syntaxHighlighter",value:c,language:"js",innerProps:{showLineNumbers:!1,wrapLines:!1}}]}]}}),i.state=T()(T()({},i.state),{},{pageTitle:"Flow \u793A\u4F8B",currentCodeTitle:"FlowView",currentCode:Ae}),i}return J()(n)}(ct.P))||je),pt=mt}}]);
