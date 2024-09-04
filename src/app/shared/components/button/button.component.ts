import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit{
  @Input() title: string | undefined;
  @Input() customStyle: {[key:string]: any} | undefined;
  @Input() btnClass: string | undefined;
  @Input() customClass: string = '';
  @Input() icon: string | undefined;
  @Output() clicked = new EventEmitter<MouseEvent>();
  @Output() dbclick = new EventEmitter<string>();

  imgPath: string = '';

  constructor() {
  }

  ngOnInit() {
    this.imgPath = `assets/btn-icon/${this.icon}.svg`;
  }
}
