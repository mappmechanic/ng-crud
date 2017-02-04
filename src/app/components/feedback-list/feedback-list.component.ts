import { Component, OnInit, Input } from '@angular/core';
import {feedbackInfo} from '../../interfaces/feedback';
import {FeedbackService} from '../../services/feedback-service.service';

@Component({
  selector: 'feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css'],
  providers: [FeedbackService]
})
export class FeedbackListComponent implements OnInit {
  shownRowIndex: number = -1;
  addFormShown: boolean = false;
  errorMessage: string;
  list: feedbackInfo[];

  constructor(private feedbackService: FeedbackService) {
    //console.log(this.list); //ERROR
  }

  ngOnInit() {
    this.feedbackService.getFeedbacks()
      .subscribe(feedbacks => this.list = feedbacks);
  }

  onShowBtnClick(rowIndex: number){
    this.shownRowIndex = rowIndex;
  }

  onFeedbackAdd(newFeedback: feedbackInfo){
    this.feedbackService.addFeedback(newFeedback).subscribe(
      feedback  => this.list.push(feedback),
      error =>  this.errorMessage = <any>error);
    if(!this.errorMessage){
      this.addFormShown = false;
    }
  }

}
