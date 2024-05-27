import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../_services/review.service';
import { Review } from '../../_models/review';

@Component({
  selector: 'app-review-appointment',
  templateUrl: './review-appointment.component.html',
  styleUrls: ['./review-appointment.component.css']
})
export class ReviewAppointmentComponent implements OnInit {
  review: Review = {
    appointmentId: 0, // Ensure you set this appropriately
    rating: 0,
    comment: ''
  };

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
    // Get the appointment ID from the route parameters
    this.route.params.subscribe(params => {
      this.review.appointmentId = +params['id'] || 0; // + converts string to number
    });
  }

  submitReview() {
    this.reviewService.createReview(this.review).subscribe(
      (res) => {
        console.log('Review submitted successfully!');
        // Reset the form or navigate to another page
        this.review = { appointmentId: 0, rating: 0, comment: '' }; // Reset form
      },
      (err) => {
        console.error('Error submitting review:', err);
      }
    );
  }
}
