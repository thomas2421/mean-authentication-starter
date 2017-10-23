import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;

  constructor(
    private router: Router) {
    this.username = JSON.parse(localStorage.getItem('user')).username.toUpperCase();
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);
  }
  
}
