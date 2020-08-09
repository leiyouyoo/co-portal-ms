import { CoCommonModule } from '@co/common';
import {
  CoNoticeIconModule,
  FullContentModule,
  PageHeaderModule,
  CoSTModule,
  CoDatetimeRangePickerModule,
  CustomerPickerModule,
  CommodityPickerModule,
  PortPickerModule,
  CoLayoutComponentsModule,
} from '@co/cbc';
import { ReuseTabModule, CoCmsModule } from '@co/cms';
import { DelonImModule } from './im/public_api';

export const SHARED_CO_MODULES = [
  DelonImModule,
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
  CoLayoutComponentsModule,
];
