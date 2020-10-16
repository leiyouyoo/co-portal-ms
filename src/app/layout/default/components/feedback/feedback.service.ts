import { Injectable } from '@angular/core';
import { PlatformFeedbackService } from '@co/cds';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {

  constructor(public feedbackService: PlatformFeedbackService) {
  }

  getFeedTypeList() {
    return this.feedbackService.getFeedTypeList({});
  }

  createOrUpdate(data) {
    return this.feedbackService.createOrUpdate(data);
  }

}
