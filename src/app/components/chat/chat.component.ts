import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../shared/services/members.service';
import {Member} from '../../shared/interfaces/member';
import {HttpService} from '../../shared/services/http.service';
import {delay} from 'rxjs/operators';
import {LocalStorageService} from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  member: Member;
  newMessageText  = '';
  currentMemberId: number;

  constructor(
    private rote: ActivatedRoute,
    private membersService: MembersService,
    private httpService: HttpService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.rote.params.subscribe(params => {
      this.member = this.membersService.getMemberById(+params.id);
      this.scrollToBottom();

      if (this.member.id === this.currentMemberId) {
        this.member.history[this.member.history.length - 1].isRead = true;
        this.localStorageService.setToLS();
      }
    });
  }


  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }


  public sendMessage(): void {
    if (!this.newMessageText.trim()) {
      return;
    }

    const newMyMessage = {
      message: this.newMessageText,
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

  private getMessage(currentMemberId: number): void {
  this.httpService.getMessage()
    .pipe(delay(3000))
    .subscribe(res => {
      const newInterlocutorMessage = {
        message: res.value,
        isMessageFromMe: false,
        isRead: this.member.id === currentMemberId,
        messageTime: {
          date: new Date(),
        }};

      const currentMember = this.membersService.getMemberById(currentMemberId);
      currentMember.history.push(newInterlocutorMessage);

      this.currentMemberId = currentMemberId;

      this.localStorageService.setToLS();
    });
  }
}

