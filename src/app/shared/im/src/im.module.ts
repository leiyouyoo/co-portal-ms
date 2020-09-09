import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewerComponent } from './component/image-previewer/image-previewer.component';
import { ImComponent } from './im.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { TextElementComponent } from './component/text-element/text-element.component';
import { ImService } from './service/im.service';
import { ImgElementComponent } from './component/img-element/img-element.component';
import { ImEmojiComponent } from './component/im-emoji/im-emoji.component';
import { ENVIRONMENT, Environment } from './service/environment';
import { ImContactsComponent } from './component/im-contacts/im-contacts.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { CustomerLifeCyclePipe } from './service/pipe/customer-life-cycle.pipe';
import { IMArrayJoinPipe } from './service/pipe/im-array-join.pipe';
import { AddressPopoverComponent } from './component/im-contacts/address-popover/address-popover.component';
import { ImBookingDetailComponent } from './component/im-booking-detail/im-booking-detail.component';
import { ImQuoteDetailComponent } from './component/im-quote-detail/im-quote-detail.component';
import { ImShipmentDetailComponent } from './component/im-shipment-detail/im-shipment-detail.component';
// import { AmapLibraryModule } from '@cityocean/amap-library';
import { ImShipmentStepComponent } from './component/im-shipment-detail/im-shipment-step/im-shipment-step.component';
import { ChatHistoryComponent } from './component/chat-history/chat-history.component';
import { ImDebounceInputDirective } from './service/directive/DebounceInput.Directive';
import { ImFileListsComponent } from './component/im-file-lists/im-file-lists.component';
import { ScheduleMessageComponent } from './component/schedule-message/schedule-message.component';
import { ImageCropperComponent } from './component/image-cropper/image-cropper.component';
import { ImTranslatePipe } from './service/pipe/im-translate.pipe';
import { ImBroadcastService } from './service/im-broadcast.service';
import { NgxMoveableModule } from 'ngx-moveable';

const components = [
  ImagePreviewerComponent,
  ImEmojiComponent,
  ImgElementComponent,
  ImComponent,
  TextElementComponent,
  ImContactsComponent,
  UserInfoComponent,
  ImShipmentDetailComponent,
  ImShipmentStepComponent,
  AddressPopoverComponent,
  ImBookingDetailComponent,
  ImQuoteDetailComponent,
  ChatHistoryComponent,
  ScheduleMessageComponent,
  ImFileListsComponent,
  ImageCropperComponent,
];
const directive = [ImDebounceInputDirective];
const pipe = [CustomerLifeCyclePipe, IMArrayJoinPipe, ImTranslatePipe];
const service = [ImBroadcastService];
@NgModule({
  declarations: [...components, ...directive, ...pipe],
  imports: [CommonModule, TranslateModule, NgZorroAntdModule, FormsModule, NgxMoveableModule],
  exports: [...components, ...directive, ...pipe],
  providers: [ImService],
})
export class DelonImModule {
  static forRoot(config: { environment: Environment }): ModuleWithProviders<DelonImModule> {
    return {
      ngModule: DelonImModule,
      providers: [{ provide: ENVIRONMENT, useValue: config.environment }],
    };
  }
}
