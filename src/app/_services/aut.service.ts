import { Injectable } from '@angular/core';
import { User, UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AutService {

  constructor( private userS: UserService ) { }
  
  login = (user: User): boolean => {
    const rep = this.userS.getUser(user);
    if( rep.length < 1 ){
      return false;
    }else{
      if(rep[0].password != user.password) {
        return false;
      }else{
        localStorage.setItem('user',JSON.stringify([rep[0].email, rep[0].role]));
        return true;
      }
    }
  }

  register = (user: User): boolean => {
    if( this.userS.addUser(user) ) {
      return true;
    }else{
      return false
    }
  }
}
