(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[435],{41826:function(H,U,g){"use strict";g.d(U,{Iq:function(){return X},Lw:function(){return Q},O9:function(){return u},Wk:function(){return N},X5:function(){return p},i2:function(){return l},mG:function(){return P},zC:function(){return w}});var K=g(10604),f=g.n(K),k=g(43410),D=g.n(k),T=g(56015),v=g(92870),j=g(96294);function l(M){var F=M.target,b=M.handleData,E=b===void 0?{}:b,A=M.successCallback,_=M.successMessage,L=_===void 0?null:_;(0,v.ND)({api:"simple/singleListTree",params:{},target:F,handleData:E,successCallback:A,successMessage:L,showProcessing:!1})}function Q(M){var F=M.target,b=M.handleData,E=M.successCallback,A=M.successMessage,_=A===void 0?null:A;(0,v.ND)({api:"simple/setOnline",params:{simpleId:(0,T.s4e)({data:b,key:j.Ng.simpleId.name})},target:F,handleData:b,successCallback:E,successMessage:_})}function w(M){var F=M.target,b=M.handleData,E=M.successCallback,A=M.successMessage,_=A===void 0?null:A;(0,v.ND)({api:"simple/setOffline",params:{simpleId:(0,T.s4e)({data:b,key:j.Ng.simpleId.name})},target:F,handleData:b,successCallback:E,successMessage:_})}function N(M){return y.apply(this,arguments)}function y(){return y=D()(f()().mark(function M(F){var b,E,A,_,L;return f()().wrap(function($){for(;;)switch($.prev=$.next){case 0:b=F.target,E=F.handleData,A=F.successCallback,_=F.successMessage,L=_===void 0?null:_,(0,v.ND)({api:"simple/refreshCache",params:{simpleId:(0,T.s4e)({data:E,key:j.Ng.simpleId.name})},target:b,handleData:E,successCallback:A,successMessage:L});case 2:case"end":return $.stop()}},M)})),y.apply(this,arguments)}function X(M){var F=M.target,b=M.handleData,E=M.successCallback,A=M.successMessage;(0,v.ND)({api:"simple/setMediaCollectionSort",params:{simpleId:(0,T.s4e)({data:b,key:j.Ng.simpleId.name}),ids:(0,T.s4e)({data:b,key:"ids"})},target:F,handleData:b,successCallback:E,successMessage:A})}function u(M){return I.apply(this,arguments)}function I(){return I=D()(f()().mark(function M(F){var b,E,A,_;return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:b=F.target,E=F.handleData,A=F.successCallback,_=F.successMessage,(0,v.ND)({api:"simple/removeMediaItem",params:{simpleId:(0,T.s4e)({data:E,key:j.Ng.simpleId.name}),id:(0,T.s4e)({data:E,key:j.js.id.name})},target:b,handleData:E,successCallback:A,successMessage:_});case 2:case"end":return s.stop()}},M)})),I.apply(this,arguments)}function p(M){return c.apply(this,arguments)}function c(){return c=D()(f()().mark(function M(F){var b,E,A,_;return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:b=F.target,E=F.handleData,A=F.successCallback,_=F.successMessage,(0,v.ND)({api:"simple/addImage",params:{simpleId:(0,T.s4e)({data:E,key:j.Ng.simpleId.name}),url:E.url||""},target:b,handleData:E,successCallback:A,successMessage:_});case 2:case"end":return s.stop()}},M)})),c.apply(this,arguments)}function C(M){return R.apply(this,arguments)}function R(){return R=D()(f()().mark(function M(F){var b,E,A,_;return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:b=F.target,E=F.handleData,A=F.successCallback,_=F.successMessage,(0,v.ND)({api:"simple/removeImage",params:{simpleId:(0,T.s4e)({data:E,key:j.Ng.simpleId.name})},target:b,handleData:E,successCallback:A,successMessage:_});case 2:case"end":return s.stop()}},M)})),R.apply(this,arguments)}function P(M){return Z.apply(this,arguments)}function Z(){return Z=D()(f()().mark(function M(F){var b,E,A,_;return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:b=F.target,E=F.handleData,A=F.successCallback,_=F.successMessage,(0,v.tA)({title:"\u79FB\u9664\u56FE\u7247",content:"\u5373\u5C06\u79FB\u9664\u56FE\u7247\uFF0C\u786E\u5B9A\u5417\uFF1F",target:b,handleData:E,successCallback:A,okAction:function(O){var r=O.target,J=O.handleData,Y=O.successCallback;C({target:r,handleData:J,successCallback:Y,successMessage:_})}});case 2:case"end":return s.stop()}},M)})),Z.apply(this,arguments)}},62915:function(H,U,g){"use strict";g.d(U,{T:function(){return K}});var K=`import { DataSingleView } from 'antd-management-fast-framework';

const { DataCore } = DataSingleView;

class BaseView extends DataCore {
  // \u7EC4\u4EF6\u521B\u5EFA\u540E\u81EA\u52A8\u8BF7\u6C42 state.loadApiPath \u914D\u7F6E\u7684\u63A5\u53E3\u6570\u636E
  loadRemoteRequestAfterMount = false;

  // \u5C55\u793A\u7EC4\u5EFA\u540E\u8FDB\u884C\u6570\u636E\u91CD\u7F6E
  resetDataAfterLoad = false;
}

export { BaseView };
`},41488:function(H,U,g){"use strict";g.d(U,{P:function(){return I}});var K=g(3782),f=g.n(K),k=g(25471),D=g.n(k),T=g(56507),v=g.n(T),j=g(42314),l=g.n(j),Q=g(96082),w=g.n(Q),N=g(73581),y=g.n(N),X=g(77475),u=X.zg.DataCore,I=function(p){l()(C,p);var c=w()(C);function C(){var R;D()(this,C);for(var P=arguments.length,Z=new Array(P),M=0;M<P;M++)Z[M]=arguments[M];return R=c.call.apply(c,[this].concat(Z)),y()(v()(R),"loadRemoteRequestAfterMount",!1),y()(v()(R),"resetDataAfterLoad",!1),R}return f()(C)}(u)},63402:function(H,U,g){"use strict";g.r(U),g.d(U,{default:function(){return Jn}});var K=g(86832),f=g.n(K),k=g(3782),D=g.n(k),T=g(25471),v=g.n(T),j=g(56507),l=g.n(j),Q=g(42314),w=g.n(Q),N=g(96082),y=g.n(N),X=g(73581),u=g.n(X),I=g(85388),p=g(56015),c=g(92870),C=g(92637),R=`import { Avatar, Divider, List, Space, Typography } from 'antd';

import {
  checkStringIsNullOrWhiteSpace,
  formatCollection,
  getValueByKey,
  isArray,
  logExecute,
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

import { refreshCacheAction } from '../../../../../businessAssists/action';
import { fieldData, statusCollection } from '../../../../../businessData/data';
import { colorCollection } from '../../../../../customConfig';
import {
  getSimpleRenderTypeName,
  getSimpleStatusName,
} from '../../../../../customSpecialComponents';

const { Text } = Typography;
const { MultiPageModal } = DataMultiPageView;

// \u7EC4\u4EF6\u57FA\u7C7B, \u4EC5\u4E3A\u4EE3\u7801\u590D\u7528\u6027\u8BBE\u8BA1, \u5177\u4F53\u4F7F\u7528\u65F6\u8BF7\u81EA\u884C\u8003\u8651
class BaseSimpleMultiPageSelectModal extends MultiPageModal {
  // \u5728\u63A7\u5236\u53F0\u663E\u793A\u7EC4\u5EFA\u5185\u8C03\u7528\u5E8F\u5217, \u4EC5\u4E3A\u8FDB\u884C\u5F00\u53D1\u8F85\u52A9
  showCallProcess = true;

  // \u663E\u793A\u65F6\u662F\u5426\u81EA\u52A8\u5237\u65B0\u6570\u636E;
  reloadWhenShow = true;

  constructor(properties, visibleFlag) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      pageTitle: '\u6570\u636E\u5206\u9875\u5217\u8868',
      // \u9875\u9762\u52A0\u8F7D\u65F6\u81EA\u52A8\u52A0\u8F7D\u7684\u8FDC\u7A0B\u8BF7\u6C42
      loadApiPath: 'simple/pageList',
      // \u8BBE\u7F6E\u9ED8\u8BA4\u8BD5\u56FE\u6A21\u5F0F\u4E3A table
      listViewMode: listViewConfig.viewMode.table,
      showSelect: true,
      // table \u663E\u793A\u6A21\u5F0F\u884C\u957F\u5EA6, \u5408\u7406\u8BBE\u7F6E\u53EF\u4EE5\u63D0\u5347\u7F8E\u89C2\u4EE5\u53CA\u7528\u6237\u4F53\u9A8C\uFF0C\u8D85\u51FA\u53EF\u89C1\u533A\u57DF\u5C06\u663E\u793A\u6EDA\u52A8\u6761
      tableScrollX: 1220,
      sourceCode: '',
    };
  }

  refreshCache = (r) => {
    refreshCacheAction({
      target: this,
      handleData: r,
    });
  };

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

  handleOtherOnResetTargetSearch = () => {
    logExecute('handleOtherOnResetTargetSearch');
  };

  // \u914D\u7F6E\u641C\u7D22\u6846
  establishSearchCardConfig = () => {
    return {
      list: [
        {
          lg: 9,
          type: searchCardConfig.contentItemType.input,
          fieldData: fieldData.title,
        },
        {
          lg: 6,
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

  establishListItemDropdownConfig = (record) => {
    return {
      size: 'small',
      text: '\u5237\u65B0',
      placement: 'topRight',
      icon: iconBuilder.reload(),
      handleButtonClick: ({ handleData }) => {
        this.refreshCache(handleData);
      },
      handleData: record,
      confirm: true,
      title: '\u5C06\u8981\u5237\u65B0\u7F13\u5B58\uFF0C\u786E\u5B9A\u5417\uFF1F',
    };
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

export default BaseSimpleMultiPageSelectModal;
`,P=g(77475),Z=g(46995),M=g.n(Z),F=g(79301),b=g(74912),E=g(40435),A=g(10223),_=g(25864),L=g(41826),s=g(96294),$=g(69015),O=g(21902),r=g(97458),J=F.Z.Text,Y=P.KV.MultiPageModal,Fn=function(i){w()(n,i);var d=y()(n);function n(S,e){var t;return v()(this,n),t=d.call(this,S,e),u()(l()(t),"showCallProcess",!0),u()(l()(t),"reloadWhenShow",!0),u()(l()(t),"refreshCache",function(a){(0,L.Wk)({target:l()(t),handleData:a})}),u()(l()(t),"getStatusBadge",function(a){var o="default";switch(a){case s.zo.online:{o="processing";break}case s.zo.offline:{o="warning";break}default:{o="default";break}}return o}),u()(l()(t),"handleOtherOnResetTargetSearch",function(){(0,p.qzd)("handleOtherOnResetTargetSearch")}),u()(l()(t),"establishSearchCardConfig",function(){return{list:[{lg:9,type:c.fs.contentItemType.input,fieldData:s.Ng.title},{lg:6,type:c.fs.contentItemType.component,component:t.buildSearchCardButtonCore()}]}}),u()(l()(t),"establishDataContainerExtraActionCollectionConfig",function(){var a=t.state.listViewMode;return[{buildType:c.ug.dataContainerExtraActionBuildType.flexSelect,label:"\u663E\u793A\u6A21\u5F0F",size:"small",defaultValue:a,style:{width:"190px"},list:[{flag:c.ug.viewMode.table,name:"\u8868\u683C\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.list,name:"\u5217\u8868\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.cardCollectionView,name:"\u5361\u7247\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.customView,name:"\u81EA\u5B9A\u4E49\u89C6\u56FE",availability:p.dvr.yes}],dataConvert:C.hy,onChange:function(m,h){console.log({v:m,option:h}),t.setState({listViewMode:m})}}]}),u()(l()(t),"buildSelectNotificationDescription",function(a){if((0,p.kJL)(a)){var o=[],m=M()(a),h;try{for(m.s();!(h=m.n()).done;){var x=h.value,B=x.title;o.push(B)}}catch(W){m.e(W)}finally{m.f()}return o.length>0?"\u5DF2\u9009\u62E9: ".concat(o.join(",")):""}else{var V=a.title;return"\u5DF2\u9009\u62E9: ".concat(V)}}),u()(l()(t),"renderPresetListViewItemInner",function(a,o){var m=(0,p.s4e)({data:a,key:s.Ng.simpleId.name}),h=(0,p.s4e)({data:a,key:s.Ng.image.name}),x=(0,p.s4e)({data:a,key:s.Ng.title.name}),B=(0,p.s4e)({data:a,key:s.Ng.createTime.name,format:p.JrP.datetime});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.Z.Item.Meta,{avatar:(0,p.aMH)(h)?(0,r.jsx)(E.C,{icon:C.xM.user()}):(0,r.jsx)(E.C,{src:h}),title:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(J,{children:x})}),description:(0,r.jsxs)(A.Z,{split:(0,r.jsx)(_.Z,{type:"vertical"}),children:[(0,r.jsx)(C._w,{textPrefix:s.Ng.simpleId.label,separator:": ",text:(0,r.jsx)(J,{copyable:!0,children:m})}),(0,r.jsx)(C._w,{textPrefix:s.Ng.createTime.label,separator:": ",text:B})]})})})}),u()(l()(t),"establishListItemDropdownConfig",function(a){return{size:"small",text:"\u5237\u65B0",placement:"topRight",icon:C.xM.reload(),handleButtonClick:function(m){var h=m.handleData;t.refreshCache(h)},handleData:a,confirm:!0,title:"\u5C06\u8981\u5237\u65B0\u7F13\u5B58\uFF0C\u786E\u5B9A\u5417\uFF1F"}}),u()(l()(t),"getColumnWrapper",function(){return[{dataTarget:s.Ng.title,width:360,align:"left",showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.sort,width:100,showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.renderType,width:120,showRichFacade:!0,emptyValue:"--",facadeConfig:{color:$.gY.price},formatValue:function(o){return(0,O.naL)({value:o})}},{dataTarget:s.Ng.status,width:100,emptyValue:"--",showRichFacade:!0,facadeMode:c.T_.badge,facadeConfigBuilder:function(o){return{status:t.getStatusBadge(o),text:(0,O.vkd)({value:o})}}},{dataTarget:s.Ng.simpleId,width:140,showRichFacade:!0,canCopy:!0},{dataTarget:s.Ng.createTime,width:160,showRichFacade:!0,facadeMode:c.T_.datetime,emptyValue:"--"},c.Gf]}),u()(l()(t),"renderOverlayContent",function(){var a=t.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(C.d3,{language:"js",value:a,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),t.state=f()(f()({},t.state),{},{pageTitle:"\u6570\u636E\u5206\u9875\u5217\u8868",loadApiPath:"simple/pageList",listViewMode:c.ug.viewMode.table,showSelect:!0,tableScrollX:1220,sourceCode:""}),t}return D()(n)}(Y),En=Fn,ee=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleMultiPageModal from '../BaseSimpleMultiPageModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'c45ecb32cbcc4e3fa409c7df6abd979e';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleMultiPageModal extends BaseSimpleMultiPageModal {
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

export { SimpleMultiPageModal };
`,ne,te,ae="c45ecb32cbcc4e3fa409c7df6abd979e",le=(ne=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),ne(te=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,ae),u()(l()(e),"confirmSelect",!0),e.state=f()(f()({},e.state),{},{sourceCode:ee}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(ae)}}]),n}(En))||te),yn=`import { Avatar, Divider, List, Space, Typography } from 'antd';

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
const { MultiPageSelectModal } = DataMultiPageView;

// \u7EC4\u4EF6\u57FA\u7C7B, \u4EC5\u4E3A\u4EE3\u7801\u590D\u7528\u6027\u8BBE\u8BA1, \u5177\u4F53\u4F7F\u7528\u65F6\u8BF7\u81EA\u884C\u8003\u8651
class BaseSimpleMultiPageSelectModal extends MultiPageSelectModal {
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
      loadApiPath: 'simple/pageList',
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
          lg: 6,
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

export default BaseSimpleMultiPageSelectModal;
`,ie=F.Z.Text,bn=P.KV.MultiPageSelectModal,Bn=function(i){w()(n,i);var d=y()(n);function n(S,e){var t;return v()(this,n),t=d.call(this,S,e),u()(l()(t),"showCallProcess",!0),u()(l()(t),"reloadWhenShow",!0),u()(l()(t),"getStatusBadge",function(a){var o="default";switch(a){case s.zo.online:{o="processing";break}case s.zo.offline:{o="warning";break}default:{o="default";break}}return o}),u()(l()(t),"establishSearchCardConfig",function(){return{list:[{lg:6,type:c.fs.contentItemType.input,fieldData:s.Ng.title},{lg:8,type:c.fs.contentItemType.component,component:t.buildSearchCardButtonCore()}]}}),u()(l()(t),"establishDataContainerExtraActionCollectionConfig",function(){var a=t.state.listViewMode;return[{buildType:c.ug.dataContainerExtraActionBuildType.flexSelect,label:"\u663E\u793A\u6A21\u5F0F",size:"small",defaultValue:a,style:{width:"190px"},list:[{flag:c.ug.viewMode.table,name:"\u8868\u683C\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.list,name:"\u5217\u8868\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.cardCollectionView,name:"\u5361\u7247\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.customView,name:"\u81EA\u5B9A\u4E49\u89C6\u56FE",availability:p.dvr.yes}],dataConvert:C.hy,onChange:function(m,h){console.log({v:m,option:h}),t.setState({listViewMode:m})}}]}),u()(l()(t),"buildSelectNotificationDescription",function(a){if((0,p.kJL)(a)){var o=[],m=M()(a),h;try{for(m.s();!(h=m.n()).done;){var x=h.value,B=x.title;o.push(B)}}catch(W){m.e(W)}finally{m.f()}return o.length>0?"\u5DF2\u9009\u62E9: ".concat(o.join(",")):""}else{var V=a.title;return"\u5DF2\u9009\u62E9: ".concat(V)}}),u()(l()(t),"renderPresetListViewItemInner",function(a,o){var m=(0,p.s4e)({data:a,key:s.Ng.simpleId.name}),h=(0,p.s4e)({data:a,key:s.Ng.image.name}),x=(0,p.s4e)({data:a,key:s.Ng.title.name}),B=(0,p.s4e)({data:a,key:s.Ng.createTime.name,format:p.JrP.datetime});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.Z.Item.Meta,{avatar:(0,p.aMH)(h)?(0,r.jsx)(E.C,{icon:C.xM.user()}):(0,r.jsx)(E.C,{src:h}),title:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ie,{children:x})}),description:(0,r.jsxs)(A.Z,{split:(0,r.jsx)(_.Z,{type:"vertical"}),children:[(0,r.jsx)(C._w,{textPrefix:s.Ng.simpleId.label,separator:": ",text:(0,r.jsx)(ie,{copyable:!0,children:m})}),(0,r.jsx)(C._w,{textPrefix:s.Ng.createTime.label,separator:": ",text:B})]})})})}),u()(l()(t),"getColumnWrapper",function(){return[{dataTarget:s.Ng.title,width:360,align:"left",showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.sort,width:100,showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.renderType,width:120,showRichFacade:!0,emptyValue:"--",facadeConfig:{color:$.gY.price},formatValue:function(o){return(0,O.naL)({value:o})}},{dataTarget:s.Ng.status,width:100,emptyValue:"--",showRichFacade:!0,facadeMode:c.T_.badge,facadeConfigBuilder:function(o){return{status:t.getStatusBadge(o),text:(0,O.vkd)({value:o})}}},{dataTarget:s.Ng.simpleId,width:140,showRichFacade:!0,canCopy:!0},{dataTarget:s.Ng.createTime,width:160,showRichFacade:!0,facadeMode:c.T_.datetime,emptyValue:"--"},c.Gf]}),u()(l()(t),"renderOverlayContent",function(){var a=t.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(C.d3,{language:"js",value:a,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),t.state=f()(f()({},t.state),{},{pageTitle:"\u6570\u636E\u5206\u9875\u9009\u62E9\u5217\u8868",loadApiPath:"simple/pageList",listViewMode:c.ug.viewMode.table,showSelect:!0,tableScrollX:1220,sourceCode:"",overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),t}return D()(n)}(bn),q=Bn,Dn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleMultiPageSelectModal from '../BaseSimpleMultiPageSelectModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '924250f1986948af8eb25b9a7f34858e';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleMultiPageConfirmSelectModal extends BaseSimpleMultiPageSelectModal {
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

export { SimpleMultiPageConfirmSelectModal };
`,oe,ue,se="924250f1986948af8eb25b9a7f34858e",re=(oe=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),oe(ue=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,se),u()(l()(e),"confirmSelect",!0),e.state=f()(f()({},e.state),{},{sourceCode:Dn}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(se)}}]),n}(q))||ue),Pn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleMultiPageSelectModal from '../BaseSimpleMultiPageSelectModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '9f5b76fbfbc4423596cfafc7c482fb3f';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleMultiPageMultiSelectModal extends BaseSimpleMultiPageSelectModal {
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

export { SimpleMultiPageMultiSelectModal };
`,de,ce,me="9f5b76fbfbc4423596cfafc7c482fb3f",ge=(de=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),de(ce=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,me),e.state=f()(f()({},e.state),{},{sourceCode:Pn}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(me)}}]),n}(q))||ce),An=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleMultiPageSelectModal from '../BaseSimpleMultiPageSelectModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'ff5e0d7c83614aef9368be127039af07';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleMultiPageSingleSelectModal extends BaseSimpleMultiPageSelectModal {
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

export { SimpleMultiPageSingleSelectModal };
`,pe,fe,Se="ff5e0d7c83614aef9368be127039af07",he=(pe=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),pe(fe=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,Se),e.state=f()(f()({},e.state),{},{sourceCode:An}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(Se)}}]),n}(q))||fe),Ce,Me,xn=P.mO.BaseAddModal,ve="21743fb1abc347a0ac55c2eed31d08ec",Fe=(Ce=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),Ce(Me=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,ve),u()(l()(e),"showCallProcess",!0),u()(l()(e),"supplementLoadRequestParams",function(t){var a=t,o=e.state.externalData,m=o.simpleId;return a.simpleId=m,a}),u()(l()(e),"supplementSubmitRequestParams",function(t){var a=t,o=e.state.externalData,m="";return(o||null)!=null&&(m=o.simpleId||""),a.simpleId=m,a}),u()(l()(e),"buildNotificationDescription",function(t,a,o,m,h){return"\u4FE1\u606F\u6DFB\u52A0\u6210\u529F\u3002"}),u()(l()(e),"buildTitleSubText",function(){var t=e.state.metaData;return(0,p.s4e)({data:t,key:s.Ng.title.name})}),u()(l()(e),"establishFormAdditionalConfig",function(){return{labelCol:{flex:"60px"},wrapperCol:{flex:"auto"}}}),u()(l()(e),"fillInitialValuesAfterLoad",function(t){var a=t.metaData,o=a===void 0?null:a,m=t.metaListData,h=m===void 0?[]:m,x=t.metaExtra,B=x===void 0?null:x,V=t.metaOriginalData,W=V===void 0?null:V,z={};return o!=null&&(z[s.Ng.sort.name]=(0,p.s4e)({data:o,key:s.Ng.sort.name,convert:p.$07.number})),z}),u()(l()(e),"establishCardCollectionConfig",function(){return{list:[{items:[{lg:24,type:c.ul.contentItemType.input,fieldData:s.Ng.title,require:!0}]}]}}),u()(l()(e),"establishHelpConfig",function(){return{title:"\u64CD\u4F5C\u63D0\u793A",list:[{text:"\u8FD9\u662F\u4E00\u6761\u64CD\u4F5C\u63D0\u793A\u3002"}]}}),e.state=f()(f()({},e.state),{},{pageTitle:"\u65B0\u589E\u4FE1\u606F",submitApiPath:"simple/addBasicInfo"}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(ve)}}]),n}(xn))||Me),wn=`import { connect } from 'easy-soft-dva';
import { convertCollection, getValueByKey } from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import { DataModal, switchControlAssist } from 'antd-management-fast-framework';

import { fieldData } from '../../../businessData/data';

const { BaseAddModal } = DataModal;

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '21743fb1abc347a0ac55c2eed31d08ec';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleAddModal extends BaseAddModal {
  //  \u5728\u63A7\u5236\u53F0\u663E\u793A\u7EC4\u5EFA\u5185\u8C03\u7528\u5E8F\u5217, \u4EC5\u4E3A\u8FDB\u884C\u5F00\u53D1\u8F85\u52A9
  showCallProcess = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      pageTitle: '\u65B0\u589E\u4FE1\u606F',
      submitApiPath: 'simple/addBasicInfo',
    };
  }

  supplementLoadRequestParams = (o) => {
    const d = o;
    const { externalData } = this.state;
    const { simpleId } = externalData;

    d.simpleId = simpleId;

    return d;
  };

  supplementSubmitRequestParams = (o) => {
    const d = o;
    const { externalData } = this.state;

    let simpleId = '';

    if ((externalData || null) != null) {
      simpleId = externalData.simpleId || '';
    }

    d.simpleId = simpleId;

    return d;
  };

  buildNotificationDescription = (
    // eslint-disable-next-line no-unused-vars
    singleData,
    // eslint-disable-next-line no-unused-vars
    listData,
    // eslint-disable-next-line no-unused-vars
    extraData,
    // eslint-disable-next-line no-unused-vars
    responseOriginalData,
    // eslint-disable-next-line no-unused-vars
    submitData,
  ) => {
    return \`\u4FE1\u606F\u6DFB\u52A0\u6210\u529F\u3002\`;
  };

  buildTitleSubText = () => {
    const { metaData } = this.state;

    return getValueByKey({
      data: metaData,
      key: fieldData.title.name,
    });
  };

  establishFormAdditionalConfig = () => {
    return {
      labelCol: {
        flex: '60px',
      },
      wrapperCol: {
        flex: 'auto',
      },
    };
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
      values[fieldData.sort.name] = getValueByKey({
        data: metaData,
        key: fieldData.sort.name,
        convert: convertCollection.number,
      });
    }

    return values;
  };

  establishCardCollectionConfig = () => {
    return {
      list: [
        {
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.input,
              fieldData: fieldData.title,
              require: true,
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
          text: '\u8FD9\u662F\u4E00\u6761\u64CD\u4F5C\u63D0\u793A\u3002',
        },
      ],
    };
  };
}

export { SimpleAddModal };
`,Ee,ye,_n=P.mO.BaseDisplayModal,be="be0f9aa812e8465eb95e0c9fc4f5f820",Be=(Ee=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),Ee(ye=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,be),u()(l()(e),"showCallProcess",!0),u()(l()(e),"afterImageUploadSuccess",function(t){e.setState({image:t})}),u()(l()(e),"fillInitialValuesAfterLoad",function(t){var a=t.metaData,o=a===void 0?null:a,m=t.metaListData,h=m===void 0?[]:m,x=t.metaExtra,B=x===void 0?null:x,V=t.metaOriginalData,W=V===void 0?null:V,z={};return z}),u()(l()(e),"establishCardCollectionConfig",function(){return{list:[{items:[{lg:24,type:c.ul.contentItemType.component,component:(0,r.jsx)("div",{style:{height:"240px"},children:(0,r.jsx)(C.kQ,{children:"\u5185\u5BB9\u533A\u57DF"})})}]}]}}),u()(l()(e),"establishHelpConfig",function(){return{title:"\u64CD\u4F5C\u63D0\u793A",list:[{text:"\u8FD9\u662F\u4E00\u6761\u64CD\u4F5C\u63D0\u793A\u3002"}]}}),e.state=f()(f()({},e.state),{},{pageTitle:"\u5C55\u793A\u7A97\u4F53",image:""}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(be)}}]),n}(_n))||ye),Tn=`import { connect } from 'easy-soft-dva';

import { cardConfig } from 'antd-management-fast-common';
import { CenterBox } from 'antd-management-fast-component';
import { DataModal, switchControlAssist } from 'antd-management-fast-framework';

const { BaseDisplayModal } = DataModal;

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'be0f9aa812e8465eb95e0c9fc4f5f820';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleDisplayModal extends BaseDisplayModal {
  //  \u5728\u63A7\u5236\u53F0\u663E\u793A\u7EC4\u5EFA\u5185\u8C03\u7528\u5E8F\u5217, \u4EC5\u4E3A\u8FDB\u884C\u5F00\u53D1\u8F85\u52A9
  showCallProcess = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      pageTitle: '\u5C55\u793A\u7A97\u4F53',
      image: '',
    };
  }

  afterImageUploadSuccess = (image) => {
    this.setState({ image });
  };

  fillInitialValuesAfterLoad = ({
    // eslint-disable-next-line no-unused-vars
    metaData = null,
    // eslint-disable-next-line no-unused-vars
    metaListData = [],
    // eslint-disable-next-line no-unused-vars
    metaExtra = null,
    // eslint-disable-next-line no-unused-vars
    metaOriginalData = null,
  }) => {
    const values = {};

    return values;
  };

  establishCardCollectionConfig = () => {
    return {
      list: [
        {
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={{ height: '240px' }}>
                  <CenterBox>\u5185\u5BB9\u533A\u57DF</CenterBox>
                </div>
              ),
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
          text: '\u8FD9\u662F\u4E00\u6761\u64CD\u4F5C\u63D0\u793A\u3002',
        },
      ],
    };
  };
}

export { SimpleDisplayModal };
`,De,Pe,In=P.mO.BaseUpdateModal,Ae="6620aec829e94ded955b58002a1c02ff",xe=(De=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),De(Pe=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,Ae),u()(l()(e),"showCallProcess",!0),u()(l()(e),"supplementLoadRequestParams",function(t){var a=t,o=e.state.externalData,m=o.simpleId;return a.simpleId=m,a}),u()(l()(e),"supplementSubmitRequestParams",function(t){var a=t,o=e.state.externalData,m="";return(o||null)!=null&&(m=o.simpleId||""),a.simpleId=m,a}),u()(l()(e),"buildNotificationDescription",function(t,a,o,m,h){return"\u4FE1\u606F\u66F4\u65B0\u6210\u529F\u3002"}),u()(l()(e),"buildTitleSubTextPrefix",function(){return"\u6587\u7AE0\u6807\u9898"}),u()(l()(e),"buildTitleSubTextAlign",function(){return"left"}),u()(l()(e),"buildTitleSubText",function(){var t=e.state.metaData;return(0,p.s4e)({data:t,key:s.Ng.title.name})}),u()(l()(e),"establishFormAdditionalConfig",function(){return{labelCol:{flex:"60px"},wrapperCol:{flex:"auto"}}}),u()(l()(e),"fillInitialValuesAfterLoad",function(t){var a=t.metaData,o=a===void 0?null:a,m=t.metaListData,h=m===void 0?[]:m,x=t.metaExtra,B=x===void 0?null:x,V=t.metaOriginalData,W=V===void 0?null:V,z={};return o!=null&&(z[s.Ng.title.name]=(0,p.s4e)({data:o,key:s.Ng.title.name})),z}),u()(l()(e),"establishCardCollectionConfig",function(){return{list:[{items:[{lg:24,type:c.ul.contentItemType.input,fieldData:s.Ng.title,require:!0}]}]}}),u()(l()(e),"establishHelpConfig",function(){return{title:"\u64CD\u4F5C\u63D0\u793A",list:[{text:"\u8FD9\u662F\u4E00\u6761\u64CD\u4F5C\u63D0\u793A\u3002"}]}}),e.state=f()(f()({},e.state),{},{pageTitle:"\u7F16\u8F91\u4FE1\u606F",loadApiPath:"simple/get",submitApiPath:"simple/updateBasicInfo"}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(Ae)}}]),n}(In))||Pe),Vn=`import { connect } from 'easy-soft-dva';
import { getValueByKey } from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import { DataModal, switchControlAssist } from 'antd-management-fast-framework';

import { fieldData } from '../../../businessData/data';

const { BaseUpdateModal } = DataModal;

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '6620aec829e94ded955b58002a1c02ff';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleEditModal extends BaseUpdateModal {
  // \u5728\u63A7\u5236\u53F0\u663E\u793A\u7EC4\u5EFA\u5185\u8C03\u7528\u5E8F\u5217, \u4EC5\u4E3A\u8FDB\u884C\u5F00\u53D1\u8F85\u52A9
  showCallProcess = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      pageTitle: '\u7F16\u8F91\u4FE1\u606F',
      loadApiPath: 'simple/get',
      submitApiPath: 'simple/updateBasicInfo',
    };
  }

  supplementLoadRequestParams = (o) => {
    const d = o;
    const { externalData } = this.state;
    const { simpleId } = externalData;

    d.simpleId = simpleId;

    return d;
  };

  supplementSubmitRequestParams = (o) => {
    const d = o;
    const { externalData } = this.state;

    let simpleId = '';

    if ((externalData || null) != null) {
      simpleId = externalData.simpleId || '';
    }

    d.simpleId = simpleId;

    return d;
  };

  buildNotificationDescription = (
    // eslint-disable-next-line no-unused-vars
    singleData,
    // eslint-disable-next-line no-unused-vars
    listData,
    // eslint-disable-next-line no-unused-vars
    extraData,
    // eslint-disable-next-line no-unused-vars
    responseOriginalData,
    // eslint-disable-next-line no-unused-vars
    submitData,
  ) => {
    return \`\u4FE1\u606F\u66F4\u65B0\u6210\u529F\u3002\`;
  };

  buildTitleSubTextPrefix = () => {
    return '\u6587\u7AE0\u6807\u9898';
  };

  buildTitleSubTextAlign = () => {
    return 'left';
  };

  buildTitleSubText = () => {
    const { metaData } = this.state;

    return getValueByKey({
      data: metaData,
      key: fieldData.title.name,
    });
  };

  establishFormAdditionalConfig = () => {
    return {
      labelCol: {
        flex: '60px',
      },
      wrapperCol: {
        flex: 'auto',
      },
    };
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
    }

    return values;
  };

  establishCardCollectionConfig = () => {
    return {
      list: [
        {
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.input,
              fieldData: fieldData.title,
              require: true,
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
          text: '\u8FD9\u662F\u4E00\u6761\u64CD\u4F5C\u63D0\u793A\u3002',
        },
      ],
    };
  };
}

export { SimpleEditModal };
`,we,_e,kn=P.mO.BaseDisplayModal,Te="4d48ce7532b74cf8ba5d393ca5f362e0",Ie=(we=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),we(_e=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,Te),u()(l()(e),"showCallProcess",!0),u()(l()(e),"afterImageUploadSuccess",function(t){e.setState({image:t})}),u()(l()(e),"fillInitialValuesAfterLoad",function(t){var a=t.metaData,o=a===void 0?null:a,m=t.metaListData,h=m===void 0?[]:m,x=t.metaExtra,B=x===void 0?null:x,V=t.metaOriginalData,W=V===void 0?null:V,z={};return z}),u()(l()(e),"establishCardCollectionConfig",function(){var t=e.state.image;return{list:[{items:[{lg:24,type:c.ul.contentItemType.imageUpload,image:t,uploadProps:{singleMode:{width:"100%",emptyImage:""}},action:"/simple/uploadImage",afterUploadSuccess:function(o){e.afterImageUploadSuccess(o)}}]}]}}),u()(l()(e),"establishHelpConfig",function(){return{title:"\u64CD\u4F5C\u63D0\u793A",list:[{text:"\u8FD9\u662F\u4E00\u6761\u64CD\u4F5C\u63D0\u793A\u3002"}]}}),e.state=f()(f()({},e.state),{},{pageTitle:"\u56FE\u7247\u4E0A\u4F20",image:""}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(Te)}}]),n}(kn))||_e),jn=`import { connect } from 'easy-soft-dva';

import { cardConfig } from 'antd-management-fast-common';
import { DataModal, switchControlAssist } from 'antd-management-fast-framework';

const { BaseDisplayModal } = DataModal;

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '4d48ce7532b74cf8ba5d393ca5f362e0';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleUploadImageModal extends BaseDisplayModal {
  //  \u5728\u63A7\u5236\u53F0\u663E\u793A\u7EC4\u5EFA\u5185\u8C03\u7528\u5E8F\u5217, \u4EC5\u4E3A\u8FDB\u884C\u5F00\u53D1\u8F85\u52A9
  showCallProcess = true;

  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      pageTitle: '\u56FE\u7247\u4E0A\u4F20',
      image: '',
    };
  }

  afterImageUploadSuccess = (image) => {
    this.setState({ image });
  };

  fillInitialValuesAfterLoad = ({
    // eslint-disable-next-line no-unused-vars
    metaData = null,
    // eslint-disable-next-line no-unused-vars
    metaListData = [],
    // eslint-disable-next-line no-unused-vars
    metaExtra = null,
    // eslint-disable-next-line no-unused-vars
    metaOriginalData = null,
  }) => {
    const values = {};

    return values;
  };

  establishCardCollectionConfig = () => {
    const { image } = this.state;

    return {
      list: [
        {
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.imageUpload,
              image,
              uploadProps: {
                singleMode: {
                  width: '100%',
                  emptyImage: '',
                },
              },
              action: \`/simple/uploadImage\`,
              afterUploadSuccess: (imageData) => {
                this.afterImageUploadSuccess(imageData);
              },
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
          text: '\u8FD9\u662F\u4E00\u6761\u64CD\u4F5C\u63D0\u793A\u3002',
        },
      ],
    };
  };
}

export { SimpleUploadImageModal };
`,Nn=`import { Avatar, Divider, List, Space, Typography } from 'antd';

import {
  checkStringIsNullOrWhiteSpace,
  formatCollection,
  getValueByKey,
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

import { refreshCacheAction } from '../../../../../businessAssists/action';
import { fieldData, statusCollection } from '../../../../../businessData/data';
import { colorCollection } from '../../../../../customConfig';
import {
  getSimpleRenderTypeName,
  getSimpleStatusName,
} from '../../../../../customSpecialComponents';

const { Text } = Typography;
const { SinglePageSelectModal } = DataSinglePageView;

// \u7EC4\u4EF6\u57FA\u7C7B, \u4EC5\u4E3A\u4EE3\u7801\u590D\u7528\u6027\u8BBE\u8BA1, \u5177\u4F53\u4F7F\u7528\u65F6\u8BF7\u81EA\u884C\u8003\u8651
class BaseSimpleSinglePageModal extends SinglePageSelectModal {
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

  refreshCache = (r) => {
    refreshCacheAction({
      target: this,
      handleData: r,
    });
  };

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

  establishListItemDropdownConfig = (record) => {
    return {
      size: 'small',
      text: '\u5237\u65B0',
      placement: 'topRight',
      icon: iconBuilder.reload(),
      handleButtonClick: ({ handleData }) => {
        this.refreshCache(handleData);
      },
      handleData: record,
      confirm: true,
      title: '\u5C06\u8981\u5237\u65B0\u7F13\u5B58\uFF0C\u786E\u5B9A\u5417\uFF1F',
    };
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

export { BaseSimpleSinglePageModal };
`,Ve=F.Z.Text,On=P.AP.SinglePageSelectModal,ke=function(i){w()(n,i);var d=y()(n);function n(S,e){var t;return v()(this,n),t=d.call(this,S,e),u()(l()(t),"showCallProcess",!0),u()(l()(t),"reloadWhenShow",!0),u()(l()(t),"refreshCache",function(a){(0,L.Wk)({target:l()(t),handleData:a})}),u()(l()(t),"getStatusBadge",function(a){var o="default";switch(a){case s.zo.online:{o="processing";break}case s.zo.offline:{o="warning";break}default:{o="default";break}}return o}),u()(l()(t),"establishSearchCardConfig",function(){return{list:[{lg:12,type:c.fs.contentItemType.input,fieldData:s.Ng.title},{lg:8,type:c.fs.contentItemType.component,component:t.buildSearchCardButtonCore()}]}}),u()(l()(t),"establishDataContainerExtraActionCollectionConfig",function(){var a=t.state.listViewMode;return[{buildType:c.ug.dataContainerExtraActionBuildType.flexSelect,label:"\u663E\u793A\u6A21\u5F0F",size:"small",defaultValue:a,style:{width:"190px"},list:[{flag:c.ug.viewMode.table,name:"\u8868\u683C\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.list,name:"\u5217\u8868\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.cardCollectionView,name:"\u5361\u7247\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.customView,name:"\u81EA\u5B9A\u4E49\u89C6\u56FE",availability:p.dvr.yes}],dataConvert:C.hy,onChange:function(m,h){console.log({v:m,option:h}),t.setState({listViewMode:m})}}]}),u()(l()(t),"renderPresetListViewItemInner",function(a,o){var m=(0,p.s4e)({data:a,key:s.Ng.simpleId.name}),h=(0,p.s4e)({data:a,key:s.Ng.image.name}),x=(0,p.s4e)({data:a,key:s.Ng.title.name}),B=(0,p.s4e)({data:a,key:s.Ng.createTime.name,format:p.JrP.datetime});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.Z.Item.Meta,{avatar:(0,p.aMH)(h)?(0,r.jsx)(E.C,{icon:C.xM.user()}):(0,r.jsx)(E.C,{src:h}),title:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Ve,{children:x})}),description:(0,r.jsxs)(A.Z,{split:(0,r.jsx)(_.Z,{type:"vertical"}),children:[(0,r.jsx)(C._w,{textPrefix:s.Ng.simpleId.label,separator:": ",text:(0,r.jsx)(Ve,{copyable:!0,children:m})}),(0,r.jsx)(C._w,{textPrefix:s.Ng.createTime.label,separator:": ",text:B})]})})})}),u()(l()(t),"establishListItemDropdownConfig",function(a){return{size:"small",text:"\u5237\u65B0",placement:"topRight",icon:C.xM.reload(),handleButtonClick:function(m){var h=m.handleData;t.refreshCache(h)},handleData:a,confirm:!0,title:"\u5C06\u8981\u5237\u65B0\u7F13\u5B58\uFF0C\u786E\u5B9A\u5417\uFF1F"}}),u()(l()(t),"getColumnWrapper",function(){return[{dataTarget:s.Ng.title,width:420,align:"left",showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.sort,width:100,showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.renderType,width:120,showRichFacade:!0,emptyValue:"--",facadeConfig:{color:$.gY.price},formatValue:function(o){return(0,O.naL)({value:o})}},{dataTarget:s.Ng.status,width:100,emptyValue:"--",showRichFacade:!0,facadeMode:c.T_.badge,facadeConfigBuilder:function(o){return{status:t.getStatusBadge(o),text:(0,O.vkd)({value:o})}}},{dataTarget:s.Ng.simpleId,width:140,showRichFacade:!0,canCopy:!0},{dataTarget:s.Ng.createTime,width:160,showRichFacade:!0,facadeMode:c.T_.datetime,emptyValue:"--"},c.Gf]}),u()(l()(t),"renderOverlayContent",function(){var a=t.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(C.d3,{language:"js",value:a,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),t.state=f()(f()({},t.state),{},{pageTitle:"\u6570\u636E\u5355\u9875\u9009\u62E9\u5217\u8868",loadApiPath:"simple/singleList",listViewMode:c.ug.viewMode.table,tableScrollX:1220,sourceCode:"",overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),t}return D()(n)}(On),je=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import { BaseSimpleSinglePageModal } from '../BaseSimpleSinglePageModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '9f490e094ff14b4487ef50af3b71a97f';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSingleFrontendPaginationPageModal extends BaseSimpleSinglePageModal {
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

export { SimpleSingleFrontendPaginationPageModal };
`,Ne,Oe,Le="9f490e094ff14b4487ef50af3b71a97f",Re=(Ne=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),Ne(Oe=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,Le),u()(l()(e),"useFrontendPagination",!0),e.state=f()(f()({},e.state),{},{sourceCode:je}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(Le)}}]),n}(ke))||Oe),Ue=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import { BaseSimpleSinglePageModal } from '../BaseSimpleSinglePageModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'ca2ee6282fa24f6bab279fd544a9bf3b';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageModal extends BaseSimpleSinglePageModal {
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

export { SimpleSinglePageModal };
`,Ke,$e,We="ca2ee6282fa24f6bab279fd544a9bf3b",ze=(Ke=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),Ke($e=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,We),e.state=f()(f()({},e.state),{},{sourceCode:Ue}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(We)}}]),n}(ke))||$e),Ln=`import { Avatar, Divider, List, Space, Typography } from 'antd';

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
const { SinglePageSelectModal } = DataSinglePageView;

// \u7EC4\u4EF6\u57FA\u7C7B, \u4EC5\u4E3A\u4EE3\u7801\u590D\u7528\u6027\u8BBE\u8BA1, \u5177\u4F53\u4F7F\u7528\u65F6\u8BF7\u81EA\u884C\u8003\u8651
class BaseSimpleSinglePageSelectModal extends SinglePageSelectModal {
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

export default BaseSimpleSinglePageSelectModal;
`,He=F.Z.Text,Rn=P.AP.SinglePageSelectModal,Un=function(i){w()(n,i);var d=y()(n);function n(S,e){var t;return v()(this,n),t=d.call(this,S,e),u()(l()(t),"showCallProcess",!0),u()(l()(t),"reloadWhenShow",!0),u()(l()(t),"getStatusBadge",function(a){var o="default";switch(a){case s.zo.online:{o="processing";break}case s.zo.offline:{o="warning";break}default:{o="default";break}}return o}),u()(l()(t),"establishSearchCardConfig",function(){return{list:[{lg:12,type:c.fs.contentItemType.input,fieldData:s.Ng.title},{lg:8,type:c.fs.contentItemType.component,component:t.buildSearchCardButtonCore()}]}}),u()(l()(t),"establishDataContainerExtraActionCollectionConfig",function(){var a=t.state.listViewMode;return[{buildType:c.ug.dataContainerExtraActionBuildType.flexSelect,label:"\u663E\u793A\u6A21\u5F0F",size:"small",defaultValue:a,style:{width:"190px"},list:[{flag:c.ug.viewMode.table,name:"\u8868\u683C\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.list,name:"\u5217\u8868\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.cardCollectionView,name:"\u5361\u7247\u89C6\u56FE",availability:p.dvr.yes},{flag:c.ug.viewMode.customView,name:"\u81EA\u5B9A\u4E49\u89C6\u56FE",availability:p.dvr.yes}],dataConvert:C.hy,onChange:function(m,h){console.log({v:m,option:h}),t.setState({listViewMode:m})}}]}),u()(l()(t),"buildSelectNotificationDescription",function(a){if((0,p.kJL)(a)){var o=[],m=M()(a),h;try{for(m.s();!(h=m.n()).done;){var x=h.value,B=x.title;o.push(B)}}catch(W){m.e(W)}finally{m.f()}return o.length>0?"\u5DF2\u9009\u62E9: ".concat(o.join(",")):""}else{var V=a.title;return"\u5DF2\u9009\u62E9: ".concat(V)}}),u()(l()(t),"renderPresetListViewItemInner",function(a,o){var m=(0,p.s4e)({data:a,key:s.Ng.simpleId.name}),h=(0,p.s4e)({data:a,key:s.Ng.image.name}),x=(0,p.s4e)({data:a,key:s.Ng.title.name}),B=(0,p.s4e)({data:a,key:s.Ng.createTime.name,format:p.JrP.datetime});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.Z.Item.Meta,{avatar:(0,p.aMH)(h)?(0,r.jsx)(E.C,{icon:C.xM.user()}):(0,r.jsx)(E.C,{src:h}),title:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(He,{children:x})}),description:(0,r.jsxs)(A.Z,{split:(0,r.jsx)(_.Z,{type:"vertical"}),children:[(0,r.jsx)(C._w,{textPrefix:s.Ng.simpleId.label,separator:": ",text:(0,r.jsx)(He,{copyable:!0,children:m})}),(0,r.jsx)(C._w,{textPrefix:s.Ng.createTime.label,separator:": ",text:B})]})})})}),u()(l()(t),"getColumnWrapper",function(){return[{dataTarget:s.Ng.title,width:420,align:"left",showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.sort,width:100,showRichFacade:!0,emptyValue:"--"},{dataTarget:s.Ng.renderType,width:120,showRichFacade:!0,emptyValue:"--",facadeConfig:{color:$.gY.price},formatValue:function(o){return(0,O.naL)({value:o})}},{dataTarget:s.Ng.status,width:100,emptyValue:"--",showRichFacade:!0,facadeMode:c.T_.badge,facadeConfigBuilder:function(o){return{status:t.getStatusBadge(o),text:(0,O.vkd)({value:o})}}},{dataTarget:s.Ng.simpleId,width:140,showRichFacade:!0,canCopy:!0},{dataTarget:s.Ng.createTime,width:160,showRichFacade:!0,facadeMode:c.T_.datetime,emptyValue:"--"},c.Gf]}),u()(l()(t),"renderOverlayContent",function(){var a=t.state.sourceCode;return(0,r.jsx)("div",{style:{width:"90%",height:"90%"},children:(0,r.jsx)(C.d3,{language:"js",value:a,other:{showLineNumbers:!1,wrapLines:!1},style:{height:"100%"}})})}),t.state=f()(f()({},t.state),{},{pageTitle:"\u6570\u636E\u5355\u9875\u9009\u62E9\u5217\u8868",loadApiPath:"simple/singleList",listViewMode:c.ug.viewMode.table,tableScrollX:1220,sourceCode:"",overlayButtonOpenText:"\u6253\u5F00\u6E90\u4EE3\u7801",overlayButtonCloseText:"\u5173\u95ED\u6E90\u4EE3\u7801"}),t}return D()(n)}(Rn),G=Un,Kn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectModal from '../../BaseSimpleSinglePageSelectModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'b7f7c4c27d7a42d095e80f176029ba8f';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageFrontendPaginationConfirmSelectModal extends BaseSimpleSinglePageSelectModal {
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

