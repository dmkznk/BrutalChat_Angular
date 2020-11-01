import { Pipe, PipeTransform } from '@angular/core';
import {MemberInterface} from '../interfaces/member.interface';

@Pipe({
  name: 'SortByTime',
  pure: false
})
export class SortByTimePipe implements PipeTransform {

  transform(members: Array<MemberInterface>): Array<MemberInterface> {
    return members.sort((a, b) => {
      const timeA =  new Date(a.history[a.history.length - 1].messageTime.date).getTime();
      const timeB =  new Date(b.history[b.history.length - 1].messageTime.date).getTime();

      return timeB - timeA;
    });
  }
}
