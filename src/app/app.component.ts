import { Component } from '@angular/core';
import { feedbackInfo } from './interfaces/feedback';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  sessionInfo: session;
  feedbackListData: feedbackInfo[];

  constructor(){
    this.title = 'Session Feedback Manager';
    this.sessionInfo = {
      topic: 'Angular2 Migration Guide',
      speaker: 'Rahat Khanna',
      durationInMins: 90
    }
  }
}

interface session{
  topic: string;
  speaker: string;
  durationInMins: number;
}
