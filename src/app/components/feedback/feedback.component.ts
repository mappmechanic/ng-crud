import { Component, Input, OnInit } from '@angular/core';
import {feedbackInfo} from '../../interfaces/feedback';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  private _data: feedbackInfo;

  ngOnInit() {}

  @Input()
  set info(info: feedbackInfo) {
    let standardInfoObj = { name:'N/A', company: 'N/A', email: 'N/A', mobile: 0, speakerRating: 0, trainingRating:0, feedback: 'N/A', suggestions: 'N/A'};
    this._data = Object.assign(standardInfoObj,info) || standardInfoObj;
  }

}
