import TIM from 'tim-js-sdk';
// 发送图片、文件等消息需要的 COS SDK
import COS from 'cos-js-sdk-v5';
import { _HttpClient } from '@co/common';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
let options = {
  SDKAppID: null, // 接入时需要将0替换为您的即时通信应用的 SDKAppID
};
class TIMSetting {
  static appId: number;
  static userSig: string = '';
}
// 创建 SDK 实例，TIM.create() 方法对于同一个 SDKAppID 只会返回同一份实例
let tim;
let userMsg = JSON.parse(localStorage.getItem('co.session') || 'null');
const subject = new ReplaySubject<TIM>(1);
/*群组创建接口 */
interface GroupInfoCheck {
  name: string;
  type: string;
  memberList: any[];
  groupID?: string;
  introduction?: string;
  notification?: string;
  avatar?: string;
  maxMemberNum?: number;
  joinOption?: string;
  groupCustomField?: any;
}
/*群组更新接口 */
interface GroupInfoUpdate {
  groupID: string;
  name?: string;
  avatar?: string;
  introduction?: string;
  notification?: string;
  maxMemberNum?: number;
  muteAllMembers?: boolean;
  joinOption?: string;
  groupCustomField?: any;
}

/*群组更新接口 */
interface myInfoCheck {
  nick?: string;
  avatar?: string;
  gender?: string;
  selfSignature?: string;
  allowType?: string;
}

/*eslint-disable*/
/*
 * Module:   GenerateTestUserSig
 *
 * Function: 用于生成测试用的 UserSig，UserSig 是腾讯云为其云服务设计的一种安全保护签名。
 *           其计算方法是对 SDKAppID、UserID 和 EXPIRETIME 进行加密，加密算法为 HMAC-SHA256。
 *
 * Attention: 请不要将如下代码发布到您的线上正式版本的 App 中，原因如下：
 *
 *            本文件中的代码虽然能够正确计算出 UserSig，但仅适合快速调通 SDK 的基本功能，不适合线上产品，
 *            这是因为客户端代码中的 SECRETKEY 很容易被反编译逆向破解，尤其是 Web 端的代码被破解的难度几乎为零。
 *            一旦您的密钥泄露，攻击者就可以计算出正确的 UserSig 来盗用您的腾讯云流量。
 *
 *            正确的做法是将 UserSig 的计算代码和加密密钥放在您的业务服务器上，然后由 App 按需向您的服务器获取实时算出的 UserSig。
 *            由于破解服务器的成本要高于破解客户端 App，所以服务器计算的方案能够更好地保护您的加密密钥。
 *
 * Reference：https://cloud.tencent.com/document/product/647/17275#Server
 */

/*登陆*/
export async function login(UserID: string, UserSig: string) {
  let promise = tim.login({ userID: UserID, userSig: UserSig });
  // tslint:disable-next-line: only-arrow-functions
  promise
    .then(function (imResponse): void {
      console.log(imResponse.data); // 登录成功
      // tslint:disable-next-line: only-arrow-functions
    })
    .catch(function (imError) {
      console.warn('login error:', imError); // 登录失败的相关信息
    });
}

/**
 * 初始化并登陆 IM
 */
@Injectable({
  providedIn: 'root',
})
export class GetUserSigService {
  constructor(private _HttpClient: _HttpClient) { }
  imLogin() {
    // 监听事件，例如：
    // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
    // event.name - TIM.EVENT.SDK_READY
    this._HttpClient.get('/IM/IMCommonService/GetUserSig', { Identifier: userMsg.session.user.id.toString() }).subscribe(async (r: any) => {
      // setup tim
      options.SDKAppID = r.imAppID;
      TIMSetting.userSig = r.userSig;
      tim = TIM.create(options); // SDK 实例通常用 tim 表示
      tim.COStatus = 0;
      // 设置 SDK 日志输出级别，详细分级请参见 setLogLevel 接口的说明
      tim.setLogLevel(1); // 普通级别，日志量较多，接入时建议使用
      // 注册 COS SDK 插件
      tim.registerPlugin({ 'cos-js-sdk': COS });

      // start login
      let userSig = TIMSetting.userSig;
      await login(userMsg.session.user.id.toString(), userSig);
      subject.next();
    });
  }
}

