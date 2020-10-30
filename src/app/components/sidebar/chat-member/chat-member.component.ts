import {Component, Input} from '@angular/core';
import {Member} from '../../../public/interfaces/member';
import {LocalStorageService} from '../../../public/services/local-storage.service';

@Component({
  selector: 'app-chat-member',
  templateUrl: './chat-member.component.html',
  styleUrls: ['./chat-member.component.scss']
})
export class ChatMemberComponent {

  @Input() member: Member;
  @Input() searchInput: string;

  constructor(private localStorageService: LocalStorageService) { }

  public cutMessage(message: string): string {
    return message.length > 50
      ? message.slice(0, 50) + '...'
      : message;
  }

  openMessage(): void {
    this.member.history[this.member.history.length - 1].isRead = true;
    this.localStorageService.setToLS();

    console.log(this.searchInput);
  }
}
