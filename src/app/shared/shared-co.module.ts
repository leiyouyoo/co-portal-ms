import { CoCommonModule } from '@co/common';
import {
  CoNoticeIconModule,
  FullContentModule,
  PageHeaderModule,
  ReuseTabModule,
  CoSTModule,
  CoDatetimeRangePickerModule,
  CustomerPickerModule,
  CommodityPickerModule,
  PortPickerModule,
} from '@co/cbc';
import { CoCmsModule } from '@co/cms';

export const SHARED_CO_MODULES = [
  CoCommonModule,
  PageHeaderModule,
  CoNoticeIconModule,
  FullContentModule,
  ReuseTabModule,
  CoCmsModule,
  CoSTModule,
  CoDatetimeRangePickerModule,
  CustomerPickerModule,
  CommodityPickerModule,
  PortPickerModule,
];
