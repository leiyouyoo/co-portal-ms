import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Inject } from '@angular/core';
import { groupBy, sumBy, orderBy, merge } from 'lodash';
import { NzModalService, UploadFile, UploadXHRArgs } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductService } from 'src/app/service/csp/product.service';
import { CurrencyService, DataDictionaryService, CSPExcelService } from '@co/cds';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'booking-packing-list',
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.less'],
})
export class PackingListComponent implements OnInit {
  @ViewChild('dataOfListTbody', { static: false, read: ElementRef }) set dataOfListTbody(el: ElementRef) {
    if (el) {
      console.log(el);
      (el.nativeElement as HTMLElement).removeEventListener('click', this.onTbodyClick, true);
      (el.nativeElement as HTMLElement).addEventListener('click', this.onTbodyClick, true);
    }
  }
  @Input() bookingId: number;
  @Input() tradeType: number; //贸易类型
  @Input() isEdit: string; //是否是编辑页面
  @Input() isPackSubmitted: boolean = false; //装箱单验证是否通过
  @Output() verificationPassed = new EventEmitter<boolean>(); //发票表格验证是否通过
  //表格
  tableIndex = 0; //表格下标默认
  @Output() cusClearanceInvoices = new EventEmitter<Array<any>>(); //报关发票
  @Output() cusClearanceInvoicesGroup = new EventEmitter<Array<any>>(); //报关发票分组
  @Output() packingLists = new EventEmitter<Array<any>>(); //装箱单
  //币别
  @Output() declareCurrency = new EventEmitter<number>();
  //发票数据
  _listOfData: any[] = [];
  @Input() set listOfData(value: any[]) {
    this._listOfData = value;
    if (this._listOfData)
      for (let index = 0; index < this._listOfData.length; index++) {
        const element = this._listOfData[index];
        element.NO = index;
      }
    this.GroupingFBA();
  }
  get listOfData() {
    return this._listOfData;
  }
  //分组过后发票数组
  listOfDataGROUP: Array<any> = new Array<any>();
  //装箱单数据
  _pageList: any[] = [];
  @Input() set pageList(value: any[]) {
    this._pageList = value;
    this.GroupingFBA();
  }
  get pageList() {
    return this._pageList;
  }
  @Input() isDisabledPack: boolean = false; //在详情页面调用装箱单页面需要禁用
  declareCurrencyInfo = 'd67186ce-8b2c-4a75-81f1-a4fe3cc12de9'; //默认币别数据(暂时)
  cargo: cargo = {};
  isSelSku: boolean = false;
  url = environment.SERVER_URL + '/CSP/Booking/ClearanceInviocesUpload'; //上传
  imgUrl = environment.SERVER_URL;
  downUrl = environment.SERVER_URL + '/CSP/Booking/ClearanceInviocesDownload'; //下载
  downExcelUrl = environment.SERVER_URL + '/Storage/Excel/DownloadExcel';
  uploadUrl = environment.SERVER_URL + '/Storage/File/Upload';
  skuDuplicateMap: { [prop: string]: boolean };
  constructor(
    public message: NzMessageService,
    private fb: FormBuilder,
    private modalService: NzModalService,
    public currencySevice: CurrencyService,
    public dataDictionarySevice: DataDictionaryService,
    public productService: ProductService,
    public cSPExcelService: CSPExcelService,
  ) {}

  ngOnInit() {
    // this.getAllCurrency();
    this.selUnit('003');
    this.declareCurrency.emit(11);
  }
  isNoFBANO: number;
  isNoReference: number;
  isDuplicateSku: number;
  isNoEnglish: number;
  isNoChinese: number;
  isNoBrand: number;
  isNoMaterial: number;
  isNoUses: number;
  isNoHsCode: number;
  isNoModel: number;
  isNoUnit: number;
  isNoUnitPrice: number;
  isNoimg: number;

