import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms-test',
  templateUrl: './reactive-forms-test.component.html',
  styleUrls: ['./reactive-forms-test.component.css']
})
export class ReactiveFormsTestComponent implements OnInit {
  form: FormGroup;
  model: any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm();
    this.setFormValue();
  }

  save(){
    this.getFormValue();
    console.log(this.form);
  }

  private creatForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      body: ['', Validators.maxLength(10)],
    })
  }
  getFormValue() {
    this.model = {
      name: this.form.controls.name.value,
      body: this.form.controls.body.value,
    }
  }
  setFormValue(){
   /* this.form.setValue({
      name: 'gggg',
      body: 'hhhh',
    })*/
    this.form.patchValue({
      name: 'gggg',
    })
    // this.form.controls.name.setValue('ddddddddd')

    console.log(this.model)
  }
}
