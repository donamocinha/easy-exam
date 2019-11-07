import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Patient  {
  id?: string; 
  birthday: string;
  email: string;
  height: string;
  name: string;
  sex: string;
  weight: string;
 }

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  form: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      sex: ['', Validators.required],
    });
  }

  save() {
    console.log(this.form)
  }

}
