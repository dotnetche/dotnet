import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTypesService } from '../api/payment-types.service';

@Component({
  selector: 'app-payment-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.css']
})
export class PaymentTypesComponent implements OnInit {
  paymentTypes: any[] = [];
  loading = false;

  constructor(private paymentTypesService: PaymentTypesService) {}

  ngOnInit(): void {
    this.fetchPaymentTypes();
  }

  fetchPaymentTypes() {
    this.loading = true;
    this.paymentTypesService.getAll().subscribe({
      next: (data) => { this.paymentTypes = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
