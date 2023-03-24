import { Component, OnInit } from '@angular/core';

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
  
  ngOnInit(): void {
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
}
