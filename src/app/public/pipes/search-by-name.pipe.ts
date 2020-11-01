import { Pipe, PipeTransform } from '@angular/core';
import {Member} from '../interfaces/member';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(members: Array<Member>, searchInputValue: string = ''): Array<Member> {
    if (!searchInputValue.trim()) {
      return members;
    }
    return members.filter(member => {
      return member.name.toLowerCase().includes(searchInputValue.toLowerCase());
    });
  }
}
