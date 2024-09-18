import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() title: string = '';
  @Input() moreDetail: boolean = false;
  @Input() numberCard: number | undefined;
  @Input() time: string | undefined;
  @Input() days: string | undefined;
  @Input() price: number | undefined;
  @Input() cardClass: string | undefined;
  @Input() customClass: string = '';
}
