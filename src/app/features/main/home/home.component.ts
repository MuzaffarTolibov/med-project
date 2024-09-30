import { Component } from '@angular/core';
import { FormComponent } from "../../../shared/components/form/form.component";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, InfoCardComponent, ButtonComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
