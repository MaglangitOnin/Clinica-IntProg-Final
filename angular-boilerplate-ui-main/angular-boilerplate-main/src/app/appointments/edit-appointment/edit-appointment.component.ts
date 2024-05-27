import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../_services/appointment.service';
import { Appointment } from '../../_models/appointment.interface';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html'
})
export class EditAppointmentComponent implements OnInit {
  appointment: Appointment;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    const appointmentId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    // Fetch the appointment data based on the appointmentId
    // and populate the `appointment` property
  }

  updateAppointment() {
    const appointmentId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.appointmentService.updateAppointment(appointmentId, this.appointment)
      .subscribe(
        (res) => {
          console.log('Appointment updated successfully!');
          // Navigate to another page or update the UI
        },
        (err) => {
          console.error('Error updating appointment:', err);
        }
      );
  }
}