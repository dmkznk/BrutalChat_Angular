import { Injectable } from '@angular/core';
import {Member} from "../interfaces/member";

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private members: Array<Member> = [
    {
      id: 1,
      name: 'Jason Statham',
      isOnline: true,
      isRead: true,
      imageUrl: 'https://www.onthisday.com/images/people/jason-statham-medium.jpg',
      sortTime: 111,
      history: [
        {
          message: 'message1',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        }
      ]
    },

    {
      id: 2,
      name: 'Jan Klod Vandam',
      isOnline: true,
      isRead: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Jean-Claude_Van_Damme_2012.jpg',
      sortTime: 111,
      history: [
        {
          message: 'Hello boi...',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        }
      ]
    }
  ];

  constructor() { }

  public getMembers(): Member[] {
    return this.members;
  }
}
