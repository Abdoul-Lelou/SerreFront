import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent  implements OnInit{
  registerForm!:FormGroup;
  title = 'login';
  submitted = false;
  spin= false;
  errorSms:any;
  img: boolean = false;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(){

      //validaions

    this.registerForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
  })
  }

  onSubmit(){
    this.submitted = true
    this.spin = true

     if(this.registerForm.invalid){
      this.spin = false
      return ;
    }
  }

  affich(){
    this.img = true;
  }

  cach(){
    this.img = false;
  }
}
