import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { emojiMap, emojiName, emojiUrl } from '../../entity/emojiMap';

@Component({
  selector: 'app-im-emoji',
  templateUrl: './im-emoji.component.html',
  styleUrls: ['./im-emoji.component.less'],
})
export class ImEmojiComponent implements OnInit {
  @Output() chooseEmojiEmit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  emojiUrl = emojiUrl;
  emojiMap = emojiMap;
  emojiName = emojiName;
  ngOnInit() {}
  chooseEmoji(item) {
    this.chooseEmojiEmit.emit(item);
  }
}
