import { FullContentModule, PageHeaderModule } from '@co/cbc';
import { CoCommonModule } from '@co/common';
import { NoticeIconModule } from '@co/cbc/basic/notice-icon';

import { ReuseTabModule } from '@co/cbc';
import { G2BarModule } from '@co/chart/bar';
import { G2CardModule } from '@co/chart/card';
import { G2GaugeModule } from '@co/chart/gauge';
import { G2MiniAreaModule } from '@co/chart/mini-area';
import { G2MiniBarModule } from '@co/chart/mini-bar';
import { G2MiniProgressModule } from '@co/chart/mini-progress';
import { NumberInfoModule } from '@co/chart/number-info';
import { G2PieModule } from '@co/chart/pie';
import { G2RadarModule } from '@co/chart/radar';
import { G2SingleBarModule } from '@co/chart/single-bar';
import { G2TagCloudModule } from '@co/chart/tag-cloud';
import { G2TimelineModule } from '@co/chart/timeline';
import { TrendModule } from '@co/chart/trend';
import { G2WaterWaveModule } from '@co/chart/water-wave';
import { NgxPlanetModule } from '../../../packages/planet/src/public-api';

export const SHARED_DELON_MODULES = [
  CoCommonModule,
  PageHeaderModule,
  NoticeIconModule,
  G2BarModule,
  G2CardModule,
  G2GaugeModule,
  G2MiniAreaModule,
  G2MiniBarModule,
  G2MiniProgressModule,
  G2PieModule,
  G2RadarModule,
  G2SingleBarModule,
  G2TagCloudModule,
  G2TimelineModule,
  G2WaterWaveModule,
  NumberInfoModule,
  TrendModule,
  FullContentModule,
  ReuseTabModule,
  NgxPlanetModule
];
