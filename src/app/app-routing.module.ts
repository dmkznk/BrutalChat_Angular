import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './components/chat/chat.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

const routes: Routes = [{
  path: 'chat/:id',
  component: ChatComponent
},
  {path: 'chat', component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
