import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../_models/appointment.interface'; // Make sure this import is correct

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = []; // Dummy data source

  constructor() { }

  getAppointmentById(id: number): Observable<Appointment> {
    // Dummy implementation
    const appointment = this.appointments.find(app => app.id === id);
    return of(appointment);
  }

  updateAppointment(id: number, appointment: Appointment): Observable<any> {
    // Dummy implementation for example
    const index = this.appointments.findIndex(app => app.id === id);
    if (index !== -1) {
      this.appointments[index] = appointment;
      return of({ success: true });
    } else {
      return of({ success: false });
    }
  }

  // Other methods related to appointments
}

