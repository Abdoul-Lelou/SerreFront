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
}
