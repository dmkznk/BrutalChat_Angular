import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "./public/services/local-storage.service";
import {MembersService} from "./public/services/members.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'chat-test';

  constructor(
    private localStorageService: LocalStorageService,
    private memberService: MembersService
  ) { }

  ngOnInit(): void {
    this.memberService.members = this.localStorageService.getFromLS()
  }
}
