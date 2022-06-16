import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { IMessage } from 'src/app/core/models/message.model';
import { IUser } from 'src/app/core/models/user.model';
import { MessagesService } from 'src/app/core/services/messages-service.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { MessageCreateDialogComponent } from './components/message-create-dialog/message-create-dialog.component';
import { MessageViewDialogComponent } from './components/message-view-dialog/message-view-dialog.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss']
})
export class MailPage implements OnInit, OnDestroy {

  isLoading: boolean = false;

  searchString: string = '';

  /// An observable object is user to handle the array asynchronously
  messages$!: Observable<IMessage[]>;

  /// An observable with an initial value of a search filter value
  private searchTerms = new BehaviorSubject<string>('');

  constructor(private messagesService: MessagesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.isLoading = true;
    this.messagesService.load();
    this.messages$ = this.searchTerms.pipe(
      // process event only if 250 mSec passed since the last one, to not to produce to much of requests
      debounceTime(250),
      // do some actions before requesting the data
      tap(searchString => {
        this.isLoading = true;
        this.searchString = searchString;
      }),
      // request the data
      switchMap(searchString => this.messagesService.getFiltered(searchString)), // request the data
      // do some actions bafter requesting the data
      tap(_ => this.isLoading = false)
    );
  }

  ngOnDestroy(): void {
    this.searchTerms.complete();
  }

  search(event: any) {
    this.searchTerms.next(event.target.value); // invoke event
  }

  openCreateDialog(user: IUser) {
    const dialogRef = this.dialog.open(MessageCreateDialogComponent, {
      width: '50vw',
      data: { user: user },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        /// Creation logic is skipped, because the app is just an example
      }
    });
  }

  openViewDialog(message: IMessage) {
    const dialogRef = this.dialog.open(MessageViewDialogComponent, {
      maxWidth: '50vw',
      data: { message: message },
    });

  }

  openDeleteDialog(message: IMessage) {
    var text = `Are you sure want to delete message from ${message.user.nickname}?`;
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'confirmation-dialog',
      data: { text: text },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.messagesService.deleteMessage(message.id);
        this.searchTerms.next(this.searchString); // invoke event
      }
    });

  }

}
