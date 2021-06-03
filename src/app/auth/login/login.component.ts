import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutService } from 'src/app/_services/aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ])
  })
  constructor(private auth: AutService) { }

  ngOnInit(): void {
  }

  ngSubmit(): void {
    console.log(this.formLogin.value)
    const r = this.auth.login(this.formLogin.value);
    console.log(r)
  }

}
