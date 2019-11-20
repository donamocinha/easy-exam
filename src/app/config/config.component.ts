import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertService} from "../services/alert.service";
import {first} from "rxjs/operators";
import {User} from "../model/user";
import {getFirstNode} from "@ngtools/webpack/src/transformers";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  configForm: FormGroup;
  loading = false;
  submitted = false;
  currentUser: User;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }


  ngOnInit() {
    console.log(this.currentUser);
    this.configForm = this.formBuilder.group({
      name: [this.currentUser.name, Validators.required],
      password: [this.currentUser.password, [Validators.required, Validators.minLength(6)]],
      username: [this.currentUser.username],
      crm: [this.currentUser.crm, [Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern('[0-9]+$')]],
      doctorType: [this.currentUser.doctorType, [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.configForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.configForm.invalid) {
      return;
    }

    this.currentUser.name = this.configForm.value.name;
    this.currentUser.doctorType = this.configForm.value.doctorType;
    this.currentUser.password = this.configForm.value.password;
    this.currentUser.crm = this.configForm.value.crm;
    this.userService.update(this.currentUser)
      .subscribe(
        data => {
          this.alertService.success('Sucesso!', true);
          this.router.navigate(['/']);
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          console.log(this.currentUser);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
