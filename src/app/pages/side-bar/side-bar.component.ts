import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { io } from 'socket.io-client';
import { SocketioService } from 'src/app/services/socketio.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  imgArros: any = "https://media.discordapp.net/attachments/1033044458092118168/1087432078246813706/icons8-water-plants-66.png?width=72&height=72";
  
  switchRoof: boolean = false; fan: boolean = true; showHome: boolean = false; showDashboard: boolean = true;
  showInfo: boolean = false; infoArrosage: boolean = true; titleArrosage: boolean = true; currentDate: any;
  registerForm!: FormGroup; arrosageForm!: FormGroup; submitted = false; spin = false; errorSms: any; 
  img: boolean = false; notChoise = false; socket: any; tabArrosage: any; matin: any; soir: any;
  dureMatin: any; dureSoir: any;

  constructor(private formBuilder: FormBuilder, private socketService: SocketioService, private serviceArroge: UserService, private toastr: ToastrService) {
    this.socket = io(`${environment.apiUrl}`);
  }


  ngOnInit(): void {
    this.showTime();
    this.switchToit();
    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.arrosageForm = this.formBuilder.group({
      heure1: [''],
      heure2: [''],
      dure1: [''],
      dure2: ['']
    })

    this.getArroge()

  }


  onArroge() {

    let arrose = {
      matin: this.arrosageForm.value.heure1,
      soir: this.arrosageForm.value.heure2,
      dureSoir: this.arrosageForm.value.dure1,
      dureMatin: this.arrosageForm.value.dure2
    }

    let id = localStorage.getItem("idArrosage")

    // console.log("voilà: ", id == "643048ae7ae5b15ead0f684a");
    // console.log(!arrose.dureMatin);

    if (!arrose.matin || !arrose.soir || !arrose.dureMatin || !arrose.dureSoir) {
      this.notChoise = true;
      setTimeout(() => {
        this.notChoise = false;
      }, 2000);
      return
    }

    this.serviceArroge.updateArrosage(id, arrose).subscribe(
      data => {
        console.log(data);
        if (data.message == "Modifier avec succès") {
          this.toastr.success("Modifier avec succès")
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
      }
    )
  }

  getArroge() {
    this.serviceArroge.getArrosage().subscribe(
      data => {
        console.log("donnee", data)
        this.tabArrosage = data

        localStorage.setItem("idArrosage", this.tabArrosage[0]._id)

        this.matin = this.tabArrosage[0].matin;
        this.soir = this.tabArrosage[0].soir;
        this.dureMatin = this.tabArrosage[0].dureMatin;
        this.dureSoir = this.tabArrosage[0].dureSoir
      }
    )
  }

  switchToit() {
    // this.switchRoof? this.switchRoof= false: this.switchRoof = true;
    this.socket.on('toit', (msg: any) => {
      this.switchRoof = msg;
    })
  }

  switchFan() {
    if (this.fan == true) {
      this.fan = false
      this.socket.emit("noFan", 0);
    } else {
      this.fan = true
      this.socket.emit("isFan", 1);
    }
  }

  switchInfo() {
    if (this.showDashboard == true) {
      this.showDashboard = false;
      this.showInfo = true;
    } else {
      this.showDashboard = true;
      this.showInfo = false;
    }
  }

  switchArrosage() {

    if (this.infoArrosage == true) {
      this.infoArrosage = false;
      this.titleArrosage = false;
    } else {
      this.infoArrosage = true;
      this.titleArrosage = true;
    }
  }

  showTime() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.currentDate = mm + '/' + dd + '/' + yyyy;
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

  reloadHome = () => window.location.pathname = 'home';

  logout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('door');
    window.location.pathname = 'login';
  };


}
