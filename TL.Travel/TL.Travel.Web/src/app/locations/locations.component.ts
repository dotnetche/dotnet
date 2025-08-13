import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../api/locations.service';

@Component({
  selector: 'app-locations',
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