/*登出 */
export function logOut(): void {
  let promise = tim.logout();
  promise.then((imResponse) => {
    console.log(imResponse.data);
  });
}

/*创建文本消息 */
export function createTextMessage(userID: string, type: string, payload: string) {
  if (type === 'signle') {
    type = TIM.TYPES.CONV_C2C;
  }
  if (type === 'group') {
    type = TIM.TYPES.CONV_GROUP;
  }
  let textMessage = tim.createTextMessage({
    to: userID,
    conversationType: type,
    payload: {
      text: payload,
    },
  });

  return textMessage;
}

/*创建图片消息 */
export function createImageMessage(userID: string, type: string, params: any, fun?: Function) {
  if (type === 'signle') {
    type = TIM.TYPES.CONV_C2C;
  }
  if (type === 'group') {
    type = TIM.TYPES.CONV_GROUP;
  }
  let imgMessage = tim.createImageMessage({
    to: userID,
    conversationType: type,
    payload: {
      file: params,
    },
    onProgress: fun,
  });

  return imgMessage;
}

/*创建文件消息 */
export function createFileMessage(userID: string, type: string, params: any, fun?: Function) {
  if (type === 'signle') {
    type = TIM.TYPES.CONV_C2C;
  }
  if (type === 'group') {
    type = TIM.TYPES.CONV_GROUP;
  }
  let fileMessage = tim.createFileMessage({
    to: userID,
    conversationType: type,
    payload: {
      file: params,
    },
    onProgress: fun,
  });
  return fileMessage;
}

/*发送消息：将生成的 Message 实例发送 */
export function sendmessage(message): any {
  return tim.sendMessage(message);
}

/**
 * 将某会话下的未读消息状态设置为已读，置为已读的消息不会计入到未读统计
 * @param conversationID 会话Id
 */
export function setMessageRead(conversationID: string) {
  tim.setMessageRead({ conversationID: conversationID });
}

/*解析含emoji文本消息*/
/*最后的 renderDom 结构为[{name: 'text', text: 'XXX'}, {name: 'img', src: 'http://xxx'}......]
    渲染当前数组即可得到想要的 UI 结果，
    如：XXX<img src="https://main.qcloudimg.com/raw/6be88c30a4552b5eb93d8eec243b6593.png"  style="margin:0;">
    XXX<img src="https://main.qcloudimg.com/raw/6be88c30a4552b5eb93d8eec243b6593.png"  style="margin:0;">XXX[呲牙XXX]*/
export function parseText(payload, emojiMap, emojiUrl: string) {
  let renderDom: Array<any> = [];
  // 文本消息
  let temp = payload.text;
  let left = -1;
  let right = -1;
  while (temp !== '') {
    left = temp.indexOf('[');
    right = temp.indexOf(']');
    switch (left) {
      case 0:
        if (right === -1) {
          renderDom.push({
            name: 'text',
            text: temp,
          });
          temp = '';
        } else {
          let _emoji = temp.slice(0, right + 1);
          if (emojiMap[_emoji]) {
            // 如果您需要渲染表情包，需要进行匹配您对应[呲牙]的表情包地址
            renderDom.push({
              name: 'img',
              src: emojiUrl + emojiMap[_emoji],
            });
            temp = temp.substring(right + 1);
          } else {
            renderDom.push({
              name: 'text',
              text: '[',
            });
            temp = temp.slice(1);
          }
        }
        break;
      case -1:
        renderDom.push({
          name: 'text',
          text: temp,
        });
        temp = '';
        break;
      default:
        renderDom.push({
          name: 'text',
          text: temp.slice(0, left),
        });
        temp = temp.substring(left);
        break;
    }
  }
  return renderDom;
}

/*解析系统消息 */
export function parseGroupSystemNotice(payload) {
  const groupName = payload.groupProfile.groupName || payload.groupProfile.groupID;
  switch (payload.operationType) {
    case 1:
      return `${payload.operatorID} 申请加入群组：${groupName}`;
    case 2:
      return `成功加入群组：${groupName}`;
    case 3:
      return `申请加入群组：${groupName}被拒绝`;
    case 4:
      return `被管理员${payload.operatorID}踢出群组：${groupName}`;
    case 5:
      return `群：${groupName} 已被${payload.operatorID}解散`;
    case 6:
      return `${payload.operatorID}创建群：${groupName}`;
    case 7:
      return `${payload.operatorID}邀请你加群：${groupName}`;
    case 8:
      return `你退出群组：${groupName}`;
    case 9:
      return `你被${payload.operatorID}设置为群：${groupName}的管理员`;
    case 10:
      return `你被${payload.operatorID}撤销群：${groupName}的管理员身份`;
    case 255:
      return '自定义群系统通知';
    default:
      return '';
  }
}

