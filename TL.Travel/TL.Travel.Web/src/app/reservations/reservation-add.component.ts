import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ReservationsService } from '../api/reservations.service';
import { ClientsService } from '../api/clients.service';
import { HotelsService } from '../api/hotels.service';
import { HotelRoomsService } from '../api/hotel-rooms.service';
import { FeedingTypesService } from '../api/feeding-types.service';
import { PaymentTypesService } from '../api/payment-types.service';
import { PaymentChannelsService } from '../api/payment-channels.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation-add.component.html',
  styleUrls: []
})
export class ReservationAddComponent implements OnInit {
  form: FormGroup;
  clients: any[] = [];
  hotels: any[] = [];
  roomTypes: any[] = [];
  feedingTypes: any[] = [];
  paymentTypes: any[] = [];
  paymentChannels: any[] = [];

  constructor(
    private fb: FormBuilder,
    private reservationsService: ReservationsService,
    private clientsService: ClientsService,
    private hotelsService: HotelsService,
    private hotelRoomsService: HotelRoomsService,
    private feedingTypesService: FeedingTypesService,
    private paymentTypesService: PaymentTypesService,
    private paymentChannelsService: PaymentChannelsService
  ) {
    this.form = this.fb.group({
      arrivalDate: [null, Validators.required],
      departureDate: [null, Validators.required],
      clientId: [null, Validators.required],
      hotelId: [null, Validators.required],
      notes: [''],
      accommodations: this.fb.array([]),
      payments: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addAccommodation();
    this.addPayment();
    this.loadDropdowns();
  }

  loadDropdowns() {
    this.clientsService.getAll().subscribe(data => this.clients = data);
    this.hotelsService.getAll().subscribe(data => this.hotels = data);
    this.hotelRoomsService.getAll({}).subscribe(data => this.roomTypes = data);
    this.feedingTypesService.getAll().subscribe(data => this.feedingTypes = data);
    this.paymentTypesService.getAll().subscribe(data => this.paymentTypes = data);
    this.paymentChannelsService.getAll().subscribe(data => this.paymentChannels = data);
  }

  get accommodations() {
    return this.form.get('accommodations') as FormArray;
  }

  get payments() {
    return this.form.get('payments') as FormArray;
  }

  addAccommodation() {
    this.accommodations.push(this.fb.group({
      roomType: [null, Validators.required],
      feeding: [null, Validators.required],
      roomsCount: [1, Validators.required],
      amount: [null, Validators.required],
      adults: [1, Validators.required],
      children: [0],
      babies: [0]
    }));
  }

  removeAccommodation(i: number) {
    this.accommodations.removeAt(i);
  }

  addPayment() {
    this.payments.push(this.fb.group({
      amount: [null, Validators.required],
      type: ['Вноска', Validators.required],
      paymentMethod: [null, Validators.required],
      paymentDate: [null, Validators.required],
      isPaid: [false]
    }));
  }

  removePayment(i: number) {
    this.payments.removeAt(i);
  }

  submit(addAnother = false) {
    if (this.form.invalid) return;
    this.reservationsService.addEdit(this.form.value).subscribe({
      next: () => {
        if (addAnother) {
          this.form.reset();
          this.accommodations.clear();
          this.payments.clear();
          this.addAccommodation();
          this.addPayment();
        } else {
          // TODO: redirect or show success
        }
      }
    });
  }
}