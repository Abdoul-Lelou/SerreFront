import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Creation de l'objet behavior subject qui require une valeeur initiale ici de type utilisateur
  //Permet d'emettre la valeur actuel lorsqu'on s'abonne à l'observable BehaviorSubject
  private currentUserSubject: BehaviorSubject<User>;

  //Injection de dependance du module httpClient
  //Qui permet de faire les requetes

  constructor(private httpClient:HttpClient) {
    //Recuperation du token au niveau du localstorage dès la creation de ce service 
    //Stockage du token dans l'observable currentUserSubject

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!!));
  }

  //Creation de la methode get pour recuperer la valeur du token actuelle
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  //Connexion de l'utilisateur 

  getConnexion(user:User){
    return this.httpClient.post<User>(`${environment.apiUrl}/api/login`,user).
      pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        //Ceci permet de garder l'utilisateur connecté entre les differentes pages
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));

  }
}