import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'bookings',
        loadComponent: () =>
            import('./features/bookings/pages/booking-page/booking-page.component')
                .then(m => m.BookingPageComponent)
    },
    {
        path: '',
        redirectTo: 'bookings',
        pathMatch: 'full'
    }
];
