import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { ReviewAppointmentComponent } from './review-appointment/review-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component'; // Ensure this component exists
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component'; // Ensure this component exists
import { AuthGuard } from '../_helpers/auth.guard'; // Adjust the path if necessary
import { Role } from '../_models/role'; // Adjust the path if necessary

const routes: Routes = [
  { path: 'schedule', component: ScheduleAppointmentComponent },
  { path: 'review', component: ReviewAppointmentComponent },
  { path: 'edit/:id', component: EditAppointmentComponent, canActivate: [AuthGuard] },
  { path: 'manage', component: ManageAppointmentsComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
