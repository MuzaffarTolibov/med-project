import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/layout/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MenuComponent,
    RouterOutlet,
    FooterComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
