import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavContainer, MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuComponent } from '../../components/menu/menu.component';
import { Menu } from '../../components/menu/interface/menu.interface';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MatSidenavContainer, MatSidenav, MatToolbar, MatIconModule, MatButtonModule, MatSidenavModule, MenuComponent, MatSlideToggleModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})

export default class MaterialComponent implements OnInit {

  themeService: ThemeService = inject(ThemeService);
  menu: Menu = [
    {
      title: 'Dashboard',
      icon: 'home',
      link: './',
      color: '#ff7f0e',
    },
    {
      title: 'Usuarios',
      icon: 'add',
      link: './users',
      color: '#ff7f0e',
    },
    {
      title: 'Usuario',
      icon: 'add',
      link: './user',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'user',
          icon: 'money',
          link: './user',
          color: '#ff7f0e'
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers'
        }
      ]
    },
    {
      title: 'login',
      icon: 'add',
      link: './auth/login',
      color: '#ff7f0e',
    },
    

  ];

  ngOnInit(): void {

  }

  logout(): void {

  }

  setTheme(theme: string) {

  }
  toggleTheme() {
    this.themeService.updateTheme();
  }
}
