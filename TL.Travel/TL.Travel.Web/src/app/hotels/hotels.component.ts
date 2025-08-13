import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsService } from '../api/hotels.service';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: any[] = [];
  loading = false;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit(): void {
    this.fetchHotels();
  }

  fetchHotels() {
    this.loading = true;
    this.hotelsService.getAll().subscribe({
      next: (data) => { this.hotels = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
