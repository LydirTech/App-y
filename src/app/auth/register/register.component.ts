import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutService } from 'src/app/_services/aut.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  listRole = [
    {id: 1, label: 'Admin'},
    {id: 2, label: 'Agent'},
    {id: 3, label: 'consumer'}
  ]

  formRegister = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    role: new FormControl(3,Validators.required)
  })

  constructor( private auth: AutService) { }


  ngOnInit(): void {
  }

  ngSubmit(): void {
    console.log(this.formRegister.value);
    this.auth.register(this.formRegister.value);
  }

}
