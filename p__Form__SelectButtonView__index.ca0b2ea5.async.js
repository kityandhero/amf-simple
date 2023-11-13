"use strict";(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[428],{22765:function(q,E,e){e.r(E),e.d(E,{default:function(){return k}});var W=e(86832),i=e.n(W),R=e(3782),h=e.n(R),J=e(25471),g=e.n(J),G=e(56507),c=e.n(G),K=e(42314),p=e.n(K),Q=e(96082),v=e.n(Q),U=e(73581),d=e.n(U),C=e(85388),B=e(56015),S=e(92870),y=e(92637),_=e(52983),T=e(69090),m=e(97458),D,A,F=y.hu.BaseElasticitySelectButton,j=(D=(0,C.$j)(function(a){var o=a.smsCategory,t=a.schedulingControl;return{smsCategory:o,schedulingControl:t}}),D(A=function(a){p()(t,a);var o=v()(t);function t(){var l;g()(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return l=o.call.apply(o,[this].concat(s)),d()(c()(l),"openSelector",function(){T.b.open()}),d()(c()(l),"renderPresetSelector",function(){var f=l.props.label;return(0,m.jsx)(T.b,{title:f,width:1200,afterSelectSuccess:l.afterSelectSuccess})}),l}return h()(t)}(F))||A);j.defaultProps=i()(i()({},F.defaultProps),{},{label:"Label",helper:""});var P=e(49760),b,I,M=y.hu.BaseElasticitySelectButton,L=(b=(0,C.$j)(function(a){var o=a.smsCategory,t=a.schedulingControl;return{smsCategory:o,schedulingControl:t}}),b(I=function(a){p()(t,a);var o=v()(t);function t(){var l;g()(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return l=o.call.apply(o,[this].concat(s)),d()(c()(l),"openSelector",function(){P.O.open()}),d()(c()(l),"renderPresetSelector",function(){var f=l.props,V=f.label,x=f.helper;return(0,m.jsx)(P.O,{label:V,helper:x,labelWidth:100,afterSelectSuccess:l.afterSelectSuccess})}),l}return h()(t)}(M))||I);L.defaultProps=i()(i()({},M.defaultProps),{},{label:"Label",helper:""});var O=e(96294),X=e(88017),Y=e(99903),$=`import { connect } from 'easy-soft-dva';
import { mergeArrowText, showSimpleInfoMessage } from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import { convertOptionOrRadioData } from 'antd-management-fast-component';

import { SelectButton } from '../../../businessComponents/SelectButton';
import { fieldData } from '../../../businessData/data';
import { BaseView }  from '../BaseView';
import { code as codeBaseView } from '../BaseView/codeSource';

import { code as codeSelectFieldView } from './codeSource';

@connect(({ schedulingControl }) => ({
  schedulingControl,
}))
class SelectFieldView extends BaseView {
  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      pageTitle: 'Animal \u4EA4\u4E92\u793A\u4F8B',
      currentCodeTitle: 'SelectFieldView',
      currentCode: codeSelectFieldView,
      selectData: null,
    };
  }

  afterSelect = (o) => {
    console.log('-----------------------------');
    console.log(o);
  };

  establishCardCollectionConfig = () => {
    const { currentCode, currentCodeTitle } = this.state;

    const that = this;

    return {
      list: [
        {
          title: {
            text: 'SelectField \u9AD8\u7EA7\u9009\u62E9',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.customSelect,
              component: (
                <SelectButton
                  label={fieldData.title.label}
                  text="\u9009\u62E9\u6587\u7AE0"
                  valueText={''}
                  helper={fieldData.title.helper}
                  afterSelect={(d) => {
                    this.afterSelect(d);
                  }}
                  afterClearSelect={() => {
                    this.clearSelect();
                  }}
                />
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
                defaultValue: 'SelectFieldView',
                style: { width: '520px' },
                list: [
                  {
                    flag: 'BaseView',
                    name: 'BaseView',
                  },
                  {
                    flag: 'SelectFieldView',
                    name: 'SelectFieldView',
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

                    case 'SelectFieldView': {
                      code = codeSelectFieldView;
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

export default SelectFieldView;
`,z,H,Z=(z=(0,C.$j)(function(a){var o=a.schedulingControl;return{schedulingControl:o}}),z(H=function(a){p()(t,a);var o=v()(t);function t(l){var n;return g()(this,t),n=o.call(this,l),d()(c()(n),"afterSelect",function(s){n.setState({selectData:s})}),d()(c()(n),"establishCardCollectionConfig",function(){var s=n.state,r=s.selectData,f=s.currentCode,V=s.currentCodeTitle,x=c()(n);return{list:[{title:{text:"SelectButton \u793A\u4F8B"},items:[{lg:24,type:S.ul.contentItemType.onlyShowInput,fieldData:O.Ng.createTime,value:(0,B.s4e)({data:r,key:O.Ng.title.name,defaultValue:"\u70B9\u51FB\u6309\u94AE\u9009\u62E9\u6587\u7AE0"})},{lg:6,type:S.ul.contentItemType.customSelect,component:(0,m.jsx)(j,{label:"\u9009\u62E9\u6587\u7AE0",text:"\u9009\u62E9\u6587\u7AE0\u3010Drawer\u3011",helper:"",afterSelectSuccess:function(u){n.afterSelect(u)}})},{lg:6,type:S.ul.contentItemType.customSelect,component:(0,m.jsx)(L,{label:"\u9009\u62E9\u6587\u7AE0",text:"\u9009\u62E9\u6587\u7AE0\u3010Modal\u3011",labelWidth:90,helper:"",afterSelectSuccess:function(u){n.afterSelect(u)}})}]},{title:{text:"\u4EE3\u7801\u793A\u4F8B",subText:(0,B.cpJ)("Code",V)},extra:{affix:!0,split:!1,list:[{buildType:S.ul.extraBuildType.flexSelect,label:"\u663E\u793A\u6E90\u4EE3\u7801",size:"small",defaultValue:"SelectButtonView",style:{width:"520px"},list:[{flag:"BaseView",name:"BaseView"},{flag:"SelectButtonView",name:"SelectButtonView"}],dataConvert:y.hy,onChange:function(u){var w="";switch(u){case"BaseView":{w=Y.T;break}case"SelectButtonView":{w=$;break}}x.setState({currentCodeTitle:u,currentCode:w}),(0,B.WWi)("\u5F53\u524D\u663E\u793A ".concat(u," \u6E90\u4EE3\u7801"))}}]},items:[{lg:24,type:S.ul.contentItemType.syntaxHighlighterView,fieldData:"syntaxHighlighter",value:f,language:"js",innerProps:{showLineNumbers:!1,wrapLines:!1}}]}]}}),n.state=i()(i()({},n.state),{},{pageTitle:"SelectButton \u793A\u4F8B",currentCodeTitle:"SelectButtonView",currentCode:$,selectData:null}),n}return h()(t)}(X.P))||H),k=Z}}]);
