import { Pipe, PipeTransform } from '@angular/core';
import {MemberInterface} from '../interfaces/member.interface';

@Pipe({
  name: 'SearchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(members: Array<MemberInterface>, searchInputValue: string = ''): Array<MemberInterface> {
    if (!searchInputValue.trim()) {
      return members;
    }
    return members.filter(member => {
      return member.name.toLowerCase().includes(searchInputValue.toLowerCase());
    });
  }
}
