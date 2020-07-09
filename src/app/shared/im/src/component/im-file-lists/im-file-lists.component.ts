import { Component, OnInit, Input } from '@angular/core';
import { ImService } from '../../service/im.service';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'lib-im-file-lists',
  templateUrl: './im-file-lists.component.html',
  styleUrls: ['./im-file-lists.component.less'],
})
export class ImFileListsComponent implements OnInit {
  userMsg = JSON.parse(localStorage.getItem('co.session') || 'null');
  @Input() GroupId = '';
  @Input() FromAccount = '';
  ToAccount = this.userMsg?.session?.user?.id;
  fileList = [];
  pageInfo = {
    maxResultCount: 20,
    skipCount: 0,
    total: 0,
  };
  constructor(private imTemplateService: ImService) { }

  ngOnInit(): void {
    this.getFileLists();
  }
  getFileLists() {
    if (this.GroupId) {
      let params = {
        GroupId: this.GroupId,
        MaxResultCount: this.pageInfo.maxResultCount,
        SkipCount: this.pageInfo.skipCount * this.pageInfo.maxResultCount,
        Sorting: 'MsgTime desc',
      };
      this.imTemplateService.GetGroupFileInfos(params).subscribe((r: any) => {
        if (r) {
          this.fileList = this.fileList.concat(r.items).sort((a, b) => {
            return (a as any).creationTime < (b as any).creationTime ? 1 : -1;
          });
          this.pageInfo.total = r.totalCount;
          this.pageInfo.skipCount++;
        }
      });
    } else if (this.FromAccount) {
      let params = {
        FromAccount: this.FromAccount,
        ToAccount: this.ToAccount.toString(),
        MaxResultCount: this.pageInfo.maxResultCount,
        SkipCount: this.pageInfo.skipCount * this.pageInfo.maxResultCount,
        Sorting: 'MsgTime desc',
      };
      this.imTemplateService.GetC2CMsgFile(params).subscribe((r: any) => {
        if (r) {
          this.fileList = this.fileList.concat(r.items).sort((a, b) => {
            return (a as any).creationTime < (b as any).creationTime ? 1 : -1;
          });
          this.pageInfo.total = r.totalCount;
          this.pageInfo.skipCount++;
        }
      });
    }
  }
  getTime(time, farmat = 'YYYY/MM/DD A hh:mm') {
    if (!time) {
      return '';
    }
    return moment(time).format(farmat);
  }
  getFileType(item) {
    const type = item.extensionName;
    const doc = ['doc', 'docx', 'dot'];
    const xls = ['xla', 'xlc', 'xlm', 'xls', 'xlsx', 'xlt', 'xlw'];
    const ppt = ['pot', 'pps', 'ppt'];
    const picture = ['bmp', 'jap', 'jpe', 'jpeg', 'png', 'ico'];
    const txt = ['bas', 'c', 'h', 'txt'];
    const pdf = ['pdf'];
    if (doc.indexOf(type) != -1) return 'assets/images/im/file_word.png';
    if (xls.indexOf(type) != -1) return 'assets/images/im/file_xls.png';
    if (ppt.indexOf(type) != -1) return 'assets/images/im/file_ppt.png';
    if (picture.indexOf(type) != -1) return 'assets/images/im/file_picture.png';
    if (txt.indexOf(type) != -1) return 'assets/images/im/file_text.png';
    if (pdf.indexOf(type) != -1) return 'assets/images/im/file_pdf.png';
    return type;
  }
  downloadFile(data) {
    const link = document.createElement('a');
    link.href = data.url + '&handler=raw';
    (link.id = 'linkId'), (link.className = 'linkId'), (link.download = decodeURI(data.fileName + '.' + data.extensionName));
    link.click();
    link.remove();
    // const url = data.url;
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', url + '&handler=raw');
    // xhr.send();
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //     console.log(xhr.response);
    //     const blob = new Blob([xhr.response], { type: data.extensionName });
    //     const csvUrl = URL.createObjectURL(blob);
    //     const link = document.createElement('a');
    //     document.body.appendChild(link); //创建的标签添加到body，解决Firefox下无法打开页面的问题
    //     link.href = csvUrl;
    //     link.download = data.fileName + '.' + data.extensionName;
    //     link.target = '_blank';
    //     (link.id = 'linkId'), (link.className = 'linkId'), (link.download = decodeURI(data.fileName));
    //     link.click();
    //     link.remove();
    //   } else {
    //     console.log(xhr.status);
    //   }
    // };
    // xhr.onprogress = function(event) {
    //   console.log('onprogress()', event);
    // };
    // xhr.abort();
  }
}
