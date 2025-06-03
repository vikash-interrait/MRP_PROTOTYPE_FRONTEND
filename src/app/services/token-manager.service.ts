import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {


    currentUser = { name : "ram", email : "ram@mail.com", role : "user" }
  

    isLoggedIn(){
        return this.currentUser ? true : false;
    }
    

    getAccesToken(){
      return "token access"
    }

}
