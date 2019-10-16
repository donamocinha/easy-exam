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
    this.configForm = this.formBuilder.group({
      firstName: [this.currentUser.firstName, Validators.required],
      lastName: [this.currentUser.lastName, Validators.required],
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

    this.currentUser.firstName = this.configForm.value.firstName;
    this.currentUser.lastName = this.configForm.value.lastName;
    this.userService.update(this.currentUser)
      .subscribe(
        data => {
          this.alertService.success('Configuration successful', true);
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
