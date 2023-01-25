import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {
  displayUserData: any;
  customers: any = [];
  token: string = '';

  constructor(
    private router: Router,
    private authservice: AuthService,
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

  userlogout() {
    this.authservice.logout()
  }
}
