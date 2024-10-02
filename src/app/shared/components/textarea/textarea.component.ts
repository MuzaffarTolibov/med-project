import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() customClass: string = '';
  @Input() placeHolder: string | undefined;
  @Input() textareaClass: string = ''
}
