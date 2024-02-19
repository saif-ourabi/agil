import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  state=false
  constructor(private l:LoginService){}


  ngOnInit(): void {
    this.l.authStatus$.subscribe((isLoggedIn: boolean) => {
      this.state = isLoggedIn;

    });
  }

  logout(): void {
    this.l.logout();
  }



}
