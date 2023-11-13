(self.webpackChunkexample_antd_management_fast_framework=self.webpackChunkexample_antd_management_fast_framework||[]).push([[443],{41826:function(B,v,e){"use strict";e.d(v,{Iq:function(){return G},Lw:function(){return A},O9:function(){return H},Wk:function(){return D},X5:function(){return p},i2:function(){return E},mG:function(){return S},zC:function(){return _}});var C=e(10604),d=e.n(C),f=e(43410),g=e.n(f),o=e(56015),c=e(92870),h=e(96294);function E(t){var n=t.target,r=t.handleData,s=r===void 0?{}:r,m=t.successCallback,l=t.successMessage,T=l===void 0?null:l;(0,c.ND)({api:"simple/singleListTree",params:{},target:n,handleData:s,successCallback:m,successMessage:T,showProcessing:!1})}function A(t){var n=t.target,r=t.handleData,s=t.successCallback,m=t.successMessage,l=m===void 0?null:m;(0,c.ND)({api:"simple/setOnline",params:{simpleId:(0,o.s4e)({data:r,key:h.Ng.simpleId.name})},target:n,handleData:r,successCallback:s,successMessage:l})}function _(t){var n=t.target,r=t.handleData,s=t.successCallback,m=t.successMessage,l=m===void 0?null:m;(0,c.ND)({api:"simple/setOffline",params:{simpleId:(0,o.s4e)({data:r,key:h.Ng.simpleId.name})},target:n,handleData:r,successCallback:s,successMessage:l})}function D(t){return y.apply(this,arguments)}function y(){return y=g()(d()().mark(function t(n){var r,s,m,l,T;return d()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:r=n.target,s=n.handleData,m=n.successCallback,l=n.successMessage,T=l===void 0?null:l,(0,c.ND)({api:"simple/refreshCache",params:{simpleId:(0,o.s4e)({data:s,key:h.Ng.simpleId.name})},target:r,handleData:s,successCallback:m,successMessage:T});case 2:case"end":return U.stop()}},t)})),y.apply(this,arguments)}function G(t){var n=t.target,r=t.handleData,s=t.successCallback,m=t.successMessage;(0,c.ND)({api:"simple/setMediaCollectionSort",params:{simpleId:(0,o.s4e)({data:r,key:h.Ng.simpleId.name}),ids:(0,o.s4e)({data:r,key:"ids"})},target:n,handleData:r,successCallback:s,successMessage:m})}function H(t){return w.apply(this,arguments)}function w(){return w=g()(d()().mark(function t(n){var r,s,m,l;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:r=n.target,s=n.handleData,m=n.successCallback,l=n.successMessage,(0,c.ND)({api:"simple/removeMediaItem",params:{simpleId:(0,o.s4e)({data:s,key:h.Ng.simpleId.name}),id:(0,o.s4e)({data:s,key:h.js.id.name})},target:r,handleData:s,successCallback:m,successMessage:l});case 2:case"end":return u.stop()}},t)})),w.apply(this,arguments)}function p(t){return k.apply(this,arguments)}function k(){return k=g()(d()().mark(function t(n){var r,s,m,l;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:r=n.target,s=n.handleData,m=n.successCallback,l=n.successMessage,(0,c.ND)({api:"simple/addImage",params:{simpleId:(0,o.s4e)({data:s,key:h.Ng.simpleId.name}),url:s.url||""},target:r,handleData:s,successCallback:m,successMessage:l});case 2:case"end":return u.stop()}},t)})),k.apply(this,arguments)}function M(t){return R.apply(this,arguments)}function R(){return R=g()(d()().mark(function t(n){var r,s,m,l;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:r=n.target,s=n.handleData,m=n.successCallback,l=n.successMessage,(0,c.ND)({api:"simple/removeImage",params:{simpleId:(0,o.s4e)({data:s,key:h.Ng.simpleId.name})},target:r,handleData:s,successCallback:m,successMessage:l});case 2:case"end":return u.stop()}},t)})),R.apply(this,arguments)}function S(t){return b.apply(this,arguments)}function b(){return b=g()(d()().mark(function t(n){var r,s,m,l;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:r=n.target,s=n.handleData,m=n.successCallback,l=n.successMessage,(0,c.tA)({title:"\u79FB\u9664\u56FE\u7247",content:"\u5373\u5C06\u79FB\u9664\u56FE\u7247\uFF0C\u786E\u5B9A\u5417\uFF1F",target:r,handleData:s,successCallback:m,okAction:function(P){var z=P.target,q=P.handleData,W=P.successCallback;M({target:z,handleData:q,successCallback:W,successMessage:l})}});case 2:case"end":return u.stop()}},t)})),b.apply(this,arguments)}},20160:function(B,v,e){"use strict";e.d(v,{D7:function(){return d},Dc:function(){return C},i0:function(){return f}});function C(g){var o=g.urlParams,c=o.id;return{simpleId:c}}function d(g,o,c,h){var E=g.simpleId,A=c.simpleId;return A!==E}function f(g){var o=g.externalData,c="";return(o||null)!=null&&(c=o.simpleId||""),c}},96294:function(B,v,e){"use strict";e.d(v,{MQ:function(){return E},Ng:function(){return o},js:function(){return c},zo:function(){return h}});var C=e(86832),d=e.n(C),f=e(92870),g={imageList:{label:"\u56FE\u7247\u96C6\u5408",name:"imageList",helper:""},datePicker:{label:"\u65E5\u671F\u9009\u62E9",name:"datePicker",helper:""},timePicker:{label:"\u65F6\u95F4\u9009\u62E9",name:"timePicker",helper:""},switch:{label:"\u5F00\u5173\u7C7B\u578B",name:"switch",helper:""},syntaxHighlighter:{label:"\u8BED\u6CD5\u9AD8\u4EAE\u533A\u57DF",name:"syntaxHighlighter",helper:""}},o=d()(d()({},f.c0),{},{simpleId:{label:"\u6570\u636E\u6807\u8BC6",name:"simpleId",helper:""},title:{label:"\u6807\u9898",name:"title",helper:"\u6587\u7AE0\u7684\u6807\u9898"},subtitle:{label:"\u526F\u6807\u9898",name:"subtitle",helper:"\u6587\u7AE0\u7684\u526F\u6807\u9898"},author:{label:"\u4F5C\u8005",name:"author",helper:"\u6587\u7AE0\u7684\u4F5C\u8005"},select1:{label:"Select\u9009\u9879\u5217\u8868",name:"select1",helper:"\u9009\u9879\u5217\u8868\u793A\u4F8B"},select2:{label:"Select-Custom\u9009\u9879\u5217\u8868",name:"select2",helper:"\u9009\u9879\u5217\u8868\u793A\u4F8B"},selectWhether:{label:"selectWhether\u9009\u9879\u5217\u8868",name:"selectWhether",helper:"selectWhether\u5F00\u5173\u9009\u62E9\u793A\u4F8B"},selectRadio:{label:"selectRadio\u9009\u9879\u5217\u8868",name:"selectRadio",helper:"selectRadio\u5F00\u5173\u9009\u62E9\u793A\u4F8B"},radio1:{label:"Radio\u9009\u9879\u5217\u8868",name:"radio1",helper:"\u9009\u9879\u5217\u8868\u793A\u4F8B"},radio2:{label:"Radio-Button\u9009\u9879\u5217\u8868",name:"radio2",helper:"\u9009\u9879\u5217\u8868\u793A\u4F8B"},radio3:{label:"Radio-Custom\u9009\u9879\u5217\u8868",name:"radio3",helper:"\u9009\u9879\u5217\u8868\u793A\u4F8B"},radio4:{label:"Radio\u4E30\u5BCC\u9009\u9879\u5217\u8868",name:"radio4",helper:"\u9009\u9879\u5217\u8868\u793A\u4F8B"},parentId:{label:"\u7236\u7EA7\u6587\u7AE0",name:"parentId",helper:"\u6587\u7AE0\u7684\u7236\u7EA7"},parentName:{label:"\u7236\u7EA7\u6587\u7AE0",name:"parentName",helper:"\u6587\u7AE0\u7684\u7236\u7EA7"},sort:{label:"\u6392\u5E8F\u503C",name:"sort",helper:"\u6587\u7AE0\u7684\u6392\u5E8F\u503C"},description:{label:"\u7B80\u4ECB\u63CF\u8FF0",name:"description",helper:"\u6587\u7AE0\u7684\u7B80\u4ECB\u63CF\u8FF0"},image:{label:"\u6B63\u65B9\u5F62\u914D\u56FE",name:"image",helper:"\u6587\u7AE0\u7684\u6B63\u65B9\u5F62\u56FE\u7247\u914D\u56FE,\u4E3B\u8981\u7528\u4E8E\u6587\u7AE0\u5217\u8868\u573A\u666F\u7684\u5E03\u5C40\u5C55\u793A"},rectangleImage:{label:"\u957F\u65B9\u5F62\u914D\u56FE",name:"rectangleImage",helper:"\u6587\u7AE0\u7684\u957F\u65B9\u5F62\u56FE\u7247\u914D\u56FE,\u4E3B\u8981\u7528\u4E8E\u6587\u7AE0\u5217\u8868\u573A\u666F\u7684\u5E03\u5C40\u5C55\u793A"},file:{label:"\u9644\u4EF6",name:"file",helper:"\u6587\u7AE0\u7684\u9644\u4EF6"},fileBase64:{label:"\u9644\u4EF6[\u8F6CBase64]",name:"fileBase64",helper:"\u6587\u7AE0\u7684\u9644\u4EF6"},video:{label:"\u89C6\u9891\u5730\u5740",name:"video",helper:"\u4E0A\u4F20\u7684\u89C6\u9891\u8D44\u6E90"},audio:{label:"\u97F3\u9891\u5730\u5740",name:"audio",helper:"\u4E0A\u4F20\u7684\u97F3\u9891\u8D44\u6E90"},attachment:{label:"\u9644\u4EF6",name:"attachment",helper:""},contentData:{label:"\u8BE6\u7EC6\u5185\u5BB9",name:"contentData",helper:"\u6587\u7AE0\u7684\u8BE6\u7EC6\u5185\u5BB9"},mediaData:{label:"\u5A92\u4F53\u5185\u5BB9",name:"mediaData",helper:"\u6587\u7AE0\u7684\u5A92\u4F53\u5185\u5BB9"},renderType:{label:"\u6E32\u67D3\u6A21\u5F0F",name:"renderType",helper:"\u6587\u7AE0\u7684\u6E32\u67D3\u6A21\u5F0F"},renderTypeNote:{label:"\u6E32\u67D3\u6A21\u5F0F",name:"renderTypeNote",helper:"\u6587\u7AE0\u7684\u6E32\u67D3\u6A21\u5F0F"},cityCode:{label:"\u57CE\u5E02\u7F16\u7801",name:"cityCode",helper:""},areaAgentId:{label:"\u5F52\u5C5E\u5730\u533A\u6807\u8BC6",name:"areaAgentId",helper:""},platformId:{label:"\u5F52\u5C5E\u5E73\u53F0\u6807\u8BC6",name:"platformId",helper:""},status:{label:"\u5F53\u524D\u72B6\u6001",name:"status",helper:""},statusNote:{label:"\u5F53\u524D\u72B6\u6001",name:"statusNote",helper:""},createTime:{label:"\u53D1\u5E03\u65F6\u95F4",name:"createTime",helper:"\u6570\u636E\u5F97\u53D1\u5E03\u65F6\u95F4"},updateTime:{label:"\u6700\u540E\u66F4\u65B0\u65F6\u95F4",name:"updateTime",helper:"\u6570\u636E\u5F97\u6700\u540E\u66F4\u65B0\u65F6\u95F4"},createUserId:{label:"\u521B\u5EFA\u4EBA\u6807\u8BC6",name:"createUserId",helper:""},updateUserId:{label:"\u66F4\u65B0\u4EBA\u6807\u8BC6",name:"updateUserId",helper:""}},g),c={id:{label:"\u6570\u636E\u6807\u8BC6",name:"id",helper:""},mediaType:{label:"\u5A92\u4F53\u7C7B\u578B",name:"mediaType",helper:""},title:{label:"\u6807\u9898",name:"title",helper:""},description:{label:"\u63CF\u8FF0",name:"description",helper:"\u6587\u7AE0\u7684\u526F\u6807\u9898"},image:{label:"\u914D\u56FE",name:"image",helper:""},link:{label:"\u94FE\u63A5",name:"link",helper:""},video:{label:"\u89C6\u9891",name:"video",helper:""},audio:{label:"\u97F3\u9891",name:"audio",helper:""},attachment:{label:"\u9644\u4EF6",name:"attachment",helper:""},sort:{label:"\u6392\u5E8F\u503C",name:"sort",helper:""},createTime:{label:"\u53D1\u5E03\u65F6\u95F4",name:"createTime",helper:""},updateTime:{label:"\u6700\u540E\u66F4\u65B0\u65F6\u95F4",name:"updateTime",helper:""}},h={remove:-1,offline:0,online:1},E=[{id:"05c3ef8577c94baf9b7fe56630d35929",title:"3245",type:0,text:"123123123123122",multiText:"",image:"",link:"",video:"",audio:"",attachment:"",sort:0,createTime:"2023-07-20 16:49:28",updateTime:"2023-07-20 16:49:28",key:"05c3ef8577c94baf9b7fe56630d35929"},{id:"1d7df75ba89f4a188c622349634f6bdc",title:"uu",type:200,text:"",multiText:"",image:"http://file.oa.local.com/general/image/1681950498527252480.jpeg",link:"",video:"",audio:"",attachment:"",sort:0,createTime:"2023-07-20 16:53:43",updateTime:"2023-07-20 16:53:43",key:"1d7df75ba89f4a188c622349634f6bdc"},{id:"b1fbda61794044c29ad90edd7df1157f",title:"ooo",type:200,text:"",multiText:"",image:"http://file.oa.local.com/general/image/1681950746897158144.jpeg",link:"",video:"",audio:"",attachment:"",sort:0,createTime:"2023-07-20 16:54:46",updateTime:"2023-07-20 16:54:46",key:"b1fbda61794044c29ad90edd7df1157f"},{id:"080210ddfed546a5be0561a149ede32c",title:"tyer",type:1e3,text:"",multiText:"",image:"",link:"asdfasdgsadgsagsagsag",video:"",audio:"",attachment:"",sort:0,createTime:"2023-07-20 16:57:29",updateTime:"2023-07-20 16:57:29",key:"080210ddfed546a5be0561a149ede32c"}]},99903:function(B,v,e){"use strict";e.d(v,{T:function(){return C}});var C=`import { DataForm } from 'antd-management-fast-framework';

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
`},87641:function(B,v,e){"use strict";e.d(v,{N:function(){return g}});var C=e(86832),d=e.n(C),f=e(92870),g=d()(d()({},f.c0),{},{simpleImageId:{label:"\u6570\u636E\u6807\u8BC6",name:"simpleImageId",helper:""},simpleId:{label:"\u6587\u7AE0\u6807\u8BC6",name:"simpleId",helper:""}})},88017:function(B,v,e){"use strict";e.d(v,{P:function(){return G}});var C=e(86832),d=e.n(C),f=e(3782),g=e.n(f),o=e(25471),c=e.n(o),h=e(42314),E=e.n(h),A=e(96082),_=e.n(A),D=e(77475),y=D.jY.BaseAddForm,G=function(H){E()(p,H);var w=_()(p);function p(k){var M;return c()(this,p),M=w.call(this,k),M.state=d()(d()({},M.state),{},{submitApiPath:"simple/addBasicInfo"}),M}return g()(p)}(y)},30281:function(B,v,e){"use strict";e.r(v),e.d(v,{default:function(){return ee}});var C=e(46995),d=e.n(C),f=e(42559),g=e.n(f),o=e(3782),c=e.n(o),h=e(25471),E=e.n(h),A=e(56507),_=e.n(A),D=e(42314),y=e.n(D),G=e(96082),H=e.n(G),w=e(73581),p=e.n(w),k=e(86832),M=e.n(k),R=e(85388),S=e(56015),b=e(92870),t=e(92637),n=e(41826),r=e(96294),s=e(69015),m=e(90282),l=e(87641),T=e(88017),u=e(99903),U=`import { connect } from 'easy-soft-dva';
import {
  checkHasAuthority,
  getValueByKey,
  mergeArrowText,
  pretreatmentRemoteSingleData,
  showSimpleInfoMessage,
} from 'easy-soft-utility';

import { cardConfig, getCorsDomain } from 'antd-management-fast-common';
import {
  convertOptionOrRadioData,
  iconBuilder,
} from 'antd-management-fast-component';

import {
  addGalleryImageAction,
  removeGalleryImageConfirmAction,
} from '../../../businessAssists/action';
import { fieldData } from '../../../businessData/data';
import { accessWayCollection } from '../../../customConfig';
import ChangeImageSortModal from '../../Simple/ChangeImageSortModal';
import { fieldData as fieldDataSimpleImage } from '../../SimpleImage/Common/data';
import { BaseView } from '../BaseView';
import { code as codeBaseView } from '../BaseView/codeSource';

import { code as codeUploadView } from './codeSource';

// eslint-disable-next-line no-unused-vars
function dataConvert(o, index) {
  const { flag, name } = o;

  return { label: name, value: flag, disabled: false, ...o };
}

@connect(({ schedulingControl }) => ({
  schedulingControl,
}))
class NormalView extends BaseView {
  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      pageTitle: 'Upload \u793A\u4F8B',
      currentCodeTitle: 'UploadView',
      currentCode: codeUploadView,
      image: '',
      video: '',
      audio: '',
      attachment: '',
      attachmentBase64: '',
    };
  }

  afterImageUploadSuccess = (image) => {
    this.setState({ image });
  };

  afterRectangleImageUploadSuccess = (image) => {
    this.setState({ rectangleImage: image });
  };

  afterVideoChangeSuccess = (video) => {
    this.setState({ video });
  };

  afterAudioChangeSuccess = (audio) => {
    this.setState({ audio });
  };

  afterFileBase64UploadSuccess = (base64) => {
    this.setState({ attachmentBase64: base64 });
  };

  afterFileUploadSuccess = (file) => {
    this.setState({ attachment: file });
  };

  afterAttachmentChangeSuccess = (attachment) => {
    this.setState({ attachment });
  };

  handleGalleryUploadChange = ({ file, fileList }) => {
    this.setState({ fileList: [...fileList] });

    if (file.status === 'done') {
      const { response } = file;

      const v = pretreatmentRemoteSingleData({ source: response });

      const { dataSuccess } = v;

      if (dataSuccess) {
        const {
          data: { imageUrl },
        } = v;

        this.addGalleryImage({ file, fileList, imageUrl });
      }
    }
  };

  addGalleryImage = ({ file, fileList, imageUrl }) => {
    const { metaData } = this.state;

    addGalleryImageAction({
      target: this,
      handleData: { ...metaData, url: imageUrl },
      successCallback: ({ target, remoteData }) => {
        for (const item of fileList || []) {
          if (item.uid === file.uid) {
            item[fieldDataSimpleImage.simpleImageId.name] = getValueByKey({
              data: remoteData,
              key: fieldDataSimpleImage.simpleImageId.name,
            });
          }
        }

        target.setState({ fileList: [...fileList] });
      },
    });
  };

  onGalleryRemove = (file) => {
    const simpleImageId = getValueByKey({
      data: file,
      key: fieldDataSimpleImage.simpleImageId.name,
    });

    removeGalleryImageConfirmAction({
      target: this,
      handleData: { simpleImageId },
      successCallback: ({ target }) => {
        const { fileList } = this.state;

        const list = [];

        for (const item of fileList || []) {
          const itemProductImageId = getValueByKey({
            data: item,
            key: fieldDataSimpleImage.simpleImageId.name,
          });

          if (itemProductImageId !== simpleImageId) {
            list.push(item);
          }
        }

        target.setState({ fileList: [...list] });
      },
    });

    return false;
  };

  showChangeImageSortModal = () => {
    ChangeImageSortModal.open();
  };

  afterChangeImageSortModalOk = () => {
    this.reloadData({});
  };

  establishCardCollectionConfig = () => {
    const {
      firstLoadSuccess,
      currentCode,
      currentCodeTitle,
      image,
      video,
      audio,
      attachment,
      attachmentBase64,
      fileList,
    } = this.state;

    const that = this;

    return {
      list: [
        {
          title: {
            text: '\u793A\u4F8B',
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
              type: cardConfig.contentItemType.imageUpload,
              image: image,
              action: \`/simple/uploadImage\`,
              afterUploadSuccess: (imageData) => {
                this.afterImageUploadSuccess(imageData);
              },
            },
          ],
        },
        {
          title: {
            text: '\u793A\u4F8B: \u56FE\u7247\u76F8\u518C',
            subText:
              '[\u76F8\u518C\u6700\u5927\u5BB9\u91CF\u4E3A8\u5F20\u56FE\u7247, \u5927\u5C0F\u5FC5\u987B\u7EDF\u4E00640*640 (800*800)\uFF0C\u56FE\u7247\u76F8\u518C\u7684\u6DFB\u52A0\u548C\u5220\u9664\u5C06\u81EA\u52A8\u4FDD, \u4EA7\u54C1\u5176\u4ED6\u4FE1\u606F\u8BF7\u5728\u4FEE\u6539\u540E\u70B9\u51FB\u4FDD\u5B58\u6309\u94AE!]',
          },
          extra: {
            list: [
              {
                buildType: cardConfig.extraBuildType.generalButton,
                hidden: !checkHasAuthority(
                  accessWayCollection.simple.updateImageSort.permission,
                ),
                text: '\u8C03\u6574\u56FE\u7247\u987A\u5E8F',
                icon: iconBuilder.sortAscending(),
                handleClick: (event) => this.showChangeImageSortModal(event),
                disabled: !firstLoadSuccess,
              },
            ],
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.imageUpload,
              action: \`\${getCorsDomain()}/simple/uploadImage\`,
              disabled: !checkHasAuthority(
                accessWayCollection.simple.addImage.permission,
              ),
              multiple: true,
              fileList,
              showUploadList: {
                showPreviewIcon: true,
                showDownloadIcon: true,
                showRemoveIcon: checkHasAuthority(
                  accessWayCollection.simple.removeImage.permission,
                ),
              },
              onItemChange: this.handleGalleryUploadChange,
              onItemRemove: this.onGalleryRemove,
              // showUploadList: true,
            },
          ],
        },
        {
          title: {
            text: '\u793A\u4F8B',
          },
          items: [
            {
              lg: 24,
              type: cardConfig.contentItemType.videoUpload,
              fieldData: fieldData.video,
              video,
              showPreview: true,
              action: \`/simple/uploadVideo\`,
              afterChangeSuccess: (data) => {
                this.afterVideoChangeSuccess(data);
              },
            },
            {
              lg: 24,
              type: cardConfig.contentItemType.audioUpload,
              fieldData: fieldData.audio,
              audio,
              showPreview: true,
              action: \`/simple/uploadAudio\`,
              afterChangeSuccess: (data) => {
                this.afterAudioChangeSuccess(data);
              },
            },
            {
              lg: 24,
              type: cardConfig.contentItemType.fileBase64Upload,
              fieldData: fieldData.fileBase64,
              fileBase64: attachmentBase64,
              action: \`/application/uploadFileBase64\`,
              afterUploadSuccess: (data) => {
                this.afterFileBase64UploadSuccess(data);
              },
            },
            {
              lg: 24,
              type: cardConfig.contentItemType.fileUpload,
              fieldData: fieldData.file,
              file: attachment,
              action: \`/application/uploadFile\`,
              afterUploadSuccess: (data) => {
                this.afterFileUploadSuccess(data);
              },
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
                defaultValue: 'UploadView',
                style: { width: '520px' },
                list: [
                  {
                    flag: 'BaseView',
                    name: 'BaseView',
                  },
                  {
                    flag: 'UploadView',
                    name: 'UploadView',
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

                    case 'UploadView': {
                      code = codeUploadView;
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

export default NormalView;
`,P,z;function q(j,J){var Q=j.flag,ae=j.name;return _objectSpread({label:ae,value:Q,disabled:!1},j)}var W=(P=(0,R.$j)(function(j){var J=j.schedulingControl;return{schedulingControl:J}}),P(z=function(j){y()(Q,j);var J=H()(Q);function Q(ae){var a;return E()(this,Q),a=J.call(this,ae),p()(_()(a),"afterImageUploadSuccess",function(i){a.setState({image:i})}),p()(_()(a),"afterRectangleImageUploadSuccess",function(i){a.setState({rectangleImage:i})}),p()(_()(a),"afterVideoChangeSuccess",function(i){a.setState({video:i})}),p()(_()(a),"afterAudioChangeSuccess",function(i){a.setState({audio:i})}),p()(_()(a),"afterFileBase64UploadSuccess",function(i){a.setState({attachmentBase64:i})}),p()(_()(a),"afterFileUploadSuccess",function(i){a.setState({attachment:i})}),p()(_()(a),"afterAttachmentChangeSuccess",function(i){a.setState({attachment:i})}),p()(_()(a),"handleGalleryUploadChange",function(i){var L=i.file,V=i.fileList;if(a.setState({fileList:g()(V)}),L.status==="done"){var $=L.response,K=(0,S.HR9)({source:$}),X=K.dataSuccess;if(X){var x=K.data.imageUrl;a.addGalleryImage({file:L,fileList:V,imageUrl:x})}}}),p()(_()(a),"addGalleryImage",function(i){var L=i.file,V=i.fileList,$=i.imageUrl,K=a.state.metaData;(0,n.X5)({target:_()(a),handleData:M()(M()({},K),{},{url:$}),successCallback:function(x){var N=x.target,Z=x.remoteData,F=d()(V||[]),Y;try{for(F.s();!(Y=F.n()).done;){var O=Y.value;O.uid===L.uid&&(O[l.N.simpleImageId.name]=(0,S.s4e)({data:Z,key:l.N.simpleImageId.name}))}}catch(I){F.e(I)}finally{F.f()}N.setState({fileList:g()(V)})}})}),p()(_()(a),"onGalleryRemove",function(i){var L=(0,S.s4e)({data:i,key:l.N.simpleImageId.name});return(0,n.mG)({target:_()(a),handleData:{simpleImageId:L},successCallback:function($){var K=$.target,X=a.state.fileList,x=[],N=d()(X||[]),Z;try{for(N.s();!(Z=N.n()).done;){var F=Z.value,Y=(0,S.s4e)({data:F,key:l.N.simpleImageId.name});Y!==L&&x.push(F)}}catch(O){N.e(O)}finally{N.f()}K.setState({fileList:[].concat(x)})}}),!1}),p()(_()(a),"showChangeImageSortModal",function(){m.Z.open()}),p()(_()(a),"afterChangeImageSortModalOk",function(){a.reloadData({})}),p()(_()(a),"establishCardCollectionConfig",function(){var i=a.state,L=i.firstLoadSuccess,V=i.currentCode,$=i.currentCodeTitle,K=i.image,X=i.video,x=i.audio,N=i.attachment,Z=i.attachmentBase64,F=i.fileList,Y=_()(a);return{list:[{title:{text:"\u793A\u4F8B"},extra:{affix:!0,split:!1,list:[{buildType:b.ul.extraBuildType.refresh},{buildType:b.ul.extraBuildType.save}]},items:[{lg:24,type:b.ul.contentItemType.imageUpload,image:K,action:"/simple/uploadImage",afterUploadSuccess:function(I){a.afterImageUploadSuccess(I)}}]},{title:{text:"\u793A\u4F8B: \u56FE\u7247\u76F8\u518C",subText:"[\u76F8\u518C\u6700\u5927\u5BB9\u91CF\u4E3A8\u5F20\u56FE\u7247, \u5927\u5C0F\u5FC5\u987B\u7EDF\u4E00640*640 (800*800)\uFF0C\u56FE\u7247\u76F8\u518C\u7684\u6DFB\u52A0\u548C\u5220\u9664\u5C06\u81EA\u52A8\u4FDD, \u4EA7\u54C1\u5176\u4ED6\u4FE1\u606F\u8BF7\u5728\u4FEE\u6539\u540E\u70B9\u51FB\u4FDD\u5B58\u6309\u94AE!]"},extra:{list:[{buildType:b.ul.extraBuildType.generalButton,hidden:!(0,S.lVs)(s.WA.simple.updateImageSort.permission),text:"\u8C03\u6574\u56FE\u7247\u987A\u5E8F",icon:t.xM.sortAscending(),handleClick:function(I){return a.showChangeImageSortModal(I)},disabled:!L}]},items:[{lg:24,type:b.ul.contentItemType.imageUpload,action:"".concat((0,b.P7)(),"/simple/uploadImage"),disabled:!(0,S.lVs)(s.WA.simple.addImage.permission),multiple:!0,fileList:F,showUploadList:{showPreviewIcon:!0,showDownloadIcon:!0,showRemoveIcon:(0,S.lVs)(s.WA.simple.removeImage.permission)},onItemChange:a.handleGalleryUploadChange,onItemRemove:a.onGalleryRemove}]},{title:{text:"\u793A\u4F8B"},items:[{lg:24,type:b.ul.contentItemType.videoUpload,fieldData:r.Ng.video,video:X,showPreview:!0,action:"/simple/uploadVideo",afterChangeSuccess:function(I){a.afterVideoChangeSuccess(I)}},{lg:24,type:b.ul.contentItemType.audioUpload,fieldData:r.Ng.audio,audio:x,showPreview:!0,action:"/simple/uploadAudio",afterChangeSuccess:function(I){a.afterAudioChangeSuccess(I)}},{lg:24,type:b.ul.contentItemType.fileBase64Upload,fieldData:r.Ng.fileBase64,fileBase64:Z,action:"/application/uploadFileBase64",afterUploadSuccess:function(I){a.afterFileBase64UploadSuccess(I)}},{lg:24,type:b.ul.contentItemType.fileUpload,fieldData:r.Ng.file,file:N,action:"/application/uploadFile",afterUploadSuccess:function(I){a.afterFileUploadSuccess(I)}}]},{title:{text:"\u4EE3\u7801\u793A\u4F8B",subText:(0,S.cpJ)("Code",$)},extra:{affix:!0,split:!1,list:[{buildType:b.ul.extraBuildType.flexSelect,label:"\u663E\u793A\u6E90\u4EE3\u7801",size:"small",defaultValue:"UploadView",style:{width:"520px"},list:[{flag:"BaseView",name:"BaseView"},{flag:"UploadView",name:"UploadView"}],dataConvert:t.hy,onChange:function(I){var te="";switch(I){case"BaseView":{te=u.T;break}case"UploadView":{te=U;break}}Y.setState({currentCodeTitle:I,currentCode:te}),(0,S.WWi)("\u5F53\u524D\u663E\u793A ".concat(I," \u6E90\u4EE3\u7801"))}}]},items:[{lg:24,type:b.ul.contentItemType.syntaxHighlighterView,fieldData:"syntaxHighlighter",value:V,language:"js",innerProps:{showLineNumbers:!1,wrapLines:!1}}]}]}}),p()(_()(a),"renderPresetPageFooter",function(){return"PageFooter"}),a.state=M()(M()({},a.state),{},{pageTitle:"Upload \u793A\u4F8B",currentCodeTitle:"UploadView",currentCode:U,image:"",video:"",audio:"",attachment:"",attachmentBase64:""}),a}return c()(Q)}(T.P))||z),ee=W},90282:function(B,v,e){"use strict";var C=e(86832),d=e.n(C),f=e(46995),g=e.n(f),o=e(25471),c=e.n(o),h=e(3782),E=e.n(h),A=e(56507),_=e.n(A),D=e(42314),y=e.n(D),G=e(96082),H=e.n(G),w=e(73581),p=e.n(w),k=e(85388),M=e(77475),R=e(20160),S,b,t=M.mO.BaseImageSortModal,n="b47b4b567e1643b585f1f7c69a323cba",r=(S=(0,k.$j)(function(s){var m=s.simple,l=s.schedulingControl;return{simple:m,schedulingControl:l}}),S(b=function(s){y()(l,s);var m=H()(l);function l(T){var u;return c()(this,l),u=m.call(this,T,n),p()(_()(u),"showCallProcess",!0),p()(_()(u),"supplementLoadRequestParams",function(U){var P=U;return P.simpleId=(0,R.i0)(u.state),P}),p()(_()(u),"supplementSubmitRequestParams",function(U){var P=U,z=u.state.metaListData;P.simpleId=(0,R.i0)(u.state);var q=[],W=g()(z||[]),ee;try{for(W.s();!(ee=W.n()).done;){var j=ee.value;q.push("".concat(j.id,"|").concat(j.sort))}}catch(J){W.e(J)}finally{W.f()}return P.sorts=q.join(","),P}),u.state=d()(d()({},u.state),{},{pageTitle:"\u53D8\u66F4\u56FE\u7247\u987A\u5E8F",loadApiPath:"simple/listImage",submitApiPath:"simple/updateImageSort",simpleId:""}),u}return E()(l,null,[{key:"open",value:function(){M.Qs.open(n)}}]),l}(t))||b);v.Z=r},46995:function(B,v,e){var C=e(99609);function d(f,g){var o=typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(!o){if(Array.isArray(f)||(o=C(f))||g&&f&&typeof f.length=="number"){o&&(f=o);var c=0,h=function(){};return{s:h,n:function(){return c>=f.length?{done:!0}:{done:!1,value:f[c++]}},e:function(y){throw y},f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,A=!1,_;return{s:function(){o=o.call(f)},n:function(){var y=o.next();return E=y.done,y},e:function(y){A=!0,_=y},f:function(){try{!E&&o.return!=null&&o.return()}finally{if(A)throw _}}}}B.exports=d,B.exports.__esModule=!0,B.exports.default=B.exports}}]);
