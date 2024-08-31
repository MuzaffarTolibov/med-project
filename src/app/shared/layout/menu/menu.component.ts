import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { ButtonComponent } from "../../components/button/button.component";

interface MenuItem {
  label: string;
  routerlink: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  model: MenuItem[] = [];
  phone: string = '+7 861 201-22-03';

  constructor() {}

  ngOnInit(): void {
    this.model = [
      {
        label: 'Главная',
        routerlink: '/home'
      },
      {
        label: 'Курсы',
        routerlink: '/'
      },
      {
        label: 'Автор курса',
        routerlink: '/'
      },
      {
        label: 'Оборудование',
        routerlink: '/'
      },
      {
        label: 'Расписание',
        routerlink: '/'
      },
      {
        label: 'Отзывы',
        routerlink: '/'
      },
      {
        label: 'Галерея',
        routerlink: '/'
      },
      {
        label: 'Документы',
        routerlink: '/'
      },
      {
        label: 'Клиника',
        routerlink: '/'
      },
      {
        label: 'Форум',
        routerlink: '/'
      },
      {
        label: 'Информация',
        routerlink: '/'
      }
    ]
  }
}
