import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseInfoService {

  public headChangeSubject = new Subject<any>();

  constructor() { }

  getChangeSubject(){
    return this.headChangeSubject;
  }

  senChangeSubject(){
    this.headChangeSubject.next();
  }

}
