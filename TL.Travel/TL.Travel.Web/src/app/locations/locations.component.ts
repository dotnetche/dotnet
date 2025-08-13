import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService } from '../api/locations.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: any[] = [];
  loading = false;

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.fetchLocations();
  }

  fetchLocations() {
    this.loading = true;
    this.locationsService.getAll().subscribe({
      next: (data) => { this.locations = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
