import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPage } from './calendar.page';
import { CalendarPageRoutingModule } from './calendar-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    CalendarPageRoutingModule,
    SharedModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    CalendarPage,
  ]
})
export class CalendarModule { }
