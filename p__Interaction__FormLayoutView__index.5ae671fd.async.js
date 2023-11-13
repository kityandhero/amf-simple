"use strict";(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[897],{41488:function(v,s,e){e.d(s,{P:function(){return x}});var M=e(3782),c=e.n(M),_=e(25471),f=e.n(_),P=e(56507),u=e.n(P),h=e(42314),p=e.n(h),C=e(96082),y=e.n(C),E=e(73581),r=e.n(E),B=e(77475),S=B.zg.DataCore,x=function(l){p()(i,l);var t=y()(i);function i(){var d;f()(this,i);for(var n=arguments.length,m=new Array(n),o=0;o<n;o++)m[o]=arguments[o];return d=t.call.apply(t,[this].concat(m)),r()(u()(d),"loadRemoteRequestAfterMount",!1),r()(u()(d),"resetDataAfterLoad",!1),d}return c()(i)}(S)},2793:function(v,s,e){e.r(s),e.d(s,{default:function(){return D}});var M=e(86832),c=e.n(M),_=e(3782),f=e.n(_),P=e(25471),u=e.n(P),h=e(56507),p=e.n(h),C=e(42314),y=e.n(C),E=e(96082),r=e.n(E),B=e(73581),S=e.n(B),x=e(85388),l=e(92870),t=e(92637),i=e(41488),d=`import { connect } from 'easy-soft-dva';
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
`,n=e(97458),m,o,F=(m=(0,x.$j)(function(b){var A=b.schedulingControl;return{schedulingControl:A}}),m(o=function(b){y()(g,b);var A=r()(g);function g(I){var a;return u()(this,g),a=A.call(this,I),S()(p()(a),"afterDesignDrawerClose",function(){a.reloadData({})}),S()(p()(a),"establishCardCollectionConfig",function(){return{list:[{title:{text:"\u533A\u57DF"},width:"auto",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},[{title:{text:"\u533A\u57DF"},width:"auto",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"100px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},{title:{text:"\u5360\u4F4D\u533A\u57DF"},width:"180px",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},{title:{text:"\u5360\u4F4D\u533A\u57DF"},width:"400px",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},{title:{text:"\u5360\u4F4D\u533A\u57DF"},items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]}],{title:{text:"\u533A\u57DF"},items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},[{title:{text:"\u5360\u4F4D\u533A\u57DF"},width:"180px",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},{title:{text:"\u5360\u4F4D\u533A\u57DF"},width:"180px",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},{title:{text:"\u5360\u4F4D\u533A\u57DF"},width:"180px",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},{title:{text:"\u533A\u57DF"},width:"auto",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"100px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},{title:{text:"\u5360\u4F4D\u533A\u57DF"},width:"400px",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},{title:{text:"\u5360\u4F4D\u533A\u57DF"},items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]}],[{title:{text:"\u533A\u57DF"},width:"auto",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"100px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]},{title:{text:"\u533A\u57DF"},width:"auto",items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"100px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]}],{title:{text:"\u533A\u57DF"},items:[{lg:24,type:l.ul.contentItemType.component,component:(0,n.jsx)("div",{style:{height:"200px"},children:(0,n.jsx)(t.kQ,{children:"content"})})}]}]}}),a.state=c()(c()({},a.state),{},{pageTitle:"Modal \u4EA4\u4E92\u793A\u4F8B",currentCodeTitle:"ModalView",currentCode:d}),a}return f()(g)}(i.P))||o),D=F}}]);
