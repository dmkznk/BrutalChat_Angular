import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatMemberComponent } from './components/sidebar/chat-member/chat-member.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {SearchByNamePipe} from './public/pipes/search-by-name.pipe';
import { SortByTimePipe } from './public/pipes/sort-by-time.pipe';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        ChatComponent,
        ChatMemberComponent, SearchByNamePipe, SortByTimePipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
