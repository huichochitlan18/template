import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('../layout/login/login.component'),
        children: [
            {
                path: 'login',
                loadComponent: () => import('./pages/login/login.component')
            },
        ],
    },
];

