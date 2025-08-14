
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="sidebar">
      <div class="p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-8">TL Travel</h2>
        <nav class="space-y-2">
          <a routerLink="/clients" routerLinkActive="active" class="nav-link">
            <span class="material-icons">people</span>
            <span>Клиенти</span>
          </a>
          <a routerLink="/operators" routerLinkActive="active" class="nav-link">
            <span class="material-icons">business</span>
            <span>Туроператори</span>
          </a>
          <a routerLink="/hotels" routerLinkActive="active" class="nav-link">
            <span class="material-icons">hotel</span>
            <span>Хотели</span>
          </a>
          <a routerLink="/hotel-rooms" routerLinkActive="active" class="nav-link">
            <span class="material-icons">bed</span>
            <span>Стаи</span>
          </a>
          <a routerLink="/locations" routerLinkActive="active" class="nav-link">
            <span class="material-icons">location_on</span>
            <span>Дестинации</span>
          </a>
          <a routerLink="/reservations" routerLinkActive="active" class="nav-link">
            <span class="material-icons">book_online</span>
            <span>Резервации</span>
          </a>
          <a routerLink="/feeding-types" routerLinkActive="active" class="nav-link">
            <span class="material-icons">restaurant</span>
            <span>Изхранване</span>
          </a>
          <a routerLink="/payment-types" routerLinkActive="active" class="nav-link">
            <span class="material-icons">payment</span>
            <span>Плащания</span>
          </a>
          <a routerLink="/extras" routerLinkActive="active" class="nav-link">
            <span class="material-icons">add_circle</span>
            <span>Екстри</span>
          </a>
        </nav>
      </div>
    </div>
  `,
  styles: [`
    .nav-link {
      @apply flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors;
    }
    .nav-link.active {
      @apply bg-blue-50 text-blue-600;
    }
  `]
})
export class SidebarComponent {}
