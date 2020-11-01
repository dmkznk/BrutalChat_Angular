import { Injectable } from '@angular/core';
import {chatData} from '../chat-data/chat-data';
import {environment} from '../../../environments/environment';
import {MemberInterface} from '../interfaces/member.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private members: Array<MemberInterface> = chatData;

  public setToLS(): void {
    localStorage.setItem(environment.localStorageKey, JSON.stringify(this.members));
  }

  public getFromLS(): Array<MemberInterface> {
    return  this.members = JSON.parse(localStorage.getItem(environment.localStorageKey)) || this.members;
  }
}