export { SimpleSinglePageFrontendPaginationConfirmSelectModal };
`,Qe,Ze,Ge="b7f7c4c27d7a42d095e80f176029ba8f",Xe=(Qe=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),Qe(Ze=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,Ge),u()(l()(e),"useFrontendPagination",!0),u()(l()(e),"confirmSelect",!0),e.state=f()(f()({},e.state),{},{sourceCode:Kn}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(Ge)}}]),n}(G))||Ze),$n=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectModal from '../../BaseSimpleSinglePageSelectModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'a5d9f23ea16f435cb13bc514e5286186';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageFrontendPaginationMultiSelectModal extends BaseSimpleSinglePageSelectModal {
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

export { SimpleSinglePageFrontendPaginationMultiSelectModal };
`,Je,Ye,qe="a5d9f23ea16f435cb13bc514e5286186",en=(Je=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),Je(Ye=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,qe),u()(l()(e),"useFrontendPagination",!0),e.state=f()(f()({},e.state),{},{sourceCode:$n}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(qe)}}]),n}(G))||Ye),Wn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectModal from '../../BaseSimpleSinglePageSelectModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '74673187d0dd4e34946d9bdeec7f299a';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageFrontendPaginationSingleSelectModal extends BaseSimpleSinglePageSelectModal {
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

