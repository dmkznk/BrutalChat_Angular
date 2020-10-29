import { Injectable } from '@angular/core';
import {Member} from '../interfaces/member';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private members = this.localStorage.getFromLS();

  constructor(private localStorage: LocalStorageService) {
  }

  public getMembers(): Member[] {
    return this.members;
  }

  public getMemberById(id: number): Member {
    return this.members.find(member => member.id === id);
  }
}
