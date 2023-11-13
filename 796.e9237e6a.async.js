(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[796],{49760:function(D,M,e){"use strict";e.d(M,{O:function(){return R}});var c=e(86832),u=e.n(c),r=e(25471),C=e.n(r),o=e(3782),b=e.n(o),g=e(56507),h=e.n(g),P=e(42314),s=e.n(P),f=e(96082),p=e.n(f),A=e(73581),L=e.n(A),B=e(85388),t=e(56015),T=e(92637),v=e(77475),O=e(96294),I,E,m=v.mO.BaseSelectModal,a="bd5d02637eec418da885f933b0f40ec2",R=(I=(0,B.$j)(function(W){var n=W.simple,j=W.schedulingControl;return{simple:n,schedulingControl:j}}),I(E=function(W){s()(j,W);var n=p()(j);function j(K){var _;return C()(this,j),_=n.call(this,K,a),L()(h()(_),"transferData",function(U,w){var F=(0,t.s4e)({data:U,key:O.Ng.title.name});return(0,T.hy)(u()(u()({},U),{},{label:F}),w)}),_.state=u()(u()({},_.state),{},{pageTitle:"\u9009\u62E9\u6587\u7AE0",loadApiPath:"simple/singleList"}),_}return b()(j,null,[{key:"open",value:function(){v.Qs.open(a)}}]),j}(m))||E)},99903:function(D,M,e){"use strict";e.d(M,{T:function(){return c}});var c=`import { DataForm } from 'antd-management-fast-framework';

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
`},56401:function(D,M,e){"use strict";var c=e(86832),u=e.n(c),r=e(46995),C=e.n(r),o=e(3782),b=e.n(o),g=e(25471),h=e.n(g),P=e(56507),s=e.n(P),f=e(42314),p=e.n(f),A=e(96082),L=e.n(A),B=e(73581),t=e.n(B),T=e(79301),v=e(74912),O=e(40435),I=e(10223),E=e(25864),m=e(56015),a=e(92870),R=e(92637),W=e(77475),n=e(96294),j=e(69015),K=e(21902),_=e(97458),U=T.Z.Text,w=W.KV.MultiPageSelectDrawer,F=function(k){p()(x,k);var z=L()(x);function x(Z,H){var l;return h()(this,x),l=z.call(this,Z,H),t()(s()(l),"showCallProcess",!0),t()(s()(l),"reloadWhenShow",!0),t()(s()(l),"getStatusBadge",function(d){var i="default";switch(d){case n.zo.online:{i="processing";break}case n.zo.offline:{i="warning";break}default:{i="default";break}}return i}),t()(s()(l),"establishSearchCardConfig",function(){return{list:[{lg:12,type:a.fs.contentItemType.input,fieldData:n.Ng.title},{lg:8,type:a.fs.contentItemType.component,component:l.buildSearchCardButtonCore()}]}}),t()(s()(l),"establishDataContainerExtraActionCollectionConfig",function(){var d=l.state.listViewMode;return[{buildType:a.ug.dataContainerExtraActionBuildType.flexSelect,label:"\u663E\u793A\u6A21\u5F0F",size:"small",defaultValue:d,style:{width:"190px"},list:[{flag:a.ug.viewMode.table,name:"\u8868\u683C\u89C6\u56FE",availability:m.dvr.yes},{flag:a.ug.viewMode.list,name:"\u5217\u8868\u89C6\u56FE",availability:m.dvr.yes},{flag:a.ug.viewMode.cardCollectionView,name:"\u5361\u7247\u89C6\u56FE",availability:m.dvr.yes},{flag:a.ug.viewMode.customView,name:"\u81EA\u5B9A\u4E49\u89C6\u56FE",availability:m.dvr.yes}],dataConvert:R.hy,onChange:function(y,S){console.log({v:y,option:S}),l.setState({listViewMode:y})}}]}),t()(s()(l),"buildSelectNotificationDescription",function(d){if((0,m.kJL)(d)){var i=[],y=C()(d),S;try{for(y.s();!(S=y.n()).done;){var V=S.value,N=V.title;i.push(N)}}catch(Q){y.e(Q)}finally{y.f()}return i.length>0?"\u5DF2\u9009\u62E9: ".concat(i.join(",")):""}else{var J=d.title;return"\u5DF2\u9009\u62E9: ".concat(J)}}),t()(s()(l),"renderPresetListViewItemInner",function(d,i){var y=(0,m.s4e)({data:d,key:n.Ng.simpleId.name}),S=(0,m.s4e)({data:d,key:n.Ng.image.name}),V=(0,m.s4e)({data:d,key:n.Ng.title.name}),N=(0,m.s4e)({data:d,key:n.Ng.createTime.name,format:m.JrP.datetime});return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(v.Z.Item.Meta,{avatar:(0,m.aMH)(S)?(0,_.jsx)(O.C,{icon:R.xM.user()}):(0,_.jsx)(O.C,{src:S}),title:(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(U,{children:V})}),description:(0,_.jsxs)(I.Z,{split:(0,_.jsx)(E.Z,{type:"vertical"}),children:[(0,_.jsx)(R._w,{textPrefix:n.Ng.simpleId.label,separator:": ",text:(0,_.jsx)(U,{copyable:!0,children:y})}),(0,_.jsx)(R._w,{textPrefix:n.Ng.createTime.label,separator:": ",text:N})]})})})}),t()(s()(l),"getColumnWrapper",function(){return[{dataTarget:n.Ng.title,width:360,align:"left",showRichFacade:!0,emptyValue:"--"},{dataTarget:n.Ng.sort,width:100,showRichFacade:!0,emptyValue:"--"},{dataTarget:n.Ng.renderType,width:120,showRichFacade:!0,emptyValue:"--",facadeConfig:{color:j.gY.price},formatValue:function(i){return(0,K.naL)({value:i})}},{dataTarget:n.Ng.status,width:100,emptyValue:"--",showRichFacade:!0,facadeMode:a.T_.badge,facadeConfigBuilder:function(i){return{status:l.getStatusBadge(i),text:(0,K.vkd)({value:i})}}},{dataTarget:n.Ng.simpleId,width:140,showRichFacade:!0,canCopy:!0},{dataTarget:n.Ng.createTime,width:160,showRichFacade:!0,facadeMode:a.T_.datetime,emptyValue:"--"},a.Gf]}),t()(s()(l),"renderOverlayContent",function(){var d=l.state.sourceCode;return(0,_.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,_.jsx)(R.d3,{language:"js",value:d,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),l.state=u()(u()({},l.state),{},{pageTitle:"\u6570\u636E\u5206\u9875\u9009\u62E9\u5217\u8868",loadApiPath:"simple/singleList",listViewMode:a.ug.viewMode.table,showSelect:!0,tableScrollX:1220,sourceCode:"",overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),l}return b()(x)}(w);M.Z=F},69090:function(D,M,e){"use strict";e.d(M,{b:function(){return v}});var c=e(86832),u=e.n(c),r=e(25471),C=e.n(r),o=e(3782),b=e.n(o),g=e(42314),h=e.n(g),P=e(96082),s=e.n(P),f=e(85388),p=e(77475),A=e(56401),L=`import { connect } from 'easy-soft-dva';

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
`,B,t,T="5d72df79921e438fa86762e52929fce1",v=(B=(0,f.$j)(function(O){var I=O.simple,E=O.schedulingControl;return{simple:I,schedulingControl:E}}),B(t=function(O){h()(E,O);var I=s()(E);function E(m){var a;return C()(this,E),a=I.call(this,m,T),a.state=u()(u()({},a.state),{},{sourceCode:L}),a}return b()(E,null,[{key:"open",value:function(){p.Qs.open(T)}}]),E}(A.Z))||t)},88017:function(D,M,e){"use strict";e.d(M,{P:function(){return A}});var c=e(86832),u=e.n(c),r=e(3782),C=e.n(r),o=e(25471),b=e.n(o),g=e(42314),h=e.n(g),P=e(96082),s=e.n(P),f=e(77475),p=f.jY.BaseAddForm,A=function(L){h()(t,L);var B=s()(t);function t(T){var v;return b()(this,t),v=B.call(this,T),v.state=u()(u()({},v.state),{},{submitApiPath:"simple/addBasicInfo"}),v}return C()(t)}(p)},46995:function(D,M,e){var c=e(99609);function u(r,C){var o=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!o){if(Array.isArray(r)||(o=c(r))||C&&r&&typeof r.length=="number"){o&&(r=o);var b=0,g=function(){};return{s:g,n:function(){return b>=r.length?{done:!0}:{done:!1,value:r[b++]}},e:function(p){throw p},f:g}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h=!0,P=!1,s;return{s:function(){o=o.call(r)},n:function(){var p=o.next();return h=p.done,p},e:function(p){P=!0,s=p},f:function(){try{!h&&o.return!=null&&o.return()}finally{if(P)throw s}}}}D.exports=u,D.exports.__esModule=!0,D.exports.default=D.exports}}]);
