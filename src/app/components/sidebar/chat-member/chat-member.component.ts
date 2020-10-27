import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../../shared/interfaces/member';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat-member',
  templateUrl: './chat-member.component.html',
  styleUrls: ['./chat-member.component.scss']
})
export class ChatMemberComponent implements OnInit {

  @Input() member: Member;

  constructor(private router: Router) { }

  ngOnInit(): void {  }

  public cutMessage(message: string): string {
    return message.length > 60
      ? message.slice(0, 60) + '...'
      : message;
  }

  public navigate(): void {
    this.router.navigate(['/chat', this.member.id]).then();
  }
}
