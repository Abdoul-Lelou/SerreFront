import { Component } from '@angular/core';
import tableauSol from '../histo2.json';
 import tableau from '../histo.json'; 
 import { Router } from '@angular/router';
export interface DONNE {
  tempearture: string;
  humidite: string;
date:string;
}

export interface ensol{
 ensol: string;
  humiditeSol: string;
date:string;
}

@Component({
  selector: 'app-tableauhisto',
  templateUrl: './tableauhisto.component.html',
  styleUrls: ['./tableauhisto.component.scss']
})
export class TableauhistoComponent {
   
   histoSol: any[] = tableauSol;
   histo: any[] = tableau ;
showFormPass =false;
  router: any;

  constructor() {}
  onclick(){
   this.showFormPass= true; 
  }
  on(){
    this.showFormPass= false; 
   }
}
