import { Component, HostBinding, NgZone } from '@angular/core';
import { GlobalEventDispatcher } from 'ngx-planet';

@Component({
  selector: 'app1-root-actual',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class AppActualRootComponent {
  @HostBinding(`class.thy-layout`) isLayout = true;
}

@Component({
  selector: 'app1-root',
  template: '<router-outlet></router-outlet>',
})
export class AppRootComponent {
  @HostBinding(`class.thy-layout`) isLayout = true;

  constructor(private globalEventDispatcher: GlobalEventDispatcher, private ngZone: NgZone) {
    this.globalEventDispatcher.register('openUserDetail').subscribe((payload: number) => {});
  }
}
