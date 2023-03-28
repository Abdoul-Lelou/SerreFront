import { Component, OnInit } from '@angular/core';
import tableauSol from '../../histo2.json';
 import tableau from '../../histo.json'; 


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
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  histoSol: any[] = tableauSol;
  histo: any[] = tableau ;
showFormPass =false;
searchText!: string;
itemsperpage: number=4;
p: number=1;


 constructor() {}
 onclick(){
  this.showFormPass= true; 
 }
 on(){
   this.showFormPass= false; 
  }
  ngOnInit() {
   this.histo=tableau;
   console.log(this.histo)
  }

  search(e:any) {
   console.log(e.target.value)
   this.histo=this.histo.filter((el:any)=>{
     return el.date.toLowerCase().includes(e.target.value.toLowerCase())

   })
    
 }
}
