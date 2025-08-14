
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelsService } from '../api/hotels.service';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: any[] = [];
  filteredHotels: any[] = [];
  loading = false;
  searchTerm = '';
  pageSize = 10;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit(): void {
    this.fetchHotels();
  }

  fetchHotels() {
    this.loading = true;
    this.hotelsService.getAll().subscribe({
      next: (data) => { 
        this.hotels = data || []; 
        this.filteredHotels = [...this.hotels];
        this.loading = false; 
      },
      error: (error) => { 
        console.error('Error fetching hotels:', error);
        this.hotels = [];
        this.filteredHotels = [];
        this.loading = false; 
      }
    });
  }

  onSearch() {
    if (!this.searchTerm.trim()) {
      this.filteredHotels = [...this.hotels];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredHotels = this.hotels.filter(hotel =>
      hotel.name?.toLowerCase().includes(term) ||
      hotel.location?.toLowerCase().includes(term)
    );
  }

  addHotel() {
    console.log('Add hotel clicked');
  }

  editHotel(hotel: any) {
    console.log('Edit hotel:', hotel);
  }

  deleteHotel(hotel: any) {
    console.log('Delete hotel:', hotel);
  }
}
