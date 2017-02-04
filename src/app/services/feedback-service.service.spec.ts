/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeedbackServiceService } from './feedback-service.service';

describe('FeedbackServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbackServiceService]
    });
  });

  it('should ...', inject([FeedbackServiceService], (service: FeedbackServiceService) => {
    expect(service).toBeTruthy();
  }));
});
