import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [PatientListComponent, PatientFormComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class PatientModule { }
