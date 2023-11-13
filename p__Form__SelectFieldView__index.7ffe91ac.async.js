"use strict";(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[634],{11752:function(q,D,e){e.r(D),e.d(D,{default:function(){return k}});var N=e(86832),m=e.n(N),K=e(3782),C=e.n(K),R=e(25471),v=e.n(R),J=e(56507),o=e.n(J),G=e(42314),F=e.n(G),Q=e(96082),y=e.n(Q),U=e(73581),u=e.n(U),V=e(85388),x=e(56015),h=e(92870),E=e(92637),_=e(52983),T=e(69090),g=e(97458),B,A,I=E.Fp.SelectFieldExtra.BaseSelectFieldExtra,M=(B=(0,V.$j)(function(a){var r=a.smsCategory,n=a.schedulingControl;return{smsCategory:r,schedulingControl:n}}),B(A=function(a){F()(n,a);var r=y()(n);function n(){var l;v()(this,n);for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return l=r.call.apply(r,[this].concat(s)),u()(o()(l),"selectValueText",function(c){var d=m()({title:""},c),f=d.title;return f}),u()(o()(l),"openSelector",function(){T.b.open()}),u()(o()(l),"renderPresetSelector",function(){var c=l.props.label;return(0,g.jsx)(T.b,{title:c,width:1200,afterSelectSuccess:l.afterSelectSuccess})}),l}return C()(n)}(I))||A);M.defaultProps=m()({},I.defaultProps);var j=e(49760),P,b,$=E.Fp.SelectFieldExtra.BaseSelectFieldExtra,W=(P=(0,V.$j)(function(a){var r=a.smsCategory,n=a.schedulingControl;return{smsCategory:r,schedulingControl:n}}),P(b=function(a){F()(n,a);var r=y()(n);function n(){var l;v()(this,n);for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return l=r.call.apply(r,[this].concat(s)),u()(o()(l),"selectValueText",function(c){var d=m()({title:""},c),f=d.title;return f}),u()(o()(l),"openSelector",function(){j.O.open()}),u()(o()(l),"renderPresetSelector",function(){var c=l.props,d=c.label,f=c.helper,p=c.labelWidth;return(0,g.jsx)(j.O,{label:d,helper:f,labelWidth:p,afterSelectSuccess:l.afterSelectSuccess})}),l}return C()(n)}($))||b);W.defaultProps=m()({},$.defaultProps);var O=e(96294),X=e(88017),Y=e(99903),z=`import { connect } from 'easy-soft-dva';
import {
  getValueByKey,
  mergeArrowText,
  showSimpleInfoMessage,
} from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import { convertOptionOrRadioData } from 'antd-management-fast-component';

import {
  SelectDrawerField,
  SelectModalField,
} from '../../../businessComponents/SelectField';
import { fieldData } from '../../../businessData/data';
import { BaseView } from '../BaseView';
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
      pageTitle: 'SelectField \u793A\u4F8B',
      currentCodeTitle: 'SelectFieldView',
      currentCode: codeSelectFieldView,
      selectData: null,
    };
  }

  afterSelect = (o) => {
    this.setState({ selectData: o });
  };

  clearSelect = () => {
    this.setState({ selectData: null });
  };

  establishCardCollectionConfig = () => {
    const { selectData, currentCode, currentCodeTitle } = this.state;

    const that = this;

    return {
      list: [
        {
          title: {
            text: 'SelectField \u793A\u4F8B',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.onlyShowInput,
              fieldData: fieldData.title,
              value: getValueByKey({
                data: selectData,
                key: fieldData.title.name,
                defaultValue: '\u76EE\u524D\u6CA1\u6709\u6587\u7AE0\u88AB\u9009\u4E2D',
              }),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.customSelect,
              component: (
                <SelectDrawerField
                  label="\u9009\u62E9\u6587\u7AE0"
                  text="\u9009\u62E9\u6587\u7AE0\u3010Drawer\u3011"
                  helper=""
                  afterSelectSuccess={(d) => {
                    this.afterSelect(d);
                  }}
                  afterClearSelect={this.clearSelect}
                />
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.customSelect,
              component: (
                <SelectModalField
                  label="\u9009\u62E9\u6587\u7AE0"
                  text="\u9009\u62E9\u6587\u7AE0\u3010Modal\u3011"
                  labelWidth={90}
                  helper=""
                  afterSelectSuccess={(d) => {
                    this.afterSelect(d);
                  }}
                  afterClearSelect={this.clearSelect}
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
`,H,L,Z=(H=(0,V.$j)(function(a){var r=a.schedulingControl;return{schedulingControl:r}}),H(L=function(a){F()(n,a);var r=y()(n);function n(l){var t;return v()(this,n),t=r.call(this,l),u()(o()(t),"afterSelect",function(s){t.setState({selectData:s})}),u()(o()(t),"clearSelect",function(){t.setState({selectData:null})}),u()(o()(t),"establishCardCollectionConfig",function(){var s=t.state,i=s.selectData,c=s.currentCode,d=s.currentCodeTitle,f=o()(t);return{list:[{title:{text:"SelectField \u793A\u4F8B"},items:[{lg:24,type:h.ul.contentItemType.onlyShowInput,fieldData:O.Ng.title,value:(0,x.s4e)({data:i,key:O.Ng.title.name,defaultValue:"\u76EE\u524D\u6CA1\u6709\u6587\u7AE0\u88AB\u9009\u4E2D"})},{lg:6,type:h.ul.contentItemType.customSelect,component:(0,g.jsx)(M,{label:"\u9009\u62E9\u6587\u7AE0",text:"\u9009\u62E9\u6587\u7AE0\u3010Drawer\u3011",helper:"",afterSelectSuccess:function(S){t.afterSelect(S)},afterClearSelect:t.clearSelect})},{lg:6,type:h.ul.contentItemType.customSelect,component:(0,g.jsx)(W,{label:"\u9009\u62E9\u6587\u7AE0",text:"\u9009\u62E9\u6587\u7AE0\u3010Modal\u3011",labelWidth:90,helper:"",afterSelectSuccess:function(S){t.afterSelect(S)},afterClearSelect:t.clearSelect})}]},{title:{text:"\u4EE3\u7801\u793A\u4F8B",subText:(0,x.cpJ)("Code",d)},extra:{affix:!0,split:!1,list:[{buildType:h.ul.extraBuildType.flexSelect,label:"\u663E\u793A\u6E90\u4EE3\u7801",size:"small",defaultValue:"SelectFieldView",style:{width:"520px"},list:[{flag:"BaseView",name:"BaseView"},{flag:"SelectFieldView",name:"SelectFieldView"}],dataConvert:E.hy,onChange:function(S){var w="";switch(S){case"BaseView":{w=Y.T;break}case"SelectFieldView":{w=z;break}}f.setState({currentCodeTitle:S,currentCode:w}),(0,x.WWi)("\u5F53\u524D\u663E\u793A ".concat(S," \u6E90\u4EE3\u7801"))}}]},items:[{lg:24,type:h.ul.contentItemType.syntaxHighlighterView,fieldData:"syntaxHighlighter",value:c,language:"js",innerProps:{showLineNumbers:!1,wrapLines:!1}}]}]}}),t.state=m()(m()({},t.state),{},{pageTitle:"SelectField \u793A\u4F8B",currentCodeTitle:"SelectFieldView",currentCode:z,selectData:null}),t}return C()(n)}(X.P))||L),k=Z}}]);
