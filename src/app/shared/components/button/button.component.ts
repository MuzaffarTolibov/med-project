import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title: string | undefined;
  @Input() customStyle: {[key:string]: any} | undefined;
  @Input() btnClass: string | undefined;
  @Input() customClass: string = '';
  @Output() clicked = new EventEmitter<MouseEvent>();
  @Output() dbclick = new EventEmitter<string>();
}
