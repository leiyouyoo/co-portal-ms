import { Component, OnInit, ViewChild, ElementRef, HostListener, Input, Optional, Inject } from '@angular/core';
import {
  getConversationList,
  setMessageRead,
  createTextMessage,
  getGroupProfile,
  onKickedOut,
  onSDKReady,
  getGroupMemberlist,
  getUserProfile,
  sendmessage,
  onConversationUpdate,
  onMessage,
  createFileMessage,
  createImageMessage,
  updateGroupProfile,
  addGroupNumber,
  updateMyProfile,
  getMyProfile,
} from './service/IMservices';
import { FileManageService } from './util/index';
import { TranslateService } from '@ngx-translate/core';
import * as moment_ from 'moment';
import { cloneDeep } from 'lodash';
import { ImService } from './service/im.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ImContactsComponent } from './component/im-contacts/im-contacts.component';
// import Cropper from 'cropperjs';
import * as _ from 'lodash';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ACLService } from '@co/acl';
import { NzModalService } from 'ng-zorro-antd';
import { SocialService } from '@co/auth';
import { DomSanitizer } from '@angular/platform-browser';
import { ImBroadcastService } from './service/im-broadcast.service';
import { AnyCnameRecord } from 'dns';
const moment = moment_;

@Component({
  selector: 'app-im',
  templateUrl: './im.component.html',
  styleUrls: ['./im.component.less'],
  providers: [SocialService],
})
export class ImComponent implements OnInit {
  userMsg = JSON.parse(localStorage.getItem('ICPUserMsg') || 'null');
  @ViewChild('imageUpload') imageChild: ElementRef;
  @ViewChild('fileUploadElement') fileChild: ElementRef;
  @ViewChild('avatarUploadElement') avatarChild: ElementRef;
  @ViewChild('imContacts') imContactsElement: ImContactsComponent;
  @ViewChild('scrollMe') myScrollContainer: ElementRef;
  cropper: any;
  visible: boolean;
  isVisible = false;
  isChat = false;
  isSchedule = false; // 是否为日程消息
  emojiContentVisible = false; // 表情选择
  avatarContentVisible = false; // 修改头像气泡控制
  showAddMemberContent = false; // 添加群成员控制
  editGroupName = true; // 修改群名称
  editGroupNotification = true; // 修改群公告
  conversationsList: Array<any> = []; // 会话列表
  searchConversationsList: Array<any> = []; // 会话列表
  chatMessageList: Array<any> = []; //历史消息列表
  allMessage = true; // 已加载全部数据
  selectedItem: any; // 当前选择的会话
  searchText = '';
  selectIconType = '';
  nowTime: string; // 当前时间
  currentWindowShowType = 'chat';
  iconList: Array<any> = [];
  pageInfo = {
    maxResultCount: 10,
    skipCount: 0,
  };
  forwardPageInfo = {
    maxResultCount: 10,
    skipCount: 0,
  };
  myImId = this.userMsg?.session?.user?.id;
  inputValue = '';
  isC2C = false;
  fromId = '';
  membersList = []; // 群成员列表
  groupInfo = { notification: '', ownerID: '', introduction: '', name: '', avatar: '', groupID: '' };
  imgUrlList: any[];
  showPreviewer: boolean;
  isSelectItem: boolean = false;
  myProfile: any; // 个人资料
  groupInfoCopy: any;
  messageId: any; // 聊天记录查询的消息id
  globelPersonList: Array<any> = []; // 全局搜索人员列表
  hideBottomShowMore: boolean; // 聊天窗底部显示更多按钮
  hideTopShowMore: boolean; // 聊天窗顶部显示更多按钮
  showCustomerservice = false; // 控制快捷入口按钮
  customerserviceId = null; // 快捷入口业务id
  customerserviceType: string; // 快捷入口业务类型
  iconListSeleted: { class: string; type: string }[] = [];
  iconListUnselected: { class: string; type: string }[] = [];
  imageFile: File; // 传入裁切组件的文件
  showCropper: boolean; // 展示裁切
  bussineNoForGroupName: any;
  ImSDKReady: boolean;
  userProfile: any; // 聊天对象资料
  constructor(
    private translate: TranslateService,
    private imBroadcastService: ImBroadcastService,
    private imTemplateService: ImService,
    private nzMessageService: NzMessageService,
    private fileManageService: FileManageService,
    private el: ElementRef,
    private router: Router,
    private modalService: NzModalService,
    private aclService: ACLService,
    private socialService: SocialService,
    private sanitizer: DomSanitizer,
  ) {
    this.router.events.pipe(filter((e) => e instanceof NavigationStart)).subscribe((route: any) => {
      this.compareUrl(route.url);
    });
  }
  @Input() fromType = 'csp';
  @ViewChild('ImContainer') ImContainer: ElementRef;
  @HostListener('document:click', ['$event.target'])
  onClick($event: HTMLElement) {
    let isPreviewerClose = false;
    if (!($event as HTMLElement).hasAttribute('edit-group')) {
      this.editGroupNotification = true;
      this.editGroupName = true;
    }
    if (
      $event.parentNode &&
      $event.parentNode.parentNode &&
      ($event.parentNode.parentNode as HTMLElement).hasAttribute('data-im-input-show')
    ) {
      isPreviewerClose = true;
    }
    const isEmojiPopover = $event.classList.contains('cdk-overlay-backdrop');
    const isContactsPopover = $event.classList.contains('ant-popover-title');
    const clickedInside = this.ImContainer.nativeElement.contains($event);
    if (
      !isEmojiPopover &&
      !isContactsPopover &&
      !isPreviewerClose &&
      $event.tagName &&
      !clickedInside &&
      $event.nodeName != 'path' &&
      $event.nodeName != 'svg' &&
      !($event as HTMLElement).hasAttribute('data-im-input-show') &&
      !$event.classList.contains('ant-popover-inner-content')
    ) {
      this.closeImLayout();
      this.isChat = false;
      this.isSelectItem = true;
    }
  }
  ngOnInit() {
    this.imBroadcastService.on('shipment').subscribe((res: any) => {
      this.customerserviceType = res.customerserviceType;
      this.customerserviceId = res.customerserviceId;
      this.onCustomerservice();
    });
    this.handleImConversation();
    this.compareUrl();
  }
  checkAnonymous(): boolean {
    if (this.aclService.can({ role: ['Anonymous'] })) {
      this.modalService.confirm({
        nzTitle: this.translate.instant('This operation need to login first'),
        nzIconType: 'info-circle',
        nzOkText: this.translate.instant('Login'),
        nzOnOk: () => {
          // this.socialService.logout();
        },
        nzOnCancel: () => {},
      });
      return true;
    }
    return false;
  }
  // 快捷入口点击事件
  onCustomerservice() {
    if (this.checkAnonymous()) {
      return;
    }
    const arr = this.checkConversationList();
    if (arr.length) {
      this.isVisible = true;
      this.showChat(arr[0], true);
    } else {
      this.isVisible = true;
      let item = {
        bussinessType: this.customerserviceType.toLowerCase(),
        type: 'GROUP',
        disbandGroupFlage: true,
        groupProfile: {
          groupID: `${this.customerserviceType}${this.customerserviceId}`,
          name: this.customerserviceType,
        },
        lastMessage: { messageForShow: '' },
        name: this.customerserviceType,
        conversationID: `GROUP${this.customerserviceType}${this.customerserviceId}`,
      };
      this.conversationsList.unshift(item);
      this.showChat(item, true);
    }
  }
  // 对比url，用于显示快捷入口
  compareUrl(url?) {
    this.customerserviceId = null;
    this.showCustomerservice = false;
    if (!url) {
      url = location.href;
    }
    if (url.indexOf('/bookings/BookingView') != -1) {
      this.customerserviceId = url.split('BookingId=')[1].substr(0, 36);
      this.customerserviceType = 'Booking';
    } else if (url.indexOf('/crm/booking/bookinglist/bookingDetail/') != -1) {
      this.customerserviceId = url.split('booking/bookinglist/bookingDetail/')[1].substr(0, 36);
      this.customerserviceType = 'Booking';
    } else if (url.indexOf('crm/quotes/quoteslist/quotesDetail/') != -1) {
      this.customerserviceId = url.split('crm/quotes/quoteslist/quotesDetail/')[1].substr(0, 36);
      this.customerserviceType = 'Quote';
    } else if (url.indexOf('/quotes/QuotesDetail') != -1) {
      this.customerserviceId = url.split('quotesId=')[1].substr(0, 36);
      this.customerserviceType = 'Quote';
    } else if (url.indexOf('/shipments/detail/') != -1) {
      this.customerserviceId = url.split('/shipments/detail/')[1].substr(0, 36);
      this.customerserviceType = 'Shipment';
    } else {
      return;
    }
    this.showCustomerservice = true;
  }
  // 判断当前会话是否包含在内
  checkConversationList(conversation?) {
    let conversationId: string;
    if (conversation) {
      conversationId = conversation;
    } else {
      conversationId = `GROUP${this.customerserviceType}${this.customerserviceId}`;
    }
    return this.conversationsList.filter((e: any) => {
      return e.conversationID === conversationId;
    });
  }
  closeImLayout($event?) {
    this.isVisible = false;
    if ($event) {
      $event.stopPropagation();
    }
  }

