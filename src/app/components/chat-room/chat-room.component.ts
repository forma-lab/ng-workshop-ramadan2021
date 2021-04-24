import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { Router } from '@angular/router';

import { io } from "socket.io-client"

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatRoomComponent implements OnInit {

  public _date = new Date()
  public _message = ""
  public _messages = ""

  private socket = io("http://localhost:3000/")
  private _pseudo = ""

  constructor(private _router: Router) { }

  ngOnInit() {
    this._pseudo = localStorage.getItem("pseudo")
    !this._pseudo ? this._router.navigateByUrl('/signin') : null

    this.socket.on('broadcast', (data) => {

      if (data.role == this._pseudo) {
        this._messages +=
          `
        <div class="outgoing_msg">
          <div class="sent_msg">
              <p><b>${data.role.substr(0, data.role.indexOf("_"))} : </b>${data.message}</p>
              <span class="time_date">${data.date}</span>
          </div>
        </div>
        `
      } else {
        this._messages +=
          `
        <div class="incoming_msg">
          <div class="received_msg">
              <div class="received_withd_msg">
                  <p><b>${data.role.substr(0, data.role.indexOf("_"))} : </b>${data.message}</p>
                  <span class="time_date">${data.date}</span>
              </div>
          </div>
        </div>
        `
      }
    })
  }

  sendMessage() {
    // console.log(this._message);
    this.socket.emit('message', {
      role: this._pseudo,
      message: this._message,
      date: new Date().toUTCString()
    })

    this._message = ""
  }

  logout() {
    localStorage.removeItem("pseudo")
    this._router.navigateByUrl('/signin')
  }

}