/*解析群提示消息 */
export function parseGroupTipContent(payload) {
  switch (payload.operationType) {
    case TIM.TYPES.GRP_TIP_MBR_JOIN:
      return `群成员：${payload.userIDList.join(',')}，加入群组`;
    case TIM.TYPES.GRP_TIP_MBR_QUIT:
      return `群成员：${payload.userIDList.join(',')}，退出群组`;
    case TIM.TYPES.GRP_TIP_MBR_KICKED_OUT:
      return `群成员：${payload.userIDList.join(',')}，被${payload.operatorID}踢出群组`;
    case TIM.TYPES.GRP_TIP_MBR_SET_ADMIN:
      return `群成员：${payload.userIDList.join(',')}，成为管理员`;
    case TIM.TYPES.GRP_TIP_MBR_CANCELED_ADMIN:
      return `群成员：${payload.userIDList.join(',')}，被撤销管理员`;
    default:
      return '[群提示消息]';
  }
}
/*创建群组*/
export async function createGroup(groupInfo) {
  if (groupInfo.type == 'private') {
    groupInfo.type = TIM.TYPES.GRP_PRIVATE;
  }
  return tim.createGroup(groupInfo);
}

/**
 * 获取群组列表
 * return {
 *  imResponse.data.groupList // 群组列表
 * }
 */
export async function getGroupList() {
  await onSDKReady(() => { });
  return await tim.getGroupList();
}

export async function getGroupProfile(groupID: string) {
  let params = {
    groupID: groupID,
  };
  await onSDKReady(() => { });
  return await tim.getGroupProfile(params);
}

/**
 * 修改群组资料
 * @param groupInfo 群组资料
 */
export async function updateGroupProfile(groupInfo: GroupInfoUpdate) {
  await onSDKReady(() => { });
  return await tim.updateGroupProfile(groupInfo);
}
/**
 *  获取个人资料
 * return {imResponse.data; // 个人资料 - Profile 实例
 */
export async function getMyProfile() {
  await onSDKReady(() => { });
  return await tim.getMyProfile();
}
/**
 *  退出群组
 * @param groupID 群组Id
 * return {imResponse.data.groupID; // 退出成功的群 ID}
 */
export function quitGroup(groupID: string) {
  return tim.quitGroup(groupID);
}
/**
 *  删除会话

 * @param conversationID  用户的帐号列表，类型为string
 * return  imResponse.data;// 被删除的会话 ID。
 */
export function deleteConversation(conversationID: string) {
  return tim.deleteConversation(conversationID);
}
/**
 * 修改个人标配资料
 * @param groupInfo 群组资料
 */
export async function updateMyProfile(myInfo: myInfoCheck) {
  await onSDKReady(() => { });
  return await tim.updateMyProfile(myInfo);
}
/**
 * 获取群成员列表
 * @param groupID 群组Id
 * @param count 需要拉取的最大数量，默认100
 * @param offset 偏移量，默认从0开始
 * return {IMResponse.data.memberList //群成员列表}
 */
export function getGroupMemberlist(groupID: string, count: number = 100, offset: number = 0) {
  let promise = tim.getGroupMemberList({ groupID, count, offset });
  return promise;
}
/**
 *  获取其他用户资料
 * @param userIDList 用户的帐号列表，类型为数组
 * return {imResponse.data; // 存储用户资料的数组 - [Profile]}
 */
export function getUserProfile(userIDList: Array<any>) {
  return tim.getUserProfile({
    userIDList: userIDList, // 请注意：即使只拉取一个用户的资料，也需要用数组类型，例如：userIDList: ['user1']
  });
}
/**
 *  获取群成员资料
 * @param groupId 群组Id
 * @param userIdList 用户Id数组，单次最多500人
 * return {imResponse.data.existedUserIDList // 已在群中的群成员 userIDList}
 */