export { SimpleSinglePageFrontendPaginationSingleSelectModal };
`,nn,tn,an="74673187d0dd4e34946d9bdeec7f299a",ln=(nn=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),nn(tn=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,an),u()(l()(e),"useFrontendPagination",!0),e.state=f()(f()({},e.state),{},{sourceCode:Wn}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(an)}}]),n}(G))||tn),zn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectModal from '../../BaseSimpleSinglePageSelectModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'c37d63e8866747878911d0b462e4be35';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageConfirmSelectModal extends BaseSimpleSinglePageSelectModal {
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

export { SimpleSinglePageConfirmSelectModal };
`,on,un,sn="c37d63e8866747878911d0b462e4be35",rn=(on=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),on(un=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,sn),u()(l()(e),"confirmSelect",!0),e.state=f()(f()({},e.state),{},{sourceCode:zn}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(sn)}}]),n}(G))||un),Hn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectModal from '../../BaseSimpleSinglePageSelectModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = '0963087edf024c2ba5f9b80ea166820f';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageMultiSelectModal extends BaseSimpleSinglePageSelectModal {
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

export { SimpleSinglePageMultiSelectModal };
`,dn,cn,mn="0963087edf024c2ba5f9b80ea166820f",gn=(dn=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),dn(cn=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,mn),e.state=f()(f()({},e.state),{},{sourceCode:Hn}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(mn)}}]),n}(G))||cn),Qn=`import { connect } from 'easy-soft-dva';

