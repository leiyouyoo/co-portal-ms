import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { ContainerDto,ContainerGroupDto,ContainerCheckInputDto,ChangeContainerStateInput,GetAllContainerForUiPickerInput,ContainerUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Container')
@Injectable({ providedIn: 'root' })
export class ContainerService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Container/GetAll
     * 获取分页箱型列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {isValid?:boolean,code?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<ContainerDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Container/GetAllGroup
     * 获取箱型分组列表（根据数字前缀分组）
     */

    @GET('getAllGroup')
    getAllGroup(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<ContainerGroupDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Container/Get
     * 获取箱型详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<ContainerDto> {
        return null as any
    }


    /**
     * @param url /PUB/Container/Check
     * 箱型重复校验
     */

    @POST('check')
    check(
        @Payload
        _req:ContainerCheckInputDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Container/Create
     * 创建箱型
     */

    @POST('create')
    create(
        @Payload
        _req:ContainerDto

    ): Observable<ContainerDto> {
        return null as any
    }


    /**
     * @param url /PUB/Container/Update
     * 编辑箱型
     */

    @PUT('update')
    update(
        @Payload
        _req:ContainerDto

    ): Observable<ContainerDto> {
        return null as any
    }


    /**
     * @param url /PUB/Container/Delete
     * 删除箱型
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Container/ChangeContainerState
     * 修改费用代码状态
     */

    @POST('changeContainerState')
    changeContainerState(
        @Payload
        _req:ChangeContainerStateInput

    ): Observable<ContainerDto> {
        return null as any
    }


    /**
     * @param url /PUB/Container/CreateOrUpdate
     * 创建或更新箱型
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:ContainerDto

    ): Observable<ContainerDto> {
        return null as any
    }


    /**
     * @param url /PUB/Container/GetAllForUiPicker
     * 提供给UI箱型选择器服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:GetAllContainerForUiPickerInput

    ): Observable<PagedResultDto<ContainerUiPickerDto>> {
        return null as any
    }



  }