  // 弹窗sku quantity
  modalQuantityRequiredIndex = -1;
  packverificationForm() {
    this.verificationForm();
  }
  submitverificationForm() {
    this.isPackSubmitted = true;
    this.verificationForm();
  }
  verificationForm() {
    if (!this.listOfData) {
      this.verificationPassed.emit(true);
      return;
    } else if (this.listOfData.length <= 0) {
      this.verificationPassed.emit(true);
      return;
    }
    for (let index = 0; index < this.listOfData.length; index++) {
      const element = this.listOfData[index];
      if (element) {
        if (!element.fbaNo) {
          this.isNoFBANO = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoFBANO = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.referenceId) {
          this.isNoReference = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoReference = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.commodityEnglishDesc) {
          this.isNoEnglish = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoEnglish = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.commodityChineseDesc) {
          this.isNoChinese = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoChinese = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.brand) {
          this.isNoBrand = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoBrand = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.material) {
          this.isNoMaterial = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoMaterial = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.uses) {
          this.isNoUses = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoUses = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.hsCode) {
          this.isNoHsCode = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoHsCode = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.model) {
          this.isNoModel = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoModel = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.unitPriceValue) {
          this.isNoUnitPrice = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoUnitPrice = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.unitId) {
          this.isNoUnit = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoUnit = -1;
          this.verificationPassed.emit(true);
        }
        if (!element.imageId) {
          this.isNoimg = index;
          this.verificationPassed.emit(false);
          return false;
        } else {
          this.isNoimg = -1;
          this.verificationPassed.emit(true);
        }
      }
      if (
        this.isNoFBANO != -1 ||
        this.isNoReference != -1 ||
        this.isNoEnglish != -1 ||
        this.isNoChinese != -1 ||
        this.isNoBrand != -1 ||
        this.isNoMaterial != -1 ||
        this.isNoUses != -1 ||
        this.isNoHsCode != -1 ||
        this.isNoModel != -1 ||
        this.isNoUnit != -1 ||
        this.isNoUnitPrice != -1
      ) {
        this.verificationPassed.emit(false);
      } else {
        this.verificationPassed.emit(true);
      }
    }
  }

  //#region fba发票表格操作
  addRow(): void {
    let i = this.listOfData.length > 0 ? this.listOfData.length : this.tableIndex;
    i++;
    this.listOfData = [
      ...this.listOfData,
      {
        NO: i,
        fbaNo: ``,
        referenceId: ``,
        sku: ``,
        commodityEnglishDesc: ``,
        commodityChineseDesc: ``,
        brand: ``,
        material: ``,
        uses: ``,
        hsCode: ``,
        asin: ``,
        isContainsBattery: true,
        model: '',
        quantity: 0,
        unit: '',
        unitPriceValue: 0,
        unitPriceUnit: 1,
        totalPriceValue: 0,
        totalPriceUnit: 1,
        imageId: ``,
        isShow: false,
        cusClearanceProductId: null,
        id: null,
        isEdit: true,
        remainder: 0,
        pageNum: [],
      },
    ];
    this.isPackSubmitted = false;
  }

  deleteRow(item): void {
    this.listOfData = this.listOfData.filter((d) => d.NO !== item.NO);
    this.pageList = this.pageList.filter((o) => {
      if (o.fbaNo !== item.fbaNo) return true;
      o.packingListItems = o.packingListItems.filter((p) => p.sku !== item.sku);
      return true;
    });
    this.isPackSubmitted = false;
    this.cusClearanceInvoices.emit(this.listOfData);
  }
  isShowPacking: boolean = false;
  selectedIndex: number = 0;
  //#endregion
  //币别列表
  currencyList: Array<any> = new Array<any>();
  getAllCurrency() {
    this.currencySevice.getAll({}).subscribe((c) => {
      console.log(this.currencyList, 'currencyList');
      this.currencyList = c.items;
    });
  }

  options: Array<any> = new Array<any>();
  onInput(value: string): void {
    this.getSkuList({ searchText: value });
    this.isNoSku = -1;
  }
  //获取SKU列表
  getSkuList(skuInput: { searchText?: string; maxResultCount?: number; skipCount?: number }) {
    this.productService.getSkuList(skuInput).subscribe((c: any) => {
      this.options = c.items;
    });
  }

  ispresenceSku: boolean = false; //是否选择了相同的SKU
  getSku(event: any, data: any, index: number) {
    this.listOfData.forEach((b) => {
      if (b.NO == data.NO) {
        data.sku = event.sku;
        data.commodityEnglishDesc = event.name;
        data.hsCode = event.hsCode;
        data.cusClearanceProductId = event.id;
        data.asin = event.url;
      }
    });
    if (this.listOfData.filter((c) => c.sku == event.sku && c.NO != data.NO).length > 0) {
      this.ispresenceSku = true;
    } else {
      this.ispresenceSku = false;
    }
  }
  unitList: Array<any> = new Array<any>();
  //单位下拉框
  selUnit(typeId: string) {
    this.dataDictionarySevice.getAll({ typeCode: typeId, maxResultCount: 200 }).subscribe(
      (res) => {
        this.unitList = res.items;
      },
      (error) => {},
    );
  }

