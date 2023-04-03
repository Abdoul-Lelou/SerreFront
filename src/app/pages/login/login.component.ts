import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
// import * as io from 'socket.io-client';
import io from 'socket.io-client';



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
  socket: any;
  message: string = '';
  constructor(private formBuilder:FormBuilder, private authService: UserService, private router: Router, private toastr: ToastrService) {


  

    // Create a socket connection to the server
//     this.socket = io('http://localhost:3000');

//     const socket = io("http://127.0.0.1", {
//     withCredentials: true,
//     extraHeaders: {
//       "my-custom-header": "abcd"
//     }
// });
//     // Listen for the 'message' event from the server
//     this.socket.on('message', (data: string) => {
//       console.log('Received message from server:', data);
//       this.message = data;
//     });

  }

  // message: any;
  // private socket: SocketIOClient.Socket;


  ngOnInit(){

      //validaions

    this.registerForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password :['', [Validators.required, Validators.minLength(6)]]
    })

  //    const ws = new WebSocket('ws://localhost:8080');

  //     ws.onopen = function() {
  //       console.log('WebSocket connected');
  //     };

  //     ws.onmessage = function(event) {
  //       console.log('Received message from server:', event.data);
  //     };

  //     const socket = io('https://localhost:3000');

  //     // Listen for the 'message' event from the server
  //     socket.on('message', (data) => {
  //       console.log('Received message:', data);
  //     });

  //     // Send a message to the server
  //     socket.emit('message', 'Hello from client!');

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
            // setTimeout(()=> this.router.navigateByUrl('home'), 1000);
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
