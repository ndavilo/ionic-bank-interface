import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  constructor(
    private router:Router,
    private authservice:AuthService,
  ) { }

  ngOnInit() {
  }
  userlogout(){
    this.authservice.logout()
    this.router.navigate([''])
  }

}
