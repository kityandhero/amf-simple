"use strict";(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[770],{99903:function(j,s,e){e.d(s,{T:function(){return d}});var d=`import { DataForm } from 'antd-management-fast-framework';

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
`},88017:function(j,s,e){e.d(s,{P:function(){return T}});var d=e(86832),u=e.n(d),p=e(3782),h=e.n(p),C=e(25471),m=e.n(C),E=e(42314),g=e.n(E),v=e(96082),y=e.n(v),x=e(77475),_=x.jY.BaseAddForm,T=function(f){g()(t,f);var b=y()(t);function t(a){var o;return m()(this,t),o=b.call(this,a),o.state=u()(u()({},o.state),{},{submitApiPath:"simple/addBasicInfo"}),o}return h()(t)}(_)},57349:function(j,s,e){e.r(s),e.d(s,{default:function(){return R}});var d=e(3782),u=e.n(d),p=e(25471),h=e.n(p),C=e(56507),m=e.n(C),E=e(42314),g=e.n(E),v=e(96082),y=e.n(v),x=e(73581),_=e.n(x),T=e(86832),f=e.n(T),b=e(85388),t=e(56015),a=e(92870),o=e(92637),I=e(88017),S=e(99903),A=`import { connect } from 'easy-soft-dva';
import { mergeArrowText, showSimpleInfoMessage } from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import { convertOptionOrRadioData } from 'antd-management-fast-component';

import { BaseView } from '../BaseView';
import { code as codeBaseView } from '../BaseView/codeSource';

import { code as codeEditorView } from './codeSource';

// eslint-disable-next-line no-unused-vars
function dataConvert(o, index) {
  const { flag, name } = o;

  return { label: name, value: flag, disabled: false, ...o };
}

@connect(({ schedulingControl }) => ({
  schedulingControl,
}))
class RadioView extends BaseView {
  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      pageTitle: 'Editor \u793A\u4F8B',
      currentCodeTitle: 'EditorView',
      currentCode: codeEditorView,
    };
  }

  afterHtmlChange = ({ html, text }) => {
    this.htmlContent = html;
    this.textContent = text;
  };

  establishCardCollectionConfig = () => {
    const {
      currentCode,
      currentCodeTitle,

      initContent,
    } = this.state;

    const that = this;

    return {
      list: [
        {
          title: {
            text: '\u5BCC\u6587\u672C\u7F16\u8F91',
          },
          extra: {
            affix: true,
            split: false,
            list: [
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
              lg: 24,
              type: cardConfig.contentItemType.tinymce,
              content: initContent,
              afterChange: this.afterHtmlChange,
            },
          ],
          instruction: [
            {
              title: '\u8BF4\u660E',
              showDivider: false,
              showNumber: true,
              list: [
                {
                  text: 'Html\u6570\u636E\u5C55\u793A\uFF0C\u7A7A\u767D\u5C06\u66FF\u6362\u4E3AEmpty',
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
                defaultValue: 'EditorView',
                style: { width: '520px' },
                list: [
                  {
                    flag: 'BaseView',
                    name: 'BaseView',
                  },
                  {
                    flag: 'EditorView',
                    name: 'EditorView',
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

                    case 'EditorView': {
                      code = codeEditorView;
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
`,O,M;function K(r,c){var i=r.flag,B=r.name;return _objectSpread({label:B,value:i,disabled:!1},r)}var F=(O=(0,b.$j)(function(r){var c=r.schedulingControl;return{schedulingControl:c}}),O(M=function(r){g()(i,r);var c=y()(i);function i(B){var n;return h()(this,i),n=c.call(this,B),_()(m()(n),"afterHtmlChange",function(l){var w=l.html,V=l.text;n.htmlContent=w,n.textContent=V}),_()(m()(n),"establishCardCollectionConfig",function(){var l=n.state,w=l.currentCode,V=l.currentCodeTitle,L=l.initContent,W=m()(n);return{list:[{title:{text:"\u5BCC\u6587\u672C\u7F16\u8F91"},extra:{affix:!0,split:!1,list:[{buildType:a.ul.extraBuildType.refresh},{buildType:a.ul.extraBuildType.save}]},items:[{lg:24,type:a.ul.contentItemType.tinymce,content:L,afterChange:n.afterHtmlChange}],instruction:[{title:"\u8BF4\u660E",showDivider:!1,showNumber:!0,list:[{text:"Html\u6570\u636E\u5C55\u793A\uFF0C\u7A7A\u767D\u5C06\u66FF\u6362\u4E3AEmpty"}]}]},{title:{text:"\u4EE3\u7801\u793A\u4F8B",subText:(0,t.cpJ)("Code",V)},extra:{affix:!0,split:!1,list:[{buildType:a.ul.extraBuildType.flexSelect,label:"\u663E\u793A\u6E90\u4EE3\u7801",size:"small",defaultValue:"EditorView",style:{width:"520px"},list:[{flag:"BaseView",name:"BaseView"},{flag:"EditorView",name:"EditorView"}],dataConvert:o.hy,onChange:function(D){var P="";switch(D){case"BaseView":{P=S.T;break}case"EditorView":{P=A;break}}W.setState({currentCodeTitle:D,currentCode:P}),(0,t.WWi)("\u5F53\u524D\u663E\u793A ".concat(D," \u6E90\u4EE3\u7801"))}}]},items:[{lg:24,type:a.ul.contentItemType.syntaxHighlighterView,fieldData:"syntaxHighlighter",value:w,language:"js",innerProps:{showLineNumbers:!1,wrapLines:!1}}]}]}}),n.state=f()(f()({},n.state),{},{pageTitle:"Editor \u793A\u4F8B",currentCodeTitle:"EditorView",currentCode:A}),n}return u()(i)}(I.P))||M),R=F}}]);
