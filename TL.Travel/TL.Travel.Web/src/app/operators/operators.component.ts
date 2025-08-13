import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsService } from '../api/operators.service';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  operators: any[] = [];
  loading = false;

  constructor(private operatorsService: OperatorsService) {}

  ngOnInit(): void {
    this.fetchOperators();
  }

  fetchOperators() {
    this.loading = true;
    this.operatorsService.getAll().subscribe({
      next: (data) => { this.operators = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
