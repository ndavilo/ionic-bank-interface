import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class UserDataResolver {

    constructor(
      private authservice: AuthService,
      ){}

    resolve(){
      console.log('calls at home route')
      return this.authservice.getUserData();
    }

}
