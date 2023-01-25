import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public postData = {
    account: 0,
    password: '',
    confirm_password: '',
  };

  constructor(
    private router: Router,
    private authservice: AuthService,
    private toastservice: ToastService,
  ) { }

  ngOnInit() {
  }
  navigateToSignIn() {
    this.router.navigate(['login'])
  }
  validateInputs() {
    let account = this.postData.account;
    let password = this.postData.password.trim();
    let confirm_password = this.postData.confirm_password.trim();
    if(confirm_password !== password){
      this.toastservice.presentToast('Passwords does not match');
    }
    if(password.length !== 4){
      this.toastservice.presentToast('Password should be 4 characters');
    }

    return (
      this.postData.account &&
      this.postData.password &&
      account > 20000000000 &&
      account < 30000000000 &&
      password.length === 4 &&
      confirm_password === password
    )
  }
  signUpAction(){
    if (this.validateInputs()){
      this.toastservice.presentToast('correct info');
      this.authservice.signup(this.postData).subscribe((res:any)=>{
        this.toastservice.presentToast(res)
        console.log(res)
        this.router.navigate(['verifyapp'])
      },
      (error: any) => {
        console.log(error.error.account)
        this.toastservice.presentToast(error.error.account)
      }
      )
    }else{
      this.toastservice.presentToast('please check input info');
    }
  }

}
