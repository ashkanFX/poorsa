import {Routes} from '@angular/router';

export const routes: Routes = [

  {
    path: 'home',
    loadComponent: () => import('./routes/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'main',
        loadComponent: () => import('./routes/layout/main-page/main-page.component').then(m => m.MainPageComponent),
      },
      {
        path: 'product',
        loadComponent: () => import('./routes/layout/product/product.component').then(m => m.ProductComponent),
      },
    ]
  },

  {
    path: '', redirectTo: 'home/main', pathMatch: 'full'
  },
];
