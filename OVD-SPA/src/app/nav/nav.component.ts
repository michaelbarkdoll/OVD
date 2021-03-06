import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // Grab input
  model: any = {};

  // Load in the auth service for logging in and router for redirects
  constructor(public authService: AuthService, private router: Router) { }

  // Nothing to do on init
  ngOnInit() {}

  // Pass the credentials to the api to attempt a login
  // The redirects if successful
  login() {
    /*
    this.authService.login(this.model).subscribe(next => { // What to do when successful

    }, error => { // What to do on error

    }, () => { // What to do after success
      // Admins go to dashboard, users to user page
      if (this.isAdmin()) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['']);
      }
    });
*/
    // Clear login form
    this.model.username = '';
    this.model.password = '';
  }

  // Check the api to see if the user is logged in
  loggedIn() {
    return this.authService.loggedIn();
  }

  // Check the api to see if the user is a valid admin
  isAdmin() {
    return this.authService.isAdmin();
  }

  // Deletes user's token and redirects to home page
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
