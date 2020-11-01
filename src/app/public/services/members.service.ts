import {Injectable} from '@angular/core';
import {MemberInterface} from '../interfaces/member.interface';

@Injectable({
  providedIn: 'root'
})
export class MembersService{

  public members: MemberInterface[];

  public getMembers(): MemberInterface[] {
    return this.members;
  }

  public getMemberById(id: number): MemberInterface {
    return this.members.find(member => member.id === id);
  }
}
