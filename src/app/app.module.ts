import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    FeedbackListComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
