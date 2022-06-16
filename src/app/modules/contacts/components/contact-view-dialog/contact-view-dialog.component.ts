import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-contact-view-dialog',
  templateUrl: './contact-view-dialog.component.html',
  styleUrls: ['./contact-view-dialog.component.scss']
})
export class ContactViewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: IUser }) { }

  ngOnInit() {
  }

}
