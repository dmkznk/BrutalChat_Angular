import {Component, OnInit} from '@angular/core';
import {MembersService} from '../../public/services/members.service';
import {MemberInterface} from '../../public/interfaces/member.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public members: MemberInterface[];
  public searchInputValue: '';

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }
}
