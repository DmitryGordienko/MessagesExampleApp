import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsPage } from './contacts.page';
import { ContactsPageRoutingModule } from './contacts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactViewDialogComponent } from './components/contact-view-dialog/contact-view-dialog.component';
import { ContactCreateDialogComponent } from './components/contact-create-dialog/contact-create-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    ContactsPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ScrollingModule,
    SharedModule,
  ],
  declarations: [
    ContactsPage,
    ContactViewDialogComponent,
    ContactCreateDialogComponent,
  ],
  exports: [
    ContactViewDialogComponent,
  ]
})
export class ContactsModule { }

