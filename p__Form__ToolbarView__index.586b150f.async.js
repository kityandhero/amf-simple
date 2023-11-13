"use strict";(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[916],{99903:function(I,r,e){e.d(r,{T:function(){return s}});var s=`import { DataForm } from 'antd-management-fast-framework';

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
`},88017:function(I,r,e){e.d(r,{P:function(){return B}});var s=e(86832),m=e.n(s),f=e(3782),_=e.n(f),y=e(25471),C=e.n(y),g=e(42314),l=e.n(g),h=e(96082),T=e.n(h),x=e(77475),E=x.jY.BaseAddForm,B=function(d){l()(t,d);var v=T()(t);function t(n){var a;return C()(this,t),a=v.call(this,n),a.state=m()(m()({},a.state),{},{submitApiPath:"simple/addBasicInfo"}),a}return _()(t)}(E)},67974:function(I,r,e){e.r(r),e.d(r,{default:function(){return R}});var s=e(86832),m=e.n(s),f=e(3782),_=e.n(f),y=e(25471),C=e.n(y),g=e(56507),l=e.n(g),h=e(42314),T=e.n(h),x=e(96082),E=e.n(x),B=e(73581),d=e.n(B),v=e(85388),t=e(56015),n=e(92870),a=e(92637),i=e(96294),A=e(21902),j=e(88017),O=e(99903),V=`import { connect } from 'easy-soft-dva';
import {
  formatCollection,
  getValueByKey,
  mergeArrowText,
  showInfoMessage,
  showSimpleInfoMessage,
} from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import {
  buildButton,
  buildColorText,
  convertOptionOrRadioData,
  iconBuilder,
} from 'antd-management-fast-component';

import { fieldData } from '../../../businessData/data';
import {
  renderCustomSimpleStatusRadio,
  renderCustomSimpleStatusSelect,
} from '../../../customSpecialComponents';
import { BaseView } from '../BaseView';
import { code as codeBaseView } from '../BaseView/codeSource';

import { code as codeFormView } from './codeSource';

@connect(({ schedulingControl }) => ({
  schedulingControl,
}))
class RadioView extends BaseView {
  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      pageTitle: 'Form \u4EA4\u4E92\u793A\u4F8B',
      currentCodeTitle: 'FormView',
      currentCode: codeFormView,
      attachmentBase64: '',
      image: '',
      rectangleImage: '',
    };
  }

  // eslint-disable-next-line no-unused-vars
  handleSwitchChange = (value) => {};

  establishToolBarConfig = () => {
    return {
      stick: false,
      title: '\u5DE5\u5177\u680F',
      tools: [
        {
          title: '\u6309\u94AE\u63D0\u793A1',
          component: buildButton({
            text: '\u6309\u94AE1',
            handleClick: () => {
              showInfoMessage({
                text: 'click button 4',
              });
            },
            disabled: false,
          }),
        },
        {
          title: '\u6309\u94AE\u63D0\u793A2',
          hidden: false,
          component: buildButton({
            text: '\u6309\u94AE2',
            handleClick: () => {
              showInfoMessage({
                text: 'click button 4',
              });
            },
          }),
        },
        {
          title: '\u6309\u94AE\u63D0\u793A2',
          hidden: false,
          component: buildButton({
            text: '\u6309\u94AE2',
            handleClick: () => {
              showInfoMessage({
                text: 'click button 4',
              });
            },
            processing: true,
          }),
        },
        {
          title: '\u6309\u94AE\u63D0\u793A4',
          hidden: false,
          component: buildButton({
            text: '\u6309\u94AE4',
            handleClick: () => {
              showInfoMessage({
                text: 'click button 4',
              });
            },
            confirm: true,
            placement: 'topRight',
            title: '\u5C06\u8981\u8FDB\u884C\u64CD\u4F5C\uFF0C\u786E\u5B9A\u5417\uFF1F',
            okText: '\u786E\u5B9A',
            cancelText: '\u53D6\u6D88',
          }),
        },
      ],
    };
  };

  establishCardCollectionConfig = () => {
    const { metaData, currentCode, currentCodeTitle } = this.state;

    const that = this;

    return {
      list: [
        {
          title: {
            text: '\u57FA\u672C\u4FE1\u606F',
            subText: buildColorText({
              textPrefix: '\u6587\u672C\u524D\u7F00',
              text: '\u9644\u5C5E\u6587\u672C',
              color: '#8909ef',
              wrapperBuilder: (c) => {
                return <>\u3010{c}\u3011</>;
              },
            }),
          },
          extra: {
            affix: true,
            split: false,
            list: [
              {
                buildType: cardConfig.extraBuildType.iconInfo,
                icon: iconBuilder.infoCircle(),
                text: '\u4E00\u4E9B\u8BF4\u660E',
              },
              {
                buildType: cardConfig.extraBuildType.divider,
              },
              {
                buildType: cardConfig.extraBuildType.component,
                component: renderCustomSimpleStatusRadio({}),
              },
              {
                buildType: cardConfig.extraBuildType.divider,
              },
              {
                buildType: cardConfig.extraBuildType.component,
                component: renderCustomSimpleStatusSelect({}),
              },
              {
                buildType: cardConfig.extraBuildType.divider,
              },
              {
                buildType: cardConfig.extraBuildType.generalButton,
                icon: iconBuilder.form(),
                text: '\u4E00\u822C\u6309\u94AE',
              },
              {
                buildType: cardConfig.extraBuildType.generalButton,
                hidden: true,
                icon: iconBuilder.form(),
                text: '\u9690\u85CF\u6309\u94AE',
              },
              {
                buildType: cardConfig.extraBuildType.refresh,
              },
              {
                buildType: cardConfig.extraBuildType.save,
              },
            ],
          },
          items: [
            {
              lg: 18,
              type: cardConfig.contentItemType.input,
              fieldData: fieldData.title,
              require: true,
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.onlyShowInput,
              fieldData: fieldData.simpleId,
              value: getValueByKey({
                data: metaData,
                key: fieldData.simpleId.name,
              }),
              canCopy: true,
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
            text: '\u5176\u4ED6\u4FE1\u606F',
          },
          items: [
            {
              type: cardConfig.contentItemType.onlyShowInput,
              fieldData: fieldData.createTime,
              value: getValueByKey({
                data: metaData,
                key: fieldData.createTime.name,
                format: formatCollection.datetime,
              }),
            },
            {
              type: cardConfig.contentItemType.onlyShowInput,
              fieldData: fieldData.updateTime,
              value: getValueByKey({
                data: metaData,
                key: fieldData.updateTime.name,
                format: formatCollection.datetime,
              }),
            },
            {
              lg: 24,
              type: cardConfig.contentItemType.save,
              config: {
                text: '\u5E95\u90E8\u5355\u884C\u4FDD\u5B58\u6309\u94AE',
              },
            },
            {
              lg: 24,
              type: cardConfig.contentItemType.button,
              config: {
                text: '\u5E95\u90E8\u4E00\u822C\u5355\u884C\u6309\u94AE',
              },
            },
            {
              lg: 24,
              type: cardConfig.contentItemType.actionList,
              config: [
                {
                  buildType: cardConfig.extraBuildType.refresh,
                  text: '\u5E95\u90E8\u5237\u65B0\u6309\u94AE',
                },
                {
                  buildType: cardConfig.extraBuildType.save,
                  text: '\u5E95\u90E8\u4FDD\u5B58\u6309\u94AE',
                },
                {
                  buildType: cardConfig.extraBuildType.generalButton,
                  text: '\u5E95\u90E8\u4E00\u822C\u6309\u94AE',
                },
              ],
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
                defaultValue: 'FormView',
                style: { width: '520px' },
                list: [
                  {
                    flag: 'BaseView',
                    name: 'BaseView',
                  },
                  {
                    flag: 'FormView',
                    name: 'FormView',
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

                    case 'FormView': {
                      code = codeFormView;
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

  renderPresetPageFooter = () => {
    return 'PageFooter';
  };
}

export default RadioView;
`,P=e(97458),S,M,k=(S=(0,v.$j)(function(b){var D=b.schedulingControl;return{schedulingControl:D}}),S(M=function(b){T()(p,b);var D=E()(p);function p(L){var o;return C()(this,p),o=D.call(this,L),d()(l()(o),"handleSwitchChange",function(u){}),d()(l()(o),"establishToolBarConfig",function(){return{stick:!1,title:"\u5DE5\u5177\u680F",tools:[{title:"\u6309\u94AE\u63D0\u793A1",component:(0,a.ry)({text:"\u6309\u94AE1",handleClick:function(){(0,t.vl6)({text:"click button 4"})},disabled:!1})},{title:"\u6309\u94AE\u63D0\u793A2",hidden:!1,component:(0,a.ry)({text:"\u6309\u94AE2",handleClick:function(){(0,t.vl6)({text:"click button 4"})}})},{title:"\u6309\u94AE\u63D0\u793A2",hidden:!1,component:(0,a.ry)({text:"\u6309\u94AE2",handleClick:function(){(0,t.vl6)({text:"click button 4"})},processing:!0})},{title:"\u6309\u94AE\u63D0\u793A4",hidden:!1,component:(0,a.ry)({text:"\u6309\u94AE4",handleClick:function(){(0,t.vl6)({text:"click button 4"})},confirm:!0,placement:"topRight",title:"\u5C06\u8981\u8FDB\u884C\u64CD\u4F5C\uFF0C\u786E\u5B9A\u5417\uFF1F",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"})}]}}),d()(l()(o),"establishCardCollectionConfig",function(){var u=o.state,F=u.metaData,K=u.currentCode,W=u.currentCodeTitle,N=l()(o);return{list:[{title:{text:"\u57FA\u672C\u4FE1\u606F",subText:(0,a.kt)({textPrefix:"\u6587\u672C\u524D\u7F00",text:"\u9644\u5C5E\u6587\u672C",color:"#8909ef",wrapperBuilder:function(c){return(0,P.jsxs)(P.Fragment,{children:["\u3010",c,"\u3011"]})}})},extra:{affix:!0,split:!1,list:[{buildType:n.ul.extraBuildType.iconInfo,icon:a.xM.infoCircle(),text:"\u4E00\u4E9B\u8BF4\u660E"},{buildType:n.ul.extraBuildType.divider},{buildType:n.ul.extraBuildType.component,component:(0,A.b8R)({})},{buildType:n.ul.extraBuildType.divider},{buildType:n.ul.extraBuildType.component,component:(0,A.x7N)({})},{buildType:n.ul.extraBuildType.divider},{buildType:n.ul.extraBuildType.generalButton,icon:a.xM.form(),text:"\u4E00\u822C\u6309\u94AE"},{buildType:n.ul.extraBuildType.generalButton,hidden:!0,icon:a.xM.form(),text:"\u9690\u85CF\u6309\u94AE"},{buildType:n.ul.extraBuildType.refresh},{buildType:n.ul.extraBuildType.save}]},items:[{lg:18,type:n.ul.contentItemType.input,fieldData:i.Ng.title,require:!0},{lg:6,type:n.ul.contentItemType.onlyShowInput,fieldData:i.Ng.simpleId,value:(0,t.s4e)({data:F,key:i.Ng.simpleId.name}),canCopy:!0}],instruction:{title:"\u5C40\u90E8\u64CD\u4F5C\u8BF4\u660E",showDivider:!1,showNumber:!0,list:[{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E1"},{text:"\u8FD9\u662F\u4E00\u4E9B\u64CD\u4F5C\u8BF4\u660E2"}]}},{title:{text:"\u5176\u4ED6\u4FE1\u606F"},items:[{type:n.ul.contentItemType.onlyShowInput,fieldData:i.Ng.createTime,value:(0,t.s4e)({data:F,key:i.Ng.createTime.name,format:t.JrP.datetime})},{type:n.ul.contentItemType.onlyShowInput,fieldData:i.Ng.updateTime,value:(0,t.s4e)({data:F,key:i.Ng.updateTime.name,format:t.JrP.datetime})},{lg:24,type:n.ul.contentItemType.save,config:{text:"\u5E95\u90E8\u5355\u884C\u4FDD\u5B58\u6309\u94AE"}},{lg:24,type:n.ul.contentItemType.button,config:{text:"\u5E95\u90E8\u4E00\u822C\u5355\u884C\u6309\u94AE"}},{lg:24,type:n.ul.contentItemType.actionList,config:[{buildType:n.ul.extraBuildType.refresh,text:"\u5E95\u90E8\u5237\u65B0\u6309\u94AE"},{buildType:n.ul.extraBuildType.save,text:"\u5E95\u90E8\u4FDD\u5B58\u6309\u94AE"},{buildType:n.ul.extraBuildType.generalButton,text:"\u5E95\u90E8\u4E00\u822C\u6309\u94AE"}]}]},{title:{text:"\u4EE3\u7801\u793A\u4F8B",subText:(0,t.cpJ)("Code",W)},extra:{affix:!0,split:!1,list:[{buildType:n.ul.extraBuildType.flexSelect,label:"\u663E\u793A\u6E90\u4EE3\u7801",size:"small",defaultValue:"FormView",style:{width:"520px"},list:[{flag:"BaseView",name:"BaseView"},{flag:"FormView",name:"FormView"}],dataConvert:a.hy,onChange:function(c){var w="";switch(c){case"BaseView":{w=O.T;break}case"FormView":{w=V;break}}N.setState({currentCodeTitle:c,currentCode:w}),(0,t.WWi)("\u5F53\u524D\u663E\u793A ".concat(c," \u6E90\u4EE3\u7801"))}}]},items:[{lg:24,type:n.ul.contentItemType.syntaxHighlighterView,fieldData:"syntaxHighlighter",value:K,language:"js",innerProps:{showLineNumbers:!1,wrapLines:!1}}]}]}}),d()(l()(o),"renderPresetPageFooter",function(){return"PageFooter"}),o.state=m()(m()({},o.state),{},{pageTitle:"Form \u4EA4\u4E92\u793A\u4F8B",currentCodeTitle:"FormView",currentCode:V,attachmentBase64:"",image:"",rectangleImage:""}),o}return _()(p)}(j.P))||M),R=k}}]);
