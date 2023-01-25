import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-verifyapp',
  templateUrl: './verifyapp.page.html',
  styleUrls: ['./verifyapp.page.scss'],
})
export class VerifyappPage implements OnInit {

  public postData = {
    account: 0,
    token: 0,
  };

  constructor(
    private router: Router,
    private authservice: AuthService,
    private toastservice: ToastService,
  ) { }

  ngOnInit() {
  }
  navigateToSignUp(){
    this.router.navigate(['signup'])
  }
  validateInputs() {
    let account = this.postData.account;

    return (
      this.postData.account &&
      this.postData.token &&
      account > 20000000000 &&
      account < 30000000000
    )
  }
  verifyAction(){
    if (this.validateInputs()){
      this.toastservice.presentToast('correct info');
      this.authservice.authUser(this.postData).subscribe((res:any)=>{
        this.toastservice.presentToast(res)
        console.log(res)
        console.log(res.status)
        this.router.navigate(['login'])
      },
      (error: any) => {
        console.log(error.error)
        this.toastservice.presentToast(error.error.account)
      }
      )
    }else{
      this.toastservice.presentToast('please check input account');
    }
  }

}
