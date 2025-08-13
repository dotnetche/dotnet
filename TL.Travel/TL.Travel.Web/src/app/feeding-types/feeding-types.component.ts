import { Component, OnInit } from '@angular/core';
import { FeedingTypesService } from '../api/feeding-types.service';

@Component({
  selector: 'app-feeding-types',
  templateUrl: './feeding-types.component.html',
  styleUrls: ['./feeding-types.component.css']
})
export class FeedingTypesComponent implements OnInit {
  feedingTypes: any[] = [];
  loading = false;

  constructor(private feedingTypesService: FeedingTypesService) {}

  ngOnInit(): void {
    this.fetchFeedingTypes();
  }

  fetchFeedingTypes() {
    this.loading = true;
    this.feedingTypesService.getAll().subscribe({
      next: (data) => { this.feedingTypes = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
