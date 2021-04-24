import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public _pseudo = ""
  public _error = false

  constructor(private _router: Router) { }

  ngOnInit(): void {
    localStorage.getItem("pseudo") ? this._router.navigateByUrl('/chat-room') : null
  }

  signin() {
    if (this._pseudo.length == 0) { this._error = true }
    else {
      this._error = false
      localStorage.setItem("pseudo", this._pseudo + "_" + this.makeid())
      this._router.navigateByUrl('/chat-room')
    }

  }

  makeid() {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < 10; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }

    return result.join('');
  }

}
