import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'portal-app-header-input-search',
  templateUrl: './header-input-search.component.html',
  styleUrls: ['./header-input-search.component.less'],
})
export class HeaderInputSearchComponent implements OnInit, OnDestroy {
  @ViewChild('search', { static: true }) inputEl: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  onClose(e) {
  }
}
