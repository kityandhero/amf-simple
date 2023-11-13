(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[13],{41826:function(Q,U,t){"use strict";t.d(U,{Iq:function(){return J},Lw:function(){return H},O9:function(){return u},Wk:function(){return N},X5:function(){return m},i2:function(){return l},mG:function(){return z},zC:function(){return F}});var $=t(10604),p=t.n($),j=t(43410),x=t.n(j),A=t(56015),v=t(92870),V=t(96294);function l(g){var C=g.target,w=g.handleData,P=w===void 0?{}:w,D=g.successCallback,M=g.successMessage,s=M===void 0?null:M;(0,v.ND)({api:"simple/singleListTree",params:{},target:C,handleData:P,successCallback:D,successMessage:s,showProcessing:!1})}function H(g){var C=g.target,w=g.handleData,P=g.successCallback,D=g.successMessage,M=D===void 0?null:D;(0,v.ND)({api:"simple/setOnline",params:{simpleId:(0,A.s4e)({data:w,key:V.Ng.simpleId.name})},target:C,handleData:w,successCallback:P,successMessage:M})}function F(g){var C=g.target,w=g.handleData,P=g.successCallback,D=g.successMessage,M=D===void 0?null:D;(0,v.ND)({api:"simple/setOffline",params:{simpleId:(0,A.s4e)({data:w,key:V.Ng.simpleId.name})},target:C,handleData:w,successCallback:P,successMessage:M})}function N(g){return B.apply(this,arguments)}function B(){return B=x()(p()().mark(function g(C){var w,P,D,M,s;return p()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:w=C.target,P=C.handleData,D=C.successCallback,M=C.successMessage,s=M===void 0?null:M,(0,v.ND)({api:"simple/refreshCache",params:{simpleId:(0,A.s4e)({data:P,key:V.Ng.simpleId.name})},target:w,handleData:P,successCallback:D,successMessage:s});case 2:case"end":return W.stop()}},g)})),B.apply(this,arguments)}function J(g){var C=g.target,w=g.handleData,P=g.successCallback,D=g.successMessage;(0,v.ND)({api:"simple/setMediaCollectionSort",params:{simpleId:(0,A.s4e)({data:w,key:V.Ng.simpleId.name}),ids:(0,A.s4e)({data:w,key:"ids"})},target:C,handleData:w,successCallback:P,successMessage:D})}function u(g){return T.apply(this,arguments)}function T(){return T=x()(p()().mark(function g(C){var w,P,D,M;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:w=C.target,P=C.handleData,D=C.successCallback,M=C.successMessage,(0,v.ND)({api:"simple/removeMediaItem",params:{simpleId:(0,A.s4e)({data:P,key:V.Ng.simpleId.name}),id:(0,A.s4e)({data:P,key:V.js.id.name})},target:w,handleData:P,successCallback:D,successMessage:M});case 2:case"end":return y.stop()}},g)})),T.apply(this,arguments)}function m(g){return o.apply(this,arguments)}function o(){return o=x()(p()().mark(function g(C){var w,P,D,M;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:w=C.target,P=C.handleData,D=C.successCallback,M=C.successMessage,(0,v.ND)({api:"simple/addImage",params:{simpleId:(0,A.s4e)({data:P,key:V.Ng.simpleId.name}),url:P.url||""},target:w,handleData:P,successCallback:D,successMessage:M});case 2:case"end":return y.stop()}},g)})),o.apply(this,arguments)}function f(g){return _.apply(this,arguments)}function _(){return _=x()(p()().mark(function g(C){var w,P,D,M;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:w=C.target,P=C.handleData,D=C.successCallback,M=C.successMessage,(0,v.ND)({api:"simple/removeImage",params:{simpleId:(0,A.s4e)({data:P,key:V.Ng.simpleId.name})},target:w,handleData:P,successCallback:D,successMessage:M});case 2:case"end":return y.stop()}},g)})),_.apply(this,arguments)}function z(g){return O.apply(this,arguments)}function O(){return O=x()(p()().mark(function g(C){var w,P,D,M;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:w=C.target,P=C.handleData,D=C.successCallback,M=C.successMessage,(0,v.tA)({title:"\u79FB\u9664\u56FE\u7247",content:"\u5373\u5C06\u79FB\u9664\u56FE\u7247\uFF0C\u786E\u5B9A\u5417\uFF1F",target:w,handleData:P,successCallback:D,okAction:function(r){var X=r.target,ae=r.handleData,re=r.successCallback;f({target:X,handleData:ae,successCallback:re,successMessage:M})}});case 2:case"end":return y.stop()}},g)})),O.apply(this,arguments)}},62915:function(Q,U,t){"use strict";t.d(U,{T:function(){return $}});var $=`import { DataSingleView } from 'antd-management-fast-framework';

const { DataCore } = DataSingleView;

class BaseView extends DataCore {
  // \u7EC4\u4EF6\u521B\u5EFA\u540E\u81EA\u52A8\u8BF7\u6C42 state.loadApiPath \u914D\u7F6E\u7684\u63A5\u53E3\u6570\u636E
  loadRemoteRequestAfterMount = false;

  // \u5C55\u793A\u7EC4\u5EFA\u540E\u8FDB\u884C\u6570\u636E\u91CD\u7F6E
  resetDataAfterLoad = false;
}

export { BaseView };
`},56401:function(Q,U,t){"use strict";var $=t(86832),p=t.n($),j=t(46995),x=t.n(j),A=t(3782),v=t.n(A),V=t(25471),l=t.n(V),H=t(56507),F=t.n(H),N=t(42314),B=t.n(N),J=t(96082),u=t.n(J),T=t(73581),m=t.n(T),o=t(79301),f=t(74912),_=t(40435),z=t(10223),O=t(25864),g=t(56015),C=t(92870),w=t(92637),P=t(77475),D=t(96294),M=t(69015),s=t(21902),y=t(97458),W=o.Z.Text,r=P.KV.MultiPageSelectDrawer,X=function(ae){B()(Y,ae);var re=u()(Y);function Y(ie,le){var I;return l()(this,Y),I=re.call(this,ie,le),m()(F()(I),"showCallProcess",!0),m()(F()(I),"reloadWhenShow",!0),m()(F()(I),"getStatusBadge",function(k){var L="default";switch(k){case D.zo.online:{L="processing";break}case D.zo.offline:{L="warning";break}default:{L="default";break}}return L}),m()(F()(I),"establishSearchCardConfig",function(){return{list:[{lg:12,type:C.fs.contentItemType.input,fieldData:D.Ng.title},{lg:8,type:C.fs.contentItemType.component,component:I.buildSearchCardButtonCore()}]}}),m()(F()(I),"establishDataContainerExtraActionCollectionConfig",function(){var k=I.state.listViewMode;return[{buildType:C.ug.dataContainerExtraActionBuildType.flexSelect,label:"\u663E\u793A\u6A21\u5F0F",size:"small",defaultValue:k,style:{width:"190px"},list:[{flag:C.ug.viewMode.table,name:"\u8868\u683C\u89C6\u56FE",availability:g.dvr.yes},{flag:C.ug.viewMode.list,name:"\u5217\u8868\u89C6\u56FE",availability:g.dvr.yes},{flag:C.ug.viewMode.cardCollectionView,name:"\u5361\u7247\u89C6\u56FE",availability:g.dvr.yes},{flag:C.ug.viewMode.customView,name:"\u81EA\u5B9A\u4E49\u89C6\u56FE",availability:g.dvr.yes}],dataConvert:w.hy,onChange:function(Z,G){console.log({v:Z,option:G}),I.setState({listViewMode:Z})}}]}),m()(F()(I),"buildSelectNotificationDescription",function(k){if((0,g.kJL)(k)){var L=[],Z=x()(k),G;try{for(Z.s();!(G=Z.n()).done;){var q=G.value,ee=q.title;L.push(ee)}}catch(oe){Z.e(oe)}finally{Z.f()}return L.length>0?"\u5DF2\u9009\u62E9: ".concat(L.join(",")):""}else{var ue=k.title;return"\u5DF2\u9009\u62E9: ".concat(ue)}}),m()(F()(I),"renderPresetListViewItemInner",function(k,L){var Z=(0,g.s4e)({data:k,key:D.Ng.simpleId.name}),G=(0,g.s4e)({data:k,key:D.Ng.image.name}),q=(0,g.s4e)({data:k,key:D.Ng.title.name}),ee=(0,g.s4e)({data:k,key:D.Ng.createTime.name,format:g.JrP.datetime});return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(f.Z.Item.Meta,{avatar:(0,g.aMH)(G)?(0,y.jsx)(_.C,{icon:w.xM.user()}):(0,y.jsx)(_.C,{src:G}),title:(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(W,{children:q})}),description:(0,y.jsxs)(z.Z,{split:(0,y.jsx)(O.Z,{type:"vertical"}),children:[(0,y.jsx)(w._w,{textPrefix:D.Ng.simpleId.label,separator:": ",text:(0,y.jsx)(W,{copyable:!0,children:Z})}),(0,y.jsx)(w._w,{textPrefix:D.Ng.createTime.label,separator:": ",text:ee})]})})})}),m()(F()(I),"getColumnWrapper",function(){return[{dataTarget:D.Ng.title,width:360,align:"left",showRichFacade:!0,emptyValue:"--"},{dataTarget:D.Ng.sort,width:100,showRichFacade:!0,emptyValue:"--"},{dataTarget:D.Ng.renderType,width:120,showRichFacade:!0,emptyValue:"--",facadeConfig:{color:M.gY.price},formatValue:function(L){return(0,s.naL)({value:L})}},{dataTarget:D.Ng.status,width:100,emptyValue:"--",showRichFacade:!0,facadeMode:C.T_.badge,facadeConfigBuilder:function(L){return{status:I.getStatusBadge(L),text:(0,s.vkd)({value:L})}}},{dataTarget:D.Ng.simpleId,width:140,showRichFacade:!0,canCopy:!0},{dataTarget:D.Ng.createTime,width:160,showRichFacade:!0,facadeMode:C.T_.datetime,emptyValue:"--"},C.Gf]}),m()(F()(I),"renderOverlayContent",function(){var k=I.state.sourceCode;return(0,y.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,y.jsx)(w.d3,{language:"js",value:k,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),I.state=p()(p()({},I.state),{},{pageTitle:"\u6570\u636E\u5206\u9875\u9009\u62E9\u5217\u8868",loadApiPath:"simple/singleList",listViewMode:C.ug.viewMode.table,showSelect:!0,tableScrollX:1220,sourceCode:"",overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),I}return v()(Y)}(r);U.Z=X},69090:function(Q,U,t){"use strict";t.d(U,{b:function(){return f}});var $=t(86832),p=t.n($),j=t(25471),x=t.n(j),A=t(3782),v=t.n(A),V=t(42314),l=t.n(V),H=t(96082),F=t.n(H),N=t(85388),B=t(77475),J=t(56401),u=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleMultiPageSelectDrawer from '../BaseSimpleMultiPageSelectDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '5d72df79921e438fa86762e52929fce1';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleMultiPageSingleSelectDrawer extends BaseSimpleMultiPageSelectDrawer {
  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleMultiPageSingleSelectDrawer };
`,T,m,o="5d72df79921e438fa86762e52929fce1",f=(T=(0,N.$j)(function(_){var z=_.simple,O=_.schedulingControl;return{simple:z,schedulingControl:O}}),T(m=function(_){l()(O,_);var z=F()(O);function O(g){var C;return x()(this,O),C=z.call(this,g,o),C.state=p()(p()({},C.state),{},{sourceCode:u}),C}return v()(O,null,[{key:"open",value:function(){B.Qs.open(o)}}]),O}(J.Z))||m)},41488:function(Q,U,t){"use strict";t.d(U,{P:function(){return T}});var $=t(3782),p=t.n($),j=t(25471),x=t.n(j),A=t(56507),v=t.n(A),V=t(42314),l=t.n(V),H=t(96082),F=t.n(H),N=t(73581),B=t.n(N),J=t(77475),u=J.zg.DataCore,T=function(m){l()(f,m);var o=F()(f);function f(){var _;x()(this,f);for(var z=arguments.length,O=new Array(z),g=0;g<z;g++)O[g]=arguments[g];return _=o.call.apply(o,[this].concat(O)),B()(v()(_),"loadRemoteRequestAfterMount",!1),B()(v()(_),"resetDataAfterLoad",!1),_}return p()(f)}(u)},43018:function(Q,U,t){"use strict";t.r(U),t.d(U,{default:function(){return On}});var $=t(86832),p=t.n($),j=t(3782),x=t.n(j),A=t(25471),v=t.n(A),V=t(56507),l=t.n(V),H=t(42314),F=t.n(H),N=t(96082),B=t.n(N),J=t(73581),u=t.n(J),T=t(85388),m=t(56015),o=t(92870),f=t(92637),_=t(77475),z=t(46995),O=t.n(z),g=t(79301),C=t(74912),w=t(40435),P=t(10223),D=t(25864),M=t(41826),s=t(96294),y=t(69015),W=t(21902),r=t(97458),X=g.Z.Text,ae=_.KV.MultiPageDrawer,re=function(i){F()(e,i);var c=B()(e);function e(h,n){var a;return v()(this,e),a=c.call(this,h,n),u()(l()(a),"showCallProcess",!0),u()(l()(a),"reloadWhenShow",!0),u()(l()(a),"refreshCache",function(d){(0,M.Wk)({target:l()(a),handleData:d})}),u()(l()(a),"getStatusBadge",function(d){var S="default";switch(d){case s.zo.online:{S="processing";break}case s.zo.offline:{S="warning";break}default:{S="default";break}}return S}),u()(l()(a),"handleOtherOnResetTargetSearch",function(){(0,m.qzd)("handleOtherOnResetTargetSearch")}),u()(l()(a),"establishSearchCardConfig",function(){return{list:[{lg:9,type:o.fs.contentItemType.input,fieldData:s.Ng.title},{lg:6,type:o.fs.contentItemType.component,component:a.buildSearchCardButtonCore()}]}}),u()(l()(a),"establishDataContainerExtraActionCollectionConfig",function(){var d=a.state.listViewMode;return[{buildType:o.ug.dataContainerExtraActionBuildType.flexSelect,label:"\u663E\u793A\u6A21\u5F0F",size:"small",defaultValue:d,style:{width:"190px"},list:[{flag:o.ug.viewMode.table,name:"\u8868\u683C\u89C6\u56FE",availability:m.dvr.yes},{flag:o.ug.viewMode.list,name:"\u5217\u8868\u89C6\u56FE",availability:m.dvr.yes},{flag:o.ug.viewMode.cardCollectionView,name:"\u5361\u7247\u89C6\u56FE",availability:m.dvr.yes},{flag:o.ug.viewMode.customView,name:"\u81EA\u5B9A\u4E49\u89C6\u56FE",availability:m.dvr.yes}],dataConvert:f.hy,onChange:function(b,E){console.log({v:b,option:E}),a.setState({listViewMode:b})}}]}),u()(l()(a),"buildSelectNotificationDescription",function(d){if((0,m.kJL)(d)){var S=[],b=O()(d),E;try{for(b.s();!(E=b.n()).done;){var R=E.value,K=R.title;S.push(K)}}catch(se){b.e(se)}finally{b.f()}return S.length>0?"\u5DF2\u9009\u62E9: ".concat(S.join(",")):""}else{var te=d.title;return"\u5DF2\u9009\u62E9: ".concat(te)}}),u()(l()(a),"renderPresetListViewItemInner",function(d,S){var b=(0,m.s4e)({data:d,key:s.Ng.simpleId.name}),E=(0,m.s4e)({data:d,key:s.Ng.image.name}),R=(0,m.s4e)({data:d,key:s.Ng.title.name}),K=(0,m.s4e)({data:d,key:s.Ng.createTime.name,format:m.JrP.datetime});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(C.Z.Item.Meta,{avatar:(0,m.aMH)(E)?(0,r.jsx)(w.C,{icon:f.xM.user()}):(0,r.jsx)(w.C,{src:E}),title:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(X,{children:R})}),description:(0,r.jsxs)(P.Z,{split:(0,r.jsx)(D.Z,{type:"vertical"}),children:[(0,r.jsx)(f._w,{textPrefix:s.Ng.simpleId.label,separator:": ",text:(0,r.jsx)(X,{copyable:!0,children:b})}),(0,r.jsx)(f._w,{textPrefix:s.Ng.createTime.label,separator:": ",text:K})]})})})}),u()(l()(a),"establishListItemDropdownConfig",function(d){return{size:"small",text:"\u5237\u65B0",placement:"topRight",icon:f.xM.reload(),handleButtonClick:function(b){var E=b.handleData;a.refreshCache(E)},handleData:d,confirm:!0,title:"\u5C06\u8981\u5237\u65B0\u7F13\u5B58\uFF0C\u786E\u5B9A\u5417\uFF1F"}}),u()(l()(a),"getColumnWrapper",function(){return[{dataTarget:s.Ng.title,width:360,align:"left",showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.sort,width:100,showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.renderType,width:120,showRichFacade:!0,emptyValue:"--",facadeConfig:{color:y.gY.price},formatValue:function(S){return(0,W.naL)({value:S})}},{dataTarget:s.Ng.status,width:100,emptyValue:"--",showRichFacade:!0,facadeMode:o.T_.badge,facadeConfigBuilder:function(S){return{status:a.getStatusBadge(S),text:(0,W.vkd)({value:S})}}},{dataTarget:s.Ng.simpleId,width:140,showRichFacade:!0,canCopy:!0},{dataTarget:s.Ng.createTime,width:160,showRichFacade:!0,facadeMode:o.T_.datetime,emptyValue:"--"},o.Gf]}),u()(l()(a),"renderOverlayContent",function(){var d=a.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(f.d3,{language:"js",value:d,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),a.state=p()(p()({},a.state),{},{pageTitle:"\u6570\u636E\u5206\u9875\u5217\u8868",loadApiPath:"simple/pageList",listViewMode:o.ug.viewMode.table,showSelect:!0,tableScrollX:1220,sourceCode:""}),a}return x()(e)}(ae),Y=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import { BaseSimpleMultiPageDrawer } from '../BaseSimpleMultiPageDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '9c76f89e92ca47cf9fd44349e8a730e3';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleMultiPageDrawer extends BaseSimpleMultiPageDrawer {
  // \u6307\u5B9A\u4F7F\u7528\u9009\u62E9\u786E\u8BA4\u6A21\u5F0F, \u9ED8\u8BA4 false, \u4E0D\u4F7F\u7528\u4E8C\u6B21\u9009\u62E9\u786E\u8BA4\u65F6\u53EF\u4E0D\u7528\u7279\u6B8A\u6307\u5B9A
  confirmSelect = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleMultiPageDrawer };
`,ie,le,I="9c76f89e92ca47cf9fd44349e8a730e3",k=(ie=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),ie(le=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,I),u()(l()(n),"confirmSelect",!0),n.state=p()(p()({},n.state),{},{sourceCode:Y}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(I)}}]),e}(re))||le),L=`import { Avatar, Divider, List, Space, Typography } from 'antd';

import {
  checkStringIsNullOrWhiteSpace,
  formatCollection,
  getValueByKey,
  isArray,
  whetherNumber,
} from 'easy-soft-utility';

import {
  columnFacadeMode,
  columnPlaceholder,
  listViewConfig,
  searchCardConfig,
} from 'antd-management-fast-common';
import {
  ColorText,
  convertOptionOrRadioData,
  iconBuilder,
  SyntaxHighlighter,
} from 'antd-management-fast-component';
import { DataMultiPageView } from 'antd-management-fast-framework';

import { fieldData, statusCollection } from '../../../../../businessData/data';
import { colorCollection } from '../../../../../customConfig';
import {
  getSimpleRenderTypeName,
  getSimpleStatusName,
} from '../../../../../customSpecialComponents';

const { Text } = Typography;
const { MultiPageSelectDrawer } = DataMultiPageView;

// \u7EC4\u4EF6\u57FA\u7C7B, \u4EC5\u4E3A\u4EE3\u7801\u590D\u7528\u6027\u8BBE\u8BA1, \u5177\u4F53\u4F7F\u7528\u65F6\u8BF7\u81EA\u884C\u8003\u8651
class BaseSimpleMultiPageSelectDrawer extends MultiPageSelectDrawer {
  // \u5728\u63A7\u5236\u53F0\u663E\u793A\u7EC4\u5EFA\u5185\u8C03\u7528\u5E8F\u5217, \u4EC5\u4E3A\u8FDB\u884C\u5F00\u53D1\u8F85\u52A9
  showCallProcess = true;

  // \u663E\u793A\u65F6\u662F\u5426\u81EA\u52A8\u5237\u65B0\u6570\u636E;
  reloadWhenShow = true;

  constructor(properties, visibleFlag) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      pageTitle: '\u6570\u636E\u5206\u9875\u9009\u62E9\u5217\u8868',
      // \u9875\u9762\u52A0\u8F7D\u65F6\u81EA\u52A8\u52A0\u8F7D\u7684\u8FDC\u7A0B\u8BF7\u6C42
      loadApiPath: 'simple/singleList',
      // \u8BBE\u7F6E\u9ED8\u8BA4\u8BD5\u56FE\u6A21\u5F0F\u4E3A table
      listViewMode: listViewConfig.viewMode.table,
      showSelect: true,
      // table \u663E\u793A\u6A21\u5F0F\u884C\u957F\u5EA6, \u5408\u7406\u8BBE\u7F6E\u53EF\u4EE5\u63D0\u5347\u7F8E\u89C2\u4EE5\u53CA\u7528\u6237\u4F53\u9A8C\uFF0C\u8D85\u51FA\u53EF\u89C1\u533A\u57DF\u5C06\u663E\u793A\u6EDA\u52A8\u6761
      tableScrollX: 1220,
      sourceCode: '',
      overlayButtonOpenText: '\u6253\u5F00\u6E90\u4EE3\u7801',
      overlayButtonCloseText: '\u5173\u95ED\u6E90\u4EE3\u7801',
    };
  }

  getStatusBadge = (v) => {
    let result = 'default';

    switch (v) {
      case statusCollection.online: {
        result = 'processing';
        break;
      }

      case statusCollection.offline: {
        result = 'warning';
        break;
      }

      default: {
        result = 'default';
        break;
      }
    }

    return result;
  };

  // \u914D\u7F6E\u641C\u7D22\u6846
  establishSearchCardConfig = () => {
    return {
      list: [
        {
          lg: 12,
          type: searchCardConfig.contentItemType.input,
          fieldData: fieldData.title,
        },
        {
          lg: 8,
          type: searchCardConfig.contentItemType.component,
          component: this.buildSearchCardButtonCore(),
        },
      ],
    };
  };

  // \u914D\u7F6E\u52A8\u4F5C\u96C6\u5408
  establishDataContainerExtraActionCollectionConfig = () => {
    const { listViewMode } = this.state;

    return [
      {
        buildType: listViewConfig.dataContainerExtraActionBuildType.flexSelect,
        label: '\u663E\u793A\u6A21\u5F0F',
        size: 'small',
        defaultValue: listViewMode,
        style: { width: '190px' },
        list: [
          {
            flag: listViewConfig.viewMode.table,
            name: '\u8868\u683C\u89C6\u56FE',
            availability: whetherNumber.yes,
          },
          {
            flag: listViewConfig.viewMode.list,
            name: '\u5217\u8868\u89C6\u56FE',
            availability: whetherNumber.yes,
          },
          {
            flag: listViewConfig.viewMode.cardCollectionView,
            name: '\u5361\u7247\u89C6\u56FE',
            availability: whetherNumber.yes,
          },
          {
            flag: listViewConfig.viewMode.customView,
            name: '\u81EA\u5B9A\u4E49\u89C6\u56FE',
            availability: whetherNumber.yes,
          },
        ],
        dataConvert: convertOptionOrRadioData,
        onChange: (v, option) => {
          console.log({ v, option });
          this.setState({ listViewMode: v });
        },
      },
    ];
  };

  // \u6784\u5EFA\u901A\u77E5\u6587\u672C, \u4EC5\u591A\u9009\u6A21\u5F0F\u6709\u6548, \u5355\u9009\u65F6\u4E0D\u4F1A\u89E6\u53D1\u901A\u77E5
  buildSelectNotificationDescription = (o) => {
    if (isArray(o)) {
      let list = [];

      for (const item of o) {
        const { title } = item;
        list.push(title);
      }

      if (list.length > 0) {
        return \`\u5DF2\u9009\u62E9: \${list.join(',')}\`;
      }

      return '';
    } else {
      const { title } = o;

      return \`\u5DF2\u9009\u62E9: \${title}\`;
    }
  };

  // \u914D\u7F6E\u5217\u8868\u663E\u793A\u6A21\u5F0F\u6784\u5EFA\u903B\u8F91
  // eslint-disable-next-line no-unused-vars
  renderPresetListViewItemInner = (item, index) => {
    const simpleId = getValueByKey({
      data: item,
      key: fieldData.simpleId.name,
    });

    const image = getValueByKey({
      data: item,
      key: fieldData.image.name,
    });

    const title = getValueByKey({
      data: item,
      key: fieldData.title.name,
    });

    const createTime = getValueByKey({
      data: item,
      key: fieldData.createTime.name,
      format: formatCollection.datetime,
    });

    return (
      <>
        <List.Item.Meta
          avatar={
            checkStringIsNullOrWhiteSpace(image) ? (
              <Avatar icon={iconBuilder.user()} />
            ) : (
              <Avatar src={image} />
            )
          }
          title={
            <>
              <Text>{title}</Text>
            </>
          }
          description={
            <Space split={<Divider type="vertical" />}>
              <ColorText
                textPrefix={fieldData.simpleId.label}
                separator=": "
                text={<Text copyable>{simpleId}</Text>}
              />

              <ColorText
                textPrefix={fieldData.createTime.label}
                separator=": "
                text={createTime}
              />
            </Space>
          }
        />
      </>
    );
  };

  // \u914D\u7F6E table \u663E\u793A\u6A21\u5F0F\u6570\u636E\u5217
  getColumnWrapper = () => [
    {
      dataTarget: fieldData.title,
      width: 360,
      align: 'left',
      showRichFacade: true,
      emptyValue: '--',
    },
    {
      dataTarget: fieldData.sort,
      width: 100,
      showRichFacade: true,
      emptyValue: '--',
    },
    {
      dataTarget: fieldData.renderType,
      width: 120,
      showRichFacade: true,
      emptyValue: '--',
      facadeConfig: {
        color: colorCollection.price,
      },
      formatValue: (value) => {
        return getSimpleRenderTypeName({
          value: value,
        });
      },
    },
    {
      dataTarget: fieldData.status,
      width: 100,
      emptyValue: '--',
      showRichFacade: true,
      facadeMode: columnFacadeMode.badge,
      facadeConfigBuilder: (value) => {
        return {
          status: this.getStatusBadge(value),
          text: getSimpleStatusName({
            value: value,
          }),
        };
      },
    },
    {
      dataTarget: fieldData.simpleId,
      width: 140,
      showRichFacade: true,
      canCopy: true,
    },
    {
      dataTarget: fieldData.createTime,
      width: 160,
      showRichFacade: true,
      facadeMode: columnFacadeMode.datetime,
      emptyValue: '--',
    },
    // \u7AD9\u4F4D\u7B26, \u663E\u793A\u4E3A "--"
    columnPlaceholder,
  ];

  renderOverlayContent = () => {
    const { sourceCode } = this.state;

    return (
      <div style={{ width: '90%', height: '90%' }}>
        <SyntaxHighlighter
          language="js"
          value={sourceCode}
          other={{ showLineNumbers: false, wrapLines: false }}
          style={{ height: '100%' }}
        />
      </div>
    );
  };
}

export default BaseSimpleMultiPageSelectDrawer;
`,Z=t(56401),G=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleMultiPageSelectDrawer from '../BaseSimpleMultiPageSelectDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '4aafaf9a78824182a4f507dc4e983e34';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleMultiPageConfirmSelectDrawer extends BaseSimpleMultiPageSelectDrawer {
  // \u6307\u5B9A\u4F7F\u7528\u9009\u62E9\u786E\u8BA4\u6A21\u5F0F, \u9ED8\u8BA4 false, \u4E0D\u4F7F\u7528\u4E8C\u6B21\u9009\u62E9\u786E\u8BA4\u65F6\u53EF\u4E0D\u7528\u7279\u6B8A\u6307\u5B9A
  confirmSelect = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleMultiPageConfirmSelectDrawer };
