import { Component, OnInit } from '@angular/core';
import { Routes as routerSections } from '../../routes';
import { AuthService }  from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes = routerSections;
  isLogged: boolean = false;
  username: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
   this.authService.isLogged().subscribe(b => this.isLogged = b);
   this.authService.getUsername().subscribe(u => this.username = u)
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home'])
  }
}
