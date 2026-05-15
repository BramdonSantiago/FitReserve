import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Booking } from '@core/models/booking.model';

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    private bookings: Booking[] = [
        {
            id: 1,
            className: 'Yoga',
            instructor: 'Laura Gómez',
            schedule: 'Lunes 18:00',
            availableSpots: 10,
            description:
                'Clase de yoga enfocada en mejorar la flexibilidad, la respiración y el bienestar general. Se trabajan posturas básicas y avanzadas adaptadas a todos los niveles, combinando técnicas de relajación y mindfulness. Ideal para reducir el estrés diario, mejorar la postura corporal y aumentar la concentración. La sesión incluye calentamiento, secuencias dinámicas y cierre con meditación guiada para promover equilibrio físico y mental.'
        },
        {
            id: 2,
            className: 'Crossfit',
            instructor: 'Carlos Ruiz',
            schedule: 'Martes 19:00',
            availableSpots: 6,
            description:
                'Entrenamiento de alta intensidad diseñado para mejorar la fuerza, resistencia y capacidad cardiovascular. Las sesiones combinan ejercicios funcionales como levantamiento de peso, saltos y trabajo con el propio cuerpo. Cada clase es diferente, lo que mantiene la motivación alta y evita la rutina. Está orientado tanto a principiantes como a atletas avanzados, con adaptaciones según el nivel de cada participante.'
        },
        {
            id: 3,
            className: 'Spinning',
            instructor: 'Ana Torres',
            schedule: 'Miércoles 17:00',
            availableSpots: 8,
            description:
                'Clase de ciclismo indoor con música motivadora y entrenamiento guiado por intervalos. Se trabajan diferentes niveles de resistencia simulando subidas, sprints y recorridos planos. Es ideal para quemar calorías, mejorar la capacidad cardiovascular y fortalecer piernas y glúteos. El instructor guía el ritmo durante toda la sesión, asegurando una experiencia dinámica, energizante y apta para todos los niveles.'
        }
    ];

    getBookings(): Observable<Booking[]> {
        return of(this.bookings).pipe(delay(3000));
    }
}