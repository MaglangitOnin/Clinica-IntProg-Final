import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../_models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:4000/api/reviews';

  constructor(private http: HttpClient) { }

  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}`, review);
  }

  getAppointmentReviews(appointmentId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/appointment/${appointmentId}`);
  }
}