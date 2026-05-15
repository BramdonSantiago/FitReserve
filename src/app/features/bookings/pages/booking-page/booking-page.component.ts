import { Component, OnInit, inject } from '@angular/core';
import { Booking } from '../../../../core/models/booking.model';
import { BookingService } from '../../../../core/services/booking.service';
import { BookingListComponent } from '../../components/booking-list/booking-list.component';
import { BookingDetailComponent } from '../../components/booking-detail/booking-detail.component';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [BookingListComponent, BookingDetailComponent],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.scss'
})
export class BookingPageComponent {
  private bookingService = inject(BookingService);

  bookings: Booking[] = [];
  selectedBooking: Booking | null = null;

  loading = true;
  error = false;

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe({
      next: (data) => {
        this.bookings = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  onSelectBooking(booking: Booking): void {
    this.selectedBooking = booking;
  }

  onReserve(booking: Booking): void {
    booking.availableSpots--;

    console.log('Reserva realizada:', booking);

    alert(`Reservaste: ${booking.className}`);
  }
}

