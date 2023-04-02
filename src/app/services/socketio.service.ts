import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket:any;
  localStatus = localStorage.getItem('currentUser');
  msg:any;
  constructor(private toastr: ToastrService) { }

  setupSocketConnection() {
    this.socket = io(`${environment.apiUrl}`);  
  
    // this.socket.emit('my message', 'Hello there from Angular response.');

    this.socket.on('my broadcast', (data: string) => {
      console.log(data);
      if (!this.localStatus && data !="refuse") {
        this.toastr.success("Accès autorisé", 'Carte valide')
        localStorage.setItem('currentUser', JSON.stringify(data));
        window.location.pathname ='home'
        return;
      }else if (!this.localStatus && data =="refuse"){
        this.toastr.error("Accès refusé", 'Carte invalide')
      }
    });
  }

  switchVentilo(){
    this.socket = io(`${environment.apiUrl}`);  
  
    this.socket.emit('Allumer', '1')
  }
}