import { switchControlAssist } from 'antd-management-fast-framework';

import BaseSimpleSinglePageSelectModal from '../../BaseSimpleSinglePageSelectModal';

import { code } from './codeSource';

// \u663E\u9690\u63A7\u5236\u6807\u8BB0, \u5FC5\u987B\u8BBE\u7F6E, \u6807\u8BB0\u9700\u8981\u5168\u5C40\u552F\u4E00
const visibleFlag = 'b5aecada78b84ce881c6a100b71fe59a';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class SimpleSinglePageSingleSelectModal extends BaseSimpleSinglePageSelectModal {
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

export { SimpleSinglePageSingleSelectModal };
`,pn,fn,Sn="b5aecada78b84ce881c6a100b71fe59a",hn=(pn=(0,I.$j)(function(i){var d=i.simple,n=i.schedulingControl;return{simple:d,schedulingControl:n}}),pn(fn=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S,Sn),e.state=f()(f()({},e.state),{},{sourceCode:Qn}),e}return D()(n,null,[{key:"open",value:function(){P.Qs.open(Sn)}}]),n}(G))||fn),Zn=g(41488),Gn=g(62915),Cn=`import { connect } from 'easy-soft-dva';
import {
  logDebug,
  mergeArrowText,
  showSimpleInfoMessage,
} from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import {
  buildButton,
  convertOptionOrRadioData,
} from 'antd-management-fast-component';

import { code as codeBaseSimpleMultiPageModal } from '../../../businessComponents/Modals/Multi/ListModal/BaseSimpleMultiPageModal/codeSource';
import { SimpleMultiPageModal } from '../../../businessComponents/Modals/Multi/ListModal/SimpleMultiPageModal';
import { code as codeSimpleMultiPageModal } from '../../../businessComponents/Modals/Multi/ListModal/SimpleMultiPageModal/codeSource';
import { code as codeBaseSimpleMultiPageSelectModal } from '../../../businessComponents/Modals/Multi/SelectModal/BaseSimpleMultiPageSelectModal/codeSource';
import { SimpleMultiPageConfirmSelectModal } from '../../../businessComponents/Modals/Multi/SelectModal/SimpleMultiPageConfirmSelectModal';
import { SimpleMultiPageMultiSelectModal } from '../../../businessComponents/Modals/Multi/SelectModal/SimpleMultiPageMultiSelectModal';
import { SimpleMultiPageSingleSelectModal } from '../../../businessComponents/Modals/Multi/SelectModal/SimpleMultiPageSingleSelectModal';
import { SimpleAddModal } from '../../../businessComponents/Modals/SimpleAddModal';
import { code as codeSimpleAddModal } from '../../../businessComponents/Modals/SimpleAddModal/codeSource';
import { SimpleDisplayModal } from '../../../businessComponents/Modals/SimpleDisplayModal';
import { code as codeSimpleDisplayModal } from '../../../businessComponents/Modals/SimpleDisplayModal/codeSource';
import { SimpleEditModal } from '../../../businessComponents/Modals/SimpleEditModal';
import { code as codeSimpleEditModal } from '../../../businessComponents/Modals/SimpleEditModal/codeSource';
import { SimpleUploadImageModal } from '../../../businessComponents/Modals/SimpleUploadImageModal';
import { code as codeSimpleUploadImageModal } from '../../../businessComponents/Modals/SimpleUploadImageModal/codeSource';
import { code as codeBaseSimpleSinglePageModal } from '../../../businessComponents/Modals/Single/ListModal/BaseSimpleSinglePageModal/codeSource';
import { SimpleSingleFrontendPaginationPageModal } from '../../../businessComponents/Modals/Single/ListModal/SimpleSingleFrontendPaginationPageModal';
import { code as codeSimpleSingleFrontendPaginationPageModal } from '../../../businessComponents/Modals/Single/ListModal/SimpleSingleFrontendPaginationPageModal/codeSource';
import { SimpleSinglePageModal } from '../../../businessComponents/Modals/Single/ListModal/SimpleSinglePageModal';
import { code as codeSimpleSinglePageModal } from '../../../businessComponents/Modals/Single/ListModal/SimpleSinglePageModal/codeSource';
import { code as codeBaseSimpleSinglePageSelectModal } from '../../../businessComponents/Modals/Single/SelectModal/BaseSimpleSinglePageSelectModal/codeSource';
import { SimpleSinglePageFrontendPaginationConfirmSelectModal } from '../../../businessComponents/Modals/Single/SelectModal/FrontendPagination/SimpleSinglePageFrontendPaginationConfirmSelectModal';
import { SimpleSinglePageFrontendPaginationMultiSelectModal } from '../../../businessComponents/Modals/Single/SelectModal/FrontendPagination/SimpleSinglePageFrontendPaginationMultiSelectModal';
import { SimpleSinglePageFrontendPaginationSingleSelectModal } from '../../../businessComponents/Modals/Single/SelectModal/FrontendPagination/SimpleSinglePageFrontendPaginationSingleSelectModal';
import { SimpleSinglePageConfirmSelectModal } from '../../../businessComponents/Modals/Single/SelectModal/Normal/SimpleSinglePageConfirmSelectModal';
import { SimpleSinglePageMultiSelectModal } from '../../../businessComponents/Modals/Single/SelectModal/Normal/SimpleSinglePageMultiSelectModal';
import { SimpleSinglePageSingleSelectModal } from '../../../businessComponents/Modals/Single/SelectModal/Normal/SimpleSinglePageSingleSelectModal';
import { BaseView } from '../BaseView';
import { code as codeBaseView } from '../BaseView/codeSource';

import { code as codeModalView } from './codeSource';

@connect(({ schedulingControl }) => ({
  schedulingControl,
}))
class ModalView extends BaseView {
  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      pageTitle: 'Modal \u4EA4\u4E92\u793A\u4F8B',
      currentCodeTitle: 'ModalView',
      currentCode: codeModalView,
    };
  }

  establishToolBarConfig = () => {
    return {
      stick: false,
      title: '\u64CD\u4F5C',
      tools: [
        {
          component: buildButton({
            title: '\u70B9\u51FB\u663E\u793A SimpleDisplayModal',
            text: '\u663E\u793A SimpleDisplayModal',
            handleClick: () => {
              SimpleDisplayModal.open();
            },
            disabled: false,
          }),
        },
        {
          component: buildButton({
            title: '\u70B9\u51FB\u663E\u793A SimpleUploadImageModal',
            text: '\u663E\u793A SimpleUploadImageModal',
            handleClick: () => {
              SimpleUploadImageModal.open();
            },
            disabled: false,
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
            text: '\u8868\u5355',
          },
          width: 'auto',
          items: [
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A AddModal',
                text: '\u663E\u793A AddModal',
                handleClick: () => {
                  SimpleAddModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A EditModal',
                text: '\u663E\u793A EditModal',
                handleClick: () => {
                  SimpleEditModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.placeholder,
            },
          ],
        },
        {
          title: {
            text: '\u5217\u8868\u64CD\u4F5C',
          },
          items: [
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleSinglePageModal',
                text: '\u663E\u793A SimpleSinglePageModal',
                handleClick: () => {
                  SimpleSinglePageModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleSingleFrontendPaginationPageModal',
                text: '\u663E\u793A SimpleSingleFrontendPaginationPageModal',
                handleClick: () => {
                  SimpleSingleFrontendPaginationPageModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleMultiPageModal',
                text: '\u663E\u793A SimpleMultiPageModal',
                handleClick: () => {
                  SimpleMultiPageModal.open();
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
                title: '\u70B9\u51FB\u663E\u793A SimpleSinglePageConfirmSelectModal',
                text: '\u663E\u793A SimpleSinglePageConfirmSelectModal',
                handleClick: () => {
                  SimpleSinglePageConfirmSelectModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleSinglePageSingleSelectModal',
                text: '\u663E\u793A SimpleSinglePageSingleSelectModal',
                handleClick: () => {
                  SimpleSinglePageSingleSelectModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleSinglePageMultiSelectModal',
                text: '\u663E\u793A SimpleSinglePageMultiSelectModal',
                handleClick: () => {
                  SimpleSinglePageMultiSelectModal.open();
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
                  '\u70B9\u51FB\u663E\u793A SinglePageFrontendPaginationConfirmSelectModal',
                text: '\u663E\u793A SinglePageFrontendPaginationConfirmSelectModal',
                handleClick: () => {
                  SimpleSinglePageFrontendPaginationConfirmSelectModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title:
                  '\u70B9\u51FB\u663E\u793A SimpleSinglePageFrontendPaginationSingleSelectModal',
                text: '\u663E\u793A SimpleSinglePageFrontendPaginationSingleSelectModal',
                handleClick: () => {
                  SimpleSinglePageFrontendPaginationSingleSelectModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title:
                  '\u70B9\u51FB\u663E\u793A SimpleSinglePageFrontendPaginationMultiSelectModal',
                text: '\u663E\u793A SimpleSinglePageFrontendPaginationMultiSelectModal',
                handleClick: () => {
                  SimpleSinglePageFrontendPaginationMultiSelectModal.open();
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
                title: '\u70B9\u51FB\u663E\u793A SimpleMultiPageConfirmSelectModal',
                text: '\u663E\u793A SimpleMultiPageConfirmSelectModal',
                handleClick: () => {
                  SimpleMultiPageConfirmSelectModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleMultiPageSingleSelectModal',
                text: '\u663E\u793A SimpleMultiPageSingleSelectModal',
                handleClick: () => {
                  SimpleMultiPageSingleSelectModal.open();
                },
              }),
            },
            {
              lg: 8,
              type: cardConfig.contentItemType.component,
              component: buildButton({
                title: '\u70B9\u51FB\u663E\u793A SimpleMultiPageMultiSelectModal',
                text: '\u663E\u793A SimpleMultiPageMultiSelectModal',
                handleClick: () => {
                  SimpleMultiPageMultiSelectModal.open();
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
                defaultValue: 'ModalView',
                style: { width: '520px' },
                list: [
                  {
                    flag: 'BaseView',
                    name: 'BaseView',
                  },
                  {
                    flag: 'ModalView',
                    name: 'ModalView',
                  },
                  {
                    flag: 'BaseSimpleSinglePageModal',
                    name: 'BaseSimpleSinglePageModal',
                  },
                  {
                    flag: 'BaseSimpleSinglePageSelectModal',
                    name: 'BaseSimpleSinglePageSelectModal',
                  },
                  {
                    flag: 'BaseSimpleMultiPageModal',
                    name: 'BaseSimpleMultiPageModal',
                  },
                  {
                    flag: 'BaseSimpleMultiPageSelectModal',
                    name: 'BaseSimpleMultiPageSelectModal',
                  },
                  {
                    flag: 'SimpleUploadImageModal',
                    name: 'SimpleUploadImageModal',
                  },
                  {
                    flag: 'SimpleDisplayModal',
                    name: 'SimpleDisplayModal',
                  },
                  {
                    flag: 'SimpleAddModal',
                    name: 'SimpleAddModal',
                  },
                  {
                    flag: 'SimpleEditModal',
                    name: 'SimpleEditModal',
                  },
                  {
                    flag: 'SimpleMultiPageModal',
                    name: 'SimpleMultiPageModal',
                  },
                  {
                    flag: 'SimpleSinglePageModal',
                    name: 'SimpleSinglePageModal',
                  },
                  {
                    flag: 'SimpleSingleFrontendPaginationPageModal',
                    name: 'SimpleSingleFrontendPaginationPageModal',
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

                    case 'ModalView': {
                      code = codeModalView;
                      break;
                    }

                    case 'BaseSimpleSinglePageModal': {
                      code = codeBaseSimpleSinglePageModal;
                      break;
                    }

                    case 'BaseSimpleSinglePageSelectModal': {
                      code = codeBaseSimpleSinglePageSelectModal;
                      break;
                    }

                    case 'BaseSimpleMultiPageModal': {
                      code = codeBaseSimpleMultiPageModal;
                      break;
                    }

                    case 'BaseSimpleMultiPageSelectModal': {
                      code = codeBaseSimpleMultiPageSelectModal;
                      break;
                    }

                    case 'SimpleDisplayModal': {
                      code = codeSimpleDisplayModal;

                      break;
                    }

                    case 'SimpleUploadImageModal': {
                      code = codeSimpleUploadImageModal;

                      break;
                    }

                    case 'SimpleAddModal': {
                      code = codeSimpleAddModal;

                      break;
                    }

                    case 'SimpleEditModal': {
                      code = codeSimpleEditModal;

                      break;
                    }

                    case 'SimpleMultiPageModal': {
                      code = codeSimpleMultiPageModal;

                      break;
                    }

                    case 'SimpleSinglePageModal': {
                      code = codeSimpleSinglePageModal;

                      break;
                    }

                    case 'SimpleSingleFrontendPaginationPageModal': {
                      code = codeSimpleSingleFrontendPaginationPageModal;

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

  renderPresetOther = () => {
    return (
      <>
        <SimpleSinglePageConfirmSelectModal
          multiSelect={true}
          hideAfterSelect={false}
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageSingleSelectModal
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageMultiSelectModal
          multiSelect={true}
          hideAfterSelect={false}
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageFrontendPaginationConfirmSelectModal
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageFrontendPaginationSingleSelectModal
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageFrontendPaginationMultiSelectModal
          multiSelect={true}
          hideAfterSelect={false}
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleMultiPageConfirmSelectModal
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleMultiPageSingleSelectModal
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleMultiPageMultiSelectModal
          multiSelect={true}
          hideAfterSelect={false}
          afterSelectSuccess={this.afterSelectSuccess}
        />

        <SimpleSinglePageModal />

        <SimpleSingleFrontendPaginationPageModal />

        <SimpleMultiPageModal />

        <SimpleDisplayModal />

        <SimpleUploadImageModal />

        <SimpleAddModal
          afterOK={({ subjoinData }) => {
            logDebug(subjoinData, 'trigger afterOK');
          }}
          afterCancel={() => {
            logDebug({}, 'trigger afterCancel');
          }}
        />

        <SimpleEditModal
          externalData={{ simpleId: 1 }}
          afterOK={({ subjoinData }) => {
            logDebug(subjoinData, 'trigger afterOK');
          }}
          afterCancel={() => {
            logDebug({}, 'trigger afterCancel');
          }}
        />
      </>
    );
  };
}

export default ModalView;
`,Mn,vn,Xn=(Mn=(0,I.$j)(function(i){var d=i.schedulingControl;return{schedulingControl:d}}),Mn(vn=function(i){w()(n,i);var d=y()(n);function n(S){var e;return v()(this,n),e=d.call(this,S),u()(l()(e),"establishToolBarConfig",function(){return{stick:!1,title:"\u64CD\u4F5C",tools:[{component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleDisplayModal",text:"\u663E\u793A SimpleDisplayModal",handleClick:function(){Be.open()},disabled:!1})},{component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleUploadImageModal",text:"\u663E\u793A SimpleUploadImageModal",handleClick:function(){Ie.open()},disabled:!1})}]}}),u()(l()(e),"establishCardCollectionConfig",function(){var t=e.state,a=t.currentCode,o=t.currentCodeTitle,m=l()(e);return{list:[{title:{text:"\u8868\u5355"},width:"auto",items:[{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A AddModal",text:"\u663E\u793A AddModal",handleClick:function(){Fe.open()}})},{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A EditModal",text:"\u663E\u793A EditModal",handleClick:function(){xe.open()}})},{lg:8,type:c.ul.contentItemType.placeholder}]},{title:{text:"\u5217\u8868\u64CD\u4F5C"},items:[{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageModal",text:"\u663E\u793A SimpleSinglePageModal",handleClick:function(){ze.open()}})},{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSingleFrontendPaginationPageModal",text:"\u663E\u793A SimpleSingleFrontendPaginationPageModal",handleClick:function(){Re.open()}})},{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleMultiPageModal",text:"\u663E\u793A SimpleMultiPageModal",handleClick:function(){le.open()}})}]},{title:{text:"\u5355\u9875\u5217\u8868\u9009\u62E9\u529F\u80FD\u5B9E\u4F8B [\u5E38\u89C4]"},items:[{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageConfirmSelectModal",text:"\u663E\u793A SimpleSinglePageConfirmSelectModal",handleClick:function(){rn.open()}})},{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageSingleSelectModal",text:"\u663E\u793A SimpleSinglePageSingleSelectModal",handleClick:function(){hn.open()}})},{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageMultiSelectModal",text:"\u663E\u793A SimpleSinglePageMultiSelectModal",handleClick:function(){gn.open()}})}]},{title:{text:"\u5355\u9875\u5217\u8868\u9009\u62E9\u529F\u80FD\u5B9E\u4F8B [\u524D\u7AEF\u6A21\u62DF\u5206\u9875]"},items:[{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SinglePageFrontendPaginationConfirmSelectModal",text:"\u663E\u793A SinglePageFrontendPaginationConfirmSelectModal",handleClick:function(){Xe.open()}})},{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageFrontendPaginationSingleSelectModal",text:"\u663E\u793A SimpleSinglePageFrontendPaginationSingleSelectModal",handleClick:function(){ln.open()}})},{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleSinglePageFrontendPaginationMultiSelectModal",text:"\u663E\u793A SimpleSinglePageFrontendPaginationMultiSelectModal",handleClick:function(){en.open()}})}]},{title:{text:"\u5206\u9875\u5217\u8868\u9009\u62E9\u529F\u80FD\u5B9E\u4F8B"},items:[{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleMultiPageConfirmSelectModal",text:"\u663E\u793A SimpleMultiPageConfirmSelectModal",handleClick:function(){re.open()}})},{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleMultiPageSingleSelectModal",text:"\u663E\u793A SimpleMultiPageSingleSelectModal",handleClick:function(){he.open()}})},{lg:8,type:c.ul.contentItemType.component,component:(0,C.ry)({title:"\u70B9\u51FB\u663E\u793A SimpleMultiPageMultiSelectModal",text:"\u663E\u793A SimpleMultiPageMultiSelectModal",handleClick:function(){ge.open()}})}]},{title:{text:"\u4EE3\u7801\u793A\u4F8B",subText:(0,p.cpJ)("Code",o)},extra:{affix:!0,split:!1,list:[{buildType:c.ul.extraBuildType.flexSelect,label:"\u663E\u793A\u6E90\u4EE3\u7801",size:"small",defaultValue:"ModalView",style:{width:"520px"},list:[{flag:"BaseView",name:"BaseView"},{flag:"ModalView",name:"ModalView"},{flag:"BaseSimpleSinglePageModal",name:"BaseSimpleSinglePageModal"},{flag:"BaseSimpleSinglePageSelectModal",name:"BaseSimpleSinglePageSelectModal"},{flag:"BaseSimpleMultiPageModal",name:"BaseSimpleMultiPageModal"},{flag:"BaseSimpleMultiPageSelectModal",name:"BaseSimpleMultiPageSelectModal"},{flag:"SimpleUploadImageModal",name:"SimpleUploadImageModal"},{flag:"SimpleDisplayModal",name:"SimpleDisplayModal"},{flag:"SimpleAddModal",name:"SimpleAddModal"},{flag:"SimpleEditModal",name:"SimpleEditModal"},{flag:"SimpleMultiPageModal",name:"SimpleMultiPageModal"},{flag:"SimpleSinglePageModal",name:"SimpleSinglePageModal"},{flag:"SimpleSingleFrontendPaginationPageModal",name:"SimpleSingleFrontendPaginationPageModal"}],dataConvert:C.hy,onChange:function(x){var B="";switch(x){case"BaseView":{B=Gn.T;break}case"ModalView":{B=Cn;break}case"BaseSimpleSinglePageModal":{B=Nn;break}case"BaseSimpleSinglePageSelectModal":{B=Ln;break}case"BaseSimpleMultiPageModal":{B=R;break}case"BaseSimpleMultiPageSelectModal":{B=yn;break}case"SimpleDisplayModal":{B=Tn;break}case"SimpleUploadImageModal":{B=jn;break}case"SimpleAddModal":{B=wn;break}case"SimpleEditModal":{B=Vn;break}case"SimpleMultiPageModal":{B=ee;break}case"SimpleSinglePageModal":{B=Ue;break}case"SimpleSingleFrontendPaginationPageModal":{B=je;break}}m.setState({currentCodeTitle:x,currentCode:B}),(0,p.WWi)("\u5F53\u524D\u663E\u793A ".concat(x," \u6E90\u4EE3\u7801"))}}]},items:[{lg:24,type:c.ul.contentItemType.syntaxHighlighterView,fieldData:"syntaxHighlighter",value:a,language:"js",innerProps:{showLineNumbers:!1,wrapLines:!1}}]}]}}),u()(l()(e),"renderPresetOther",function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(rn,{multiSelect:!0,hideAfterSelect:!1,afterSelectSuccess:e.afterSelectSuccess}),(0,r.jsx)(hn,{afterSelectSuccess:e.afterSelectSuccess}),(0,r.jsx)(gn,{multiSelect:!0,hideAfterSelect:!1,afterSelectSuccess:e.afterSelectSuccess}),(0,r.jsx)(Xe,{afterSelectSuccess:e.afterSelectSuccess}),(0,r.jsx)(ln,{afterSelectSuccess:e.afterSelectSuccess}),(0,r.jsx)(en,{multiSelect:!0,hideAfterSelect:!1,afterSelectSuccess:e.afterSelectSuccess}),(0,r.jsx)(re,{afterSelectSuccess:e.afterSelectSuccess}),(0,r.jsx)(he,{afterSelectSuccess:e.afterSelectSuccess}),(0,r.jsx)(ge,{multiSelect:!0,hideAfterSelect:!1,afterSelectSuccess:e.afterSelectSuccess}),(0,r.jsx)(ze,{}),(0,r.jsx)(Re,{}),(0,r.jsx)(le,{}),(0,r.jsx)(Be,{}),(0,r.jsx)(Ie,{}),(0,r.jsx)(Fe,{afterOK:function(a){var o=a.subjoinData;(0,p.o7L)(o,"trigger afterOK")},afterCancel:function(){(0,p.o7L)({},"trigger afterCancel")}}),(0,r.jsx)(xe,{externalData:{simpleId:1},afterOK:function(a){var o=a.subjoinData;(0,p.o7L)(o,"trigger afterOK")},afterCancel:function(){(0,p.o7L)({},"trigger afterCancel")}})]})}),e.state=f()(f()({},e.state),{},{pageTitle:"Modal \u4EA4\u4E92\u793A\u4F8B",currentCodeTitle:"ModalView",currentCode:Cn}),e}return D()(n)}(Zn.P))||vn),Jn=Xn},46995:function(H,U,g){var K=g(99609);function f(k,D){var T=typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(!T){if(Array.isArray(k)||(T=K(k))||D&&k&&typeof k.length=="number"){T&&(k=T);var v=0,j=function(){};return{s:j,n:function(){return v>=k.length?{done:!0}:{done:!1,value:k[v++]}},e:function(y){throw y},f:j}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,Q=!1,w;return{s:function(){T=T.call(k)},n:function(){var y=T.next();return l=y.done,y},e:function(y){Q=!0,w=y},f:function(){try{!l&&T.return!=null&&T.return()}finally{if(Q)throw w}}}}H.exports=f,H.exports.__esModule=!0,H.exports.default=H.exports}}]);
