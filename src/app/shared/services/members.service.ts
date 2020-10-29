import { Injectable } from '@angular/core';
import {Member} from '../interfaces/member';

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
          message: 'Yak se mash my friend? Very',
          isMessageFromMe: true,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        },
        {
          message: 'It is me, Mario. Do yo remember me? Bla-bla bla some text to check It is me, Mario. Do yo remember me? Bla-bla bla some tex It is me, Mario. Do yo remember me? Bla-bla bla some tex',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        },
        {
          message: 'message1',
          isMessageFromMe: true,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        },
        {
          message: 'It is me, text to check',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        },
        {
          message: 'message1',
          isMessageFromMe: true,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        },
        {
          message: 'It is me, Mario. Do yo remember me? Bla-bla bla some text to check',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        },
        {
          message: 'message1',
          isMessageFromMe: true,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        },
        {
          message: 'It is me, Mario. Do yo remember me? Bla-bla bla some text to check',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        },
        {
          message: 'message1',
          isMessageFromMe: true,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        },
        {
          message: 'It is me, Mario. Do yo remember me? Bla-bla bla some text to check',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        },

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
        },
        {
          message: 'It is me, Mario',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        }
      ]
    },

    {
      id: 3,
      name: 'Arnold Schwarzenegger',
      isOnline: false,
      isRead: true,
      imageUrl: 'https://globalnews.ca/wp-content/uploads/2020/06/22098805.jpg?quality=85&strip=all',
      sortTime: 111,
      history: [
        {
          message: 'What is best in life? To crush your enemies, see them driven before you, and to hear the lamentation of their women!',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        },
        {
          message: 'You’re a funny guy Sully, I like you. That’s why I’m going to kill you last',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        }
      ]
    },

    {
      id: 4,
      name: 'Sylvester Stallone',
      isOnline: true,
      isRead: true,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTQwMTk3NDU2OV5BMl5BanBnXkFtZTcwNTA3MTI0Mw@@._V1_.jpg',
      sortTime: 111,
      history: [
        {
          message: 'message1',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        },
        {
          message: 'It is me, Mario. Do yo remember me? Bla-bla bla some text to check',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        }
      ]
    },


    {
      id: 5,
      name: 'Jackie Chan',
      isOnline: false,
      isRead: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jackie_Chan_by_Gage_Skidmore.jpg/1200px-Jackie_Chan_by_Gage_Skidmore.jpg',
      sortTime: 111,
      history: [
        {
          message: 'message1',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        },
        {
          message: 'It is me, Mario. Do yo remember me? Bla-bla bla some text to check',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        }
      ]
    },


    {
      id: 6,
      name: 'Bruce Lee',
      isOnline: true,
      isRead: true,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8hvOVZnHgyyrjKRkAMMTFyUmg5qUA8_vOjQ&usqp=CAU',
      sortTime: 111,
      history: [
        {
          message: 'message1',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 23, 2020',
            time: '21:35'
          }
        },
        {
          message: 'It is me, Mario. Do yo remember me? Bla-bla bla some text to check',
          isMessageFromMe: false,
          messageTime: {
            date: 'Oct 22, 2020',
            time: '09:35'
          }
        }
      ]
    },


  ];

  constructor() { }

  public getMembers(): Member[] {
    return this.members;
  }

  public getMemberById(id: number): Member {
    return this.members.find(member => member.id === id);
  }
}
