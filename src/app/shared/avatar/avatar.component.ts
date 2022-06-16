import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() user?: IUser;

  get initials() {
    return Array.from(this.user!.firstName)[0] + Array.from(this.user!.lastName)[0];
  }

  constructor() { }

  ngOnInit() {
  }

}
