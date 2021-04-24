import {
  Component,
  OnInit
} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  public _date = new Date()

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem("pseudo")
    this._router.navigateByUrl('/signin')
  }

}
