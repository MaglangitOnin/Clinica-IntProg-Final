import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../_services/appointment.service';
import { Appointment } from '../../_models/appointment.interface';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html'
})
export class ManageAppointmentsComponent implements OnInit {
  pendingAppointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.fetchPendingAppointments();
  }

  fetchPendingAppointments() {
    this.appointmentService.getPendingAppointments()
      .subscribe(
        (appointments) => {
          this.pendingAppointments = appointments;
        },
        (err) => {
          console.error('Error fetching pending appointments:', err);
        }
      );
  }

  updateAppointmentStatus(appointment: Appointment, status: string) {
    this.appointmentService.updateAppointmentStatus(appointment.id, status)
      .subscribe(
        (updatedAppointment) => {
          console.log('Appointment status updated successfully!');
          // Update the UI or remove the appointment from the list
        },
        (err) => {
          console.error('Error updating appointment status:', err);
        }
      );
  }
}