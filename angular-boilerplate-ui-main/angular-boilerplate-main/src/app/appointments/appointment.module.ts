import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { ReviewAppointmentComponent } from './review-appointment/review-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@NgModule({
  declarations: [
    ScheduleAppointmentComponent,
    ReviewAppointmentComponent,
    EditAppointmentComponent,
    ManageAppointmentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule to imports
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
