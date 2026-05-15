import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Booking } from '@core/models/booking.model';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [],
  templateUrl: './booking-detail.component.html',
  styleUrl: './booking-detail.component.scss'
})
export class BookingDetailComponent {
  @Input() booking!: Booking;
  @Output() reserve = new EventEmitter<Booking>();

  onReserve(): void {
    if (this.booking.availableSpots > 0) {
      this.reserve.emit(this.booking);
    }
  }
}
