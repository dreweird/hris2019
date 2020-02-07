import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

class Question {
  q1: string;
  q1_yes: string;
  q2: string;
  q2_yes: string;
  q3: string;
  q3_yes: string;
  q4: string;
  q4_yes: string;
  q5: string;
  q5_yes: string;
  q6: string;
  q6_yes: string;
  q7: string;
  q7_yes: string;
  q8: string;
  q8_yes: string;
  q9: string;
  q9_yes: string;
  q10: string;
  q10_yes: string;
}

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  newQuestion: Question;

  firstFormGroup: FormGroup;

  @Output() onSaveQuestion = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder) {
    this.newQuestion = new Question();
   }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      q1: [this.newQuestion.q1, Validators.required],
      q1_yes: [this.newQuestion.q1_yes, ''],
      q2: [this.newQuestion.q2, Validators.required],
      q2_yes: [this.newQuestion.q2_yes, ''],
      q3: [this.newQuestion.q3, Validators.required],
      q3_yes: [this.newQuestion.q3_yes, ''],
      q4: [this.newQuestion.q4, Validators.required],
      q4_yes: [this.newQuestion.q4_yes, ''],
      q5: [this.newQuestion.q5, Validators.required],
      q5_yes: [this.newQuestion.q5_yes, ''],
      q6: [this.newQuestion.q6, Validators.required],
      q6_yes: [this.newQuestion.q6_yes, ''],
      q7: [this.newQuestion.q7, Validators.required],
      q7_yes: [this.newQuestion.q7_yes, ''],
      q8: [this.newQuestion.q8, Validators.required],
      q8_yes: [this.newQuestion.q8_yes, ''],
      q9: [this.newQuestion.q9, Validators.required],
      q9_yes: [this.newQuestion.q9_yes, ''],
      q10: [this.newQuestion.q10, Validators.required],
      q10_yes: [this.newQuestion.q10_yes, ''],
     
    });
  }

  savePage4(){
    this.onSaveQuestion.emit(this.firstFormGroup);
  }

}
