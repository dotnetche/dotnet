import { Component, OnInit } from '@angular/core';
import { HotelRoomsService } from '../api/hotel-rooms.service';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.css']
})
export class HotelRoomsComponent implements OnInit {
  hotelRooms: any[] = [];
  loading = false;

  constructor(private hotelRoomsService: HotelRoomsService) {}

  ngOnInit(): void {
    this.fetchHotelRooms();
  }

  fetchHotelRooms() {
    this.loading = true;
    this.hotelRoomsService.getAll({}).subscribe({
      next: (data) => { this.hotelRooms = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
