import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberInterface} from '../../public/interfaces/member.interface';
import {MessageInterface} from '../../public/interfaces/message.interface';
import {MembersService} from '../../public/services/members.service';
import {JokesApiService} from '../../public/services/jokes-api.service';
import {LocalStorageService} from '../../public/services/local-storage.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public member: MemberInterface;
  public newMessageText = '';
  private isReadMediaScreen = true;
  @ViewChild('chatContainer') private chatContainer: ElementRef;

  constructor(
    private rote: ActivatedRoute,
    private membersService: MembersService,
    private httpService: JokesApiService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getMember();
    this.cd.detectChanges();
  }

  private getMember(): void {
    this.rote.params.subscribe(params => {
      this.member = this.membersService.getMemberById(+params.id);

      this.cd.detectChanges();
    });
  }

  public sendMessage(): void {
    if (!this.newMessageText.trim()) {
      return;
    }

    const newMyMessage: MessageInterface = {
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
    this.cd.detectChanges();
  }

  private getMessage(id: number): void {
  this.httpService.getMessage()
    .pipe(delay(10000))
    .subscribe(jokesApiRes => {

      const newInterlocutorMessage: MessageInterface = {
        text: jokesApiRes.value,
        isMessageFromMe: false,
        isRead: !this.isReadMediaScreen ? false : this.member.id === id,
        messageTime: {
          date: new Date(),
        }};

      const currentMember = this.membersService.getMemberById(id);
      currentMember.history.push(newInterlocutorMessage);

      this.localStorageService.setToLS();
      this.cd.detectChanges();
    });
  }

  public backToSidebarMedia(): void {
    this.chatContainer.nativeElement.classList.toggle('not-visible');
    this.router.navigate(
      ['/chat'])
      .then();

    this.isReadMediaScreen = false;
  }
}