  closeChatDiv($event?) {
    this.isChat = false;
    this.isSelectItem = true;
    $event && $event.stopPropagation();
  }

  handleImConversation() {
    const initConversationList = (list) => {
      this.compareUrl();
      const systemList = list.filter((e) => {
        return e.type == '@TIM#SYSTEM';
      });
      systemList.forEach((ele) => {
        if (ele?.lastMessage?.type == 'TIMGroupSystemNoticeElem' && ele?.lastMessage?.payload?.operationType === 5) {
          if (this.selectedItem?.groupProfile?.groupID === ele?.lastMessage?.payload?.groupProfile?.groupID) {
            this.cancleChatDiv();
          }
        }
      });
      list = list.filter((e) => {
        return e.type != '@TIM#SYSTEM';
      });

      list.forEach((ele) => {
        if (ele.type == 'C2C') {
          ele.bussinessType = ele.type;
          ele.name = ele.userProfile.userID;
          const message = ele.lastMessage.payload.text;
          if (
            ele.lastMessage.type === 'TIMTextElem' &&
            message.includes('RemindStartTime') &&
            message.includes('RemindEndTime') &&
            this.isJSON(message)
          ) {
            const data = JSON.parse(message);
            ele.isRemindMessage = true;
            ele.title = data.Title;
            ele.lastMessage.messageForShow = data.Content || '';
            ele.bussinessType = 'remindMessage';
          }
        } else if (ele.type != '@TIM#SYSTEM') {
          ele.bussinessType = this.formatBussinessType(ele.conversationID);
          ele.name = ele.groupProfile.name;
        }
      });
      this.conversationsList = [...list];
      this.checkIsFromQiyeWechat();
    };
    const self = this;
    onSDKReady(async function ready() {
      self.ImSDKReady = true;
      onMessage(async function messageRecived(imRes) {
        let data = imRes.data[0];
        if (data.type == 'TIMImageElem') {
          let url = data.payload.imageInfoArray[0].imageUrl;
          data['msgBody'] = [{ msgContent: { ImageInfoArray: [{ URL: url }] } }];
        } else if (data.type == 'TIMFileElem') {
          data['msgBody'] = [
            {
              msgContent: {
                FileName: data.payload.fileName,
                Url: data.payload.fileUrl,
                FileSize: data.payload.fileSize,
                DownloadFlag: data.payload.downloadFlag,
              },
            },
          ];
        }
        if (data?.type === 'TIMGroupTipElem') {
          await self.imTemplateService.getUser(data?.payload?.operatorID).subscribe((r: any) => {
            data.operatorName = r.user.name;
          });
        }
        if (self.selectedItem && data.conversationID === self.selectedItem.conversationID) {
          setMessageRead(data.conversationID);
          self.chatMessageList = self.chatMessageList.concat(data);
        }
        self.scrollBottom();
      });
      onKickedOut(function kickedOut() {
        self.nzMessageService.info(self.translate.instant('Offline notification: the account has been logged in on other devices'));
      });
      onConversationUpdate(function updateConversationList(event) {
        initConversationList(event.data);
      });
      getMyProfile().then((imResponse) => {
        console.log(imResponse);
        self.myProfile = imResponse.data;
      });

      let imRes = await getConversationList();
      if (!imRes) {
        return;
      }
      initConversationList(imRes.data.conversationList);
    });
  }

