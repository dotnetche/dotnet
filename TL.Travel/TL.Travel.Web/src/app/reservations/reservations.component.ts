import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../api/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: any[] = [];
  loading = false;

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations() {
    this.loading = true;
    this.reservationsService.getAll().subscribe({
      next: (data) => { this.reservations = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
