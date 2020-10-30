import {Component, OnInit} from '@angular/core';
import {MembersService} from '../../public/services/members.service';
import {Member} from '../../public/interfaces/member';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public members: Member[];
  public searchInput: '';


  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }
}
