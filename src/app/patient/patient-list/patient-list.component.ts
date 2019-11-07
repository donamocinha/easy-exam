import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  email: string;
  birthday: string;
  weight: number;
  height: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', email: 'exemplo@email.com', birthday: '10/07/1990', weight: 70, height: 1.65 },
  { name: 'Helium', email: 'exemplo@email.com', birthday: '20/07/1990', weight: 70, height: 1.65 },
  { name: 'Lithium', email: 'exemplo@email.com', birthday: '02/07/1990', weight: 70, height: 1.65 },
  { name: 'Beryllium', email: 'exemplo@email.com', birthday: '40/07/1990', weight: 70, height: 1.65 },
  { name: 'Boron', email: 'exemplo@email.com', birthday: '06/07/1990', weight: 70, height: 1.65 },
  { name: 'Carbon', email: 'exemplo@email.com', birthday: '02/07/1990', weight: 70, height: 1.65 },
  { name: 'Nitrogen', email: 'exemplo@email.com', birthday: '10/07/1990', weight: 70, height: 1.65 },
  { name: 'Oxygen', email: 'exemplo@email.com', birthday: '20/07/1990', weight: 70, height: 1.65 },
  { name: 'Fluorine', email: 'exemplo@email.com', birthday: '13/07/1990', weight: 70, height: 1.65 },
  { name: 'Neon', email: 'exemplo@email.com', birthday: '06/07/1990', weight: 70, height: 1.65 },
];

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'birthday', 'weight', 'height'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
