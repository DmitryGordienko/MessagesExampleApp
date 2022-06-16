import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailPage } from './mail.page';
import { MailRoutingModule } from './mail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MessageViewDialogComponent } from './components/message-view-dialog/message-view-dialog.component';
import { MessageCreateDialogComponent } from './components/message-create-dialog/message-create-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MailRoutingModule,
    ScrollingModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
  declarations: [
    MailPage,
    MessageCreateDialogComponent,
    MessageViewDialogComponent,
  ],
  exports: [
    MessageCreateDialogComponent,
    MessageViewDialogComponent,
  ]
})
export class MailModule { }
