import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-schedule-message',
  templateUrl: './schedule-message.component.html',
  styleUrls: ['./schedule-message.component.less'],
})
export class ScheduleMessageComponent implements OnInit, OnChanges {
  @Input() chatMessage: any;
  messageContent = { RemindStartTime: '', RemindEndTime: '', Title: '', Content: '', AdvanceTime: 0 };
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.messageContent = JSON.parse(this.chatMessage.payload.text);
    console.log(this.messageContent);
  }
}
