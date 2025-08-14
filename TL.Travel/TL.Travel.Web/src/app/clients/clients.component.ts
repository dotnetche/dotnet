
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientsService } from '../api/clients.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];
  filteredClients: any[] = [];
  loading = false;
  searchTerm = '';
  pageSize = 10;

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients() {
    this.loading = true;
    this.clientsService.getAll().subscribe({
      next: (data) => { 
        this.clients = data || []; 
        this.filteredClients = [...this.clients];
        this.loading = false; 
      },
      error: (error) => { 
        console.error('Error fetching clients:', error);
        this.clients = [];
        this.filteredClients = [];
        this.loading = false; 
      }
    });
  }

  onSearch() {
    if (!this.searchTerm.trim()) {
      this.filteredClients = [...this.clients];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredClients = this.clients.filter(client =>
      client.name?.toLowerCase().includes(term) ||
      client.email?.toLowerCase().includes(term) ||
      client.phone?.toLowerCase().includes(term)
    );
  }

  onPageSizeChange() {
    // Implementation for pagination if needed
  }

  addClient() {
    // TODO: Open add client modal/form
    console.log('Add client clicked');
  }

  editClient(client: any) {
    // TODO: Open edit client modal/form
    console.log('Edit client:', client);
  }

  deleteClient(client: any) {
    // TODO: Show confirmation dialog
    console.log('Delete client:', client);
  }
}
