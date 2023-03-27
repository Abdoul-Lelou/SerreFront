import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modif-password',
  templateUrl: './modif-password.component.html',
  styleUrls: ['./modif-password.component.scss']
})
export class ModifPasswordComponent {

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
      password :['', [Validators.required, Validators.minLength(6)]],
      password1:['', [Validators.required, Validators.minLength(6)]],
      password2:['', [Validators.required, Validators.minLength(6)]]
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


}

