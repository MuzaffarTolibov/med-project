import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./features/main/main.routes').then(m => m.MAIN_ROUTES)
  }
];
