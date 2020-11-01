import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from './public/services/local-storage.service';
import {MembersService} from './public/services/members.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'brutal-chat';

  constructor(
    private localStorageService: LocalStorageService,
    private membersService: MembersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.membersService.members = this.localStorageService.getFromLS();
    this.openLastActiveChat();
    this.openMessage();
  }

  private openLastActiveChat(): void {
    this.router.navigate(
      ['/chat', this.membersService.members[0].id])
      .then();
  }

  private openMessage(): void {
    this.membersService.members[0].history.forEach(message => message.isRead = true);
    this.localStorageService.setToLS();
  }
}
