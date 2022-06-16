import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { MessageComponent } from './message/message.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ContactComponent } from './contact/contact.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ],
  declarations: [
    MainWrapperComponent,
    FooterComponent,
    HeaderComponent,
    SimpleButtonComponent,
    MessageComponent,
    AvatarComponent,
    ContactComponent,
    ConfirmationDialogComponent,
  ],
  exports: [
    MainWrapperComponent,
    FooterComponent,
    HeaderComponent,
    SimpleButtonComponent,
    MessageComponent,
    ContactComponent,
    ConfirmationDialogComponent,
  ],
  providers: [
  ]
})
export class SharedModule { }
