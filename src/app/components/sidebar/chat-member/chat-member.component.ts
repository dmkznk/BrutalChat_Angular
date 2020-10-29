import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../../shared/interfaces/member';

@Component({
  selector: 'app-chat-member',
  templateUrl: './chat-member.component.html',
  styleUrls: ['./chat-member.component.scss']
})
export class ChatMemberComponent implements OnInit {

  @Input() member: Member;

  constructor() { }

  ngOnInit(): void {  }

  public cutMessage(message: string): string {
    return message.length > 50
      ? message.slice(0, 50) + '...'
      : message;
  }
}
