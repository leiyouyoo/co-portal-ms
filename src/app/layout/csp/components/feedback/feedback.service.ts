import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoConfigManager } from '@co/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {

  constructor(public http: HttpClient) {
  }

  getFeedTypeList(): Observable<any> {
    return this.http.get(CoConfigManager.getValue('serverUrl') + '/Platform/Feedback/GetFeedTypeList');
  }

  createOrUpdate(data): Observable<any> {
    return this.http.post(CoConfigManager.getValue('serverUrl') + '/Platform/Feedback/CreateOrUpdate', data);
  }

}
