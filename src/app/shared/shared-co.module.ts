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
import { CoImModule } from '@co/im';
import { CoEditorModule } from '@co/cbc/basic/editor';

export const SHARED_CO_MODULES = [
  CoImModule,
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
