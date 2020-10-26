import {Component, Input, OnInit} from '@angular/core';
import {MembersService} from "../../shared/services/members.service";
import {Member} from "../../shared/interfaces/member";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public members: Member[];

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }

}
