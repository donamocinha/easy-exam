import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [PatientListComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MatTableModule,
  ]
})
export class PatientModule { }
