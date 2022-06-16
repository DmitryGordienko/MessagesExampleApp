import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/core/models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message?: IMessage;

  constructor() { }

  ngOnInit() {
    //console.log(this.message)
  }

}
