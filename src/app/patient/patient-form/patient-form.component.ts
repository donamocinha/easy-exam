import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';


export interface Patient  {
  id?: string; 
  birthday: string;
  cpf: string;
  email: string;
  height: number;
  name: string;
  sex: string;
  weight: number;
 }

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  newPatientForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: PatientService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.newPatientForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      cpf: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      sex: ['', Validators.required],
    });
  }

  savePatient() {
    console.log(this.newPatientForm.value);

    this.service.postPatient(this.newPatientForm.value).subscribe(
      data => {
        this.router.navigate(['/patient']);
     },
      error => console.log("error on savePatient", error)
    );
    
    
  }

}
