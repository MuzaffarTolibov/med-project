import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  @Input() placeHolder: string = '';
  @Input() icon: string | undefined;
  @Input() inputClass: string | undefined;
  @Input() customClass: string | undefined;
  @Input() typeInput: string = 'text';

  imgPath: string = '';

  ngOnInit(): void {
    this.imgPath = `assets/input-icons/${this.icon}.svg`
  }
}
