import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class MessagesPage implements OnInit {
  displayUserData: any;
  customers: any = [];
  token: string = '';

  constructor(
    private router:Router,
    private authservice:AuthService,
  ) { }

  ngOnInit() {
    this.authservice.userData$.subscribe((res: any) => {
      this.displayUserData = res;
      this.token = this.displayUserData.token
      if (this.token !== undefined) {
        this.customers = this.displayUserData.customer
      }

    })

  }
  userlogout(){
    this.authservice.logout()
    this.router.navigate([''])
  }

}