  /**
   * @description 如果是企业微信跳转过来的，根据会话ID打开会话
   * @memberof ImTemplateComponent
   */
  checkIsFromQiyeWechat() {
    const url = location.href;
    if (url.includes('conversationID')) {
      const conversationId = url
        .split('?')[1]
        .split('&')
        .filter((e) => {
          return e.includes('conversationID');
        })[0]
        .split('=')[1];
      const arr = this.checkConversationList(conversationId);
      if (arr.length) {
        this.isVisible = true;
        this.showChat(arr[0], true);
      }
    }
  }
  isJSON(str) {
    if (typeof str == 'string') {
      try {
        var obj = JSON.parse(str);
        if (typeof obj == 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  /**
   * @description 获取业务类型
   * @returns
   * @memberof CityOceanService
   */
  formatBussinessType(conversationID: string) {
    if (conversationID.toLowerCase().startsWith('groupbooking')) {
      return 'booking';
    } else if (conversationID.toLowerCase().startsWith('grouporder')) {
      return 'order';
    } else if (conversationID.toLowerCase().startsWith('groupshipment')) {
      return 'shipment';
    } else if (conversationID.toLowerCase().startsWith('groupquote')) {
      return 'quote';
    } else if (conversationID.toLowerCase().startsWith('groupqbilling')) {
      return 'billing';
    } else {
      return 'privateGroup';
    }
  }
  /**
   * @description 获取业务id
   * @returns
   * @memberof CityOceanService
   */
  formatBussinessId() {
    return this.selectedItem.conversationID.toLowerCase().replace('group' + this.selectedItem.bussinessType, '');
  }
  // 会话列表上的时间显示
  getHometime(time) {
    return this.getImChatTime(time * 1000, 'HH:mm');
  }
  /**
   * 格式化聊天时间
   *
   * @returns
   * @memberof CityOceanService
   */
  getImChatTime(time, formatType?) {
    const replaceAMPM = (e: string) => {
      return e.replace(/PM/, `${this.translate.instant('PM')}`).replace(/AM/, `${this.translate.instant('AM')}`);
    };
    const Date = moment(time);
    let currentWeek = moment().weekday(moment().weekday()).format();
    if (Date.isValid()) {
      const toDay = moment().startOf('day');
      if (Date.isSameOrAfter(toDay)) {
        return replaceAMPM(Date.format(formatType || `[${this.translate.instant('Today')}] HH:mm`));
      } else if (Date.isSameOrAfter(toDay.subtract(1, 'd')) && Date.isBefore(moment().format())) {
        return replaceAMPM(Date.format(`[${this.translate.instant('Yesterday')}] HH:mm`));
      }
      if (Date.isBefore(currentWeek)) {
        return replaceAMPM(Date.format('YYYY/MM/DD HH:mm'));
      } else {
        let week = '';
        switch (Date.format('d')) {
          case '1':
            week = this.translate.instant('Monday');
            break;
          case '2':
            week = this.translate.instant('Tuesday');
            break;
          case '3':
            week = this.translate.instant('Wednesday');
            break;
          case '4':
            week = this.translate.instant('Thursday');
            break;
          case '5':
            week = this.translate.instant('Friday');
            break;
          case '6':
            week = this.translate.instant('Saturday');
            break;
          default:
            week = this.translate.instant('Sunday');
            break;
        }
        return replaceAMPM(Date.format(`[${week}] HH:mm`));
      }
    } else {
      return '';
    }
  }

  // 显示聊天
  showChat(item, setTop = false) {
    this.isSchedule = false;
    if (setTop) {
      this.searchText = '';
      const index = this.conversationsList.findIndex((e) => {
        return e.conversationID === item.conversationID;
      });
      if (index >= 0) {
        this.conversationsList.unshift(this.conversationsList.splice(index, 1)[0]);
      }
    }
    if (this.selectedItem && item.conversationID === this.selectedItem.conversationID && this.isChat == true) {
      return;
    } else if (item.isRemindMessage) {
      this.isSchedule = true;
    }
    this.isSelectItem = false;
    this.hideTopShowMore = false;
    this.hideBottomShowMore = false;
    this.isChat = true;
    this.pageInfo = {
      maxResultCount: 10,
      skipCount: 0,
    };
    this.forwardPageInfo = {
      maxResultCount: 10,
      skipCount: 0,
    };
    this.messageId = null;
    this.chatMessageList = [];
    // this.allMessage = false;
    this.selectedItem = item;
    if (item.unreadCount != 0) {
      setMessageRead(item.conversationID);
    }
    if (
      this.selectedItem.bussinessType != 'C2C' &&
      this.selectedItem.bussinessType != 'remindMessage' &&
      this.selectedItem.bussinessType != 'order'
    ) {
      this.isC2C = false;
      this.fromId = this.selectedItem.groupProfile.groupID;
      this.selectIconType = 'groupBussiness';
      this.iconListUnselected = [
        { class: 'iconfont icon-guanlianyewu', type: 'groupBussiness' },
        { class: 'iconfont icon-qunxinxi', type: 'info' },
        { class: 'iconfont icon-liantianwenjian', type: 'file' },
        { class: 'iconfont icon-jilu', type: 'history' },
      ];
      this.iconList = [
        { class: 'iconfont icon-guanlianyewuT', type: 'groupBussiness' },
        { class: 'iconfont icon-qunxinxi', type: 'info' },
        { class: 'iconfont icon-liantianwenjian', type: 'file' },
        { class: 'iconfont icon-jilu', type: 'history' },
      ];
      this.iconListSeleted = [
        { class: 'iconfont icon-guanlianyewuT', type: 'groupBussiness' },
        { class: 'iconfont icon-qunxinxiT', type: 'info' },
        { class: 'iconfont icon-liantianwenjianT', type: 'file' },
        { class: 'iconfont icon-jiluT', type: 'history' },
      ];
      if (this.selectedItem.disbandGroupFlage) {
        this.iconListUnselected.splice(1, 1);
        this.iconList.splice(1, 1);
        this.iconListSeleted.splice(1, 1);
      }
    } else {
      this.selectIconType = 'info';
      this.iconListUnselected = [
        { class: 'iconfont icon-geren', type: 'info' },
        { class: 'iconfont icon-liantianwenjian', type: 'file' },
        { class: 'iconfont icon-jilu', type: 'history' },
      ];
      this.iconList = [
        { class: 'iconfont icon-gerenT', type: 'info' },
        { class: 'iconfont icon-liantianwenjian', type: 'file' },
        { class: 'iconfont icon-jilu', type: 'history' },
      ];
      this.iconListSeleted = [
        { class: 'iconfont icon-gerenT', type: 'info' },
        { class: 'iconfont icon-liantianwenjianT', type: 'file' },
        { class: 'iconfont icon-jiluT', type: 'history' },
      ];
      if (this.selectedItem.bussinessType === 'order') {
        this.isC2C = false;
        this.fromId = this.selectedItem.groupProfile.groupID;
        this.iconListUnselected[0] = { class: 'iconfont icon-qunxinxi', type: 'info' };
        this.iconList[0] = { class: 'iconfont icon-qunxinxiT', type: 'info' };
        this.iconListSeleted[0] = { class: 'iconfont icon-qunxinxiT', type: 'info' };
      } else {
        this.isC2C = true;
        this.fromId = this.selectedItem.userProfile.userID;
      }
    }
    this.getChatList(false);
    this.getGroupOrUserInfo();
  }
  // 获取群组或个人信息
  getGroupOrUserInfo() {
    this.membersList = [];
    try {
      if (!this.isC2C) {
        try {
          getGroupMemberlist(this.fromId)
            .then((res) => {
              this.membersList = res.data.memberList;
              console.log(this.membersList);
            })
            .catch((error) => {
              console.log(error);
              this.nzMessageService.error(error);
            });
        } catch (error) {
          console.log(error);
          this.nzMessageService.error(error);
        }
        try {
          getGroupProfile(this.fromId)
            .then((res) => {
              this.groupInfo = res.data.group;
              this.groupInfoCopy = cloneDeep(res.data.group);
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
              this.nzMessageService.error(error);
            });
        } catch (error) {
          console.log(error);
          this.nzMessageService.error(error);
        }
      } else {
        getUserProfile([this.fromId])
          .then((res) => {
            this.userProfile = res.data[0];
          })
          .catch((err) => {
            console.log(err);
            this.nzMessageService.error(err);
          });
      }
    } catch (error) {
      console.log(error);
      this.nzMessageService.error(error);
    }
  }
  // 聊天记录定位
  showChatWithMsgId(msgId) {
    console.log(msgId);
    this.messageId = msgId;
    this.pageInfo = {
      maxResultCount: 10,
      skipCount: 0,
    };
    this.forwardPageInfo = {
      maxResultCount: 10,
      skipCount: 0,
    };
    this.chatMessageList = [];
    this.getChatList(false, false);
  }
  /**
   * 获取消息列表
   *
   * @param loadMore
   * @memberof ChatPage
   */
  getChatList(loadMore = false, isForward = false) {
    if (!this.isC2C) {
      let params = {
        GroupId: this.fromId,
        MaxResultCount: this.pageInfo.maxResultCount,
        SkipCount: this.pageInfo.skipCount * this.pageInfo.maxResultCount,
      };
      if (this.messageId) {
        params['MegSeq'] = this.messageId;
        params['isForward'] = false;
        if (isForward) {
          params.SkipCount = this.forwardPageInfo.skipCount * this.forwardPageInfo.maxResultCount;
          params['isForward'] = true;
        }
      }
      this.imTemplateService.getGroupMsg(params).subscribe((res: any) => {
        this.handldChatList(res, null, loadMore, isForward);
      });
    } else {
      let params = {
        FromAccount: this.fromId,
        ToAccount: this.myImId.toString(),
        MaxResultCount: this.pageInfo.maxResultCount,
        SkipCount: this.pageInfo.skipCount * this.pageInfo.maxResultCount,
        Sorting: 'msgTime desc',
      };
      if (this.messageId) {
        params['id'] = this.messageId;
        params['isForward'] = false;
        delete params.Sorting;
        if (isForward) {
          params.SkipCount = this.forwardPageInfo.skipCount * this.forwardPageInfo.maxResultCount;
          params['isForward'] = true;
        }
      }
      this.imTemplateService.getC2CMsg(params).subscribe((res: any) => {
        console.log(res);
        this.handldChatList(res, params.Sorting, loadMore, isForward);
      });
    }
  }
  /**
   * // 处理消息列表数据
   * @memberof ChatPage
   */
  handldChatList(res, sorting, loadMore = false, isForward = false) {
    if (this.messageId && res.items.length === 0) {
      !isForward ? (this.hideBottomShowMore = true) : (this.hideTopShowMore = true);
    }
    res.items.forEach((e) => {
      e.flow = e.from == this.myImId ? 'out' : 'in';
      e.anchorImgUrl = this.isC2C ? e.fromImageUrl : e.fromAccountImageUrl;
      e.type = e.msgBody[0].msgType;
      e['payload'] = { text: e.msgBody[0].msgContent.Text };
      e.msgTime = moment(e.msgTime).format();
    });
    if (!this.messageId) {
      res.items.reverse(); //消息按时间排序
    }
    // undo 之前已经遍历过，后续可以优化是否需要重新遍历
    this.chatMessageList.forEach((e) => {
      e.isChecked = false;
    });
    let tmpChatLists: Array<any>;
    // 判断是否为搜索聊天记录后定位
    if (this.messageId) {
      if (isForward) {
        this.forwardPageInfo.skipCount++;
        tmpChatLists = res.items.concat(this.chatMessageList);
      } else {
        this.pageInfo.skipCount++;
        tmpChatLists = [...this.chatMessageList, ...res.items];
      }
    } else {
      this.pageInfo.skipCount++;
      tmpChatLists = res.items.concat(this.chatMessageList);
    }
    // 去重
    let obj = {};
    tmpChatLists = tmpChatLists.reduce(function (item, next) {
      obj[next.id] ? '' : (obj[next.id] = true && item.push(next));
      return item;
    }, []);
    let _chatList = tmpChatLists.filter((e) => {
      return !e.isTimeShow;
    });
    let has5MinInclude = false;
    // 插入时间显示
    let chatListWithTime: Array<any> = [];
    for (let index = _chatList.length - 1; index >= 0; index--) {
      const element = _chatList[index];
      const msgTime = moment(element.msgTime).format();
      let subtract5Min = moment(this.nowTime).subtract(5, 'minutes').format();
      if (
        !element.isChecked &&
        !element.isTimeShow &&
        !moment(this.nowTime).isSame(msgTime) &&
        !moment(msgTime).isBetween(subtract5Min, this.nowTime)
      ) {
        this.nowTime = msgTime;
        subtract5Min = moment(this.nowTime).subtract(5, 'minutes').format();
        const checkTime = (i) => {
          let _element = _chatList[i];
          if (has5MinInclude) {
            // 如果消息包含当前时间5分以内的，插入5分钟内最前面的消息时间
            chatListWithTime.unshift({ isTimeShow: true, time: _chatList[i + 1].msgTime });
            has5MinInclude = false;
          }
          chatListWithTime.unshift(_element);
          if (i - 1 >= 0) {
            const _msgTime = moment(_chatList[i - 1].msgTime).format();
            if (moment(_msgTime).isBetween(subtract5Min, this.nowTime)) {
              checkTime(--i);
              _element.isChecked = true;
            } else {
              this.nowTime = _element.msgTime;
              chatListWithTime.unshift({ isTimeShow: true, time: _element.msgTime }); // 如果消息时间差超过5分钟，插入时间
              return;
            }
          } else {
            this.nowTime = _element.msgTime;
            chatListWithTime.unshift({ isTimeShow: true, time: _element.msgTime }); // 最前面一条消息的时间
          }
        };
        checkTime(index);
      } else if (!element.isTimeShow && !moment(this.nowTime).isSame(msgTime) && moment(msgTime).isBetween(subtract5Min, this.nowTime)) {
        has5MinInclude = true;
        chatListWithTime.unshift(element);
      } else if (
        !element.isTimeShow &&
        moment(this.nowTime).isSame(msgTime) &&
        !chatListWithTime.some((e) => {
          return e.id === element.id;
        })
      ) {
        chatListWithTime.unshift(element);
      }
    }
    this.chatMessageList = chatListWithTime;
    if (
      this.chatMessageList.filter((e) => {
        return !e.isTimeShow;
      }).length >= res.totalCount
    ) {
      this.allMessage = true;
    } else {
      this.allMessage = false;
    }
    !this.messageId && !loadMore && this.scrollBottom();
  }
  // 中间栏icon点击事件
  getData(data, i) {
    let arr = _.cloneDeep(this.iconListUnselected);
    arr[i] = this.iconListSeleted[i];
    this.iconList = arr;
    this.selectIconType = data;
  }
  chooseColor(data, i) {
    if (this.selectIconType === data) {
      return '#1890FF';
    }
    return;
  }
  // 全局搜索
  glogbelSearch() {
    const searchKey = this.searchText.toLowerCase();
    if (!searchKey) {
      this.visible = false;
      this.searchConversationsList = [];
      return;
    }
    this.globelPersonList = this.imContactsElement.searchContact(searchKey);
    const subStrForSearch = (str) => {
      return str.substr(str.toLowerCase().indexOf(searchKey), searchKey.length);
    };
    this.searchConversationsList = _.cloneDeep(this.conversationsList).filter((e) => {
      if (e.isRemindMessage) {
        return false;
      }
      if (this.justText(e?.lastMessage?.messageForShow).toLowerCase().includes(searchKey)) {
        let msg = this.justText(e?.lastMessage?.messageForShow);
        e.lastMessage.messageForShow = this.sanitizer.bypassSecurityTrustHtml(
          msg.replace(subStrForSearch(msg), `<span style ='color: #1890ff;'>${subStrForSearch(msg)}</span>`),
        );
        return true;
      }
      if (e.groupProfile && e.groupProfile.name.toLowerCase().includes(searchKey)) {
        e.groupProfile.name = this.sanitizer.bypassSecurityTrustHtml(
          e.groupProfile.name.replace(
            subStrForSearch(e.groupProfile.name),
            `<span style ='color: #1890ff;'>${subStrForSearch(e.groupProfile.name)}</span>`,
          ),
        );
        return true;
      }
      if (e.userProfile && e.userProfile.nick.toLowerCase().includes(searchKey)) {
        e.userProfile.nick = this.sanitizer.bypassSecurityTrustHtml(
          e.userProfile.nick.replace(
            subStrForSearch(e.userProfile.nick),
            `<span style ='color: #1890ff;'>${subStrForSearch(e.userProfile.nick)}</span>`,
          ),
        );
        return true;
      }
      return false;
    });
  }
  // 格式化头像
  getAvtar(item) {
    if (item.bussinessType === 'shipment') {
      return 'assets/images/im/ship.png';
    } else if (item.bussinessType === 'booking') {
      return 'assets/images/im/bookings.png';
    } else if (item.bussinessType === 'quote') {
      return 'assets/images/im/quote.png';
    } else if (item.bussinessType === 'billing') {
      return 'assets/images/im/billing.png';
    } else if (item.bussinessType === 'order') {
      return 'assets/images/im/Order@3x.png';
    } else if (item.bussinessType === 'remindMessage') {
      return 'assets/images/im/mk_blling@3x.png';
    } else if (item.bussinessType === 'C2C') {
      return item?.userProfile?.avatar ? this.formatImAvatarUrl(item?.userProfile?.avatar) : 'assets/images/im/avatar-2.png';
    } else if (item.bussinessType === 'privateGroup') {
      return 'assets/images/im/avatar-2.png';
    } else {
      return 'assets/images/im/avatar-2.png';
    }
  }
  justText(str) {
    return str.replace(/<[^>]+>/g, '');
  }

  /**
   *处理enter发送，ctrl+enter换行
   *
   * @returns
   * @memberof ChatPage
   */
  checkKeyUp(event) {
    event.stopPropagation();
    let keyCode = event.keyCode || event.which || event.charCode;
    let ctrlKey = event.ctrlKey || event.metaKey;
    // 判断 ctrl+enter 换行
    if (ctrlKey && keyCode == 13) {
      this.inputValue += '\n';
    } else if (keyCode == 13) {
      this.inputValue = this.inputValue.replace(/(?:[\n\r]*)$/g, '');
      this.send();
    }
  }
  // 处理enter发送
  checkKeyDown(e) {
    e.stopPropagation();
    var et = e || window.event;
    var keycode = et.charCode || et.which || et.keyCode;
    if (keycode == 13) {
      if (window.event) {
        window.event.returnValue = false;
      } else {
        e.preventDefault(); //for firefox
      }
    }
  }
  /**
   *发送消息
   *
   * @returns
   * @memberof ChatPage
   */
  async send() {
    this.fromId += '';
    let textMessage: any = {};
    if (this.inputValue == '' || this.fromId == null || this.inputValue == undefined) {
      return;
    }
    if (!this.inputValue.replace(/[\r\n\s+]/g, '')) {
      return;
    }
    textMessage = createTextMessage(this.fromId, this.isC2C ? 'signle' : 'group', this.inputValue);
    try {
      await sendmessage(textMessage)
        .then((imRes) => {
          this.insertCurrentTime();
          let _data = cloneDeep(imRes.data.message);
          _data.msgKey = `${_data.sequence}_${_data.random}_${_data.time}`;
          this.chatMessageList.push(_data);
          setMessageRead(this.selectedItem.conversationID);
        })
        .catch((error) => {
          console.log(error);
          this.nzMessageService.error(error.message || 'Failed to send,Please Rrefresh and try again');
        });
    } catch (error) {
      this.inputValue = '';
    }
    this.inputValue = '';
    this.scrollBottom();
  }
  // 图片按钮点击事件
  imgUpload() {
    this.imageChild.nativeElement.click();
  }
  fileUpload() {
    this.fileChild.nativeElement.click();
  }
  // 发送图片消息
  async imageChange($event) {
    let params = $event.target;
    let fileMessage: any = {};
    setMessageRead(this.selectedItem.conversationID);
    let reader = new FileReader();
    reader.readAsDataURL($event.target.files[0]);
    let localImg;

    reader.onload = async (theFile) => {
      localImg = theFile.target.result;

      let obj = {
        type: 'TIMImageElem',
        flow: 'out',
        msgBody: [
          {
            msgContent: {
              ImageInfoArray: [{ URL: localImg }],
            },
          },
        ],
        process: 0,
      };
      this.chatMessageList.push(obj);
      this.scrollBottom();
      fileMessage = createImageMessage(this.fromId, this.isC2C ? 'signle' : 'group', params, (event) => {
        obj.process = event;
      });
      try {
        fileMessage = await sendmessage(fileMessage);
      } catch (error) {
        this.nzMessageService.error(error);
      }
      params.value = '';
      this.scrollBottom();
    };
  }
  // 发送文件消息
  async fileChange($event) {
    let params = $event.target;
    const file = params.files[0];
    if (file.size / 1024 / 1024 > 100) {
      this.nzMessageService.error(this.translate.instant('The file size exceeds 100M, cannot be sent!'));
      return;
    }
    let fileMessage: any = {};
    setMessageRead(this.selectedItem.conversationID);
    let obj = {
      type: 'TIMFileElem',
      flow: 'out',
      msgBody: [
        {
          msgContent: {
            FileName: file.name,
            Url: '',
            FileSize: file.size,
            DownloadFlag: true,
          },
        },
      ],
      process: 0,
    };
    this.chatMessageList.push(obj);
    this.scrollBottom();
    fileMessage = createFileMessage(this.fromId, this.isC2C ? 'signle' : 'group', params, (event) => {
      obj.process = event;
    });
    try {
      fileMessage = await sendmessage(fileMessage);
    } catch (error) {
      this.nzMessageService.error(error);
    }
    const data = fileMessage.data.message;
    Object.assign(obj, {
      msgBody: [
        {
          msgContent: {
            FileName: data.payload.fileName,
            Url: data.payload.fileUrl,
            FileSize: data.payload.fileSize,
            DownloadFlag: data.payload.downloadFlag,
          },
        },
      ],
    });
    params.value = '';
    this.scrollBottom();
  }
  onProgress(event) {
    console.log('file uploading:', event);
  }
  sendClick(event) {
    if (event.type === 'TIMImageElem') {
      this.chatMessageList.push({
        type: 'TIMImageElem',
        flow: 'out',
        msgBody: [
          {
            msgContent: {
              ImageInfoArray: [{ URL: event.payload.imageInfoArray[0].imageUrl }],
            },
          },
        ],
      });
    } else if (event.type === 'TIMFileElem') {
      this.chatMessageList.push({
        type: 'TIMFileElem',
        flow: 'out',
        msgBody: [
          {
            msgContent: {
              FileName: event.payload.fileName,
              Url: event.payload.fileUrl,
              FileSize: event.payload.fileSize,
              DownloadFlag: event.payload.downloadFlag,
            },
          },
        ],
      });
    } else {
      this.chatMessageList.push(event);
    }
    this.scrollBottom();
  }
  /**
   * 与最后一条消息比较时间，如果超出5分钟，插入最新时间
   *
   * @memberof ChatPage
   */
  insertCurrentTime() {
    const now = moment(new Date()).format();
    const element = this.chatMessageList[this.chatMessageList.length - 1];
    if (!element) {
      // 如果一条消息都有没有的情况
      this.chatMessageList.push({ isTimeShow: true, time: now });
      return;
    }
    const time = moment(element.msgTime).format();
    const add5Min = moment(time).add(5, 'minutes').format();
    if (!element.isTimeShow && !moment(time).isSame(now) && moment(now).isAfter(add5Min)) {
      this.chatMessageList.push({ isTimeShow: true, time: now });
    }
  }

  /**
   * 下载文件
   * @param msg 文件消息
   */
  downlaodFile(msg) {
    const link = document.createElement('a');
    link.download = msg.msgBody[0].msgContent.FileName;
    link.href = this.imTemplateService.formatImAvatarUrl(msg.msgBody[0].msgContent.Url, 'raw');
    link.click();
  }
  scrollBottom() {
    if (this.myScrollContainer) {
      setTimeout(() => {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      }, 100);
    }
  }
  // 展示图片预览
  showPreviewImg(event) {
    this.imgUrlList = [event];
    this.showPreviewer = true;
  }
  // 表情相关
  emojiComponentChange(value: boolean) {
    console.log(value);
  }
  choosedEmoji(event): void {
    this.inputValue += event;
    this.emojiContentVisible = false;
  }

  /**
   * @param  是否为通讯录点击的
   * @memberof ImTemplateComponent
   */
  chatWithPercon(personInfo, notFromChat = false) {
    console.log(personInfo);
    let newConversationID = '';
    let userInfo = {
      bussinessType: 'C2C',
      conversationID: newConversationID,
      lastMessage: {
        lastTime: new Date().valueOf() / 1000,
        messageForShow: '',
        payload: {
          text: '',
        },
        type: 'TIMTextElem',
      },
      type: 'C2C',
      unreadCount: 0,
    };
    if (!notFromChat) {
      Object.assign(userInfo, {
        userProfile: {
          userID: personInfo.userID,
          nick: personInfo.nick ? personInfo.nick : personInfo.userId,
        },
        name: personInfo.nick ? personInfo.nick : personInfo.userID,
        conversationID: 'C2C' + personInfo.userID,
      });
    } else {
      if (!personInfo.userId || !personInfo.isActive) {
        // 没有激活账号
        this.nzMessageService.info(this.translate.instant('Not activated'));
        return;
      }
      Object.assign(userInfo, {
        userProfile: {
          userID: personInfo.userId,
          nick: personInfo.name ? personInfo.name : personInfo.userId,
        },
        name: personInfo.name ? personInfo.name : personInfo.userId,
        conversationID: 'C2C' + personInfo.userId,
      });
    }
    this.currentWindowShowType = 'chat';
    let checkExited: any;
    this.conversationsList.forEach((e, index) => {
      if (e.conversationID == userInfo.conversationID) {
        checkExited = { index: index, value: e };
      }
    });
    if (checkExited) {
      this.showChat(checkExited.value, true);
    } else {
      this.chatMessageList = [];
      setMessageRead(userInfo.conversationID);
      this.conversationsList.unshift(userInfo);
      this.showChat(userInfo);
    }
  }

  onlyShowChat(event) {
    this.isChat = true;
    this.isSelectItem = false;
    event.stopPropagation();
  }

  clearSearch(event) {
    this.searchText = '';
    event.stopPropagation();
  }

  selectTXL(e) {
    this.currentWindowShowType = 'book';
    e.stopPropagation();
  }

  cancleChatDiv(e?) {
    this.isChat = false;
    this.selectedItem = null; // 当前选择的会话
    this.isSelectItem = false;
    e && e.stopPropagation();
  }
  // 联系人双击事件
  imContactsDbClick(event) {
    event.userID = event.userId;
    this.chatWithPercon(event, true);
  }

  /**
   * @description 修改群信息
   * @author youlei
   * @memberof ImTemplateComponent
   */
  editGroupProfile() {
    if (this.groupInfoCopy.name === this.groupInfo.name && this.groupInfoCopy.notification === this.groupInfo.notification) {
      return;
    }
    updateGroupProfile({
      groupID: this.selectedItem.groupProfile.groupID,
      name: this.groupInfo.name,
      notification: this.groupInfo.notification,
    }).then((r) => {
      this.groupInfoCopy = cloneDeep(this.groupInfo);
    });
  }
  initGroupmemberToJoin(imContacts): Array<any> {
    return [
      ...new Set(
        imContacts.calculateTotalChecked().map((e) => {
          return e.userId.toString();
        }),
      ),
    ];
  }

  /**
   * @description 添加群成员
   * @author youlei
   * @param {*} imContacts
   * @memberof ImTemplateComponent
   */
  addMemberConfirm(imContacts) {
    addGroupNumber({
      groupID: this.selectedItem.groupProfile.groupID,
      userIDList: this.initGroupmemberToJoin(imContacts),
    }).then((res) => {
      this.getGroupOrUserInfo();
      this.showAddMemberContent = false;
    });
  }

  /**
   * @description 头像上传
   * @author youlei
   * @memberof ImTemplateComponent
   */
  avtarUpload($event) {
    console.log($event.target);
    this.imageFile = $event.target.files[0];
    this.showCropper = true;
    this.avatarContentVisible = false;
    $event.target.value = '';
  }
  avtarUploadClick() {
    this.avatarChild.nativeElement.click();
  }

  // 处理头像
  onEmitFile(file) {
    this.fileManageService.upload(file).subscribe((res: any) => {
      console.log(res.url);
      updateMyProfile({ avatar: res.fileId })
        .then((r) => {
          this.myProfile = { ...r.data };
          this.nzMessageService.success(this.translate.instant('Successfully modified'));
          this.imTemplateService
            .UpdateUserInfo({ userId: this.userMsg?.session?.user?.id, profilePictureId: res.fileId })
            .subscribe((user) => {
              console.log(user);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  formatImAvatarUrl(fileId) {
    return this.imTemplateService.formatImAvatarUrl(fileId);
  }
  showImLayout() {
    // 判断是否为访客模式
    if (this.checkAnonymous()) return;
    // SDk是否ready
    if (!this.ImSDKReady) return;
    this.isVisible = true;
  }
  getTotalUnreadCount() {
    let count = 0;
    this.conversationsList.forEach((e) => {
      count += e.unreadCount;
    });
    return count;
  }
  onShowBussinessNo($event) {
    this.bussineNoForGroupName = $event;
  }
  isIE() {
    return this.imTemplateService.isIE();
  }
}
