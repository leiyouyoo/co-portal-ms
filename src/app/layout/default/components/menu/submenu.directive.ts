import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Host,
  Input,
  Optional,
  Renderer2,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzTSType } from 'ng-zorro-antd/core/types';

import { isTooltipEmpty, NzTooltipBaseDirective, NzTooltipBaseComponent, NzTooltipTrigger } from 'ng-zorro-antd/tooltip';

@Directive({
  selector: '[co-submenu]',
  exportAs: 'coSubmenu',
  host: {
    '[class.ant-popover-open]': 'visible'
  }
})
export class CoSubmenuDirective extends NzTooltipBaseDirective {
  @Input('coPopoverTitle') specificTitle?: NzTSType;
  @Input('nzContent') specificContent?: NzTSType;
  @Input('co-submenu') directiveNameTitle?: NzTSType | null;
  @Input('coPopoverTrigger') specificTrigger?: NzTooltipTrigger;
  @Input('coPopoverPlacement') specificPlacement?: string;
  @Input('coOverlayClassName') nzOverlayClassName?: string;
  @Input('coPopoverOrigin') specificOrigin?: ElementRef<HTMLElement>;

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
      >
        <div class="ant-popover-content">
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="nzTitle">
                <ng-container *ngTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
              </div>
              <div class="ant-popover-inner-content">
                <ng-container *ngTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
})
export class CoSubmenuComponent extends NzTooltipBaseComponent {
  _prefix = 'co-submenu-placement';

  protected readonly triggerDisposables: Array<() => void> = [];

  private delayTimer?: any;

  constructor(cdr: ChangeDetectorRef, protected renderer: Renderer2, @Host() @Optional() public noAnimation?: NzNoAnimationDirective) {
    super(cdr, noAnimation);
  }

  protected isEmpty(): boolean {
    return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
  }

  onPositionChange(position) {
    if (this.origin && this.overlay && this.overlay.overlayRef) {
      this.overlay.overlayRef.overlayElement.classList.add('portal-menu__submenu-overlay')
      this.overlay.overlayRef.overlayElement.style.overflow = "auto";
      this.overlay.overlayRef.overlayElement.style.top = "44px";
      this.overlay.overlayRef.overlayElement.style.bottom = "0px";

      this.registerTriggers();
    }
  }


  protected registerTriggers(): void {
    const categoryItemEls = document.querySelectorAll(".portal-menu__category-item");
    const submenuEl = document.querySelector(".portal-menu__submenu");

    this.removeTriggerListeners();

    categoryItemEls.forEach(el => {
      this.triggerDisposables.push(
        this.renderer.listen(el, 'mouseenter', () => {
          this.delayEnterLeave(true, true, this.nzMouseEnterDelay);
        })
      );
      this.triggerDisposables.push(
        this.renderer.listen(el, 'mouseleave', () => {
          this.delayEnterLeave(true, false, 0);
          if (submenuEl) {
            this.triggerDisposables.push(
              this.renderer.listen(submenuEl, 'mouseenter', () => {
                this.delayEnterLeave(false, true);
              })
            );
            this.triggerDisposables.push(
              this.renderer.listen(submenuEl, 'mouseleave', () => {
                this.delayEnterLeave(false, false);
              })
            );
          }
        })
      );
    })
  }

  private delayEnterLeave(isOrigin: boolean, isEnter: boolean, delay: number = -1): void {
    if (this.delayTimer) {
      this.clearTogglingTimer();
    } else if (delay > 0) {

      this.delayTimer = setTimeout(() => {
        this.delayTimer = undefined;
        isEnter && this.active();
      }, delay * 1000);
    } else {
      (isEnter && isOrigin) && this.active();
    }
  }

  private removeTriggerListeners(): void {
    this.triggerDisposables.forEach(dispose => dispose());
    this.triggerDisposables.length = 0;
  }

  private clearTogglingTimer(): void {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = undefined;
    }
  }

  active(): void {
    console.log('active');
  }

}
