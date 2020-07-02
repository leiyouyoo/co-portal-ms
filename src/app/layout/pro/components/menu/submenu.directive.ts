/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  ViewChild,
  Host,
  Input,
  Optional,
  Renderer2,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { CdkConnectedOverlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzTSType } from 'ng-zorro-antd/core/types';

import { isTooltipEmpty, NzTooltipBaseDirective, NzToolTipComponent, NzTooltipTrigger } from 'ng-zorro-antd/tooltip';

@Directive({
  selector: '[co-submenu]',
  exportAs: 'coSubmenu',
  host: {
    '[class.ant-popover-open]': 'visible'
  }
})
export class CoSubmenuDirective extends NzTooltipBaseDirective {
  @Input('nzPopoverContent') specificContent?: NzTSType;
  @Input('nz-popover') directiveNameTitle?: NzTSType | null;
  @Input('nzPopoverTrigger') specificTrigger?: NzTooltipTrigger;
  @Input('nzPopoverPlacement') specificPlacement?: string;
  @Input('nzPopoverOrigin') specificOrigin?: ElementRef<HTMLElement>;

  componentFactory: ComponentFactory<CoSubmenuComponent> = this.resolver.resolveComponentFactory(CoSubmenuComponent);

  constructor(
    elementRef: ElementRef,
    hostView: ViewContainerRef,
    resolver: ComponentFactoryResolver,
    renderer: Renderer2,
    @Host() @Optional() public noAnimation?: NzNoAnimationDirective
  ) {
    super(elementRef, hostView, resolver, renderer, noAnimation);
  }
}

@Component({
  selector: 'co-submenu',
  exportAs: 'coSubmenuComponent',
  animations: [zoomBigMotion],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      (backdropClick)="hide()"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
    >
      <div
        class="ant-popover"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
        (click)="onClick()"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="nzTitle">
                <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
              </div>
              <div class="ant-popover-inner-content">
                <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
})
export class CoSubmenuComponent extends NzToolTipComponent {
  _prefix = 'co-submenu-placement';
  @ViewChild(CdkConnectedOverlay, { static: false }) overlay!: CdkConnectedOverlay;

  constructor(cdr: ChangeDetectorRef, @Host() @Optional() public noAnimation?: NzNoAnimationDirective) {
    super(cdr, noAnimation);
  }


  // updatePosition(): void {

  //   debugger
  //   super.updatePosition();
  //   if (this.origin && this.overlay && this.overlay.overlayRef) {
  //     this.overlay.overlayRef.overlayElement.style.top = "46px";
  //     this.overlay.overlayRef.overlayElement.style.bottom = "0px";
  //     this.overlay.overlayRef.overlayElement.style.width = "200px";
  //   }
  // }


  onClick() {
    const v = this.overlay;

  }
}