export function getGroupMemberProfile(groupId: string, userIdList: Array<string>) {
  return tim.getGroupMemberProfile(groupId, userIdList);
}

/**
 * 获取某会话的消息列表
 * @param conversationID 会话 ID
 * @param nextReqMessageID 用于分页续拉的消息 ID。第一次拉取时该字段可不填，每次调用该接口会返回该字段，续拉时将返回字段填入即可
 * return {
 *            messageList: imResponse.data.messageList,                //   消息列表。
 *             nextReqMessageID: imResponse.data.nextReqMessageID,     //   用于续拉，分页续拉时需传入该字段。
 *             isCompleted: imResponse.data.isCompleted                //   表示是否已经拉完所有消息。
 *        }
 */
export async function getMessageList(conversationID: string, nextReqMessageID?: string) {
  await onSDKReady(() => { });
  if (!nextReqMessageID) {
    return await tim.getMessageList({ conversationID: conversationID, count: 15 });
  }
  if (nextReqMessageID) {
    return await tim.getMessageList({ conversationID: conversationID, nextReqMessageID: nextReqMessageID, count: 15 });
  }
  // promise.then(function (imResponse) {
  //   let message = {
  //     messageList: imResponse.data.messageList,
  //     nextReqMessageID: imResponse.data.nextReqMessageID,
  //     isCompleted: imResponse.data.isCompleted
  //   }
  //   return message
  // });
}

export async function onConversationUpdate(fun: Function) {
  // function(fun) {
  // 收到会话列表更新通知，可通过遍历 event.data 获取会话列表数据并渲染到页面
  // event.name - TIM.EVENT.CONVERSATION_LIST_UPDATED
  // event.data - 存储 Conversation 对象的数组 - [Conversation]
  await onSDKReady(() => { });
  tim.on(TIM.EVENT.CONVERSATION_LIST_UPDATED, fun);
}

/**
 *  会话列表，用该列表覆盖原有的会话列表 获取ConversationId
 * @return imResponse.data.conversationList;
 */
export async function getConversationList() {
  await onSDKReady(() => { });
  return await tim.getConversationList();
}

export function onSDKReady(fun: Function) {
  // 监听事件，例如：
  // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
  // event.name - TIM.EVENT.SDK_READY
  subject.subscribe(() => {
    return new Promise((res) => {
      if (tim && tim.COStatus === 1) {
        return res(fun());
      }
      if (tim && tim.COStatus === 0) {
        tim.on(TIM.EVENT.SDK_READY, function func() {
          tim.COStatus = 1;
          return res(fun());
        });
      }
    });
  });
}

export function onMessage(fun: Function) {
  // function(fun) {
  // 收到推送的单聊、群聊、群提示、群系统通知的新消息，可通过遍历 event.data 获取消息列表数据并渲染到页面
  // event.name - TIM.EVENT.MESSAGE_RECEIVED
  // event.data - 存储 Message 对象的数组 - [Message]
  // });
  tim.on(TIM.EVENT.MESSAGE_RECEIVED, function lalala(e) {
    fun(e);
  });
}

export function onEventError(fun: Function) {
  // 收到 SDK 发生错误通知，可以获取错误码和错误信息
  // event.name - TIM.EVENT.ERROR
  // event.data.code - 错误码
  // event.data.message - 错误信息
  tim.on(TIM.EVENT.ERROR, fun);
}

export function onSDKNotReady(fun: Function) {
  // 收到 SDK 进入 not ready 状态通知，此时 SDK 无法正常工作
  // event.name - TIM.EVENT.SDK_NOT_READY
  tim.on(TIM.EVENT.SDK_NOT_READY, fun);
}

export async function onKickedOut(fun: Function) {
  // 收到被踢下线通知
  // event.name - TIM.EVENT.KICKED_OUT
  // event.data.type - 被踢下线的原因，例如 TIM.TYPES.KICKED_OUT_MULT_ACCOUNT 多账号登录被踢
  await onSDKReady(() => { });
  tim.on(TIM.EVENT.KICKED_OUT, fun);
}

export function addGroupNumber(params: { groupID: string; userIDList: Array<string> }) {
  return tim.addGroupMember(params);
}
