// #region exports


import { FeedbackComponent } from './components/feedback/feedback.component';

export * from './default.types';
export * from './default.service';
export * from './default.component';

// #endregion

// #region widgets

import { DefaultLayoutWidgetNotifyComponent } from './components/notify/notify.component';
import { DefaultLayoutWidgetSearchComponent } from './components/search/search.component';
import { LayoutProWidgetUserComponent } from './components/user/user.component';

const DEFAULT_LAYOUT_WIDGETS = [
  DefaultLayoutWidgetNotifyComponent,
  DefaultLayoutWidgetSearchComponent,
  LayoutProWidgetUserComponent,
  // LayoutProWidgetQuickComponent,
  DefaultLayoutHeaderWidgetComponent,
];

// #endregion

// #region entry components

// import { DefaultLayoutWidgetQuickPanelComponent } from './components/quick/quick-panel.component';
export const DEFAULT_LAYOUT_ENTRYCOMPONENTS = [];

// #endregion

// #region components

import { DefaultLayoutLangsComponent } from './components/langs/langs.component';
import { DefaultLayoutFooterComponent } from './components/footer/footer.component';
import { DefaultLayoutHeaderComponent } from './components/header/header.component';
import { DefaultLayoutLogoComponent } from './components/logo/logo.component';
import { DefaultLayoutMenuComponent } from './components/menu/menu.component';
import { CoSubmenuDirective, CoSubmenuComponent } from './components/menu/submenu.directive';
import { DefaultLayoutComponent } from './default.component';
import { LangsComponent } from './components/lang/langs.component';

export const DEFAULT_LAYOUT_COMPONENTS = [
  DefaultLayoutComponent,
  DefaultLayoutLangsComponent,
  DefaultLayoutMenuComponent,
  DefaultLayoutLogoComponent,
  DefaultLayoutHeaderComponent,
  DefaultLayoutFooterComponent,
  LangsComponent,
  CoSubmenuComponent,
  CoSubmenuDirective,
  ...DEFAULT_LAYOUT_ENTRYCOMPONENTS,
  ...DEFAULT_LAYOUT_WIDGETS,
  FeedbackComponent,
];

// #endregion

// #region shared components

import { DefaultLayoutHeaderWidgetComponent } from './components/widget/widget.component';
export const DEFAULT_SHARED_COMPONENTS = [];

// #endregion
