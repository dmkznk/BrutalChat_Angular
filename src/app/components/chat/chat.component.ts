import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Member} from '../../public/interfaces/member';
import {Message} from "../../public/interfaces/message";
import {MembersService} from '../../public/services/members.service';
import {JokesApiService} from '../../public/services/jokes-api.service';
import {LocalStorageService} from '../../public/services/local-storage.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  public member: Member;
  public newMessageText = '';

  constructor(
    private rote: ActivatedRoute,
    private membersService: MembersService,
    private httpService: JokesApiService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.getMember();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private getMember(): void {
    this.rote.params.subscribe(params => {
      this.member = this.membersService.getMemberById(+params.id);
    });
  }

  public sendMessage(): void {
    if (!this.newMessageText.trim()) {
      return;
    }

    const newMyMessage: Message = {
      text: this.newMessageText,
      isMessageFromMe: true,
      isRead: true,
      messageTime: {
        date: new Date(),
      }};

    this.member.history.push(newMyMessage);
    this.newMessageText = '';

    this.localStorageService.setToLS();

    const currentMemberId: number = this.member.id;
    this.getMessage(currentMemberId);
    this.scrollToBottom();
  }

  private getMessage(id: number): void {
  this.httpService.getMessage()
    .pipe(delay(3000))
    .subscribe(jokesApiRes => {

      const newInterlocutorMessage: Message = {
        text: jokesApiRes.value,
        isMessageFromMe: false,
        isRead: this.member.id === id,
        messageTime: {
          date: new Date(),
        }};

      const currentMember = this.membersService.getMemberById(id);
      currentMember.history.push(newInterlocutorMessage);

      this.localStorageService.setToLS();
    });
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }
}

