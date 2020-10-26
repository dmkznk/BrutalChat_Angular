import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private rote: ActivatedRoute
    // service
  ) { }

  ngOnInit(): void {

    // diff method, private
    this.rote.params.subscribe(params => {
      console.log(+params.id)
    })
  }

  // get member by id...

}
