import {Component, Input, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input('currentUserName')
  currentUserName: string = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authenticationService: AuthenticationService,
            private userService: UserService,  private router: Router) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']).then((b) => {
      window.location.reload();
    });
  }

    update() {
      this.authenticationService.currentUser.toPromise().then((_user) => {
        this.userService.update(_user).toPromise().then((obj) => {
          this.router.navigate(['/']).then((b) => {
            window.location.reload();
          });
        })
      })
    
    }

}
