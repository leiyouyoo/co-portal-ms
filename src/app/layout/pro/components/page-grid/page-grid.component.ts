import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, Renderer2 } from '@angular/core';
import { ReuseTabService } from '@co/cbc';
import { TitleService } from '@co/common';
import { InputBoolean } from '@co/core';
import { BrandService } from '../../pro.service';

@Component({
  selector: 'page-grid',
  templateUrl: './page-grid.component.html',
  host: {
    '[class.alain-pro__page-grid]': 'true',
    '[class.alain-pro__page-grid-no-spacing]': 'noSpacing',
    '[class.alain-pro__page-grid-wide]': 'pro.isFixed',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProPageGridComponent implements AfterViewInit {
  @Input() @InputBoolean() loading = false;

  @Input() @InputBoolean() noSpacing = false;

  @Input() style: any;

  @Input()
  set title(value: string) {
    if (value) {
      if (this.titleSrv) {
        this.titleSrv.setTitle(value);
      }
      if (this.reuseSrv) {
        this.reuseSrv.title = value;
      }
    }
  }

  constructor(
    private el: ElementRef,
    private rend: Renderer2,
    public pro: BrandService,
    @Optional() @Inject(TitleService) private titleSrv: TitleService,
    @Optional() @Inject(ReuseTabService) private reuseSrv: ReuseTabService,
  ) { }

  ngAfterViewInit() {
    if (this.style) {
      Object.keys(this.style).forEach((key: string) => {
        this.rend.setStyle(this.el.nativeElement, key, this.style[key]);
      });
    }
  }
}
