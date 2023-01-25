import { ToastService } from './../../services/toast.service';
import { AuthConstants } from './../../config/auth-constants';
import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public postData = {
    account:0,
    password:'',
  };
  constructor(
    private router: Router,
    private authservice:AuthService,
    private storageservice: StorageService,
    private toastservice: ToastService
    ) { }

  ngOnInit() {
  }

  navigateToSignUp(){
    this.router.navigate(['signup'])
  }
  validateInputs(){
    let account = this.postData.account;
    let password = this.postData.password.trim();

    return (
      this.postData.account &&
      this.postData.password &&
      account > 20000000000 &&
      account < 30000000000 &&
      password.length > 3
      )
  }
  loginAction(){
    if (this.validateInputs()){
      this.authservice.login(this.postData).subscribe((res:any)=>{

        if(res.token){
          this.storageservice.store(AuthConstants.AUTH, res);
          this.router.navigate(['home/feeds']);
          this.toastservice.presentToast(`Welcome `+res.account)
        }
      },
      (error: any) => {
        this.toastservice.presentToast(error.error.detail)
      }
      )
    }else{
      this.toastservice.presentToast('please check input info');
    }
  }

}
