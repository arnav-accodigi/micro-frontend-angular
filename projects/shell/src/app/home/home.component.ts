import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) {}
  user$ = this.auth.user$;

  login(): void {
    this.auth.loginWithRedirect();
  }

  ngOnInit() {
  }

}
