import { ReservationAddComponent } from './reservations/reservation-add.component';
import { ReservationStatusesComponent } from './reservation-statuses/reservation-statuses.component';
import { HotelRoomsComponent } from './hotel-rooms/hotel-rooms.component';
import { PaymentChannelsComponent } from './payment-channels/payment-channels.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';


import { ClientsComponent } from './clients/clients.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ExtrasComponent } from './extras/extras.component';
import { FeedingTypesComponent } from './feeding-types/feeding-types.component';
import { LocationsComponent } from './locations/locations.component';
import { OperatorsComponent } from './operators/operators.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeesComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'hotels', component: HotelsComponent },
    { path: 'reservations', component: ReservationsComponent },
    { path: 'extras', component: ExtrasComponent },
    { path: 'feeding-types', component: FeedingTypesComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'operators', component: OperatorsComponent },
    { path: 'payment-channels', component: PaymentChannelsComponent },
    { path: 'payment-types', component: PaymentTypesComponent },
    { path: 'reservation-statuses', component: ReservationStatusesComponent },
    { path: 'hotel-rooms', component: HotelRoomsComponent },
    { path: 'reservations/add', component: ReservationAddComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: '/employees' }
];