`,q,ee,ue="4aafaf9a78824182a4f507dc4e983e34",oe=(q=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),q(ee=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,ue),u()(l()(n),"confirmSelect",!0),n.state=p()(p()({},n.state),{},{sourceCode:G}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(ue)}}]),e}(Z.Z))||ee),pn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleMultiPageSelectDrawer from '../BaseSimpleMultiPageSelectDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '771db54fe1f84b22b8c5ab869d67df21';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleMultiPageMultiSelectDrawer extends BaseSimpleMultiPageSelectDrawer {
  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleMultiPageMultiSelectDrawer };
`,de,ge,pe="771db54fe1f84b22b8c5ab869d67df21",fe=(de=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),de(ge=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,pe),n.state=p()(p()({},n.state),{},{sourceCode:pn}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(pe)}}]),e}(Z.Z))||ge),Se=t(69090),ce=t(64594),fn=`import { Checkbox } from 'antd';

import { connect } from 'easy-soft-dva';

import { cardConfig, drawerConfig } from 'antd-management-fast-common';
import { iconBuilder, SyntaxHighlighter } from 'antd-management-fast-component';
import {
  DataDrawer,
  switchControlAssist,
} from 'antd-management-fast-framework';

import { fieldData } from '../../../businessData/data';

import { code } from './codeSource';

const { BaseAddDrawer } = DataDrawer;

const visibleFlag = '35f84a341e49444a994b61add41acf9b';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleAddDrawer extends BaseAddDrawer {
  // showCallProcess = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      submitApiPath: 'simple/addBasicInfo',
      sourceCode: code,
      overlayButtonOpenText: '\u6253\u5F00\u6E90\u4EE3\u7801',
      overlayButtonCloseText: '\u5173\u95ED\u6E90\u4EE3\u7801',
    };
  }

  subjoinDataOnAfterOK = () => {
    return {
      message: '\u8FD9\u662F\u4E00\u4E2A\u589E\u8865\u6570\u636E, \u5C06\u9644\u52A0\u5230 afterOk \u65B9\u6CD5\u4E2D\u8FDB\u884C\u8C03\u7528',
    };
  };

  buildBottomBarInnerLeftItemConfigList = () => {
    return [
      {
        buildType: drawerConfig.bottomBarBuildType.component,
        component: (
          <Checkbox style={{ marginLeft: '4px' }}>\u4FDD\u5B58\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875</Checkbox>
        ),
      },
    ];
  };

  renderPresetTitle = () => {
    return '\u65B0\u589E\u4FE1\u606F';
  };

  establishCardCollectionConfig = () => {
    return {
      list: [
        {
          title: {
            icon: iconBuilder.contacts(),
            text: '\u57FA\u672C\u4FE1\u606F',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.input,
              fieldData: fieldData.title,
              require: true,
            },
          ],
          instruction: {
            title: '\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E',
            showDivider: false,
            showNumber: true,
            list: [
              {
                text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1',
              },
              {
                text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2',
              },
            ],
          },
        },
        {
          title: {
            icon: iconBuilder.contacts(),
            text: '\u7B80\u4ECB\u63CF\u8FF0',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.textarea,
              fieldData: fieldData.description,
            },
          ],
          instruction: [
            {
              title: '\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E1',
              showDivider: false,
              showNumber: true,
              list: [
                {
                  text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1',
                },
                {
                  text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2',
                },
              ],
            },
            {
              title: '\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E2',
              showDivider: false,
              showNumber: true,
              list: [
                {
                  text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1',
                },
                {
                  text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2',
                },
              ],
            },
          ],
        },
        {
          title: {
            icon: iconBuilder.contacts(),
            text: '\u5176\u4ED6\u4FE1\u606F',
          },
          items: [
            {
              type: cardConfig.contentItemType.nowTime,
            },
          ],
        },
      ],
    };
  };

  establishHelpConfig = () => {
    return {
      title: '\u64CD\u4F5C\u63D0\u793A',
      list: [
        {
          text: '\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002',
        },
        {
          text: '\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002',
        },
      ],
    };
  };

  renderOverlayContent = () => {
    const { sourceCode } = this.state;

    return (
      <div style={{ width: '90%', height: '90%' }}>
        <SyntaxHighlighter
          language="js"
          value={sourceCode}
          other={{ showLineNumbers: false, wrapLines: false }}
          style={{ height: '100%' }}
        />
      </div>
    );
  };
}

export { SimpleAddDrawer };
`,Ce,he,Sn=_.v3.BaseAddDrawer,De="35f84a341e49444a994b61add41acf9b",we=(Ce=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),Ce(he=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,De),u()(l()(n),"subjoinDataOnAfterOK",function(){return{message:"\u8FD9\u662F\u4E00\u4E2A\u589E\u8865\u6570\u636E, \u5C06\u9644\u52A0\u5230 afterOk \u65B9\u6CD5\u4E2D\u8FDB\u884C\u8C03\u7528"}}),u()(l()(n),"buildBottomBarInnerLeftItemConfigList",function(){return[{buildType:o.xE.bottomBarBuildType.component,component:(0,r.jsx)(ce.Z,{style:{marginLeft:"4px"},children:"\u4FDD\u5B58\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875"})}]}),u()(l()(n),"renderPresetTitle",function(){return"\u65B0\u589E\u4FE1\u606F"}),u()(l()(n),"establishCardCollectionConfig",function(){return{list:[{title:{icon:f.xM.contacts(),text:"\u57FA\u672C\u4FE1\u606F"},items:[{lg:24,type:o.ul.contentItemType.input,fieldData:s.Ng.title,require:!0}],instruction:{title:"\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E",showDivider:!1,showNumber:!0,list:[{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1"},{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2"}]}},{title:{icon:f.xM.contacts(),text:"\u7B80\u4ECB\u63CF\u8FF0"},items:[{lg:24,type:o.ul.contentItemType.textarea,fieldData:s.Ng.description}],instruction:[{title:"\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E1",showDivider:!1,showNumber:!0,list:[{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1"},{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2"}]},{title:"\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E2",showDivider:!1,showNumber:!0,list:[{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1"},{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2"}]}]},{title:{icon:f.xM.contacts(),text:"\u5176\u4ED6\u4FE1\u606F"},items:[{type:o.ul.contentItemType.nowTime}]}]}}),u()(l()(n),"establishHelpConfig",function(){return{title:"\u64CD\u4F5C\u63D0\u793A",list:[{text:"\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002"},{text:"\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002"}]}}),u()(l()(n),"renderOverlayContent",function(){var a=n.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(f.d3,{language:"js",value:a,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),n.state=p()(p()({},n.state),{},{submitApiPath:"simple/addBasicInfo",sourceCode:fn,overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(De)}}]),e}(Sn))||he),Cn=`import { Checkbox } from 'antd';

import { connect } from 'easy-soft-dva';
import { convertCollection, getValueByKey } from 'easy-soft-utility';

import { cardConfig, drawerConfig } from 'antd-management-fast-common';
import { iconBuilder, SyntaxHighlighter } from 'antd-management-fast-component';
import {
  DataDrawer,
  switchControlAssist,
} from 'antd-management-fast-framework';

import { fieldData } from '../../../businessData/data';

import { code } from './codeSource';

const { BaseUpdateDrawer } = DataDrawer;

const visibleFlag = '7476eba9e3bf442ab7655e7b41c40360';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleEditDrawer extends BaseUpdateDrawer {
  // showCallProcess = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      loadApiPath: 'simple/get',
      submitApiPath: 'simple/updateBasicInfo',
      sourceCode: code,
      overlayButtonOpenText: '\u6253\u5F00\u6E90\u4EE3\u7801',
      overlayButtonCloseText: '\u5173\u95ED\u6E90\u4EE3\u7801',
    };
  }

  subjoinDataOnAfterOK = () => {
    return {
      message: '\u8FD9\u662F\u4E00\u4E2A\u589E\u8865\u6570\u636E, \u5C06\u9644\u52A0\u5230 afterOk \u65B9\u6CD5\u4E2D\u8FDB\u884C\u8C03\u7528',
    };
  };

  buildBottomBarInnerLeftItemConfigList = () => {
    return [
      {
        buildType: drawerConfig.bottomBarBuildType.component,
        component: (
          <Checkbox style={{ marginLeft: '4px' }}>\u4FDD\u5B58\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875</Checkbox>
        ),
      },
    ];
  };

  renderPresetTitle = () => {
    return '\u7F16\u8F91\u4FE1\u606F';
  };

  fillInitialValuesAfterLoad = ({
    metaData = null,
    // eslint-disable-next-line no-unused-vars
    metaListData = [],
    // eslint-disable-next-line no-unused-vars
    metaExtra = null,
    // eslint-disable-next-line no-unused-vars
    metaOriginalData = null,
  }) => {
    const values = {};

    if (metaData != null) {
      values[fieldData.title.name] = getValueByKey({
        data: metaData,
        key: fieldData.title.name,
      });

      values[fieldData.description.name] = getValueByKey({
        data: metaData,
        key: fieldData.description.name,
      });
    }

    return values;
  };

  establishCardCollectionConfig = () => {
    const { metaData } = this.state;

    return {
      list: [
        {
          title: {
            icon: iconBuilder.contacts(),
            text: '\u57FA\u672C\u4FE1\u606F',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.input,
              fieldData: fieldData.title,
              require: true,
            },
          ],
          instruction: {
            title: '\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E',
            showDivider: false,
            showNumber: true,
            list: [
              {
                text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1',
              },
              {
                text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2',
              },
            ],
          },
        },
        {
          title: {
            icon: iconBuilder.contacts(),
            text: '\u7B80\u4ECB\u63CF\u8FF0',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.textarea,
              fieldData: fieldData.description,
            },
          ],
          instruction: [
            {
              title: '\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E1',
              showDivider: false,
              showNumber: true,
              list: [
                {
                  text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1',
                },
                {
                  text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2',
                },
              ],
            },
            {
              title: '\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E2',
              showDivider: false,
              showNumber: true,
              list: [
                {
                  text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1',
                },
                {
                  text: '\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2',
                },
              ],
            },
          ],
        },
        {
          title: {
            icon: iconBuilder.contacts(),
            text: '\u5176\u4ED6\u4FE1\u606F',
          },
          items: [
            {
              type: cardConfig.contentItemType.onlyShowInputDatetime,
              fieldData: fieldData.createTime,
              value: getValueByKey({
                data: metaData,
                key: fieldData.createTime.name,
                convert: convertCollection.datetime,
              }),
            },
            {
              type: cardConfig.contentItemType.nowTime,
              fieldData: fieldData.updateTime,
              value: getValueByKey({
                data: metaData,
                key: fieldData.updateTime.name,
                convert: convertCollection.datetime,
              }),
            },
          ],
        },
      ],
    };
  };

  establishHelpConfig = () => {
    return {
      title: '\u64CD\u4F5C\u63D0\u793A',
      list: [
        {
          text: '\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002',
        },
        {
          text: '\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002',
        },
      ],
    };
  };

  renderOverlayContent = () => {
    const { sourceCode } = this.state;

    return (
      <div style={{ width: '90%', height: '90%' }}>
        <SyntaxHighlighter
          language="js"
          value={sourceCode}
          other={{ showLineNumbers: false, wrapLines: false }}
          style={{ height: '100%' }}
        />
      </div>
    );
  };
}

export { SimpleEditDrawer };
`,_e,Ee,hn=_.v3.BaseUpdateDrawer,ve="7476eba9e3bf442ab7655e7b41c40360",Fe=(_e=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),_e(Ee=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,ve),u()(l()(n),"subjoinDataOnAfterOK",function(){return{message:"\u8FD9\u662F\u4E00\u4E2A\u589E\u8865\u6570\u636E, \u5C06\u9644\u52A0\u5230 afterOk \u65B9\u6CD5\u4E2D\u8FDB\u884C\u8C03\u7528"}}),u()(l()(n),"buildBottomBarInnerLeftItemConfigList",function(){return[{buildType:o.xE.bottomBarBuildType.component,component:(0,r.jsx)(ce.Z,{style:{marginLeft:"4px"},children:"\u4FDD\u5B58\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875"})}]}),u()(l()(n),"renderPresetTitle",function(){return"\u7F16\u8F91\u4FE1\u606F"}),u()(l()(n),"fillInitialValuesAfterLoad",function(a){var d=a.metaData,S=d===void 0?null:d,b=a.metaListData,E=b===void 0?[]:b,R=a.metaExtra,K=R===void 0?null:R,te=a.metaOriginalData,se=te===void 0?null:te,me={};return S!=null&&(me[s.Ng.title.name]=(0,m.s4e)({data:S,key:s.Ng.title.name}),me[s.Ng.description.name]=(0,m.s4e)({data:S,key:s.Ng.description.name})),me}),u()(l()(n),"establishCardCollectionConfig",function(){var a=n.state.metaData;return{list:[{title:{icon:f.xM.contacts(),text:"\u57FA\u672C\u4FE1\u606F"},items:[{lg:24,type:o.ul.contentItemType.input,fieldData:s.Ng.title,require:!0}],instruction:{title:"\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E",showDivider:!1,showNumber:!0,list:[{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1"},{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2"}]}},{title:{icon:f.xM.contacts(),text:"\u7B80\u4ECB\u63CF\u8FF0"},items:[{lg:24,type:o.ul.contentItemType.textarea,fieldData:s.Ng.description}],instruction:[{title:"\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E1",showDivider:!1,showNumber:!0,list:[{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1"},{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2"}]},{title:"\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E2",showDivider:!1,showNumber:!0,list:[{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1"},{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2"}]}]},{title:{icon:f.xM.contacts(),text:"\u5176\u4ED6\u4FE1\u606F"},items:[{type:o.ul.contentItemType.onlyShowInputDatetime,fieldData:s.Ng.createTime,value:(0,m.s4e)({data:a,key:s.Ng.createTime.name,convert:m.$07.datetime})},{type:o.ul.contentItemType.nowTime,fieldData:s.Ng.updateTime,value:(0,m.s4e)({data:a,key:s.Ng.updateTime.name,convert:m.$07.datetime})}]}]}}),u()(l()(n),"establishHelpConfig",function(){return{title:"\u64CD\u4F5C\u63D0\u793A",list:[{text:"\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002"},{text:"\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002"}]}}),u()(l()(n),"renderOverlayContent",function(){var a=n.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(f.d3,{language:"js",value:a,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),n.state=p()(p()({},n.state),{},{loadApiPath:"simple/get",submitApiPath:"simple/updateBasicInfo",sourceCode:Cn,overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(ve)}}]),e}(hn))||Ee),Dn=`import { Checkbox } from 'antd';

import { connect } from 'easy-soft-dva';

import { drawerConfig } from 'antd-management-fast-common';
import { CenterBox, SyntaxHighlighter } from 'antd-management-fast-component';
import {
  DataDrawer,
  switchControlAssist,
} from 'antd-management-fast-framework';

import { code } from './codeSource';

const { BaseVerticalFlexDrawer } = DataDrawer;

const visibleFlag = '7fc0c679771c42cb9d8855fa00bb2104';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleVerticalFlexDrawer extends BaseVerticalFlexDrawer {
  // showCallProcess = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      loadApiPath: 'simple/get',
      submitApiPath: 'simple/updateBasicInfo',
      sourceCode: code,
      overlayButtonOpenText: '\u6253\u5F00\u6E90\u4EE3\u7801',
      overlayButtonCloseText: '\u5173\u95ED\u6E90\u4EE3\u7801',
    };
  }

  subjoinDataOnAfterOK = () => {
    return {
      message: '\u8FD9\u662F\u4E00\u4E2A\u589E\u8865\u6570\u636E, \u5C06\u9644\u52A0\u5230 afterOk \u65B9\u6CD5\u4E2D\u8FDB\u884C\u8C03\u7528',
    };
  };

  buildBottomBarInnerLeftItemConfigList = () => {
    return [
      {
        buildType: drawerConfig.bottomBarBuildType.component,
        component: (
          <Checkbox style={{ marginLeft: '4px' }}>\u4FDD\u5B58\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875</Checkbox>
        ),
      },
    ];
  };

  renderPresetTitle = () => {
    return '\u7F16\u8F91\u4FE1\u606F';
  };

  establishPresetContentContainorInnerTopStyle = () => {
    return {
      // padding: '12px 36px',
    };
  };

  establishHelpConfig = () => {
    return {
      title: '\u64CD\u4F5C\u63D0\u793A',
      list: [
        {
          text: '\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002',
        },
        {
          text: '\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002',
        },
      ],
    };
  };

  renderPresetContentContainorInnerTop = () => {
    return (
      <div style={{ backgroundColor: '#4563ef', height: '100%' }}>
        <CenterBox>content</CenterBox>
      </div>
    );
  };

  renderOverlayContent = () => {
    const { sourceCode } = this.state;

    return (
      <div style={{ width: '90%', height: '90%' }}>
        <SyntaxHighlighter
          language="js"
          value={sourceCode}
          other={{ showLineNumbers: false, wrapLines: false }}
          style={{ height: '100%' }}
        />
      </div>
    );
  };
}

export { SimpleVerticalFlexDrawer };
`,Be,ye,wn=_.v3.BaseVerticalFlexDrawer,Pe="7fc0c679771c42cb9d8855fa00bb2104",be=(Be=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),Be(ye=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,Pe),u()(l()(n),"subjoinDataOnAfterOK",function(){return{message:"\u8FD9\u662F\u4E00\u4E2A\u589E\u8865\u6570\u636E, \u5C06\u9644\u52A0\u5230 afterOk \u65B9\u6CD5\u4E2D\u8FDB\u884C\u8C03\u7528"}}),u()(l()(n),"buildBottomBarInnerLeftItemConfigList",function(){return[{buildType:o.xE.bottomBarBuildType.component,component:(0,r.jsx)(ce.Z,{style:{marginLeft:"4px"},children:"\u4FDD\u5B58\u540E\u8DF3\u8F6C\u8BE6\u60C5\u9875"})}]}),u()(l()(n),"renderPresetTitle",function(){return"\u7F16\u8F91\u4FE1\u606F"}),u()(l()(n),"establishPresetContentContainorInnerTopStyle",function(){return{}}),u()(l()(n),"establishHelpConfig",function(){return{title:"\u64CD\u4F5C\u63D0\u793A",list:[{text:"\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002"},{text:"\u7B80\u8981\u8BF4\u660E:\u8FD9\u91CC\u53EF\u4EE5\u663E\u793A\u9700\u8981\u63D0\u793A\u7684\u4FE1\u606F\u3002"}]}}),u()(l()(n),"renderPresetContentContainorInnerTop",function(){return(0,r.jsx)("div",{style:{backgroundColor:"#4563ef",height:"100%"},children:(0,r.jsx)(f.kQ,{children:"content"})})}),u()(l()(n),"renderOverlayContent",function(){var a=n.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(f.d3,{language:"js",value:a,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),n.state=p()(p()({},n.state),{},{loadApiPath:"simple/get",submitApiPath:"simple/updateBasicInfo",sourceCode:Dn,overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(Pe)}}]),e}(wn))||ye),xe=g.Z.Text,_n=_.AP.SinglePageSelectDrawer,Ae=function(i){F()(e,i);var c=B()(e);function e(h,n){var a;return v()(this,e),a=c.call(this,h,n),u()(l()(a),"showCallProcess",!0),u()(l()(a),"reloadWhenShow",!0),u()(l()(a),"refreshCache",function(d){(0,M.Wk)({target:l()(a),handleData:d})}),u()(l()(a),"getStatusBadge",function(d){var S="default";switch(d){case s.zo.online:{S="processing";break}case s.zo.offline:{S="warning";break}default:{S="default";break}}return S}),u()(l()(a),"establishSearchCardConfig",function(){return{list:[{lg:12,type:o.fs.contentItemType.input,fieldData:s.Ng.title},{lg:8,type:o.fs.contentItemType.component,component:a.buildSearchCardButtonCore()}]}}),u()(l()(a),"establishDataContainerExtraActionCollectionConfig",function(){var d=a.state.listViewMode;return[{buildType:o.ug.dataContainerExtraActionBuildType.flexSelect,label:"\u663E\u793A\u6A21\u5F0F",size:"small",defaultValue:d,style:{width:"190px"},list:[{flag:o.ug.viewMode.table,name:"\u8868\u683C\u89C6\u56FE",availability:m.dvr.yes},{flag:o.ug.viewMode.list,name:"\u5217\u8868\u89C6\u56FE",availability:m.dvr.yes},{flag:o.ug.viewMode.cardCollectionView,name:"\u5361\u7247\u89C6\u56FE",availability:m.dvr.yes},{flag:o.ug.viewMode.customView,name:"\u81EA\u5B9A\u4E49\u89C6\u56FE",availability:m.dvr.yes}],dataConvert:f.hy,onChange:function(b,E){console.log({v:b,option:E}),a.setState({listViewMode:b})}}]}),u()(l()(a),"renderPresetListViewItemInner",function(d,S){var b=(0,m.s4e)({data:d,key:s.Ng.simpleId.name}),E=(0,m.s4e)({data:d,key:s.Ng.image.name}),R=(0,m.s4e)({data:d,key:s.Ng.title.name}),K=(0,m.s4e)({data:d,key:s.Ng.createTime.name,format:m.JrP.datetime});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(C.Z.Item.Meta,{avatar:(0,m.aMH)(E)?(0,r.jsx)(w.C,{icon:f.xM.user()}):(0,r.jsx)(w.C,{src:E}),title:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(xe,{children:R})}),description:(0,r.jsxs)(P.Z,{split:(0,r.jsx)(D.Z,{type:"vertical"}),children:[(0,r.jsx)(f._w,{textPrefix:s.Ng.simpleId.label,separator:": ",text:(0,r.jsx)(xe,{copyable:!0,children:b})}),(0,r.jsx)(f._w,{textPrefix:s.Ng.createTime.label,separator:": ",text:K})]})})})}),u()(l()(a),"establishListItemDropdownConfig",function(d){return{size:"small",text:"\u5237\u65B0",placement:"topRight",icon:f.xM.reload(),handleButtonClick:function(b){var E=b.handleData;a.refreshCache(E)},handleData:d,confirm:!0,title:"\u5C06\u8981\u5237\u65B0\u7F13\u5B58\uFF0C\u786E\u5B9A\u5417\uFF1F"}}),u()(l()(a),"getColumnWrapper",function(){return[{dataTarget:s.Ng.title,width:420,align:"left",showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.sort,width:100,showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.renderType,width:120,showRichFacade:!0,emptyValue:"--",facadeConfig:{color:y.gY.price},formatValue:function(S){return(0,W.naL)({value:S})}},{dataTarget:s.Ng.status,width:100,emptyValue:"--",showRichFacade:!0,facadeMode:o.T_.badge,facadeConfigBuilder:function(S){return{status:a.getStatusBadge(S),text:(0,W.vkd)({value:S})}}},{dataTarget:s.Ng.simpleId,width:140,showRichFacade:!0,canCopy:!0},{dataTarget:s.Ng.createTime,width:160,showRichFacade:!0,facadeMode:o.T_.datetime,emptyValue:"--"},o.Gf]}),u()(l()(a),"renderOverlayContent",function(){var d=a.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(f.d3,{language:"js",value:d,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),a.state=p()(p()({},a.state),{},{pageTitle:"\u6570\u636E\u5355\u9875\u9009\u62E9\u5217\u8868",loadApiPath:"simple/singleList",listViewMode:o.ug.viewMode.table,tableScrollX:1220,sourceCode:"",overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),a}return x()(e)}(_n),En=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import { BaseSimpleSinglePageDrawer } from '../BaseSimpleSinglePageDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '89cc8754b45b4dbebb54d9bbf0d90c3b';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSingleFrontendPaginationPageDrawer extends BaseSimpleSinglePageDrawer {
  // \u4F7F\u7528\u6A21\u62DF\u5206\u9875, \u9ED8\u8BA4 false, \u4E0D\u4F7F\u7528\u4E8C\u6B21\u9009\u62E9\u786E\u8BA4\u65F6\u53EF\u4E0D\u7528\u7279\u6B8A\u6307\u5B9A
  useFrontendPagination = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleSingleFrontendPaginationPageDrawer };
`,Me,Te,Ie="89cc8754b45b4dbebb54d9bbf0d90c3b",je=(Me=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),Me(Te=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,Ie),u()(l()(n),"useFrontendPagination",!0),n.state=p()(p()({},n.state),{},{sourceCode:En}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(Ie)}}]),e}(Ae))||Te),vn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import { BaseSimpleSinglePageDrawer } from '../BaseSimpleSinglePageDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'f481d7108fb64b52b8defc95816faf08';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageDrawer extends BaseSimpleSinglePageDrawer {
  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleSinglePageDrawer };
`,Ve,Oe,ke="f481d7108fb64b52b8defc95816faf08",Le=(Ve=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),Ve(Oe=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,ke),n.state=p()(p()({},n.state),{},{sourceCode:vn}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(ke)}}]),e}(Ae))||Oe),Fn=`import { Avatar, Divider, List, Space, Typography } from 'antd';

import {
  checkStringIsNullOrWhiteSpace,
  formatCollection,
  getValueByKey,
  isArray,
  whetherNumber,
} from 'easy-soft-utility';

import {
  columnFacadeMode,
  columnPlaceholder,
  listViewConfig,
  searchCardConfig,
} from 'antd-management-fast-common';
import {
  ColorText,
  convertOptionOrRadioData,
  iconBuilder,
  SyntaxHighlighter,
} from 'antd-management-fast-component';
import { DataSinglePageView } from 'antd-management-fast-framework';

import { fieldData, statusCollection } from '../../../../../businessData/data';
import { colorCollection } from '../../../../../customConfig';
import {
  getSimpleRenderTypeName,
  getSimpleStatusName,
} from '../../../../../customSpecialComponents';

const { Text } = Typography;
const { SinglePageSelectDrawer } = DataSinglePageView;

// \u7EC4\u4EF6\u57FA\u7C7B, \u4EC5\u4E3A\u4EE3\u7801\u590D\u7528\u6027\u8BBE\u8BA1, \u5177\u4F53\u4F7F\u7528\u65F6\u8BF7\u81EA\u884C\u8003\u8651
class BaseSimpleSinglePageSelectDrawer extends SinglePageSelectDrawer {
  // \u5728\u63A7\u5236\u53F0\u663E\u793A\u7EC4\u5EFA\u5185\u8C03\u7528\u5E8F\u5217, \u4EC5\u4E3A\u8FDB\u884C\u5F00\u53D1\u8F85\u52A9
  showCallProcess = true;

  // \u663E\u793A\u65F6\u662F\u5426\u81EA\u52A8\u5237\u65B0\u6570\u636E;
  reloadWhenShow = true;

  constructor(properties, visibleFlag) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      pageTitle: '\u6570\u636E\u5355\u9875\u9009\u62E9\u5217\u8868',
      // \u9875\u9762\u52A0\u8F7D\u65F6\u81EA\u52A8\u52A0\u8F7D\u7684\u8FDC\u7A0B\u8BF7\u6C42
      loadApiPath: 'simple/singleList',
      // \u8BBE\u7F6E\u9ED8\u8BA4\u8BD5\u56FE\u6A21\u5F0F\u4E3A table
      listViewMode: listViewConfig.viewMode.table,
      // table \u663E\u793A\u6A21\u5F0F\u884C\u957F\u5EA6, \u5408\u7406\u8BBE\u7F6E\u53EF\u4EE5\u63D0\u5347\u7F8E\u89C2\u4EE5\u53CA\u7528\u6237\u4F53\u9A8C\uFF0C\u8D85\u51FA\u53EF\u89C1\u533A\u57DF\u5C06\u663E\u793A\u6EDA\u52A8\u6761
      tableScrollX: 1220,
      sourceCode: '',
      overlayButtonOpenText: '\u6253\u5F00\u6E90\u4EE3\u7801',
      overlayButtonCloseText: '\u5173\u95ED\u6E90\u4EE3\u7801',
    };
  }

  getStatusBadge = (v) => {
    let result = 'default';

    switch (v) {
      case statusCollection.online: {
        result = 'processing';
        break;
      }

      case statusCollection.offline: {
        result = 'warning';
        break;
      }

      default: {
        result = 'default';
        break;
      }
    }

    return result;
  };

  // \u914D\u7F6E\u641C\u7D22\u6846
  establishSearchCardConfig = () => {
    return {
      list: [
        {
          lg: 12,
          type: searchCardConfig.contentItemType.input,
          fieldData: fieldData.title,
        },
        {
          lg: 8,
          type: searchCardConfig.contentItemType.component,
          component: this.buildSearchCardButtonCore(),
        },
      ],
    };
  };

  // \u914D\u7F6E\u52A8\u4F5C\u96C6\u5408
  establishDataContainerExtraActionCollectionConfig = () => {
    const { listViewMode } = this.state;

    return [
      {
        buildType: listViewConfig.dataContainerExtraActionBuildType.flexSelect,
        label: '\u663E\u793A\u6A21\u5F0F',
        size: 'small',
        defaultValue: listViewMode,
        style: { width: '190px' },
        list: [
          {
            flag: listViewConfig.viewMode.table,
            name: '\u8868\u683C\u89C6\u56FE',
            availability: whetherNumber.yes,
          },
          {
            flag: listViewConfig.viewMode.list,
            name: '\u5217\u8868\u89C6\u56FE',
            availability: whetherNumber.yes,
          },
          {
            flag: listViewConfig.viewMode.cardCollectionView,
            name: '\u5361\u7247\u89C6\u56FE',
            availability: whetherNumber.yes,
          },
          {
            flag: listViewConfig.viewMode.customView,
            name: '\u81EA\u5B9A\u4E49\u89C6\u56FE',
            availability: whetherNumber.yes,
          },
        ],
        dataConvert: convertOptionOrRadioData,
        onChange: (v, option) => {
          console.log({ v, option });
          this.setState({ listViewMode: v });
        },
      },
    ];
  };

  // \u6784\u5EFA\u901A\u77E5\u6587\u672C, \u4EC5\u591A\u9009\u6A21\u5F0F\u6709\u6548, \u5355\u9009\u65F6\u4E0D\u4F1A\u89E6\u53D1\u901A\u77E5
  buildSelectNotificationDescription = (o) => {
    if (isArray(o)) {
      let list = [];

      for (const item of o) {
        const { title } = item;
        list.push(title);
      }

      if (list.length > 0) {
        return \`\u5DF2\u9009\u62E9: \${list.join(',')}\`;
      }

      return '';
    } else {
      const { title } = o;

      return \`\u5DF2\u9009\u62E9: \${title}\`;
    }
  };

  // \u914D\u7F6E\u5217\u8868\u663E\u793A\u6A21\u5F0F\u6784\u5EFA\u903B\u8F91
  // eslint-disable-next-line no-unused-vars
  renderPresetListViewItemInner = (item, index) => {
    const simpleId = getValueByKey({
      data: item,
      key: fieldData.simpleId.name,
    });

    const image = getValueByKey({
      data: item,
      key: fieldData.image.name,
    });

    const title = getValueByKey({
      data: item,
      key: fieldData.title.name,
    });

    const createTime = getValueByKey({
      data: item,
      key: fieldData.createTime.name,
      format: formatCollection.datetime,
    });

    return (
      <>
        <List.Item.Meta
          avatar={
            checkStringIsNullOrWhiteSpace(image) ? (
              <Avatar icon={iconBuilder.user()} />
            ) : (
              <Avatar src={image} />
            )
          }
          title={
            <>
              <Text>{title}</Text>
            </>
          }
          description={
            <Space split={<Divider type="vertical" />}>
              <ColorText
                textPrefix={fieldData.simpleId.label}
                separator=": "
                text={<Text copyable>{simpleId}</Text>}
              />

              <ColorText
                textPrefix={fieldData.createTime.label}
                separator=": "
                text={createTime}
              />
            </Space>
          }
        />
      </>
    );
  };

  // \u914D\u7F6E table \u663E\u793A\u6A21\u5F0F\u6570\u636E\u5217
  getColumnWrapper = () => [
    {
      dataTarget: fieldData.title,
      width: 420,
      align: 'left',
      showRichFacade: true,
      emptyValue: '--',
    },
    {
      dataTarget: fieldData.sort,
      width: 100,
      showRichFacade: true,
      emptyValue: '--',
    },
    {
      dataTarget: fieldData.renderType,
      width: 120,
      showRichFacade: true,
      emptyValue: '--',
      facadeConfig: {
        color: colorCollection.price,
      },
      formatValue: (value) => {
        return getSimpleRenderTypeName({
          value: value,
        });
      },
    },
    {
      dataTarget: fieldData.status,
      width: 100,
      emptyValue: '--',
      showRichFacade: true,
      facadeMode: columnFacadeMode.badge,
      facadeConfigBuilder: (value) => {
        return {
          status: this.getStatusBadge(value),
          text: getSimpleStatusName({
            value: value,
          }),
        };
      },
    },
    {
      dataTarget: fieldData.simpleId,
      width: 140,
      showRichFacade: true,
      canCopy: true,
    },
    {
      dataTarget: fieldData.createTime,
      width: 160,
      showRichFacade: true,
      facadeMode: columnFacadeMode.datetime,
      emptyValue: '--',
    },
    // \u7AD9\u4F4D\u7B26, \u663E\u793A\u4E3A "--"
    columnPlaceholder,
  ];

  renderOverlayContent = () => {
    const { sourceCode } = this.state;

    return (
      <div style={{ width: '90%', height: '90%' }}>
        <SyntaxHighlighter
          language="js"
          value={sourceCode}
          other={{ showLineNumbers: false, wrapLines: false }}
          style={{ height: '100%' }}
        />
      </div>
    );
  };
}

export default BaseSimpleSinglePageSelectDrawer;
`,Ne=g.Z.Text,Bn=_.AP.SinglePageSelectDrawer,yn=function(i){F()(e,i);var c=B()(e);function e(h,n){var a;return v()(this,e),a=c.call(this,h,n),u()(l()(a),"showCallProcess",!0),u()(l()(a),"reloadWhenShow",!0),u()(l()(a),"getStatusBadge",function(d){var S="default";switch(d){case s.zo.online:{S="processing";break}case s.zo.offline:{S="warning";break}default:{S="default";break}}return S}),u()(l()(a),"establishSearchCardConfig",function(){return{list:[{lg:12,type:o.fs.contentItemType.input,fieldData:s.Ng.title},{lg:8,type:o.fs.contentItemType.component,component:a.buildSearchCardButtonCore()}]}}),u()(l()(a),"establishDataContainerExtraActionCollectionConfig",function(){var d=a.state.listViewMode;return[{buildType:o.ug.dataContainerExtraActionBuildType.flexSelect,label:"\u663E\u793A\u6A21\u5F0F",size:"small",defaultValue:d,style:{width:"190px"},list:[{flag:o.ug.viewMode.table,name:"\u8868\u683C\u89C6\u56FE",availability:m.dvr.yes},{flag:o.ug.viewMode.list,name:"\u5217\u8868\u89C6\u56FE",availability:m.dvr.yes},{flag:o.ug.viewMode.cardCollectionView,name:"\u5361\u7247\u89C6\u56FE",availability:m.dvr.yes},{flag:o.ug.viewMode.customView,name:"\u81EA\u5B9A\u4E49\u89C6\u56FE",availability:m.dvr.yes}],dataConvert:f.hy,onChange:function(b,E){console.log({v:b,option:E}),a.setState({listViewMode:b})}}]}),u()(l()(a),"buildSelectNotificationDescription",function(d){if((0,m.kJL)(d)){var S=[],b=O()(d),E;try{for(b.s();!(E=b.n()).done;){var R=E.value,K=R.title;S.push(K)}}catch(se){b.e(se)}finally{b.f()}return S.length>0?"\u5DF2\u9009\u62E9: ".concat(S.join(",")):""}else{var te=d.title;return"\u5DF2\u9009\u62E9: ".concat(te)}}),u()(l()(a),"renderPresetListViewItemInner",function(d,S){var b=(0,m.s4e)({data:d,key:s.Ng.simpleId.name}),E=(0,m.s4e)({data:d,key:s.Ng.image.name}),R=(0,m.s4e)({data:d,key:s.Ng.title.name}),K=(0,m.s4e)({data:d,key:s.Ng.createTime.name,format:m.JrP.datetime});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(C.Z.Item.Meta,{avatar:(0,m.aMH)(E)?(0,r.jsx)(w.C,{icon:f.xM.user()}):(0,r.jsx)(w.C,{src:E}),title:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Ne,{children:R})}),description:(0,r.jsxs)(P.Z,{split:(0,r.jsx)(D.Z,{type:"vertical"}),children:[(0,r.jsx)(f._w,{textPrefix:s.Ng.simpleId.label,separator:": ",text:(0,r.jsx)(Ne,{copyable:!0,children:b})}),(0,r.jsx)(f._w,{textPrefix:s.Ng.createTime.label,separator:": ",text:K})]})})})}),u()(l()(a),"getColumnWrapper",function(){return[{dataTarget:s.Ng.title,width:420,align:"left",showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.sort,width:100,showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.renderType,width:120,showRichFacade:!0,emptyValue:"--",facadeConfig:{color:y.gY.price},formatValue:function(S){return(0,W.naL)({value:S})}},{dataTarget:s.Ng.status,width:100,emptyValue:"--",showRichFacade:!0,facadeMode:o.T_.badge,facadeConfigBuilder:function(S){return{status:a.getStatusBadge(S),text:(0,W.vkd)({value:S})}}},{dataTarget:s.Ng.simpleId,width:140,showRichFacade:!0,canCopy:!0},{dataTarget:s.Ng.createTime,width:160,showRichFacade:!0,facadeMode:o.T_.datetime,emptyValue:"--"},o.Gf]}),u()(l()(a),"renderOverlayContent",function(){var d=a.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(f.d3,{language:"js",value:d,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),a.state=p()(p()({},a.state),{},{pageTitle:"\u6570\u636E\u5355\u9875\u9009\u62E9\u5217\u8868",loadApiPath:"simple/singleList",listViewMode:o.ug.viewMode.table,tableScrollX:1220,sourceCode:"",overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),a}return x()(e)}(Bn),ne=yn,Pn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectDrawer from '../../BaseSimpleSinglePageSelectDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'de266a61e4b24705afda59a125f81952';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageFrontendPaginationConfirmSelectDrawer extends BaseSimpleSinglePageSelectDrawer {
  // \u4F7F\u7528\u6A21\u62DF\u5206\u9875, \u9ED8\u8BA4 false, \u4E0D\u4F7F\u7528\u4E8C\u6B21\u9009\u62E9\u786E\u8BA4\u65F6\u53EF\u4E0D\u7528\u7279\u6B8A\u6307\u5B9A
  useFrontendPagination = true;

  // \u6307\u5B9A\u4F7F\u7528\u9009\u62E9\u786E\u8BA4\u6A21\u5F0F, \u9ED8\u8BA4 false, \u4E0D\u4F7F\u7528\u4E8C\u6B21\u9009\u62E9\u786E\u8BA4\u65F6\u53EF\u4E0D\u7528\u7279\u6B8A\u6307\u5B9A
  confirmSelect = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleSinglePageFrontendPaginationConfirmSelectDrawer };
`,Re,Ke,We="de266a61e4b24705afda59a125f81952",Ue=(Re=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),Re(Ke=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,We),u()(l()(n),"useFrontendPagination",!0),u()(l()(n),"confirmSelect",!0),n.state=p()(p()({},n.state),{},{sourceCode:Pn}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(We)}}]),e}(ne))||Ke),bn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectDrawer from '../../BaseSimpleSinglePageSelectDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '94f54e3085974ebca2dd0b4f92868ec6';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageFrontendPaginationMultiSelectDrawer extends BaseSimpleSinglePageSelectDrawer {
  // \u4F7F\u7528\u6A21\u62DF\u5206\u9875, \u9ED8\u8BA4 false, \u4E0D\u4F7F\u7528\u4E8C\u6B21\u9009\u62E9\u786E\u8BA4\u65F6\u53EF\u4E0D\u7528\u7279\u6B8A\u6307\u5B9A
  useFrontendPagination = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleSinglePageFrontendPaginationMultiSelectDrawer };
`,$e,He,ze="94f54e3085974ebca2dd0b4f92868ec6",Ze=($e=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),$e(He=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,ze),u()(l()(n),"useFrontendPagination",!0),n.state=p()(p()({},n.state),{},{sourceCode:bn}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(ze)}}]),e}(ne))||He),xn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectDrawer from '../../BaseSimpleSinglePageSelectDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'ba910dd3d8f147319996537882f806d1';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageFrontendPaginationSingleSelectDrawer extends BaseSimpleSinglePageSelectDrawer {
  // \u4F7F\u7528\u6A21\u62DF\u5206\u9875, \u9ED8\u8BA4 false, \u4E0D\u4F7F\u7528\u4E8C\u6B21\u9009\u62E9\u786E\u8BA4\u65F6\u53EF\u4E0D\u7528\u7279\u6B8A\u6307\u5B9A
  useFrontendPagination = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleSinglePageFrontendPaginationSingleSelectDrawer };
