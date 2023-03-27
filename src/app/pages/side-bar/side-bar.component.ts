import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{
  
  switchRoof:boolean = false;
  fan:boolean = false;
  showDashboard:boolean = true;
  showInfo:boolean = false;
  currentDate:any;
  imgArros:any="https://media.discordapp.net/attachments/1033044458092118168/1087432078246813706/icons8-water-plants-66.png?width=72&height=72";
  
  ngOnInit(): void {
    this.showTime();
    throw new Error('Method not implemented.');
  }

  switchToit(){
    this.switchRoof? this.switchRoof= false: this.switchRoof = true;
  }

  switchFan(){
    this.fan? this.fan= false: this.fan = true;
  }

  switchInfo () {
    if (this.showDashboard == true){
      this.showInfo = false;
    }else{
      this.showDashboard = false;
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
 

openPopup() {
	
  this.displayStyle = "block";

  
}
closePopup() {
  this.displayStyle = "none";
  
}
}
