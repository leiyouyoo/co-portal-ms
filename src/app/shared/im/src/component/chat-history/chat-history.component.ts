import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ImService } from '../../service/im.service';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'lib-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.less'],
})
export class ChatHistoryComponent implements OnInit, OnChanges {
  userMsg = JSON.parse(localStorage.getItem('co.session') || 'null');
  searchHistoryText = '';
  @Output() showChatWithMsgId: EventEmitter<any> = new EventEmitter<any>();
  @Input() groupID: string;
  @Input() isC2C = false;
  userId = this.userMsg?.session?.user?.id;
  historyList: any = [];
  pageInfo = {
    maxResultCount: 10,
    skipCount: 0,
    total: 0,
  };
  constructor(private imTemplateService: ImService) { }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.clearSearch();
  }
  ngOnInit(): void { }
  clearSearch() {
    this.searchHistoryText = '';
    this.historyList = [];
    this.pageInfo = {
      maxResultCount: 10,
      skipCount: 0,
      total: 0,
    };
  }
  searchChatHistory(isNewSearch = true) {
    this.getChatList(isNewSearch);
  }
  getChatList(isNewSearch) {
    if (!this.searchHistoryText) {
      this.historyList = [];
      return;
    }
    if (isNewSearch) {
      this.pageInfo.skipCount = 0;
      this.historyList = [];
    }
    if (!this.isC2C) {
      let params = {
        GroupId: this.groupID,
        MaxResultCount: this.pageInfo.maxResultCount,
        SkipCount: this.pageInfo.skipCount * this.pageInfo.maxResultCount,
      };
      params['MsgPatternValue'] = this.searchHistoryText;
      this.imTemplateService.getGroupMsg(params).subscribe((res: any) => {
        console.log(res);
        this.ionRefresherCheck(res, isNewSearch);
      });
    } else {
      let params = {
        FromAccount: this.groupID,
        ToAccount: this.userId,
        MaxResultCount: this.pageInfo.maxResultCount,
        SkipCount: this.pageInfo.skipCount * this.pageInfo.maxResultCount,
        Sorting: 'msgTime desc',
      };
      params['MsgPatternValue'] = this.searchHistoryText;
      this.imTemplateService.getC2CMsg(params).subscribe((res: any) => {
        this.ionRefresherCheck(res, isNewSearch);
      });
    }
  }
  ionRefresherCheck(res, isNewSearch) {
    if (isNewSearch) {
      this.historyList = [];
    }
    res.items.forEach((e) => {
      e.flow = e.from == this.userId ? 'out' : 'in';
      e.type = e.msgBody[0].msgType;
      e['payload'] = { text: e.msgBody[0].msgContent.Text };
    });
    this.pageInfo.total = res.totalCount;
    this.historyList = this.historyList.concat(res.items);
    this.pageInfo.skipCount++;
  }
  // 格式化时间
  getTime(time, farmat = 'YYYY/MM/DD A hh:mm') {
    if (!time) {
      return '';
    }
    return moment(time).format(farmat);
  }
  onShowChatWithMsgId(item) {
    this.showChatWithMsgId.emit(this.isC2C ? item.id : item.msgSeq);
  }
}