`,Qe,Je,Ge="ba910dd3d8f147319996537882f806d1",Xe=(Qe=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),Qe(Je=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,Ge),u()(l()(n),"useFrontendPagination",!0),n.state=p()(p()({},n.state),{},{sourceCode:xn}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(Ge)}}]),e}(ne))||Je),An=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectDrawer from '../../BaseSimpleSinglePageSelectDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '7ab5be8b387042f8b92c66fcfa02d331';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageConfirmSelectDrawer extends BaseSimpleSinglePageSelectDrawer {
  // \u6307\u5B9A\u4F7F\u7528\u9009\u62E9\u786E\u8BA4\u6A21\u5F0F, \u9ED8\u8BA4 false, \u4E0D\u4F7F\u7528\u4E8C\u6B21\u9009\u62E9\u786E\u8BA4\u65F6\u53EF\u4E0D\u7528\u7279\u6B8A\u6307\u5B9A
  confirmSelect = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleSinglePageConfirmSelectDrawer };
`,Ye,qe,en="7ab5be8b387042f8b92c66fcfa02d331",nn=(Ye=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),Ye(qe=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,en),u()(l()(n),"confirmSelect",!0),n.state=p()(p()({},n.state),{},{sourceCode:An}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(en)}}]),e}(ne))||qe),Mn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectDrawer from '../../BaseSimpleSinglePageSelectDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '0c42f711935343f3b20cceedc8179064';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageMultiSelectDrawer extends BaseSimpleSinglePageSelectDrawer {
  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleSinglePageMultiSelectDrawer };
