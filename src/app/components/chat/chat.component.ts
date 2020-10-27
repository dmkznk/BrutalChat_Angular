import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../shared/services/members.service';
import {Member} from '../../shared/interfaces/member';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  member: Member;

  constructor(
    private rote: ActivatedRoute,
    private membersService: MembersService
  ) { }

  ngOnInit(): void {
    // diff method, private
    this.rote.params.subscribe(params => {
      this.member = this.membersService.getMemberById(+params.id);
    });
  }
}
