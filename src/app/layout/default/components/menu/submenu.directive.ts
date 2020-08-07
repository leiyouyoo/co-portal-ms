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
  Output,
  Optional,
  Renderer2,
  ViewContainerRef,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzTSType } from 'ng-zorro-antd/core/types';

import { isTooltipEmpty, NzTooltipBaseDirective, NzTooltipBaseComponent, NzTooltipTrigger } from 'ng-zorro-antd/tooltip';

@Directive({
  selector: '[co-submenu]',
  exportAs: 'coSubmenu',
  host: {
    '[class.ant-popover-open]': 'visible',
  },
})
export class CoSubmenuDirective extends NzTooltipBaseDirective {
  @Input('coPopoverTitle') specificTitle?: NzTSType;
  @Input('nzContent') specificContent?: NzTSType;
  @Input('co-submenu') directiveNameTitle?: NzTSType | null;
  @Input('coPopoverTrigger') specificTrigger?: NzTooltipTrigger;
  @Input('coPopoverPlacement') specificPlacement?: string;
  @Input('coOverlayClassName') nzOverlayClassName?: string;
  @Input('coPopoverOrigin') specificOrigin?: ElementRef<HTMLElement>;
  @Output() readonly coCatecoryActived = new EventEmitter<any>();

  protected readonly hoverTriggerDisposables: Array<() => void> = [];
  private hoverDelayTimer?: any;

  componentFactory: ComponentFactory<CoSubmenuComponent> = this.resolver.resolveComponentFactory(CoSubmenuComponent);

  constructor(
    elementRef: ElementRef,
    hostView: ViewContainerRef,
    resolver: ComponentFactoryResolver,
    renderer: Renderer2,
    @Host() @Optional() public noAnimation?: NzNoAnimationDirective,
  ) {
    super(elementRef, hostView, resolver, renderer, noAnimation);
  }

  ngOnDestroy() {
    this.removeHoverTriggerListeners();
  }

  show() {
    super.show();
    this.registerHoverTriggers();
  }

  hide() {
    this.removeHoverTriggerListeners();
    super.hide();
  }

  active(elem: any): void {
    this.coCatecoryActived.emit(elem && elem.getAttribute('data'));
  }

  protected registerHoverTriggers(): void {
    this.removeHoverTriggerListeners();

    const submenuItemEls = document.querySelectorAll('.portal-menu__submenu-item');
    submenuItemEls.forEach((el) => {
      this.renderer.listen(el, 'click', () => {
        debugger;
        this.hide();
      });
    });

    const submenuEl = document.querySelector('.portal-menu__submenu');
    const categoryItemEls = document.querySelectorAll('.portal-menu__submenu-category-item');
    categoryItemEls.forEach((el) => {
      this.hoverTriggerDisposables.push(
        this.renderer.listen(el, 'mouseenter', () => {
          this.delayHoverEnterLeave(el, true, true, this.nzMouseEnterDelay);
        }),
      );
      this.hoverTriggerDisposables.push(
        this.renderer.listen(el, 'mouseleave', () => {
          this.delayHoverEnterLeave(el, true, false, 0);
          if (submenuEl) {
            this.hoverTriggerDisposables.push(
              this.renderer.listen(submenuEl, 'mouseenter', () => {
                this.delayHoverEnterLeave(submenuEl, false, true);
              }),
            );
            this.hoverTriggerDisposables.push(
              this.renderer.listen(submenuEl, 'mouseleave', () => {
                this.delayHoverEnterLeave(el, false, false);
              }),
            );
          }
        }),
      );
    });
  }

  private delayHoverEnterLeave(elem: any, isOrigin: boolean, isEnter: boolean, delay: number = -1): void {
    if (this.hoverDelayTimer) {
      this.clearHoverTogglingTimer();
    } else if (delay > 0) {
      this.hoverDelayTimer = setTimeout(() => {
        this.hoverDelayTimer = undefined;
        isEnter && this.active(elem);
      }, delay * 1000);
    } else {
      isEnter && isOrigin && this.active(elem);
    }
  }

  private removeHoverTriggerListeners(): void {
    this.hoverTriggerDisposables.forEach((dispose) => dispose());
    this.hoverTriggerDisposables.length = 0;
  }

  private clearHoverTogglingTimer(): void {
    if (this.hoverDelayTimer) {
      clearTimeout(this.hoverDelayTimer);
      this.hoverDelayTimer = undefined;
    }
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
      <div class="ant-popover" [ngClass]="_classMap" [ngStyle]="nzOverlayStyle" [@.disabled]="noAnimation?.nzNoAnimation">
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
  `,
})
export class CoSubmenuComponent extends NzTooltipBaseComponent {
  _prefix = 'co-submenu-placement';

  constructor(cdr: ChangeDetectorRef, protected renderer: Renderer2, @Host() @Optional() public noAnimation?: NzNoAnimationDirective) {
    super(cdr, noAnimation);
  }

  protected isEmpty(): boolean {
    return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
  }

  onPositionChange(position) {
    if (this.origin && this.overlay && this.overlay.overlayRef) {
      this.overlay.overlayRef.overlayElement.classList.add('portal-menu__submenu-overlay');
      this.overlay.overlayRef.overlayElement.style.overflow = 'auto';
      this.overlay.overlayRef.overlayElement.style.top = '44px';
      this.overlay.overlayRef.overlayElement.style.bottom = '0px';
    }
  }
}
