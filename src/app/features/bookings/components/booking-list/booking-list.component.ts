import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Booking } from '@core/models/booking.model';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss'
})
export class BookingListComponent {
  @Input() bookings: Booking[] = [];
  @Output() bookingSelected = new EventEmitter<Booking>();

  selectBooking(booking: Booking): void {
    this.bookingSelected.emit(booking);
  }
}
