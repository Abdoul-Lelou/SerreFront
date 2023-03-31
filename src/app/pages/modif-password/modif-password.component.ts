import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
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

  constructor(private formBuilder:FormBuilder,private authService: UserService, private router: Router, private toastr: ToastrService) {}

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

  const user:User={
    newPassword: this.registerForm.value.password1, 
    password: this.registerForm.value.password
  }
  const id= localStorage.getItem('id')?.replace(/"/g, '')
  console.log(id?.replace(/"/g, ''));
  
    return this.authService.update(id,user).subscribe(
      res=>{
          console.log(res);
          
      },error =>{
        console.log(error);
        
      }
    )

  }


}

