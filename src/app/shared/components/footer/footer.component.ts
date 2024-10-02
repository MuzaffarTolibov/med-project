import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { TextareaComponent } from "../textarea/textarea.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [InputComponent, TextareaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
