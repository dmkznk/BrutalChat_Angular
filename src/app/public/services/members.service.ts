import { Injectable } from '@angular/core';
import {Member} from '../interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  public members;

  public getMembers(): Member[] {
    return this.members;
  }

  public getMemberById(id: number): Member {
    return this.members.find(member => member.id === id);
  }
}
