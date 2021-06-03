import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listUsers: Array<User> = [
    {email: 'a.a@a.com',password: 'aaaa', role: 1},
    {email: 'b.b@b.com',password: 'bbbb', role: 2},
    {email: 'c.c@c.com',password: 'cccc'}
  ];

  private role: Array<Role> = [
    {id: 1, label: 'Admin'},
    {id: 2, label: 'Agent'},
    {id: 3, label: 'consumer'}
  ]
  constructor() { }

  getUser = (userP:User): any => {
    const rep = this.listUsers.filter((user)=> user.email === userP.email)
    return rep;
  }

  // a verifier
  getUserInfo = (): Array<User> => {
    return this.listUsers;
  }
   

  checkExist = (userP: User): boolean => {
    const rep = this.listUsers.filter((user)=> user.email === userP.email)
    if (rep.length < 1) {
      console.log("user existe pas");
      return false;
    }else{
      console.log("user existe");
      return true;
    }
  }

  addUser = (userP: User): boolean => {
    if ( !this.checkExist(userP) ) {
      this.listUsers.push(userP);
      console.log('ajour reussi')
      return true;
    }else {
      console.log('rateee')
      return false;
    }
  }
  
}

export interface User {
  email: string,
  password: string,
  role?: number
}
export interface Role {
  id : number,
  label : string
}

