import { Component } from '@angular/core';
import { AppointmentService } from '../../_services/appointment.service';
import { Appointment } from '../../_models/appointment.interface'; // Adjusted import path

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent {
  appointment: Appointment = {
    userId: 0, // Ensure this matches the property name in the interface
    appointmentDate: new Date(),
    reason: ''
  };

  constructor(private appointmentService: AppointmentService) { }

  scheduleAppointment() {
    this.appointmentService.createAppointment(this.appointment)
      .subscribe(
        (res) => {
          console.log('Appointment scheduled successfully!');
          // Reset the form or navigate to another page
        },
        (err) => {
          console.error('Error scheduling appointment:', err);
        }
      );
  }
}
