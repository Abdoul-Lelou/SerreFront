import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{
  
  switchRoof:boolean = false;
  fan:boolean = false;
  showHome:boolean = false
  showDashboard:boolean = true;
  showInfo:boolean = false;
  infoArrosage: boolean = true;
  titleArrosage: boolean = true;
  currentDate:any;
  imgArros:any="https://media.discordapp.net/attachments/1033044458092118168/1087432078246813706/icons8-water-plants-66.png?width=72&height=72";
  
  registerForm!:FormGroup;

  submitted = false;
  spin= false;
  errorSms:any;
  img: boolean = false;
  
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.showTime();
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

  switchToit(){
    this.switchRoof? this.switchRoof= false: this.switchRoof = true;
  }

  switchFan(){
    this.fan? this.fan= false: this.fan = true;
  }

  switchInfo () {
    if (this.showDashboard == true){
      this.showDashboard = false;
      this.showInfo = true;
    }else{
      this.showDashboard = true;
      this.showInfo = false;
    }
  }

  switchArrosage () {
   
    if (this.infoArrosage == true){
      this.infoArrosage = false;
       this.titleArrosage = false;
    }else{
      this.infoArrosage = true;
      this.titleArrosage = true;
    }
  }

  showTime(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.currentDate= mm + '/' + dd + '/' + yyyy;
  }


  displayStyle = "none";
  displaySerre = "none";
 

openPopup() {
  this.displayStyle = "block";
}

closePopup() {
  this.displayStyle = "none";
  
}

openSerre() {
  this.displaySerre = "block";
}

closeSerre() {
  this.displaySerre = "none"; 
}

reloadHome = () =>window.location.pathname ='home';

logout = () =>{
  localStorage.removeItem('currentUser')
  window.location.pathname ='login' 
};


}
