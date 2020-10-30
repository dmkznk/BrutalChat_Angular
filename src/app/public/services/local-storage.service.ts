import { Injectable } from '@angular/core';
import {chatData} from '../chat-data/chat-data';
import {environment} from '../../../environments/environment';
import {Member} from '../interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private members: Array<Member> = chatData;

  public setToLS(): void {
    localStorage.setItem(environment.localStorageKey, JSON.stringify(this.members));
  }

  public getFromLS(): Array<Member> {
    return  this.members = JSON.parse(localStorage.getItem(environment.localStorageKey)) || this.members;
  }
}
