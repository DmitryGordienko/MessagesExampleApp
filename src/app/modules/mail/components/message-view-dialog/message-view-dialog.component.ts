import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMessage } from 'src/app/core/models/message.model';

@Component({
  selector: 'app-message-view-dialog',
  templateUrl: './message-view-dialog.component.html',
  styleUrls: ['./message-view-dialog.component.scss']
})
export class MessageViewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: IMessage }) { }

  ngOnInit() {
  }

}
