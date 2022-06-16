import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-message-create-dialog',
  templateUrl: './message-create-dialog.component.html',
  styleUrls: ['./message-create-dialog.component.scss']
})
export class MessageCreateDialogComponent implements OnInit {

  message: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: IUser }) { }

  ngOnInit() {
  }

}
