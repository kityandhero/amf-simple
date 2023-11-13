"use strict";(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[36],{62915:function(P,u,t){t.d(u,{T:function(){return c}});var c=`import { DataSingleView } from 'antd-management-fast-framework';

const { DataCore } = DataSingleView;

class BaseView extends DataCore {
  // \u7EC4\u4EF6\u521B\u5EFA\u540E\u81EA\u52A8\u8BF7\u6C42 state.loadApiPath \u914D\u7F6E\u7684\u63A5\u53E3\u6570\u636E
  loadRemoteRequestAfterMount = false;

  // \u5C55\u793A\u7EC4\u5EFA\u540E\u8FDB\u884C\u6570\u636E\u91CD\u7F6E
  resetDataAfterLoad = false;
}

export { BaseView };
`},54827:function(P,u,t){t.r(u),t.d(u,{default:function(){return F}});var c=t(86832),p=t.n(c),b=t(3782),v=t.n(b),C=t(25471),_=t.n(C),I=t(56507),r=t.n(I),E=t(42314),j=t.n(E),T=t(96082),f=t.n(T),V=t(73581),d=t.n(V),w=t(10223),A=t(85388),x=t(56015),o=t(92870),e=t(92637),y=t(41488),h=t(62915),s=`import { Space } from 'antd';

import { connect } from 'easy-soft-dva';
import { mergeArrowText, showSimpleInfoMessage } from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import {
  buildButton,
  convertOptionOrRadioData,
  FadeBox,
  iconBuilder,
  IconInfo,
  QueueBox,
  QueueListBox,
} from 'antd-management-fast-component';

import { BaseView } from '../BaseView';
import { code as codeBaseView } from '../BaseView/codeSource';

import { code as codeAnimalView } from './codeSource';

@connect(({ schedulingControl }) => ({
  schedulingControl,
}))
class AnimalView extends BaseView {
  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      pageTitle: 'Animal \u4EA4\u4E92\u793A\u4F8B',
      currentCodeTitle: 'AnimalView',
      currentCode: codeAnimalView,
      boxVisible: true,
    };
  }

  toggleFadeBoxShow = () => {
    const { boxVisible } = this.state;

    this.setState({
      boxVisible: !boxVisible,
    });
  };

  establishToolBarConfig = () => {
    return {
      stick: false,
      title: '\u64CD\u4F5C\u680F',
      tools: [
        {
          component: buildButton({
            title: '\u70B9\u51FB\u5207\u6362\u52A8\u753B\u663E\u793A',
            text: '\u5207\u6362\u52A8\u753B\u663E\u793A',
            handleClick: () => {
              this.toggleFadeBoxShow();
            },
          }),
        },
      ],
    };
  };

  establishCardCollectionConfig = () => {
    const { currentCode, currentCodeTitle, boxVisible } = this.state;

    const that = this;

    const boxStyle = { height: '60px' };

    return {
      list: [
        {
          title: {
            text: '\u52A8\u753B\u5C55\u793A [FadeBox]',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <FadeBox visible={boxVisible}>
                    <div>
                      <Space>
                        <IconInfo icon={iconBuilder.form()} text="\u6587\u5B571" />
                        <IconInfo icon={iconBuilder.form()} text="\u6587\u5B572" />
                        <IconInfo icon={iconBuilder.form()} text="\u6587\u5B573" />
                      </Space>
                    </div>
                  </FadeBox>
                </div>
              ),
            },
          ],
        },
        {
          title: {
            text: '\u52A8\u753B\u5C55\u793A [QueueBox]',
          },
          items: [
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:null]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={'left'}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:left]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={'right'} duration={600}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:right]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={'top'}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:top]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={'bottom'}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:bottom]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={'scale'}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:scale]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={'scaleBig'}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:scaleBig]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={'scaleX'}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:scaleX]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={'scaleY'}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:scaleY]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={'alpha'}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:alpha]"
                    />
                  </QueueBox>
                </div>
              ),
            },
            {
              lg: 6,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueBox show={boxVisible} type={['right', 'alpha']}>
                    <IconInfo
                      icon={iconBuilder.form()}
                      text="QueueBox [type:['right', 'alpha']]"
                    />
                  </QueueBox>
                </div>
              ),
            },
          ],
        },
        {
          title: {
            text: '\u52A8\u753B\u5C55\u793A [QueueListBox]',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.component,
              component: (
                <div style={boxStyle}>
                  <QueueListBox
                    show={boxVisible}
                    itemStyle={{
                      marginBottom: '2px',
                    }}
                    items={[
                      {
                        hidden: true,
                        builder: () => {
                          return (
                            <IconInfo
                              icon={iconBuilder.form()}
                              text="QueueListBoxItem 1"
                            />
                          );
                        },
                      },
                      {
                        hidden: false,
                        builder: () => {
                          return (
                            <IconInfo
                              icon={iconBuilder.form()}
                              text="QueueListBoxItem 2"
                            />
                          );
                        },
                      },
                      {
                        hidden: true,
                        builder: () => {
                          return (
                            <IconInfo
                              icon={iconBuilder.form()}
                              text="QueueListBoxItem 3"
                            />
                          );
                        },
                      },
                      {
                        hidden: false,
                        builder: () => {
                          return (
                            <IconInfo
                              icon={iconBuilder.form()}
                              text="QueueListBoxItem 4"
                            />
                          );
                        },
                      },
                    ]}
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
                defaultValue: 'AnimalView',
                style: { width: '520px' },
                list: [
                  {
                    flag: 'BaseView',
                    name: 'BaseView',
                  },
                  {
                    flag: 'AnimalView',
                    name: 'AnimalView',
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

                    case 'AnimalView': {
                      code = codeAnimalView;
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

export default AnimalView;
`,n=t(97458),L,U,O=(L=(0,A.$j)(function(Q){var M=Q.schedulingControl;return{schedulingControl:M}}),L(U=function(Q){j()(B,Q);var M=f()(B);function B(R){var a;return _()(this,B),a=M.call(this,R),d()(r()(a),"toggleFadeBoxShow",function(){var m=a.state.boxVisible;a.setState({boxVisible:!m})}),d()(r()(a),"establishToolBarConfig",function(){return{stick:!1,title:"\u64CD\u4F5C\u680F",tools:[{component:(0,e.ry)({title:"\u70B9\u51FB\u5207\u6362\u52A8\u753B\u663E\u793A",text:"\u5207\u6362\u52A8\u753B\u663E\u793A",handleClick:function(){a.toggleFadeBoxShow()}})}]}}),d()(r()(a),"establishCardCollectionConfig",function(){var m=a.state,W=m.currentCode,K=m.currentCodeTitle,i=m.boxVisible,z=r()(a),l={height:"60px"};return{list:[{title:{text:"\u52A8\u753B\u5C55\u793A [FadeBox]"},items:[{lg:24,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.Pu,{visible:i,children:(0,n.jsx)("div",{children:(0,n.jsxs)(w.Z,{children:[(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"\u6587\u5B571"}),(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"\u6587\u5B572"}),(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"\u6587\u5B573"})]})})})})}]},{title:{text:"\u52A8\u753B\u5C55\u793A [QueueBox]"},items:[{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:null]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:"left",children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:left]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:"right",duration:600,children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:right]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:"top",children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:top]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:"bottom",children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:bottom]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:"scale",children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:scale]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:"scaleBig",children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:scaleBig]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:"scaleX",children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:scaleX]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:"scaleY",children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:scaleY]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:"alpha",children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:alpha]"})})})},{lg:6,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.jE,{show:i,type:["right","alpha"],children:(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueBox [type:['right', 'alpha']]"})})})}]},{title:{text:"\u52A8\u753B\u5C55\u793A [QueueListBox]"},items:[{lg:24,type:o.ul.contentItemType.component,component:(0,n.jsx)("div",{style:l,children:(0,n.jsx)(e.m1,{show:i,itemStyle:{marginBottom:"2px"},items:[{hidden:!0,builder:function(){return(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueListBoxItem 1"})}},{hidden:!1,builder:function(){return(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueListBoxItem 2"})}},{hidden:!0,builder:function(){return(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueListBoxItem 3"})}},{hidden:!1,builder:function(){return(0,n.jsx)(e.aU,{icon:e.xM.form(),text:"QueueListBoxItem 4"})}}]})})}]},{title:{text:"\u4EE3\u7801\u793A\u4F8B",subText:(0,x.cpJ)("Code",K)},extra:{affix:!0,split:!1,list:[{buildType:o.ul.extraBuildType.flexSelect,label:"\u663E\u793A\u6E90\u4EE3\u7801",size:"small",defaultValue:"AnimalView",style:{width:"520px"},list:[{flag:"BaseView",name:"BaseView"},{flag:"AnimalView",name:"AnimalView"}],dataConvert:e.hy,onChange:function(D){var S="";switch(D){case"BaseView":{S=h.T;break}case"AnimalView":{S=s;break}}z.setState({currentCodeTitle:D,currentCode:S}),(0,x.WWi)("\u5F53\u524D\u663E\u793A ".concat(D," \u6E90\u4EE3\u7801"))}}]},items:[{lg:24,type:o.ul.contentItemType.syntaxHighlighterView,fieldData:"syntaxHighlighter",value:W,language:"js",innerProps:{showLineNumbers:!1,wrapLines:!1}}]}]}}),a.state=p()(p()({},a.state),{},{pageTitle:"Animal \u4EA4\u4E92\u793A\u4F8B",currentCodeTitle:"AnimalView",currentCode:s,boxVisible:!0}),a}return v()(B)}(y.P))||U),F=O},41488:function(P,u,t){t.d(u,{P:function(){return w}});var c=t(3782),p=t.n(c),b=t(25471),v=t.n(b),C=t(56507),_=t.n(C),I=t(42314),r=t.n(I),E=t(96082),j=t.n(E),T=t(73581),f=t.n(T),V=t(77475),d=V.zg.DataCore,w=function(A){r()(o,A);var x=j()(o);function o(){var e;v()(this,o);for(var y=arguments.length,h=new Array(y),s=0;s<y;s++)h[s]=arguments[s];return e=x.call.apply(x,[this].concat(h)),f()(_()(e),"loadRemoteRequestAfterMount",!1),f()(_()(e),"resetDataAfterLoad",!1),e}return p()(o)}(d)}}]);
