import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  today = new Date();
  constructor(
    private auth : AuthService
  ) { }

  ngOnInit() {
  }
logout(){
this.auth.logout();
}
}

