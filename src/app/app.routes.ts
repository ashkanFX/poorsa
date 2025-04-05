import {Routes} from '@angular/router';

export const routes: Routes = [

  {
    path: 'main',
    loadComponent: () => import('./routes/layout/main-page/main-page.component').then(m => m.MainPageComponent),
  },


  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
];
