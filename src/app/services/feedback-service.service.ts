import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {feedbackInfo} from '../interfaces/feedback';

@Injectable()
export class FeedbackService {
  private apiUrl = 'http://localhost:3000/feedbacks';  // URL to web API

  constructor (private http: Http) {}

  getFeedbacks () :  Observable<feedbackInfo[]> {
    return this.http.get(this.apiUrl)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  addFeedback (feedback: feedbackInfo): Observable<feedbackInfo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl, feedback, options)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
