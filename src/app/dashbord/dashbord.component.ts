import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {

  aroz:boolean = false;
  cris:boolean = false;
  prt:boolean = false;
  lamp:boolean = false;
  cheminImage:any = "https://media.discordapp.net/attachments/1033044458092118168/1087419548929634408/vvv.png?width=498&height=374";
  imEnsoleillement:any="https://media.discordapp.net/attachments/1033044458092118168/1087422962031923302/nnn.png?width=498&height=374";

  image1Histo:any = "https://cdn.discordapp.com/attachments/1033044458092118168/1087430544268210276/icons8-sun-50.png";
  image2Histo:any = "https://media.discordapp.net/attachments/1033044458092118168/1087430544486322216/humSol.png?width=70&height=70";
  image3Histo:any = "https://media.discordapp.net/attachments/1033044458092118168/1087432077496033320/icons8-temperature-48.png?width=52&height=52";
  image4Histo:any = "https://media.discordapp.net/attachments/1033044458092118168/1087432078024523866/icons8-humidity-64.png?width=70&height=70";
  imtomate:any = "https://media.discordapp.net/attachments/1033044458092118168/1087435055397359656/imTomate.jpg?width=607&height=413";
  lampSerre:any = "https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/spotlight-icon.svg";
  Alarm: any = "https://media.discordapp.net/attachments/1033044458092118168/1088997244960788520/icons8-alarm-64_1.png?width=70&height=70";
  AlarmGif:any="https://media.discordapp.net/attachments/1033044458092118168/1088995735812444250/icons8-alarm.gif?width=55&height=55";
  Arrosoir:any= "https://media.discordapp.net/attachments/1033044458092118168/1088993205518876802/icons8-watering-can-50.png?width=55&height=55";
  ArrosoirGif:any="https://media.discordapp.net/attachments/1033044458092118168/1088991012761915402/icArosage.gif?width=551&height=413";
  portFerm:any="https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/door-close-icon.svg";
  portOuv:any="https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/open-door-icon.svg";
  ToiFerm:any="https://media.discordapp.net/attachments/1049357662065799198/1088258291513180221/motReposRouge.png?width=55&height=55";
  ToiOuv:any="";
  lampSerAlum:any="https://media.discordapp.net/attachments/1049357662065799198/1088488316338450482/nvvvv.png?width=84&height=88";

  ObjetJSON = { 
    "val1":32.3,
    "val2":71,
    "val3":53,
    "val4":124,
  }

  switchLamp(){
    this.lamp? this.lamp= false: this.lamp = true;
  }

  switchPorte(){
    this.prt? this.prt= false: this.prt = true;
  }

  switchArros()
  {
    this.aroz? this.aroz= false: this.aroz = true;
    
  }

}
