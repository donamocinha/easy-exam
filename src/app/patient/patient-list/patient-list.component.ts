import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  email: string;
  birthday: string;
  weight: number;
  height: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Alice', email: 'alice@email.com', birthday: '10/07/1990', weight: 60, height: 1.75 },
  { name: 'Sophia', email: 'sophia@email.com', birthday: '20/07/1990', weight: 80, height: 1.65 },
  { name: 'Miguel', email: 'miguel@email.com', birthday: '02/07/1990', weight: 50, height: 1.60 },
  { name: 'Arthur', email: 'arthur@email.com', birthday: '40/07/1990', weight: 70, height: 1.85 },
  { name: 'Helena', email: 'helena@email.com', birthday: '06/07/1990', weight: 90, height: 1.95 },
  { name: 'Beatriz', email: 'beatriz@email.com', birthday: '02/07/1990', weight: 100, height: 1.75 },
  { name: 'Valentina', email: 'valentina@email.com', birthday: '10/07/1990', weight: 65, height: 1.50 },
  { name: 'Heitor', email: 'heitor@email.com', birthday: '20/07/1990', weight: 76, height: 1.67 },
  { name: 'João', email: 'joao@email.com', birthday: '13/07/1990', weight: 73, height: 1.68 },
  { name: 'Maria', email: 'maria@email.com', birthday: '06/07/1990', weight: 64, height: 1.95 },
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
