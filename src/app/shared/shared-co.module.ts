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
import { CoEditorModule } from '@co/cbc/basic/editor';

export const SHARED_CO_MODULES = [
  DelonImModule,
  CoEditorModule,
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
