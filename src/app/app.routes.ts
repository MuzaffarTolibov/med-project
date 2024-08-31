import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/main/home/home.component').then(m => m.HomeComponent),
  }
];
