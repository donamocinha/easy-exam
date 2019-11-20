import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {Subscription} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";
import {UserService} from "../services/user.service";
import {first} from "rxjs/operators";

export interface HomeFeed {
  activity: string;
  info: string;
  updated_by: string;
  doctorType: string;
  updated_at: string;

}

const ELEMENT_DATA: HomeFeed[] = [
  { activity: 'Novo paciente cadastrado', info: 'A paciente Alice foi cadastrada', updated_by: 'Rubi', doctorType: 'Médico', updated_at: '15/11/2019' },
  { activity: 'Novo paciente cadastrado', info: 'A paciente Sophia foi cadastrada', updated_by: 'Julio', doctorType: 'Médico e Pesquisador', updated_at: '13/11/2019' },
  { activity: 'Novo paciente cadastrado', info: 'O paciente Miguel foi cadastrado', updated_by: 'Daniela', doctorType: 'Médico', updated_at: '12/11/2019' },
  { activity: 'Novo paciente cadastrado', info: 'O paciente Arthur foi cadastrado', updated_by: 'Leonardo', doctorType: 'Médico', updated_at: '12/11/2019' },
  { activity: 'Novo paciente cadastrado', info: 'A paciente Helena foi cadastrada', updated_by: 'Julio', doctorType: 'Médico e Pesquisador', updated_at: '11/11/2019' },
  { activity: 'Novo paciente cadastrado', info: 'A paciente Beatriz foi cadastrada', updated_by: 'Guttenberg', doctorType: 'Médico e Pesquisador', updated_at: '10/11/2019' },
  { activity: 'Novo paciente cadastrado', info: 'A paciente Valentina foi cadastrada', updated_by: 'Samiry', doctorType: 'Médico e Pesquisadora', updated_at: '09/11/2019' },
  { activity: 'Novo paciente cadastrado', info: 'O paciente Heitor foi cadastrado', updated_by: 'Guttenberg', doctorType: 'Médico e Pesquisador', updated_at: '08/11/2019' },
  { activity: 'Novo paciente cadastrado', info: 'O paciente João foi cadastrado', updated_by: 'Irene', doctorType: 'Médico e Pesquisadora', updated_at: '02/11/2019' },
  { activity: 'Novo paciente cadastrado', info: 'A paciente Maria foi cadastrada', updated_by: 'Rebeca', doctorType: 'Médico', updated_at: '01/11/2019' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  displayedColumns: string[] = ['activity', 'info', 'updated_by', 'doctorType', 'updated_at'];
  dataSource = ELEMENT_DATA;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
