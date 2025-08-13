import { Component, OnInit } from '@angular/core';
import { ExtrasService } from '../api/extras.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {
  extras: any[] = [];
  loading = false;

  constructor(private extrasService: ExtrasService) {}

  ngOnInit(): void {
    this.fetchExtras();
  }

  fetchExtras() {
    this.loading = true;
    this.extrasService.getAll().subscribe({
      next: (data) => { this.extras = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
