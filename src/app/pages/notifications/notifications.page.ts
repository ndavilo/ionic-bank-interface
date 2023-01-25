import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(
    private router:Router,
    private authservice:AuthService
  ) { }

  ngOnInit() {
  }
  userlogout(){
    this.authservice.logout()
    this.router.navigate([''])
  }

}
