import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getUserProfile } from '../IMservices';
@Pipe({
  name: 'imTranslate',
})
export class ImTranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}
  transform(value: string, ...args: any[]): Promise<string> {
    if (value.includes('创建群组')) {
      return getUserProfile([value.split('创建群组')[0]]).then((res) => {
        console.log(res);
        return `${res.data[0].nick}${this.translate.instant('Create Group')}`;
      });
    } else {
      return Promise.resolve(value);
    }
  }
}
