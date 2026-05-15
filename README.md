# 🏋️ FitReserve

Aplicación Angular para la gestión de reservas de clases en un gimnasio.  
Permite visualizar clases disponibles, ver su detalle y simular una reserva de cupo.

<img src="https://drive.google.com/uc?export=view&id=1T3esGJ-O4VJEgGynvQEOGnpybkSw_kVG" style="width: 100%;" />
<img src="https://drive.google.com/uc?export=view&id=1LFEi4uIe8NzFBi-vZQ3NK-zssL9WQtaA" style="width: 100%;" />
<img src="https://drive.google.com/uc?export=view&id=1-mJwDxMldL4hDOcI2IRX19YZdctKbp57" style="width: 100%;" />

## 🧰 Stack tecnológico

- Angular 17+ (Standalone Components)
- TypeScript (strict mode)
- RxJS
- SCSS
- Angular Router con Lazy Loading
- Dependency Injection moderna con `inject()`

## 🏗️ Arquitectura del proyecto

El proyecto está estructurado bajo un enfoque feature-based architecture, separando responsabilidades por dominio y capa.

src/app/
│
├── core/
│   ├── models/
│   └── services/
│
├── shared/
│   └── components/
│       └── header/
│
├── features/
│   └── bookings/
│       ├── components/
│       │   ├── booking-list/
│       │   └── booking-detail/
│       └── pages/
│           └── booking-page/
│
├── app.component.ts
├── app.routes.ts
└── main.ts

🧠 Responsabilidades por capa

🔹 Core

Contiene lógica global de la aplicación:

Modelos (Booking)
Servicios (BookingService)
Comunicación con API (mock o HTTP)

🔹 Shared

Componentes reutilizables en toda la aplicación:

Header
Componentes genéricos sin dependencia de features

🔹 Features (Bookings)

Módulo principal de la aplicación:

BookingListComponent → listado de clases
BookingDetailComponent → detalle de clase seleccionada
BookingPageComponent → container principal que maneja estado

## 🔄 Arquitectura de componentes

Se utilizó un patrón Container / Presentational Components:

🧩 BookingPageComponent (Container)
Maneja el estado global
Obtiene datos desde el servicio
Controla selección de clases
Maneja loading / error
🧩 BookingListComponent (Presentational)
Recibe datos mediante @Input()
Emite eventos con @Output()
No contiene lógica de negocio
🧩 BookingDetailComponent (Presentational)
Muestra información detallada
Emite evento de reserva

## 🌐 Consumo de datos

El servicio BookingService simula un endpoint REST:

getBookings(): Observable<Booking[]> {
  return of(MOCK_DATA).pipe(delay(3000));
}

## 🚀 Lazy Loading

La aplicación utiliza lazy loading con standalone components:

{
  path: 'bookings',
  loadComponent: () =>
    import('./features/bookings/pages/booking-page/booking-page.component')
      .then(m => m.BookingPageComponent)
}

## 🧩 Comunicación entre componentes

Se implementó comunicación mediante:

@Input() → envío de datos al componente hijo
@Output() → emisión de eventos al componente padre

Ejemplo:

Lista → emite selección de clase
Page → actualiza estado
Detail → emite acción de reserva

## 🎨 UI / UX

La interfaz está construida con HTML + SCSS puro sin librerías externas.

Características:

Layout tipo master-detail
Grid responsive
Cards para clases
Panel de detalle más prominente
Estados visuales:
Loading
Error
Empty state

## 📱 Responsive Design

La aplicación es responsive con breakpoint en 768px:

Desktop: 2 columnas (lista + detalle)
Mobile: 1 columna apilada

## ⚡ Buenas prácticas aplicadas
Standalone Components (Angular moderno)
Strict typing con TypeScript
Separación por responsabilidades
Componentes reutilizables
Uso de inject() en lugar de constructor
Código sin dependencias de UI libraries
Observables para manejo de datos asíncronos

## 🔗 Alias para imports (rutas limpias)

Se configuraron alias en TypeScript para mejorar la legibilidad del código y evitar rutas relativas complejas (../../../../).

Antes:
import { Booking } from '../../../../core/models/booking.model';
Después:
import { Booking } from '@core/models/booking.model';

## 📌 Decisiones técnicas
Se eligió comunicación con @Input/@Output por simplicidad y claridad
Se simula backend con RxJS (of + delay)
Se utiliza arquitectura por features para escalabilidad
Se prioriza claridad sobre sobreingeniería

## ⚡ Angular moderno: Control Flow (@if / @for)

Se utilizó la nueva sintaxis de control flow introducida en Angular 17 como parte de la evolución del framework hacia una sintaxis más simple y eficiente.

🔹 Uso de @if
Se reemplazaron estructuras tradicionales *ngIf por @if para mejorar legibilidad.

🔹 Uso de @for
Para el renderizado de listas se utilizó @for en lugar de *ngFor

## 👨‍💻 Autor

Desarrollado como prueba técnica Frontend Angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
