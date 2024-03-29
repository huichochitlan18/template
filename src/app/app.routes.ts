import { Routes } from '@angular/router';
import { pagesRoutes } from './pages/pages.routes';
import { authRoutes } from './auth/auth.routes';
import { NotFoundComponent } from './pages';

export const routes: Routes = [
    { path: 'auth', loadChildren: () => authRoutes },
    { path: '', loadChildren: () => pagesRoutes },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', loadComponent: () => NotFoundComponent },
];
