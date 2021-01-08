// #region exports


import { CSPLangsComponent } from './components/langs/langs.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainLayoutComponent } from './main-layout.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HeaderNotificationsComponent } from './components/header-notifications/header-notifications.component';
import { HeaderComponent } from './components/header/header.component';


// #endregion

export const CSP_LAYOUT_COMPONENTS = [
  MainLayoutComponent,
  HeaderNotificationsComponent,
  FeedbackComponent,
  HeaderComponent,
  MenuComponent,
  CSPLangsComponent,
];
