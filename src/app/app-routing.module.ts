import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full"
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "chat-room",
    component: ChatRoomComponent
  },
  {
    path: "**",
    component: SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