  //计算总价
  CalculationtotalPrice(data: any, index: number) {
    //1.计算总价格
    data.totalPriceValue = data.quantity * data.unitPriceValue;
  }
  onFBANoChange(value, listOfDataItem) {
    if (this.listOfData?.length === 1) {
      const page = this.pageList.find((o) => o.fbaNo === listOfDataItem.fbaNo);
      if (page) {
        page.fbaNo = value;
      }
    }
    listOfDataItem.fbaNo = value;
    this.GroupingFBA();
  }
  // 表格数据按照FBANO分组
  GroupingFBA() {
    let listOfDataGROUP = groupBy(this.listOfData, 'fbaNo');
    this.listOfDataGROUP = this.objToArray(listOfDataGROUP);
  }
  //对象转化成数据
  objToArray(listOfDataGROUP: any) {
    let array = Array<any>();
    for (var key in listOfDataGROUP) {
      if (this.pageList) {
        if (this.pageList.length > 0) {
          let rule = this.pageList.find((c) => c.fbaNo == key && c.codeRules);
          let pagelist = this.pageList.filter((c) => c.fbaNo == key);
          pagelist.forEach((element: any) => {
            element.dimensionX = element.dimensions.replace(/,/g, 'X');
          });
          array.push({
            sku: listOfDataGROUP[key],
            fbaNo: key,
            startNo: rule == null ? '' : rule.startNo,
            endNo: rule == null ? '' : rule.endNo,
            codeRules: rule == null ? '' : rule.codeRules,
            pageList: pagelist,
            pageNum: this.pageList.map((pack) => {
              return pack.packageNo;
            }),
          });
        } else {
          array.push({
            sku: listOfDataGROUP[key],
            fbaNo: key,
            startNo: ``,
            endNo: ``,
            codeRules: ``,
            pageList: [],
            pageNum: [],
          });
        }
      }
    }
    this.cusClearanceInvoicesGroup.emit(array);
    return array;
  }
  isVisible = false;
  isEditVisible = false;
  skuList: Array<any> = new Array<any>();
  skuObj: any;
  packageNOList: Array<any> = new Array<any>();
  //选择SKU
  selectSku(data: any) {
    data.pageNum = [];
    this.cargo = {};
    this.skuList = data;
    this.skuObj = data;
    //每次重新装箱情况每个箱子已装好的数量
    this.skuObj.sku.forEach((element) => {
      element.quantityEach = null;
      element.remainder = element.quantity;
    });
    if (data.endNo && data.startNo && data.endNo >= data.startNo) {
      this.isVisible = true;
      this.modalQuantityRequiredIndex = -1;
    }
    let pcakNum = data.endNo - data.startNo + 1;
    let fbaNo = data.sku[0].fbaNo;
    for (let index = 1; index <= pcakNum; index++) {
      if (data.codeRules) {
        switch (data.codeRules) {
          case 'U001':
            data.pageNum.push(fbaNo + 'U00' + index);
            break;
          case 'U0001':
            data.pageNum.push(fbaNo + 'U000' + index);
            break;
          case 'U00001':
            data.pageNum.push(fbaNo + 'U0000' + index);
            break;
          default:
            break;
        }
      } else {
        data.pageNum.push(fbaNo + index);
      }
    }
    data.pageNum = data.pageNum;
    this.isSelSku = true;
  }

