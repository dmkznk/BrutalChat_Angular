import {Component, Input} from '@angular/core';
import {MemberInterface} from '../../../public/interfaces/member.interface';
import {LocalStorageService} from '../../../public/services/local-storage.service';
import {MessageInterface} from '../../../public/interfaces/message.interface';

@Component({
  selector: 'app-chat-member',
  templateUrl: './chat-member.component.html',
  styleUrls: ['./chat-member.component.scss']
})
export class ChatMemberComponent {

  @Input() public member: MemberInterface;
  @Input() public searchInputValue: string;

  constructor(
    private localStorageService: LocalStorageService,
    ) { }

  public cutMessage(message: string): string {
    if (message) {
      return message.length > 50
        ? message.slice(0, 50) + '...'
        : message;
    }
  }

  public openMessage(): void {
    this.member.history.forEach(message => message.isRead = true);
    this.localStorageService.setToLS();
  }

  public unreadCount(messages: MessageInterface[]): number {
    return messages.filter(message => !message.isRead).length;
  }
}
