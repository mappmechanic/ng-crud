import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  @Output() onFeedbackAdd = new EventEmitter();

  public feedbackForm = this.fb.group({
     name: ["", Validators.required],
     company: ["", Validators.required],
     email: ["", Validators.required],
     mobile: [0, isIndianMobile],
     speakerRating: [0, Validators.required],
     trainingRating: [0, Validators.required],
     feedback: ["", Validators.required],
     suggestions: ["", Validators.required],
   });

  constructor(public fb: FormBuilder) { }
  saveFeedback(event) {
    if(this.feedbackForm.valid){
      console.log(this.feedbackForm.value);
      this.onFeedbackAdd.emit(this.feedbackForm.value);
    }else{
      alert('Not Valid Form');
    }
  }
  ngOnInit() {
  }

}

function isIndianMobile(c: FormControl) {
  if(c.value && c.value.toString().length !== 10) {
    //console.log('not valid')
    return {
      isIndianMobile: false
    }
  }

  // Null means valid, believe it or not
  //console.log('valid')
  return null
}
