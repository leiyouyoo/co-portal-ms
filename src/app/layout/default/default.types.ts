import { Layout, Menu } from '@co/common';

export interface DefaultLayout extends Layout {
  theme: 'light' | 'dark';
  /**
   * menu position
   */
  menu: 'side' | 'top';
  /**
   * layout of content, only works when menu is top
   */
  contentWidth: 'fluid' | 'fixed';
  /**
   * sticky header
   */
  fixedHeader: boolean;
  /**
   * auto hide header
   */
  autoHideHeader: boolean;
  /**
   * sticky siderbar
   */
  fixSiderbar: boolean;
  /**
   * Only icon of menu
   * Limited to a temporary solution [#2183](https://github.com/NG-ZORRO/ng-zorro-antd/issues/2183)
   */
  onlyIcon: boolean;
  /**
   * Color weak
   */
  colorWeak: boolean;
}
