import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { IUser } from 'src/app/core/models/user.model';
import { ContactsService } from 'src/app/core/services/contacts.service';
import { MessagesService } from 'src/app/core/services/messages.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { ContactCreateDialogComponent } from './components/contact-create-dialog/contact-create-dialog.component';
import { ContactViewDialogComponent } from './components/contact-view-dialog/contact-view-dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss']
})
export class ContactsPage implements OnInit {

  isLoading: boolean = false;

  contacts$: Observable<IUser[]>;

  update = new BehaviorSubject<boolean>(true);


  constructor(private contactsService: ContactsService, public dialog: MatDialog) {
    this.contacts$ = this.contactsService.messagesContacts;
  }

  ngOnInit() {

    this.contactsService.load();
    this.contacts$ = this.update.pipe(
      tap(_ => this.isLoading = true),
      switchMap(_ => this.contactsService.messagesContacts), // request the data
      tap(_ => this.isLoading = false)
    )
  }
  openCreateDialog(user: IUser) {
    const dialogRef = this.dialog.open(ContactCreateDialogComponent, {
      width: '50vw',
      data: { user: user },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        /// TODO: implement the message send logic
      }
    });
  }

  openViewDialog(user: IUser) {
    const dialogRef = this.dialog.open(ContactViewDialogComponent, {
      maxWidth: '50vw',
      data: { user: user },
    });

  }

  openDeleteDialog(user: IUser) {
    var text = `Are you sure want to delete user ${user.nickname} from contact list?`;
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'confirmation-dialog',
      data: { text: text },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactsService.delete(user.id);
        this.update.next(true);
      }
    });

  }

}
