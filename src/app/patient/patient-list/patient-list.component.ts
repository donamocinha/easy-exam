import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

export interface TablePatients {
  name: string;
  email: string;
  birthday: string;
  weight: number;
  height: number;

}

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  dados;
  displayedColumns: string[] = ['name', 'email', 'birthday', 'weight', 'height'];
  dataSource;
  constructor(private service: PatientService) { }

  ngOnInit() {
    this.loadPatients();
    
  }

  loadPatients(){
    return this.service.getPatients().subscribe(
      data => { this.dados = data;  this.dataSource = this.dados.pacients; console.log(data) },
      err => console.log('error on loadPatients', err)
    )
  }

}