`,tn,an,rn="0c42f711935343f3b20cceedc8179064",ln=(tn=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),tn(an=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,rn),n.state=p()(p()({},n.state),{},{sourceCode:Mn}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(rn)}}]),e}(ne))||an),Tn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectDrawer from '../../BaseSimpleSinglePageSelectDrawer';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'afc20144a2fd4fd398602da925d93da7';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageSingleSelectDrawer extends BaseSimpleSinglePageSelectDrawer {
  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      sourceCode: code,
    };
  }
}

export { SimpleSinglePageSingleSelectDrawer };
`,un,on,sn="afc20144a2fd4fd398602da925d93da7",cn=(un=(0,T.$j)(function(i){var c=i.simple,e=i.schedulingControl;return{simple:c,schedulingControl:e}}),un(on=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h,sn),n.state=p()(p()({},n.state),{},{sourceCode:Tn}),n}return x()(e,null,[{key:"open",value:function(){_.Qs.open(sn)}}]),e}(ne))||on),In=t(41488),jn=t(62915),mn=`import { connect } from 'easy-soft-dva';
import {
  logDebug,
  mergeArrowText,
  showSimpleInfoMessage,
  showSimpleSuccessMessage,
} from 'easy-soft-utility';

import { cardConfig, dataTypeCollection } from 'antd-management-fast-common';
import {
  buildButton,
  convertOptionOrRadioData,
} from 'antd-management-fast-component';
import { DataPreviewDrawer } from 'antd-management-fast-framework';

import { SimpleMultiPageDrawer } from '../../../businessComponents/Drawers/Multi/ListDrawer/SimpleMultiPageDrawer';
import { code as codeBaseSimpleMultiPageSelectDrawer } from '../../../businessComponents/Drawers/Multi/SelectDrawer/BaseSimpleMultiPageSelectDrawer/codeSource';
import { SimpleMultiPageConfirmSelectDrawer } from '../../../businessComponents/Drawers/Multi/SelectDrawer/SimpleMultiPageConfirmSelectDrawer';
import { SimpleMultiPageMultiSelectDrawer } from '../../../businessComponents/Drawers/Multi/SelectDrawer/SimpleMultiPageMultiSelectDrawer';
import { SimpleMultiPageSingleSelectDrawer } from '../../../businessComponents/Drawers/Multi/SelectDrawer/SimpleMultiPageSingleSelectDrawer';
import { SimpleAddDrawer } from '../../../businessComponents/Drawers/SimpleAddDrawer';
import { SimpleEditDrawer } from '../../../businessComponents/Drawers/SimpleEditDrawer';
import { SimpleVerticalFlexDrawer } from '../../../businessComponents/Drawers/SimpleVerticalFlexDrawer';
import { SimpleSingleFrontendPaginationPageDrawer } from '../../../businessComponents/Drawers/Single/ListDrawer/SimpleSingleFrontendPaginationPageDrawer';
import { SimpleSinglePageDrawer } from '../../../businessComponents/Drawers/Single/ListDrawer/SimpleSinglePageDrawer';
import { code as codeBaseSimpleSinglePageSelectDrawer } from '../../../businessComponents/Drawers/Single/SelectDrawer/BaseSimpleSinglePageSelectDrawer/codeSource';
import { SimpleSinglePageFrontendPaginationConfirmSelectDrawer } from '../../../businessComponents/Drawers/Single/SelectDrawer/FrontendPagination/SimpleSinglePageFrontendPaginationConfirmSelectDrawer';
import { SimpleSinglePageFrontendPaginationMultiSelectDrawer } from '../../../businessComponents/Drawers/Single/SelectDrawer/FrontendPagination/SimpleSinglePageFrontendPaginationMultiSelectDrawer';
import { SimpleSinglePageFrontendPaginationSingleSelectDrawer } from '../../../businessComponents/Drawers/Single/SelectDrawer/FrontendPagination/SimpleSinglePageFrontendPaginationSingleSelectDrawer';
import { SimpleSinglePageConfirmSelectDrawer } from '../../../businessComponents/Drawers/Single/SelectDrawer/Normal/SimpleSinglePageConfirmSelectDrawer';
import { SimpleSinglePageMultiSelectDrawer } from '../../../businessComponents/Drawers/Single/SelectDrawer/Normal/SimpleSinglePageMultiSelectDrawer';
import { SimpleSinglePageSingleSelectDrawer } from '../../../businessComponents/Drawers/Single/SelectDrawer/Normal/SimpleSinglePageSingleSelectDrawer';
import { simpleJsonData } from '../../../businessData/data';
import { BaseView } from '../BaseView';
import { code as codeBaseView } from '../BaseView/codeSource';

import { code as codeDrawerView } from './codeSource';

@connect(({ schedulingControl }) => ({
  schedulingControl,
}))
class DrawerView extends BaseView {
  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      pageTitle: 'Drawer \u4EA4\u4E92\u793A\u4F8B',
      currentCodeTitle: 'DrawerView',
      currentCode: codeDrawerView,
    };
  }

  establishToolBarConfig = () => {
    return {
      stick: false,
      title: '\u64CD\u4F5C\u680F',
      tools: [
        {
          component: buildButton({
            title: '\u70B9\u51FB\u663E\u793A VerticalFlexDrawer',
            text: 'VerticalFlexDrawer',
            handleClick: () => {
              SimpleVerticalFlexDrawer.open();
            },
          }),
        },
        {
          component: buildButton({
            title: '\u70B9\u51FB\u663E\u793A AddDrawer',
            text: 'AddDrawer',
            handleClick: () => {
              SimpleAddDrawer.open();
            },
          }),
        },
        {
          component: buildButton({
            title: '\u70B9\u51FB\u663E\u793A EditDrawer',
            text: 'EditDrawer',
            handleClick: () => {
              SimpleEditDrawer.open();
            },
          }),
        },
      ],
    };
  };

  establishCardCollectionConfig = () => {
    const { currentCode, currentCodeTitle } = this.state;

    const that = this;

    return {
      list: [
        {
          title: {
            text: '\u5217\u8868\u5B9E\u4F8B',
          },
          items: [
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleSinglePageDrawer',
                text: '\u663E\u793A SimpleSinglePageDrawer',
                handleClick: () => {
                  SimpleSinglePageDrawer.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleSingleFrontendPaginationPageDrawer',
                text: '\u663E\u793A SimpleSingleFrontendPaginationPageDrawer',
                handleClick: () => {
                  SimpleSingleFrontendPaginationPageDrawer.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleMultiPageDrawer',
                text: '\u663E\u793A SimpleMultiPageDrawer',
                handleClick: () => {
                  SimpleMultiPageDrawer.open();
                },
              }),
            },
          ],
        },
        {
          title: {
            text: '\u5355\u9875\u5217\u8868\u9009\u62E9\u529F\u80FD\u5B9E\u4F8B [\u5E38\u89C4]',
          },
          items: [
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleSinglePageConfirmSelectDrawer',
                text: '\u663E\u793A SimpleSinglePageConfirmSelectDrawer',
                handleClick: () => {
                  SimpleSinglePageConfirmSelectDrawer.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleSinglePageSingleSelectDrawer',
                text: '\u663E\u793A SimpleSinglePageSingleSelectDrawer',
                handleClick: () => {
                  SimpleSinglePageSingleSelectDrawer.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleSinglePageMultiSelectDrawer',
                text: '\u663E\u793A SimpleSinglePageMultiSelectDrawer',
                handleClick: () => {
                  SimpleSinglePageMultiSelectDrawer.open();
                },
              }),
            },
          ],
        },
        {
          title: {
            text: '\u5355\u9875\u5217\u8868\u9009\u62E9\u529F\u80FD\u5B9E\u4F8B [\u524D\u7AEF\u6A21\u62DF\u5206\u9875]',
          },
          items: [
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title:
                  '\u70B9\u51FB\u663E\u793A SinglePageFrontendPaginationConfirmSelectDrawer',
                text: '\u663E\u793A SinglePageFrontendPaginationConfirmSelectDrawer',
                handleClick: () => {
                  SimpleSinglePageFrontendPaginationConfirmSelectDrawer.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title:
                  '\u70B9\u51FB\u663E\u793A SimpleSinglePageFrontendPaginationSingleSelectDrawer',
                text: '\u663E\u793A SimpleSinglePageFrontendPaginationSingleSelectDrawer',
                handleClick: () => {
                  SimpleSinglePageFrontendPaginationSingleSelectDrawer.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title:
                  '\u70B9\u51FB\u663E\u793A SimpleSinglePageFrontendPaginationMultiSelectDrawer',
                text: '\u663E\u793A SimpleSinglePageFrontendPaginationMultiSelectDrawer',
                handleClick: () => {
                  SimpleSinglePageFrontendPaginationMultiSelectDrawer.open();
                },
              }),
            },
          ],
        },
        {
          title: {
            text: '\u5206\u9875\u5217\u8868\u9009\u62E9\u529F\u80FD\u5B9E\u4F8B',
          },
          items: [
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleMultiPageConfirmSelectDrawer',
                text: '\u663E\u793A SimpleMultiPageConfirmSelectDrawer',
                handleClick: () => {
                  SimpleMultiPageConfirmSelectDrawer.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleMultiPageSingleSelectDrawer',
                text: '\u663E\u793A SimpleMultiPageSingleSelectDrawer',
                handleClick: () => {
                  SimpleMultiPageSingleSelectDrawer.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleMultiPageMultiSelectDrawer',
                text: '\u663E\u793A SimpleMultiPageMultiSelectDrawer',
                handleClick: () => {
                  SimpleMultiPageMultiSelectDrawer.open();
                },
              }),
            },
          ],
        },
        {
          title: {
            text: '\u5185\u7F6EDrawer\u7EC4\u4EF6\u793A\u4F8B',
          },
          items: [
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A Json \u9884\u89C8',
                text: '\u663E\u793A Json \u9884\u89C8',
                handleClick: () => {
                  DataPreviewDrawer.open();
                },
              }),
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
                defaultValue: 'DrawerView',
                style: { width: '520px' },
                list: [
                  {
                    flag: 'BaseView',
                    name: 'BaseView',
                  },
                  {
                    flag: 'DrawerView',
                    name: 'DrawerView',
                  },
                  {
                    flag: 'BaseSimpleSinglePageSelectDrawer',
                    name: 'BaseSimpleSinglePageSelectDrawer',
                  },
                  {
                    flag: 'BaseSimpleMultiPageSelectDrawer',
                    name: 'BaseSimpleMultiPageSelectDrawer',
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

                    case 'DrawerView': {
                      code = codeDrawerView;
                      break;
                    }

                    case 'BaseSimpleSinglePageSelectDrawer': {
                      code = codeBaseSimpleSinglePageSelectDrawer;
                      break;
                    }

                    case 'BaseSimpleMultiPageSelectDrawer': {
                      code = codeBaseSimpleMultiPageSelectDrawer;
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

  // eslint-disable-next-line no-unused-vars
  afterSelectSuccess = (data) => {
    // console.log(data);

    showSimpleSuccessMessage('Select Success');
  };

  renderPresetOther = () => {
    return (
      <>
        <SimpleSinglePageConfirmSelectDrawer
          multiSelect={true}
          hideAfterSelect={false}
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageSingleSelectDrawer
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageMultiSelectDrawer
          multiSelect={true}
          hideAfterSelect={false}
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageFrontendPaginationConfirmSelectDrawer
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageFrontendPaginationSingleSelectDrawer
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageFrontendPaginationMultiSelectDrawer
          multiSelect={true}
          hideAfterSelect={false}
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleMultiPageConfirmSelectDrawer
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleMultiPageSingleSelectDrawer
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleMultiPageMultiSelectDrawer
          multiSelect={true}
          hideAfterSelect={false}
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageDrawer />

        <SimpleSingleFrontendPaginationPageDrawer />

        <SimpleMultiPageDrawer />

        <SimpleVerticalFlexDrawer
          afterClose={() => {
            logDebug({}, 'trigger afterClose');
          }}
        />

        <SimpleAddDrawer
          afterOK={({ subjoinData }) => {
            logDebug(subjoinData, 'trigger afterOK');
          }}
          afterClose={() => {
            logDebug({}, 'trigger afterClose');
          }}
        />

        <SimpleEditDrawer
          externalData={{ simpleId: 1 }}
          afterOK={({ subjoinData }) => {
            logDebug(subjoinData, 'trigger afterOK');
          }}
          afterClose={() => {
            logDebug({}, 'trigger afterClose');
          }}
        />

        <DataPreviewDrawer
          maskClosable
          title="Json\u9884\u89C8"
          descriptionLabel="\u7B80\u8981\u63CF\u8FF0"
          description="\u6570\u636E\u7ED3\u6784\u6982\u89C8"
          dataType={dataTypeCollection.jsonObjectList.flag}
          data={simpleJsonData}
        />
      </>
    );
  };
}

export default DrawerView;
`,dn,gn,Vn=(dn=(0,T.$j)(function(i){var c=i.schedulingControl;return{schedulingControl:c}}),dn(gn=function(i){F()(e,i);var c=B()(e);function e(h){var n;return v()(this,e),n=c.call(this,h),u()(l()(n),"establishToolBarConfig",function(){return{stick:!1,title:"\u64CD\u4F5C\u680F",tools:[{component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A VerticalFlexDrawer",text:"VerticalFlexDrawer",handleClick:function(){be.open()}})},{component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A AddDrawer",text:"AddDrawer",handleClick:function(){we.open()}})},{component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A EditDrawer",text:"EditDrawer",handleClick:function(){Fe.open()}})}]}}),u()(l()(n),"establishCardCollectionConfig",function(){var a=n.state,d=a.currentCode,S=a.currentCodeTitle,b=l()(n);return{list:[{title:{text:"\u5217\u8868\u5B9E\u4F8B"},items:[{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageDrawer",text:"\u663E\u793A SimpleSinglePageDrawer",handleClick:function(){Le.open()}})},{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSingleFrontendPaginationPageDrawer",text:"\u663E\u793A SimpleSingleFrontendPaginationPageDrawer",handleClick:function(){je.open()}})},{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleMultiPageDrawer",text:"\u663E\u793A SimpleMultiPageDrawer",handleClick:function(){k.open()}})}]},{title:{text:"\u5355\u9875\u5217\u8868\u9009\u62E9\u529F\u80FD\u5B9E\u4F8B [\u5E38\u89C4]"},items:[{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageConfirmSelectDrawer",text:"\u663E\u793A SimpleSinglePageConfirmSelectDrawer",handleClick:function(){nn.open()}})},{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageSingleSelectDrawer",text:"\u663E\u793A SimpleSinglePageSingleSelectDrawer",handleClick:function(){cn.open()}})},{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageMultiSelectDrawer",text:"\u663E\u793A SimpleSinglePageMultiSelectDrawer",handleClick:function(){ln.open()}})}]},{title:{text:"\u5355\u9875\u5217\u8868\u9009\u62E9\u529F\u80FD\u5B9E\u4F8B [\u524D\u7AEF\u6A21\u62DF\u5206\u9875]"},items:[{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SinglePageFrontendPaginationConfirmSelectDrawer",text:"\u663E\u793A SinglePageFrontendPaginationConfirmSelectDrawer",handleClick:function(){Ue.open()}})},{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageFrontendPaginationSingleSelectDrawer",text:"\u663E\u793A SimpleSinglePageFrontendPaginationSingleSelectDrawer",handleClick:function(){Xe.open()}})},{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageFrontendPaginationMultiSelectDrawer",text:"\u663E\u793A SimpleSinglePageFrontendPaginationMultiSelectDrawer",handleClick:function(){Ze.open()}})}]},{title:{text:"\u5206\u9875\u5217\u8868\u9009\u62E9\u529F\u80FD\u5B9E\u4F8B"},items:[{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleMultiPageConfirmSelectDrawer",text:"\u663E\u793A SimpleMultiPageConfirmSelectDrawer",handleClick:function(){oe.open()}})},{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleMultiPageSingleSelectDrawer",text:"\u663E\u793A SimpleMultiPageSingleSelectDrawer",handleClick:function(){Se.b.open()}})},{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleMultiPageMultiSelectDrawer",text:"\u663E\u793A SimpleMultiPageMultiSelectDrawer",handleClick:function(){fe.open()}})}]},{title:{text:"\u5185\u7F6EDrawer\u7EC4\u4EF6\u793A\u4F8B"},items:[{lg:8,type:o.ul.contentItemType.component,component:(0,f.ry)({title:"\u70B9\u51FB\u663E\u793A Json \u9884\u89C8",text:"\u663E\u793A Json \u9884\u89C8",handleClick:function(){_.iX.open()}})}]},{title:{text:"\u4EE3\u7801\u793A\u4F8B",subText:(0,m.cpJ)("Code",S)},extra:{affix:!0,split:!1,list:[{buildType:o.ul.extraBuildType.flexSelect,label:"\u663E\u793A\u6E90\u4EE3\u7801",size:"small",defaultValue:"DrawerView",style:{width:"520px"},list:[{flag:"BaseView",name:"BaseView"},{flag:"DrawerView",name:"DrawerView"},{flag:"BaseSimpleSinglePageSelectDrawer",name:"BaseSimpleSinglePageSelectDrawer"},{flag:"BaseSimpleMultiPageSelectDrawer",name:"BaseSimpleMultiPageSelectDrawer"}],dataConvert:f.hy,onChange:function(R){var K="";switch(R){case"BaseView":{K=jn.T;break}case"DrawerView":{K=mn;break}case"BaseSimpleSinglePageSelectDrawer":{K=Fn;break}case"BaseSimpleMultiPageSelectDrawer":{K=L;break}}b.setState({currentCodeTitle:R,currentCode:K}),(0,m.WWi)("\u5F53\u524D\u663E\u793A ".concat(R," \u6E90\u4EE3\u7801"))}}]},items:[{lg:24,type:o.ul.contentItemType.syntaxHighlighterView,fieldData:"syntaxHighlighter",value:d,language:"js",innerProps:{showLineNumbers:!1,wrapLines:!1}}]}]}}),u()(l()(n),"afterSelectSuccess",function(a){(0,m.e$S)("Select Success")}),u()(l()(n),"renderPresetOther",function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nn,{multiSelect:!0,hideAfterSelect:!1,afterSelectSuccess:n.afterSelectSuccess}),(0,r.jsx)(cn,{afterSelectSuccess:n.afterSelectSuccess}),(0,r.jsx)(ln,{multiSelect:!0,hideAfterSelect:!1,afterSelectSuccess:n.afterSelectSuccess}),(0,r.jsx)(Ue,{afterSelectSuccess:n.afterSelectSuccess}),(0,r.jsx)(Xe,{afterSelectSuccess:n.afterSelectSuccess}),(0,r.jsx)(Ze,{multiSelect:!0,hideAfterSelect:!1,afterSelectSuccess:n.afterSelectSuccess}),(0,r.jsx)(oe,{afterSelectSuccess:n.afterSelectSuccess}),(0,r.jsx)(Se.b,{afterSelectSuccess:n.afterSelectSuccess}),(0,r.jsx)(fe,{multiSelect:!0,hideAfterSelect:!1,afterSelectSuccess:n.afterSelectSuccess}),(0,r.jsx)(Le,{}),(0,r.jsx)(je,{}),(0,r.jsx)(k,{}),(0,r.jsx)(be,{afterClose:function(){(0,m.o7L)({},"trigger afterClose")}}),(0,r.jsx)(we,{afterOK:function(d){var S=d.subjoinData;(0,m.o7L)(S,"trigger afterOK")},afterClose:function(){(0,m.o7L)({},"trigger afterClose")}}),(0,r.jsx)(Fe,{externalData:{simpleId:1},afterOK:function(d){var S=d.subjoinData;(0,m.o7L)(S,"trigger afterOK")},afterClose:function(){(0,m.o7L)({},"trigger afterClose")}}),(0,r.jsx)(_.iX,{maskClosable:!0,title:"Json\u9884\u89C8",descriptionLabel:"\u7B80\u8981\u63CF\u8FF0",description:"\u6570\u636E\u7ED3\u6784\u6982\u89C8",dataType:o.EH.jsonObjectList.flag,data:s.MQ})]})}),n.state=p()(p()({},n.state),{},{pageTitle:"Drawer \u4EA4\u4E92\u793A\u4F8B",currentCodeTitle:"DrawerView",currentCode:mn}),n}return x()(e)}(In.P))||gn),On=Vn},46995:function(Q,U,t){var $=t(99609);function p(j,x){var A=typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(!A){if(Array.isArray(j)||(A=$(j))||x&&j&&typeof j.length=="number"){A&&(j=A);var v=0,V=function(){};return{s:V,n:function(){return v>=j.length?{done:!0}:{done:!1,value:j[v++]}},e:function(B){throw B},f:V}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,H=!1,F;return{s:function(){A=A.call(j)},n:function(){var B=A.next();return l=B.done,B},e:function(B){H=!0,F=B},f:function(){try{!l&&A.return!=null&&A.return()}finally{if(H)throw F}}}}Q.exports=p,Q.exports.__esModule=!0,Q.exports.default=Q.exports}}]);
