import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
      redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./main.component').then(m => m.MainComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

