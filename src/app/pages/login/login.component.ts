import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';

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
  errorSms= false;
  img: boolean = false;

  constructor(private formBuilder:FormBuilder, private authService: UserService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(){

      //validaions

    this.registerForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password :['', [Validators.required, Validators.minLength(6)]]
  })
  }

  showSuccess() {
    this.toastr.error('Erreur', 'Email ou mot de passe incorrect!');
  }
  
  onSubmit(){
    this.submitted = true
    this.spin = true

     if(this.registerForm.invalid){
      this.spin = false
      return ;
    }

    const user:User ={
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    // console.log(user);
    
    return this.authService.getConnexion(user).subscribe(
      res=>{
          console.log(res);
          let infoConnexion = res;
          if(infoConnexion.data){
            this.router.navigateByUrl('home');
          }
      },
      error =>{
      
        setTimeout(()=> {this.spin = false; this.errorSms = false;},2000)
        if(error == 'Not Found') return this.toastr.error('Erreur', 'Email introuvable!'); 
        else return this.toastr.error('Erreur', 'Email ou mot de passe incorrect!'); 
        // this.errorSms = true;
        // this.showSuccess();
        
        
      }
    )
    
    
  }

  affich(){
    this.img = true;
  }

  cach(){
    this.img = false;
  }
}
