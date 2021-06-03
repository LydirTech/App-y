import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private userS: UserService ) { console.log(this.users) }

  users = this.userS.getUserInfo();
  
  ngOnInit(): void {
  }


}
