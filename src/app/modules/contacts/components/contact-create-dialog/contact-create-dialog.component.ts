import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-contact-create-dialog',
  templateUrl: './contact-create-dialog.component.html',
  styleUrls: ['./contact-create-dialog.component.scss']
})
export class ContactCreateDialogComponent implements OnInit {

  user: IUser = {
    id: '',
    firstName: '',
    lastName: '',
    nickname: '',

  };
  constructor() { }

  ngOnInit() {
  }

}
