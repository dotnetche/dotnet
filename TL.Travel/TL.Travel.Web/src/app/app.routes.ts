
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { 
    path: 'clients', 
    loadComponent: () => import('./clients/clients.component').then(m => m.ClientsComponent) 
  },
  { 
    path: 'operators', 
    loadComponent: () => import('./operators/operators.component').then(m => m.OperatorsComponent) 
  },
  { 
    path: 'hotels', 
    loadComponent: () => import('./hotels/hotels.component').then(m => m.HotelsComponent) 
  },
  { 
    path: 'hotel-rooms', 
    loadComponent: () => import('./hotel-rooms/hotel-rooms.component').then(m => m.HotelRoomsComponent) 
  },
  { 
    path: 'locations', 
    loadComponent: () => import('./locations/locations.component').then(m => m.LocationsComponent) 
  },
  { 
    path: 'reservations', 
    loadComponent: () => import('./reservations/reservations.component').then(m => m.ReservationsComponent) 
  },
  { 
    path: 'feeding-types', 
    loadComponent: () => import('./feeding-types/feeding-types.component').then(m => m.FeedingTypesComponent) 
  },
  { 
    path: 'payment-types', 
    loadComponent: () => import('./payment-types/payment-types.component').then(m => m.PaymentTypesComponent) 
  },
  { 
    path: 'extras', 
    loadComponent: () => import('./extras/extras.component').then(m => m.ExtrasComponent) 
  },
  { path: '**', redirectTo: '/clients' }
];
