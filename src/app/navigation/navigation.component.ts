import {Component, Input, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {User} from "../model/user";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input('currentUser')
  currentUser: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authenticationService: AuthenticationService,
              private router: Router) {
  }


  home() {
    this.router.navigate(['/']);
  }
  config() {
    this.router.navigate(['/config']);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