  isSubmit: boolean = false;
  isSure: boolean = true;
  handleOk(skuList: any, cargo: any): void {
    this.modalQuantityRequiredIndex = -1;
    skuList.sku.every((element, i) => {
      if (!element.quantityEach) {
        this.modalQuantityRequiredIndex = i;
        this.isSure = false;
        return false;
      }
      if (!cargo.netWeight || !cargo.grossWeight || !cargo.long || !cargo.width || !cargo.height) {
        this.isSubmit = true;
        this.isSure = false;
        return;
      } else {
        this.isSure = true;
      }
    });
    if (this.isSure) {
      skuList.pageList = [];
      let fbaNo = skuList.fbaNo;
      let dimensions = cargo.long + ',' + cargo.width + ',' + cargo.height;
      let dimensionsX = cargo.long + 'X' + cargo.width + 'X' + cargo.height;
      skuList.pageNum.forEach((element) => {
        this.pageList = this.pageList.filter((c) => c.fbaNo != fbaNo);
        skuList.pageList.push({
          packageNo: element,
          fbaNo: fbaNo,
          grossWeight: cargo.grossWeight,
          grossWeightUnit: 1,
          grossWeightUnitString: 'kg',
          netWeight: cargo.netWeight,
          netWeightUnit: 1,
          netWeightUnitString: 'kg',
          dimensions: dimensions,
          dimensionX: dimensionsX,
          dimensionsUnit: 5,
          dimensionsUnitString: 'cm',
          codeRules: this.skuObj.codeRules,
          startNo: this.skuObj.startNo,
          endNo: this.skuObj.endNo,
          packingListItems: skuList.sku.map((sku) => {
            return {
              sku: sku.sku,
              commodityChineseDesc: sku.commodityChineseDesc,
              quantities: sku.quantityEach,
              remainder: sku.remainder,
              totalQuantities: sku.quantity,
            };
          }),
        });
      });
      this.isVisible = false;
      this.cusClearanceInvoices.emit(this.listOfData);
      this.pageList = this.pageList.concat(skuList.pageList);
      this.cusClearanceInvoicesGroup.emit(this.listOfDataGROUP);
      this.packingLists.emit(this.pageList);
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  deleteSku(packlist: Array<any>, data: any, item: any, index: number, listIndex: number) {
    if (data.packingListItems.length == 1) {
      item.splice(index, 1);
      packlist.splice(listIndex, 1);
    } else {
      item.splice(index, 1);
    }
    let plist = [];
    this.cusClearanceInvoices.emit(this.listOfData);
    this.cusClearanceInvoicesGroup.emit(this.listOfDataGROUP);
    this.listOfDataGROUP.forEach((c) => {
      plist = plist.concat(c.pageList);
    });
    this.packingLists.emit(plist);
  }

  editpagelist: any;
  editpageItemlist: Array<any> = new Array<any>();
  // editModalpageItemlist: Array<any> = new Array<any>();
  totalList: Array<any> = [];
  editPackInfo: {};
  //编辑sku
  long: number = 0;
  width: number = 0;
  height: number = 0;
  grossWeight: number = 0;
  netWeight: number = 0;
  editSku(_total: any[], i: number) {
    this.isEditVisible = true;
    this.modalQuantityRequiredIndex = -1;
    this.editpageItemlist = [];
    const total = merge([], _total);
    const edititem = _total[i];
    const item = total[i].packingListItems;
    item &&
      item.forEach((o) => {
        o.totalQuantities = o.quantities;
        o.remainder = 0;
      });

    // const item = edititem.packingListItems[skuIndex];
    this.editpageItemlist.push(...item);
    this.editpagelist = edititem;
    this.totalList = total;
    let dimensions = edititem.dimensions.split(',');
    this.long = dimensions[0];
    this.width = dimensions[1];
    this.height = dimensions[2];
    this.grossWeight = edititem.grossWeight;
    this.netWeight = edititem.netWeight;
  }

  //取消编辑sku数量
  editCancel() {
    this.isEditVisible = false;
  }
  //确定编辑sku数量
  editOk() {
    this.modalQuantityRequiredIndex = 1;
    if (this.editpageItemlist[0]) {
      for (let i = 0; i < this.editpageItemlist.length; i++) {
        const editpageItemlistElement = this.editpageItemlist[i];
        if (editpageItemlistElement.quantities <= 0 || editpageItemlistElement.quantities == null) {
          this.modalQuantityRequiredIndex = i;
          return;
        }
      }
    }
    this.editpageItemlist.forEach((val, i) => {
      Object.assign(this.editpagelist.packingListItems[i], val);
    });
    this.editpagelist.grossWeight = this.grossWeight;
    this.editpagelist.netWeight = this.netWeight;
    this.editpagelist.dimensions = this.long + ',' + this.width + ',' + this.height;
    this.editpagelist.dimensionX = this.long + 'X' + this.width + 'X' + this.height;
    this.isEditVisible = false;
  }

  //编辑页面计算
  calculatedQuantityedit(list: Array<any>, data: any) {
    let sum = 0;
    list.forEach((c) => {
      let packingListItems = c.packingListItems.filter((c) => c.sku == data.sku);
      sum = sum + sumBy(packingListItems, 'quantities');
    });
    data.remainder = data.totalQuantities - data.quantities;
    console.log(data.remainder);
    if (data.remainder < 0) {
      data.quantities = null;
      data.remainder = null;
      this.message.error('Quantities of each package must not exceed Remainder');
    }
  }

  //重新计算发票信息
  isNoSku: number = -1;
  isNoQuantity: number = -1;

  refreshisVisible: boolean = false;
  calculatingItem: any;
  packindex: number;
  //重新校验
  calculatinginvoice(item: any, packindex: number) {
    for (let index = 0; index < this.listOfData.length; index++) {
      const element = this.listOfData[index];
      if (element) {
        if (!element.sku) {
          this.isNoSku = index;
          return false;
        } else {
          this.isNoSku = -1;
        }
        if (element.quantity == 0) {
          this.isNoQuantity = index;
          return false;
        } else {
          this.isNoQuantity = -1;
        }
      }
    }
    if (this.isNoSku == -1 && this.isNoQuantity == -1) {
      item.sku.forEach((element) => {
        element.isShow = true;
      });
      this.GroupingFBA();
    } else {
      item.sku.forEach((element) => {
        element.isShow = false;
        this.message.error('sku or quantity is required');
      });
    }
  }

  //校验开始号起始号必是整数
  calculatingNo(item: any): void {
    if (isNaN(item.startNo)) item.startNo = null;
    if (isNaN(item.endNo)) item.endNo = null;
  }

  refreshCancel() {
    this.refreshisVisible = false;
  }
  //校验规则：Quantities of each packageX箱子数量≤Total Quantity/sku  ，超过总数时提示（见红字）
  //输入完实时校验：单项装箱数量不能超过SKU总数量；
  calculatedQuantity(num: number, data: any) {
    data.remainder = data.quantity - data.quantityEach * num;
    if (data.remainder < 0) {
      data.quantityEach = null;
      data.remainder = null;
      this.message.error('Quantities of each package must not exceed Remainder');
    }
  }
  customReq = (item: UploadXHRArgs) => {
    // const formData = new FormData();
    // formData.append('file', item.file as any);
    // formData.append('Url', this.url);
    // formData.append('ApiTypes', '1');
    // this.formData(formData);

    let parame = {
      file: item.file as any,
      url: this.url,
      apiTypes: 1,
      headers: this.initHeader(),
    };
    debugger;

    this.cSPExcelService.analysisExcel(parame).subscribe(
      (res: any) => {
        //导入成功
        let list = JSON.parse(res);
        this.listOfData = (this.listOfData || []).concat(list.cusClearanceInvoices);
        this.pageList = list.packingLists;
        this.GroupingFBA();
        this.cusClearanceInvoices.emit(this.listOfData);
        this.packingLists.emit(this.pageList);
        this.cusClearanceInvoicesGroup.emit(this.listOfDataGROUP);
        this.verificationPassed.emit(true);
      },
      (error) => {
        console.log('excel File Insert DB Error', error);
      },
    );
  };

  //下载excel
  fileName: string = '';
  fileToken: string = '';
  fileType: string = '';

  initHeader() {
    let arr = [];
    arr.push({ propertyName: 'Sku', order: '0' });
    arr.push({ propertyName: 'FbaNo', order: '1' });
    arr.push({ propertyName: 'ReferenceId', order: '2' });
    arr.push({ propertyName: 'CommodityEnglishDesc', order: '3' });
    arr.push({ propertyName: 'CommodityChineseDesc', order: '4' });
    arr.push({ propertyName: 'Brand', order: '5' });
    arr.push({ propertyName: 'Material', order: '6' });
    arr.push({ propertyName: 'Uses', order: '7' });
    arr.push({ propertyName: 'Model', order: '8' });
    arr.push({ propertyName: 'HsCode', order: '9' });
    arr.push({ propertyName: 'Quantity', order: '10' });
    arr.push({ propertyName: 'Unit', order: '11' });
    arr.push({ propertyName: 'UnitPriceValue', order: '12' });
    arr.push({ propertyName: 'TotalPriceValue', order: '13' });
    arr.push({ propertyName: 'ImageId', order: '14' });
    arr.push({ propertyName: 'IsContainsBattery', order: '15' });
    arr.push({ propertyName: 'Asin', order: '16' });
    arr.push({ propertyName: 'Ctns', order: '17' });
    arr.push({ propertyName: 'QuantitiesCarton', order: '18' });
    arr.push({ propertyName: 'Length', order: '19' });
    arr.push({ propertyName: 'Width', order: '20' });
    arr.push({ propertyName: 'Height', order: '21' });
    arr.push({ propertyName: 'Cbm', order: '22' });
    arr.push({ propertyName: 'GrossWeight', order: '23' });
    arr.push({ propertyName: 'NetWeight', order: '24' });
    return arr;
  }

  downExcel() {
    let parame = {
      url: this.downUrl,
      apiTypes: 1,
      sheetName: 'Customs clearance invioce 、 Pac',
      templateName: 'FBA-DownLoad-Template',
      parametersJsonStr: JSON.stringify({ id: this.bookingId }),
      headers: this.initHeader(),
    };

    console.log(parame, 'parame');

    this.cSPExcelService.cusClearanceInvoiceExportExcelAsync(parame).subscribe(
      (res: any) => {
        if (res.isSuccess) {
          this.fileName = res.fileName;
          this.fileToken = res.fileToken;
          this.fileType = res.fileType;
          this.downloadExcel(this.fileName, this.fileToken, this.fileType);
        } else {
          this.message.error('导出失败');
        }
      },
      (error) => {
        console.log('excel File Insert DB Error', error);
      },
    );
  }
  //上传图片
  picList1: Array<any> = new Array<any>();
  imghandleChange({ file, fileList, type }: { [key: string]: any }, data: any) {
    if (type == 'success') {
      //文件上传成功
      console.log(file, 'file');
      data.imageId = file.response.fileId;
      console.log(data.imageId, 'iamgeID');
      this.picList1.push({
        uid: file.id,
        name: file.name,
        status: file.status,
        url: file.response.url,
        thumbUrl: file.thumbUrl,
      });
    }
  }
  downTemplate() {
    let name = 'FBA-UpLoad-Template';
    window.open(environment.SERVER_URL + '/Storage/ExcelTemplate/Get?name=' + name);
  }
  validateSku() {
    for (let i = 0; i < this.listOfData.length; i++) {
      const listOfData = this.listOfData[i];
      for (let j = 0; j < i; j++) {
        const itemBeforeListOfData = this.listOfData[j];
        if (itemBeforeListOfData.fbaNo === listOfData.fbaNo && itemBeforeListOfData.sku === listOfData.sku) {
          return (this.isDuplicateSku = i);
        }
      }
    }
    return (this.isDuplicateSku = -1);
  }
  onTbodyClick = (event) => {
    if (this.pageList?.length) {
      this.modalService.confirm({
        nzTitle: `<i>${'Clear packing list first'}?</i>`,
        nzCancelText: 'Cancel',
        nzIconType: 'info-circle',
        nzOkType: 'primary',
        nzOkText: 'Confirm',
        nzOnCancel: () => {},
        nzOnOk: () => {
          this.pageList = [];
        },
      });
      return event.stopPropagation();
    }
  };
  downloadExcel(FileName: string, FileToken: string, FileType: string) {
    return window.open(
      environment.SERVER_URL + '/Storage/Excel/DownloadExcel?FileName=' + FileName + '&&FileToken=' + FileToken + '&&FileType=' + FileType,
    );
  }
}

export interface cargo {
  grossWeight?: number;
  grossWeightUnitId?: number;
  grossWeightUnitStr?: string;
  netWeight?: number;
  netWeightUnitId?: number;
  netWeightUnitStr?: string;
  dimensions?: string;
  dimensionsUnitId?: number;
  dimensionsUnitStr?: number;
  long?: number;
  width?: number;
  height?: number;
}

export interface packingLists {
  id: number;
  packageNo?: string;
  fbaNo?: string;
  codeRules?: string;
  startNo?: string;
  endNo?: string;
  grossWeight?: number;
  grossWeightUnitId?: number;
  grossWeightUnitString?: string;
  netWeight?: number;
  netWeightUnitId?: number;
  netWeightUnitString?: string;
  dimensions?: string;
  dimensionsUnitId?: number;
  dimensionsUnitString?: string;
  bookingId?: number;
  packingListItems?: Array<packingListItems>;
  NO?: number;
  long?: number;
  width?: number;
  height?: number;
}

export interface packingListItems {
  packingListId?: number;
  sku?: string;
  quantities?: number;
  id?: number;
  commodityChineseDesc?: string;
  remainder?: number;
  totalQuantities: number;
}
