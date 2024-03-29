import { Routes } from '@angular/router';
import MaterialComponent from '../layout/layout/material/material.component';
import LoginComponent from '../auth/pages/login/login.component';
import { DashboardComponent, UserComponent, UsersComponent } from '.';

export const pagesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => MaterialComponent,
        children: [
            {
                path: '',
                loadComponent: () => DashboardComponent
            },
            {
                path: 'login',
                loadComponent: () => LoginComponent
            },
            {
                path: 'user',
                loadComponent: () => UserComponent
            },
            {
                path: 'users',
                loadComponent: () => UsersComponent
            },
            { path: '**', redirectTo: '' },
        ],
    },
];

