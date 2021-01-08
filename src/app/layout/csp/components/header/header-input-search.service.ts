import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { HeaderInputSearchComponent } from './header-input-search/header-input-search.component';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderInputSearchService implements OnDestroy {
  currentPopup: OverlayRef;
  routerEventSubscription: Subscription;

  constructor(private overlay: Overlay, private router: Router) {
    this.routerEventSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.currentPopup && this.currentPopup.hasAttached()) {
          this.currentPopup.detach();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
  }

  open(el?: HTMLElement) {
    const overlayRef = this.overlay.create(this.getOverlayConfig(el));
    this.currentPopup = overlayRef;

    const com = new ComponentPortal(HeaderInputSearchComponent);
    overlayRef.attach(com);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  }

  getOverlayConfig(el?: HTMLElement): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .top('17px'),
      hasBackdrop: true,
      backdropClass: 'grey-backdrop',
      panelClass: 'header-input-cdk-pane',
    });
  }
}
