import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-co-document',
  templateUrl: './co-document.component.html',
  styleUrls: ['./co-document.component.less'],
})
export class CoDocumentComponent implements OnInit {
  constructor(private msg: NzMessageService) {}
  fileIsAllCheck = false;
  fileIsAllCheckMin;
  checkStateMap = [];
  isIndeterminate;
  numberOfCheck;
  fileCheckList = [];
  files = [
    {
      uploadBy: '买家 叁',
      creationTime: '2020-07-02T06:08:14.8295283Z',
      sharingItems: [
        {
          targetUserFullName: '买家 叁',
          targetCompanyName: '买家客户叁',
          id: 'd6e753d1-8bb3-4572-4bb0-08d81e4e4eaf',
          operationType: 2,
          targetUserId: 23774,
          targetCustomerId: '32809880-4fc3-447a-b19e-decaacbe8b37',
          targetPartnerId: null,
        },
      ],
      id: 'a617b570-2ebf-49ed-d2e1-08d81e4e4eaa',
      businessId: 'ac7ddf1a-48e6-4bff-42d4-08d81d9dcc84',
      businessType: 3,
      attachmentType: null,
      fileId: '1a1d9c9e-73d6-5dbe-e3ed-39f4ad045146',
      fileName: 'truckDemo.png',
      extensionName: 'png',
    },
  ];
  isVisible = false;
  date;
  ngOnInit() {}
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
  filecheckAll(value: boolean): void {
    this.files.forEach((item) => (this.checkStateMap[item.id] = value));
    this.fieldRefreshStatus();
  }
  fieldRefreshStatus(): void {
    this.fileIsAllCheck = this.files.every((item) => this.checkStateMap[item.id]);
    // 未全选中状态，但是已选择部分
    this.isIndeterminate =
      this.files.some((item) => this.checkStateMap[item.id]) && !this.files.every((item) => this.checkStateMap[item.id]);
    this.numberOfCheck = this.files.filter((item) => this.checkStateMap[item.id]).length;
    this.fileCheckList = this.files
      .filter((item) => this.checkStateMap[item.id])
      .map((value) => {
        return value;
      });
    console.log(this.fileCheckList, 'fileCheckList');
  }
  /**
   * 删除文件
   * @param file 文件
   */
  delete(file) {
    // this.fileManageService.deleteFile(file.id).subscribe((res) => {
    //   this.searchFile(this._AttachmentType);
    // });
  }
}
